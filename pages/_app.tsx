import '../styles/globals.css'
import '../styles/contact.css'
import '../styles/home.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-photo-view/dist/react-photo-view.css';
import HomeLayout from '../components/layouts/HomeLayout';
import { appWithTranslation } from 'next-i18next'
function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  </>
}

export default appWithTranslation(MyApp);
