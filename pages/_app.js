import MainLayout from '../src/components/layout/main-layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>)
 
  return getLayout(<Component {...pageProps} />)

}

export default MyApp
