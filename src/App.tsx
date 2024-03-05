import React from "react";
// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from './vite.svg';
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Skill from "./components/Skill";
const App: React.FC = () => {
  return (
    <>
      <Header />
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
