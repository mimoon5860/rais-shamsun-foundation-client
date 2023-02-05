import type { NextPage } from 'next'
import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'

const Donation: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Donation | Rais-Shamsun Foundation</title>
        <meta name="description" content="Donation page of Rais-Shamsun Foundation" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 className='text-center contact-header py-3 text-white'>Together Let's Make A Change</h1>
      <Container>
        <Row>
          <Col>
          <div>
            <video src="/intro.mp4" controls></video>
          </div>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Donation
