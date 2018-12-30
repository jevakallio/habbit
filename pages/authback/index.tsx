import Router from "next/router";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Layout from "../../components/Layout";
import withPageContext from "../../client/withPageContext";
import AuthContext from "../../client/AuthContext";
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

/*

EMAIL:
email: "jani.evakallio@gmail.com"
email_verified: false
name: "test@foobar.com"
nickname: "test"
picture: "https://s.gravatar.com/avatar/822dd23e8d808f390764b07b125350f6?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png"
sub: "auth0|5c28b380be6dbb7991240516"
updated_at: "2018-12-30T12:01:04.597Z"

TWITTER:
name: "PAPA SMOOSH #TheShippening"
nickname: "PAPA SMOOSH #TheShippening"
picture: "https://pbs.twimg.com/profile_images/1074414240088449030/fAbT29ic_normal.jpg"
sub: "twitter|15930040"
updated_at: "2018-12-30T14:42:29.876Z"

GOOGLE:
email: "jani.evakallio@gmail.com"
email_verified: true
family_name: "Eväkallio"
gender: "male"
given_name: "Jani"
locale: "en"
name: "Jani Eväkallio"
nickname: "jani.evakallio"
picture: "https://lh6.googleusercontent.com/-KB7G60F2fVE/AAAAAAAAAAI/AAAAAAAAAEM/KOqeQ-042Gc/photo.jpg"
sub: "google-oauth2|116731352517842974937"
updated_at: "2018-12-30T14:45:00.428Z"

*/

const CurrentUserQuery = gql`
  {
    me {
      id
    }
  }
`;
// this really should be a lambda instead of a frontend
// component, but that requires usage of the oauth code
// flow, so rolling with simple now.
// https://github.com/auth0/auth0.js#initialize
class Authback extends React.Component {
  static contextType = AuthContext;

  state = {
    loading: true,
    error: null
  };

  // @NOTE: Client-side only
  async componentDidMount() {
    try {
      // relies on url hash being passed
      await this.context.handleAuthentication();

      // fetch user profile details
      const userInfo = await this.context.getUserInfo();

      this.setState({
        loading: false,
        isAuthenticated: this.context.isAuthenticated()
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: `Failed to authenticate: ${e.errorDescription || e.message || e}`
      });
    }
  }

  doFilthyNavigationSideEffect(path: string) {
    Router.replace(path);
  }

  renderError(error) {
    return <div>{error}</div>;
  }

  renderLoadingMessage(message) {
    return <div>{message}</div>;
  }

  renderScreen() {
    if (this.state.error) {
      return this.renderError(this.state.error);
    }

    if (this.state.loading) {
      return this.renderLoadingMessage("Authenticating...");
    }

    return (
      <Query query={CurrentUserQuery}>
        {({ data, loading, error }) => {
          if (error) {
            return this.renderError(error);
          }

          if (loading) {
            return this.renderLoadingMessage("Looking you up...");
          }

          if (data.me) {
            this.doFilthyNavigationSideEffect("/habits");
            return this.renderLoadingMessage("Redirecting you to home page...");
          }
        }}
      </Query>
    );
  }

  render() {
    return <Layout>{this.renderScreen()}</Layout>;
  }
}
export default withPageContext(Authback);
