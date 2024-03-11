import React, { useEffect, useState } from "react";
import { IoIosClose, IoIosLink } from "react-icons/io";
import useDarkModeStore from "../zustand/useDarkModeStore";

const Modal = ({
  showModal,
  handleModalClose,
  projectData,
  activeProjectIndex,
}) => {
  const [activeTab, setActiveTab] = useState("screen1"); // 초기 탭 상태를 "screen1"로 설정

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    // 모달이 열릴 때마다 첫 번째 탭 이미지를 활성화
    setActiveTab("screen1");
  }, [showModal]);

  if (!showModal || activeProjectIndex === -1) {
    return null;
  }

  const { darkMode } = useDarkModeStore();

  const link = projectData[activeProjectIndex]?.modalContent?.link;
  const linkStyle = {
    opacity: link && link !== "" ? "1" : "0",
  };

  return (
    <div className="modal" onClick={handleModalClose}>
      <div className="modal" onClick={handleModalClose}>
        <div
          className="modal-content-wapper"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: darkMode ? "rgba(51, 51, 51)" : "",
          }}
        >
          <span className="close" onClick={handleModalClose}>
            <IoIosClose />
          </span>
          <div
            className="link-wapper flex flex-col items-center justify-items-center gap-2"
            style={linkStyle}
          >
            <a href={link} target="_blank" className="link">
              <IoIosLink />
            </a>
            <span>사이트 바로가기</span>
          </div>
          <div className="modal-content">
            <div className="modal-content-title">
              <strong className="text-6xl block mb-8">
                {projectData[activeProjectIndex]?.modalContent?.title}
              </strong>
              <span className="block mb-1 font-semibold">
                {projectData[activeProjectIndex]?.modalContent?.date}
              </span>
              <span className="block mb-12 font-semibold">
                {projectData[activeProjectIndex]?.modalContent?.team}
              </span>
              <img
                src={projectData[activeProjectIndex].image}
                alt=""
                className="modal-project-item-img shadow-md"
              />
            </div>
            <p
              className="modal-desc mb-20 text-xl text-center font-medium"
              style={{
                borderBottom: darkMode ? "1px solid rgb(64 64 64)" : "",
              }}
            >
              {projectData[activeProjectIndex]?.modalContent?.description}
            </p>
            <div className="modat-content-list mb-14">
              <strong className="block text-2xl font-black mb-4">
                사용 기술 및 언어
              </strong>
              <ul className="flex gap-2 text-gray-500">
                {projectData[activeProjectIndex]?.modalContent?.skill.map(
                  (skill, index) => (
                    <li
                      key={index}
                      className="bg-gray-100 px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: darkMode ? "rgb(31, 31, 31)" : "",
                        color: darkMode ? "rgb(209, 213, 219)" : "",
                      }}
                    >
                      {skill}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="modat-content-list mb-14">
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
            <div className="modat-content-list">
              <strong className="block text-2xl font-black mb-4">
                작업화면
              </strong>
              <ul className="flex gap-2 mb-8 text-gray-500">
                {projectData[activeProjectIndex]?.modalContent?.screen.map(
                  (tab, index) => (
                    <li
                      key={index}
                      className={`${
                        activeTab === `screen${index + 1}` ? "active-tab" : ""
                      } cursor-pointer px-2 py-1 rounded tab ${
                        darkMode ? "dark" : ""
                      }`}
                      onClick={() => handleTabChange(`screen${index + 1}`)}
                    >
                      {tab}
                    </li>
                  )
                )}
              </ul>
              <div>
                {projectData[activeProjectIndex]?.modalContent?.screenText.map(
                  (text, index) => (
                    <div key={index}>
                      {activeTab === `screen${index + 1}` && (
                        <div className="flex flex-col items-center">
                          <figure className="mb-10">
                            <img
                              src={
                                projectData[activeProjectIndex].modalContent
                                  .image[index]
                              }
                              alt=""
                              className="modal-project-item-img shadow-md"
                            />
                          </figure>
                          {/* HTML 태그를 사용하여 페이지네이션을 bold로 강조 */}
                          <span
                            className="block"
                            dangerouslySetInnerHTML={{
                              __html: text.replace(
                                /<([^>]+)>/g,
                                `<strong style="background: #f8d10a; padding: 0 2px; color: rgb(23 23 23)">$1</strong>`
                              ),
                            }}
                          />
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
