import React, { useEffect, useRef } from "react";
import "./hero.css";
import { gsap } from "gsap";
import { assets } from "../../assets/assets";
import Banner from "../banner/Banner";

const Hero = () => {
 
  // const videoRef = useRef(null);


  // useEffect(() => {
   
  //   const video = videoRef.current;
    


  //   const handleMove = (e) => {
  //     const rect = container.getBoundingClientRect();
  //     const x = e.clientX - rect.left - rect.width / 2;
  //     const y = e.clientY - rect.top - rect.height / 2;

  //     // Subtle video movement (parallax)
  //     gsap.to(video, {
  //       x: x * 0.05, // smaller multiplier for smooth subtle move
  //       y: y * 0.05,
  //       duration: 0.6,
  //       ease: "power3.out",
  //     });

  //   };

  
    
  //   video.addEventListener("mousemove", handleMove);
   

  //   return () => {
      
  //     video.removeEventListener("mousemove", handleMove);
 
  //   };
  // }, []);

  return (
<div className="container">
      <section className="hero">
      <div className="firstherocontents">
        <div className="texthero">
          <h3>Pattern Dimensions</h3>
          <h3>and Moments that</h3>
          <h3>Connect and Leave a</h3>
          <h3>Bold イメージ.</h3>
        </div>


        <div className="videohero" >
          <video  src={assets.race} autoPlay muted loop></video>

        </div>
      </div>
<Banner/>
    

      {/* <div className="hrr"></div> */}
      <div className="akhinobigtext">
        <p>Akihiko™</p>
      </div>
      <div className="hrrs"></div>

   
    </section>
</div>
  );
};

export default Hero;
