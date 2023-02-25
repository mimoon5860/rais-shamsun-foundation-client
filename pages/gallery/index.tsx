import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Gallery: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gallery | Rais-Shamsun Foundation</title>
        <meta name="description" content="Gallery page of Rais-Shamsun Foundation" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 className='text-center page-header py-3 text-white'>Gallery</h1>
      <div>
        <Container className="my-4">
          <PhotoProvider>
            <Row xs={1} md={4} className="g-5">
              <Col >
              <Card className="h-100 border-0 hero-bottom-text ">
                <Card.Body>
                <PhotoView src="/ph_1_complete_1.jpg">
                    <Image className='photo-preview ' width={600} height={500} src="/ph_1_complete_1.jpg" alt="" />
                  </PhotoView>
                  <Card.Text>
                    Rais-Shamsun Foundation&apos;s Building First Phase
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col >
              <Card className="h-100 border-0 hero-bottom-text ">
                <Card.Body>
                <PhotoView src="/ph_1_complete_2.jpg">
                    <Image className='photo-preview ' width={600} height={500} src="/ph_1_complete_2.jpg" alt="" />
                  </PhotoView>
                  <Card.Text>
                  Rais-Shamsun Foundation&apos;s Building First Phase
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col >
              <Card className="h-100 border-0 hero-bottom-text ">
                <Card.Body>
                <PhotoView src="/ph_1_complete_3.jpg">
                    <Image className='photo-preview ' width={600} height={500} src="/ph_1_complete_3.jpg" alt="" />
                  </PhotoView>
                  <Card.Text>
                  Rais-Shamsun Foundation&apos;s Building First Phase
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          </PhotoProvider>
        </Container>
      </div>
    </div>
  )
}

export default Gallery;
