import React, { useRef } from "react";
import ShakeImages from "../components/GalleryComponrnt/Component";
import Component from "../components/GalleryComponrnt/Component";
import GallerySection from "../components/GalleryComponrnt/Component";

import AdvancedAnimations from "../components/Animations/ScrollText";
import useRevealer from "../components/Hooks/Hook";

const Gallery = () => {
  const revealerRef = useRef(null);
  useRevealer(revealerRef);
  return (
    <>
      useRevealer()
      <div className="revealer" ref={revealerRef}></div>
      <section>
        <GallerySection />
     
      </section>
    </>
  );
};

export default Gallery;
