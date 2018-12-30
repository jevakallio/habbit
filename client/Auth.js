// src/Auth/Auth.js

import auth0 from "auth0-js";

export default class Auth {
  accessToken;
  idToken;
  expiresAt;

  // cause we cool and lazy
  __singletonInstance;
  static getSingletonInstance(...args) {
    if (this.__singletonInstance__) {
      return this.__singletonInstance;
    }

    return (this.__singletonInstance = new Auth(...args));
  }

  constructor(baseUrl) {
    this.auth0 = new auth0.WebAuth({
      domain: "habbit.eu.auth0.com",
      clientID: "vO7EatTwo0jwnqGd0gH5YW1lA0zXe56U",
      audience: "https://habbit.xyz",
      redirectUri: `${baseUrl}/authback`,
      responseType: "token id_token",
      scope: "openid email profile"
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.isExpired = this.isExpired.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);

    // rehydrate session
    if (typeof localStorage !== "undefined") {
      const expiresAt = localStorage.getItem("auth:expiresAt");
      this.accessToken = localStorage.getItem("auth:accessToken") || null;
      this.idToken = localStorage.getItem("auth:idToken") || null;
      this.expiresAt = expiresAt ? parseInt(expiresAt, 10) : null;
    }
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
        }
      });
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  getUserInfo() {
    return new Promise((resolve, reject) => {
      this.auth0.client.userInfo(this.accessToken, (err, userInfo) => {
        if (err) {
          reject(err);
        } else {
          resolve(userInfo);
        }
      });
    });
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage

    // Set the time that the access token will expire at
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();

    localStorage.setItem("auth:isLoggedIn", "true");
    localStorage.setItem("auth:accessToken", authResult.accessToken);
    localStorage.setItem("auth:idToken", authResult.idToken);
    localStorage.setItem("auth:expiresAt", expiresAt);

    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        alert(
          `Could not get a new token (${err.error}: ${err.error_description}).`
        );
      }
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem("isLoggedIn");
  }

  isExpired() {
    return this.expiresAt && !this.isAuthenticated();
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}
