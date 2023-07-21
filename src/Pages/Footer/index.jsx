import React from "react";
import "../Footer/style.css"

export const Footer = () => {

    return (
        <div className="footer">
            {/* <p className="infos">this app was designed and developed by myself using React with Vite © Malena Guallar 2023</p> */}
            <div className="footer_infos">
                <p>✱❊☎ 2711</p>
                <img className="M" src="public/images/M.png" />
                <p> Malena Guallar</p> 
                <br/>
                <img className="C" src="public/images/copyright.png" /> 
                <p>Montreuil ✱ </p>
                <img className="latlong" src="public/images/latlong.png" />
                <p>France 93100</p>
                <br/>
                <p>malena.guallar@gmail.com</p>
            </div>
        </div>
    )
}