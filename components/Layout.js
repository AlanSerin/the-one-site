import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Router from "next/router";
import Nprogress from "nprogress";

Router.onRouteChangeStart = (url) => {
  console.log(url);
  Nprogress.start();
};

Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Star Wars Wiki</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
      </Head>
      <Navbar />
      <div>
        <main className={styles.main}>
          {/* <h1>A Star Wars Wiki</h1> */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
