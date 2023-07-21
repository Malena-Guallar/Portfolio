import React from "react";
import Project from "../../Components/Project";
import "./style.css"

export const E_commerce = () => {

    return (
        <>
        <Project
            titre={"E-Commerce"}
            content={
                <div className="content">
                    <p>As a group of ten people we had two weeks to create a furniture selling website, from back-end to front-end. We chose tu use the stack MERN (MongoDb, Express, React, NodeJs).  </p>
                    <p>During the project I mostly worked on the front-end part. I created the website architecture and implemented the following features : subscription and logging, displaying furnitures from the database, create filters for the UX, implementing shopping cart.</p>
                    <p>Using React with this project was a good opportunity to discover React hooks and props, and to work with the database's API.</p>
                    <p>That project was also a good opportunity to work on tests. We spent two days unit testing our server, routes and api with Jest.</p>
                    <p className="tools">Tools and languages we used : JS, React, NodeJs, MongoDB, Express, Vite, Html, Css, Tailwind, Git, Figma, Jest, Postman.</p>
                </div>}
            img={"portfolio/_Portfolio/src/images/brower_extension.png"}
            link={"https://github.com/Malena-Guallar/Browser_extension"}/>
            <img className="waves_1" src="public/images/waves_2.png"/>
        </>
    )
}

