import React, { useEffect, useRef } from "react";
import "./pricing.css";
import Reuse from "../ReuseHeadings/Reuse";
import gsap from "gsap";
import { tooloftr } from "../../assets/assets";
import Duplicate from "../banner/duplicate";
import CheckIcon from "../../assets/CheckIcon";

const Pricing = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textEl = textRef.current;

    // Initialize first text
    gsap.set(textEl, { autoAlpha: 1, y: 0, rotationX: 0 });

    // Timeline for smooth looping text animation
    const tl = gsap.timeline({ repeat: -1 });

    tooloftr.forEach((item) => {
      tl.to(textEl, {
        autoAlpha: 0,
        y: -40,
    
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          textEl.textContent = item.text; // update content without React state
        },
      });
      tl.to(textEl, {
        autoAlpha: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "back.out(1.7)", // smooth, award-winning easing
      });
      tl.to({}, { duration: 2 }); // pause between slides
    });

    return () => tl.kill(); // cleanup on unmount
  }, []);

  return (
    <section className="pricing">
      <Reuse
        fabout="© Project Pricing プラン"
        sabout="(WDX® — 09)"
        tabout="Custom Quotes"
      />

      <div className="pricingtransition">
        <h1 ref={textRef}>{tooloftr[0].text}</h1>
      </div>

      <Duplicate />

      <div className="pricingdiv">
        {/* Pricing plans */}
        {[
          {
            price: "$99",
            period: "/Month",
            title: "Starter Plan",
            desc: "Perfect for small launches and personal sites that need a fast online presence.",
            features: [
              "One-page Framer site",
              "Custom layout & visuals",
              "Mobile-first responsive build",
              "Design system setup",
              "SEO-ready structure",
              "Basic CMS integration",
              "Contact form setup",
            ],
          },
          {
            price: "$299",
            period: "/Month",
            title: "Growth Plan",
            desc: "Designed for growing brands that need flexibility and CMS support.",
            features: [
              "Up to 5 pages",
              "Framer CMS-powered sections",
              "Component-based structure",
              "Motion design & transitions",
              "Device-optimized responsiveness",
              "Style guide system",
              "Email capture / integrations",
            ],
          },
          {
            price: "$899",
            period: "/Month",
            title: "Full Scope Plan",
            desc: "Best for studios or teams needing structure and enterprise-level execution.",
            features: [
              "10+ pages with CMS",
              "Advanced layout strategy",
              "Full brand system support",
              "Animation direction",
              "Custom-built components",
              "Framer CMS training",
              "Performance optimization",
            ],
          },
        ].map((plan, idx) => (
          <div className="threetype" key={idx}>
            <div className="pricebox">
              <div className="headofprice">
                <h1>{plan.price}</h1>
                <p>{plan.period}</p>
              </div>
              <div className="headofptags">
                <h3>{plan.title}</h3>
                <p>{plan.desc}</p>
              </div>
              <div className="hrrs"></div>
            </div>
            <div className="pricecontentbox">
              {plan.features.map((feature, fidx) => (
                <div className="tickspolicy" key={fidx}>
                  <CheckIcon />
                  <p>{feature}</p>
                  
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
