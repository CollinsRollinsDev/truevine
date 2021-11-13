import React, {useState, useEffect} from "react";
import styles from "./RecentPosts.module.css";
import Image from "next/image";
import moment from "moment";
import { getRecentPosts } from "../ApiRequests/getSermonPageBlogs";
import { getSimilarPosts } from "../ApiRequests/getSermonPageBlogs";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link'

const RecentPosts = ({categories, slug}) => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if(slug){
            getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result))
        } else{
            getRecentPosts().then((result) => setRelatedPosts(result))
        }

        // return () => {
        //     cleanup
        // }
    }, [slug])

    console.log("related posts are: ",relatedPosts)

    const postsMapped = relatedPosts.reverse().map(post => (
          <Link key={post.slug} href={`/sermons/${post.slug}`} passHref>
        <section  data-aos="fade-up" className={styles.mappedReturned}>
          <div className={styles.imgSide}>
          <Image
            src={post.featuredImage.url}
            alt="Dummy for now"
            layout="fill"
            quality={50}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.date}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 24 24"
            >
              <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
            </svg>
            <div>{moment(post.createdAt).format('MMM DD YYYY')}</div>
          </div>

          <div className={styles.title}>
              {post.title}
          </div>

          <div className={styles.subcription}>
              <div>Sermon by: <span>{post.author.name}</span></div>
              <div>Category: {post.categories.name}</div>
          </div>
        </div>
      </section>
          </Link>
    ))

  return (
    <section  data-aos="zoom-in" className={styles.recentBox}>
      <h1>Recent Posts</h1>
      <section className={styles.mapped}>
       {postsMapped}
      </section>
    </section>
  );
};

export default RecentPosts;
