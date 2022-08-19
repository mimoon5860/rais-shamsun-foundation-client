import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeLayout from '../components/layouts/HomeLayout';
function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  </>
}

export default MyApp
