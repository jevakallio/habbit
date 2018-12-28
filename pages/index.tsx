import Teaser from "../components/Teaser";
import Layout from "../components/Layout";
import withApollo from "../client/withApollo";

const Index = withApollo(() => (
  <Layout header={false}>
    <Teaser />
  </Layout>
));

export default Index;
