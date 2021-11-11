import React from "react";
import styles from "./Layer2.module.css";
import Image from "next/image";
import {posts} from './posts';


const Layer2 = () => {

    const sermons = posts.map(post => (
        <section className={styles.contain}>
        <section className={styles.imgSpace}>
          <section className={styles.imgs}>
            <Image 
                          src={post.image}
                          alt="Dummy for now"
                          layout="fill"
                          quality={50}
                          />
          </section>
          <section className={styles.imgPreacher}>
              <div className={styles.preacherImg}>
              <Image 
                          src={post.profileImage}
                          alt="Dummy for now"
                          layout="fill"
                          quality={50}
                          />
              </div>
              <div className={styles.preacherName}>
                  Preacher - {post.preacher}
              </div>
          </section>
        </section>
        <section className={styles.textSpace}>
          <section className={styles.first}>
            <div className={styles.dateSpace}>{post.date}</div>
            <div className={styles.titleSpace}>
              {post.title}
            </div>
            <div className={styles.tagSpace}>{post.tag}</div>
            <div className={styles.excerptSpace}>
           {post.excerpt}
            </div>
          </section>
          <section className={styles.second}>
              <div className={styles.readmore}>
                  Read More
              </div>
              <div className={styles.comment}>
                  Comments
              </div>
          </section>
        </section>
      </section>
    ))

  return (
    <section className={styles.bigBox}>
      <section className={styles.main}>
      
        {sermons}

      </section>
      <section className={styles.sidebar}></section>
    </section>
  );
};

export default Layer2;
