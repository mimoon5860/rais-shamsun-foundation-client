import { Button, Col, Container, FloatingLabel, Form, ListGroup, Row } from 'react-bootstrap'
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
      <div>
        <Container>
          <Row>
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3" as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control placeholder="Enter your subject" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridMessage">
                  <Form.Label>Subject</Form.Label>
                  <FloatingLabel controlId="floatingTextarea2" label="Message">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a message here"
                      style={{ height: '300px' }}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>

            </Col>
            <Col md={6}>
              <div>
                <iframe className='rounded-3' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d8633.390324601562!2d91.8484314279841!3d24.52376773129686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s45%2FA%2C%20Rajnagar%20Rasidential%20Area%2C%20Habigank-3300%2C%20Bangladesh!5e1!3m2!1sen!2sbd!4v1675617093821!5m2!1sen!2sbd" width="100%" height="350" style={{border:0}}  loading="lazy" ></iframe>
              </div>
              <div>
                <ListGroup as="ul">
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">UK Address</div>
                      4a, Westmaitland Street, Edinburg, EH125DS, UK
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">BD Address</div>
                      45/A, Rajnagar Rasidential Area, Habigank-3300, Bangladesh
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Project Address</div>
                      Mouja-Sankhola, Union-Shankhonla, Ward No-09
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Police Station</div>
                      Chunarughat, District: Habiganj, Bangladesh
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Phone</div>
                      +447737614306 <br></br>
                      +8801646860838
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Email</div>
                      example@xyz.com
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Contact
