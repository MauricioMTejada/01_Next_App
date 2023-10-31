import Head from 'next/head'
import Image from 'next/image'
// import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { Navbar } from '../../components/Navbar'

export default function ContactPage() {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>Contact - Mauricio</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>


      {/* <main className={styles.main}> */}
      <main>
        <h1>Contact Page</h1>
        {/* <h1 className={styles.title}> */}
        <h1>
          Ir a <Link href="/">Home</Link>
        </h1>

        {/* <p className={styles.description}> */}
        <p>
          Get started by editing{' '}
          {/* <code className={styles.code}>pages/contact.jsx</code> */}
          <code>pages/contact.jsx</code>
        </p>
      </main>

    </div>
  )
}