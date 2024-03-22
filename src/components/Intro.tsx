import React from "react";
import { Element } from "react-scroll";
import { IoIosArrowRoundDown } from "react-icons/io";
import useDarkModeStore from "../zustand/useDarkModeStore";

const Intro = () => {
  const { darkMode } = useDarkModeStore();
  return (
    <Element name="intro">
      <div className="intro">
        <div className="intro-content h-screen flex flex-col items-center justify-center">
          <div className="intro-content-left flex flex-col justify-center items-center max-md:mb-10">
            <div className="box-wapper mb-10 max-xl:mt-10">
              <strong className="text-5xl font-thin max-md:text-3xl max-xl:block max-md:text-center text-animate mb-2 mx-4">
                Make it More
              </strong>
              <strong className="text-7xl font-semibold max-md:text-5xl max-xl:block  max-md:text-center text-animate">
                Appealing,
              </strong>
            </div>
            <div className="text-wapper">
              <p className="font-light text-xl max-md:text-base text-center">
                웹디자이너 경험과 프론트엔드 개발 경험을 바탕으로
              </p>
              <p className="font-light text-xl max-md:text-base text-center">
                한 번 더 들여다보게 만드는{" "}
                <b className="font-semibold">매력적인 웹사이트를</b>{" "}
                만들겠습니다.
              </p>
            </div>
            <div className="sticker-img">
              <figure className="box-item box-01 w-1/12 max-md:w-2/12">
                <img src="/img/ex-01.png" alt="js 글자 이미지" />
              </figure>
              <figure className="box-item box-02 w-2/12 max-md:w-4/12">
                <img src="/img/ex-02.png" alt="React 글자 이미지" />
              </figure>
              <figure className="box-item box-03 intro-ani w-2/12 max-md:w-4/12">
                <img src="/img/ex-03.png" alt="따봉 이미지" />
              </figure>
              <figure className="box-item box-04 intro-ani w-2/12 max-md:w-4/12">
                <img src="/img/ex-04.png" alt="DO GOOD 글자 이미지" />
              </figure>
              <figure className="box-item box-05 w-2/12 max-md:w-4/12">
                <img src="/img/ex-05.png" alt="CSS 글자 이미지" />
              </figure>
              <figure className="box-item box-06 w-2/12 max-md:w-4/12">
                <img src="/img/ex-06.png" alt="WebSites 글자 이미지" />
              </figure>
              <figure className="box-item box-07 w-2/12 max-md:w-4/12">
                <img src="/img/ex-07.png" alt="HELLO WORLD 글자 이미지" />
              </figure>
              <figure className="box-item box-08 w-2/12 max-md:w-4/12">
                <img src="/img/ex-08.png" alt="JSX 글자 이미지" />
              </figure>
              <figure className="box-item box-09 w-2/12 max-md:w-4/12">
                <img src="/img/ex-09.png" alt="시멘틱 마크업 글자 이미지" />
              </figure>
              <figure className="box-item box-10 intro-ani w-2/12 max-md:w-4/12">
                <img src="/img/ex-10.png" alt="HTML5 글자 이미지" />
              </figure>
            </div>
          </div>
          <div className="yellow-line font-medium text-lg p-2">
            <div className="flow-container">
              <div className="flow-text">
                <div className="flow-wrap">
                  FrontEnd Publisher Developer UX/UI &#127752;{" "}
                </div>
                <div className="flow-wrap">
                  FrontEnd Publisher Developer UX/UI &#127752;{" "}
                </div>
                <div className="flow-wrap">
                  FrontEnd Publisher Developer UX/UI &#127752;{" "}
                </div>
                <div className="flow-wrap">
                  FrontEnd Publisher Developer UX/UI &#127752;{" "}
                </div>
                <div className="flow-wrap">
                  FrontEnd Publisher Developer UX/UI &#127752;{" "}
                </div>
                <div className="flow-wrap">
                  FrontEnd Publisher Developer UX/UI &#127752;{" "}
                </div>
                <div className="flow-wrap">
                  FrontEnd Publisher Developer UX/UI &#127752;{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-dwon">
            <IoIosArrowRoundDown />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Intro;
