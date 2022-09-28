import React from "react";
import { HeroImg } from "../components/HeroImg";
import { HomeInfo } from "../components/HomeInfo";
import { HomeVideo } from "../components/HomeVideo";
import { NavBar } from "../components/NavBar";

import homeVideo from "../images/file.mp4";

export const Home = () => {
  return (
    <>
      <NavBar />
      <HeroImg />
      <HomeInfo />
      <HomeVideo videoFile={homeVideo} />
    </>
  );
};
