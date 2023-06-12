import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import ParentPage from '../../src/components/layout/parent-page.layout'
import MainLayout from '../../src/components/layout/main-layout'
import Lander from '../../src/components/lander/lander'
export default function Home() {
  const router = useRouter()
  const path = router.pathname
  return (
    <div className={styles.container}>
      <Head>
        <title>Gradely Summer School</title>
        <meta name="description" content="Summer school for gradely" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Lander/>
     
     

    </div>
  )
}
Home.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <ParentPage>{page}</ParentPage>
    </MainLayout>
  )
}
