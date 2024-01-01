import "./css/project.css";
import { Col, Container, Row } from "react-bootstrap";
import { NavHashLink } from "react-router-hash-link";
import { Fade } from "react-reveal";
import { useEffect } from "react";
import prototypeImg from "../assets/img/mahoni-prototype.png";
import mahoniKanoImg from "../assets/img/mahoni-kano.png";
import mahoniLogoImg from "../assets/img/mahoni-logo.png";
import mahoniArchitectureImg from "../assets/img/mahoni-architecture.png";

export const Project = () => {

  const scrollSection = (value) => {
    var elmntToView = document.getElementById(value);
    elmntToView.scrollIntoView(); 
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="project" id="project">
      <div className="header">
        <Fade>
          <Fade>
            <div className="header-banner"/>
          </Fade>
          <div className="header-card">
            <Container>
              <Row className="align-items-center justify-content-center">
                <Col xs={{span:11, order:2}} lg={{span:5, order:1}}>
                  <h1 className="project-article-title">Mahoni Smart City App</h1>
                  <p>Feature Research, Brand & Identity, UI Design, Microservices</p>
                </Col>
                <Col lg={{span:4, order:2}}/>
                <Col xs={{span:11, order:1}} lg={{span:3, order:3}} className="header-card-decor">
                  <h1>+1</h1>
                </Col>
              </Row>
            </Container>
          </div>
        </Fade>
      </div>
      <Container style={{height:"1px", borde:"1px solid #dedede"}}/>
      <div className="project-nav project-article-width">
        <Fade>
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col xs={11} md="auto">
                <p><span onClick={() => scrollSection("overview")}>Overview</span></p>
              </Col>
              <Col xs={11} md="auto">
                <p><span onClick={() => scrollSection("research")}>Research</span></p>
              </Col>
              <Col xs={11} md="auto">
                <p><span onClick={() => scrollSection("brandidentity")}>Brand & Identity</span></p>
              </Col>
              <Col xs={11} md="auto">
                <p><span onClick={() => scrollSection("result")}>Result</span></p>
              </Col>
              <Col xs={11} md="auto">
                <p><span onClick={() => scrollSection("microservice")}>Microservice</span></p>
              </Col>
            </Row>
          </Container>
        </Fade>
      </div>
      <div className="project-article">
        <Container className="project-article-width">
          <Row className="align-items-center justify-content-center" id="overview">
            <Col xs={11} lg={12}>
              <Fade>
                <h1>Overview</h1>
              </Fade>
            </Col>
            <Col xs={11} lg={12}>
              <Fade>
                <p>Mahoni application introduces a smart city concept that employs a microservices architecture, offering features such as air quality monitoring, travel assistance, and point redemption for coupons according to user needs. Mahoni originated as an idea for the Smart City competition Gemastik XIV 2021 held by the Indonesian Ministry of Education, Culture, Research, and Technology. <a href="https://linkedin.com/in/mriswanda" target="_blank" rel="noreferrer">Mohammad Riswanda Alifarahman</a>, <a href="https://www.linkedin.com/in/adamyrayeuk/" target="_blank" rel="noreferrer">Muhammad Adamy Rayeuk</a>, and I worked as a team from the Faculty of Computer Science University of Indonesia and successfully became finalists.</p>
                <p>Through the ideation process in the competition, I oversaw the visual aspect of the project and designed the UI for the supposed app in mobile layout. This will be explained in the first half of this page. For further reading, the background of Mahoni is beautifully laid out in <a href="https://riswandaali.medium.com/mahoni-combating-air-pollution-in-indonesia-through-public-transportation-gamification-apps-5f13293c16de" target="_blank" rel="noreferrer">this Medium article by Riswanda</a>.</p>
                <p>The idea of Mahoni later has been executed as a thesis project by Mohammad Riswanda Alifarahman, <a href="https://www.linkedin.com/in/muhammad-fathan-m-a45684130/" target="_blank" rel="noreferrer">Muhammad Fathan Muthahhari</a>, and me. In the later part of the article, I explain how the microservice was implemented.</p>
                <div className="video-container">
                  <iframe src="https://www.youtube.com/embed/DignK5TXDnU?si=3NTpdfqsqRQO5f01" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </Fade>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center" id="research">
            <Col xs={11} lg={12}>
              <Fade>
                <h1>Research</h1>
              </Fade>
            </Col>
            <Col xs={11} lg={12}>
              <Fade>

                <p>A number of research stages were carried out once we had established the business process for Mahoni. More details about the business process can be found in <a href="https://riswandaali.medium.com/mahoni-combating-air-pollution-in-indonesia-through-public-transportation-gamification-apps-dae4855a9163" target="_blank" rel="noreferrer">this Medium article written by Riswanda</a>. Researching to design the app was divided into functional and non-functional requirements gathering.</p>
                <p>The first functional requirement elicitation was done by doing task analysis to figure out what features similar to competitor’s app (transportation app, weather app, point exchange app) had to offer. While doing the thesis, the research complemented the work that has been done in the competition and was more thoroughly executed.</p>
                <p>User interviews were conducted to support and provide features that would help user needs. The interview added/eliminated proposed features from the task analysis. Those later were verified by doing a Kano Analysis.</p>
                <p>As for the non-functional requirement elicitation, this was done in parallel with user interviews to gain an understanding of their experiences and feelings. </p>
                <img src={mahoniKanoImg} alt="Kano Diagram of Mahoni Research"></img>
                <p>Some of the features were not selected for implementation because they were outside the scope of the project. Therefore, here is the list of features to be implemented:</p>
                <ul>
                  <li>F1: Air quality history</li>
                  <li>F2: Air quality search and information</li>
                  <li>F4: Health/activity recommendation</li>
                  <li>F7: Travel information</li>
                  <li>F8: Travel history</li>
                  <li>F9: Point information</li>
                  <li>F10: Point history</li>
                  <li>F11: List and detail of available coupons</li>
                  <li>F12: List and detail of owned coupons</li>
                </ul>
              </Fade>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center" id="brandidentity">
            <Col xs={11} lg={12}>
              <Fade>
                <h1>Brand & Identity</h1>
              </Fade>
            </Col>
            <Col xs={11} lg={12}>
              <Fade>
                <p>The name "Mahoni" of this project was inspired by the Mahoni tree as it is known as one of the anti-pollution plants. I took its part, namely the leaf, as the logo that represents Mahoni.</p>
              </Fade>
            </Col>
          </Row>
        </Container>
        <Container className="project-media-width">
          <Row className="align-items-center justify-content-center">
            <Col style={{maxWidth:"1000px"}}>
              <Fade>
                <img src={mahoniLogoImg} alt="Mahoni Logo"></img>
              </Fade>
            </Col>
          </Row>
        </Container>
        <Container className="project-article-width">
          <Row className="align-items-center justify-content-center" id="result">
            <Col xs={11} lg={12}>
              <Fade>
                <h1>Result</h1>
              </Fade>
            </Col>
            <Col xs={11} lg={12}>
              <Fade>
                <p>The prototype of the application is designed in Figma. Below are some of the design of the air quality, redemption and transport page.</p>
              </Fade>
            </Col>
          </Row>
        </Container>
        <Container className="project-media-width">
          <Row className="align-items-center justify-content-center">
            <Col style={{paddingLeft: "0", paddingRight: "0"}}>
              <Fade>
                <img src={prototypeImg} alt="Mahoni Prototype"></img>
              </Fade>
            </Col>
          </Row>
        </Container>
        <Container className="project-article-width">
          <Row className="align-items-center justify-content-center" id="microservice">
            <Col xs={11} lg={12}>
              <Fade>
                <h1>Microservice</h1>
              </Fade>
            </Col>
            <Col xs={11} lg={12}>
              <Fade>
                <p>Selected features were developed in microservice architecture, so they were not implemented as a single service, but instead composed of many small services for further maintainability. As there were three main topics: air quality, travel/transport and point to coupon exchange, each of the related features was implemented in its own service by its topic. There was an additional service, User Service, to handle user business and information.</p>
                <img src={mahoniArchitectureImg} alt="Mahoni Microservice Architecture"></img>
                <p>All the services were connected using Kafka as a message broker and deployed in Google Cloud Platform, handled by Fathan. There were also big data parts that processed all transactions for analytical purposes, handled by Riswanda. The functionality of all services was successfully tested using unit tests and end-to-end test scenarios in Postman.</p>
              </Fade>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col xs={11} lg={12}>
              <Fade>
                <h1>More About This Project</h1>
              </Fade>
            </Col>
            <Col xs={11} lg={12}>
              <Fade>
                <ul>
                  <li><a href="https://github.com/Mahoni-Smart-City/mahoni-core" target="_blank" rel="noreferrer">Github</a></li>
                  <li><a href="https://riswandaali.medium.com/mahoni-combating-air-pollution-in-indonesia-through-public-transportation-gamification-apps-5f13293c16de" target="_blank" rel="noreferrer">Mahoni: Combating Air Pollution in Indonesia Through Public Transportation Gamification Apps (1/3)</a></li>
                  <li><a href="https://riswandaali.medium.com/mahoni-combating-air-pollution-in-indonesia-through-public-transportation-gamification-apps-dae4855a9163" target="_blank" rel="noreferrer">Mahoni: Combating Air Pollution in Indonesia Through Public Transportation Gamification Apps — Part 2 (Business Process)</a></li>
                </ul>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="project-nav project-article-width">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xs={11} md="auto">
              <Fade>
                <p><NavHashLink to="../#projects" className="navbar-link">Return to Projects</NavHashLink></p>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
