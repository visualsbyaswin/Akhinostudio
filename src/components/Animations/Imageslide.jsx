// MarqueeSlider.js
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./imageslide.css";
import { images } from "../../assets/assets";



const MarqueeSlider = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const totalWidth = container.scrollWidth / 2;

    gsap.to(container, {
      x: -totalWidth,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="marquee-wrapper">
      <div className="marquee-container" ref={containerRef}>
        {[...images, ...images].map((img, index) => (
          <div className="marquee-item" key={index}>
            <img src={img} alt="marquee" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSlider;
