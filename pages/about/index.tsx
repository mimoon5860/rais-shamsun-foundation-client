import type { NextPage } from 'next'
import Head from 'next/head'
import { Col, Container, ListGroup, Nav, Row, Tab } from 'react-bootstrap'

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About | Rais-Shamsun Foundation</title>
        <meta name="description" content="About Rais-Shamsun Foundation" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 className='text-center page-header py-3 text-white'>About</h1>
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Introduction</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Principles and Norms</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Goals and Objectives</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Activities</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Sources of funds and income</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">Expenditure policy</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h4>Rais-Shamsun Foundation</h4>
                  <p>The Rais-Shamsun Foundation is a non-political, non-profitable government-registered organization dedicated to education, dawah and full human welfare. It was established in 2018 by Shaikh Ahmadullah. He is the chairman of the organization and manages it directly. Rais-Shamsun Foundation was registered in 2019 from Joint Stock, Whose registration number is S-13111/2019. Since then, it has been working rigorously to serve the humanity, reform the society, developing the utmost morality, arrange various activities to build up a neat and clean mentality and ultimately to build up an ideal society following in the footsteps of the Prophet Muhammad, the teacher of humanity, the messenger of human liberation and peace and the ideal of human welfare. One of the goals of Rais-Shamsun Foundation is to build life and society based on the Quran and Sunnah and to propagate and spread authentic knowledge. It is our policy to adopt a moderate approach based on the Qur&apos;an and Sunnah following the path of the righteous predecessors.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h4>Principles and Norms</h4>
                  <ListGroup as="ol">
                    <ListGroup.Item as="li">The Holy Quran and the Sunnah of the Messenger of Allah (peace be upon him) are the main ideals of the Rais-Shamsun Foundation.</ListGroup.Item>
                    <ListGroup.Item as="li">It accepts the Qur&apos;an and Sunnah in the light of the interpretation of the Salafe Salihin.</ListGroup.Item>
                    <ListGroup.Item as="li">It nurtures the aqeedah and vision of Ahlus-Sunnah wal-Jama&apos;ah.</ListGroup.Item>
                    <ListGroup.Item as="li">It calls for shirk-free faith and bid&apos;at-free practices.</ListGroup.Item>
                    <ListGroup.Item as="li">It works for the unity and solidarity of the Ummah.</ListGroup.Item>
                    <ListGroup.Item as="li">It adopts moderation by avoiding extreme polarization as much as possible on divisive issues.</ListGroup.Item>
                    <ListGroup.Item as="li">It refrains from taking political action and position and work for the greater good of all irrespective of party affiliation.</ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h4>Goals and Objectives</h4>
                  <p>The goal of the Rais-Shamsun Foundation is to gain the satisfaction of the Almighty Allah by conducting da&apos;wah activities to prevent evil deeds in the light of the lifestyle of the Prophet (peace be upon him).</p>
                  <ListGroup as="ol">
                    <ListGroup.Item as="li">Institutional and sub-institutional Islamic and general education and career-oriented technical training initiatives across the country, especially in the comparatively neglected sections of society</ListGroup.Item>
                    <ListGroup.Item as="li">service to humanity and</ListGroup.Item>
                    <ListGroup.Item as="li">encouragement for good deeds are the prime objective of the Rais-Shamsun Foundation.</ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <h4>Activities</h4>
                  <p>The Rais-Shamsun Foundation mainly works in three sectors: education, service and da&apos;wah.</p>
                  <h4>Educational activities</h4>
                  <ListGroup as="ol">
                    <ListGroup.Item as="li">Preparation of modern up-to-date textbooks and textbooks with basic teachings of Quran and Sunnah and establishment of madrasas to build wise scholars and dedicated souls.</ListGroup.Item>
                    <ListGroup.Item as="li">Organizing competitions and prize distribution on education, culture and various social and life-oriented subjects.</ListGroup.Item>
                    <ListGroup.Item as="li">Higher Ilmi Research Center.</ListGroup.Item>
                    <ListGroup.Item as="li">Arranging various term based Islamic education courses for working men and women.</ListGroup.Item>
                    <ListGroup.Item as="li">Establishment and management of schools, colleges, universities and technical schools with the spirit of Rais-Shamsun at the centre.</ListGroup.Item>
                    <ListGroup.Item as="li">Establishment of Sabahi Maktab for the spreading of basic education at the pre-primary level.</ListGroup.Item>
                    <ListGroup.Item as="li">Provide literacy and other ancillary expenses to prevent children from indigent families from dropping out of school.</ListGroup.Item>
                  </ListGroup>
                  <h4>Charitable activities</h4>
                  <ListGroup as="ol">
                    <ListGroup.Item as="li">Provide financial assistance for handicrafts, machinery, technical, farm management training as well as self-reliance in eliminating unemployment and alleviating poverty.</ListGroup.Item>
                    <ListGroup.Item as="li">Provide relief assistance to affected areas from time to time and during natural disasters.</ListGroup.Item>
                    <ListGroup.Item as="li"> Medical assistance to patients unable to bear the cost of treatment.</ListGroup.Item>

                    <ListGroup.Item as="li">  Collect unused medicines and distribute them among distressed patients through various booths.</ListGroup.Item>

                    <ListGroup.Item as="li"> Distribution of Iftar items to the needy during the month of Ramadan and organization of Da&apos;wah.</ListGroup.Item>

                    <ListGroup.Item as="li">Distribution of Fitra, clothes and Eid items on the occasion of Eid among the needy.</ListGroup.Item>

                    <ListGroup.Item as="li">Arranging sacrifices on behalf of the affluent and distributing among the needy.</ListGroup.Item>

                    <ListGroup.Item as="li">Distribution of earning materials like rickshaws, sewing machines etc. among the needy.</ListGroup.Item>

                    <ListGroup.Item as="li">Establishment of tube wells and reservoirs in areas deprived of potable water.</ListGroup.Item>

                    <ListGroup.Item as="li"> Planting and maintenance of high yielding trees in the yard of needy families and residential madrasas for the purpose of environmental protection and self reliance.</ListGroup.Item>

                    <ListGroup.Item as="li"> Provide various trainings and assistance to make Madrasa students self reliant.</ListGroup.Item>
                    <ListGroup.Item as="li">To co-operate and rehabilitate street children and the disabled.</ListGroup.Item>
                    <ListGroup.Item as="li">Teaching and upbringing of widows and taking care of them till they become orphans.</ListGroup.Item>
                  </ListGroup>
                  <h4>Da&apos;wah activities</h4>
                  <ListGroup as="ol">
                    <ListGroup.Item as="li">Construction and management of ideal mosques to build a peaceful and prosperous society.</ListGroup.Item>
                    <ListGroup.Item as="li">Weekly, monthly, annual and occasional waz-mahfils, open exchange of views and seminars are organized at mosques, madrasas, district auditoriums, upazila parishad auditoriums, grounds, etc. in different areas to highlight the correct views of Islam.</ListGroup.Item>
                    <ListGroup.Item as="li">Publication and dissemination of basic and authentic books highlighting pure Islamic knowledge, beliefs, policies and views.</ListGroup.Item>
                    <ListGroup.Item as="li">Taking initiatives to eradicate shirk-bid ‘at, polarization and extremism.</ListGroup.Item>
                    <ListGroup.Item as="li">Contribute documentaries of thematic discussion programs and disseminate through social media.</ListGroup.Item>
                    <ListGroup.Item as="li">Writing, translating, publishing and disseminating books for non-Muslims highlighting the superiority and beauty of Islam.</ListGroup.Item>
                    <ListGroup.Item as="li">To take various measures to eradicate religious and social prejudices and to prevent subcultures.</ListGroup.Item>
                    <ListGroup.Item as="li">Management of Family Counseling Department.</ListGroup.Item>
                    <ListGroup.Item as="li">Establishment of open ‘call center’ for religious inquiries and consultations.</ListGroup.Item>
                    <ListGroup.Item as="li">Establishment of Muslim Youth Club.</ListGroup.Item>
                    <ListGroup.Item as="li">Dawah training for Imams and Khatibs.</ListGroup.Item>
                    <ListGroup.Item as="li">Construction of Islamic Cultural Center for Children and Adolescents.</ListGroup.Item>
                    <ListGroup.Item as="li">Establishment of library.</ListGroup.Item>
                    <ListGroup.Item as="li">Shariah Solution Department.</ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                <h4>Sources of funds and income</h4>
                  <ListGroup as="ol">
                    <ListGroup.Item as="li">The journey begins with the property and funds purchased with donations from the founding members of the Foundation.</ListGroup.Item>
                    <ListGroup.Item as="li">One-time and regular donations from members, supporters and well-wishers.</ListGroup.Item>
                    <ListGroup.Item as="li">Proceeds from any project of the Foundation.</ListGroup.Item>
                    <ListGroup.Item as="li">Grants given by the public in a particular sector.</ListGroup.Item>
                    <ListGroup.Item as="li">Zakat, Fitra payable to affluent Muslims.</ListGroup.Item>
                    <ListGroup.Item as="li">Money recovered in special sectors including Iftar and Qurbani.</ListGroup.Item>
                    <ListGroup.Item as="li">Grants from government or private sources.</ListGroup.Item>
                    <ListGroup.Item as="li">5-10% administrative cost deducted from various projects for managing various projects.</ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <h4>Expenditure policy</h4>
                  <ListGroup as="ol">
                    <ListGroup.Item as="li">Donations are spent in the sector for which the donors donate. Money from one sector is not spent on another.</ListGroup.Item>
                    <ListGroup.Item as="li">One hundred percent of the money collected in the Zakat fund is distributed among the rightful owners.</ListGroup.Item>
                    <ListGroup.Item as="li">Detailed accounts of income and expenditure are maintained after completion of each project.</ListGroup.Item>
                    <ListGroup.Item as="li">The income and expenditure accounts of the foundation are audited by a chartered accountant once a year.</ListGroup.Item>
                    <ListGroup.Item as="li">All financial activities of Rais-Shamsun Foundation are monitored under the supervision of a team consisting of accounting experts.</ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
                
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

      </Container>
    </div>
  )
}


export default About
