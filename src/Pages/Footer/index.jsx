import React from "react";
import "../Footer/style.css";
import { useTheme } from "../../ThemeProvider";

export const Footer = () => {

    const { theme } = useTheme();

    const date = new Date().getFullYear();

    return (
        <div className={`footer ${theme}`}>
            <div className="footer_infos">
                <p className="nums">❊ 2711</p>
                <img className="M" src={theme === "light" ? "./images/M_red.png" : "./images/M_pink.png"} />
                <p className="name"> &emsp; Malena Guallar © {date}</p> 
                <br/>
                <div className="location_wrapper">
                    <img className="latlong" src={theme === "light" ? "./images/latlong_red.png" : "./images/latlong_pink.png"} />
                        <p className="location">&emsp;Montreuil ✱, </p>
                        <p className="location"> France 93100</p>
                </div>
                <p className="mail"> &#123; ☎ malena.guallar@gmail.com &#125; </p>
            </div>
        </div>
    )
}

// ✱❊☎ 

