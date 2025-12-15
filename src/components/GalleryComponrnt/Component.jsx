import React, { useEffect, useRef } from "react";
import "./component.css";
import { assets, gallery } from "../../assets/assets";
import Button from "../Common/Button/Button";
import gsap from "gsap";
const Component = () => {
  const containerref = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.2) * 0.93;
      const y = (e.clientY / innerHeight - 0.2) * 0.88;

      imagesRef.current.forEach((img, i) => {
        const intensity = (i + 1) * 4;
        gsap.to(img, {
          x: x * intensity * 4,
          y: y * intensity * 4,
          rotation: x * intensity * 0,
          ease: "power2.out",
        //   yoyo: true,
          duration: 0.5,
        });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="maingallery" ref={containerref}>
      <div className="textgallery">
        <h1>Gallery©</h1>
    <div className="aaaa">
          <Button content="Contact Now" /></div>
  
      </div>
      <div className="galleryimage">
        {gallery.map((src, i) => (
          <img
            key={i}
            ref={(el) => (imagesRef.current[i] = el)}
            src={`${src}`}
            alt={`gallery-${i}`}
            className={`gallery-img img-${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Component;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import "./component.css";
// import { CardData } from "../../assets/assets";

// const ShakeImages = () => {
//   const containerRef = useRef(null);
//   const imagesRef = useRef([]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { innerWidth, innerHeight } = window;
//       const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
//       const y = (e.clientY / innerHeight - 0.5) * 2;

//       imagesRef.current.forEach((img, i) => {
//         const intensity = (i + 1) * 2; // each image moves differently
//         gsap.to(img, {
//           x: x * intensity * 10,
//           y: y * intensity * 10,
//           rotation: x * intensity * 5,
//           ease: "power2.out",
//           duration: 0.5,
//         });
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="shake-container" ref={containerRef}>
//       {CardData.map((iu, i) => (
//         <img
//           key={i}
//           ref={(el) => (imagesRef.current[i] = el)}
//           src={iu.mainimg}
//           alt={`img-${i}`}
//           className="shake-img"
//         />
//       ))}
//     </div>
//   );
// };

// export default ShakeImages;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import "./component.css";
// import { gallery } from "../../assets/assets";

// const images = [
//   "https://images.unsplash.com/photo-1504198266285-165a03a32e06",
//   "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
//   "https://images.unsplash.com/photo-1517841905240-472988babdf9",
//   "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//   "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
//   "https://images.unsplash.com/photo-1517841905240-472988babdf9",
//   "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
// ];

// const GallerySection = () => {
//   const imgRefs = useRef([]);

//   useEffect(() => {
//     imgRefs.current.forEach((img) => {
//       // Floating idle animation
//       gsap.to(img, {
//         y: "+=15",
//         duration: 3,
//         ease: "power1.inOut",
//         yoyo: true,
//         repeat: -1,
//         delay: Math.random() * 2,
//       });

//       // Hover shake animation
//       img.addEventListener("mouseenter", () => {
//         gsap.to(img, {
//           rotation: gsap.utils.random(-5, 5),
//           scale: 1.05,
//           duration: 0.2,
//           ease: "power2.out",
//         });
//       });
//       img.addEventListener("mouseleave", () => {
//         gsap.to(img, {
//           rotation: 0,
//           scale: 1,
//           duration: 0.4,
//           ease: "power2.out",
//         });
//       });
//     });
//   }, []);

//   return (
//     <section className="gallery-section">
//       <h1 className="gallery-title">
//         Gallery<span>©</span>
//       </h1>
//       <button className="contact-btn">CONTACT NOW</button>

//       <div className="gallery-images">
//         {gallery.map((src, i) => (
//           <img
//             key={i}
//             ref={(el) => (imgRefs.current[i] = el)}
//             src={`${src}?auto=format&fit=crop&w=400&q=60`}
//             alt={`gallery-${i}`}
//             className={`gallery-img img-${i + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default GallerySection;
