import React from "react";
import { Element } from "react-scroll";

interface OwnProps {
  darkMode: boolean;
}

const Experience: React.FC<OwnProps> = ({ darkMode }) => {
  return (
    <Element name="experience">
      <div className="experience">
        <div className="experience-wapper inner">
          <h2 className="text-6xl font-bold mb-4">Experience</h2>
          <p className="mb-10 text-xl">
            다양한 업무 경험을 바탕으로 서비스를 개발하였습니다.
          </p>
          <div
            className="experience-content-wapper"
            style={{
              backgroundColor: darkMode
                ? "rgb(51, 51, 51, 0.5)"
                : " rgb(249, 249, 249,0.5)",
            }}
          >
            <div
              className="experience-content"
              // style={{
              //   backgroundColor: darkMode
              //     ? "rgb(51, 51, 51, 0.5)"
              //     : " rgb(249, 249, 249,0.5)",
              // }}
            >
              <div className="flex justify-between">
                <figure>
                  <img src="/img/ai-logo.jpg" alt="" />
                </figure>
                <div>
                  <span className="block text-xl font-extrabold mb-4">
                    에이아이댑스
                  </span>
                  <span className="block">2023.04. ~ 2023.12.</span>
                  <span className="block mb-4">개발팀 - 프론트엔드</span>
                  <span className="block">
                    에이아이댑스는 분산 클라우드를 기반으로 다양한 서비스 플랫폼
                    사업을 개발하고 있습니다.
                  </span>
                </div>
                <ul className="dot">
                  <li>React를 사용한 플랫폼 웹사이트 개발 및 유지보수 </li>
                  <li>그누보드를 사용한 플랫폼 웹사이트 개발 및 유지보수</li>
                  <li>반응형 웹 개발 및 크로스 브라우징 개발</li>
                  <li>재사용이 가능한 UI컴포넌트 설계 및 개발</li>
                  <li>
                    사이트의 SEO를 향상시키기 위해 오픈 그래프 메타데이터를 설정
                  </li>
                  <li>
                    Netlify를 사용하여 GitHub를 통해 웹 프로젝트를 배포 작업
                  </li>
                  <li>Github을 기반으로 하는 소스 코드 및 버전 관리</li>
                </ul>
              </div>
            </div>
            <div
              className="experience-content"
              // style={{
              //   backgroundColor: darkMode
              //     ? "rgb(51, 51, 51, 0.5)"
              //     : " rgb(249, 249, 249,0.5)",
              // }}
            >
              <div className="flex justify-between">
                <figure>
                  <img src="/img/top-logo.jpg" alt="" />
                </figure>
                <div>
                  <span className="block text-xl font-extrabold mb-4">
                    탑스타
                  </span>
                  <span className="block">2018.06 ~ 2021.06.</span>
                  <span className="block mb-4">디자인팀 - 웹디자이너</span>
                  <span className="block">
                    탑스타는 프리미엄 해외 명품 편집샵 온라인 쇼핑몰 입니다.
                  </span>
                </div>
                <ul className="dot">
                  <li>퍼블리싱 및 자사 사이트 유지보수</li>
                  <li>
                    Photoshop을 활용한 상세 페이지, 홍보 페이지, 웹 디자인 작업
                  </li>
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
