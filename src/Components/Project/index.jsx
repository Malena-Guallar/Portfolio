import React from "react";
import "../Project/style.css";

const Project = ({ titre, tools, img, link }) => {

  return (
    <div className="project_container">
      <h1 className="project_title">{titre}</h1>
      <img src={img} className="image_project" />
      <p className="tools">{tools}</p>
      <a
        className="link"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        ✱ repo github
      </a>
    </div>
  );
};

export default Project;
