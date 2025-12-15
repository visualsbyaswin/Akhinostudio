import React, { useEffect, useRef } from "react";
import "./footer.css";
import Duplicate from "../banner/duplicate";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reuse from "../ReuseHeadings/Reuse";
import Button from "../Common/Button/Button";
import MarqueeSlider from "../Animations/Imageslide";
import { Link } from "react-router-dom";
const Footer = () => {
  const textscaling = useRef(null);

  useEffect(() => {
    const el = textscaling.current;

    gsap.fromTo(
      el,
      { scale: 0.8, y: 0 },
      {
        scale: 1.3,
        y: -20,
        autoAlpha: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          scrub: true,
        },
      }
    );
  }, []);
  //   const imgRef = useRef(null);

  // useEffect(() => {
  //   const el = imgRef.current;

  //   gsap.fromTo(
  //     el,
  //     { scale: 0.8, y: 100, autoAlpha: 0 },
  //     {
  //       scale: 1,
  //       y: 0,
  //       autoAlpha: 1,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: el,
  //         start: "top 80%",  // when image enters viewport
  //            // until scrolled higher
  //         scrub: true,       // tie animation with scroll
  //         markers: false,    // set true to debug
  //       },
  //     }
  //   );
  // }, []);
  return (
    <footer className="mainfootersection">
      <Reuse
        fabout="© Final Section クロージング"
        sabout="(WDX® — 12)"
        tabout="Studio Wrap"
      />

      <div className="imageslider">
        <MarqueeSlider />
      </div>
      <Duplicate
        skill1="Independend"
        skill2="Overview"
        skill3="Multidisciplinary"
        skill4="Focused"
      />

      <div className="footertopcontents">
        <div className="topfooter">
          <p>
            I build expressive, performance-driven websites by blending clean
            design and native development inside Framer to help creative teams
            and modern brands stand out with intention.
          </p>
          <div className="butcont">
            <Button content="BACK TO TOP" />
          </div>
        </div>
      </div>

      <div className="socialmedia">
        <div className="quicklinkssectionfooter">
          <div>
            <p className="bolder">Quick Links</p>
          </div>
          <div className="navfooter">
            <Link to="/">
              {" "}
              <p>Home,</p>
            </Link>
            <Link to="/gallery">
              {" "}
              <p>Gallery,</p>
            </Link>
            <Link to="/work">
              {" "}
              <p>Work,</p>
            </Link>
            <Link to="/contact">
              {" "}
              <p>Contact</p>
            </Link>
          </div>
        </div>
        <div className="quicklinkssectionfooter">
          <div>
            <p className="bolder">Networks</p>
          </div>
          <div className="navfooter">
            <p>Instagram</p>
            <p>Twiter</p>
            <p>Framer</p>
            <p>Whatsapp</p>
          </div>
        </div>
      </div>
      <div className="hrrs"></div>

      <div className="footermainfontsizer">
        <p ref={textscaling}>©2025</p>
      </div>
    </footer>
  );
};

export default Footer;
