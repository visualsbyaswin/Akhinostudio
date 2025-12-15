import React, { useEffect, useRef } from "react";
import "./personal.css";
import Reuse from "../ReuseHeadings/Reuse";
import { assets } from "../../assets/assets";
import Button from "../Common/Button/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PersonalProfile = () => {
 const profileRef = useRef(null);

  useEffect(() => {
    const words = profileRef.current.querySelectorAll(".word");

    // Animate each word individually
    gsap.fromTo(
      words,
      { opacity: 0.3, y: 20, color: "rgb(102, 102, 102)" },
      {
        opacity: 1,
        y: 0,
        color: "#ffffffff", // final color, can be a single color
        stagger: 0.05, // small delay between each word
        ease: "power2.out",
        scrollTrigger: {
          trigger: words,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);
  const text =
    "We bridge creative direction with real-world execution, combining design and development into one seamless workflow to deliver digital experiences that are thoughtful, fast, and built to perform.";
  return (
    <div className="personalprofilemain">
      <Reuse fabout="© Personal Profile プロフィール" tabout="Visual Thinker" />

      <div className="maincontentsection">
        <div className="postionleft">
          <div className="lffirst">
            <img src={assets.exp1} alt="" />
          </div>
          <div className="lffirst">
            <img className="remove" src={assets.exp2} alt="" />
          </div>
        </div>
        <div className="postionright">
          <video src={assets.race3} muted loop autoPlay></video>
        </div>
      </div>

      <div className="personalcontents">
        <p>
          We bridge creative direction with real-world execution, combining
          design and development into one seamless workflow to deliver digital
          experiences that are thoughtful, fast, and built to perform.
        </p>
       <div>
        
                  <Button content="SeeMore"/>
       </div>
      </div>

      <div className="profileanimationcontent" ref={profileRef}>
            <p className="ser">    {text.split("").map((char, i) => (
            <span key={i} className="word">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}</p>
      </div>
    </div>
  );
};

export default PersonalProfile;