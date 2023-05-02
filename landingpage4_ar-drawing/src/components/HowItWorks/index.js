import "./HIW.css";
import coloring from "../../img/krayon.png";
import scanner from "../../img/scanner.png";
import display from "../../img/display.png";
import React from "react";

const HiW = () => {
  return (
    <div className="how-it-works-container">
      <h1>How it Works</h1>
      <div className="steps-container">
        <div className="wrapper_steps">
          <div className="wrap-contain">
            <div className="image-container">
              <img className="wrap-img" src={coloring} alt="number 1" />
            </div>
            <div className="item-main">
              <h2> Coloring</h2>
              <p>Choose a drawing and color it in.</p>
            </div>
          </div>
        </div>
        <div className="wrapper_steps">
          <div className="wrap-contain">
            <div className="image-container">
              <img className="wrap-img" src={scanner} alt="number 1" />
            </div>
            <div className="item-main">
              <h2> Scanning</h2>
              <p>Place your coloring page under the scanner.</p>
            </div>
          </div>
        </div>
        <div className="wrapper_steps">
          <div className="wrap-contain">
            <div className="image-container">
              <img className="wrap-img" src={display} alt="number 1" />
            </div>
            <div className="item-main">
              <h2>  Live</h2>
              <p>Watch your drawing appear on the big screen!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiW;
