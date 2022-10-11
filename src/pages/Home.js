import React from "react";
import { HeroImg } from "../components/HeroImg";
import { HomeInfo } from "../components/HomeInfo";
import { HomeVideo } from "../components/HomeVideo";
import { NavBar } from "../components/NavBar";

import homeVideo from "../images/file.mp4";
import img1 from "../images/home-info1.jpeg";
import img2 from "../images/home-info2.jpeg";
import img3 from "../images/home-info3.jpeg";
import { homeData1 } from "../data/home-data.js";
import { homeData2 } from "../data/home-data.js";
import { homeData3 } from "../data/home-data.js";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <NavBar />
      <HeroImg />
      <HomeInfo dataObj={homeData1} imgFile={img1} />
      <HomeVideo videoFile={homeVideo} />
      <HomeInfo dataObj={homeData2} imgFile={img2} rev={true} />
      <HeroImg noContext={true} />
      <HomeInfo dataObj={homeData3} imgFile={img3} />
      <Footer />
    </>
  );
};
