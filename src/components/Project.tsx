import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { IoIosArrowRoundForward } from "react-icons/io";
import useDarkModeStore from "../zustand/useDarkModeStore";
import Modal from "./Modal";
import projectData from "./projectData";

const Project = () => {
  const { darkMode } = useDarkModeStore();
  const [showModal, setShowModal] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(-1);
  const [isHoveredArray, setIsHoveredArray] = useState([false, false]);
  // const [showMoreProjects, setShowMoreProjects] = useState(false);

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

  const handleMouseEnter = (index: number) => {
    // index 추가
    setIsHoveredArray((prevState) => {
      const newArray = [...prevState];
      newArray[index] = true;
      return newArray;
    });
  };

  const handleMouseLeave = (index: number) => {
    // index 추가
    setIsHoveredArray((prevState) => {
      const newArray = [...prevState];
      newArray[index] = false;
      return newArray;
    });
  };

  const handleModalOpen = (index: number) => {
    // console.log("Modal opened for index:", index);
    setShowModal(true);
    setActiveProjectIndex(index); // 모달이 열릴 때 선택된 프로젝트의 인덱스 설정
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  // const handleShowMoreProjects = () => {
  //   // 추가
  //   setShowMoreProjects(true);
  // };

  return (
    <Element name="project">
      <div
        className="project"
        style={{
          backgroundColor: darkMode
            ? "rgb(51, 51, 51, 0.5)"
            : " rgb(249, 249, 249,0.5)",
        }}
      >
        <div className="project-wapper inner">
          <div>
            <h2 className="text-6xl font-bold mb-4 max-md:text-3xl max-md:mb-2">
              Project
            </h2>
            <p className="mb-10 text-xl max-md:text-lg max-md:mb-6">
              주요 프로젝트만 모아 놓았습니다.
            </p>
          </div>
          <div className="project-content-wapper">
            {projectData.map(
              // {projectData.slice(0, showMoreProjects ? undefined : 6).map(
              (
                item,
                index // 변경
              ) => (
                <div key={index} className="project-content shadow-sm">
                  <figure
                    className="project-img-box"
                    style={{
                      backgroundColor: darkMode
                        ? "#32343a"
                        : " rgb(249, 249, 249,0.5)",
                    }}
                  >
                    <img
                      src={
                        isHoveredArray[index] // index 변경
                          ? item.gifImage
                          : item.image
                      }
                      alt=""
                      className=""
                    />
                  </figure>
                  <div
                    className="project-text-box-link"
                    style={{
                      backgroundColor: darkMode ? "rgba(51, 51, 51, 1)" : "",
                    }}
                  >
                    {" "}
                    {/* 모달 오픈 핸들러 추가 */}
                    <div
                      className="project-text-box"
                      onMouseEnter={() => handleMouseEnter(index)} // index 추가
                      onMouseLeave={() => handleMouseLeave(index)} // index 추가
                    >
                      {/* <span className="project-text-box-number block mb-8">
                        {`0${index + 1}`}
                      </span> */}
                      <strong className="text-4xl font-bold block mb-4 max-md:text-2xl">
                        {item.title}
                      </strong>
                      <p className="mb-8 min-h-12">{item.description}</p>
                      {/* <p className="mb-8 min-h-12">{item.contribution}</p> */}
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
                      <div className="project-btn-wapper">
                        <div
                          className="btn-link"
                          onClick={() => handleModalOpen(index)}
                        >
                          <button
                            className="btn"
                            style={{
                              color: darkMode ? "rgb(23 23 23)" : "",
                            }}
                          >
                            Read More <IoIosArrowRoundForward />
                          </button>
                        </div>
                        {item.link && (
                          <a
                            href={item.link}
                            className="btn-link"
                            target="_blank"
                          >
                            <button
                              className="btn"
                              style={{
                                color: darkMode ? "rgb(23 23 23)" : "",
                              }}
                            >
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
          {/* {!showMoreProjects && (
            <div className="show-more-button from-white">
              <button
                className="btn-more"
                onClick={handleShowMoreProjects}
                style={{
                  backgroundColor: darkMode ? "rgb(23 23 23)" : "",
                }}
              >
                더 보기 ...
              </button>
            </div>
          )} */}
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
