import { withRouter } from "next/router";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Layout from "../../components/Layout";
import withPageContext from "../../client/withPageContext";
import Bird from "../../components/Bird";
import HabitDetails from "./HabitDetails";

const HabitQuery = gql`
  query HabitQuery($id: ID!) {
    habit(id: $id) {
      id
      task
      active
      avatarName
      avatarColor
      frequency
      weeklyCount
      weeklySchedule
      health
      user {
        id
      }
    }
  }
`;
const Habit = ({ router }) => (
  <Layout>
    <Query query={HabitQuery} variables={{ id: router.query.id }}>
      {({ data, error, loading }) => {
        if (error) {
          return <div>Error: {error.message}</div>;
        }

        if (loading) {
          return <div>...</div>;
        }

        if (!data.habit) {
          return <div>Oops... No Habit found with ${router.query.id}</div>;
        }

        return <HabitDetails habit={data.habit} />;
      }}
    </Query>
  </Layout>
);

export default withPageContext(withRouter(Habit));
