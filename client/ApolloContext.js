import React from "react";
import { ApolloProvider } from "react-apollo";
import { AuthConsumer } from "./AuthContext";
import { createClient } from "./apollo";

export class ApolloContextProvider extends React.Component {
  constructor(props) {
    super(props);
    const { host, auth } = props;
    const uri =
      host.split(":")[0] == "localhost"
        ? "http://localhost:4000/api/graphql"
        : "/api/graphql";
    this.client = createClient(uri, auth);
  }
  render() {
    return (
      <ApolloProvider client={this.client}>
        {this.props.children}
      </ApolloProvider>
    );
  }
}
