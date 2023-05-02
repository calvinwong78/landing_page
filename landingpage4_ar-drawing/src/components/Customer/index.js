import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imga1 from '../../img/cimb-logo-main.png';
import imga2 from '../../img/cimb-logo-main.png';
import "./client.css";


class client extends React.Component {
  state = {
    settings: {
      dots: false,
      infinite: true,
      speed: 9000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      swipeToSlide: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    },
    logos: [
      { name: 'logo1', img: imga1},
      { name: 'logo2', img: imga1 },
      { name: 'logo3', img: imga1 },
      { name: 'logo4', img: imga1 },
      { name: 'logo5', img: '../../img/Insert_logo.png' }
    ]
  }

  render() {
    const { settings, logos } = this.state;

    return (
      <div className='client'>
         <div className="client-containers">
         <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index}>
              <img src={logo.img} alt={logo.name} />
            </div>
          ))}
        </Slider>
         </div>
       
      </div>
    );
  }
}

export default client;
