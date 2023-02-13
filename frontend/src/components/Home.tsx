import { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  // control the visibility of the start page
  const [show, setShow] = useState(true);

  return (
    <div>
      {/* will display start page at first */}
      {show && (
        <Container fluid className="mt-5 mx-0">
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
          <Container fluid className="px-0 parallax">
            <Row className="mx-0 text-center">
              <Col className="px-0">
                <div className="spacer1">
                  <div className="homeItems">
                    <h1 className="startTitle">s</h1>
                    <Link
                      to="/about"
                      className="text-decoration-none text-white"
                    >
                      <Button className="btn btn-md lmButton">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}
