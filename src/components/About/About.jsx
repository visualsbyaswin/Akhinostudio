import React, { useEffect, useRef } from "react";
import "./about.css";
import { assets } from "../../assets/assets";
import Reuse from "../ReuseHeadings/Reuse";
import Banner from "../banner/Banner";
import Button from "../Common/Button/Button";
import gsap from "gsap";
const About = () => {
    const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;

    gsap.fromTo(
      el,
      { scale: 0.8,},
      {
        scale: 1,
     
     
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",  // when image enters viewport
             // until scrolled higher
          scrub: true,       // tie animation with scroll
          markers: false,    // set true to debug
        },
      }
    );
  }, []);

  return (
    
    <section className="aboutsection">
      <Reuse fabout="© Curated Interfaces ビジュアル" sabout="WDX® — 02" tabout="Digital Designer" />
     <div className="statergyss">
          <p>Art Direction</p>
          <p>Branding</p>
          <p>Web Design</p>
          <p>Statergy</p>
        </div>
      <div className="aboutmaincontainer">
            
        <div ref={imgRef} className="imagecontents">
          <img  src={assets.aboutimg} alt="" />
        </div>

        <div className="allaboutcontents">
          <div className="contentsofaboutfirst">
            <div>
              <h3>
                13+ years™ of digital form, sharp interactions, and relentless
                creative discipline and effort.
              </h3>
            </div>
            <div>      <Button content="Contact"/></div>
   
          </div>
          <div className="asetheticcontents">
            <div className="faseth">
              <div className="box1s"><img src={assets.brand1} alt="" /></div>
              <div className="box1s"><img src={assets.brand2} alt="" /></div>
              <div className="box1s"><img src={assets.brand3} alt="" /></div>
            </div>
            <div className="saseth">
              <div className="box2s"><img src={assets.brand4} alt="" /></div>
              <div className="box2s"><img src={assets.brand5} alt="" /></div>
            </div>
          </div>
        </div>

  
      </div>
   
    </section>
  );
};

export default About;
