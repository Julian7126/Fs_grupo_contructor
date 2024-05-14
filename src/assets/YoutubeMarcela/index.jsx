import React from "react";
import "./styles.scss";
import images from "../img";

const YoutubeMarcela = () => {
  return (
    <div className="video-container">
      <div className="video-1">
        <div className="ratio ratio-16x9">
          <img src={images.imgh10contruccion1} alt="" />
        </div>
      </div>
      <div className="video-2">
        <div div className="ratio ratio-16x9">
          <img src={images.imgFrontPinilla} alt="" />
        </div>
      </div>
    </div>
  );
};

export default YoutubeMarcela;
