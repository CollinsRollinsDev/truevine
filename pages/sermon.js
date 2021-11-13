import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sermon from '../components/Sermons/Sermon'
import { getPosts } from '../components/ApiRequests/getSermonPageBlogs'

export default function Home({posts}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>TVCC Sermon Page</title>
        <meta name="description" content="Mount of Grace and Glory" />
        <link rel="icon" href="/churchLogo.png" />
      </Head>
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    
    <Sermon posts={posts}/>
    </div>
  )
}


export async function getStaticProps() {
  let posts = (await getPosts()) || []
  return{
    props: {
      posts
    }
  }
}