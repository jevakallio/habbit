import Teaser from "../components/Teaser";
import Layout from "../components/Layout";
import withPageContext from "../client/withPageContext";

const Index = withPageContext(() => (
  <Layout header={false}>
    <Teaser />
  </Layout>
));

export default Index;
