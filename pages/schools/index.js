import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Schools() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gradely Summer School</title>
        <meta name="description" content="Summer school for gradely" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}
