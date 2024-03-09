import React from "react";
import { Element } from "react-scroll";
import { IoIosArrowRoundDown } from "react-icons/io";

const Intro = () => {
  return (
    <Element name="intro" className="intro h-screen flex">
      <div className="intro-content-left flex flex-col justify-center items-center flex-1">
        <div className="box-wapper mb-4">
          <div className="box"></div>
          <strong className="text-5xl font-thin block">Make it More</strong>
          <strong className="text-7xl font-semibold block">Appealing,</strong>
        </div>
        <p className="box-02 text-lg mb-32"></p>
        <p className="font-light text-lg">
          웹디자이너 경험과 프론트엔드 개발 경험을 바탕으로
        </p>
        <p className="font-light text-lg">
          한 번 더 <b className="font-semibold">들여다보게 만드는 </b> 매력적인
          웹사이트를 만들겠습니다.
        </p>
      </div>
      <div className="flex-1 img-wapper">
        <figure className="img">
          <img src="/img/me.jpg" alt="" />
        </figure>
        <div className="box-03"></div>
      </div>
      <div className="scroll-dwon">
        <IoIosArrowRoundDown />
      </div>
    </Element>
  );
};

export default Intro;
