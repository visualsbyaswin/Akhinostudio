import React, { useEffect, useRef } from "react";
import "./article.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  CardData } from "../../assets/assets";
import Duplicate from "../banner/duplicate";
import Marquee from "../Common/Marquee/Marquee";

import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger)


const Article = () => {
  const mains=useRef(null)

useGSAP(()=>{
const stickycard=document.querySelectorAll(".wowarticlemain");
stickycard.forEach((card,index)=>{
  if(index<stickycard.length-1){
    ScrollTrigger.create({
      trigger:card,
      start:"top top",
      endTrigger:stickycard[stickycard.length-1],
      end:"top top",
      pin:true,
      pinSpacing:false
    })
  }

})
{scope:mains}
})
  return (
    <div className="article-wrapper"  >
      <Duplicate
        skill1="© Visual Journal ジャーナル"
        skill2="(WDX® — 10)"
        skill4="Creative Notes"
      />

      <div className="slidersectionart">
        <Marquee reuser="© Featured Article" />
      </div>

      <div className="stacked-container"   >
        
        {CardData.map((card, i) => (
          
          <div className="wowarticlemain" key={i} >
            
            <div className="article1" >
              <img src={card.mainimg} alt="" />
            </div>
            <div className="article2">
              <div className="chimg">
                <img src={card.childimg} alt="" />
                <h3>{card.title}</h3>
              </div>
              <div className="datetime">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Article;
