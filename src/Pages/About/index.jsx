import React from "react";
import "../About/style.css";

export const About = () => {

    return (

        <div className="about">
            <img className="waves" src="/images/waves_1.png"></img>
            <img className="star" alt="Image" src="/images/image 1.svg" />
            <h1 className="title">about</h1>
            <div className="about-text">
                    <p>Hi there,</p>
                    <p>I'm Malena, developer apprentice at Ada Tech School since January 2023.</p>
                    <p>I used to be a cheffe in a restaurant, conceiving and designing courses as well as conceiving and designing apps is something I am passionate about.</p>
                    <p>I develop with <b>Javascript</b> and am currently learning Java. I like to use tools such as <b>React, Next, Jest</b>. </p>
                    <p>I love <b>tests and cleancode</b>. </p>
                    <p>Go check my repositories to learn about all the tools I'm learning.</p>
                    <p>I'm looking for a one-year apprenticeship starting between October 23 and February 24 - let's get in touch !</p>
                    <p> ➜ email me at <u>malena.guallar@gmail.com</u></p>
            </div>

            <div className="infos_container">
                <div className="tools_container">
                    <img className="star1" src="/images/image 1.svg"></img>
                    <h3 className="tools_title">TOOLS & LANGUAGES</h3>
                    <img className="tools_icons" src="/images/tools_icons.png"></img>
                </div>
                <div className="social_container">
                    <img className="star2" src="/images/image 1.svg"></img>
                    <h3 className="social_title">SOCIAL</h3>
                    <img className="social_icons" src="/images/social_icons.png"></img>
                    <div className="links">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Malena-Guallar">github</a>
                        <br/>
                        <br/>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/malenaguallar/">linkedin</a>
                        <br/>
                        <br/>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/malena100accent">instagram</a>
                    </div>

                </div>
            </div>
        </div>
    )
}