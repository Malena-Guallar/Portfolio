import React from "react";
import "../About/style.css";
import ArrowPrevious from "/Users/malena/ada_perso/projets_perso/portfolio/portfolio/_Portfolio/src/Components/ArrowPrevious/index.jsx"
import ArrowNext from "../../Components/ArrowNext";

export const About = () => {

    return (

        <div className="container">
            <img className="star" alt="Image" src="src/images/image 1.svg" />
            <h1 className="title">about</h1>
            <div className="about-text">
                    <p>Hi there,</p>
                    <p>I'm Malena, developer apprentice at Ada Tech School since January 2023.</p>
                    <p>I used to be a cheffe in a restaurant, conceiving and designing courses as well as conceiving and designing apps is something I am passionate about.</p>
                    <p>I develop with Javascript and am currently learning Java. I like to use tools such as React, Next, MongoDB. Go check my repositories to learn about all the tools I'm learning.</p>
                    <p>I'm looking for a one-year apprenticeship starting between October 23 and February 24 - let's get in touch !</p>
            </div>
                <div className="icons_container">
                    <img src = "src/images/TOOLS.svg"/>
                    <img src = "src/images/SOCIAL.svg"/>
                </div>
            <div className="arrow_bottom"> 
                <ArrowNext/>
            </div>
        </div>
    )
}

{/* <p className="title-1">TOOLS & LANGUAGES ___________________________________</p>
<img className="tools_icons" alt="Image" src="src/images/tools_icons.png" />
<p>___________________________________</p>
<p className="text_ex">javascript, html, css, java, tailwind, nextjs, react, vite, nodejs, express, mysql, jest, figma, git, postman</p> */}
{/* <div className="social_container">
<p className="title-2">SOCIAL ___________________________________</p>
<img className="social_icons" alt="Image" src="src/images/social_icons.png" />
<p>___________________________________</p>
</div> */}