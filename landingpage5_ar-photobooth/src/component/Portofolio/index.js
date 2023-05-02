import React from "react";
import "./portofolio.css";
import cirebon from "../../img/port1.png";
import port2 from "../../img/port2.png";
import port3 from "../../img/port3.1.png";
import port4 from "../../img/port4.1.jpg";
import port5 from "../../img/port5.jpg";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="portfolio-header">
        <h1>
          Whether you're planning <span>a wedding</span>,
          <span> birthday party</span>, or <span>corporate event</span>, our
          augmented reality photo booth is sure to be a hit with your guests.
        </h1>
      </div>
      <div className="portfolio-body">
        <div className="portfolio-container">
          <div className="portfolio-wrapper">
            <div className="wrapper-img">
              <img className="wrapper-image" src={cirebon} alt="" />
            </div>
            <div className="wrapper-title">
              <h2> Bank Indonesia Museum (Museum De Javasche Bank)</h2>
            </div>
            <div className="wrapper-desc">
              <p> AR Photobooth Pose with Rupiah</p>
            </div>
          </div>
          <div className="portfolio-wrapper">
            <div className="wrapper-img">
              <img className="wrapper-image" src={port2} alt="" />
            </div>
            <div className="wrapper-title">
              <h2>
                Hero Face Tracking in Indonesia Maternity, Baby and Kids Expo
                2013
              </h2>
            </div>
            <div className="wrapper-desc">
              <p> Create lasting memories with our playful props</p>
            </div>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="portfolio-wrapper">
            <div className="wrapper-img">
              <img className="wrapper-image" src={port3} alt="" />
            </div>
            <div className="wrapper-title">
              <h2> Free Fire Event</h2>
            </div>
            <div className="wrapper-desc">
              <p> Pose with Free Fire Characters AR Photobooth</p>
            </div>
          </div>
          <div className="portfolio-wrapper">
            <div className="wrapper-img">
              <img className="wrapper-image" src={port4} alt="" />
            </div>
            <div className="wrapper-title">
              <h2>
              Perkebunan Expo
              </h2>
            </div>
            <div className="wrapper-desc">
              <p> </p>
            </div>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="portfolio-wrapper">
            <div className="wrapper-img">
              <img className="wrapper-image" src={port5} alt="" />
            </div>
            <div className="wrapper-title">
              <h2>
              Indonesia Museum Award (IMA)
              </h2>
            </div>
            <div className="wrapper-desc">
              <p> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
