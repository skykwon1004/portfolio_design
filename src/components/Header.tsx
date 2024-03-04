import React from "react";
import { Link } from "react-scroll";

const Header = ({ modal, setModal, toggleModal }) => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 left-0 text-2xl font-normal">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <ul className="flex cursor-pointer">
          <li className="mr-8">
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
          <li className="mr-8">
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
          <li className="mr-8">
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
          <li className="mr-8">
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
          <li className="mr-8">
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
          <li className="mr-8">
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
      </nav>
    </header>
  );
};

export default Header;
