import React from "react";
import "../Project/style.css"
import { motion } from "framer-motion"

const Project = ({ titre, content, img, link }) => {

    return (
        <div className="project_container">
            <div className="project_text_wrapper">
                <div className="infos_container">
                    <h2 className="project_title">{titre}</h2>
                    <p className="project_content">{content}</p>
                    <br/>
                    <br/>
                </div>
            </div>
            <div className="wrapper">
                <img src={img} className="image_project" />
                <motion.a 
                    className="motion-link"
                    target="_blank"
                    rel="noopener noreferrer"                    
                    href={link}>➜ repo github</motion.a>
            </div>
        </div>
    )
}

export default Project;