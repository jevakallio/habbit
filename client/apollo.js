import ApolloClient from "apollo-boost";
import fetch from "isomorphic-unfetch";

export const createClient = uri => {
  return new ApolloClient({
    fetch,
    uri
  });
};
