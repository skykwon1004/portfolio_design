import React, { useState } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Project from "./components/Project";
import ScrollTop from "./components/ScrollTop";
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
      <main>
        <Intro />
        <Experience darkMode={darkMode} />
        <Project />
        <Skill />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
};

export default App;
