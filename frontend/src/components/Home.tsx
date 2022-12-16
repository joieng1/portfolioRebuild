import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";

function Home() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        // Applying on mount
        return () => {
            document.body.style.overflow = "visible";
        };
    }, []);
    // control the visibility of the start page
    const [show, setShow] = React.useState(true);

    return (
        <div>
            {/* will display start page at first */}
            {show && (
                <Container fluid id="header" className="mt-5 mx-0">
                    <Row className="">
                        <div id="start" className="mt-5 text-center col-12">
                            <Button
                                id="startBtn"
                                className="btn btn-primary"
                                onClick={() => setShow(!show)}
                            >
                                Welcome
                            </Button>
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
                                        <Button className="btn btn-lg lmButton">
                                            <Link
                                                to={"/about"}
                                                className="text-decoration-none text-white"
                                            >
                                                Learn More
                                            </Link>
                                        </Button>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            )}
        </div>
    );
}

export default Home;
