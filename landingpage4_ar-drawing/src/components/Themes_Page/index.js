import "./Theme.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import images from "../../img/background farm.jpg";
import images1 from "../../img/background hutan.jpg";
import images2 from "../../img/background savana.jpg";
import video from "../../img/Seaview.mp4";

const Themes = () => {
  return (
    <div className="Themes_body" id="Themes">
      <div className="Themes_head">
        <div className="themes_header">
          <h2>Available Themes</h2>
        </div>
        <div className="themes_desc">
          <p>You are able to get various themes by purchasing a bundle pack.</p>
        </div>
      </div>
      <div className="wrapper_themes">
        <div className="Theme_slide">
          <Carousel
            fade
            prevIcon={<span className="carousel-control-prev-icon" />}
          >
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={images} alt="First slide" />
              <Carousel.Caption>
                <h3>Farm</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500} >
              <img className="d-block w-100" src={images1} alt="Second slide" />
              <Carousel.Caption>
                <h3>Jungle</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={images2} alt="Third slide" />
              <Carousel.Caption>
                <h3>Savana</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <video autoPlay loop muted className="video_themes">
                <source src={video} type="video/mp4" className="main_video" />
              </video>
              <Carousel.Caption>
                <h3>Under Water</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Themes;
