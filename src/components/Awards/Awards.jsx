import React from "react";
import "./awards.css";
import Reuse from "../ReuseHeadings/Reuse";
import Duplicate from "../banner/duplicate";
import { assets } from "../../assets/assets";
const Awards = () => {
  return (
    <section className="awards">
      <Reuse
        fabout="© Awards アワード"
        sabout="(WDX® — 07)"
        tabout="Selected Honors"
      />
      <div className="bigawardtext">
        <h1>Awards</h1>
        <span>3</span>
      </div>

      <Duplicate skill1="Awwwards" skill2="CSSD" skill3="Framer" skill4="Dribble" />

      <div className="detailcontainerawards">
        <div className="hrrs"></div>
        <div className="contentsofallaward">
          <div className="awardtext">
            <p>27x</p>
            <p>Awwwards</p>{" "}
            <p className="win">
              Recognized for bold interaction, structured visual rhythm, and
              design consistency across creative categories.
            </p>
          </div>
          <div className="awardimage">
            <img src={assets.set1} alt="" />
            <img src={assets.featurec2} alt="" />
            <img src={assets.set3} alt="" />
            <img src={assets.set4} alt="" />
          </div>
        </div>
        <div className="hrrs"></div>
        <div className="contentsofallaward">
          <div className="awardtext">
            <p>14x</p>
            <p>FWA</p>{" "}
            <p className="win">
              Awarded for outstanding execution, seamless animation, and
              originality in modern digital experiences.
            </p>
          </div>
          <div className="awardimage">
            <img src={assets.set5} alt="" />
            <img src={assets.set6} alt="" />
            <img src={assets.set7} alt="" />
            <img src={assets.set8} alt="" />
          </div>
        </div>
        <div className="hrrs"></div>
        <div className="contentsofallaward">
          <div className="awardtext">
            <p>09x</p>
            <p>CSSDA</p>{" "}
            <p className="win">
              Celebrated for front-end excellence, design innovation, and
              development precision across multiple showcases.
            </p>
          </div>
          <div className="awardimage">
            <img src={assets.set9} alt="" />
            <img src={assets.set10} alt="" />
            <img src={assets.set11} alt="" />
            <img src={assets.set12} alt="" />
          </div>
        </div>
        <div className="hrrs"></div>
        <div className="contentsofallaward">
          <div className="awardtext">
            <p>08x</p>
            <p>Dribbble</p>{" "}
            <p className="win">
              Highlighted for strong typographic systems, visual hierarchy, and
              thoughtful layout built with intent.
            </p>
          </div>
          <div className="awardimage">
            <img src={assets.set13} alt="" />
            <img src={assets.set14} alt="" />
            <img src={assets.set15} alt="" />
            <img src={assets.set16} alt="" />
          </div>
        </div>
        <div className="hrrs"></div>
      </div>
    </section>
  );
};

export default Awards;
