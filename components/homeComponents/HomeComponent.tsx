import { TFunction } from "next-i18next";
import Image from "next/image";
import Lottie from 'react-lottie';
import heroLottie from '../../public/hero_lottie.json'
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import Link from "next/link";
import { BiDonateHeart } from "react-icons/bi";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useRouter } from "next/router";
interface homeProps {
  translate: TFunction
}
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: heroLottie,
};

const HomeComponent = ({ translate }: homeProps) => {
  const { push } = useRouter();
  return (
    <main>
      {/* Hero section  */}
      <div className="hero_wrapper">
        <Container>
          <Row style={{ alignItems: 'center' }}>
            <Col md={6}>
              <div className="mx-2 mx-md-5">
                <Lottie options={defaultOptions} />
              </div>
            </Col>
            <Col md={6}>
              <div className="mt-3 mb-5 ms-0 ms-md-4">
                <h1 className="hero-main-text text-success">{translate('rais shamsun')}
                  <br />
                  <span className="hero-main-text2">{translate('foundation')}</span>
                </h1>
                <p className="fs-2">{translate('quate')}</p>
                <div >
                  <Link href='/donation'>
                    <a className='text-decoration-none donate-btn bg-success text-white rounded-1 px-4 py-2'><BiDonateHeart />{" "+translate('donate')}</a>
                  </Link>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      <div className="py-4">
        <Container>
          <Row >
            <Col md={4}>
              <Image className="p-2" alt="islamic baby rais-shamsun foundation" style={{ objectFit: "contain" }} width={350} height={500} src="/islamic_baby.jpg"></Image>
            </Col>
            <Col md={8}>
              <div className="hero-bottom-text py-2 px-3 rounded-2 ">
                <h4 className="text-start border-bottom border-4 my-2">
                  {translate("hero title")}
                </h4>
                <p>{translate("hero details")}</p>
                <div>
                  <ListGroup>
                    <ListGroup.Item onClick={()=>window.open('https://docs.google.com/document/d/1Yjkb9kycr8dw4HfIDJbecYAAgt7i0ObI','_blank')} className="my-3" action variant="success">
                    Rais Shumsun January 2023 Appeal
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup>
                    <ListGroup.Item onClick={()=>window.open('/pdf_details/estimation_costing.pdf','_blank')} className="my-3" action variant="success">
                      Estimation & Costing (Phase 1& 2)
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup>
                    <ListGroup.Item onClick={()=>window.open('/pdf_details/rstimation_1st_floor.pdf','_blank')} className="my-3" action variant="success">
                    Estimation 1st Floor
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup>
                    <ListGroup.Item onClick={()=>window.open('/pdf_details/front_elevation.pdf','_blank')} className="my-3" action variant="success">
                    Front Elevation
                    </ListGroup.Item>
                  </ListGroup>
                 
                  
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="gray-bg py-4">
        <div className="text-center border-bottom border-white">
          <h3>Together Let&apos;s Make A Change</h3>
        </div>
        <Container className="py-4">
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col >
              <Card className='h-100 text-center'>
                <Card.Img height={300} style={{ objectFit: 'cover' }} variant="top" src="/masjid.jpg" />
                <Card.Body>
                  <Card.Title className="fs-4">Rais-Shamsun Foundation Masjid Complex</Card.Title>
                  <Card.Text style={{ textAlign: 'justify' }}>
                    The Rais-Shamsun Foundation Masjid Complex will be the focal point of the multi-faceted activities of the Rais-Shamsun Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque, a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the age.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col >
              <Card className='h-100 text-center'>
                <Card.Img height={300} style={{ objectFit: 'cover' }} variant="top" src="/zakat.jpg" />
                <Card.Body>
                  <Card.Title className="fs-4">Zakat Fund</Card.Title>
                  <Card.Text style={{ textAlign: 'justify' }}>
                    Your Zakat has the power to transform lives, from sheltering those who have no home, to feeding families who have endured hunger for days on end. Please, donate your Zakat where the need is greatest.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='h-100 text-center'>
                <Card.Img height={300} style={{ objectFit: 'cover' }} variant="top" src="/hand_holding_fund.jpg" />
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
                <Card.Img height={300} style={{ objectFit: 'cover' }} variant="top" src="/monthly.jpg" />
                <Card.Body>
                  <Card.Title className="fs-4">Monthly Donation Fund</Card.Title>
                  <Card.Text style={{ textAlign: 'justify' }}>
                    The monthly donor member of the Rais-Shamsun Foundation is a permanent donor of the organization. Regular donations of the monthly donor members are a means of sustainable income for the multi-faceted da&apos;wah activities and overall development of the Rais-Shamsun Foundation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='h-100 text-center'>
                <Card.Img height={300} style={{ objectFit: 'cover' }} variant="top" src="/orphan.jpg" />
                <Card.Body>
                  <Card.Title className="fs-4">Orphan Fund</Card.Title>
                  <Card.Text style={{ textAlign: 'justify' }}>
                    Taking care of the orphans in the hope of Allah&apos;s pleasure and reward is an important act of worship to Allah and it is also one of the best sectors of charity.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='h-100 text-center'>
                <Card.Img height={300} style={{ objectFit: 'cover' }} variant="top" src="sadaqah.jpg" />
                <Card.Body>
                  <Card.Title className="fs-4">Sadaqah Jariyah Fund</Card.Title>
                  <Card.Text style={{ textAlign: 'justify' }}>
                    Sadaqah Jariyah is ongoing charity (continuous rewards) received by us (for good actions and deeds), that will not only benefit us in this life but will continue to benefit us after our death.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="my-4">
        <div className="text-center border-bottom border-dark">
          <h3>Projects</h3>
        </div>
        <Container className="my-4">

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
                    The Rais-Shamsun Foundation organizes a session called &apos;Majlisus Sunnah&apos; every month to promote pure Islamic teachings, awareness and life-oriented religiosity, ideals, ethics and religious awareness among the common people based on the Qur&apos;an and Sahih Sunnah.
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
      </div>

      <div className="gray-bg py-4">
        <div className="text-center border-bottom border-dark">
          <h3>Videos</h3>
        </div>
        <Container className="my-4">
          <Row xs={1} md={3} className="g-3">
            <Col >
              <Card className="h-100 border-0">
                <Card.Body>
                  <iframe width="100%" height="250" src="https://www.youtube.com/embed/VfGCk9rVePo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <Card.Text>
                    Rais-Shamsun Foundation&apos;s intro video
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>
            <Col >
              <Card className="h-100 border-0">
                <Card.Body>
                  <iframe width="100%" height="250" src="https://www.youtube.com/embed/CNKcnXw1-3s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  <Card.Text>
                    Rais-Shamsun Foundation&apos;s building structure
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>
          </Row>
          <div className="d-grid mt-4 gap-2">
            <Button onClick={() => push('/videos')} variant="success" size="lg">More</Button>
          </div>
        </Container>
      </div>

      <div className="py-4">
        <div className="text-center border-bottom border-dark">
          <h3>Gallery</h3>
        </div>
        <Container className="my-4">
          <PhotoProvider>
            <Row xs={1} md={4} className="g-5">
              <Col >
                <div className="photo-preview p-2 gray-bg rounded-3 ">
                  <PhotoView src="/ph_1_complete_1.jpg">
                    <Image width={500} height={500} src="/ph_1_complete_1.jpg" alt="" />
                  </PhotoView>
                </div>
              </Col>
              <Col >
                <div className="photo-preview p-2 gray-bg rounded-3 ">
                  <PhotoView src="/ph_1_complete_2.jpg">
                    <Image width={500} height={500} src="/ph_1_complete_2.jpg" alt="" />
                  </PhotoView>
                </div>
              </Col>
              <Col >
                <div className="photo-preview p-2 gray-bg rounded-3 ">
                  <PhotoView src="/ph_1_complete_3.jpg">
                    <Image width={500} height={500} src="/ph_1_complete_3.jpg" alt="" />
                  </PhotoView>
                </div>
              </Col>
            </Row>
          </PhotoProvider>

          <div className="d-grid mt-4 gap-2">
            <Button onClick={() => push('/gallery')} variant="success" size="lg">More</Button>
          </div>
        </Container>
      </div>

    </main>
  )
}

export default HomeComponent;