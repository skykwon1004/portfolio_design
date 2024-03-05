import React from "react";
import { Element } from "react-scroll";

const Intro = () => {
  return (
    <Element name="intro" className="h-screen p-5">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <div>
          <span className="text-2xl pr-4">Make it More</span>
          <span className="text-5xl">Appealing,</span>
        </div>
        <span style={{ display: "block" }}>들여다보게 만들다</span>
        <p>한 번 더 들여다보게 만드는 홈페이지를 만들겠습니다.</p>
      </div>
    </Element>
  );
};

export default Intro;
