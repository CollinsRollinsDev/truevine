import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '../components/HomePage/HomePage'
import { getRecentPosts } from '../components/ApiRequests/getSermonPageBlogs'
import { getEvents } from '../components/ApiRequests/getSermonPageBlogs'
export default function Home({posts, events}) {

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Truevine Christian Centre</title>
        <meta name="description" content="Mount of Grace and Glory" />
        <link rel="icon" href="/churchLogo1.png" />
      </Head>
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    <HomePage posts={posts} events={events}/>
    </div>
  )
}


export async function getStaticProps() {
  let posts = (await getRecentPosts()) || []
  let events = (await getEvents()) || []
  return{
    props: {
      posts, events
    }
  }
}