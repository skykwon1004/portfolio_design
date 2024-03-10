import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { IoIosArrowRoundForward, IoIosClose, IoIosAdd } from "react-icons/io";
import useDarkModeStore from "../zustand/useDarkModeStore";

const Project = () => {
  const { darkMode } = useDarkModeStore();
  const [showModal, setShowModal] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(-1);
  const [isHoveredArray, setIsHoveredArray] = useState([false, false]);
  const [showMoreProjects, setShowMoreProjects] = useState(false); // 추가

  // 각 섹션에 대한 데이터 객체 배열
  const projectData = [
    {
      title: "AAT",
      description:
        "빅데이터를 분석하여 최적의 수익 실현 타이밍에 매매를 도와주는 인공지능 서비스 웹사이트 입니다.",
      link: "",
      image: "/img/aat_01.jpg",
      gifImage: "/img/petcare_08_g.gif",
      technologies: ["#React", "#TypeScript", "#Redux-toolkit", "#SCSS"],
      status: "개발중",
      modalContent: {
        title: "AAT",
        date: "2023.11. ~ 개발중",
        features: [
          "데이터 시각화를 위한 대시보드, 차트 기능 구현",
          "회원가입/로그인시 유효성 검사 기능 구현",
        ],
      },
    },
    {
      title: "PetCare Lab",
      description:
        "스마트 배변판으로 반려동물의 소변검사를 통해집에서 건강상태를 손쉽게 진단할 수 있는 펫케어 서비스 웹사이트 입니다.",
      link: "https://petcarelab.net/",
      image: "/img/petcare_08_g01.jpg",
      gifImage: "/img/petcare_08_g.gif",
      technologies: ["#React", "#JavaScript", "#SCSS"],
      status: "개발중",
      modalContent: {
        title: "PetCare Lab",
        date: "2023.11. ~ 개발중",
        features: ["ddd한 대시보드, 차트 기능 구현", "ddd 기능 구현"],
      },
    },
    {
      title: "Ai-Dapps",
      description: "Ai-Dapps 공식 홈페이지 입니다.",
      link: "http://ai-dapps.com/",
      image: "/img/aidapps_01.jpg",
      gifImage: "/img/petcare_08_g.gif",
      technologies: ["#HTML", "#JavaScript", "#CSS", "#그누보드"],
      status: "개발중",
      modalContent: {
        title: "Ai-Dapps",
        date: "2023.11. ~ 개발중",
        features: [
          "데이터 시각화를 위한 대시보드, 차트 기능 구현",
          "회원가입/로그인시 유효성 검사 기능 구현",
        ],
      },
    },
    {
      title: "ILSHIN",
      description:
        "기존의 일신방직 홈페이지를 UI/UX를 개선하여 리뉴얼한 홈페이지입니다.",
      link: "http://skykwon1004.dothome.co.kr/",
      image: "/img/ilshin_01.jpg",
      gifImage: "/img/petcare_08_g.gif",
      technologies: ["#HTML", "#JQuery", "#CSS", "#그누보드"],
      status: "개발중",
      modalContent: {
        title: "ILSHIN",
        date: "2023.11. ~ 개발중",
        features: [
          "데이터 시각화를 위한 대시보드, 차트 기능 구현",
          "회원가입/로그인시 유효성 검사 기능 구현",
        ],
      },
    },
    {
      title: "About Movie",
      description:
        "영화 Open API를 활용하여 영화를 장르별로 구분하고 영화 검색이 가능한 서비스입니다.",
      link: "http://skykwon1004.dothome.co.kr/",
      image: "/img/am_01.jpg",
      gifImage: "/img/petcare_08_g.gif",
      technologies: ["#HTML", "#JQuery", "#CSS", "#그누보드"],
      status: "개발중",
      modalContent: {
        title: "About Movie",
        date: "2023.03.08 ~ 2023.03.14",
        features: [
          "데이터 시각화를 위한 대시보드, 차트 기능 구현",
          "회원가입/로그인시 유효성 검사 기능 구현",
        ],
      },
    },
    {
      title: "부산 맛집 지도",
      description:
        "공공데이터 API를 이용하여 부산 맛집을 지도에서 한 번에 볼 수 있도록 만든 서비스입니다.",
      link: "https://skykwon1004.github.io/react_busan_restauran/",
      image: "/img/busan_food_01.jpg",
      gifImage: "/img/petcare_08_g.gif",
      technologies: ["#HTML", "#JQuery", "#CSS", "#그누보드"],
      status: "개발중",
      modalContent: {
        title: "부산 맛집 지도",
        date: "2023.03.08 ~ 2023.03.14",
        features: [
          "데이터 시각화를 위한 대시보드, 차트 기능 구현",
          "회원가입/로그인시 유효성 검사 기능 구현",
        ],
      },
    },
  ];

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

  const handleShowMoreProjects = () => {
    // 추가
    setShowMoreProjects(true);
  };

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
            <h2 className="text-6xl font-bold mb-4">Project</h2>
            <p className="mb-10 text-xl">주요 프로젝트만 모아 놓았습니다.</p>
          </div>
          <div className="project-content-wapper mb-16">
            {projectData.slice(0, showMoreProjects ? undefined : 4).map(
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
                      borderRadius: "0 0 30px 30px",
                    }}
                  >
                    {" "}
                    {/* 모달 오픈 핸들러 추가 */}
                    <div
                      className="project-text-box"
                      onMouseEnter={() => handleMouseEnter(index)} // index 추가
                      onMouseLeave={() => handleMouseLeave(index)} // index 추가
                    >
                      <span className="project-text-box-number block mb-8">
                        {`0${index + 1}`}
                      </span>
                      <strong className="text-4xl font-bold block mb-4">
                        {item.title}
                      </strong>
                      <p className="mb-8">{item.description}</p>
                      <ul className="flex gap-5 text-gray-400 mb-8">
                        {item.technologies.map((tech, techIndex) => (
                          <li key={techIndex}>{tech}</li>
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
          {!showMoreProjects && (
            <div className="show-more-button from-white">
              <button
                className="btn-more"
                onClick={handleShowMoreProjects}
                style={{
                  backgroundColor: darkMode ? "rgb(23 23 23)" : "",
                }}
              >
                더 보기 ...
                {/* <IoIosAdd /> */}
              </button>
            </div>
          )}
        </div>
      </div>
      {showModal && activeProjectIndex !== -1 && (
        <div className="modal" onClick={handleModalClose}>
          <div
            className="modal-content-wapper"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={handleModalClose}>
              <IoIosClose />
            </span>
            <div className="modal-content">
              <div className="modal-content-title">
                <strong className="text-6xl block mb-4">
                  {projectData[activeProjectIndex]?.modalContent?.title}
                </strong>
                <span className="block mb-12">
                  {projectData[activeProjectIndex]?.modalContent?.date}
                </span>
                <img
                  src={projectData[activeProjectIndex].image}
                  alt=""
                  className="modal-project-item-img shadow-md mb-20"
                />
              </div>
              <strong className="block text-2xl font-black mb-4">
                주요 기능 및 특징
              </strong>
              <ul className="dot">
                {projectData[activeProjectIndex]?.modalContent?.features.map(
                  (feature, index) => (
                    <li key={index}>{feature}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Element>
  );
};

export default Project;
