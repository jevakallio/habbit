import Head from "next/head";
const Layout = ({ children }) => (
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
      <style>{`
        body {
          background-color: #133bfe;
        }
      `}</style>
    </Head>
    {children}
  </div>
);

export default Layout;
