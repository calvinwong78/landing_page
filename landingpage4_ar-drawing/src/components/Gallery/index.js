import "./gallery.css";
import React from "react";
import insert from "../../img/insert.png";
import cimb from "../../img/cimb-gallery.png";
import JCI from "../../img/JCI.png";
import cityvision from "../../img/city.png";
import cirebon from "../../img/cirebon.png";
import kepo from "../../img/kepothumb.jpg";
import forest from "../../img/greenforestry.JPG";

const Gallery = () => {
  return (
    <div className="Gallery" id="Gallery">
      <div className="gallery-header">
        <h1>Gallery</h1>
      </div>
      <div className="gallery-body">
        <div className="gallery-item">
          <div className="img-header">
            <img className="gallery-image" src={cimb} alt="image1" />
          </div>

          <div className="img-caption">
            <h3>CIMB XTRA XPO 2020</h3>
          </div>
        </div>
        <div className="gallery-item">
          <div className="img-header">
            <img className="gallery-image" src={insert} alt="image1" />
          </div>

          <div className="img-caption">
            <h3>Trans Studio Cibubur</h3>
          </div>
        </div>
        <div className="gallery-item">
          <a href="https://youtu.be/sdIHAu3_NNk ">
            <div className="img-header">
              <img className="gallery-image" src={JCI} alt="image1" />
            </div>
          </a>
          <div className="img-caption">
            <h3>Walk For Autism JCI East Java 2022</h3>
          </div>
        </div>
      </div>
      <div className="gallery-body">
        <div className="gallery-item">
          <div className="img-header">
            <img className="gallery-image" src={cityvision} alt="image1" />
          </div>

          <div className="img-caption">
            <h3>City Vision</h3>
          </div>
        </div>
        <div className="gallery-item">
          <div className="img-header">
            <img className="gallery-image" src={cirebon} alt="image1" />
          </div>

          <div className="img-caption">
            <h3>Koperasi Cirebon</h3>
          </div>
        </div>
        <div className="gallery-item">
          <div className="img-header">
            <img className="gallery-image" src={kepo} alt="image1" />
          </div>

          <div className="img-caption">
            <h3>KEPO Market</h3>
          </div>
        </div>
      </div>
      <div className="gallery-body">
        <div className="gallery-item">
          <div className="img-header">
            <img className="gallery-image" src={forest} alt="image1" />
          </div>

          <div className="img-caption">
            <h3>13rd Indonesia Green Forestry Environment Expo 2023</h3>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Gallery;
