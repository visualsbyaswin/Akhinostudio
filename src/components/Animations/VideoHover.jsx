// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import './VideoHover.css';

// const TestimonialSection = () => {
//   const testimonialRef = useRef(null);
//   const textRefs = useRef([]);

//   const testimonials = [
//     {
//       id: 1,
//       text: `"felt crafted and intentional. I'll be sure not only looked beautiful but performed well too — and the entire collaboration process was smooth."`,
//       author: "Lisa Kuroda",
//       position: "Founder, Studio Analog"
//     },
//     {
//       id: 2,
//       text: `"Akhiko approaches every project with a deep sense of purpose. His work is never just about the surface — it's about how each element functions, connects, and flows. He brings logic, sharpness, and confidence to every decision, and his build quality."`,
//       author: "Daniel Reyes",
//       position: "Director, Framehaus"
//     },
//     {
//       id: 3,
//       text: `"His ability to merge storytelling with clean interaction design is unmatched. Akihiko understands not just how things should look, but why they should look that way — and that insight came through in every project."`,
//       author: "WS Testimonial",
//       position: ""
//     }
//   ];

//   useEffect(() => {
//     const testimonial = testimonialRef.current;
//     const texts = textRefs.current;

//     if (testimonial && texts.length > 0) {
//       // Set initial positions
//       gsap.set(texts, { y: 100, opacity: 0 });

//       // Create timeline for continuous scrolling
//       const tl = gsap.timeline({ repeat: -1 });
      
//       texts.forEach((text, index) => {
//         tl.to(text, {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power2.out"
//         })
//         .to(text, {
//           y: -100,
//           opacity: 0,
//           duration: 1,
//           ease: "power2.in",
//           delay: 3 // Show each testimonial for 3 seconds
//         }, "+=0.5");
//       });
//     }

//     return () => {
//       // Clean up GSAP animations
//       gsap.killTweensOf(textRefs.current);
//     };
//   }, []);

//   const addToRefs = (el) => {
//     if (el && !textRefs.current.includes(el)) {
//       textRefs.current.push(el);
//     }
//   };

//   return (
//     <section className="testimonial-section">
//       <div className="testimonial-container">
//         <div className="testimonial-content">
//           <div className="testimonial-text-container" ref={testimonialRef}>
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={testimonial.id}
//                 className="testimonial-item"
//                 ref={addToRefs}
//               >
//                 <p className="testimonial-quote">{testimonial.text}</p>
//                 <div className="testimonial-author">
//                   <h4 className="author-name">{testimonial.author}</h4>
//                   {testimonial.position && (
//                     <p className="author-position">{testimonial.position}</p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="testimonial-cta">
//             <h2 className="cta-title">GET IN TOUCH</h2>
//             <button className="cta-button">Start a Project</button>
//           </div>
//         </div>
        
//         <div className="testimonial-image">
//           <div className="image-placeholder">
//             <span>Profile Photo</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;


// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./VideoHover.css";

// gsap.registerPlugin(ScrollTrigger);

// const MarqueeTestimonials = () => {
//   const sectionRef = useRef(null);
//   const marqueeRef = useRef(null);
//   const testimonialsRef = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Pin the whole section
//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "+=200%",
//         pin: true,
//         scrub: true,
//       });

//       // Marquee horizontal animation
//       gsap.to(marqueeRef.current, {
//         xPercent: -50,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=200%",
//           scrub: true,
//         },
//       });

//       // Testimonials animate from top
//       gsap.from(testimonialsRef.current, {
//         y: -100,
//         opacity: 0,
//         stagger: 0.3,
//         duration: 1,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top center",
//           end: "bottom center",
//           toggleActions: "play none none reverse",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="marquee-section" ref={sectionRef}>
//       {/* Marquee part */}
//       <div className="marquee" ref={marqueeRef}>
//         <span>🚀 Creative Solutions — 🚀 Creative Solutions — </span>
//         <span>🚀 Creative Solutions — 🚀 Creative Solutions — </span>
//       </div>

//       {/* Testimonials part */}
//       <div className="testimonials">
//         {["Amazing service!", "Loved the design!", "Highly recommend!"].map(
//           (item, i) => (
//             <div
//               className="testimonial"
//               key={i}
//               ref={(el) => (testimonialsRef.current[i] = el)}
//             >
//               {item}
//             </div>
//           )
//         )}
//       </div>
//     </section>
//   );
// };

