import "./buy.css";
import "../Model_comp/modes.css";
import React from "react";
import check from "../../img/checking.png";

const Buy = () => {
  return (
    <div className="Buy" id="buy">
      <div className="buy_heading">
        <h2>Which Option is Right for You?</h2>
      </div>
      <div className="container-buy">
        <div className="buy_wrapper">
          <div className="buy_item_header">
            <h2>Rent</h2>
          </div>
          <div className="buy_item_body">
            <p>Suitable for seasonal events with a specific period of time.</p>
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
                <img src={check} className="image-item-list" alt="check" /> PC
              </li>
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" />{" "}
                Image Scanner
              </li>
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" /> 30
                Kids Folding Tables
              </li>
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" /> 30
                Coloring Kits
              </li>
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" /> 2
                Technicians
              </li>
            </ul>
            <p className="item-notes">
              Notes : Prices vary by location. This package excludes display
              (Projector Short Throw/LED/TV).
            </p>
          </div>
        </div>
        <div className="buy_wrapper">
          <div className="buy_item_header">
            <h2>Buy</h2>
          </div>
          <div className="buy_item_body">
            <p>
              Our wide variety of themes is bound to support children’s
              creativity.
            </p>
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
                <img src={check} className="image-item-list" alt="check" /> PC
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
            <p className="item-notes-1">
              Notes : Prices vary by location. This package excludes display
              (Projector Short Throw/LED/TV).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
