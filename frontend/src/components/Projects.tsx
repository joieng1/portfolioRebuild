import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "./FooterFixed";
import "./Projects.css";

function Projects() {
    return (
        <div>
            <header className="container-fluid mt-5">
                <div className="row">
                    <div className="col text-center mt-5">
                        <h1 className="title">Projects</h1>
                    </div>
                </div>
            </header>
            <div className="container-fluid projectList mx-0">
                <p className="text-center">Work in progress</p>
            </div>
            <Footer />
        </div>
    );
}

export default Projects;
