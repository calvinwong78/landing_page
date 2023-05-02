import "./modes.css";
import React, { useState } from "react";
import check from "../../img/checking.png";
import { useForm } from "react-hook-form";

const Model = () => {
  const { register, handleSubmit } = useForm({
    criteriaMode: "all",
  });

  //buat test data muncul atau tidak
  const onSubmit = (data) => {
    console.log(data);
    
  };

  const [content, setContent] = useState("buy");
  const [selectedButton, setSelectedButton] = useState("buy");
  const [modal, setModal] = useState(false);

  const handleClick = (type) => {
    setContent(type);
    setSelectedButton(type);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="Model" id="buy/rent">
      <div className="Model_header">
        <h2> Which Option is Right for You?</h2>
      </div>
      <div className="main_body">
        <div className="Model_body">
          <button
            id="btn-prims"
            onClick={() => handleClick("buy")}
            className={selectedButton === "buy" ? "selected" : "non-selected"}
          >
            Buy
          </button>
          <button
            id="btn-prims"
            onClick={() => handleClick("rent")}
            className={selectedButton === "rent" ? "selected" : "non-selected"}
          >
            Rent
          </button>
        </div>
        <div className="Model-result">
          {content === "buy"  ? (
            <div className="Model-item">
              <div className="item-header">
                <p>
                  Suitable for seasonal events with a specific period of time.
                </p>
              </div>
              <div className="item-list">
                <p>Basic package includes : </p>
                <ul className="item-list-prev">
                <li className="item-li">
                    <img src={check} className="image-item-list" alt="check" />{" "}
                    Software for 1 Theme
                  </li>
                  <li className="item-li">
                    <img src={check} className="image-item-list" alt="check" />{" "}
                    Coloring Templates
                  </li>
                  <li className="item-li">
                    <img src={check} className="image-item-list" alt="check" />{" "}
                    PC
                  </li>
                  <li className="item-li">
                    <img src={check} className="image-item-list" alt="check" />{" "}
                    Image Scanner
                  </li>
                  <li className="item-li">
                    <img src={check} className="image-item-list" alt="check" />{" "}
                    30 Kids Folding Tables
                  </li>
                  <li className="item-li">
                    <img src={check} className="image-item-list" alt="check" />{" "}
                    30 Coloring Kits
                  </li>
                  <li className="item-li">
                    <img src={check} className="image-item-list" alt="check" />{" "}
                    2 Technicians
                  </li>
                </ul>
              </div>
              <p className="item-notes">
                Notes : Prices vary by location. This package excludes display
                (Projector Short Throw/LED/TV).
              </p>
              <div className="CTA-item">
                <button className="CTA-button" onClick={toggleModal}>
                  Request a Quote
                </button>
              </div>
              {modal && (
                <div className="modals">
                  <div className="overlay"></div>
                  <div className="modals-content">
                    <h2>Hello Modal</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="text"
                        {...register("First Name")}
                        placeholder="First Name"
                      />

                      <div className="button-contact">
                        <button className="btns">Submit</button>
                      </div>
                    </form>
                    <button className="close-modals" onClick={toggleModal}>
                      CLOSE
                    </button>
                  </div>
                </div>
              )}
             
            </div>
            ) : content === "rent" ? (
            <div className="Model-item">
              <div className="item-header">
                <p>
                  Our wide variety of themes is bound to support children’s
                  creativity.
                </p>
              </div>
              <div className="item-list">
                <p>Basic package includes : </p>
                <ul className="item-list-prev">
                  <li className="item-li">
                    <img src={check} className="image-item-list" alt="check" />{" "}
                    Software (Includes 3 Themes)
                  </li>
                  <li className="item-li">
                    <img src={check} className="image-item-list" alt="check" />{" "}
                    Coloring Templates
                  </li>
                  <li className="item-li">
                    <img src={check} className="image-item-list" alt="check" />{" "}
                    PC
                  </li>
                  <li className="item-li">
                    <img src={check} className="image-item-list" alt="check" />{" "}
                    Image Scanner
                  </li>
                  <li className="item-li">
                    <img src={check} className="image-item-list" alt="check" />{" "}
                    Display (Optional: Projector Short Throw/LED/TV)
                  </li>
                </ul>
              </div>
              <p className="item-notes">
                Notes : Prices do not include shipping and tax. Custom design
                prices are available upon request.
              </p>
              <div className="CTA-item">
                <button className="CTA-button" onClick={toggleModal}>
                  Request a Quote
                </button>
              </div>
              {modal && (
                <div className="modals">
                  <div onClick={toggleModal} className="overlay"></div>
                  <div className="modals-content">
                    <h2>Hello Modal</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Provident perferendis suscipit officia recusandae, eveniet
                      quaerat assumenda id fugit, dignissimos maxime non natus
                      placeat illo iusto! Sapiente dolorum id maiores dolores?
                      Illum pariatur possimus quaerat ipsum quos molestiae rem
                      aspernatur dicta tenetur. Sunt placeat tempora vitae enim
                      incidunt porro fuga ea.
                    </p>
                    <button className="close-modals" onClick={toggleModal}>
                      CLOSE
                    </button>
                  </div>
                </div>
              )}
              
            </div>
          ) : (
            null
          )}
        </div>
      </div>
    </div>
  );
};

export default Model;
