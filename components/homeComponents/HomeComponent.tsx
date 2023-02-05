import Image from "next/image";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const HomeComponent=()=>{
return(
    <main>
        {/* Slider section  */}
        <div>
        <Container className="py-2">
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
        <div>
            <Container>
                <Row>
                    <Col md={4}>
                    <Image  className="p-2" style={{borderRadius:'50%'}} width={450}  height={450} src='/golden-gate.jpg'></Image>
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
            </Container>
        </div>
        </div>
    </main>
)
}

export default HomeComponent;