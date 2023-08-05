import React from "react";
import "../About/style.css";

export const About = () => {

    return (

        <div className="about">
            {/* <img className="waves" src="./images/waves1.png" /> */}
            <div className="title-wrapper">
                <img className="star" alt="Image" src="./images/image1.svg" />
                <h1 className="title">about</h1>
            </div>
            <div className="about-text">
                    <p>Hi there,</p>
                    <p>I'm Malena, developer apprentice at Ada Tech School since January 2023.</p>
                    <p>I used to be a cheffe in a restaurant, conceiving and designing courses as well as conceiving and designing apps is something I am passionate about.</p>
                    <p>I develop with <b>Javascript</b> and am currently learning Java. I like to use tools such as <b>React, Next, Jest</b>. </p>
                    <p>I love <b>tests and cleancode</b>. </p>
                    <p>Go check my repositories to learn about all the tools I'm learning.</p>
                    <p>I'm looking for a one-year apprenticeship starting between October 23 and February 24 - let's get in touch !</p>
                    <p> ➜ email me at malena.guallar@gmail.com</p>
            </div>

            <div className="infos_container">
                <div className="tools_container">
                    <img className="star1" src="./images/image1.svg" />
                    <h4 className="tools_title">TOOLS & LANGUAGES</h4>
                    <div className="logos_wrapper_1">
                        <table>
                            <tr>
                                <td><img src="./images/JS.png" /></td>
                                <td><img src="./images/HTML.png" /></td>
                                <td><img src="./images/CSS.png" /></td>
                            </tr>
                            <tr>
                                <td><img src="./images/NextJS.png" /></td>
                                <td><img src="./images/React.png" /></td>
                                <td><img src="./images/Tailwind.png" /></td>  
                            </tr>
                            <tr>
                                <td><img src="./images/Jest.png" /></td>
                                <td><img src="./images/Figma.png" /></td>
                            </tr>
                        </table>
                        <p className="logos_text">javascript, html, css, nextjs, react, tailwind, jest, figma</p>
                    </div>
                </div>
                <div className="social_container">
                    <img className="star2" src="./images/image1.svg" />
                    <h4 className="social_title">SOCIAL</h4>
                    <div className="logos_wrapper_1">
                        <table>
                            <tr>
                                <td><img src="./images/git.png" /></td>
                                <td><a target="_blank" rel="noopener noreferrer" href="https://github.com/Malena-Guallar">github</a></td>
                            </tr>
                            <tr>
                                <td><img src="./images/linkedin.png" /></td>
                                <td><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/malenaguallar/">linkedin</a></td>
                            </tr>
                            <tr>
                                <td><img src="./images/insta.png" /></td>
                                <td><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/malena100accent">instagram</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}