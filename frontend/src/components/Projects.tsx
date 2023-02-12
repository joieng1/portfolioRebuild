import { Container, Row, Col } from "react-bootstrap";
import Footer from "./FooterFixed";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
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
        <p className="text-center">Work in progress</p>
        <ProjectCard title="Hello" description="" image="" link="" />
      </Container>
      <Footer />
    </div>
  );
}

export default Projects;
