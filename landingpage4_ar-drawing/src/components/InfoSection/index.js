import React, { useState } from "react";
import "./infoSection.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { Await } from "react-router-dom";
import Select from "react-select";

const InfoSection = () => {
  const ParticlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
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

  const options = [
    { value: "Education", label: "Education" },
    { value: "Museums & Exhibits", label: "Museums & Exhibits" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Hospitality", label: "Hospitality" },
    { value: "Other", label: "Other" },
  ];

  const options1 = [
    { value: "Google", label: "Google" },
    { value: "Social Media", label: "Social Media" },
    { value: "Referral/Recommendation", label: "Referral/Recommendation" },
    { value: "Trade Show", label: "Trade Show" },
    {
      value: "Saw Your Product Somewhere",
      label: "Saw Your Product Somewhere",
    },
    { value: "Other", label: "Other" },
  ];

  const options2 = [
    { value: "Buy", label: "Buy" },
    { value: "Buy (Custom)", label: "Buy (Custom)" },
    { value: "Rental", label: "Rental" },
  ];
  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption);
  };
  const styling = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparant",
      boxShadow: "none",
      width: "580px",
      border: "none",
      borderBottom: "2px solid rgb(252, 188, 104)",
      borderRadius: "0px",
      marginTop: "18px",
      marginRight: "187px",
      "@media only screen and (max-width: 500px)": {
        ...styles["@media only screen and (max-width: 500px)"],
        width: "330px",
      },
    }),
  };

  return (
    <div className="formss" id="forms">
      <Particles
        id="tsparticles"
        init={ParticlesInit}
        loaded={particlesLoaded}
        width
        options={{
          fullScreen: { enable: false },

          background: {
            color: {
              value: "#ffffff",
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
              color: "rgb(76, 120, 243)",
              distance: 150,
              enable: true,
              opacity: 1,
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
              value: 0.5,
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
      <div className="client-container ">
        <section className="max-width">
          <div className="form-header absolute-center">
            <div className="form-header-heading">
             <h2>Fill out the form below for a free trial!</h2> 
            </div>
            <div className="form-heading-body">
              <p>Getting your first trial is 100% free and fast.</p>
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
                    placeholder="First Name*"
                  />
                  <input
                    type="text"
                    {...register("Last Name")}
                    placeholder="Last Name*"
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
                  <Select
                    classNamePrefix="select-selection"
                    options={options}
                    onChange={handleChange}
                    styles={styling}
                    placeholder="Industry"
                  />

                  <input
                    type="text"
                    {...register("Company")}
                    placeholder="Company"
                  />
                </div>

                <div className="form-container">
                  <Select
                    classNamePrefix="select-selection"
                    options={options1}
                    onChange={handleChange}
                    styles={styling}
                    placeholder="How did you hear about us?"
                  />
                  <input
                    type="text"
                    {...register("Job Title")}
                    placeholder="Job Title"
                  />
                </div>

                <div className="form-container">
                  <Select
                    classNamePrefix="select-selection"
                    options={options2}
                    onChange={handleChange}
                    styles={styling}
                    placeholder="What model are you interested in?"
                  />
                  <input
                    type="text"
                    {...register("Notes and remarks")}
                    placeholder="Notes and remarks"
                  />
                </div>

                <div className="buttons">
                  <button className="btnns"> Request a Quote</button>
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
