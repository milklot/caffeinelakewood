import React from "react";
import "../styling/homeInfoStyles.css";
import homeInfo1 from "../images/home-info1.jpeg";

export const HomeInfo = () => {
  return (
    <div className="home-info-container">
      <div className="home-info-img">
        <img src={homeInfo1} alt="coffee" className="home-img" />
      </div>
      <div className="home-info-text">
        <h2 className="home-info-h2">Caffeine & Me</h2>
        <h2 className="home-info-h2"> ----</h2>
        <p className="home-info-p">
          We are a local independent coffee-shop located in Lakewood, OH.
        </p>
        <p className="home-info-p">
          At Caffeine, our goal is to make your day better. This is why we serve
          great coffee, fresh baked pastries and delicious croissants. So come
          in and recharge yourself!
        </p>
      </div>
    </div>
  );
};
