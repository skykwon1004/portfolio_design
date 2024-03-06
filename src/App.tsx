import React, { useState } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Skill from "./components/Skill";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Intro />
      <Experience darkMode={darkMode} />
      <Project />
      <Skill />
      <Education />
      <Contact />
    </>
  );
};

export default App;
