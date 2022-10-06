import React, { useState } from "react";
import { NavBar } from "../components/NavBar.js";
import { Footer } from "../components/Footer.js";
import { drinkData, foodData } from "../data/menu-data.js";
import { MenuCard } from "../components/MenuCard.js";
import "../styling/menuStyles.css";

export const Menu = () => {
  // console.log(drinkData);
  // console.log(foodData);

  const [isDrink, setIsDrink] = useState(true);

  const btnChange = () => {
    setIsDrink(!isDrink);
    console.log("btn pressed");
  };
  return (
    <>
      <NavBar />
      <div className="menu-container">
        <div className="menu-btns">
          <button className="menu-btn" onClick={() => btnChange()}>
            Drinks
          </button>
          <button className="menu-btn" onClick={() => btnChange()}>
            Food
          </button>
        </div>
        <MenuCard itemsData={isDrink ? drinkData : foodData} />
        <div></div>
      </div>
      <Footer />
    </>
  );
};
