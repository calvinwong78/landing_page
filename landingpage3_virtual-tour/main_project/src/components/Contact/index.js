import React from "react";
import "./contact.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Contact = () => {
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
    <div className="contact" id="contact">
      <div className="containers">
        <div className="sub-container">
          <p>Do you have any other ideas in mind?</p>
          <p>
            We’d love to hear from you! We're all ears if you have questions
            about our services or anything.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("First Name")}
              placeholder="Email"
            />

            <div className="button-contact">
              <button className="btns">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="contactUs-heading">
        <h2>Contact Us</h2>
      </div>
    </div>
  );
};

export default Contact;
