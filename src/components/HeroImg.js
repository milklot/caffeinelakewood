import React from "react";
import "../styling/heroImgStyles.css";

export const HeroImg = (props) => {
  const { noContext } = props;
  return (
    <div
      className={
        noContext ? "hero-img-container-no-context" : "hero-img-container"
      }
    >
      <div className="content">
        {noContext ? (
          <></>
        ) : (
          <>
            <h1>Caffeine</h1>
            <p>- Recharge yourself -</p>
          </>
        )}
      </div>
    </div>
  );
};
