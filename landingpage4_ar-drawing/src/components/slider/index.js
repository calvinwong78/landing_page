import React from "react";
import img1 from "../../img/trans.png";
import img2 from "../../img/cimb-logo-main.png";
import img3 from "../../img/jic-logo.png";
import img4 from "../../img/vision-logo.jpeg";
import img5 from "../../img/logo-kepo.png";
import img6 from "../../img/indogreen.png";
import "./slider.css";

const Slidersec = () => {
  return (
    <div className="slider">
      <div className="slider-header">
        <h2>
          Don’t just hear the words from us, check out the perspectives of <span>our
          notable stakeholders</span>
        </h2>
      </div>
      <div className="wrapper">
        <div className="slider-item">
          <img src={img2} alt="" />
        </div>
        <div className="slider-item">
          <img src={img1} alt="" />
        </div>
        <div className="slider-item">
          <img src={img3} alt="" />
        </div>
        <div className="slider-item">
          <img src={img4} alt="" />
        </div>
        <div className="slider-item">
          <img src={img5} alt="" />
        </div>
        <div className="slider-item">
          <img src={img6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slidersec;
