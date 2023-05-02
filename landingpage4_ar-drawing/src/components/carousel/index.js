import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselss.css";
import insert from "../../img/insert.png";
import cimb from "../../img/cimb-gallery.png";
import JCI from "../../img/JCI.png";
import cityvision from "../../img/city.png";
import cirebon from "../../img/cirebon.png";
import kepo from "../../img/kepothumb.jpg";
import forest from "../../img/greenforestry.JPG";

const SliderComponent = () => {
  const slidesData = [
    {
      id: 1,
      image: cimb,
      heading: "CIMB XTRA XPO 2020",
    },
    {
      id: 2,
      image: insert,
      heading: " Trans Studio Cibubur",
    },
    {
      id: 3,
      image: cityvision,
      heading: "City Vision",
    },
    {
      id: 4,
      image: cirebon,
      heading: "Koperasi Cirebon",
    },
    {
      id: 5,
      image: kepo,
      heading: "KEPO Market",
    },
    {
      id: 6,
      image: forest,
      heading: "13rd Indonesia Green Forestry Environment Expo 2023",
    },
    {
      id: 7,
      image: JCI,
      heading: "Walk For Autism JCI East Java 2022",
    },
  ];

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 950) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <div className="slider-container" id="gallery">
      <div className="portfolio-headers">
        <h1>Gallery</h1>
      </div>
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="slidess">
            <img src={slide.image} alt={slide.heading} />
            <div className="slide-content">
              <h2>{slide.heading}</h2>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
