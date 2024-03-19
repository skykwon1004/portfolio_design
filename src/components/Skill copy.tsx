// import React, { useState, useEffect } from "react";
// import { Element } from "react-scroll";

// const Skill = () => {
//   const [scrollY, setScrollY] = useState(0);

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;
//     console.log("Scroll Y:", currentScrollY); // 스크롤 값을 콘솔에 출력합니다.
//     setScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // 스크롤 값이 2000일 때부터 4200일 때까지 marquee1, marquee3을 왼쪽으로, marquee2를 오른쪽으로 가로로 움직입니다.
//   useEffect(() => {
//     const startScroll = 3000;
//     const endScroll = 5000;
//     const moveAmount = 200;

//     if (scrollY >= startScroll && scrollY <= endScroll) {
//       const offset = scrollY - startScroll;
//       const move = (offset / (endScroll - startScroll)) * moveAmount;

//       const marqueeElements = document.querySelectorAll(
//         ".marquee1, .marquee2, .marquee3"
//       );

//       marqueeElements.forEach((element, index) => {
//         let direction = 1; // 기본적으로는 양수 방향으로 이동합니다.
//         if (element.classList.contains("marquee2")) {
//           direction = -1; // marquee2는 음수 방향으로 이동합니다.
//         }
//         const initialPosition = 100 * index; // 각 marquee 요소의 시작 위치
//         element.style.transform = `translateX(${
//           initialPosition + direction * -move
//         }px)`;
//       });
//     } else {
//       const marqueeElements = document.querySelectorAll(
//         ".marquee1, .marquee2, .marquee3"
//       );

//       marqueeElements.forEach((element) => {
//         element.style.transform = "none";
//       });
//     }
//   }, [scrollY]);

//   return (
//     <Element name="skill">
//       <div className="skill">
//         <div className="skill-wapper inner">
//           <div className="skill-inner">
//             <h2 className="text-5xl font-bold mb-4">Skill</h2>
//             <p className="mb-10 text-xl">사용가능한 기술입니다.</p>
//           </div>
//           <div className="skill-content-wapper">
//             <div className="marquee marquee1">
//               <div>
//                 <span className="block">React</span>
//                 <span className="block">Redux</span>
//                 <span className="block">TypeScript</span>
//                 <span className="block">JavaScript</span>
//                 <span className="block">JQuery</span>
//               </div>
//               <div>
//                 <span className="block">React</span>
//                 <span className="block">Redux</span>
//                 <span className="block">TypeScript</span>
//                 <span className="block">JavaScript</span>
//                 <span className="block">JQuery</span>
//               </div>
//               <div>
//                 <span className="block">React</span>
//                 <span className="block">Redux</span>
//                 <span className="block">TypeScript</span>
//                 <span className="block">JavaScript</span>
//                 <span className="block">JQuery</span>
//               </div>
//             </div>
//             <div className="marquee marquee2 mb-16">
//               <div>
//                 <span className="block">React</span>
//                 <span className="block">Rudex</span>
//                 <span className="block">TypeScript</span>
//                 <span className="block">JavaScript</span>
//                 <span className="block">JQuery</span>
//                 <span className="block">HTML</span>
//                 <span className="block">CSS</span>
//               </div>
//               <div>
//                 <span className="block">React</span>
//                 <span className="block">Rudex</span>
//                 <span className="block">TypeScript</span>
//                 <span className="block">JavaScript</span>
//                 <span className="block">JQuery</span>
//                 <span className="block">HTML</span>
//                 <span className="block">CSS</span>
//               </div>
//               <div>
//                 <span className="block">React</span>
//                 <span className="block">Redux</span>
//                 <span className="block">TypeScript</span>
//                 <span className="block">JavaScript</span>
//                 <span className="block">JQuery</span>
//               </div>
//             </div>
//           </div>
//           <div className="skill-list flex gap-10 justify-between">
//             <div className="skill-front flex gap-10">
//               <div className="skill-list-01">
//                 <strong className="block mb-4 text-xl">Front-End</strong>
//                 <span className="block flex gap-3 items-center mb-2">
//                   <img src="/img/skill-logo-01.png" alt="" />
//                   React
//                 </span>
//                 <span className="block flex gap-3 items-center mb-2">
//                   <img src="/img/skill-logo-02.png" alt="" />
//                   Redux-Toolkit
//                 </span>
//                 <span className="block flex gap-3 items-center mb-2">
//                   <img src="/img/skill-logo-03.png" alt="" />
//                   TypeScript
//                 </span>
//                 <span className="block flex gap-3 items-center mb-2">
//                   <img src="/img/skill-logo-04.png" alt="" />
//                   JavaScript
//                 </span>
//                 <span className="block flex gap-3 items-center mb-2">
//                   <img src="/img/skill-logo-05.png" alt="" />
//                   JQuery
//                 </span>
//               </div>
//               <div className="skill-list-01">
//                 <strong className="block mb-4 opacity-0">Front-End</strong>
//                 <span className="block flex gap-3 items-center mb-2">
//                   <img src="/img/skill-logo-06.png" alt="" />
//                   HTML
//                 </span>
//                 <span className="block flex gap-3 items-center mb-2">
//                   <img src="/img/skill-logo-07.png" alt="" />
//                   CSS
//                 </span>
//                 <span className="block flex gap-3 items-center mb-2">
//                   <img src="/img/skill-logo-08.png" alt="" />
//                   SASS
//                 </span>
//                 <span className="block flex gap-3 items-center mb-2">
//                   <img src="/img/skill-logo-09.png" alt="" />
//                   StyleComponent
//                 </span>
//                 <span className="block flex gap-3 items-center mb-2">
//                   <img src="/img/skill-logo-10.png" alt="" />
//                   Gnuboard
//                 </span>
//               </div>
//             </div>
//             <div className="skill-list-01">
//               <strong className="block mb-4 text-xl">Design</strong>
//               <span className="block flex gap-3 items-center mb-2">
//                 <img src="/img/skill-logo-11.png" alt="" />
//                 Figma
//               </span>
//               <span className="block flex gap-3 items-center mb-2">
//                 <img src="/img/skill-logo-12.png" alt="" />
//                 Adobe Illustrator
//               </span>
//               <span className="block flex gap-3 items-center mb-2">
//                 <img src="/img/skill-logo-13.png" alt="" />
//                 Adobe Potoshop
//               </span>
//             </div>
//             <div className="skill-list-01">
//               <strong className="block mb-4 text-xl">Cooperation</strong>
//               <span className="block flex gap-3 items-center mb-2">
//                 <img src="/img/skill-logo-14.png" alt="" />
//                 GitHub
//               </span>
//               <span className="block flex gap-3 items-center mb-2">
//                 <img src="/img/skill-logo-15.png" alt="" />
//                 Notion
//               </span>
//               <span className="block flex gap-3 items-center mb-2">
//                 <img src="/img/skill-logo-16.png" alt="" />
//                 Swagger
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Element>
//   );
// };

// export default Skill;
