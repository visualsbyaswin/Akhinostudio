// useRevealer.js
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(CustomEase, useGSAP);

// Custom bounce-like ease curve (smooth pop)
CustomEase.create("hop", "M0,0 C0.15,0.85,0.25,1.15,1,1");

function useRevealer(ref) {
  useGSAP(() => {
    // Start with scaleY = 1 (full height)
    gsap.fromTo(
      ref.current,
      { scaleY: 1 ,z:400},
      {
        scaleY: 0,
        
        duration: 1.2, // 🔹 faster (was 1.25 or 0.4)
        delay: 0.2, // small delay
        ease: "hop", // custom pop ease
        transformOrigin: "top center",
      }
    );


  }, [ref]);
}

export default useRevealer;
