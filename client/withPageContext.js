import { ApolloContextProvider } from "./ApolloContext";
import { AuthProvider, AuthConsumer } from "./AuthContext";
import { parseCookies, setCookie, destroyCookie } from "nookies";

import { createClient } from "../client/apollo";
import Auth from "../client/Auth";

// this hacky piece of shit right here gives us the
// current request host on server and the client, so
// that we can set the apollo url correctly.
//
// @TODO destroy this once we can inject propect environment
// variables into the runtime
const getInitialProps = ctx => {
  const req = ctx.req;
  const cookies = parseCookies(ctx);
  if (!req) {
    return {
      cookies,
      isServer: false,
      protocol: document.location.protocol.split(":")[0],
      host: document.location.host
    };
  }

  const host = req.headers.host;

  const auth = new Auth("http://localhost:3000", cookies);
  const client = createClient("http://localhost:4000", auth);

  console.log(client.extract());
  return {
    cookies,
    isServer: true,
    protocol: req.headers.referer
      ? req.headers.referer.split(":")[0]
      : host.includes("localhost") // dirty assumption
      ? "http"
      : "https",
    host
  };
};

export default Component => {
  const Page = ({ cookies, protocol, host, isServer, ...props }) => (
    <AuthProvider baseUrl={`${protocol}://${host}`} cookies={cookies}>
      <AuthConsumer>
        {auth => (
          <ApolloContextProvider host={host} auth={auth}>
            <Component {...props} />
          </ApolloContextProvider>
        )}
      </AuthConsumer>
    </AuthProvider>
  );

  Page.getInitialProps = getInitialProps;

  return Page;
};
