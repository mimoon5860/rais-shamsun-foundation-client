import type { NextPage } from 'next'
import Head from 'next/head'
import HomeComponent from '../components/homeComponents/HomeComponent'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rais-Shamsun Foundation</title>
        <meta name="description" content="Rais-Shamsun Foundation" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HomeComponent/>
    </div>
  )
}


export default Home
