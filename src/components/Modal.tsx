// import React, { useEffect, useState } from "react";
import React from "react";
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
  // const [activeTab, setActiveTab] = useState<string>("screen1");

  // const handleTabChange = (tab: string) => {
  //   setActiveTab(tab);
  // };

  // useEffect(() => {
  //   setActiveTab("screen1");
  // }, [showModal]);

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
          className="modal-content-wapper max-md:max-w-full py-[5%] px-[1%] max-xl:px-[1%]"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: darkMode ? "#333" : "",
          }}
        >
          {/* <div
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
          </div> */}
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
            <div className="modal-content-title text-center modal-desc text-xl text-center font-medium max-md:text-lg max-xl:py-[6%] max-xl:px-[10%]">
              <strong className="text-6xl block mb-10 max-md:text-4xl">
                {projectData[activeProjectIndex]?.modalContent?.title}
              </strong>
            </div>

            {projectData[activeProjectIndex]?.modalContent?.image.length > 0 && (
              <div className="flex flex-col gap-2">
                {projectData[activeProjectIndex]?.modalContent?.image.map((imgSrc: string, index: number) => (
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

            <div
              className="modal-desc mt-10 text-xl font-medium max-md:text-lg max-xl:py-[6%] max-xl:px-[10%]"
              style={{
                borderBottom: darkMode ? "1px solid rgb(64 64 64)" : "",
              }}
            >
              {Array.isArray(projectData[activeProjectIndex]?.modalContent?.description[0]) ? (
                projectData[activeProjectIndex]?.modalContent?.description.map(
                  ([text, link]: [string, string], idx: number) => (
                    <div key={idx} className="mb-8">
                      <p>{text}</p>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline mt-1 inline-block"
                      >
                        {link}
                      </a>
                    </div>
                  )
                )
              ) : (
                <p>{projectData[activeProjectIndex]?.modalContent?.description}</p>
              )}
            </div>

            {/* <div className="flex flex-col gap-2 ">
                <img src="/img/pro01_01.jpg" alt=""  
                  style={{
                    border: darkMode
                      ? "1px solid rgb(64 64 64)"
                      : "1px solid rgb(231, 231, 231)",
                  }}
                />
                <img src="/img/pro01_02.jpg" alt=""  
                  style={{
                    border: darkMode
                      ? "1px solid rgb(64 64 64)"
                      : "1px solid rgb(231, 231, 231)",
                  }}
                />
                <img src="/img/pro01_03.jpg" alt=""  
                  style={{
                    border: darkMode
                      ? "1px solid rgb(64 64 64)"
                      : "1px solid rgb(231, 231, 231)",
                  }}
                />
                <img src="/img/pro01_04.jpg" alt=""  
                  style={{
                    border: darkMode
                      ? "1px solid rgb(64 64 64)"
                      : "1px solid rgb(231, 231, 231)",
                  }}
                />
                <img src="/img/pro01_05.jpg" alt=""  
                  style={{
                    border: darkMode
                      ? "1px solid rgb(64 64 64)"
                      : "1px solid rgb(231, 231, 231)",
                  }}
                />
                <img src="/img/pro01_06.jpg" alt=""  
                  style={{
                    border: darkMode
                      ? "1px solid rgb(64 64 64)"
                      : "1px solid rgb(231, 231, 231)",
                  }}
                />
                <img src="/img/pro01_07.jpg" alt=""  
                  style={{
                    border: darkMode
                      ? "1px solid rgb(64 64 64)"
                      : "1px solid rgb(231, 231, 231)",
                  }}
                />
                <img src="/img/pro01_08.jpg" alt=""  
                  style={{
                    border: darkMode
                      ? "1px solid rgb(64 64 64)"
                      : "1px solid rgb(231, 231, 231)",
                  }}
                />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
``;
