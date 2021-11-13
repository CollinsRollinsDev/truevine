import React from 'react'
import { getPostDetails, getPosts } from '../../components/ApiRequests/getSermonPageBlogs'
import PostDetail from '../../components/DynamicComponents/PostDetail'
import Header from '../../components/Header/Header'
import styles from '../../styles/PostDetails.module.css'

const PostDetails = ({post}) => {
    return (
        <section className={styles.container}>
            <Header />
            <PostDetail post={post} />
        </section>
    )
}

export default PostDetails

export async function getStaticProps({params}) {
    const data = (await getPostDetails(params.slug))
    return{
      props: {
        post: data
      }
    }
  }

  export async function getStaticPaths() {
    const posts = await getPosts();
    return{
        paths: posts.map(({node: {slug}}) => ({ params: { slug }})),
        fallback: false
    }
  }