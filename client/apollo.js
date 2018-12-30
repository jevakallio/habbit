import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-unfetch";
import debounce from "lodash.debounce";

export const createClient = (uri, auth) => {
  const httpLink = createHttpLink({
    fetch,
    uri
  });

  // poor man's access control -- we don't want multiple
  // token renewals all at once. This is not the correct
  // way of doing this, but is by far the fastest to write
  const renewSession = debounce(auth.renewSession, 5000, {
    leading: true,
    trailing: false
  });

  const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    if (auth.isExpired()) {
      await renewSession();
    }

    const token = auth.getAccessToken();

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ""
      }
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  return client;
};