// export default MarqueeTestimonials;



// import { useRef, useEffect, useState } from "react";
// import "./VideoHover.css"
// const cards = [
//   { id: 1, title: "Manila", img: "manila.jpg" },
//   { id: 2, title: "Theo", img: "theo.jpg" },
//   { id: 3, title: "Oslo", img: "oslo.jpg" },
// ];

// export default function Carousel() {
//   const [scroll, setScroll] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScroll(window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="carousel">
//       {cards.map((card, i) => {
//         // offset each card based on index + scroll
//         const rotation = (i * 40) - scroll * 0.1;
//         return (
//           <div
//             key={card.id}
//             className="card"
//             style={{
//               transform: `rotateY(${rotation}deg) translateZ(400px)`,
//             }}
//           >
//             <img src={card.img} alt={card.title} />
//             <h3>{card.title}</h3>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./VideoHover.css"
// gsap.registerPlugin(ScrollTrigger);

// export default function Carousel() {
//   useEffect(() => {
//     // marquee text scroll
//     gsap.to(".marquee", {
//       xPercent: -50,
//       repeat: -1,
//       duration: 20,
//       ease: "linear"
//     });

//     // pin the whole section
//     ScrollTrigger.create({
//       trigger: ".testimonial-section",
//       start: "top top",
//       end: "+=2000", // adjust for scroll length
//       pin: true,
//       scrub: true
//     });

//     // animate testimonial cards on scroll
//     gsap.utils.toArray(".card").forEach((card, i) => {
//       gsap.fromTo(
//         card,
//         { y: 200, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           scrollTrigger: {
//             trigger: ".testimonial-section",
//             start: () => `top+=${i * 300} top`,
//             end: () => `+=300`,
//             scrub: true
//           }
//         }
//       );
//     });
//   }, []);

//   return (
//     <section className="testimonial-section">
//       <div className="marquee-wrapper">
//         <h1 className="marquee">Testimonials Testimonials Testimonials</h1>
//       </div>
//       <div className="cards">
//         <div className="card">Lisa’s testimonial…</div>
//         <div className="card">Daniel’s testimonial…</div>
//         <div className="card">Another testimonial…</div>
//       </div>
//     </section>
//   );
// }
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { CustomEase } from "gsap/CustomEase";
// import "./VideoHover.css"
// gsap.registerPlugin(CustomEase);

// const HeroAnimation = () => {
//   const headerRef = useRef(null);
//   const counterRef = useRef(null);
//   const heroRef = useRef(null);
//   const overlayRef = useRef(null);
//   const heroImgRef = useRef(null);
//   const zayRef = useRef(null);

//   // Split text into spans
//   const splitTextIntoSpans = (element) => {
//     const text = element.innerText;
//     element.innerHTML = text
//       .split("")
//       .map((char) => `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`)
//       .join("");
//   };

//   useEffect(() => {
//     // Create custom ease
//     CustomEase.create(
//       "hop",
//       "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1"
//     );

//     // Split header text
//     if (headerRef.current) splitTextIntoSpans(headerRef.current);

//     // Counter animation
//     const animationCounter = () => {
//       const counterElement = counterRef.current;
//       let currentValue = 0;
//       const updateInterval = 300;
//       const maxDuration = 2000;
//       const endValue = 100;
//       const startTime = Date.now();

//       const update = () => {
//         const elapsed = Date.now() - startTime;
//         if (elapsed < maxDuration) {
//           currentValue = Math.min(currentValue + Math.floor(Math.random() + 30) + 5, endValue);
//           counterElement.textContent = currentValue;
//           setTimeout(update, updateInterval);
//         } else {
//           counterElement.textContent = currentValue;
//           setTimeout(() => {
//             gsap.to(counterElement, {
//               y: -20,
//               opacity: 0,
//               duration: 1,
//               ease: "power3.inOut",
//               onStart: revealLandingPage,
//             });
//           }, -500);
//         }
//       };

//       update();
//     };

//     // Animate counter initially
//     gsap.to(counterRef.current, {
//       y: 0,
//       duration: 1,
//       ease: "power3.out",
//       delay: 1,
//       onComplete: animationCounter,
//     });

