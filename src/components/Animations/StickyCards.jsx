import React, { useEffect } from "react";
import "./stickycards.css";
import { useGSAP } from "@gsap/react";
import { StickyCarddata } from "../../assets/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const UseCards = () => {
  const container = useRef(null);

  useGSAP(() => {
    const stickycards = document.querySelectorAll(".sticky-card");
    stickycards.forEach((card, index) => {
      if (index < stickycards.length - 1) {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: stickycards[stickycards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
      }
      if (index < stickycards.length - 1) {
        ScrollTrigger.create({
          trigger: stickycards[index * 1],
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = 1 - progress * 0.25;
            const rotation = (index % 2 === 0 ? 5 : -5) * progress;
            // const afterOpacity=progress;

            gsap.set(card, {
              scale: scale,
              rotation: rotation,
              // "--after-opacity":afterOpacity,
            });
          },
        });
      }
    });
    {
      scope: container;
    }
  });
  return (
    <div className="sticky-cards">
      {StickyCarddata.map((carddata, index) => (
        <div className="sticky-card" key={index}>
          <div className="sticky-card-index">
            <h1>{carddata.index}</h1>
          </div>
          <div className="sticky-card-content">
            <div className="sticky-card-content-wrapper">
              <h1 className="sticky-card-header">{carddata.title}</h1>

              <div className="sticky-card-img">
                <img src={carddata.img} alt="" />
              </div>

              <div className="sticky-card-copy">
                <div className="sticky-card-copy-title">
                  <p>(about the states) </p>
                </div>
                <div className="sticky-card-copy-description">
                  <p>{carddata.description} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UseCards;
