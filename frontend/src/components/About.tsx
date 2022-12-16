import React from "react";
import "./About.css";
import Footer from "./Footer";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faMusic,
    faShoePrints,
} from "@fortawesome/free-solid-svg-icons";

// Bootstrap components
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//images
import sweezylogo from "../images/sweezylogo.png";
import violinbg from "../images/violinbg.png";
import sneaker from "../images/sneaker.png";

function About() {
    return (
        <div>
            <header className="container-fluid mt-5">
                <Row className="">
                    <Col className="mt-5 text-center">
                        <h1 className="title">about me</h1>
                    </Col>
                </Row>
            </header>
            <Container fluid className="d">
                <Row className="mt-5">
                    <div className="col-8">
                        <h2>I'm a Web Developer</h2>
                    </div>
                    <div className="col-4">
                        <i className="fas fa-code fa-2x"></i>
                        <FontAwesomeIcon icon={faCode} size={"2x"} />
                    </div>
                </Row>
                <Row className="mt-5">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="text-center">
                            <p>
                                I'm currently the Head Developer at Sweezy,
                                where we create free websites for local
                                buisnesses using <i>HTML</i>, <i>CSS</i>, and{" "}
                                <i>JavaScript</i>.{" "}
                            </p>
                            <img
                                className="img-fluid"
                                src={sweezylogo}
                                alt="Picture of sweezy logo"
                                width="300"
                            />
                        </div>
                    </div>
                    <div className="col-3"></div>
                </Row>
                <Row className="mt-5">
                    <div className="col-8">
                        <h2>I'm a Musician</h2>
                    </div>
                    <div className="col-4">
                        <FontAwesomeIcon icon={faMusic} size={"2x"} />
                    </div>
                </Row>
                <Row className="mt-5">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="text-center">
                            <p>
                                I've been playing the violin for around 8 years
                                now. I mostly play Classical music although I
                                also enjoy playing modern pop songs.
                            </p>
                            <img
                                className="img-fluid"
                                src={violinbg}
                                width="300"
                                alt="image of violin"
                            />
                        </div>
                    </div>
                    <div className="col-3"></div>
                </Row>
                <Row className="mt-5">
                    <div className="col-8">
                        <h2>I'm a Sneaker Enthusiast</h2>
                    </div>
                    <div className="col-4">
                        <FontAwesomeIcon icon={faShoePrints} size={"2x"} />
                    </div>
                </Row>
                <Row className="mt-5">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="text-center">
                            <p>
                                Although limited by my wallet, I've always been
                                interested in streetwear/sneakers, and love to
                                follow up on new sneaker releases and
                                occasionally collect some.
                            </p>
                            <img
                                className="img-fluid"
                                src={sneaker}
                                width="300"
                                alt="image of sneaker"
                            />
                        </div>
                    </div>
                    <div className="col-3"></div>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default About;
