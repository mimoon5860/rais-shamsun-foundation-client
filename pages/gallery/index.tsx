import type { NextPage } from 'next'
import Head from 'next/head'

const Gallery: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gallery | Rais-Shamsun Foundation</title>
        <meta name="description" content="Gallery page of Rais-Shamsun Foundation" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 className='text-center contact-header py-3 text-white'>Gallery</h1>
    </div>
  )
}

export default Gallery;
