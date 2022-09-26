import React from "react";
import "../styling/heroImgStyles.css";
import heroImage from "../images/hero-image.jpeg";

export const HeroImg = () => {
  return (
    <div className="hero-img-container">
      <div className="mask">
        <img className="hero-img" src={heroImage} alt="main hall" />
      </div>
      <div className="content">
        <h1>Caffeine</h1>
        <p>recharge yourself</p>
      </div>
    </div>
  );
};
