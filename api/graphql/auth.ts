// server.js

import * as jwt from "express-jwt";
import * as jwtAuthz from "express-jwt-authz";
import * as jwksRsa from "jwks-rsa";
import { GraphQLError } from "graphql";

// Authentication middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
export const authMiddleware = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://habbit.eu.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: "https://habbit.xyz",
  issuer: `https://habbit.eu.auth0.com/`,
  algorithms: ["RS256"],
  credentialsRequired: false
});

export const authorized = fn => (parent, args, context, info) => {
  if (!context.user) {
    throw new GraphQLError(
      "Papers please. Unauthorized access.",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      {
        unauthorized: true
      }
    );
  }

  return fn(parent, args, context, info);
};
