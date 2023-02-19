import Image from "next/image";
import { Button, Card,  Carousel, Col, Container, Row } from "react-bootstrap";

const HomeComponent = () => {
  return (
    <main>
      {/* Slider section  */}
      <Container className="my-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/slide1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/slide2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/slide3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/slide4.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container className="my-4">
        <Row>
          <Col md={4}>
            <Image className="p-2" style={{ borderRadius: '50%' }} width={450} height={450} src='/golden-gate.jpg'></Image>
          </Col>
          <Col md={8}>
            <h4 className="text-start border-bottom border-4">
              Rais Shamsun Foundation
            </h4>
            <p>Rais Shamsun Foundation is a non-profit, non-political, and entirely charitable organization dedicated to human welfare. Following the ideals and footsteps of the teacher of humanity, liberator of mankind, and role model of generosity Prophet Muhammad (Saw), this organization is engaged in social reform, inculcation of great morality, establishing employment, poverty alleviation, low cost or free health care, expansion of Islamic teachings and culture, conducting multidisciplinary education projects, continuous program in building a clean mindset, above all using oral, written and modern media to make people obey Allah and abide by His Messenger (Saw).</p>
            <div>

            </div>
          </Col>
        </Row>
        <div>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col >
              <Card className='h-100 text-center'>
                <Card.Img variant="top" src="/complex.jpg" />
                <Card.Body>
                  <Card.Title className="fs-4">Rais-Shamsun Foundation Masjid Complex</Card.Title>
                  <Card.Text>
                    The Rais-Shamsun Foundation Masjid Complex will be the focal point of the multi-faceted activities of the Rais-Shamsun Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque, a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the age.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col >
              <Card className='h-100 text-center'>
                <Card.Img variant="top" src="/zakat.jpg" />
                <Card.Body>
                  <Card.Title className="fs-4">Zakat Fund</Card.Title>
                  <Card.Text>
                    Your Zakat has the power to transform lives, from sheltering those who have no home, to feeding families who have endured hunger for days on end. Please, donate your Zakat where the need is greatest.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='h-100 text-center'>
                <Card.Img variant="top" src="/general.jpg" />
                <Card.Body>
                  <Card.Title className="fs-4">General Fund</Card.Title>
                  <Card.Text style={{ textAlign: 'justify' }}>
                    If someone donates to a specific sector, the Rais-Shamsun Foundation spends it in that sector. The general fund is spent on every charitable activity of As- Sunnah Foundation. Also, the expenditure of different activities such as religious education of As -Sunnah humanitarian services and dawah activities related total initiatives is met from the general fund.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='h-100 text-center'>
                <Card.Img variant="top" src="/monthly.jpg" />
                <Card.Body>
                  <Card.Title className="fs-4">Monthly Donation Fund</Card.Title>
                  <Card.Text style={{ textAlign: 'justify' }}>
                    The monthly donor member of the Rais-Shamsun Foundation is a permanent donor of the organization. Regular donations of the monthly donor members are a means of sustainable income for the multi-faceted da'wah activities and overall development of the Rais-Shamsun Foundation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='h-100 text-center'>
                <Card.Img variant="top" src="/orphan.jpg" />
                <Card.Body>
                  <Card.Title className="fs-4">Orphan Fund</Card.Title>
                  <Card.Text style={{ textAlign: 'justify' }}>
                    Taking care of the orphans in the hope of Allah's pleasure and reward is an important act of worship to Allah and it is also one of the best sectors of charity.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='h-100 text-center'>
                <Card.Img variant="top" src="sadaqah.jpg" />
                <Card.Body>
                  <Card.Title className="fs-4">Sadaqah Jariyah Fund</Card.Title>
                  <Card.Text style={{ textAlign: 'justify' }}>
                    Sadaqah Jariyah is ongoing charity (continuous rewards) received by us (for good actions and deeds), that will not only benefit us in this life but will continue to benefit us after our death.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <h4 className="text-center">Projects</h4>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="h-100 bg-success text-white text-center ">
              <Card.Body>
                <Card.Title className="fs-2">Self-reliance project</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                  If you feel the need for mass education and Morning Maktab in any part of Bangladesh, let us know and bring us into contact with the locals.
                </Card.Text>
                <Button variant="success">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 bg-success text-white text-center " >
              <Card.Body>
                <Card.Title className="fs-2">Iftar and Ramadan food distribution</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                  The Rais-Shamsun Foundation organizes a session called 'Majlisus Sunnah' every month to promote pure Islamic teachings, awareness and life-oriented religiosity, ideals, ethics and religious awareness among the common people based on the Qur'an and Sahih Sunnah.
                </Card.Text>
                <Button variant="success">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 bg-success text-white text-center">
              <Card.Body>
                <Card.Title className=" fs-2">Tree planting program</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                  The Foundation distributes various Islamic books and leaflets, including the Holy Quran free of charge on behalf of the Foundation as a way for Muslims to gain knowledge about faith, prayer and the rules of Islam.
                </Card.Text>
                <Button variant="success">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="my-4">
        <h4 className="text-center">Videos</h4>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="h-100 border-0">
              <Card.Body>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/NtAEj3J2PeE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                <Card.Text>
                Rais-Shamsun Foundation's food distribution among distressed and helpless families report 2019
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card  className="h-100 border-0">
              <Card.Body>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/gS7S1KAmCpI" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                <Card.Text>
                Rais-Shamsun Foundation's Qurbani Report 2019
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card  className="h-100 border-0">
              <Card.Body>
              <iframe width="100%" height="250" src="https://www.youtube.com/embed/GwAqIjxMVQ4" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                <Card.Text>
                Relief distribution report among flood victims 2019
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div  className="d-grid gap-2">
        <Button variant="success" size="lg">More</Button>
        </div>
      </Container>
      <Container className="my-4">
        <h4 className="text-center mb-4">Gallery</h4>
        <Row xs={1} md={4} className="g-3">
          <Col>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </main>
  )
}

export default HomeComponent;