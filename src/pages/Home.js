import React from "react";
import { HeroImg } from "../components/HeroImg";
import { HomeInfo } from "../components/HomeInfo";
import { NavBar } from "../components/NavBar";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroImg />
      <HomeInfo />
    </div>
  );
};
