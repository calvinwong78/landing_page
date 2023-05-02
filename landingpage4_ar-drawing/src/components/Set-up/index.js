import "./setup.css";
import React from "react";
import Slider from "react-slick";
import number1 from "../../img/number-1.png";
import number2 from "../../img/number-2.png";
import number3 from "../../img/number-3.png";
import number4 from "../../img/number-4.png";
import mainimg1 from "../../img/drawing-number-01.png";
import mainimg2 from "../../img/drawing-PROJECTOR NUMBER-02.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// Import Swiper styles
import "swiper/css";

const Setup = () => {
  return (
    <div className="Setup">
      <div className="Setup_header">
        <h2>How to set up your Augmented Reality Drawing </h2>
      </div>
      <div className="Setup_body">
        <div className="wrapper_setup">
          <Swiper
            modules={[Navigation, EffectFade]}
            navigation
            effect
            speed={800}
            slidesPerView={1}
            loop
            className="swipersetup"
          >
            <SwiperSlide className="swiperslide">
              <h1>LED</h1>
              <img src={mainimg1} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiperslide">
              <h1>PROJECTOR</h1>
              <img src={mainimg2} alt="" />
            </SwiperSlide>
          </Swiper>

          <div className="wrapper_desc">
            <div className="item_desc">
              <div className="item_header">
                <img className="item_img" src={number1} alt="number 2" />
              </div>
              <div className="item_body">
                <p>Not shown: Our software will be pre-installed on your PC.</p>
              </div>
            </div>
            <div className="item_desc">
              <div className="item_header">
                <img className="item_img" src={number2} alt="number 3" />
              </div>
              <div className="item_body">
                <p>
                  Connect your PC with a compatible display of your choice
                  (optional: LED / Projector).
                </p>
              </div>
            </div>
            <div className="item_desc">
              <div className="item_header">
                <img className="item_img" src={number3} alt="number 1" />
              </div>
              <div className="item_body">
                <p>
                  Folding tables where users can color their selected
                  template(s).
                </p>
              </div>
            </div>
            <div className="item_desc">
              <div className="item_header">
                <img className="item_img" src={number4} alt="number 1" />
              </div>
              <div className="item_body">
                <p>Users can scan their drawings using the image scanner.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
