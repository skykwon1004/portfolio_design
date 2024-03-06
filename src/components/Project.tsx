import React, { useState } from "react";
import { Element } from "react-scroll";

const Project = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Element name="project" className="inner">
      <div>
        <h2 className="text-5xl font-bold mb-4">Project</h2>
        <p className="mb-10 text-lg">주요 프로젝트만 모아 놓았습니다.</p>
      </div>
      <div className="project-content-wapper">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="project-item"
        >
          <div>
            <strong>AAT</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cum, tempora. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cum, tempora.
            </p>
          </div>
          <figure className="project-img-box">
            <img
              src={isHovered ? "/img/aat_02_g.gif" : "/img/aat_01.jpg"}
              alt=""
            />
          </figure>
          <a href="/" className="btn-link">
            <button className="btn">More</button>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Project;
