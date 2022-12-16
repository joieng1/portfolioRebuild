import React from "react";
import "./Footer.css";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJira } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

// Bootstrap components
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
    return (
        <Container
            fluid
            id="indexFooter"
            className="footer container-fluid mx-0 px-0 pt-2"
        >
            <Row className="row text-center mx-0">
                <div className="col mt-2">
                    <h3>Contact Me</h3>
                </div>
            </Row>
            <Row className="mx-0">
                <Col className=" text-center py-4">
                    <a
                        className="px-3 px-md-5 text-decoration-none text-white"
                        href="https://www.instagram.com/john._ie/?hl=en"
                    >
                        <FontAwesomeIcon icon={faInstagram} size={"3x"} />
                    </a>
                    <a
                        className="px-3 px-md-5 text-decoration-none text-white"
                        href="mailto:johncieng1@gmail.com"
                    >
                        <FontAwesomeIcon icon={faEnvelopeSquare} size={"3x"} />
                    </a>
                    <a
                        className="px-3 px-md-5 text-decoration-none text-white"
                        href="tel:415-830-4853"
                    >
                        <FontAwesomeIcon icon={faPhoneSquare} size={"3x"} />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
