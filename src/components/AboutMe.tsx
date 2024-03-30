import React from "react";
import { Element } from "react-scroll";
import useDarkModeStore from "../zustand/useDarkModeStore";

const AboutMe = () => {
  const { darkMode } = useDarkModeStore();
  return (
    <Element name="aboutme">
      <div className="aboutme">
        <div className="aboutme-wapper inner">
          <div>
            <h2 className="text-5xl font-bold mb-16 max-md:mb-10 max-md:text-4xl max-md:mb-2">
              About Me
            </h2>
          </div>
          <div
            className="aboutme-content-wapper flex justify-between items-center max-xl:flex-col"
            data-aos="fade-up"
            data-aos-duration="1400"
            style={{
              backgroundColor: darkMode ? "rgb(51, 51, 51, 0.5)" : "#f9f9f9",
            }}
          >
            <figure className="me flex-1 max-xl:w-5/12 max-md:w-9/12 max-xl:pt-12 max-md:pt-10">
              <img src="/img/me.jpg" alt="" className="grayscale" />
            </figure>
            <div className="flex-[1.8_1.8_0%] max-xl:flex-1">
              <p className="text-lg px-10 max-xl:py-12 max-xl:text-base max-md:px-7 max-md:py-10">
                2018년부터 <b>탑스타에서 웹디자인과 퍼블리싱</b>을 경험했습니다.
                카페24을 활용하여 퍼블리싱과 자사 사이트 운영을 맡았습니다.
                키치&영 컨셉으로 홈페이지를 리뉴얼 한 뒤 20~30대 연령층의 유입을
                10% 증가시켰습니다. 또한, <b>2000개 이상의 상세페이지</b>를
                제작하였고, 한 번만 상품등록을 하면 여러 쇼핑몰에 상품을
                자동으로 등록해주는 EC모니터 프로그램을 도입하여 자동화 업무에
                대한 중요점을 인식하는 계기가 되었습니다.
                <br />
                <br />
                에이아이댑스에서는{" "}
                <b>React를 활용해 5개의 플랫폼 웹사이트를 개발</b>하였고, 10개
                이상의 플랫폼 웹사이트를 유지보수 관리 했습니다. Figma를
                활용하여 기획자 및 디자이너와의 원활한 소통을 유지했고,
                의문사항이 생길 때 마다 미팅을 진행하며 기획자의 의도를 파악하려
                했고, UI/UX 향상을 위해 디자이너와 소통했습니다. 또한 처음으로
                백엔드와의 협업을 경험하면서{" "}
                <b>Swagger 통해 API 문서를 활용하였고, ESLint, Prettier, Git</b>{" "}
                등을 활용하여 프론트엔드와 백엔드 간의 코드 품질을 유지하고 협업
                시 발생할 수 있는 문제에 대비하는 경험을 쌓았습니다.
                <br />
                <br />
                저는 큰 임팩트는 혼자가 아닌 동료들과 함께 할 때에 비로소 만들
                수 있다고 생각하며, 다양한 직무의 구성원들과 적극적으로
                커뮤니케이션하며 협업하는 일에 중요한 가치를 두고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutMe;
