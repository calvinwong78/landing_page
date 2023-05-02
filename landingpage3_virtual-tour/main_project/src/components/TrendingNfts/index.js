import React from "react";
import "./trendingNfts.css";
import images from "../../img/travel.jpg";
import images1 from "../../img/education.jpg";
import RE from "../../img/real-estate.png";
import images3 from "../../img/checkmark.png";
import travelmap from "../../img/map.png";
import mortarboard from "../../img/mortar.png";
import corp from "../../img/corps.png";

import { AnimationOnScroll } from "react-animation-on-scroll";

const TrendingNfts = () => {
  return (
    <div>
      <div className="industries spacer " id="industries">
        <div className="wrapperss absolute-center max-width">
          <AnimationOnScroll
            initiallyVisible={false}
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
          >
            <div className="heading-industries">
              <span > Boost </span> Accessibility
              Anywhere and Anytime
            </div>

            <div className="heading-desc">
              Take a deep dive into some of the possibilities with a virtual
              tour.
            </div>
          </AnimationOnScroll>
        </div>
        <div className="wrapper2  max-width">
          <div className="container-wrapper">
            <div className="container-spacer">
              <AnimationOnScroll
                initiallyVisible={false}
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutUp"
              >
                <div className="box-item absolute-center">
                  <div className="item-body absolute-center">
                    <div className="heading-wrapper-1">
                      <div className="head-image">
                      <img
                          className="item-heading-image"
                          src={travelmap}
                          alt="react logo"
                        />
                      </div>
                        
                      <div className="item-heading">Travel & Tourism</div>
                      
                       
                     
                    </div>

                    <div className="flexer">
                      <div className="item-desc">
                        Let people escape from boredom and “travel” anywhere in
                        the world, right from their living room.
                      </div>{" "}
                      <div className="pointer">
                        Applications :
                        <div className="pointer-wrap">
                          <div className="pointer-body">
                            <div className="pointer-desc-1">
                              <div className="pointer-header">
                                <img
                                  className="pointer-img"
                                  src={images3}
                                  alt="react logo"
                                />
                              </div>
                              <div className="pointer-desc-body-1">
                                Trial runs of attractions
                              </div>
                            </div>
                          </div>
                          <div className="pointer-body-temp">
                            <div className="pointer-desc">
                              <div className="pointer-header">
                                <img
                                  className="pointer-img"
                                  src={images3}
                                  alt="react logo"
                                />
                              </div>
                              <div className="pointer-desc-body-1">
                                Tourism content
                              </div>
                            </div>
                          </div>
                          <div className="pointer-body">
                            <div className="pointer-desc">
                              <div className="pointer-header">
                                <img
                                  className="pointer-img"
                                  src={images3}
                                  alt="react logo"
                                />
                              </div>
                              <div className="pointer-desc-body">
                                Museum tours
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>

              <AnimationOnScroll
                initiallyVisible={false}
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutUp"
              >
                <div className="box-item absolute-center">
                  <div className="item-body absolute-center">
                    <div className="heading-wrapper-1">
                    <div className="head-image">
                      <img
                          className="item-heading-image"
                          src={mortarboard}
                          alt="react logo"
                        />
                      </div>
                      <div className="item-heading">Education</div>
                      
                     
                   
                    </div>

                    <div className="flexer">
                      <div className="item-desc">
                        Learn noteworthy sites around the world, from the
                        comfort of the classroom.
                      </div>{" "}
                      <div className="pointer">
                        Applications :
                        <div className="pointer-wrap">
                          <div className="pointer-body">
                            <div className="pointer-desc">
                              <div className="pointer-header">
                                <img
                                  className="pointer-img"
                                  src={images3}
                                  alt="react logo"
                                />
                              </div>
                              <div className="pointer-desc-body">
                                Campus tours
                              </div>
                            </div>
                          </div>
                          <div className="pointer-body-temp">
                            <div className="pointer-desc">
                              <div className="pointer-header">
                                <img
                                  className="pointer-img"
                                  src={images3}
                                  alt="react logo"
                                />
                              </div>
                              <div className="pointer-desc-body">
                                Virtual field trips
                              </div>
                            </div>
                          </div>
                          <div className="pointer-body">
                            <div className="pointer-desc">
                              <div className="pointer-header">
                                <img
                                  className="pointer-img"
                                  src={images3}
                                  alt="react logo"
                                />
                              </div>
                              <div className="pointer-desc-body">
                                Recreating the history
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="container-spacer">
              

            <AnimationOnScroll
                initiallyVisible={false}
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutUp"
              >
                <div className="box-item absolute-center">
                  <div className="item-body absolute-center">
                    <div className="heading-wrapper-1">
                    <div className="head-image">
                    <img
                          className="item-heading-image"
                          src={RE}
                          alt="react logo"
                        />
                      </div>
                      <div className="item-heading">Real Estate</div>
                     
                     
                   
                    </div>

                    <div className="flexer">
                      <div className="item-desc">
                      Let your prospective buyers get a feel for a home without visiting the location.
                      </div>{" "}
                      <div className="pointer">
                        Applications :
                        <div className="pointer-wrap">
                          <div className="pointer-body">
                            <div className="pointer-desc">
                              <div className="pointer-header">
                                <img
                                  className="pointer-img"
                                  src={images3}
                                  alt="react logo"
                                />
                              </div>
                              <div className="pointer-desc-body">
                              Showcasing a property
                              </div>
                            </div>
                          </div>
                          
                          <div className="pointer-body">
                            <div className="pointer-desc">
                              <div className="pointer-header">
                                <img
                                  className="pointer-img"
                                  src={images3}
                                  alt="react logo"
                                />
                              </div>
                              <div className="pointer-desc-body">
                              Realistic renderings of the under-constructed space
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                initiallyVisible={false}
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutUp"
              >
                <div className="box-item absolute-center">
                  <div className="item-body absolute-center">
                    <div className="heading-wrapper-1">
                    <div className="head-image">
                    <img
                          className="item-heading-image"
                          src={corp}
                          alt="react logo"
                        />
                      </div>
                 
                      <div className="item-heading">Corporate</div>
                     
                      
                    
                    </div>

                    <div className="flexer">
                      <div className="item-desc">
                      Impress your prospective customer by providing an abundance of visual information about your office. 
                      </div>{" "}
                      <div className="pointer">
                        Applications :
                        <div className="pointer-wrap">
                          <div className="pointer-body">
                            <div className="pointer-desc">
                              <div className="pointer-header">
                                <img
                                  className="pointer-img"
                                  src={images3}
                                  alt="react logo"
                                />
                              </div>
                              <div className="pointer-desc-body">
                              Virtual office tours
                              </div>
                            </div>
                          </div>
                          
                          <div className="pointer-body">
                            <div className="pointer-desc">
                              <div className="pointer-header">
                                <img
                                  className="pointer-img"
                                  src={images3}
                                  alt="react logo"
                                />
                              </div>
                              <div className="pointer-desc-body">
                              Virtual coworking space tours
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNfts;
