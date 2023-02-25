import type { NextPage } from 'next'
import Head from 'next/head'
import { Card, Col, Container, Row } from 'react-bootstrap';

const Videos: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Videos | Rais-Shamsun Foundation</title>
        <meta name="description" content="Videos page of Rais-Shamsun Foundation" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 className='text-center page-header py-3 text-white'>Videos</h1>
      <div >
        <Container className="my-4">
            <Row xs={1} md={3} className="g-3">
              <Col >
              <Card className="h-100 border-0 hero-bottom-text ">
                <Card.Body>
                  <iframe width="100%" height="250" src="https://www.youtube.com/embed/VfGCk9rVePo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
                  <Card.Text>
                    Rais-Shamsun Foundation&apos;s intro video
                  </Card.Text>
                </Card.Body>
              </Card>
               
              </Col>
              <Col >
              <Card className="h-100 border-0 hero-bottom-text ">
                <Card.Body>
                  <iframe width="100%" height="250" src="https://www.youtube.com/embed/CNKcnXw1-3s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <Card.Text>
                    Rais-Shamsun Foundation&apos;s building structure
                  </Card.Text>
                </Card.Body>
              </Card>
               
              </Col>
            </Row>
        </Container>
    </div>
    </div>
  )
}

export default Videos;
