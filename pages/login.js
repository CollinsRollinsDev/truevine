import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from '../components/AuthFolder/Login'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TVCC Sign In Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    
    <Login />
    </div>
  )
}

