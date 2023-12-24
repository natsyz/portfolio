import { Col, Container, Row } from "react-bootstrap"
import { Fade } from "react-reveal"
import "./css/gallery.css"
import figureAs from "../assets/img/figure-as.jpeg"
import figureCv from "../assets/img/figure-cv.jpg"
import figureDs from "../assets/img/figure-ds.jpeg"
import figureFd from "../assets/img/figure-fd.gif"
import figureFdCollage from "../assets/img/figure-fd-collage.png"
import figureGn from "../assets/img/figure-gn.jpeg"
import figureMr from "../assets/img/figure-mr.jpeg"
import figureNa from "../assets/img/figure-na.jpeg"
import figureNz1 from "../assets/img/figure-nz.jpeg"
import figureNz2 from "../assets/img/figure-nz-2.jpeg"
import figureRb from "../assets/img/figure-rb.gif"
import figureRbCollage from "../assets/img/figure-rb-collage.png"
import figureRf from "../assets/img/figure-rf.jpeg"
import figureTrg from "../assets/img/figure-trg.gif"
import figureTrgCollage from "../assets/img/figure-trg-collage.png"
import figureTrs from "../assets/img/figure-trs.gif"
import figureTrsCollage from "../assets/img/figure-trs-collage.png"
import figureZs from "../assets/img/figure-zs.jpeg"

export const Gallery = () => {
  return (
    <section className="arts" id="gallery">
      <div className="sliding-bg"></div>
      <Container>
        <Row>
          <Col>
            <div className="arts-title">
              <Fade bottom>
                <h1 className="section-title-main">GALLERY</h1>
                <p>Collection of potraits and others<br/><span>since 2019</span></p>
              </Fade>
            </div>
          </Col>
        </Row>
        <div className="arts-decks">
          <Row className="justify-content-center align-items-center">
            <Col className="figure" xs={8}>
              <Fade>
                <img src={figureRf} alt="Potrait Illustration"></img>
              </Fade>
              <img className="image-hover" src={figureMr} alt="Potrait Illustration"></img>
            </Col>
            <Col xs={4} style={{padding:"0px"}}>
              <Col xs={12} className="figure">
                <Fade>
                  <img src={figureNa} alt="Potrait Illustration"></img>
                </Fade>
                <img className="image-hover" src={figureNz1} alt="Potrait Illustration"></img>
              </Col>
              <Col xs={12} className="figure">
                <Fade>
                  <img src={figureFd} alt="Potrait Illustration"></img>
                </Fade>
                <img className="image-hover" src={figureFdCollage} alt="Potrait Illustration"></img>
              </Col>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className="figure">
              <Fade>
                <img src={figureAs} alt="Potrait Illustration"></img>
              </Fade>
              <img className="image-hover" src={figureCv} alt="Potrait Illustration"></img>
            </Col>
            <Col className="figure">
              <Fade>
                <img src={figureTrs} alt="Potrait Illustration"></img>
              </Fade>
              <img className="image-hover" src={figureTrsCollage} alt="Potrait Illustration"></img>
            </Col>
            <Col className="figure">
              <Fade>
                <img src={figureZs} alt="Potrait Illustration"></img>
              </Fade>
              <img className="image-hover" src={figureNz2} alt="Potrait Illustration"></img>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className="figure">
              <Fade>
                <img src={figureTrg} alt="Potrait Illustration"></img>
              </Fade>
              <img className="image-hover" src={figureTrgCollage} alt="Potrait Illustration"></img>
            </Col>
            <Col className="figure">
              <Fade>
                <img src={figureGn} alt="Potrait Illustration"></img>
              </Fade>
              <img className="image-hover" src={figureDs} alt="Potrait Illustration"></img>
            </Col>
            <Col className="figure">
              <Fade>
                <img src={figureRb} alt="Potrait Illustration"></img>
              </Fade>
              <img className="image-hover" src={figureRbCollage} alt="Potrait Illustration"></img>
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <Fade bottom>
              <p className="arts-desc">Many more of them can be found in <span>my instagram <a href="https://www.instagram.com/napnath/" target="_blank" rel="noreferrer">@napnath</a></span></p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
