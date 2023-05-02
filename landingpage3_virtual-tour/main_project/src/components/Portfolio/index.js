import React from "react";
import "./portfolio.css";
import images2 from "../../img/univ.jpg";
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";

const Portfolio = () => {
  const ParticlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container)
  };
  return (
    <div className="port" id="Portfolio">
      
      <div className="sub-port max-width">
        <div className="port-heading absolute-center">
        <div className="lines"></div>
        <p>
        <span>Feed</span> your wanderlust with our tours
        </p>
          
        </div>
        
        <div className="port-body">
          <div className="port-card" >
          
            <img  src={images2} alt="" class="card-img" />
            <a href="https://virtualtour.maranatha.edu/ " >
            <div class="overlay"  >
              <div className="card-heading absolute-center" >
                <p>Maranatha University</p>
              </div>
            </div>
            </a>
          </div>
          <div className="port-card-desc">
            
            Look Around Maranatha University in 360º
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
