import React, { useState } from "react";
// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from './vite.svg';
import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Skill from "./components/Skill";
const App = () => {
  // modal 만들기
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal); // 모달 상태를 토글합니다.
  };

  return (
    <>
      <Header modal={modal} setModal={setModal} toggleModal={toggleModal} />
      <Intro />
      <Experience />
      <Project />
      <Skill />
      <Education />
      <Contact />
    </>
  );
};

export default App;
