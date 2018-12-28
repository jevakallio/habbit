import Head from "next/head";
import Logo from "./Logo";
import { colors, layout } from "../theme";

const Content = ({ children }) => (
  <div className="Content">
    <div className="Gutter">{children}</div>
    <style jsx>{`
      .Content {
        max-width: ${layout.maxWidth}px;
        margin: 0 auto;
      }

      .Gutter {
        margin: 0 20px;
      }
    `}</style>
  </div>
);

export default Content;
