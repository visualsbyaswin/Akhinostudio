import React, { useEffect, useRef } from "react";
import "./cursor.css";
import gsap from "gsap";
const Cursor = () => {
  const cursorref = useRef(null);

  useEffect(() => {
    const cursor = cursorref.current;

    const MoveCursor = (e) => {
      gsap.to(cursor, {
      x: e.clientX - cursor.offsetWidth / 2,
        y: e.clientY - cursor.offsetHeight / 2,
        duration: 0.4,
        ease: "power2.out",
       
      });
    };
    window.addEventListener("mousemove",MoveCursor);


    return ()=>{
        window.removeEventListener("mousemove",MoveCursor)
    }
  },[]);
  return <div ref={cursorref} className="custom"></div>;
};

export default Cursor;
