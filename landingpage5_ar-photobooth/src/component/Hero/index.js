import React from "react";
import "./hero.css";
import heroimg from "../../img/arhero.png";
import {Link} from 'react-scroll';

const Hero = () => {
  return (
    <div className="Hero" id="hero">
      <div className="Hero-container">
        <div className="Hero-header">
          <h1>
            <span>Create lasting memories</span> that will be treasured for
            years to come.
          </h1>
          <div className="hero-head-CTA">
           <Link to="forms" className="hero-CTA" spy={true} smooth={true} offset={-60} duration={500} >Contact Us</Link>
          </div>
        </div>
        <div className="Hero-body">
          <img className="item-hero-img" src={heroimg} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
