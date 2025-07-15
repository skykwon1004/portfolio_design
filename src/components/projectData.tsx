interface ModalContent {
  title: string;
  description: [string, string][];
  link: string;
  image: string[];
}

interface Project {
  title: string;
  description: string;
  image: string;
  gifImage: string;
  technologies: string[];
  link: string;
  modalContent: ModalContent;
}

const projectData: Project[] = [
  // 웹디자인
  {
    title: "WEB ∙ UIUX",
    description:
      "WEB 반응형 디자인",
    image: "",
    gifImage: "",
    technologies: ["홈페이지 디자인", "반응형 디자인", "퍼블리셔"],
    link: "",
    modalContent: {
      title: "WEB ∙ UIUX",
      description: [],
      link: "https://petcarelab.net/",
      image: [
        "/img/pro01_01.jpg",
        "/img/pro01_02.jpg",
        "/img/pro01_03.jpg",
        "/img/pro01_04.jpg",
        "/img/pro01_05.jpg",
        "/img/pro01_06.jpg",
        "/img/pro01_07.jpg",
        "/img/pro01_08.jpg",
        "/img/pro01_15.jpg",
      ],
    },
  },
  // 컨텐츠 디자인
  {
    title: "컨텐츠 디자인",
    description:
      "온라인 배너 & 상세페이지",
    image: "",
    gifImage: "",
    technologies: ["배너 디자인","이벤트 배너 디자인", "상세페이지 디자인", "이미지 보정"],
    link: "",
    modalContent: {
      title: "컨텐츠 디자인",
      description:[],
      link: "https://top-star.co.kr/",
      image: [
        "/img/pro01_09.jpg",
        "/img/pro01_16.jpg",
        "/img/pro01_17.jpg",
        "/img/pro01_18.jpg",
        "/img/pro01_10.jpg",
        "/img/pro01_14.jpg",
        "/img/pro01_19.jpg",
        "/img/pro01_12.jpg",
        "/img/pro01_13.jpg",
      ],
    },
  },
  // 편집 디자인
  {
    title: "편집 디자인",
    description:
      "전단지 & X 배너 디자인",
    image: "",
    gifImage: "",
    technologies: ["전단지 디자인", "X 배너 디자인"],
    link: "",
    modalContent: {
      title: "편집 디자인",
      description:[],
      link: "",
      image: [
        "/img/pro01_11.jpg"
      ],
    },
  },
  // 이벤트 페이지 퍼블리싱
  {
    title: "이벤트 페이지 개발",
    description:
      "이벤트 페이지 퍼블리싱",
    image: "",
    gifImage: "",
    technologies: ["이벤트 페이지 개발", "프로모션", "퍼블리싱", "협업"],
    link: "",
    modalContent: {
      title: "이벤트 페이지 개발",
      description: [
        ["- 아윤채 여름 이벤트 페이지 퍼블리싱", "https://ayunche.com/campaign/2024summer/event.html"],
        ["- 아윤채 신제품 이벤트 페이지 퍼블리싱", "https://ayunche.com/campaign/procare/event.html"],
        ["- 농심몰 2주년 이벤트 페이지 퍼블리싱", "https://nsmall2022.cafe24.com/skin-skin2/event/2nd/event_2nd.html"],
        ["- 닥터포헤어 리뉴얼 메인페이지 퍼블리싱", "https://drforhair2024.cafe24.com/skin-skin2"],
        ["- 진로토닉몰 이벤트 게시판 퍼블리싱", "https://www.jinrotonic.com/jintini-magazine?boardNo=279889"],
      ],
      link: "",
      image: [
        "/img/pro01_20.jpg"
      ],
    },
  },
];

export default projectData;
