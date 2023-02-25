import type { NextPage } from 'next'
import Head from 'next/head'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'

const Donation: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Donation | Rais-Shamsun Foundation</title>
        <meta name="description" content="Donation page of Rais-Shamsun Foundation" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 className='text-center page-header py-3 text-white'>Together Let&apos;s Make A Change</h1>
      <Container>
        <Row>
          <Col md={6}>
            <div>
            <iframe width="100%" height="350" src="https://www.youtube.com/embed/VfGCk9rVePo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div>
              <p>The likeness of those who spend their wealth in the way of Allah is as the likeness of a grain of corn, which produces seven spikes, a hundred grains in each spike. Allah multiplies for whomever He wills. Allah is Bounteous, Omniscient. [Surah Baqara: verse 261]
                Whoever builds a mosque, Allah will make for him a house in Paradise. [Sahih Bukhari: Hadith 450; Sahih Muslim: Hadith 533]</p>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <h4>Rais-Shamsun Foundation Donation Information</h4>
              <div>
                <p>The Rais-Shamsun Foundation Masjid Complex will be the focal point of the multi-faceted activities of the Rais-Shamsun Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque, a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the age.</p>
                <p>
                  This is a Sadaqa Jariyah project, the reward of which will continue to be included in the record even after death, In-Sha-Allah
                </p>
                <h5>Bank Information</h5>
                <ListGroup as="ul">
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold mb-1">UK Bank Details</div>
                      <div className='ms-1'>
                      Bank Name: Starling Bank<br />
                      Account Name: KHAN ELAHI<br />
                      Account Number: 81076088<br />
                      Sort Code: 608371<br />
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold mb-1">Bangladesh Bank Details</div>
                      <div className='ms-1'> 
                      Bank Name: Prime Bank Ltd<br />
                      Branch Name: Habiganj<br />
                      Account Name: KHAN MD.MONZUR ELAHI<br />
                      Account Number: 2176214012042<br />
                      Branch Code: 061<br />
                      SWIFT Code: PRBLBDDH<br />
                      Routing Number: 170360612<br />
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Donation
