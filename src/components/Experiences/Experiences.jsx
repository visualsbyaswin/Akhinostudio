import React, { useEffect, useRef, useState } from "react";
import "./experience.css";
import Reuse from "../ReuseHeadings/Reuse";
import Duplicate from "../banner/duplicate";
import gsap from "gsap";
import { assets, contents } from "../../assets/assets";



const Experiences = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const textEl = textRef.current;
    const imgEl = imgRef.current;

    // Initialize first content
    gsap.set([textEl, imgEl], { autoAlpha: 1, y: 0 });

    // GSAP timeline for smooth looping
    const tl = gsap.timeline({ repeat: -1 });

    contents.forEach((content) => {
      tl.to([textEl, imgEl], {
        autoAlpha: 0,
        y: -50, // slide up
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          textEl.textContent = content.text;
          imgEl.src = content.img;
        },
      });
      tl.to([textEl, imgEl], {
        autoAlpha: 1,
        y: 0, // slide back down
        duration: 0.8,
        ease: "power4.out", // smooth polynomial easing
      });
      tl.to({}, { duration: 2 }); // pause between slides
    });

    return () => tl.kill(); // cleanup on unmount
  }, []);

  return (
    <div className="Experiences">
      <Reuse
        fabout="© Experience エクスペリエンス"
        sabout="(WDX® — 05)"
        tabout="Digital Craft"
      />

      <div className="hrrs"></div>

      <div className="autoslidingsectionmain">
        <div className="autoslider" ref={textRef}></div>
        <div className="autoimage">
          <img ref={imgRef} alt="Experience" />
        </div>
      </div>
      <Duplicate />
      <div className="partners">
        <div className="hrrs"></div>
        <div className="partnersection">
          <div className="fpartofexp">
            <p>Clavmen Studio</p>
            <p>2022 - present</p>
          </div>

          <div className="spartofexp">
            {" "}
            <p>Art Director & Designer</p>
            <p>Tokyo</p>
          </div>
        </div>
        <div className="hrrs"></div>
        <div className="partnersection">
          <div className="fpartofexp">
            {" "}
            <p>Modular Eight</p>
            <p>2020 – 2022</p>
          </div>

          <div className="spartofexp">
            {" "}
            <p>Senior Developer</p>
            <p>Osaka</p>
          </div>
        </div>
        <div className="hrrs"></div>
        <div className="partnersection">
          <div className="fpartofexp">
            {" "}
            <p>Haus of Signal</p>
            <p>2018 – 2020</p>
          </div>

          <div className="spartofexp">
            {" "}
            <p>Creative Technologist</p>
            <p>Berlin</p>
          </div>
        </div>
        <div className="hrrs"></div>
        <div className="partnersection">
          <div className="fpartofexp">
            {" "}
            <p>Studio Orbit</p>
            <p>2016 – 2018</p>
          </div>

          <div className="spartofexp">
            {" "}
            <p>UI/UX Designer</p>
            <p>Dallas</p>
          </div>
        </div>
        <div className="hrrs"></div>
        <div className="partnersection">
          <div className="fpartofexp">
            <p>Novaform Labs</p>
            <p>2014 – 2016</p>
          </div>

          <div className="spartofexp">
            <p>Junior Designer</p>
            <p>Mexico</p>
          </div>
        </div>
        <div className="hrrs"></div>
      </div>
    </div>
  );
};

export default Experiences;
