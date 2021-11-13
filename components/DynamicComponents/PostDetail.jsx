import React, {useState, useEffect} from 'react'
import styles from './PostDetail.module.css';
import RecentPosts from '../relations/RecentPosts';
import Categories from '../relations/Categories';
import Image from 'next/image'
import moment from 'moment';
import AOS from "aos";
import "aos/dist/aos.css";
import CommentForm from '../relations/CommentForm';
import Footer from '../Footer/Footer';

const PostDetail = ({post}) => {

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);


    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
        }
    
        switch (type) {
          case 'heading-three':
            return <h3 key={index} className={styles.heading3}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index} className={styles.paragraph}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index} className={styles.heading4}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'image':
            return (
              <Image
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
              />
            );
          default:
            return modifiedText;
        }
      };

    console.log("individula post is :", post)

    return (
        <section  data-aos="zoom-in" className={styles.container}>
            <section className={styles.main}>
                <div data-aos="fade-up" className={styles.image}>
                <Image 
                          src={post.featuredImage.url}
                          alt="Dummy for now"
                          layout="fill"
                          quality={50}
                    />
                </div>
                <div data-aos="fade-up" className={styles.title}>
                    <div className={styles.titleText}>{post.title}</div>
                    <div className={styles.secondary}>
                        <div className={styles.left}>
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
                        <div className={styles.right}>Authored by: <span>{post.author.name}</span></div>
                    </div>
                </div>

                <section data-aos="fade-up" className={styles.mainContent}>
                    {post.content.raw.children.map((typeObj, index) => {
                        const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex,item.text, item))
                        return getContentFragment(index, children, typeObj, typeObj.type)
                    })}
                </section>
                {/* <CommentForm /> */}
             </section>

             <section className={styles.sidebar}>
                <RecentPosts />
                <Categories />
            </section>
            <Footer />
        </section>
    )
}

export default PostDetail
