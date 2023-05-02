import "./buy.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import check from "../../img/checking.png";

const Buy = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/req-qt");
  }

  return (
    <div className="Buy" id="package">
      <div className="buy_heading">
        <h2> What will you get?</h2>
      </div>
      <div className="container-buy">
        <div className="container-wrapper-buy">
        <div className="buy_wrapper">
          <div className="buy_item_header_1">
            <h2>Basic</h2>
          </div>
          <div className="buy_item_body">
            <ul className="item-list-prev">
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" />{" "}
                Augmented Reality Photo Booth Software: Lifetime License
              </li>
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" />{" "}
                Available in 3+ themes
              </li>
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" />{" "}
                Support for printing and sending by email
              </li>
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" />{" "}
                Basic Support Service
              </li>
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" /> 30
                Kinect + PC Adapter
              </li>
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" /> 30
                55″ TV + TV Stand
              </li>
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" /> 2 PC
              </li>
            </ul>
          </div>
         
        </div>
        <div className="buy_wrapper">
          <div className="buy_item_header">
            <h2>Pro</h2>
            <p>(Personalized Purchasing)</p>
          </div>
          <div className="buy_item_body">
            <ul className="item-list-prev">
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" />{" "}
                Augmented Reality Photo Booth Software: Lifetime License
              </li>
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" />{" "}
                Fully customizable interface
              </li>
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" />{" "}
                Support for printing and sending by email
              </li>
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" />{" "}
                Premium Support Service: Quick bug fixing
              </li>
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" /> 30
                Kinect + PC Adapter
              </li>
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" /> 30
                55″ TV + TV Stand
              </li>
              <li className="item-li">
                <img src={check} className="image-item-list" alt="check" /> 2 PC
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className="container-notes">
       <p> <span>Notes</span>  : <br></br> The basic package can be rented as well with a single theme. <br/> The
        offer does not include shipping, taxes, or other charges.</p>
      </div>
        
      </div>
     
    </div>
  );
};

export default Buy;
