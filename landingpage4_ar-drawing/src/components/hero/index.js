import React from "react";
import video from "./hero2.mp4";
import "./HEROS.css";
import {Link} from 'react-scroll';

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="herohead">
        <video autoPlay loop muted className="hero__video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="hero__content">
        <h1 className="hero__title">
          Let your creativity speaks to the human soul <span>without words</span> 
        </h1>
        <p className="hero__text">
          Imagine a place where your drawings can move around in a fantastic
          life-like scenario.
        </p>
        <div className="hero-button">
        <Link to="forms" spy={true} smooth={false} offset={-90} duration={500} className="button-quota" >Request a Quote</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
