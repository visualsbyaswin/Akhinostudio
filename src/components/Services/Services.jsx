import React, { useEffect, useRef } from "react";
import "./services.css";
import Reuse from "../ReuseHeadings/Reuse";
import Duplicate from "../banner/duplicate";
import gsap from "gsap";
import { Hoverlists } from "../../assets/assets";

const Services = () => {
  const imageref = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    gsap.set(imageref.current, {  scale: 2,autoAlpha:0 });
  }, []);

  const HandleMouseEnter = (img) => {
    imageref.current.src = img;
    tl.current = gsap.timeline().to(imageref.current, {

      scale: 1.1,autoAlpha:1,
      duration: 0.4,

    });
  };

  const HandleMouseLeave = () => {
    gsap.to(imageref.current, {
     
      scale: 0.9,autoAlpha:0,
      duration: 0.3,

    });
  };

  const handleMouseMove = (e) => {
    gsap.to(imageref.current, {
      x: e.clientX + 20,
      y: e.clientY - 20,
      duration: 2,

    });
  };

  return (
    <section className="servises">
      <Reuse
        fabout="© Capabilities サービス内容"
        sabout="(WDX® — 04)"
        tabout="Digital Execution"
      />

      <div className="servicetext">
        <h2>Services </h2>
        <span>(6)</span>
      </div>
      <Duplicate skill1="Precise" skill2="Strucyured" skill3="Focused" skill4="Visual Language"/>

      <div className="wonderhoversection">
        <div className="sectionofhoverend" onMouseMove={handleMouseMove}>
          {Hoverlists.map((item, i) => (
            <React.Fragment key={i}>
            <div
              className="servicecontents"
              key={i}
              onMouseEnter={() => HandleMouseEnter(item.img)} // 👈 pass image
              onMouseLeave={HandleMouseLeave}
            >
              <div className="sernumber">
                <p>{item.number}</p>
              </div>
              <div className="sername">
                <h3>{item.name}</h3>
              </div>
              <div className="sercontents">
                <p>{item.caption}</p>
              </div>
              
            </div>
              <div className="hrrs"></div>
            </React.Fragment>
          ))}
        </div>


        {/* 👇 Single floating image (outside map) */}
        <img
          className="hover-image"
          ref={imageref}
          alt="preview"
          style={{ position: "absoulute", pointerEvents: "none", zIndex: 999 }}
        />

      
      </div>
    </section>
  );
};

export default Services;

