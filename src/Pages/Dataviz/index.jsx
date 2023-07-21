import React from "react";
import Project from "../../Components/Project";
import "./style.css";

export const Dataviz = () => {

    return (
        <>
        <Project
            titre={"Dataviz"}
            content={
                <div className="content">
                    <p>This project was designed as a group exercise in order to learn how to use API requests to create a dynamic webpage. We used several API in order to render time and weather informations, with a map, centered on Paris' tenth arrondissement, with drawings of the neighbouring parks and green spaces. We used Paris Data and a weather API.</p>
                    <p className="tools">Tools and languages we used : JS, Html, Css, Git, Figma, Jest, Postman.</p>
                </div>}
            img={"public/images/dataviz.png"}
            link={"https://github.com/Malena-Guallar/Dataviz-API"}/>
        </>
    )
}

