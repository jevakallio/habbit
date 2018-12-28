import Head from "next/head";
import Logo from "./Logo";
import { colors, layout } from "../theme";

const Header = ({ children }) => (
  <header className="HeaderBar">
    <div className="HeaderContent">
      <div className="Logo">
        <Logo title="Habbit" />
      </div>
      Hi
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
