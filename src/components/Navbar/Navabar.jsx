import { useEffect, useRef } from "react";
import "./navbar.css";
import { gsap, Power3 } from "gsap";
import { Link } from "react-router-dom";
const Navabar = () => {
  const navRef = useRef(null);
  const lastY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const ticking = useRef(false);
  const isHidden = useRef(false);
  const tlRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.set(nav, { y: 0, force3D: true });

    tlRef.current = gsap.timeline({ paused: true });
    tlRef.current.to(nav, {
      y: () => `-100%`,
      duration: 0.35,
      ease: Power3.easeInOut,
      overwrite: true,
    });

    function onScroll() {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY || window.pageYOffset;
          const delta = currentY - lastY.current;

          if (Math.abs(delta) > 8) {
            if (delta > 0 && currentY > 60) {
              if (!isHidden.current) {
                tlRef.current.play();
                isHidden.current = true;
              }
            } else if (delta < 0) {
              if (isHidden.current) {
                tlRef.current.reverse();
                isHidden.current = false;
              }
            }
          }

          lastY.current = Math.max(currentY, 0);
          ticking.current = false;
        });
        ticking.current = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      tlRef.current && tlRef.current.kill();
    };
  }, []);

  return (
    <header className="header" ref={navRef}>
      <nav className="navsections">
        <div className="headnamesection">
           <Link to="/Akhinostudio">
            <p>Palmer®</p> 
            </Link>
        </div>

        <div className="headlinkshome">
          <p className="quicklinks">Quick Links</p>
          <div className="quiklinksrowsetup">
             <Link to="/Akhinostudio">
              {" "}
              <p>Home,</p>
            </Link>
               <Link to="/Akhinostudio/gallery ">
              {" "}
              <p>Gallery,</p>
            </Link>
            <Link to="/Akhinostudio/work">
              {" "}
              <p>Work,</p>
            </Link>
       <Link to="/Akhinostudio/contact">
              {" "}
              <p>Contact</p>
            </Link>
          </div>
        </div>

        <div className="headdev">
          <div className="basecountry">Based in Tokyo 東京</div>
          <div className="bghworkname">
            <p>Art Director + Framer Developer</p>
          </div>
        </div>
      </nav>
      <div className="hr"></div>
    </header>
  );
};

export default Navabar;
