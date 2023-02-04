import type { NextPage } from 'next'
import Head from 'next/head'

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contact | Rais-Shamsun Foundation</title>
        <meta name="description" content="Contact page of Rais-Shamsun Foundation" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 className='text-center contact-header py-3 text-white'>Contact</h1>
    </div>
  )
}

export default Contact