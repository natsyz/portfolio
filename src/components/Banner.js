import { Col, Container, Row } from "react-bootstrap"
import bannerImg from "../assets/img/headshot.png"
import socialEmail from "../assets/img/social-email.svg"
import socialLinkedIn from "../assets/img/social-linkedin.svg"
import socialGithub from "../assets/img/social-github.svg"
import { Fade } from "react-reveal"
import "./css/banner.css"

export const Banner = () => {
  return (
    <section className="banner" id="about">
      <Container>
        <Fade>
          <Row className="justify-content-center align-items-center">
            <Col xs={10} lg={6}>
            <img src={bannerImg} alt="Potrait Illustration"></img>
            </Col>
          </Row>
        </Fade>
        <Row>
          <Col>
            <div className="banner-title">
              <h1>Natasya Zahra</h1>
              <span className="social-span">
                <div className="social-icons">
                  <a href="mailto: whynatasya@gmail.com" target="_blank" rel="noreferrer"><img src={socialEmail} alt="Email Icon"/></a>
                  <a href="https://www.linkedin.com/in/natasya-zahra/" target="_blank" rel="noreferrer"><img src={socialLinkedIn} alt="LinkedIn Icon"/></a>
                  <a href="https://github.com/natsyz/" target="_blank" rel="noreferrer"><img src={socialGithub} alt="Github Icon"/></a>
                </div>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
