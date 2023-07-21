import React from "react";
import "../About/style.css";
import { motion } from "framer-motion";

export const About = () => {

    return (

        <div className="about">
            <img className="waves" src="public/images/waves_1.png"></img>
            <img className="star" alt="Image" src="src/images/image 1.svg" />
            <motion.h1 className="title" initial={{ x: 160, y: 873 }} animate={{ x: 0, y:0 }} transition={{ duration: 0.5 }}>
                about</motion.h1>
            <motion.div className="about-text" initial={{ x: -200, y: -873 }} animate={{ x: 0, y:0 }} transition={{ duration: 0.5 }}>
                    <p>Hi there,</p>
                    <p>I'm Malena, developer apprentice at Ada Tech School since January 2023.</p>
                    <p>I used to be a cheffe in a restaurant, conceiving and designing courses as well as conceiving and designing apps is something I am passionate about.</p>
                    <p>I develop with Javascript and am currently learning Java. I like to use tools such as React, Next, Jest. </p>
                    <p>I love tests and cleancode. </p>
                    <p>Go check my repositories to learn about all the tools I'm learning.</p>
                    <p>I'm looking for a one-year apprenticeship starting between October 23 and February 24 - let's get in touch !</p>
            </motion.div>

            <div className="infos_container">
                <div className="tools_container">
                    <img className="star1" src="public/images/image 1.svg"></img>
                    <h3 className="tools_title">TOOLS & LANGUAGES</h3>
                    <img className="tools_icons" src="public/images/tools_icons.png"></img>
                </div>
                <div className="social_container"></div>
            </div>
        </div>
    )
}