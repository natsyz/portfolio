import { Col, Container, Row } from "react-bootstrap"
import "./css/footer.css"
import { Fade } from "react-reveal"

export const Footer = () => {
  return (
    <section className="footer">
      <div className="shadow-box"></div>
      <Container>
        <div className="footer-content justify-content-center align-items-center">
          <Fade bottom>
            <Row className="justify-content-center">
              <Col xs={11} lg={2}><a className="main-link" href="mailto: whynatasya@gmail.com" target="_blank" rel="noreferrer">EMAIL</a></Col>
              <Col xs={11} lg={2}><a className="main-link" href="https://www.linkedin.com/in/natasya-zahra/" target="_blank" rel="noreferrer">LINKEDIN</a></Col>
              <Col xs={11} lg={2}><a className="main-link" href="https://github.com/natsyz/" target="_blank" rel="noreferrer">GITHUB</a></Col>
              <Col xs={11} lg={2}><a className="main-link" href="https://www.instagram.com/natsyz/" target="_blank" rel="noreferrer">INSTAGRAM</a></Col>
            </Row>
          </Fade>
          <Row>
            <Col>
              <div className="sliding-bg"></div>
            </Col>
          </Row>
          <Row>
            <Fade bottom>
              <Col>
                <p>Designed and <a href="https://github.com/natsyz/" target="_blank" rel="noreferrer">developed</a> with 💖🐦 by Natasya Zahra. <br/>2023</p>
              </Col>
            </Fade>
          </Row>
        </div>
      </Container>
    </section>
  )
}
