import React from "react";
import "../styling/homeInfoStyles.css";

export const HomeInfo = (props) => {
  const { dataObj, imgFile, rev } = props;

  return (
    <div className={rev ? "home-info-container rev" : "home-info-container"}>
      <div className="home-info-img">
        <img src={imgFile} alt="food or coffee" className="home-img" />
      </div>
      <div className="home-info-text">
        <h2 className="home-info-h2">{dataObj[0].h2Text}</h2>
        <h2 className="home-info-h2">----</h2>
        {dataObj[0].pText.map((data) => (
          <p className="home-info-p" key={data.id}>
            {data.text}
          </p>
        ))}
      </div>
    </div>
  );
};
