import Link from "next/link";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { Formik } from "formik";
import withApollo from "../../client/withApollo";

const Index = withApollo(() => (
  <Layout>
    <h2>Your Habbits</h2>
    <Link href="/habits/create">
      <Button>Adopt a new Habbit</Button>
    </Link>
  </Layout>
));

export default Index;
