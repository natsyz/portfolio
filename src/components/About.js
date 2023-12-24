import { useContext, useEffect, useState } from "react"
import { Accordion, AccordionContext, Card, Col, Container, Row, useAccordionButton } from "react-bootstrap"
import aboutData from "./data/about.json"
import { Fade } from "react-reveal"
import "./css/about.css"
import masterResume from "./data/natasya_zahra-master_resume.pdf"

export const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(aboutData);
  }, []);

  function ContextAwareToggle({eventKey, callback}) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <button
        type="button"
        onClick={decoratedOnClick}
        className="showBtn"
      >
        {isCurrentEventKey? "Show Less ^" : "Show More V"}
      </button>
    );
  }
  

  const accordionData = data.map((i) => {
    const accordionItem = i.data.map((item) => {
      return(
      <Accordion.Item eventKey={item.id}>
        <Accordion.Header>
          <div>
            <p className="about-card-info">{item.info}</p>
            <h3 className="about-card-subtitle">{item.title}</h3>
            { item.subtitle.length >0 && (<p className="about-card-subtitle">{item.subtitle}</p>) }
          </div>
        </Accordion.Header>
        <Accordion.Body>
          {item.desc}
        </Accordion.Body>
      </Accordion.Item>
      )
    });

    return(
      <Fade bottom>
        <Row className="about-card">
          <Col xs={12} lg={6}>
            <h2 className="about-card-title">{ i.section }</h2>
          </Col>
          <Col xs={12} lg={6}>
            <Accordion>
              { accordionItem }
            </Accordion>
          </Col>
        </Row>
      </Fade>
    );
  })

  return (
    <section className="about">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col>
            <Fade bottom>
              <div className="about-summary">
                <p>A recent University of Indonesia graduate majoring in Computer Science. Gained valuable experience in data and backend programming during internship and projects. As a curious and enthusiast learner, she is looking forward to learn from experienced team members also apply her knowledge and skills for continuous improvement.</p>
              </div>
            </Fade>
          </Col>
        </Row>
        <div className="about-cards">
          <Accordion>
            <Card>
              <Card.Header>
                <Fade bottom>
                  <ContextAwareToggle eventKey="99"></ContextAwareToggle>
                </Fade>
              </Card.Header>
              <Accordion.Collapse eventKey="99">
                <Card.Body>
                  { accordionData }
                <Fade bottom>
                  <Row className="about-resume">
                    <Col lg={6}></Col>
                    <Col xs={12} lg={6}><p><a href={masterResume} target="_blank" rel="noreferrer">View resume</a></p></Col>
                  </Row>
                </Fade>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </Container>
    </section>
  )
}
