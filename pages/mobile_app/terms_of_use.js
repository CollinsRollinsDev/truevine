import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import TermsOfUseIndex from '../../components/Mobile/TermsOfuse/TermsOfUseIndex'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Terms of Use on Mobile App</title>
        <meta name="description" content="Terms of Use on Mobile App" />
        <link rel="icon" href="/churchLogo.png" />
      </Head>
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    
    <TermsOfUseIndex />

    </div>
  )
}

