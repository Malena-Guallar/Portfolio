import React from "react";
import Project from "../../Components/Project";
import "./style.css"

export const Social_network = () => {

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
            img={"./images/afterlife.png"}
            link={"https://github.com/Malena-Guallar/Social_network"}/>
            <img className="waves_3" src="./images/waves3.png" />
        </>
    )
}

