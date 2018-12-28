import Head from "next/head";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Logo from "./Logo";
import { colors, layout } from "../theme";

const UserQuery = gql`
  {
    user(id: "cjq6mfok7sb260a985wz7qsn5") {
      id
      name
      email
    }
  }
`;

const UserDisplay = ({ children }) => (
  <div className="Name">
    {children}
    <style jsx>{`
      .Name {
        color: ${colors.white};
        font-weight: bold;
      }
    `}</style>
  </div>
);

const Header = ({ children }) => (
  <header className="HeaderBar">
    <div className="HeaderContent">
      <div className="Logo">
        <Logo title="Habbit" />
      </div>
      <Query query={UserQuery}>
        {({ loading, error, data }) => {
          if (error) {
            console.error(error);
            return <UserDisplay>:(</UserDisplay>;
          }
          if (!data || (!data.user && loading)) {
            return <UserDisplay>...</UserDisplay>;
          }

          return <UserDisplay>{data.user.name}</UserDisplay>;
        }}
      </Query>
    </div>
    <style jsx={true}>{`
      .HeaderBar {
        display: flex;
        background-color: ${colors.red};
        height: 4rem;
        padding: 0px 20px;
      }

      .HeaderContent {
        flex: 1;
        max-width: ${layout.maxWidth}px;
        margin: 0 auto;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .Logo {
        width: 3rem;
        height: 3rem;
      }
    `}</style>
  </header>
);

export default Header;
