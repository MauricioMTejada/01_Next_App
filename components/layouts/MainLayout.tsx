import Head from 'next/head'
import styles from './MainLayout.module.css'
import { Navbar } from '../Navbar'
import { FC, ReactNode } from 'react'

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Mauricio</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>


      <main className={styles.main}>
        {children}
      </main>

    </div>
  )
}
