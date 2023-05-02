import React from "react";
import "./brands.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import images3 from "../../img/fold1.jpg";
import logo1 from "../../img/view2.png";
import logo2 from "../../img/text.png";
import logo3 from "../../img/voice-message.png";
import logo4 from "../../img/chat-option.png";

const Features = () => {
  return (
    <div className="features " id="features">
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeInUp animate__fast"
        animateOut="animate__fadeOut animate__fast"
      >
        <div className="wrapper max-width">
          <div className="image-feature">
            <img className="hero-brands" src={images3} alt="react logo" />
          </div>
          <AnimationOnScroll
              initiallyVisible={false}
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOut"
            >
          <div className="sub-features">
          
              <div className=" features-heading ">
                Sit back, relax, and let us do your
                needs
              </div>
           
              <div className="features-desc">
                You can customize a wide array of interactive information: text,
                audio, URL, email, and image
              </div>
           

            <div className="features-card">
            <div className="features-card-wrapper">
             
                <div className="features-card-item ">
                  <div className="card-item-icon"><img className="logo" src={logo1} alt="react logo" /></div>
                  <div className="card-item-heading">360 Video</div>
                  <div className="card-item-desc">
                    {" "}
                    360-degree panoramic rotating video to look around at all
                    angles.
                  </div>
                </div>
              
            
                <div className="features-card-item ">
                <div className="card-item-icon"><img className="logo" src={logo2} alt="react logo" /></div>
                  <div className="card-item-heading">Text and Image</div>
                  <div className="card-item-desc">
                    {" "}
                    It’s possible to show comprehensive information with text
                    and images.
                  </div>
                </div>
             
              </div>
              <div className="features-card-wrapper">
                <div className="features-card-item">
                <div className="card-item-icon"><img className="logo" src={logo3} alt="react logo" /></div>
                  <div className="card-item-heading">
                    Audio 
                  </div>
                  <div className="card-item-desc">
                    {" "}
                    Catch the visitors' attention and direct them in their
                    engagement with the tour.
                  </div>
                </div>
            
                <div className="features-card-item">
                <div className="card-item-icon"><img className="logo" src={logo4} alt="react logo" /></div>
                  <div className="card-item-heading"> Embedded Content</div>
                  <div className="card-item-desc">
                    {" "}
                    Illustrate your business extensively with embedded content.
                  </div>
                </div>
            
              </div>
            </div>
            
          </div>
          </AnimationOnScroll>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Features;
