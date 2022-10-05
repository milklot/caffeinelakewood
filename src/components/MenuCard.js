import React from "react";

export const MenuCard = () => {
  return (
    <div className="menu-card-container">
      <h2 className="menu-card-h2">Regular</h2>
      <div>
        <div className="menu-card-img">
          <img alt="food/drink" />
        </div>
        <div className="menu-card-text">
          <p className="menu-card-item">Drip coffee</p>
          <p className="menu-card-item-description">Small</p>
        </div>
      </div>
    </div>
  );
};
