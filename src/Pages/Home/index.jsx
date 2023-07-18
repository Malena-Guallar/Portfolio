import React from "react";
import "/src/Pages/Home/style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="group">
              <div className="div">
                <div className="ellipse" />
                <div className="ellipse-2" />
              </div>
            </div>
            <h1 className="text-wrapper">Malena Guallar</h1>
            <div className="text-wrapper-2">FRONT END DEVELOPER ___</div>
            <div className="text-wrapper-3">based in Paris</div>
            <p className="p">hi, welcome to my portfolio</p>
            <p className="text-wrapper-4">I’m looking for an internship starting in october.</p>
            <img className="image" alt="Image" src="src/images/image 1.svg" />
          </div>
          <img className="arrow" alt="Arrow" src="arrow-1.svg" />
        </div>
      </div>
    </div>
  );
};
