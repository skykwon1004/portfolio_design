import React, { useEffect } from "react";
import { Element } from "react-scroll";
import useDarkModeStore from "../zustand/useDarkModeStore";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { darkMode } = useDarkModeStore();
  return (
    <Element name="education">
      <div
        className="education"
        style={{
          backgroundColor: darkMode
            ? "rgb(51, 51, 51, 0.5)"
            : " rgb(249, 249, 249,0.5)",
        }}
      >
        <div className="education-wapper inner">
          <div>
            <h2 className="text-5xl font-bold mb-4 max-md:text-3xl max-md:mb-2">
              Education
            </h2>
            <p className="mb-10 text-xl max-md:text-lg max-md:mb-6">
              개발자 양성과정을 수료했습니다.
            </p>
          </div>
          <div
            className="education-content-wapper flex gap-14 max-md:flex-col max-md:gap:10"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <div className="education-content-left flex-1">
              <img src="/img/e-bg-01.jpg" alt="컴퓨터 코딩 화면" />
            </div>
            <div className="education-content-right flex-1 flex flex-col justify-center">
              <ul
                className="mb-10 dot max-md:mb-5"
                style={{
                  borderBottom: darkMode
                    ? "1px solid rgb(64 64 64)"
                    : "1px solid #ddd",
                }}
              >
                <span className="block text-gray-400 font-light">
                  그린컴퓨터아카데미 (2022.11 ~ 2023.04)
                </span>
                <strong className="block text-lg mb-4">
                  리액트(React) 활용 프론트엔드 개발자 양성과정
                </strong>
                <li className="block">JavaScript, React 등 학습</li>
                <li className="block">
                  React 컴포넌트 개념, 상태 및 props 활용법, 그리고 React Hook을
                  학습
                </li>
                <li className="block">
                  Axios 또는 Fetch API를 사용한 API 통신 및 데이터 처리 학습
                </li>
                <li className="block">
                  상태 관리를 위한 Redux와 Context를 학습
                </li>
              </ul>
              <ul className="dot">
                <span className="block text-gray-400 font-light">
                  그린컴퓨터아카데미 (2017.12 ~ 2018.04)
                </span>
                <strong className="block text-lg mb-4">
                  반응형 UI/UX 웹디자인 & 웹퍼블리셔 웹콘텐츠 개발자 양성과정
                </strong>
                <li className="block">
                  색채학, 타이포그래피, 레이아웃 구성, 웹 접근성/웹 표준에 대한
                  이해
                </li>
                <li className="block">
                  포토샵, 일러스트레이터를 활용한 웹 이미지 편집 학습
                </li>
                <li className="block">
                  HTML5/CSS3/JavaScript/JQuery를 활용한 웹 표준 코딩, 웹 페이지
                  제작 학습
                </li>
                <li className="block">
                  프로토타입 제작, 시안 디자인 개발 학습
                </li>
                <li className="block">
                  반응형 웹 구현 및 포트폴리오 제작 실습
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Education;
