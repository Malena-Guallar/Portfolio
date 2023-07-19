import React from "react";
import "../About/style.css"


export const About = () => {

    return (

        <div className="container">

            <img className="star" alt="Image" src="src/images/image 1.svg" />
            <h1 className="title">about</h1>
            <p className="about-text">I’m looking for an internship starting in october. blablabli blablablou blabliliblabl iebbk; sbfksw bqbnw :kfbomrhqlbflf</p>
            <div className="icons_container">
                <div className="languages_container">
                    <p className="title-1">TOOLS & LANGUAGES</p>
                    <p>_________________</p>
                    <img className="tools_icons" alt="Image" src="src/images/tools_icons.png" />
                    <p>_________________</p>
                    <p className="text">javascript, html, css, java, tailwind,</p> 
                    <p className="text">nextjs, react, vite, nodejs, express, </p>
                    <p className="text">mysql, jest, figma, git, postman</p>
                </div>
                <div className="socia_container">
                <p className="title-2">social</p>
                    <p>_________________</p>
                    <img className="social_icons" alt="Image" src="src/images/social_icons.png" />
                    <p>_________________</p>

                </div>
            </div>
        </div>
    )

}

