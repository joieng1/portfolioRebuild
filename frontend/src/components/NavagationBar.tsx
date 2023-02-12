import React from "react";
import "./NavagationBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJira } from "@fortawesome/free-brands-svg-icons";

// Bootstrap components
import { Container, Nav } from "react-bootstrap";

// Navbar bootstrap components
import Navbar from "react-bootstrap/Navbar";

// react router module
import { LinkContainer } from "react-router-bootstrap";

export default function NavagationBar() {
  return (
    <Navbar id="mainNavbar" collapseOnSelect expand="lg" className="fixed-top">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand href="#home">
            <FontAwesomeIcon icon={faJira} />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
