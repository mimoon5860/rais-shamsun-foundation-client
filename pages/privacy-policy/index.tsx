import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from 'react-bootstrap';

const PrivacyPolicy: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Privacy-Policy | Rais-Shamsun Foundation</title>
        <meta name="description" content="Privacy and Policy of Rais-Shamsun Foundation" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <h1 className='text-center page-header py-3 text-white'>About</h1>
      </div>
      <Container>
        <div>
          <span>Conditions of Use:</span><br />
          <p> Using of the Rais-Shamsun Foundation website constitutes agreement to our terms of use. We encourage you to review the following information carefully.
            Trademarks:

            The Rais-Shamsun Foundation and other marks indicated on our site are trademarks owned exclusively by the Rais-Shamsun Foundation. The use of these trademarks and trade dress is prohibited if used in connection with the sale of any product or service that is not the Rais-Shamsun Foundation’s, in any manner that seeks to disparages or discredit the Rais-Shamsun Foundation or in any manner that may cause confusion among our customers.</p>
        </div>

        <div>
          <span>Copyright:</span><br />
          <p>All content on this website is the exclusive property of the Rais-Shamsun Foundation. Said content includes the Rais-Shamsun Foundation’s generated text, graphics, logos, icons, images, audio and video clips, digital downloads, and software. Our content is protected by Bangladesh and international copyright laws and we reserve all rights contained therein. In case of dispute or infringement, we will rigorously defend our rights to this material.</p>
        </div>

        <div>
          <span>Applicable Law:</span><br />
          <p> By visiting www.rais-shamsunfoundation.org, you agree that the laws of Bangladesh, without regard to principles of conflict of laws, will govern these Conditions of Use and any dispute of any sort that might arise between you and the Rais-Shamsun Foundation.
          </p>
        </div>
        <div>
          <span> Changes In Policy:</span><br />
          <p>
            The Rais-Shamsun Foundation reserves the right to modify, alter, delete and update these policies at any time we see fit. Such alterations do not nullify our rights if infringements or breaches occurred under a previous version of these conditions.</p>
        </div>
      </Container>
    </div>
  )
}

export default PrivacyPolicy;
