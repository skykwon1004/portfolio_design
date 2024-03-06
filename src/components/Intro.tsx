import React from "react";
import { Element } from "react-scroll";

const Intro = () => {
  return (
    <Element name="intro" className="h-screen flex inner">
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="box-wapper mb-4">
          <div className="box"></div>
          {/* <span className="text-4xl pr-4 font-thin">Make it More</span> */}
          <p className="text-4xl font-thin">Make it More</p>
          <p className="text-6xl font-semibold">Appealing,</p>
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
        <figure className="img h-96">
          <img src="/img/me.jpg" alt="" />
        </figure>
        <div className="box-03"></div>
      </div>
    </Element>
  );
};

export default Intro;
