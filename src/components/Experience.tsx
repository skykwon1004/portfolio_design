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
              다양한 업무 경험을 바탕으로 서비스를 개발하였습니다.
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
                    에이아이댑스
                  </span>
                  <span className="block">2023.04. ~ 2023.12.</span>
                  <span className="block mb-4 max-xl:mb-8">
                    개발팀 - 프론트엔드
                  </span>
                  <span className="min-w-80 max-xl:min-w-full max-xl:block max-xl:mb-6">
                    에이아이댑스는 분산 클라우드를 기반으로 다양한 서비스 플랫폼
                    사업을 개발하고 있습니다.
                  </span>
                </div>
                <ul className="dot mb-1 max-w-96 w-auto">
                  <li>React를 사용한 플랫폼 웹사이트 개발 및 유지보수 </li>
                  <li>
                    CMS 사이트인 그누보드를 사용한 플랫폼 웹사이트 개발 및
                    유지보수
                  </li>
                  <li>반응형 웹 개발 및 크로스 브라우징 호환성 테스트</li>
                  <li>재사용이 가능한 UI컴포넌트 설계 및 개발</li>
                  <li>
                    사이트의 SEO를 향상시키기 위해 오픈 그래프 메타데이터를 설정
                  </li>
                  <li>Netlify를 사용하여 정적 웹 페이지 배포 작업</li>
                  <li>Github을 기반으로 하는 소스 코드 및 버전 관리</li>
                  <li>Notion을 통한 개발 문서 관리</li>
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
                    탑스타
                  </span>
                  <span className="block">2018.06 ~ 2021.06.</span>
                  <span className="block mb-4 max-xl:mb-8">
                    디자인팀 - 웹디자이너
                  </span>
                  <span className="min-w-80 max-xl:min-w-full max-xl:block max-xl:mb-6">
                    탑스타는 프리미엄 해외 명품 편집샵 온라인 쇼핑몰 입니다.
                  </span>
                </div>
                <ul className="dot mb-1 max-w-96 w-auto">
                  <li>카페24를 사용한 퍼블리싱 및 자사 사이트 유지보수</li>
                  <li>쇼핑몰 리뉴얼 기획 및 퍼블리싱</li>
                  <li>
                    Photoshop을 활용한 상세 페이지, 홍보 페이지, 웹 디자인 작업
                  </li>
                  <li>상품 등록 작업</li>
                  <li>각종 페이지 UI/UX 디자인 개선</li>
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
