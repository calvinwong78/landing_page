import "./contacus.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";

const Contact = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [projectDescription, setProjectDescription] = useState("");
  const [formError, setFormError] = useState(null);

  function handleCheckbox1Change(event) {
    setIsChecked1(event.target.checked);
  }

  function handleCheckbox2Change(event) {
    setIsChecked2(event.target.checked);
  }

  function handleProjectDescriptionChange(event) {
    setProjectDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isChecked1 && !isChecked2) {
      setFormError("Please select at least one option.");
      toast.error("Please select at least one option.", {
        autoClose: 2000,
        position: "top-center",
      });
      return;
    }
    const selectedValues = [];
    if (isChecked1) {
      selectedValues.push("Basic");
    }
    if (isChecked2) {
      selectedValues.push("Pro");
    }
    console.log(`Selected values: ${selectedValues.join(", ")}`);
    console.log(`Project description: ${projectDescription}`);
    setFormError(null);
  }
  return (
    <div className="Contact">
      <div className="contact-header">
        <h1>
          Don't miss out on this incredible experience - book today and take
          your event to the next level!
        </h1>
      </div>
      <div className="contact-body">
        <form onSubmit={handleSubmit}>
          Which systems are you interested in?
          <br />
       
            <Checkbox
              animation="rotate"
              shape="round"
              color="info"
              checked={isChecked1}
              onChange={handleCheckbox1Change}
              
            >
              Basic
            </Checkbox>
          <br />
          <Checkbox
            animation="rotate"
            shape="round"
            color="info"
            checked={isChecked2}
            onChange={handleCheckbox2Change}
          >
            Pro
          </Checkbox>
          <br />
          <label>
            Project Description <span>(optional) </span>
            <br />
            <textarea
              style={{
                border: "none",
                borderBottom: "4px solid #d16a1d",
                resize: "none",
                backgroundColor: "transparent",
                borderRadius: "3px",
                width: "230px",
                height: "50px",
                outline: "none",
                fontSize: "19px",
              }}
              value={projectDescription}
              onChange={handleProjectDescriptionChange}
            />
          </label>
          <br />
          <button className="contact-button" type="submit">
            Schedule a Call
          </button>
          <ToastContainer
            toastStyle={{ backgroundColor: "#ff6666", color: "white" }}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
