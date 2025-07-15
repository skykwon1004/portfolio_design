interface ModalContent {
  title: string;
  date: string;
  team: string;
  contribution: string;
  description: string;
  link: string;
  features: string[];
  skill: string[];
  screen: string[];
  image: string[];
  screenText: string[];
  github: string;
}

interface Project {
  company: string;
  title: string;
  description: string;
  link: string;
  image: string;
  gifImage: string;
  technologies: string[];
  contribution: string[];
  modalContent: ModalContent;
}

const projectData2: Project[] = [
  // 닥포
  {
    company:"(주)리더마인",
    title: "닥터포헤어",
    description:
      "카페24를 활용한 닥터포헤어 쇼핑몰 리뉴얼 작업 입니다.",
    link: "https://drforhair2024.cafe24.com/skin-skin2",
    image: "/img/drfor_01.jpg",
    gifImage: "",
    technologies: ["SI", "카페24"," Html", "SCSS", "Javascript"],
    contribution: ["프론트엔드", "퍼블리싱"],
    modalContent: {
      title: "닥터포헤어",
      date: "작업기간 : 2025.2. ~ 2025.3",
      team: "팀 구성 : 프론트엔드 2명, 디자이너 2명, 기획자 1명",
      contribution:"기여도 : 50%",
      description:
        "",
      link: "https://drforhair2024.cafe24.com/skin-skin2",
      github: "",
      features: [
        "헤어 제품 쇼핑몰 닥터포헤어 리뉴얼 메인 페이지 퍼블리싱 입니다.",
        "두피 상담 시스템, 1:1 맞춤 제품 추천, 멤버십 혜택 기능 도입을 중심으로 리뉴얼을 진행하였습니다.",
      ],
      skill: ["Html", "SCSS", "JavaScript", "카페24"],
      screen: [
        "로그인",
        "입금신청 대시보드",
        "그래프 대시보드",
        "트리구조 대시보드",
        "게시판",
        "반응형",
      ],
      image: [
        "/img/pro01_21.jpg",
      ],
      screenText: [
        "<react-hook-form> 라이브러리를 사용하여 <유효성 검사>를 하였고, <로그인 여부에 따라 자동으로 리다이렉트>되도록 구현했습니다.",
        "현재 자산의 입금범위에 따른 등급 변화를 <그래프로 시각화>하여 미리 보여주는 UI/UX를 구현했습니다.",
        "원형 그래프를 구현하기 위해 <RadialChart> 라이브러리를 활용하였고, 현재 회원 등급과 다음 등급까지 필요한 남은 USDT를 보여주는 <대시보드를 구현>했습니다.",
        "<react-d3-tree> 라이브러리를 활용하여 추천 등록 내역을 한 번에 보기 위한 <트리 구조를 구현>했습니다.",
        "게시판에서 사용자가 원하는 <데이터를 검색>할 수 있도록 구현하고, 검색 결과를 페이지별로 나누어 표시할 수 있는 <페이지네이션을 구현>했습니다.",
        "<반응형 웹 개발>과 <크로스 브라우징>으로 개발하였습니다.",
      ],
    },
  },
  // 농심몰
  {
    company:"(주)리더마인",
    title: "농심몰",
    description:
      "카페24를 활용한 농심몰 쇼핑몰 유지보수 작업 입니다.",
    link: "https://nsmall2022.cafe24.com/skin-skin2/event/2nd/event_2nd.html",
    image: "/img/nongshim_01.png",
    gifImage: "",
    technologies: ["SI", "카페24"," Html", "CSS", "Javascript"],
    contribution: ["프론트엔드", "퍼블리싱"],
    modalContent: {
      title: "농심몰",
      date: "작업기간 : 2024.8. ~ 2024.8",
      team: "팀 구성 : 프론트엔드 1명, 디자이너 1명, 기획자 1명",
      contribution:"기여도 : 100%",
      description:
        "농심몰의 유지관리 및 월별 이벤트 페이지를 정기적으로 제작하였습니다.",
      link: "https://nsmall2022.cafe24.com/skin-skin2/event/2nd/event_2nd.html",
      github: "",
      features: [
        "2주년 기념으로 사용자 참여를 유도하는 인터랙티브 미니게임 2종을 기획 및 구현하였습니다.",
      ],
      skill: ["Html", "SCSS", "JavaScript", "카페24"],
      screen: [
        "",
      ],
      image: [
        "/img/pro01_22.jpg",
      ],
      screenText: [
        // "<react-hook-form> 라이브러리를 사용하여 <유효성 검사>를 하였고, <로그인 여부에 따라 자동으로 리다이렉트>되도록 구현했습니다.",
      ],
    },
  },
  // 진로토닉몰
  {
    company:"(주)리더마인",
    title: "하이트 진로토닉몰",
    description:
      "샵바이를 활용한 진로토닉몰 구축 작업 입니다.",
    link: "https://www.jinrotonic.com/jintini-magazine?boardNo=279889",
    image: "/img/jinro_01.jpg",
    gifImage: "/img/aat_01_g.gif",
    technologies: ["SI", "샵바이"," React", "SCSS"],
    contribution: ["프론트엔드", "퍼블리싱"],
    modalContent: {
      title: "하이트 진로토닉몰",
      date: "작업기간 : 2024.6. ~ 2024.7",
      team: "팀 구성 : 프론트엔드 3명, 디자이너 1명, 기획자 1명",
      contribution:"기여도 : 25%",
      description:
        "",
      link: "https://www.jinrotonic.com/jintini-magazine?boardNo=279889",
      github: "",
      features: [
        "게시판 형식의 매거진 및 이벤트 페이지를 퍼블리싱 하였습니다.",
      ],
      skill: ["React", "SCSS", "샵바이"],
      screen: [
        "",
      ],
      image: [
        "/img/pro01_23.jpg",
      ],
      screenText: [
        "",
      ],
    },
  },
  // 아윤채몰
  {
    company:"(주)리더마인",
    title: "아윤채몰",
    description:
      "카페24를 활용한 농심몰 쇼핑몰 유지보수 작업 입니다.",
    link: "https://ayunche.com/campaign/2024summer/event.html",
    image: "/img/ayunche_01.png",
    gifImage: "",
    technologies: ["SI", "카페24"," Html", "CSS", "Javascript"],
    contribution: ["프론트엔드", "퍼블리싱"],
    modalContent: {
      title: "아윤채몰",
      date: "작업기간 : 2024.6. ~ 2024.7",
      team: "팀 구성 : 프론트엔드 3명, 디자이너 1명, 기획자 1명",
      contribution:"기여도 : 25%",
      description:
        "",
      link: "https://ayunche.com/campaign/2024summer/event.html",
      github: "",
      features: [
        "바우처 사용 안내와 사용 지점 리스트를 볼 수 있는 이벤트 페이지를 퍼블리싱 하였습니다.",
      ],
      skill: ["Html", "SCSS", "JavaScript", "카페24"],
      screen: [
        "",
      ],
      image: [
        "/img/pro01_20.jpg",
      ],
      screenText: [
        "",
      ],
    },
  },
  // AAT
  // {
  //   company:"(주)에이아이댑스",
  //   title: "AAT",
  //   description:
  //     "빅데이터를 분석하여 최적의 수익 실현 타이밍에 매매를 도와주는 인공지능 서비스 웹사이트 입니다.",
  //   link: "https://ai-aat.com/",
  //   image: "/img/aat_01.jpg",
  //   gifImage: "/img/aat_01_g.gif",
  //   technologies: ["React","반응형"],
  //   contribution: ["프론트엔드", "퍼블리싱"],
  //   modalContent: {
  //     title: "AAT",
  //     date: "작업기간 : 2023.11. ~ 2023.12",
  //     team: "팀 구성 : 프론트엔드 1명, 백엔드 1명, 디자이너 1명, 기획자 2명",
  //     contribution:"기여도 : 100%",
  //     description:
  //       "백엔드와의 협업을 경험하면서 ESLint, Prettier, Git 등을 활용하여 프론트엔드와 백엔드 간의 코드 품질을 유지하고 협업 시 발생할 수 있는 문제에 대비하는 경험을 할 수 있었습니다. TypeScript를 사용하여 더욱 견고한 코드베이스를 구축하고, 타입 시스템을 통해 버그를 사전에 방지하고자 노력했습니다. 또한 프로젝트의 복잡한 구조로 인해 Redux Toolkit 라이브러리를 도입하여 상태 관리를 보다 효율적으로 처리했습니다.",
  //     link: "https://ai-aat.com/",
  //     github: "",
  //     features: [
  //       "JWT 토큰을 이용해서 로그인 인증 구현",
  //       "로그인 여부에 따른 리다이렉트 구현",
  //       "회원가입/로그인시 유효성 검사 기능 구현",
  //       "Axios를 사용하여 API 요청에 대한 응답 처리",
  //       "데이터 시각화를 위한 대시보드, 차트 기능 구현",
  //       "게시판 리스트 및 검색 기능 구현",
  //       "페이지네이션 구현",
  //       "Redux-toolkit을 활용한 전역 상태관리" /*  */,
  //       "SCSS를 사용하여 스타일을 적용",
  //       "반응형 웹 개발 및 크로스 브라우징 개발",
  //     ],
  //     skill: ["Vite", "React", "TypeScript", "Redux Toolkit", "SCSS"],
  //     screen: [
  //       "로그인",
  //       "입금신청 대시보드",
  //       "그래프 대시보드",
  //       "트리구조 대시보드",
  //       "게시판",
  //       "반응형",
  //     ],
  //     image: [
  //       "/img/aat_01_g.gif",
  //       "/img/aat_02_g.gif",
  //       "/img/aat_03.jpg",
  //       "/img/aat_07.jpg",
  //       "/img/aat_05.jpg",
  //       "/img/aat_13.jpg",
  //     ],
  //     screenText: [
  //       "<react-hook-form> 라이브러리를 사용하여 <유효성 검사>를 하였고, <로그인 여부에 따라 자동으로 리다이렉트>되도록 구현했습니다.",
  //       "현재 자산의 입금범위에 따른 등급 변화를 <그래프로 시각화>하여 미리 보여주는 UI/UX를 구현했습니다.",
  //       "원형 그래프를 구현하기 위해 <RadialChart> 라이브러리를 활용하였고, 현재 회원 등급과 다음 등급까지 필요한 남은 USDT를 보여주는 <대시보드를 구현>했습니다.",
  //       "<react-d3-tree> 라이브러리를 활용하여 추천 등록 내역을 한 번에 보기 위한 <트리 구조를 구현>했습니다.",
  //       "게시판에서 사용자가 원하는 <데이터를 검색>할 수 있도록 구현하고, 검색 결과를 페이지별로 나누어 표시할 수 있는 <페이지네이션을 구현>했습니다.",
  //       "<반응형 웹 개발>과 <크로스 브라우징>으로 개발하였습니다.",
  //     ],
  //   },
  // },
  // 팻케어랩
  {
    company:"(주)에이아이댑스",
    title: "PetCare Lab",
    description:
      "스마트 배변판으로 반려동물의 소변검사를 통해 집에서 건강상태를 손쉽게 진단할 수 있는 펫케어 서비스 소개 웹사이트 입니다.",
    link: "https://petcarelab.net/",
    image: "/img/petcare_01.jpg",
    gifImage: "/img/petcare_08_g.gif",
    technologies: ["React", "다국어", "반응형"],
    contribution: ["프론트엔드", "퍼블리싱"],
    modalContent: {
      title: "PetCare Lab",
      date: "작업기간 : 2023.6. ~ 2023.6. (2주)",
      team: "팀 구성 : 프론트엔드 1명, 디자이너 1명, 기획자 1명",
      contribution:"기여도 : 100%",
      description:
        "원페이지 스크롤 형태의 플랫폼 소개 웹사이트 입니다.",
      link: "https://petcarelab.net/",
      github: "",
      features: [
        "다국어 서비스 기능을 구현한 펫케어 서비스 소개 웹사이트 퍼블리싱 입니다.",
        "반응형으로 제작하였습니다."
      ],
      skill: ["React", "SCSS"],
      screen: [
        "다국어 서비스",
        "원페이지 스크롤",
        "슬라이드",
        "문의사항 이메일 연동",
        "반응형",
      ],
      image: [
        "/img/pro01_01.jpg",
      ],
      screenText: [
        "<react-intl> 라이브러리를 활용하여 <다국어 서비스>를 구현했습니다.",
        "GNB 메뉴 클릭 시 특정 컴포넌트로 스크롤 이동하는 <원페이지 스크롤> 기능 구현을했습니다.",
        "<react-slick> 라이브러리를 활용하여 <슬라이드> 동작을 구현했습니다.",
        "<Email.js>을 활용하여 고객의 <문의사항을 자사 이메일>로 받을 수 있도록 연동하였습니다.",
        "<반응형 웹 개발>과 <크로스 브라우징>으로 개발하였습니다.",
      ],
    },
  },
];

export default projectData2;
