import React, { useEffect } from "react";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Element name="skill">
      <div className="skill">
        <div className="skill-wapper inner">
          <div>
            <h2 className="text-5xl font-bold mb-4 mb-4 max-md:text-4xl max-md:mb-2">
              Skill
            </h2>
            <p className="mb-16 text-xl max-md:text-lg max-md:mb-10">
              새로운 기술 스택에 관심을 가지며 꾸준히 공부하고 있습니다.
            </p>
          </div>
          <div
            className="skill-list flex gap-10 justify-between max-md:flex-col"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <div className="skill-front flex gap-14 max-md:gap-4">
              <div className="skill-list-item">
                <strong className="block mb-4 text-xl">Front-End</strong>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-01.png" alt="React 로고" />
                  React
                </span>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-02.png" alt="Redux 로고" />
                  Redux
                </span>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-03.png" alt="TypeScript 로고" />
                  TypeScript
                </span>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-04.png" alt="JavaScript 로고" />
                  JavaScript
                </span>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-05.png" alt="JQuery 로고" />
                  JQuery
                </span>
              </div>
              <div className="skill-list-item">
                <strong className="block mb-4 opacity-0 text-xl">
                  Front-End
                </strong>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-06.png" alt="HTML 로고" />
                  HTML
                </span>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-07.png" alt="CSS 로고" />
                  CSS
                </span>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-08.png" alt="SASS 로고" />
                  SASS
                </span>
                <span className="block flex gap-3 items-center mb-2">
                  <img
                    src="/img/skill-logo-09.png"
                    alt="StyledComponents 로고"
                  />
                  StyledComponents
                </span>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-10.png" alt="Gnuboard 로고" />
                  Gnuboard
                </span>
              </div>
            </div>
            <div className="skill-front">
              <strong className="block mb-4 text-xl">Design</strong>
              <span className="block flex gap-3 items-center mb-2">
                <img src="/img/skill-logo-11.png" alt="Figma 로고" />
                Figma
              </span>
              <span className="block flex gap-3 items-center mb-2">
                <img
                  src="/img/skill-logo-12.png"
                  alt="Adobe Illustrator 로고"
                />
                Adobe Illustrator
              </span>
              <span className="block flex gap-3 items-center mb-2">
                <img src="/img/skill-logo-13.png" alt="Adobe Potoshop 로고" />
                Adobe Potoshop
              </span>
            </div>
            <div className="skill-front">
              <strong className="block mb-4 text-xl">Cooperation</strong>
              <span className="block flex gap-3 items-center mb-2">
                <img src="/img/skill-logo-14.png" alt="GitHub 로고" />
                GitHub
              </span>
              <span className="block flex gap-3 items-center mb-2">
                <img src="/img/skill-logo-15.png" alt="Notion 로고" />
                Notion
              </span>
              <span className="block flex gap-3 items-center mb-2">
                <img src="/img/skill-logo-16.png" alt="Swagger 로고" />
                Swagger
              </span>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skill;
