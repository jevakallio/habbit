import Link from "next/link";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { Formik } from "formik";
import withPageContext from "../../client/withPageContext";

const UserHabitsQuery = gql`
  query UserHabitsQuery($userId: ID!) {
    user(id: $userId) {
      id
      habits {
        id
        task
        avatarName
        avatarColor
      }
    }
  }
`;

const Index = withPageContext(() => (
  <Layout>
    <h2>Your Habbits</h2>
    <Query
      query={UserHabitsQuery}
      variables={{ userId: "cjq6mfok7sb260a985wz7qsn5" }}
    >
      {({ data, error, loading }) => {
        if (error) {
          return <div>Error: {error.message}</div>;
        }

        if (loading) {
          return <div>...</div>;
        }

        if (!data.user) {
          return <div>Oops... nothing found</div>;
        }

        const habits = data.user.habits;

        if (habits.length === 0) {
          return <div>You have no Habbits</div>;
        }

        return (
          <div>
            {habits.map(habit => (
              <div key={habit.id} style={{ padding: "10px" }}>
                <Link href={`/habit?id=${habit.id}`}>
                  <a>
                    {habit.task} ({habit.id})
                  </a>
                </Link>
              </div>
            ))}
          </div>
        );
      }}
    </Query>
    <Link href="/habits/create">
      <Button>Adopt a new Habbit</Button>
    </Link>
  </Layout>
));

export default Index;
