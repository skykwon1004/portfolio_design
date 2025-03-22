import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { IoIosArrowRoundForward } from "react-icons/io";
import useDarkModeStore from "../zustand/useDarkModeStore";
import Modal from "./Modal";
import projectData from "./projectData";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  const { darkMode } = useDarkModeStore();
  const [showModal, setShowModal] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(-1);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // 모달이 열렸을 때 스크롤 숨기기
    } else {
      document.body.style.overflow = "unset"; // 모달이 닫혔을 때 스크롤 표시
    }
    return () => {
      document.body.style.overflow = "unset"; // 컴포넌트가 언마운트될 때 스크롤 표시
    };
  }, [showModal]);

  const handleModalOpen = (index: number) => {
    setShowModal(true);
    setActiveProjectIndex(index); // 모달이 열릴 때 선택된 프로젝트의 인덱스 설정
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Element name="project">
      <div
        className="project"
        style={{
          backgroundColor: darkMode ? "rgb(51, 51, 51, 0.5)" : "#f9f9f9",
        }}
      >
        <div className="project-wapper inner">
          <div>
            <h2 className="text-5xl font-bold mb-4 max-md:text-4xl max-md:mb-2">
              Project
            </h2>
            <p className="mb-16 text-xl max-md:text-lg max-md:mb-10">
              주요 프로젝트만 모아 놓았습니다.
            </p>
          </div>
          <div className="project-content-wapper max-w-full grid grid-cols-2 gap-[30px]">
            {projectData.map(
              (
                item,
                index // 변경
              ) => (
                <div
                  key={index}
                  className="project-content shadow-sm"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <figure className="project-img-box">
                    <img src={item.image} alt={item.title} className="" />
                  </figure>
                  <div
                    className="project-text-box-link"
                    style={{
                      backgroundColor: darkMode ? "rgba(51, 51, 51, 1)" : "",
                    }}
                  >
                    {" "}
                    <div
                      className="project-text-box"
                      onClick={() => handleModalOpen(index)}
                    >
                      <strong className="text-4xl font-bold block mb-4 max-md:text-2xl">
                        {item.title}
                      </strong>
                      <p className="mb-8 min-h-12">{item.description}</p>
                      <ul className="flex gap-2 text-gray-500 font-medium mb-2 max-md:grid max-md:grid-cols-2">
                        {item.contribution.map(
                          (contribution, contributionIndex) => (
                            <li
                              key={contributionIndex}
                              className="bg-gray-100 px-2 py-0.5 rounded"
                              style={{
                                backgroundColor: darkMode ? "#1f1f1f" : "",
                                color: darkMode ? "rgb(209 213 219)" : "",
                              }}
                            >
                              {contribution}
                            </li>
                          )
                        )}
                      </ul>
                      <ul className="flex gap-2 text-gray-500 font-medium mb-8 max-md:grid max-md:grid-cols-2">
                        {item.technologies.map((tech, techIndex) => (
                          <li
                            key={techIndex}
                            className="bg-gray-100 px-2 py-0.5 rounded"
                            style={{
                              backgroundColor: darkMode ? "#1f1f1f" : "",
                              color: darkMode ? "rgb(209 213 219)" : "",
                            }}
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <div className="project-btn-wapper flex gap-2.5">
                        <div
                          className="btn-link inline-block"
                          onClick={() => handleModalOpen(index)}
                        >
                          <button className="btn">
                            Read More <IoIosArrowRoundForward />
                          </button>
                        </div>
                        {item.link && (
                          <a
                            href={item.link}
                            className="btn-link"
                            target="_blank"
                          >
                            <button className="btn">
                              Go Site <IoIosArrowRoundForward />
                            </button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {showModal && activeProjectIndex !== -1 && (
        <Modal
          showModal={showModal}
          handleModalClose={handleModalClose}
          projectData={projectData}
          activeProjectIndex={activeProjectIndex}
          darkMode={darkMode}
        />
      )}
    </Element>
  );
};

export default Project;
