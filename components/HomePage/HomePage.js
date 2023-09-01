import styles from "./HomePage.module.css";
import Header from "../Header/Header";
import PreBody from "./Nested/PreBody";
import NextEvent from "./Nested/NextEvent";
import RecentSermons from "./Nested/RecentSermons";
import Statements from "./Nested/Statements";
import Head from "next/head";
import LastLayer from "./Nested/LastLayer";
import Footer from "../Footer/Footer";
import AboutTheFounder from "./Nested/AboutTheFounder";

const HomePage = ({ posts, events }) => {
  return (
    <section className={styles.container}>
      {/* <Head>
          <style>
            @import
            url("https://fonts.googleapis.com/css2?family=Lobster+Two:wght@700&display=swap");
          </style>
      </Head> */}
      <Header effect={true} />
      <PreBody />
      <NextEvent events={events.reverse()} />
      <RecentSermons posts={posts} />
      <Statements />
      <LastLayer />
      <AboutTheFounder />
      <Footer />

    </section>
  );
};

export default HomePage;
