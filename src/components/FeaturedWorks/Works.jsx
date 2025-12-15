import React from "react";
import "./work.css";
import Reuse from "../ReuseHeadings/Reuse";
import { assets } from "../../assets/assets";
import Marquee from "../Common/Marquee/Marquee";
import Button from "../Common/Button/Button";
import Model from "../Common/models/Model";
import Allf from "../Allfaeture/Allf";
const Works = () => {
  return (
    <section className="featuredworks">
      <Reuse
        fabout="© Featured Projects プロジェクト"
        sabout="(WDX® — 03)"
        tabout="Creative Development
"
      />

      <div className="feature">
        <div className="featureslidingsection">
          <Marquee reuser="© Featured Work"/>
          <div className="hrrs"></div>
        </div>
        <div className="featurecontentsection">
          <div className="allfeaturecontents">
            <p>Every project is a chance to blend design and development, shaping bold interactive ideas into <strong>sleek digital</strong>  
 </p>
            <p> <strong>realities — built with intent</strong> , speed, and visual clarity that attracts lot of peoples.</p>
          </div>
          <div>
            
          <Button content="SeeMore"/>5
          </div>
        </div>
      </div>
<Allf/>
    </section>
  );
};

export default Works;
