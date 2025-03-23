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

const projectData: Project[] = [
  // 닥포
  {
    company:"(주)리더마인",
    title: "닥터포헤어",
    description:
      "닥터포헤어 쇼핑몰은 카페24 솔루션을 기반으로 구축되었으며, 백오피스를 통해 다양한 부가 서비스를 제공합니다.",
    link: "https://drforhair2024.cafe24.com/skin-skin2",
    image: "/img/drfor_01.jpg",
    gifImage: "/img/aat_01_g.gif",
    technologies: ["팀", "카페24"," Html", "SCSS", "Javascript"],
    contribution: ["프론트엔드", "퍼블리싱"],
    modalContent: {
      title: "닥터포헤어",
      date: "작업기간 : 2024.6. ~ 2024.7",
      team: "팀 구성 : 프론트엔드 2명, 디자이너 2명, 기획자 1명",
      contribution:"기여도 : 50%",
      description:
        "백엔드와의 협업을 경험하면서 ESLint, Prettier, Git 등을 활용하여 프론트엔드와 백엔드 간의 코드 품질을 유지하고 협업 시 발생할 수 있는 문제에 대비하는 경험을 할 수 있었습니다. TypeScript를 사용하여 더욱 견고한 코드베이스를 구축하고, 타입 시스템을 통해 버그를 사전에 방지하고자 노력했습니다. 또한 프로젝트의 복잡한 구조로 인해 Redux Toolkit 라이브러리를 도입하여 상태 관리를 보다 효율적으로 처리했습니다.",
      link: "https://drforhair2024.cafe24.com/skin-skin2",
      github: "",
      features: [
        "JWT 토큰을 이용해서 로그인 인증 구현",
        "로그인 여부에 따른 리다이렉트 구현",
        "회원가입/로그인시 유효성 검사 기능 구현",
        "Axios를 사용하여 API 요청에 대한 응답 처리",
        "데이터 시각화를 위한 대시보드, 차트 기능 구현",
        "게시판 리스트 및 검색 기능 구현",
        "페이지네이션 구현",
        "Redux-toolkit을 활용한 전역 상태관리" /*  */,
        "SCSS를 사용하여 스타일을 적용",
        "반응형 웹 개발 및 크로스 브라우징 개발",
      ],
      skill: ["Html", "SCSS", "JavaScript"],
      screen: [
        "로그인",
        "입금신청 대시보드",
        "그래프 대시보드",
        "트리구조 대시보드",
        "게시판",
        "반응형",
      ],
      image: [
        "/img/aat_01_g.gif",
        "/img/aat_02_g.gif",
        "/img/aat_03.jpg",
        "/img/aat_07.jpg",
        "/img/aat_05.jpg",
        "/img/aat_13.jpg",
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
  // 농심티비
  {
    company:"(주)리더마인",
    title: "농심TV(농심몰)",
    description:
      "빅데이터를 분석하여 최적의 수익 실현 타이밍에 매매를 도와주는 인공지능 서비스 웹사이트 입니다.",
    link: "https://m.nongshimmall.com/nongshimTV",
    image: "/img/tv_01.jpg",
    gifImage: "/img/aat_01_g.gif",
    technologies: ["팀", "카페24"," Html", "CSS", "Javascript"],
    contribution: ["프론트엔드", "퍼블리싱"],
    modalContent: {
      title: "농심TV(농심몰)",
      date: "작업기간 : 2024.6. ~ 2024.7",
      team: "팀 구성 : 프론트엔드 3명, 디자이너 1명, 기획자 1명",
      contribution:"기여도 : 50%",
      description:
        "농심TV 백오피스 데이터를 연동하여, 자사몰에 유튜브 형태의 동영상 콘텐츠 페이지를 구현했습니다. 숏츠 및 일반 영상 지원, 댓글/좋아요 기능, 정렬 필터 등 다양한 사용자 인터랙션을 개발하였습니다.",
      link: "https://m.nongshimmall.com/nongshimTV",
      github: "",
      features: [
        "유투브, 비메오 영상타입에 따른 컨트롤 구현",
        "댓글 쓰기 기능 구현",
        "좋아요 기능 구현 및 비회원시 로그인 화면으로 리다이렉트 구현",
        "추천 상품 기능 구현",
        "공유 기능 구현",
        "카테고리 구조 구현",
        "정렬기능 구현"
      ],
      skill: ["Html", "SCSS", "JavaScript"],
      screen: [
        "",
      ],
      image: [
        // "/img/aat_01_g.gif",
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
      "빅데이터를 분석하여 최적의 수익 실현 타이밍에 매매를 도와주는 인공지능 서비스 웹사이트 입니다.",
    link: "https://www.jinrotonic.com",
    image: "/img/jinro_01.jpg",
    gifImage: "/img/aat_01_g.gif",
    technologies: ["팀", "카페24"," Html", "SCSS", "Javascript"],
    contribution: ["프론트엔드", "퍼블리싱"],
    modalContent: {
      title: "농심TV(농심몰)",
      date: "작업기간 : 2024.6. ~ 2024.7",
      team: "팀 구성 : 프론트엔드 3명, 디자이너 1명, 기획자 1명",
      contribution:"기여도 : 25%",
      description:
        "백엔드와의 협업을 경험하면서 ESLint, Prettier, Git 등을 활용하여 프론트엔드와 백엔드 간의 코드 품질을 유지하고 협업 시 발생할 수 있는 문제에 대비하는 경험을 할 수 있었습니다. TypeScript를 사용하여 더욱 견고한 코드베이스를 구축하고, 타입 시스템을 통해 버그를 사전에 방지하고자 노력했습니다. 또한 프로젝트의 복잡한 구조로 인해 Redux Toolkit 라이브러리를 도입하여 상태 관리를 보다 효율적으로 처리했습니다.",
      link: "https://www.jinrotonic.com",
      github: "",
      features: [
        "JWT 토큰을 이용해서 로그인 인증 구현",
        "로그인 여부에 따른 리다이렉트 구현",
        "회원가입/로그인시 유효성 검사 기능 구현",
        "Axios를 사용하여 API 요청에 대한 응답 처리",
        "데이터 시각화를 위한 대시보드, 차트 기능 구현",
        "게시판 리스트 및 검색 기능 구현",
        "페이지네이션 구현",
        "Redux-toolkit을 활용한 전역 상태관리" /*  */,
        "SCSS를 사용하여 스타일을 적용",
        "반응형 웹 개발 및 크로스 브라우징 개발",
      ],
      skill: ["Html", "SCSS", "JavaScript"],
      screen: [
        "로그인",
        "입금신청 대시보드",
        "그래프 대시보드",
        "트리구조 대시보드",
        "게시판",
        "반응형",
      ],
      image: [
        "/img/aat_01_g.gif",
        "/img/aat_02_g.gif",
        "/img/aat_03.jpg",
        "/img/aat_07.jpg",
        "/img/aat_05.jpg",
        "/img/aat_13.jpg",
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
  // 샹프리
  {
    company:"(주)리더마인",
    title: "샹프리",
    description:
      "빅데이터를 분석하여 최적의 수익 실현 타이밍에 매매를 도와주는 인공지능 서비스 웹사이트 입니다.",
    link: "https://shangpree.co.kr/",
    image: "/img/shang_01.jpg",
    gifImage: "/img/aat_01_g.gif",
    technologies: ["팀", "카페24"," Html", "SCSS", "Javascript"],
    contribution: ["프론트엔드", "퍼블리싱"],
    modalContent: {
      title: "샹프리",
      date: "작업기간 : 2024.6. ~ 2024.7",
      team: "팀 구성 : 프론트엔드 1명, 디자이너 1명, 기획자 1명",
      contribution:"기여도 : 100%",
      description:
        "백엔드와의 협업을 경험하면서 ESLint, Prettier, Git 등을 활용하여 프론트엔드와 백엔드 간의 코드 품질을 유지하고 협업 시 발생할 수 있는 문제에 대비하는 경험을 할 수 있었습니다. TypeScript를 사용하여 더욱 견고한 코드베이스를 구축하고, 타입 시스템을 통해 버그를 사전에 방지하고자 노력했습니다. 또한 프로젝트의 복잡한 구조로 인해 Redux Toolkit 라이브러리를 도입하여 상태 관리를 보다 효율적으로 처리했습니다.",
      link: "https://shangpree.co.kr/",
      github: "",
      features: [
        "JWT 토큰을 이용해서 로그인 인증 구현",
        "로그인 여부에 따른 리다이렉트 구현",
        "회원가입/로그인시 유효성 검사 기능 구현",
        "Axios를 사용하여 API 요청에 대한 응답 처리",
        "데이터 시각화를 위한 대시보드, 차트 기능 구현",
        "게시판 리스트 및 검색 기능 구현",
        "페이지네이션 구현",
        "Redux-toolkit을 활용한 전역 상태관리" /*  */,
        "SCSS를 사용하여 스타일을 적용",
        "반응형 웹 개발 및 크로스 브라우징 개발",
      ],
      skill: ["Html", "SCSS", "JavaScript"],
      screen: [
        "로그인",
        "입금신청 대시보드",
        "그래프 대시보드",
        "트리구조 대시보드",
        "게시판",
        "반응형",
      ],
      image: [
        "/img/aat_01_g.gif",
        "/img/aat_02_g.gif",
        "/img/aat_03.jpg",
        "/img/aat_07.jpg",
        "/img/aat_05.jpg",
        "/img/aat_13.jpg",
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
  // AAT
  {
    company:"(주)에이아이댑스",
    title: "AAT",
    description:
      "빅데이터를 분석하여 최적의 수익 실현 타이밍에 매매를 도와주는 인공지능 서비스 웹사이트 입니다.",
    link: "",
    image: "/img/aat_01.jpg",
    gifImage: "/img/aat_01_g.gif",
    technologies: ["팀", "React", "TypeScript", "Redux", "Aixos", "반응형"],
    contribution: ["프론트엔드", "퍼블리싱"],
    modalContent: {
      title: "AAT",
      date: "작업기간 : 2023.11. ~ 개발중",
      team: "팀 구성 : 프론트엔드 1명, 백엔드 1명, 디자이너 1명, 기획자 2명",
      contribution:"기여도 : 100%",
      description:
        "백엔드와의 협업을 경험하면서 ESLint, Prettier, Git 등을 활용하여 프론트엔드와 백엔드 간의 코드 품질을 유지하고 협업 시 발생할 수 있는 문제에 대비하는 경험을 할 수 있었습니다. TypeScript를 사용하여 더욱 견고한 코드베이스를 구축하고, 타입 시스템을 통해 버그를 사전에 방지하고자 노력했습니다. 또한 프로젝트의 복잡한 구조로 인해 Redux Toolkit 라이브러리를 도입하여 상태 관리를 보다 효율적으로 처리했습니다.",
      link: "",
      github: "",
      features: [
        "JWT 토큰을 이용해서 로그인 인증 구현",
        "로그인 여부에 따른 리다이렉트 구현",
        "회원가입/로그인시 유효성 검사 기능 구현",
        "Axios를 사용하여 API 요청에 대한 응답 처리",
        "데이터 시각화를 위한 대시보드, 차트 기능 구현",
        "게시판 리스트 및 검색 기능 구현",
        "페이지네이션 구현",
        "Redux-toolkit을 활용한 전역 상태관리" /*  */,
        "SCSS를 사용하여 스타일을 적용",
        "반응형 웹 개발 및 크로스 브라우징 개발",
      ],
      skill: ["Vite", "React", "TypeScript", "Redux Toolkit", "SCSS"],
      screen: [
        "로그인",
        "입금신청 대시보드",
        "그래프 대시보드",
        "트리구조 대시보드",
        "게시판",
        "반응형",
      ],
      image: [
        "/img/aat_01_g.gif",
        "/img/aat_02_g.gif",
        "/img/aat_03.jpg",
        "/img/aat_07.jpg",
        "/img/aat_05.jpg",
        "/img/aat_13.jpg",
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
  // 팻케어랩
  {
    company:"(주)에이아이댑스",
    title: "PetCare Lab",
    description:
      "스마트 배변판으로 반려동물의 소변검사를 통해 집에서 건강상태를 손쉽게 진단할 수 있는 펫케어 서비스 소개 웹사이트 입니다.",
    link: "https://petcarelab.net/",
    image: "/img/petcare_01.jpg",
    gifImage: "/img/petcare_08_g.gif",
    technologies: ["팀", "React", "다국어", "반응형"],
    contribution: ["퍼블리싱"],
    modalContent: {
      title: "PetCare Lab",
      date: "작업기간 : 2023.6. ~ 2023.6. (2주)",
      team: "팀 구성 : 프론트엔드 1명, 디자이너 1명, 기획자 1명",
      contribution:"기여도 : 100%",
      description:
        "원페이지 스크롤 형태의 플랫폼 소개 웹사이트 입니다. react-intl 라이브러리를 사용하여 다국어 서비스를 구현해 볼 수 있었습니다. 또한 react-slick 라이브러리와 AOS 라이브러리를 사용하여 다양한 동적인 요소를 구현했습니다. github와 연동되는 호스팅 플랫폼 Netlify를 활용하여 웹사이트를 손쉽게 배포하고 유지 보수할 수 있었습니다.",
      link: "https://petcarelab.net/",
      github: "",
      features: [
        "react-intl을 활용한 다국어 구현(KOR, ENG)",
        "GNB 메뉴 클릭 시 특정 컴포넌트로 스크롤 이동하는 기능 구현",
        "AOS을 활용한 스크롤 애니메이션 구현",
        "react-slick을 활용한 슬라이드 구현",
        "Email.js을 활용한 고객의 문의사항을 자사 이메일로 받을 수 있도록 연동",
        "반응형 웹 개발 및 크로스 브라우징 개발",
        " Netlify로 배포, 유지 보수",
      ],
      skill: ["React", "JavaScript", "SCSS"],
      screen: [
        "다국어 서비스",
        "원페이지 스크롤",
        "슬라이드",
        "문의사항 이메일 연동",
        "반응형",
      ],
      image: [
        "/img/petcare_02.jpg",
        "/img/petcare_08_g.gif",
        "/img/petcare_10_g.gif",
        "/img/petcare_04.jpg",
        "/img/petcare_07.jpg",
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
  // 에이아이댑스
  {
    company:"(주)에이아이댑스",
    title: "Ai Dapps",
    description:
      "분산 클라우드 기반의 서비스 플랫폼 기업 에이아이댑스의 공식 웹사이트 입니다.",
    link: "https://ai-dapps.com/",
    image: "/img/aidapps_01.jpg",
    gifImage: "/img/aidapps_09_g.gif",
    technologies: ["팀", "그누보드", "다국어", "반응형"],
    contribution: ["퍼블리싱"],
    modalContent: {
      title: "Ai Dapps",
      date: "작업기간 : 유지보수 상시",
      team: "팀 구성 : 프론트엔드 1명, 디자이너 1명, 기획자 1명",
      contribution:"기여도 : 100%",
      description:
        "그누보드를 활용하여 개발한 멀티페이지 홈페이지의 유지보수를 담당하였습니다. 처음에는 한국어 버전만 존재했으나, 영어 버전 사이트도 추가하여 다국어 서비스를 제공할 수 있도록 구현하였습니다. Swiper 라이브러리를 활용하여 슬라이드를 구현하였고, AOS라이브러리를 활용하여 스크롤 높이에 반응하는 동적인 동작을 구현했습니다.",
      link: "https://ai-dapps.com/",
      github: "",
      features: [
        "그누보드를 사용하여 다국어 구현(KOR, ENG)",
        "그누보드를 사용하여 멀티페이지 홈페이지 제작",
        "게시판에 최신 글이 자동으로 업로드되게 구현",
        "Swiper 라이브러리를 활용하여 슬라이드 구현",
        "AOS을 활용한 스크롤 애니메이션 구현",
        "사이드 네비게이션 바 구현",
        "반응형 웹 개발 및 크로스 브라우징 개발",
      ],
      skill: ["HTML", "CSS", "JavaScript", "그누보드"],
      screen: ["다국어 서비스", "게시판", "AOS", "슬라이드", "반응형"],
      image: [
        "/img/aidapps_02.jpg",
        "/img/aidapps_08.jpg",
        "/img/aidapps_09_g.gif",
        "/img/aidapps_11_g.gif",
        "/img/aidapps_06.jpg",
      ],
      screenText: [
        "<그누보드로 다국어(KOR, ENG)> 페이지 기능 구현했습니다.",
        "<게시판>에 최신 글이 자동으로 업로드되게 구현했습니다.",
        "<AOS> 라이브러리를 활용하여 스크롤 높이에 따른 <동적 동작>을 구현했습니다.",
        "<Swiper> 라이브러리를 활용하여 <슬라이드> 동작을 구현했습니다.",
        "<반응형 웹 개발>과 <크로스 브라우징>으로 개발하였습니다.",
      ],
    },
  },
  // ETC
  {
    company:"(주)리더마인",
    title: "ETC",
    description:
      "프로모션 및 이벤트 페이지입니다.",
    link: "https://ai-dapps.com/",
    image: "/img/event_01.jpg",
    gifImage: "/img/aidapps_09_g.gif",
    technologies: ["팀", "그누보드", "다국어", "반응형"],
    contribution: ["퍼블리싱"],
    modalContent: {
      title: "Ai Dapps",
      date: "작업기간 : 유지보수 상시",
      team: "팀 구성 : 프론트엔드 1명, 디자이너 1명, 기획자 1명",
      contribution:"기여도 : 100%",
      description:
        "그누보드를 활용하여 개발한 멀티페이지 홈페이지의 유지보수를 담당하였습니다. 처음에는 한국어 버전만 존재했으나, 영어 버전 사이트도 추가하여 다국어 서비스를 제공할 수 있도록 구현하였습니다. Swiper 라이브러리를 활용하여 슬라이드를 구현하였고, AOS라이브러리를 활용하여 스크롤 높이에 반응하는 동적인 동작을 구현했습니다.",
      link: "https://ai-dapps.com/",
      github: "",
      features: [
        "그누보드를 사용하여 다국어 구현(KOR, ENG)",
        "그누보드를 사용하여 멀티페이지 홈페이지 제작",
        "게시판에 최신 글이 자동으로 업로드되게 구현",
        "Swiper 라이브러리를 활용하여 슬라이드 구현",
        "AOS을 활용한 스크롤 애니메이션 구현",
        "사이드 네비게이션 바 구현",
        "반응형 웹 개발 및 크로스 브라우징 개발",
      ],
      skill: ["HTML", "CSS", "JavaScript", "그누보드"],
      screen: ["다국어 서비스", "게시판", "AOS", "슬라이드", "반응형"],
      image: [
        "/img/aidapps_02.jpg",
        "/img/aidapps_08.jpg",
        "/img/aidapps_09_g.gif",
        "/img/aidapps_11_g.gif",
        "/img/aidapps_06.jpg",
      ],
      screenText: [
        "<그누보드로 다국어(KOR, ENG)> 페이지 기능 구현했습니다.",
        "<게시판>에 최신 글이 자동으로 업로드되게 구현했습니다.",
        "<AOS> 라이브러리를 활용하여 스크롤 높이에 따른 <동적 동작>을 구현했습니다.",
        "<Swiper> 라이브러리를 활용하여 <슬라이드> 동작을 구현했습니다.",
        "<반응형 웹 개발>과 <크로스 브라우징>으로 개발하였습니다.",
      ],
    },
  },
  // {
  //   title: "ILSHIN",
  //   description:
  //     "기존의 일신방직 웹사이트의 UI/UX를 개선하여 디자인부터 배포까지 솔로로 작업한 멀티페이지 리뉴얼 웹사이트입니다.",
  //   link: "http://skykwon1004.dothome.co.kr/",
  //   image: "/img/ilshin_01.jpg",
  //   gifImage: "/img/ilshin_09_g.gif",
  //   technologies: ["솔로", "그누보드", "JQuery", "리뉴얼", "반응형"],
  //   contribution: ["퍼블리싱", "디자인"],
  //   modalContent: {
  //     title: "ILSHIN",
  //     date: "작업기간 : 2022.3. ~ 2022.3. (3주)",
  //     team: "팀 구성 : 솔로, 개인작업 100%",
  //     description:
  //       "기존 일신방직 웹사이트의 UI/UX를 개선하여 리뉴얼하였습니다. 그누보드를 사용하여 멀티페이지 홈페이지를 (모든 메뉴 클릭 가능)제작했습니다. 게시판에 글 작성이 가능하며 게시판 글을 추출해서 메인페이지 뉴스섹션에 최신글을 자동으로 불러옵니다.",
  //     link: "http://skykwon1004.dothome.co.kr/",
  //     github: "",
  //     features: [
  //       "기존 일신방직 사이트를 디자인 및 UI/UX 개선하여 리뉴얼",
  //       "그누보드를 사용하여 멀티페이지 홈페이지 제작",
  //       "게시판에 최신 글이 자동으로 업로드되게 구현",
  //       "사이드 네비게이션 바 구현",
  //       "반응형 웹 개발 및 크로스 브라우징 개발",
  //       "웹 호스팅 서비스 이용해서 웹사이트 배포",
  //     ],
  //     skill: ["HTML", "CSS", "JQuery", "그누보드"],
  //     screen: ["멀티페이지", "게시판", "사이드 네비", "반응형"],
  //     image: [
  //       "/img/ilshin_09_g.gif",
  //       "/img/ilshin_04.jpg",
  //       "/img/ilshin_07.jpg",
  //       "/img/ilshin_08.jpg",
  //     ],
  //     screenText: [
  //       "<그누보드>를 사용하여 <멀티페이지> 홈페이지 제작했습니다.",
  //       "<게시판>에 최신 글이 자동으로 업로드되게 구현했습니다.",
  //       "<사이드 네비게이션 바>를 구현했습니다.",
  //       "<반응형 웹 개발>과 <크로스 브라우징>으로 개발하였습니다.",
  //     ],
  //   },
  // },
  // {
  //   title: "About Movie",
  //   description:
  //     "영화 Open API를 활용하여 영화를 장르별로 구분하고 영화 검색이 가능한 서비스입니다.",
  //   link: "https://skykwon1004.github.io/react_AM_movie/",
  //   image: "/img/am_01.jpg",
  //   gifImage: "/img/am_05_g.gif",
  //   technologies: ["솔로", "React", "Axios", "검색"],
  //   contribution: ["프론트엔드", "퍼블리싱", "디자인"],
  //   modalContent: {
  //     title: "About Movie",
  //     date: "작업기간 : 2022.3. ~ 2022.3. (1주)",
  //     team: "팀 구성 : 솔로, 개인작업 100%",
  //     description:
  //       "Axios를 사용하여 영화 데이터 API를 가져와서 영화사이트를 제작했습니다. React의 react-router-dom을 사용하여 영화를 클릭하면 디테일 페이지로 이동합니다. 장르별로 영화리스트를 구분하였고, 검색 기능이 가능합니다. 디자인은 영화 사이트에서 많이 쓰는 다크컬러를 메인으로 하고 포인트 컬러 하나만 써서 강조를 주었습니다.",
  //     link: "https://skykwon1004.github.io/react_AM_movie/",
  //     github: "https://github.com/skykwon1004/react_AM_movie",
  //     features: [
  //       "Axios를 사용하여 영화 데이터 API를 가져오기",
  //       "메인비주얼에는 최신 업로드 순으로 데이터 불러오게 구현",
  //       "영화를 클릭하면 팝업창으로 영화 정보를 보여줌",
  //       "react-slick을 활용한 슬라이드 구현",
  //       "GSAP를 활용하여 스크롤 맨 위로 올라가는 탑 버튼을 구현",
  //       "원하는 키워드를 검색하는 기능 구현",
  //       "로딩페이지 구현",
  //       "GitHub Pages 서비스 이용해서 웹사이트 배포",
  //     ],
  //     skill: ["React", "JavaScript", "SCSS", "GSAP"],
  //     screen: [
  //       "장르별 구분",
  //       "키워드 검색",
  //       "디테일페이지",
  //       "페이지네이션",
  //       "로딩페이지",
  //     ],
  //     image: [
  //       "/img/am_06_g.gif",
  //       "/img/am_07_g.gif",
  //       "/img/am_02.jpg",
  //       "/img/am_08_g.gif",
  //       "/img/am_04.jpg",
  //     ],
  //     screenText: [
  //       "API에 가져온 영화 데이터를 <장르별로> 구분하여 보여주는 UI를 구현하였습니다.",
  //       "원하는 키워드를 <검색하는 기능을> 구현을했습니다.",
  //       "영화를 클릭하면 <팝업창>으로 디테일 페이지를 구현 하고 간략한 영화 정보와 다운로드 링크를 삽입하여 정보 전달하게 구현했습니다.",
  //       "영화 목록을 <20개씩 페이지네이션>하여 구현했습니다. 첫 번째 페이지에서는 'Prev' 버튼을 숨기고, 현재 페이지가 마지막 페이지일 때 'Next' 버튼을 자동으로 숨기는 등 <UX를 고려>하여 구현하였습니다.",
  //       "데이터를 가져오는 동안 <로딩페이지> 구현했습니다.",
  //     ],
  //   },
  // },
  // {
  //   title: "부산 맛집 지도",
  //   description:
  //     "공공데이터 API를 이용하여 부산 맛집을 지도에서 한 번에 볼 수 있도록 만든 서비스입니다.",
  //   link: "https://skykwon1004.github.io/react_busan_restauran/",
  //   image: "/img/busan_food_01.jpg",
  //   gifImage: "/img/busan_food_04_g.gif",
  //   technologies: [
  //     "솔로",
  //     "React",
  //     "공공데이터",
  //     "Axios",
  //     "kakaoMap API",
  //     "댓글",
  //   ],
  //   contribution: ["프론트엔드", "퍼블리싱", "디자인"],
  //   modalContent: {
  //     title: "부산 맛집 지도",
  //     date: "작업기간 : 2022.4. ~ 2022.4. (1주)",
  //     team: "팀 구성 : 솔로, 개인작업 100%",
  //     description:
  //       "Axios를 사용하여 공공데이터 API를 가져와서 부산맛집지도 사이트를 제작했습니다. kakao-maps api를 이용하여 맛집을 지도에 표시해 줍니다. 부산의 구,군 별로 리스트를 만들었고 레스토랑을 클릭하면 레스토랑의 정보를 보여줍니다. 댓글 게시, 수정, 삭제 기능을 구현하였습니다.",
  //     link: "https://skykwon1004.github.io/react_busan_restauran/",
  //     github: "https://github.com/skykwon1004/react_busan_restauran",
  //     features: [
  //       "공공데이터 포탈 API 데이터 사용하기",
  //       "Axios를 사용하여 맛집 데이터 API를 가져오기",
  //       "React Router Dom을 사용하여 URL 구조를 설정",
  //       "API에서 가져온 데이터 값과 URL이 일치하는 경우, useParams를 사용하여 해당 URL로 이동",
  //       "부산의 구,군 별로 카테고리를 분류",
  //       "KakaoMap API를 이용하여 맛집을 지도에 표시",
  //       "레스토랑의 정보를 가져오고 해당 레스토랑 위치를 지도에 표시",
  //       "댓글 게시,수정,삭제 기능 구현",
  //     ],
  //     skill: ["React", "JavaScript", "SCSS"],
  //     screen: ["카테고리 분류", "KakaoMap API", "디테일페이지", "댓글"],
  //     image: [
  //       "/img/busan_food_04_g.gif",
  //       "/img/busan_food_01.jpg",
  //       "/img/busan_food_02.jpg",
  //       "/img/busan_food_05_g.gif",
  //     ],
  //     screenText: [
  //       "부산의 <구,군 별로 카테고리>를 분류하여 구현했습니다",
  //       "<KakaoMap API>를 이용하여 맛집을 지도에 표시하였습니다.",
  //       "API에서 <레스토랑의 정보>를 가져와서 정보를 보여주고 해당 레스토랑 위치를 <지도에 표시>하도록 구현했습니다.",
  //       "<댓글 게시,수정,삭제 기능> 구현했습니다.",
  //     ],
  //   },
  // },
];

export default projectData;
