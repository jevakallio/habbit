import React, { createContext } from "react";
import Auth from "./Auth";

const AuthContext = createContext({
  isAuthenticated() {
    return false;
  },
  login() {
    console.log("Login method not provided in context");
  }
});

class Provider extends React.Component {
  auth = new Auth(this.props.baseUrl);

  render() {
    return (
      <AuthContext.Provider value={this.auth}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const AuthProvider = Provider;
export const AuthConsumer = AuthContext.Consumer;
export default AuthContext;
