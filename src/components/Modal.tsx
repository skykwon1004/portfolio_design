import React, { useEffect, useState } from "react";
import { IoIosClose, IoIosLink, IoLogoGithub } from "react-icons/io";
import useDarkModeStore from "../zustand/useDarkModeStore";

interface ModalProps {
  showModal: boolean;
  handleModalClose: () => void;
  projectData: any[]; // projectData의 타입에 따라 수정해야 합니다.
  activeProjectIndex: number;
  darkMode: boolean;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  handleModalClose,
  projectData,
  activeProjectIndex,
}) => {
  const [activeTab, setActiveTab] = useState<string>("screen1");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    setActiveTab("screen1");
  }, [showModal]);

  if (!showModal || activeProjectIndex === -1) {
    return null;
  }

  const { darkMode } = useDarkModeStore();

  const link = projectData[activeProjectIndex]?.modalContent?.link;
  const github = projectData[activeProjectIndex]?.modalContent?.github;
  const linkStyle = {
    display: link && link !== "" ? "flex" : "none",
  };

  const githubStyle = {
    display: github && github !== "" ? "flex" : "none",
  };

  return (
    <div className="modal" onClick={handleModalClose}>
      <div className="modal" onClick={handleModalClose}>
        <div
          className="modal-content-wapper max-md:max-w-full py-[10%] px-[10%] max-xl:px-[5%]"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: darkMode ? "#333" : "",
          }}
        >
          <div
            className="modal-bnt"
            style={{
              backgroundColor: darkMode ? "#333" : "",
              borderBottom: darkMode
                ? "1px solid rgb(64, 64, 64) "
                : "1px solid rgb(158, 158, 158)",
            }}
          >
            <div className="close" onClick={handleModalClose}>
              <IoIosClose />
            </div>
            <div className="link-wapper flex flex-col items-center justify-items-center max-xl:flex-row max-xl:gap-2">
              <div
                className="flex flex-col items-center justify-items-center gap-2 mb-5 max-xl:mb-0"
                style={githubStyle}
              >
                <a href={github} target="_blank" className="link">
                  <IoLogoGithub />
                </a>
                <span className="mb-5 max-xl:hidden">GitHub 바로가기</span>
              </div>
              <div
                className="flex flex-col items-center justify-items-center gap-2"
                style={linkStyle}
              >
                <a
                  href={link}
                  target="_blank"
                  className="link"
                  style={linkStyle}
                >
                  <IoIosLink />
                </a>
                <span className="max-xl:hidden">사이트 바로가기</span>
              </div>
            </div>
          </div>
          <div className="modal-content flex flex-col">
            <div className="modal-content-title text-center">
              <strong className="text-6xl block mb-8 max-md:text-4xl">
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
                alt={projectData[activeProjectIndex].title}
                className="modal-project-item-img shadow-md max-md:rounded-lg"
                style={{
                  border: darkMode
                    ? "1px solid rgb(64 64 64)"
                    : "1px solid rgb(231, 231, 231)",
                }}
              />
            </div>
            <p
              className="modal-desc mb-20 text-xl text-center font-medium max-md:text-lg py-[8%] px-[12%] max-xl:py-[6%] max-xl:px-[10%]"
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
              <ul className="flex gap-2 text-gray-500 max-md:flex-col">
                {projectData[activeProjectIndex]?.modalContent?.skill.map(
                  (skill: string, index: number) => (
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
                  (feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  )
                )}
              </ul>
            </div>
            <div className="modat-content-list">
              <strong className="block text-2xl font-black mb-4">
                작업화면
              </strong>
              <ul className="flex gap-2 mb-8 text-gray-500 max-md:flex-col">
                {projectData[activeProjectIndex]?.modalContent?.screen.map(
                  (tab: string, index: number) => (
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
                  (text: string, index: number) => (
                    <div key={index}>
                      {activeTab === `screen${index + 1}` && (
                        <div className="flex flex-col items-center">
                          <figure className="mb-10">
                            <img
                              src={
                                projectData[activeProjectIndex].modalContent
                                  .image[index]
                              }
                              alt={
                                projectData[activeProjectIndex].modalContent
                                  .screen[index]
                              }
                              className="modal-project-item-img shadow-md max-md:rounded-lg"
                              style={{
                                border: darkMode
                                  ? "1px solid rgb(64 64 64)"
                                  : "1px solid rgb(231, 231, 231)",
                              }}
                            />
                          </figure>
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
``;
