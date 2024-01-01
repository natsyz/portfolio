import "./css/navbar.css";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavHashLink } from "react-router-hash-link";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <NavHashLink to="../#about" className="navbar-link">About</NavHashLink>
            <NavHashLink to="../#projects" className="navbar-link">Projects</NavHashLink>
            <NavHashLink to="../#gallery" className="navbar-link">Gallery</NavHashLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
