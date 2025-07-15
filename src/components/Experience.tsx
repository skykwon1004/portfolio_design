import React, { useEffect } from "react";
import { Element } from "react-scroll";
import useDarkModeStore from "../zustand/useDarkModeStore";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience: React.FC = () => {
  const { darkMode } = useDarkModeStore();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Element name="experience">
      <div className="experience">
        <div className="experience-wapper inner">
          <div>
            <h2 className="text-5xl font-bold mb-4 max-md:text-4xl max-md:mb-2">
              Experience
            </h2>
            <p className="mb-16 text-xl max-md:text-lg max-md:mb-10">
              다양한 업무 경험을 바탕으로 성장했습니다.
            </p>
          </div>
          <div
            className="experience-content-wapper flex flex-col"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
              <div
              className="experience-content"
              style={{
                // borderBottom: darkMode
                //   ? "1px solid rgb(64 64 64)"
                //   : "1px solid #f2f2f2",
                borderTop: darkMode
                  ? "1px solid rgb(64 64 64)"
                  : "1px solid #f2f2f2",
              }}
            >
              <div className="flex justify-between max-xl:flex-col">
                <figure className="max-xl:flex max-xl:items-center max-xl:justify-center max-xl:mb-4 max-xl:hidden">
                  <img
                    src="/img/lm-logo.jpg"
                    alt="리더마인 로고"
                    style={{
                      boxShadow: darkMode
                        ? "10px 10px #333"
                        : "10px 10px #f5f5f5",
                      border: darkMode ? "1px solid #333" : "1px solid #f5f5f5",
                    }}
                    className="rounded-[10px] w-9/12"
                  />
                </figure>
                <div className="max-w-80">
                  <span className="block text-xl font-extrabold mb-4">
                    리더마인<br/>
                    (쇼핑몰 구축·운영 전문 에이전시)
                  </span>
                  
                  <span className="block">2024.04. ~ 2025.03.</span>
                  <span className="block mb-4 max-xl:mb-8">
                    개발팀 - 퍼블리셔, 프론트엔드
                  </span>
                  <span className="min-w-80 max-xl:min-w-full max-xl:block max-xl:mb-6">
                    카페24·샵바이 기반의 커머스 솔루션을 활용해 쇼핑몰 구축부터 유지보수까지 전반적인 운영을 담당했습니다.
                    {/* 리더마인은 카페24, 샵바이 등 SaaS형 커머스 솔루션을 기반으로 쇼핑몰 구축 및 운영을 지원하는 에이전시입니다.  */}
                    {/* 또한, API 연동과 미들웨어 구축을 통해 백오피스(BO) 서비스까지 통합 제공하고 있습니다. */}
                  </span>
                </div>
                <ul className="dot mb-1 w-96 max-w-96">
                  <li>카페24, 샵바이 기반 쇼핑몰 구축 및 유지보수</li>
                  <li>대형 클라이언트 쇼핑몰 유지보수 <br/> 농심몰, 아모레퍼시픽(아윤채몰), 화이트진로(진로토닉몰)</li>
                  <li>월별 프로모션 및 이벤트 페이지 제작</li>
                  <li>관리자 페이지(BO) UI 퍼블리싱 및 운영 지원</li>                 
                  {/* <li>카페24, 샵바이를 사용한 쇼핑몰 구축 및 유지보수</li>
                  <li>대형 클라이언트 쇼핑몰 유지보수 - 농심몰, 아모레퍼시픽(아윤채몰), 화이트진로(진로토닉몰)</li>
                  <li>프로모션 및 이벤트 페이지 제작</li>
                  <li>관리자 페이지(BO) 서비스 구축 및 유지보수</li> */}
                </ul>
              </div>
            </div>
            <div
              className="experience-content"
              style={{
                borderBottom: darkMode
                  ? "1px solid rgb(64 64 64)"
                  : "1px solid #f2f2f2",
                borderTop: darkMode
                  ? "1px solid rgb(64 64 64)"
                  : "1px solid #f2f2f2",
              }}
            >
              <div className="flex justify-between max-xl:flex-col">
                <figure className="max-xl:flex max-xl:items-center max-xl:justify-center max-xl:mb-4 max-xl:hidden">
                  <img
                    src="/img/ai-logo.jpg"
                    alt="에이아이댑스 로고"
                    style={{
                      boxShadow: darkMode
                        ? "10px 10px #333"
                        : "10px 10px #f5f5f5",
                      border: darkMode ? "1px solid #333" : "1px solid #f5f5f5",
                    }}
                    className="rounded-[10px] w-9/12"
                  />
                </figure>
                <div className="max-w-80">
                  <span className="block text-xl font-extrabold mb-4">
                    에이아이댑스<br/>
                    (자사 플랫폼 서비스 기업)
                  </span>
                  <span className="block">2023.04. ~ 2023.12.</span>
                  <span className="block mb-4 max-xl:mb-8">
                    개발팀 - 웹디자이너, 퍼블리셔
                  </span>
                  <span className="min-w-80 max-xl:min-w-full max-xl:block max-xl:mb-6">
                    분산 클라우드를 기반으로 다양한 서비스 플랫폼 웹사이트의 퍼블리싱과 유지보수를 담당했습니다.
                  </span>
                </div>
                <ul className="dot mb-1 w-96 max-w-96">
                  <li>반응형 플랫폼 웹사이트 퍼블리싱 구축 (총 5건)</li>
                  <li>플랫폼 사이트 운영 및 유지보수 (10건 이상)</li>
                  <li>블로그 업데이트 관리</li>
                  {/* <li>플랫폼 웹사이트 반응형 퍼블리싱 - 5개의 프로젝트 구축</li>
                  <li>플랫폼 웹사이트 유지보수 - 10개의 프로젝트 유지보수</li>
                  <li>블로그 및 SNS 관리</li> */}
                </ul>
              </div>
            </div>
            <div
              className="experience-content"
              style={{
                borderBottom: darkMode
                  ? "1px solid rgb(64 64 64)"
                  : "1px solid #f2f2f2",
              }}
            >
              <div className="flex justify-between max-xl:flex-col">
                <figure className="max-xl:flex max-xl:items-center max-xl:justify-center max-xl:mb-4 max-xl:hidden">
                  <img
                    src="/img/top-logo.jpg"
                    alt="탑스타 로고"
                    style={{
                      boxShadow: darkMode
                        ? "10px 10px #333"
                        : "10px 10px #f5f5f5",
                      border: darkMode ? "1px solid #333" : "1px solid #f5f5f5",
                    }}
                    className="rounded-[10px] w-9/12"
                  />
                </figure>
                <div className="max-w-80 w-auto">
                  <span className="block text-xl font-extrabold mb-4">
                    탑스타<br/>
                    (해외 명품 편집샵 쇼핑몰)
                  </span>
                  <span className="block">2018.06 ~ 2021.06.</span>
                  <span className="block mb-4 max-xl:mb-8">
                    디자인팀 - 웹디자이너
                  </span>
                  <span className="min-w-80 max-xl:min-w-full max-xl:block max-xl:mb-6">
                    해외 명품 편집숍 쇼핑몰에서 디자인, 콘텐츠 제작, 상품 등록 및 사이트 운영 전반을 맡았습니다.
                  </span>
                </div>
                <ul className="dot mb-1 w-96 max-w-96">
                  <li>카페24 기반 자사몰 디자인 유지보수 및 퍼블리싱</li>
                  <li>쇼핑몰 리뉴얼 기획 및 퍼블리싱</li>
                  <li>상세페이지, 프로모션, 기획전 썸네일 디자인</li>
                  <li>상품 촬영 및 이미지 보정</li>
                  <li>자사몰/종합몰 상품 등록 및 진열 관리</li>
                  <li>쇼핑몰 기획전 관리 및 콘텐츠 운영</li>
                  <li>블로그 및 인스타그램 콘텐츠 업데이트 관리</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Experience;
