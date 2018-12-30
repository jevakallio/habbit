import Layout from "../../components/Layout";
import withPageContext from "../../client/withPageContext";

import { BirdsWorld, BirdsEye } from "../../components/BirdsEye";
import Bird from "../../components/Bird";
export default withPageContext(() => (
  <Layout header={false}>
    <BirdsWorld>
      <div className="World">
        <div className="Cage">
          <Bird color="blue" />
        </div>
        <div className="Eyes">
          <BirdsEye size={80} />
          <BirdsEye size={120} />
          <BirdsEye size={50} />
          <BirdsEye size={60} />

          <BirdsEye size={100} />
          <BirdsEye size={75} />
          <BirdsEye size={110} />
        </div>
        <div className="Cage2">
          <Bird />
        </div>
      </div>
    </BirdsWorld>
    <style jsx>{`
      .World {
        padding: 40px;
        background-color: #ccc;
        display: flex;
        flex-grow: 1;
        align-items: space-between;
        justify-content: space-between;
        height: 100vh;
      }

      .Eyes {
        margin-left: 20px;
        align-items: center;
        justify-content: center;
      }

      .Cage {
        width: 30vw;
      }

      .Cage2 {
        width: 20vw;
        transform: scale(-1, 1);
      }
    `}</style>
  </Layout>
));
