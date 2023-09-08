import { React } from "react";
import { Home } from "../Home/index";
import { About } from "../About/index.jsx";
import { Browser_extension } from "../Browser_extension/index.jsx";
import { Social_network } from "../Social_network/index.jsx";
import { E_commerce } from "../E_commerce/index.jsx";
import { Dataviz } from "../Dataviz/index.jsx";
import { Footer } from "../Footer";
import { Micro_blogging } from "../Micro_blogging";
import "./style.css";

const pages = [
  Micro_blogging,
  E_commerce,
  Social_network,
  Browser_extension,
  Dataviz,
];

export const Global = () => {
  return (
    <div className="app_container">
      <Home />
      <About />
      {pages.map((Page, index) => (
        <div key={index} style={{ minHeight: "100%" }}>
          <Page />
        </div>
      ))}
      <Footer />
    </div>
  );
};
