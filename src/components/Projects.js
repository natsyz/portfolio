import "./css/projects.css";
import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import starImg from "../assets/img/pink-star.png";
import smartCityImg from "../assets/img/smart-city.png";
import mapEarthquakeImg from "../assets/img/map-earthquake.png";

export const Projects = () => {
  return (
    <section className="works" id="projects">
      <div className="sliding-bg"></div>
      <Container>
        <Row>
          <Col xs={8} lg={12}>
            <div className="works-title">
              <Fade bottom>
                <h1 className="section-title-main">PROJECTS</h1>
                <p><span>Selected programming projects linked below</span></p>
              </Fade>
            </div>
          </Col>
        </Row>
        <div className="works-decoration">
          <img src={starImg} alt="Star Decoration" style={{width:"100px",top:"25%",right:"0",animation:"rotation 16s infinite linear"}}></img>
          <img src={starImg} alt="Star Decoration" style={{width:"200px",top:"55%",left:"0",animation:"rotation 30s infinite linear"}}></img>
        </div>
        <div className="works-decks">
          <Fade bottom>
            <Row className="align-items-center justify-content-center">
              <Col xs={{span: 1, order: 2}} lg={{span:1, order:1}}></Col>
              <Col xs={{span: 11, order: 3}} lg={{span: 5, order:3}}>
                <img src={smartCityImg} alt="Smart City Illustration"></img>
              </Col>
              <Col xs={{span: 10, order: 1}} lg={{span: 3, order:2}} className="works-deck-text">
                <a href="/portfolio/mahoni-smart-city">
                  <h2>+1</h2>
                  <p><span>UI Design, Microservices</span></p>
                  <p className="deck-title">Mahoni Smart City App</p>
                </a>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={10} lg={1}></Col>
              <Col xs={11} lg={8}>
                <p className="deck-desc">
                  The high number of motorized vehicles in Indonesia is causing air quality issues. To combat this problem, the Mahoni application introduces a smart city concept that employs a microservices architecture, offering features such as air quality monitoring, travel assistance, and point redemption for coupons acording to user needs. Event-driven architecture is utilized for real-time data collection from air sensors and user interaction. 
                </p>
                <p className="deck-desc"><a href="https://github.com/Mahoni-Smart-City/mahoni-core" target="_blank" rel="noreferrer">Github</a></p>
              </Col>
            </Row>
          </Fade>
          <Fade bottom>
            <Row className="align-items-end justify-content-center">
              <Col xs={{span: 11, order: 2}} lg={{span:7, order:1}}>
                <img src={mapEarthquakeImg} alt="Earthquake Map Illustration"></img>
              </Col>
              <Col xs={{span: 11, order: 1}} lg={{span:3,order:2}} className="works-deck-text">
                <h2>-2</h2>
                <p><span>Microservices, Data Processing</span></p>
                <p className="deck-title">Event-driven Early Earthquake Warning System</p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={11} lg={8}>
                <p className="deck-desc">
                  Focused on enhancing seismic monitoring efficiency involves transitioning from a monolithic to a microservices with event-driven architecture. The core components include IoT Middleware for processing geospatial data from Geofon, reliable Kafka-powered message broker, Spark stream processing, straightforward Rest API for effective communication, and React front-end interface.
                </p>
                <p className="deck-desc"><a href="https://github.com/natsyz/eews-event-driven" target="_blank" rel="noreferrer">Github</a></p>
              </Col>
              <Col xs={10} lg={2}></Col>
            </Row>
          </Fade>
        </div>
      </Container>
    </section>
  )
}
