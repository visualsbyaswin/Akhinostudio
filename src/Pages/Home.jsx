import React, { useRef } from "react";

import Hero from "../components/herosection/Hero";
import About from "../components/About/About";
import Works from "../components/FeaturedWorks/Works";
import Services from "../components/Services/Services";
import PersonalProfile from "../components/PersonalProfile/PersonalProfile";
import Experiences from "../components/Experiences/Experiences";
import Testimonial from "../components/Testimonials/Testimonial";
import Awards from "../components/Awards/Awards";
import Clients from "../components/CLients/Clients";
import Pricing from "../components/Pricing/Pricing";
import Article from "../components/Article/Article";

import Faq from "../components/FaqQuest/Faq";
import useRevealer from "../components/Hooks/Hook";

// import VideoHover from '../components/Animations/VideoHover'

const Home = () => {
  const revelerref=useRef(null)
  useRevealer(revelerref)
  return (
    <div >
      <div className="revealer" ref={revelerref}></div>
      <Hero />

      <About />
      <Works />

      <Services />
      <PersonalProfile />
      <Experiences />
      <Testimonial/>
      <Awards />
      <Clients />
      <Pricing />
      <Article />
      <Faq/>
    </div>
  );
};

export default Home;
