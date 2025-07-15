interface ModalContent {
  title: string;
  description: string;
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
    image: "/img/pro01_01.jpg",
    gifImage: "/img/aat_01_g.gif",
    technologies: ["홈페이지 디자인", "반응형 디자인", "퍼블리셔"],
    link: "",
    modalContent: {
      title: "WEB ∙ UIUX",
      description:
        "",
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
    image: "/img/pro01_01.jpg",
    gifImage: "/img/aat_01_g.gif",
    technologies: ["배너 디자인","이벤트 배너 디자인", "상세페이지 디자인", "이미지 보정"],
    link: "",
    modalContent: {
      title: "컨텐츠 디자인",
      description:
        "",
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
    image: "/img/pro01_01.jpg",
    gifImage: "/img/aat_01_g.gif",
    technologies: ["전단지 디자인", "X 배너 디자인"],
    link: "",
    modalContent: {
      title: "편집 디자인",
      description:
        "",
      link: "",
      image: [
        "/img/pro01_11.jpg"
      ],
    },
  },
];

export default projectData;
