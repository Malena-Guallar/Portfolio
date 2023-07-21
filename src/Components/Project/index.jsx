import React from "react";
import "../Project/style.css"
import { Browser } from "../Browser_window";
import { motion } from "framer-motion"

const Project = ({ titre, content, img, link }) => {

    return (
        <div className="project_container">
            <h1 className="projects">Projects</h1>
            <div className="infos_container">
                <h2 className="project_title">{titre}</h2>
                <p className="project_content">{content}</p>
                <br/>
                <br/>
                <motion.a 
                    className="motion-link"
                    target="_blank"
                    rel="noopener noreferrer"                    
                    href={link}>repo github</motion.a>
            </div>
            <img src={img} />
            {/* <div className="browser">
                <Browser/>
            </div> */}
        </div>
    )
}

export default Project;