import React from "react";
import "/src/Pages/Home/style.css";

export const Home = () => {
  return (
    <div className="container">

    <div className="home">
      <h1 className="text-wrapper">Malena Guallar</h1>
      <div className="text-wrapper-2">FRONT END DEVELOPER ___</div>
      <div className="text-wrapper-3">based in Paris</div>
      <p className="p">hi, welcome to my portfolio</p>
      <p className="text-wrapper-4">I’m looking for a one year apprenticeship.</p>
      <p className="text-wrapper-5">I’m flexible ! I can start between october and february.</p>
      <img className="image" alt="Image" src="src/images/image 1.svg" />
      <img className="arrow" alt="Arrow" src="arrow-1.svg" />
    </div>
    </div>
  );
};