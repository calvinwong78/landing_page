import "./HIW.css";
import pose from "../../img/hiw-1.png";
import snap from "../../img/hiw-2.png";
import print from "../../img/hiw-3.png";
import React from "react";

const HiW = () => {
  return (
    <div className="how-it-works-container" id="hiw">
      <h1>How it Works</h1>
      <div className="steps-container">
        <div className="wrapper_steps">
          <div className="wrap-contain">
            <div className="image-container">
              <img className="wrap-img" src={pose} alt="number 1" />
            </div>
            <div className="item-main">
              <h2>Pose</h2>
              <p>Position yourself in front of the camera and choose the virtual 3D props.</p>
            </div>
          </div>
        </div>
        <div className="wrapper_steps">
          <div className="wrap-contain">
            <div className="image-container">
              <img className="wrap-img" src={snap} alt="number 1" />
            </div>
            <div className="item-main">
              <h2> Snap</h2>
              <p>Proceed to capture a selfie with your palm</p>
            </div>
          </div>
        </div>
        <div className="wrapper_steps">
          <div className="wrap-contain">
            <div className="image-container">
              <img className="wrap-img" src={print} alt="number 1" />
            </div>
            <div className="item-main">
              <h2>  Print and Share</h2>
              <p>You can instantly print it and share it on email and social media.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiW;
