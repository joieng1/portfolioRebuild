// Project card component
import { Button } from "react-bootstrap";
import "./ProjectCard.css";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: Project) {
  return (
    <div>
      <div className="mt-5 project-card">
        <h2 className="project-title">{title}</h2>
        <p className="proj-desc">{description}</p>
        <img
          className="project-image"
          src={image}
          alt="Project homepage"
          width="288.5"
          height="384"
        />
        <a href={link} target="_blank" rel="noreferrer">
          <Button className="btn btn-md project-button">Click here</Button>
        </a>
        <p className="proj-tech">
          Technologies used: MongoDB, React, Express, Node.js{" "}
        </p>
      </div>
    </div>
  );
}
