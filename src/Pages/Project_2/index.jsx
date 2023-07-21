import React from "react";
import Project from "../../Components/Project";
import "../Project_2/style.css"

export const Project_2 = () => {

    return (
        <>
        <Project
            titre={"Social network"}
            content={
                <div>
                    <p>As a group of three persons we had two weeks to create a social network website with the following features : </p>
                    <p>➜ subscription and login / posting messages / display all messages posted / database creation and use with mySql </p>
                    <p>➜ as a bonus we used an API and displayed data on the home page </p>
                    <p className="tools">Tools and languages : PHP, mySql, html, Css, Postman</p>
                </div>}
            img={"public/images/afterlife.png"}
            link={"https://github.com/Malena-Guallar/Social_network"}/>
            <img className="waves_3" src="public/images/waves_3.png"></img>
        </>
    )
}

