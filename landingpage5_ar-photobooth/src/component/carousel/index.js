import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import cirebon from "../../img/port1.png";
import port2 from "../../img/port2.png";
import port3 from "../../img/port3.1.png";
import port4 from "../../img/port4.1.jpg";
import port5 from "../../img/port5.jpg";

const SliderComponent = () => {
  const slidesData = [
    {
      id: 1,
      image: cirebon,
      heading: "Bank Indonesia Museum (Museum De Javasche Bank)",
      desc: "AR Photobooth Pose with Rupiah",
    },
    {
      id: 2,
      image: port2,
      heading:
        " Hero Face Tracking in Indonesia Maternity, Baby and Kids Expo 2013",
      desc: "Create lasting memories with our playful props",
    },
    {
      id: 3,
      image: port3,
      heading: "Free Fire Event",
      desc: " Pose with Free Fire Characters AR Photobooth",
    },
    {
      id: 4,
      image: port4,
      heading: "Perkebunan Expo",
      desc: "",
    },
    {
      id: 5,
      image: port5,
      heading: "Indonesia Museum Award (IMA)",
      desc: "",
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
        <h1>
          Whether you're planning a wedding, birthday party, or corporate event,
          our augmented reality photo booth is sure <span>to be a hit</span> with your
          guests.
        </h1>
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
