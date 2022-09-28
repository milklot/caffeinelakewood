import React from "react";
import "../styling/homeVideoStyles.css";

export const HomeVideo = (props) => {
  const { videoFile } = props;
  return (
    <div className="home-video-container">
      <video className="home-video" muted loop autoPlay>
        <source src={videoFile} type="video/mp4" />
      </video>
    </div>
  );
};
