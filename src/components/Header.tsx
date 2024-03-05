import React from "react";
import { Link } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";

interface OwnProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDarkMode: () => void;
}

const Header: React.FC<OwnProps> = ({
  darkMode,
  setDarkMode,
  toggleDarkMode,
}) => {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 left-0 flex items-center justify-between p-6 text-xl border-solid border-b ${
        darkMode
          ? "bg-neutral-900 text-white border-neutral-700"
          : "bg-white text-slate-950 border-neutral-200"
      }`}
    >
      <h1 className="font-black">EunJin.</h1>
      <nav className="flex items-center justify-center gap-6 font-medium">
        <ul className="flex cursor-pointer gap-6">
          <li>
            <Link
              activeClass="active"
              to="intro"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Intro
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Skill
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <DarkModeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </nav>
    </header>
  );
};

export default Header;
