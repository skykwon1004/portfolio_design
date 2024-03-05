import React from "react";
import { Element } from "react-scroll";

const Intro = () => {
  return (
    <Element name="intro" className="h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span>
          Make it More <b>Appealing,</b>
        </span>
        <strong style={{ display: "block" }}>들여다보게 만들다</strong>
        <p>한 번 더 들여다보게 만드는 홈페이지를 만들겠습니다.</p>
      </div>
    </Element>
  );
};

export default Intro;
