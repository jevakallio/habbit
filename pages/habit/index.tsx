import Layout from "../../components/Layout";
import { withRouter } from "next/router";
import withApollo from "../../client/withApollo";

import Bird from "../../components/Bird";

const Habit = withApollo(
  withRouter(props => (
    <Layout>This is your Habit: {props.router.query.id}</Layout>
  ))
);

export default Habit;
