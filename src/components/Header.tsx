import React, { useState } from "react";
import { Link } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";
import useDarkModeStore from "../zustand/useDarkModeStore";
import { FaBars, FaX } from "react-icons/fa6";

const Header: React.FC = () => {
  const { darkMode } = useDarkModeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 left-0 flex items-center p-6 text-xl border-solid border-b justify-between max-md:p-4 ${
        darkMode
          ? "backdrop-blur-sm text-gray-50 border-neutral-700"
          : "backdrop-blur-sm text-slate-950 border-neutral-200"
      }`}
    >
      <h1 className="font-black text-2xl z-10">EunJin.</h1>
      <div className="flex gap-6 max-md:gap-3">
        <nav
          className={`${isMenuOpen ? "block" : "hidden"} md:flex font-medium`}
        >
          <ul className="flex gap-6 cursor-pointer max-md:flex-col max-md:text-right">
            <li>
              <Link
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className="block md:hidden z-10" onClick={toggleMenu}>
          {isMenuOpen ? <FaX /> : <FaBars />}
        </button>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
