import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import PrivacyPolicyIndex from '../../components/Mobile/PrivacyPolicy/PrivacyPolicyIndex'
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Privacy Policy on Mobile App</title>
                <meta name="description" content="Privacy Policy on Mobile App" />
                <link rel="icon" href="/churchLogo.png" />
            </Head>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}

            <PrivacyPolicyIndex />

        </div>
    )
}

