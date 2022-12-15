import React from "react";
import Navbar from "./NavagationBar";
import Footer from "./Footer";

import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";

function Home() {
    // control the visibility of the start page
    const [show, setShow] = React.useState(true);

    function showWelcomePage() {}

    return (
        <div>
            <Navbar />
            {/* will display start page at first */}
            {show && (
                <Container fluid id="header" className="mt-5 mx-0">
                    <Row className="">
                        <div id="start" className="mt-5 text-center col-12">
                            <button
                                id="startBtn"
                                className="btn btn-primary"
                                onClick={() => setShow(!show)}
                            >
                                Welcome
                            </button>
                        </div>
                    </Row>
                </Container>
            )}
            {/* display welcome page after "Welcome" btn is clicked */}
            {!show && (
                <div>
                    <Container fluid id="welcomePage" className="px-0 parallax">
                        <div className="spacer1">
                            <Row className="text-center">
                                <Col className="">
                                    <Col className="text-center mt-5">
                                        <h1 className="startTitle">
                                            John Ieng
                                        </h1>
                                        <button className="btn btn-lg lmButton">
                                            <a
                                                href="about.html"
                                                className="text-decoration-none text-white"
                                            >
                                                Learn More
                                            </a>
                                        </button>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <Footer />
                </div>
            )}
        </div>
    );
}

export default Home;
