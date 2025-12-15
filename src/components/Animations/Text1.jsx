// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import img1 from "../../assets/featuremain1.avif"
// import img2 from "../../assets/featuremain2.avif"

// import img3 from "../../assets/featuremain3.avif"

// import img4 from "../../assets/featuremain4.avif"

// import "./text1.css";

// const items = [
//   { title: "Art Direction", desc: "We guide every visual decision...", img:{img1} },
//   { title: "Strategy", desc: "From strategy to execution...", img: {img2}},
//   { title: "Motion", desc: "We use motion as a design tool...", img: {img3} },
//   { title: "Framer Sites", desc: "Design meets execution...", img: {img4} },
// ];

// const HoverImageList = () => {
//   const imageRef = useRef(null);
//   const tl = useRef(null);

//   useEffect(() => {
//     // default state (hidden, scaled)
//     gsap.set(imageRef.current, { autoAlpha: 0, scale: 0.9 });
//   }, []);

//   const handleMouseEnter = (img) => {
//     imageRef.current.src = img; // change image
//     tl.current = gsap.timeline()
//       .to(imageRef.current, {
//         autoAlpha: 1,
//         scale: 1,
//         duration: 0.4,
//         ease: "power3.out",
//       });
//   };

//   const handleMouseLeave = () => {
//     gsap.to(imageRef.current, {
//       autoAlpha: 0,
//       scale: 0.9,
//       duration: 0.3,
//       ease: "power3.inOut",
//     });
//   };

//   const handleMouseMove = (e) => {
//     gsap.to(imageRef.current, {
//       x: e.clientX + 20,
//       y: e.clientY - 20,
//       duration: 0.3,
//       ease: "power3.out",
//     });
//   };

//   return (
//     <div className="hover-list" onMouseMove={handleMouseMove}>
//       {items.map((item, i) => (
//         <div
//           key={i}
//           className="hover-row"
//           onMouseEnter={() => handleMouseEnter(item.img)}
//           onMouseLeave={handleMouseLeave}
//         >
//           <h3>{item.title}</h3>
//           <p>{item.desc}</p>
//         </div>
//       ))}
//       <img ref={imageRef} className="hover-image" alt="preview" />
//     </div>
//   );
// };

// export default HoverImageList;

import React, { useEffect, useRef } from "react";
import "./text1.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTextt = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    const words = element.textContent.split(" ");
    element.innerHTML = "";

    words.forEach((word) => {
      const span = document.createElement("span");
      span.className = "word";
      span.textContent = word + " ";
      element.appendChild(span);
    });

    gsap.fromTo(
      ".word",
      { yPercent: 100, opacity: 0, rotateX: 90 },
      {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 60%",
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <section className="scroll-section">
      <h1 ref={textRef} className="scroll-text">
        ScrollTrigger Took My Text and Turned It Into Motion Art
      </h1>
    </section>
  );
};

export default ScrollTextt;
