import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { IoIosArrowRoundForward, IoIosClose } from "react-icons/io";

const Project = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false); // 모달 상태 추가

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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Element name="project">
      <div className="project">
        <div className="project-wapper inner">
          <div>
            <h2 className="text-5xl font-bold mb-4">Project</h2>
            <p className="mb-10 text-lg">주요 프로젝트만 모아 놓았습니다.</p>
          </div>
          <div className="project-content-wapper">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="project-content"
            >
              <figure className="project-img-box">
                <img
                  src={
                    isHovered
                      ? "/img/petcare_08_g.gif"
                      : "/img/petcare_08_g01.jpg"
                  }
                  alt=""
                  className=""
                />
              </figure>
              <div className="project-text-box-link" onClick={handleModalOpen}>
                {" "}
                {/* 모달 오픈 핸들러 추가 */}
                <div className="project-text-box">
                  <span className="project-text-box-number block mb-8">01</span>
                  <strong className="text-5xl block mb-4">AAT</strong>
                  <p className="mb-8">
                    AAT(All-time AI Trading)는 빅데이터를 분석하여 최적의 수익
                    실현 타이밍에 매매를 통해 수익을 극대화 할 수 있도록
                    도와주는 인공지능 매매 솔루션입니다.
                  </p>
                  <p className="text-gray-400 mb-10">
                    #React #TypeScript #SCSS #Redux-toolkit
                  </p>
                  <div className="btn-link">
                    <button className="btn">
                      Read more <IoIosArrowRoundForward />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal" onClick={handleModalClose}>
          {" "}
          {/* 모달 컴포넌트 */}
          <div
            className="modal-content-wapper"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={handleModalClose}>
              <IoIosClose />
            </span>
            <div className="modal-content">
              <div className="modal-content-title">
                <strong className="text-6xl block mb-4">AAT</strong>
                <span className="block mb-12">2023.11. ~ 개발중</span>
                <img
                  src="/img/petcare_08_g01.jpg"
                  alt=""
                  className="modal-project-item-img shadow-md mb-20"
                />
              </div>
              <strong className="block text-2xl font-black mb-4">
                주요 기능 및 특징
              </strong>
              <ul>
                <li>데이터 시각화를 위한 대시보드, 차트 기능 구현</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Element>
  );
};

export default Project;
