import { ApolloContextProvider } from "./ApolloContext";
import { AuthProvider, AuthConsumer } from "./AuthContext";

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
      protocol: document.location.protocol.split(":")[0],
      host: document.location.host
    };
  }

  const host = req.headers.host;
  return {
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
  const Page = ({ protocol, host, isServer, ...props }) => (
    <AuthProvider baseUrl={`${protocol}://${host}`}>
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
