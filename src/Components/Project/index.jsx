import React from "react";

const Project = ({ titre, img, link }) => {
    return (
        <div>composant parent
            <h2>{titre}</h2>
            <img src={img} />
            <a href={link} target="_blank" rel="noopener noreferrer">repo github</a>
        </div>
    )
}

export default Project;