import "./review.css";
import React from "react";
import logo from "../../img/Insert_logo.png";
import logo1 from "../../img/logo-kepo.png";

const Review = () => {
  return (
    <div className="Review" id="review">
      <div className="Review-header">
        <h2>What they are saying</h2>
      </div>
      <div className="Review-body">
        <div class="bubble bubble-bottom-left">
          <div className="review-wrapper">
            <div className="Review-desc">
              <p>
                “This is a sophisticated technology–capable of turning images
                into attractive holograms that are pleasing to the eye”
              </p>
            </div>
            <div className="Reviewer">
              <div className="rev-border-img">
                <img className="Review-images" src={logo} alt="Logo" />
              </div>
              <h3>Insert Pagi</h3>
            </div>
          </div>
        </div>
        <div class="bubble bubble-bottom-left">
          <div className="review-wrapper">
            <div className="Review-desc">
              <p>
                “Children can learn how to color and interact with their own drawings”
              </p>
            </div>
            <div className="Reviewer">
              <div className="rev-border-img">
                <img className="Review-images" src={logo1} alt="Logo" />
              </div>
              <h3> KEPO Market</h3>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Review;
