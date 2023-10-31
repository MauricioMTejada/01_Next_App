import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/globals.css'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
		<h1>Home Page</h1>
        {/* <h1 className={styles.title}> */}
        <h1>
          Ir a <Link href="/about">About</Link>
        </h1>

        {/* <p className={styles.description}> */}
        <p>
          Get started by editing{' '}
          {/* <code className={styles.code}>pages/index.js</code> */}
          <code>pages/index.js</code>
        </p>
    </MainLayout>
  )
}
