import React, { useEffect, useRef, useState } from "react";
import "./faq.css";
import { changers } from "../../assets/assets";
import { questions } from "../../assets/questions";
import Reuse from "../ReuseHeadings/Reuse";
import gsap from "gsap";
const Faq = () => {
  const [indexs, setindexs] = useState(0);
  const [openindex, setopenindex] = useState(null);
  const imgrefa = useRef(null);

  useEffect(() => {
    const intervels = setInterval(() => {
      gsap.set([imgrefa.current], {
        autoAlpha: 0,
        y: -32,
        duration: 0.3,
        ease: "power3.inOut",
        onComplete: () => {
          setindexs((prev) => (prev + 1) % changers.length);

          gsap.fromTo(
            [imgrefa.current],
            { autoAlpha: 0, y: -32, stagger: { amount: 1 }, duration: 0.3 },
            { autoAlpha: 1, y: 0, duration: 0.33, ease: "power3.inOut" }
          );
        },
      });
    }, 4000);
    return () => {
      clearInterval(intervels);
    };
  }, []);

  const handleclick = (idx) => {
    setopenindex((prevs) => (prevs === idx ? null : idx));
  };

  return (
    <section className="faqquestions">
      <Reuse
        fabout="© Help Center ヘルプ"
        sabout="(WDX® — 11)"
        tabout="Clarifications"
      />
      <div className="queboxes">
        <div className="faq1box">
          <img ref={imgrefa} src={changers[indexs].img} alt="" />
          <h3>
            Clarifying Deliverable's Before They Begin with Real Process and
            Honest アンサー.
          </h3>
        </div>
        <div className="faq2box">
          <div className="hrrs"></div>
          {questions.map((item, idx) => (
            <div
              className={`askingdiv ${openindex === idx ? "open" : ""}`}
              onClick={() => handleclick(idx)}
              key={idx}
            >
              <div className="questions">
                {" "}
                <h1>{item.first}</h1>
                <p>{item.second}</p>
                <h3>{item.third}</h3>
              </div>

              <div
                className="hiddendiv"
                style={{
                  maxHeight: openindex === idx ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.5s ease",
                }}
              >
                <p>{item.fourth}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hrrs"></div>
      </div>
    </section>
  );
};

export default Faq;
