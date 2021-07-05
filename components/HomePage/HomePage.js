import styles from "./HomePage.module.css";
import Header from "../Header/Header";
import PreBody from "./Nested/PreBody";
import NextEvent from "./Nested/NextEvent";
import Head from "next/head";

const HomePage = () => {
  return (
    <section className={styles.container}>
        <Head>
          <style>
            @import
            url("https://fonts.googleapis.com/css2?family=Lobster+Two:wght@700&display=swap");
          </style>
      </Head>
      <Header />
      <PreBody />
      <NextEvent />
    </section>
  );
};

export default HomePage;
