import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

import YumImage from "../images/yumProject.png";

export default function Projects() {
  return (
    <div>
      <Container fluid className="mt-5">
        <Row className="row">
          <Col className="text-center mt-5">
            <h1 className="title">Projects</h1>
          </Col>
        </Row>
      </Container>
      <Container fluid className="projectList mx-0">
        {/* <p className="text-center">Work in progress</p> */}
        <ProjectCard
          title="Yum's Recipes"
          description="This website was implemented with the MERN stack."
          image={YumImage}
          link="https://yumsrecipes.netlify.app/"
        />
      </Container>
      <Footer />
    </div>
  );
}
