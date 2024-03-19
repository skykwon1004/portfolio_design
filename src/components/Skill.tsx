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
            <h2 className="text-5xl font-bold mb-4 max-md:text-3xl max-md:mb-2">
              Skill
            </h2>
            <p className="mb-10 text-xl max-md:text-lg max-md:mb-6">
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
                  <img src="/img/skill-logo-01.png" alt="" />
                  React
                </span>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-02.png" alt="" />
                  Redux
                </span>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-03.png" alt="" />
                  TypeScript
                </span>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-04.png" alt="" />
                  JavaScript
                </span>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-05.png" alt="" />
                  JQuery
                </span>
              </div>
              <div className="skill-list-item">
                <strong className="block mb-4 opacity-0">Front-End</strong>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-06.png" alt="" />
                  HTML
                </span>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-07.png" alt="" />
                  CSS
                </span>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-08.png" alt="" />
                  SASS
                </span>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-09.png" alt="" />
                  StyledComponents
                </span>
                <span className="block flex gap-3 items-center mb-2">
                  <img src="/img/skill-logo-10.png" alt="" />
                  Gnuboard
                </span>
              </div>
            </div>
            <div className="skill-front">
              <strong className="block mb-4 text-xl">Design</strong>
              <span className="block flex gap-3 items-center mb-2">
                <img src="/img/skill-logo-11.png" alt="" />
                Figma
              </span>
              <span className="block flex gap-3 items-center mb-2">
                <img src="/img/skill-logo-12.png" alt="" />
                Adobe Illustrator
              </span>
              <span className="block flex gap-3 items-center mb-2">
                <img src="/img/skill-logo-13.png" alt="" />
                Adobe Potoshop
              </span>
            </div>
            <div className="skill-front">
              <strong className="block mb-4 text-xl">Cooperation</strong>
              <span className="block flex gap-3 items-center mb-2">
                <img src="/img/skill-logo-14.png" alt="" />
                GitHub
              </span>
              <span className="block flex gap-3 items-center mb-2">
                <img src="/img/skill-logo-15.png" alt="" />
                Notion
              </span>
              <span className="block flex gap-3 items-center mb-2">
                <img src="/img/skill-logo-16.png" alt="" />
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
