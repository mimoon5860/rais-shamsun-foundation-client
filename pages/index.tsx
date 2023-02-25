import type { NextPage } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HomeComponent from '../components/homeComponents/HomeComponent'
import { useTranslation } from 'next-i18next'

const Home: NextPage = () => {
  const { t:translate } = useTranslation('home')
  return (
    <div>
      <Head>
        <title>Rais-Shamsun Foundation</title>
        <meta name="description" content="Rais-Shamsun Foundation" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HomeComponent translate={translate}/>
    </div>
  )
}

interface props{
  locale:string
}

export async function getStaticProps({ locale }:props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'home',
      ])),
    },
  }
}

export default Home
