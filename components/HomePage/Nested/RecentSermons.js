import styles from "./RecentSermons.module.css";
import Image from "next/image";
import react, {useState, useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';

const RecentSermons = ({posts}) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const mappedSermons = posts.reverse().map((post) => (
    <Link href={`/sermons/${post.slug}`}  key={post.slug} passHref>
      <div className={styles.sermons}>
    <div className={styles.img}>
      <Image src={post.featuredImage.url} alt="Dummy for now" layout="fill" quality={50} />
    </div>
    <div className={styles.content}>
      <div className={styles.preacher}>
        Message by: <span>{post.author.name}</span>
      </div>
      <div className={styles.message}>
        Topic: <span>{post.title}</span>
      </div>
    </div>
  </div>
    </Link>
  ))

  return (
    <section data-aos="fade-up" className={styles.container}>
      <div data-aos="fade-right" className={styles.head}>Recent Sermons</div>
      <div className={styles.sermonsDiv}>
      {mappedSermons}
      </div>
    </section>
  );
};

export default RecentSermons;
