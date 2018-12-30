import Head from "next/head";
import Header from "./Header";
import Content from "./Content";
import { BirdsWorld } from "./BirdsEye";
const Layout = ({ children, header = true }) => (
  <div>
    <Head>
      <title>Habbit</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      />
    </Head>
    <BirdsWorld>
      {header && <Header />}
      {header ? <Content>{children}</Content> : children}
    </BirdsWorld>
    <style jsx global>{`
      html {
        box-sizing: border-box;
      }
      body {
        font-family: "Helvetica Neue", Helvetica, "Liberation Sans", Roboto,
          Arial, sans-serif;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
    `}</style>
  </div>
);

export default Layout;
