import React from "react";
import "../Footer/style.css"

export const Footer = () => {

    return (
        <div className="footer">
            {/* <p className="infos">this app was designed and developed by myself using React with Vite © Malena Guallar 2023</p> */}
            <div className="footer_infos">
                <p className="nums">❊ 2711</p>
                <img className="M" src="./images/M.png" />
                <p className="name"> &emsp; Malena Guallar © 2023</p> 
                <br/>
                <div className="location_wrapper">
                    <img className="latlong" src="./images/latlong.png" />
                        <p className="location">&emsp;Montreuil ✱, </p>
                        <p className="location"> France 93100</p>
                </div>
                <p className="mail"> &#123; ☎ malena.guallar@gmail.com &#125; </p>
            </div>
        </div>
    )
}

// ✱❊☎ 

