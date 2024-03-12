import React from "react";
import { Element } from "react-scroll";
import { BsFillTelephoneFill } from "react-icons/bs";
import useDarkModeStore from "../zustand/useDarkModeStore";

const Contact = () => {
  const { darkMode } = useDarkModeStore();
  return (
    <Element name="contact">
      <div className="contact">
        <div className="contact-wapper inner">
          <div>
            <h2 className="text-5xl font-bold mb-4 mb-4 max-md:text-3xl max-md:mb-2">
              Contact
            </h2>
            <p className="mb-10 text-xl max-md:text-lg max-md:mb-6">
              같이 일하고 싶은 동료가 되겠습니다.
            </p>
          </div>
          <div className="contact-content-wapper">
            <div className="contact-content flex justify-between gap-14 max-md:flex-col">
              <div
                className="contact-content-left flex-1"
                style={{
                  color: darkMode ? "rgb(27 29 31)" : " rgb(27 29 31)",
                }}
              >
                <strong className="text-5xl block mb-2 max-md:text-2xl">
                  Contact & Links
                </strong>
                <strong className="text-5xl max-md:text-2xl">Thank You!</strong>
              </div>
              <div
                className="contact-content-right flex-1 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center"
                style={{
                  color: darkMode ? "rgb(27 29 31)" : " rgb(27 29 31)",
                }}
              >
                <span className="contact-icon">
                  <BsFillTelephoneFill />
                </span>
                <span className="block mb-2 mt-4">Phone : 010-2066-2397</span>
                <span className="block mb-2">
                  Email : skykwon1004@gmail.com
                </span>
                <span className="block">
                  Github :{" "}
                  <a
                    href="https://github.com/skykwon1004"
                    target="_blank"
                    className="underline underline-offset-4"
                  >
                    https://github.com/skykwon1004
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
