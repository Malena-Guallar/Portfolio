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
                    <p>As a group of three persons we decided to create a homepage extension which displays a customed page on every new tab opening. The user finds a welcoming message, the time and weather, and its daily horoscope. </p>
                    <p>During this project I mostly worked on the global architecture of the extension : creating a form and implementing functions to stock data in browser local storage, then displaying a custom page for each user. I customed the API requests with the data from local storage and the date, to display a horoscope that changes in accordance with the sign of the user, and of course changes everyday. We chose to display a nice design with animation from a SVG code we found on the web on top of some CSS work.</p>
                    <p className="tools">Tools and languages : JavaScript, html, css, svg, Postman</p>
                </div>}
            img={"public/images/brower_extension.png"}
            link={"https://github.com/Malena-Guallar/Browser_extension"}/>
            <img className="waves_4" src="/public/images/waves_2.png"></img>
        </>
    )
}

