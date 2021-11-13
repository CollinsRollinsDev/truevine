import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AuthLogin from '../components/AuthFolder/AuthLogin'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TVCC Sign In Page</title>
        <meta name="description" content="Mount of Grace and Glory" />
        <link rel="icon" href="/churchLogo.png" />
      </Head>
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    
    <AuthLogin />

    </div>
  )
}

