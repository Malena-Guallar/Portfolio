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
                    <p>Furniture selling website with <b>MERN stack</b> (MongoDb, Express, React, NodeJs).  </p>
                    <p>During the project I mostly worked on the front-end part. I created the <b>website architecture</b> and implemented the following features : subscription and logging, displaying furnitures from the database, create filters for the UX, implementing shopping cart, as well as <b>unit and feature tests</b>.</p>
                    <p className="tools">Tools and languages we used : JS, React, NodeJs, MongoDB, Express, Vite, Html, Css, Tailwind, Git, Figma, Jest, Postman.</p>
                </div>}
            tools={"JS, React, NodeJs, MongoDB, Express, Vite, Html, Css, Tailwind, Git, Figma, Jest, Postman"}
            img={"./images/browserextension.png"}
            link={"https://github.com/Malena-Guallar/Browser_extension"}/>

        </>
    )
}