//     // Reveal landing page animation
//     const revealLandingPage = () => {
//       gsap.to(heroRef.current, {
//         duration: 2,
//         ease: "hop",
//         clipPath: `polygon(0% 100%,100% 100%,100% 0%,0% 0%)`,
//         onStart: () => {
//           gsap.to(heroRef.current, {
//             transform: "translate(-50%,-50%) scale(1)",
//             duration: 2.25,
//             ease: "power3.inOut",
//             delay: 0.25,
//           });

//           gsap.to(overlayRef.current, {
//             duration: 2,
//             ease: "hop",
//             delay: 0.5,
//             clipPath: `polygon(0% 100%,100% 100%,100% 0%,0% 0%)`,
//           });

//           gsap.to(heroImgRef.current, {
//             transform: "scale(1)",
//             duration: 2.25,
//             ease: "power3.inOut",
//             delay: 0.25,
//           });

//           gsap.to(headerRef.current.querySelectorAll("span"), {
//             y: 0,
//             stagger: 0.1,
//             duration: 2,
//             ease: "power4.inOut",
//             delay: 0.75,
//           });
//         },
//       });
//     };

//     // 3D hover animation for .zay
//     const zayElement = zayRef.current;

//     const handleMouseMove = (e) => {
//       const rect = zayElement.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       const rotateY = (x / rect.width - 0.5) * 20;
//       const rotateX = (y / rect.height - 0.5) * -20;

//       gsap.to(zayElement, {
//         rotationY: rotateY,
//         rotationX: rotateX,
//         transformPerspective: 1000,
//         ease: "power2.out",
//         duration: 0.3,
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(zayElement, {
//         rotationY: 0,
//         rotationX: 0,
//         ease: "elastic.out(1,0.5)",
//         duration: 1,
//       });
//     };

//     zayElement.addEventListener("mousemove", handleMouseMove);
//     zayElement.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       zayElement.removeEventListener("mousemove", handleMouseMove);
//       zayElement.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div>
//       <div className="counter">
//         <p ref={counterRef}>0</p>
//       </div>

//       <div className="hero" ref={heroRef}>
//         <div className="overlay" ref={overlayRef}></div>
//         <div className="hero-img" ref={heroImgRef}>
//           <img src="/hero.png" alt="Hero" />
//         </div>
//       </div>

//       <div className="header">
//         <h1 ref={headerRef}>Welcome to Our Site</h1>
//       </div>

//       <div className="zay" ref={zayRef}>
//         Hover Me
//       </div>
//     </div>
//   );
// };

// export default HeroAnimation;


// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ScrollColorText = () => {
//   const textRef = useRef(null);

//   useEffect(() => {
//     const letters = textRef.current.querySelectorAll(".letter");

//     letters.forEach((letter, i) => {
//       gsap.to(letter, {
//         color: "#ff0000", // target color
//         scrollTrigger: {
//           trigger: letter,
//           start: "top 90%", // when letter enters viewport
//           end: "top 50%",
//           scrub: true,
//           markers: false,
//         },
//       });
//     });
//   }, []);

//   const text = "Hello, Scroll Animations!";

//   return (
//     <div style={{ height: "200vh", padding: "50px" }}>
//       <h1 ref={textRef} style={{ fontSize: "3rem", fontWeight: "bold" }}>
//         {text.split("").map((char, i) => (
//           <span key={i} className="letter">
//             {char}
//           </span>
//         ))}
//       </h1>
//     </div>
//   );
// };

// export default ScrollColorText;



import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "../../assets/assets";

gsap.registerPlugin(ScrollTrigger);

const ThreeDScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".card");

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { z: -200 * i, rotationY: 0, opacity: 0 },
        {
          z: 0,
          rotationY: 360,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: true, // smooth scrolling effect
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        perspective: "1000px", // key for 3D effect
        padding: "200px 0",
      }}
    >
      <div className="card" style={cardStyle}><video src={assets.race} autoPlay muted loop></video></div>
      <div className="card" style={cardStyle}><video src={assets.race2} autoPlay muted loop></video></div>
            <div className="card" style={cardStyle}><video src={assets.race3} autoPlay muted loop></video></div>
                  <div className="card" style={cardStyle}><video src={assets.race} autoPlay muted loop></video></div>
    </div>
  );
};

const cardStyle = {
  height: "500px",
  width: "50%",
  margin: "100px auto",
  background: "linear-gradient(45deg, #f093fb, #f5576c)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
  color: "#fff",
  borderRadius: "20px",
  transformStyle: "preserve-3d",
};

export default ThreeDScroll;
