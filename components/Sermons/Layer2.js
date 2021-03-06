import React, {useState, useEffect} from "react";
import styles from "./Layer2.module.css";
import Image from "next/image";
import RecentPosts from "../relations/RecentPosts";
import moment from "moment";
import Categories from "../relations/Categories";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';

const Layer2 = ({posts}) => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); 

  console.log(posts);

    const sermons = posts.map((post, index) => (
       
        <section data-aos="fade-up" key={post.node.slug} className={styles.contain}>
        <section className={styles.imgSpace}>
          <section className={styles.imgs}>
            <Image 
                          src={post.node.featuredImage.url}
                          alt="Dummy for now"
                          layout="fill"
                          quality={50}
                   />
          </section>
          <section className={styles.imgPreacher}>
              <div className={styles.preacherImg}>
              <Image 
                          src={post.node.author.photo.url}
                          alt="Dummy for now"
                          layout="fill"
                          quality={50}
                          />
              </div>
              <div className={styles.preacherName}>
                  Preacher - {post.node.author.name}
              </div>
          </section>
        </section>
        <section className={styles.textSpace}>
          <section className={styles.first}>
            {/* <div className={styles.dateSpace}>{post.date}</div> */}
            <div className={styles.dateSpace}>{moment(post.node.createdAt).format('MMM DD YYYY')}</div>
            <div className={styles.titleSpace}>
              {post.node.title}
            </div>
            {/* <div className={styles.tagSpace}>{post.tag}</div> */}
            <div className={styles.tagSpace}>faith / wealth / word / business</div>
            <div className={styles.excerptSpace}>
           {post.node.excerpt}
            </div>
          </section>
          <section className={styles.second}>
            <Link href={`/sermons/${post.node.slug}`} passHref >
              <div className={styles.readmore}>
                  Read More
              </div>
            </Link>


              <Link href={`/sermons/${post.node.slug}#showing-comment`}>
              <div className={styles.comment}>
                  Comments
              </div>
              </Link>

          </section>
        </section>
      </section>
    ))

  return (
    <section className={styles.bigBox}>
      <section className={styles.main}>
        {sermons}
      </section>
      <section className={styles.sidebar}>
        <RecentPosts />
        <Categories />
      </section>
    </section>
  );
};

export default Layer2;



