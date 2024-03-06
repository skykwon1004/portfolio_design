import React from "react";
import { Element } from "react-scroll";

const Intro = () => {
  return (
    <Element name="intro" className="h-screen p-10">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <div className="mb-4">
          <div className="box"></div>
          <span className="text-4xl pr-4 font-thin">Make it More</span>
          <span className="text-6xl font-semibold">Appealing,</span>
        </div>
        <span style={{ display: "block" }} className="box-02 text-lg mb-24">
          들여다보게 만들다,
        </span>
        <p className="font-light">
          한 번 더 <b className="font-semibold">들여다보게 만드는 웹사이트를</b>{" "}
          만들겠습니다.
        </p>
      </div>
    </Element>
  );
};

export default Intro;
