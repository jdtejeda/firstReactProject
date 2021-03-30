import Head from 'next/head'
import FirstComponent from '../components/firstComponent'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <FirstComponent/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
