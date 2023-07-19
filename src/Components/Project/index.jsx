import React from "react";
import "../Project/style.css"
import { Browser } from "../Browser_window";

const Project = ({ titre, content, img, link }) => {

    return (
        <div className="project_container">
            <h1 className="projects">Projects</h1>
            <div className="infos_container">
                <h2 className="project_title">{titre}</h2>
                <p className="project_content">{content}</p>
                <br/>
                <br/>
                <a href={link} target="_blank" rel="noopener noreferrer">repo github</a>
            </div>
            <img src={img} />
            <Browser/>
        </div>
    )
}

export default Project;