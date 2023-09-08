import React from "react";
import Project from "../../Components/Project";
import "../Browser_extension/style.css"

export const Browser_extension = () => {

    return (
        <>
        <Project
            titre={"Browser extension"}
            content={
                <div>
                    <p>Homepage extension which displays a customed page on every new tab opening. The user finds a welcoming message, the time and weather, and its daily horoscope. </p>
                    <p>➜ I mostly worked on the global architecture of the extension : creating a form and implementing functions to stock data in browser local storage, then displaying a custom page for each user.</p>
                    <p className="tools">Tools and languages : JavaScript, html, css, svg, Postman</p>
                </div>}
            img={"./images/browserextension.png"}
            link={"https://github.com/Malena-Guallar/Browser_extension"}/>
        </>
    )
}

