import React, { useEffect, useState } from "react";
import { IoIosClose, IoIosLink, IoLogoGithub } from "react-icons/io";
import useDarkModeStore from "../zustand/useDarkModeStore";

interface ModalProps {
  showModal: boolean;
  handleModalClose: () => void;
  projectData2: any[]; // projectData의 타입에 따라 수정해야 합니다.
  activeProjectIndex: number;
  darkMode: boolean;
}

const Modal2: React.FC<ModalProps> = ({
  showModal,
  handleModalClose,
  projectData2,
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

  const link = projectData2[activeProjectIndex]?.modalContent?.link;
  const github = projectData2[activeProjectIndex]?.modalContent?.github;
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
          className="modal-content-wapper max-md:max-w-full py-[5%] px-[1%] max-xl:px-[1%]"
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
                {projectData2[activeProjectIndex]?.modalContent?.title}
              </strong>
              {/* <span className="block mb-1 font-semibold">
                {projectData2[activeProjectIndex]?.modalContent?.date}
              </span>
              <span className="block mb-1 font-semibold">
                {projectData2[activeProjectIndex]?.modalContent?.contribution}
              </span>
              <span className="block mb-12 font-semibold">
                {projectData2[activeProjectIndex]?.modalContent?.team}
              </span> */}
              {/* <img
                src={projectData2[activeProjectIndex].image}
                alt={projectData2[activeProjectIndex].title}
                className="modal-project-item-img shadow-md max-md:rounded-lg"
                style={{
                  border: darkMode
                    ? "1px solid rgb(64 64 64)"
                    : "1px solid rgb(231, 231, 231)",
                }}
              /> */}
              {projectData2[activeProjectIndex]?.modalContent?.image.length > 0 && (
              <div className="flex flex-col gap-2">
                {projectData2[activeProjectIndex]?.modalContent?.image.map((imgSrc: string, index: number) => (
                  imgSrc && ( // 빈 문자열이 아닌 경우에만 렌더링
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`프로젝트 이미지 ${index + 1}`}
                      style={{
                        border: darkMode
                          ? "1px solid rgb(64 64 64)"
                          : "1px solid rgb(231, 231, 231)",
                      }}
                    />
                  )
                ))}
              </div>
            )}
            </div>
            {/* <p
              className="modal-desc2 mb-20 text-xl text-center font-medium max-md:text-lg py-[8%] px-[12%] max-xl:py-[6%] max-xl:px-[10%]"
              style={{
                borderBottom: darkMode ? "1px solid rgb(64 64 64)" : "",
              }}
            >
              {projectData2[activeProjectIndex]?.modalContent?.description}
            </p> */}
            <div className="modat-content-list mt-14 mb-14 px-[5%] max-xl:px-[5%]">
              <strong className="block text-2xl font-black mb-4">
                주요기능 및 특징
              </strong>
              <ul className="dot">
                {projectData2[activeProjectIndex]?.modalContent?.features.map(
                  (feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  )
                )}
              </ul>
            </div>
            <div className="modat-content-list px-[5%] max-xl:px-[5%]">
              <strong className="block text-2xl font-black mb-4">
                사용 기술 및 언어
              </strong>
              <ul className="flex gap-2 text-gray-500 max-md:flex-col">
                {projectData2[activeProjectIndex]?.modalContent?.skill.map(
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
            {/* <div className="modat-content-list">
              <strong className="block text-2xl font-black mb-4">
                작업화면
              </strong>
              <ul className="flex gap-2 mb-8 text-gray-500 max-md:flex-col">
                {projectData2[activeProjectIndex]?.modalContent?.screen.map(
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
                {projectData2[activeProjectIndex]?.modalContent?.screenText.map(
                  (text: string, index: number) => (
                    <div key={index}>
                      {activeTab === `screen${index + 1}` && (
                        <div className="flex flex-col items-center">
                          <figure className="mb-10">
                            <img
                              src={
                                projectData2[activeProjectIndex].modalContent
                                  .image[index]
                              }
                              alt={
                                projectData2[activeProjectIndex].modalContent
                                  .screen[index]
                              }
                              className="modal-project-item-img shadow-md max-md:rounded-lg"
                              style={{
                                border: darkMode
                                  ? "1px solid rgb(64 64 64)"
                                  : "1px solid rgb(231, 231, 231)",
                              }}
                            />ㄹ
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
``;
