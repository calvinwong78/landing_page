import React from "react";
import "./contactus2.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import contactusimg1 from "../../img/Asia Woman.png";
import contactusimg2 from "../../img/Designer.png";
import contactusimg3 from "../../img/WesternMan.png";

const Contactus2 = () => {
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
    <div className="Contactus2" id="ContactuS">
      <div className="container_contactus2">
        <div className="header-contactus2">
          <h1>Let's get in touch!</h1>
          <p>
            Feel free to ask any question you have in mind. <br></br>Contact us by general
            inquiry form to ask anything about our services and business inquiry
          </p>
          <form
            id="form-contactus"
            className="contact-us-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text-contactus"
              {...register("Email", {
                required: "This field is required!",
                maxLength: { value: 30, message: "maxLength exceeded" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              placeholder="Enter your email"
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
            <button className="contactus-btn"> Submit </button>
          </form>
        </div>
        <div className="body-contactus2">
          <div className="wrapper-img-cntus-1">
            <img src={contactusimg1} alt="" className="contact-us-1" />
          </div>
          <div className="wrapper-img-cntus-2">
            <img src={contactusimg2} alt="" className="contact-us-2" />
          </div>
          <div className="wrapper-img-cntus-3">
            <img src={contactusimg3} alt="" className="contact-us-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus2;
