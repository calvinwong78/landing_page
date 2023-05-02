import React, { useState } from "react";
import "./infoSection.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";
import { Await } from "react-router-dom";


const InfoSection = () => {
  const ParticlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container)
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => console.log(data);

  return (
  
    <div id="forms">
      
      <Particles
            id="tsparticles"
            init={ParticlesInit}
            loaded={particlesLoaded}
            width
            options={{
              
                fullScreen: { enable: false },
            
            
                background: {
                    color: {
                        value: "#000000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#fea400",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.2,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
      <div className="client-container " >
     
        <section className="max-width">
          <div className="form-header absolute-center">
            <div className="form-header-heading">
              <span>Fill</span> out the form below for a free trial!
            </div>
            <div className="form-heading-body">
              Getting your first trial is 100% free and fast.
            </div>
          </div>

          <div className="register ">
            <div className="col-1">
              <form
                id="form"
                className="flex flex-col"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-container">
                  <input
                    type="text"
                    {...register("First Name")}
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    {...register("Last Name")}
                    placeholder="Last Name"
                  />
                </div>

                <div className="form-container">
                  <div className="form-container-alert">
                    <input
                      type="text"
                      {...register("Email", {
                        required: "This field is required!",
                        maxLength: { value: 30, message: "maxLength exceeded" },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address",
                        },
                      })}
                      placeholder="Email*"
                    />
                    <ErrorMessage
                      errors={errors}
                      name="Email"
                      render={({ messages }) => {
                        console.log("messages", messages);
                        return messages
                          ? Object.entries(messages).map(([type, message]) => (
                              <p key={type}>{message}</p>
                            ))
                          : null;
                      }}
                    />
                  </div>
                  <div className="form-container-alert">
                    <input
                      type="text"
                      {...register("mobile", {
                        required: "This field is required!",
                        maxLength: { value: 11, message: "0 is not required" },
                        pattern: {
                          value: /^\(?(\d{3})\)?[- ]?(\d{4})[- ]?(\d{4})$/,
                          message: "Please check the 11 number ",
                        },
                      })}
                      placeholder="Mobile Number*"
                    />
                    <ErrorMessage
                      errors={errors}
                      name="mobile"
                      render={({ messages }) => {
                        console.log("messages", messages);
                        return messages
                          ? Object.entries(messages).map(([type, message]) => (
                              <p key={type}>{message}</p>
                            ))
                          : null;
                      }}
                    />
                  </div>
                </div>

                <div className="form-container">
                  <input
                    type="text"
                    {...register("Company")}
                    placeholder="Company"
                  />
                </div>
                <div className="buttons">
                <button className="btn">Get Your Free Trial!</button>
                </div>
                
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
   
  );
};

export default InfoSection;
