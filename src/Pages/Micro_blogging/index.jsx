import React from "react";
import Project from "../../Components/Project";
import "./style.css"

export const Micro_blogging = () => {

    return (
        <>
        <Project
            titre={"Micro blogging"}
            content={
                <div className="content">
                    <p>As a group of three persons we had two weeks to create a micro blogging platform with the following features :</p>
                    <p>➜ subscription and login / posting messages / display all messages posted / database creation and use with postgres </p>
                    <p className="tools">Tools and languages we used : Docker, Laravel, Php, Breeze, Html, Css.</p>
                </div>}
            img={"./images/micro_blogging.png"}
            link={"https://github.com/Malena-Guallar/Micro_blogging"}/>

        </>
    )
}

