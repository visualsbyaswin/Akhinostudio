import React from "react";
import "./testimonial.css";
import Reuse from "../ReuseHeadings/Reuse";
import Marquee from "../Common/Marquee/Marquee";
import { assets } from "../../assets/assets";
const Testimonial = () => {
  return (
    <section className="testimonial">
      <Reuse
        fabout="© Testimonials レビュー"
        sabout="(WDX® — 06)"
        tabout="Real Feedback"
      />

      <div className="containerofMrqueeSlider">
        <Marquee reuser="© Testimonial Rewiews" />
      </div>

    </section>
  );
};

export default Testimonial;
