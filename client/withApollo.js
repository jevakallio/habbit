import { ApolloProvider } from "react-apollo";
import { createClient } from "./apollo";

let _cachedClient = null;

// when on client, reuse the apollo client on each successive call
export const getOrCreateClient = (isServer, host) => {
  if (!isServer && _cachedClient) {
    return _cachedClient;
  }
  const client = createClient(
    host == "localhost" ? "http://localhost:4000/api/graphql" : "/api/graphql"
  );

  if (!isServer) {
    _cachedClient = client;
  }

  return client;
};

// this hacky piece of shit right here gives us the
// current request host on server and the client, so
// that we can set the apollo url correctly.
//
// @TODO destroy this once we can inject propect environment
// variables into the runtime
const getInitialProps = ({ req }) => {
  if (!req) {
    return {
      isServer: false,
      host: document.location.host.split(":")[0]
    };
  }

  return {
    isServer: true,
    host: req.headers.host.split(":")[0]
  };
};

export default Component => {
  const Page = ({ host, isServer, ...props }) => (
    <ApolloProvider client={getOrCreateClient(isServer, host)}>
      <Component {...props} />
    </ApolloProvider>
  );

  Page.getInitialProps = getInitialProps;

  return Page;
};
