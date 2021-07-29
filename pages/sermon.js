import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sermon from '../components/Sermons/Sermon'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TVCC Sermon Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/churchLogo.png" />
      </Head>
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    
    <Sermon />
    </div>
  )
}
