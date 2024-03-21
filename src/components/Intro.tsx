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
          <div className="intro-content-left flex flex-col justify-center items-center mb-16 max-md:mb-10">
            <div className="box-wapper mb-4 max-xl:mt-10">
              {/* <div className="box"></div> */}
              <strong className="text-5xl font-thin max-md:text-3xl max-xl:block max-md:text-center text-animate mb-2 mx-4">
                Make it More
              </strong>
              <strong className="text-7xl font-semibold max-md:text-5xl max-xl:block  max-md:text-center text-animate">
                Appealing,
              </strong>
            </div>
            <div className="box-03">
              <img src="/img/ex-01.png" alt="" />
            </div>
            <div className="box-04 ">
              <img src="/img/ex-02.png" alt="" />
            </div>
          </div>
          <div className="img-wapper flex flex-col items-center justify-center mb-16">
            <div className="item mb-5">
              <span
                className="i-03 intro-ani"
                style={{
                  background: darkMode
                    ? "linear-gradient(90deg, rgba(133,133,133,1) 0%, rgba(52,52,52,1) 100%)"
                    : "linear-gradient(90deg, rgba(240, 240, 240, 1) 0%, rgba(255, 255, 255, 1) 100%)",
                  border: darkMode ? "1px solid #605f5f" : "1px solid #f5f5f5",
                }}
              >
                Publisher
              </span>
              <span
                className="i-04"
                style={{
                  border: darkMode
                    ? "1px solid rgb(64,64,64)"
                    : "1px solid #999",
                }}
              >
                Designer
              </span>
              <span
                className="i-01"
                style={{
                  border: darkMode ? "1px solid #a1a1a1" : "1px solid #999",
                }}
              >
                Developer
              </span>
              <span
                className="i-02"
                style={{
                  backgroundColor: darkMode ? "#454545" : " #f9f9f9",
                }}
              >
                FrontEnd
              </span>
              <span
                className="i-03 intro-ani"
                style={{
                  background: darkMode
                    ? "linear-gradient(90deg, rgba(133,133,133,1) 0%, rgba(52,52,52,1) 100%)"
                    : "linear-gradient(90deg, rgba(240, 240, 240, 1) 0%, rgba(255, 255, 255, 1) 100%)",
                  border: darkMode ? "1px solid #605f5f" : "1px solid #f5f5f5",
                }}
              >
                &#127752;
              </span>
            </div>
            <div className="item">
              <span
                className="i-02"
                style={{
                  backgroundColor: darkMode ? "#454545" : " #f9f9f9",
                }}
              >
                FrontEnd
              </span>
              <span
                className="i-03"
                style={{
                  background: darkMode
                    ? "linear-gradient(90deg, rgba(133,133,133,1) 0%, rgba(52,52,52,1) 100%)"
                    : "linear-gradient(90deg, rgba(240, 240, 240, 1) 0%, rgba(255, 255, 255, 1) 100%)",
                  border: darkMode ? "1px solid #605f5f" : "1px solid #f5f5f5",
                }}
              >
                Publisher
              </span>
              <span
                className="i-04 intro-ani"
                style={{
                  border: darkMode
                    ? "1px solid rgb(64,64,64)"
                    : "1px solid #999",
                }}
              >
                &#127775;
              </span>
              <span
                className="i-01"
                style={{
                  border: darkMode ? "1px solid #a1a1a1" : "1px solid #999",
                }}
              >
                Developer
              </span>
              <span
                className="i-02"
                style={{
                  backgroundColor: darkMode ? "#454545" : " #f9f9f9",
                }}
              >
                Designer
              </span>
            </div>
          </div>
          <div className="text-wapper">
            <p className="font-light text-xl max-md:text-base text-center">
              웹디자이너 경험과 프론트엔드 개발 경험을 바탕으로
            </p>
            <p className="font-light text-xl max-md:text-base text-center">
              한 번 더 들여다보게 만드는{" "}
              <b className="font-semibold">매력적인 웹사이트를</b> 만들겠습니다.
            </p>
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
