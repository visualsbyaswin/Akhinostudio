import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AdvancedAnimations() {
  const heroRef = useRef(null);
  const splitTextRef = useRef(null);
  const morphRef = useRef(null);
  const cardsRef = useRef(null);
  const parallaxRef = useRef(null);
  const liquidRef = useRef(null);
  const magneticRef = useRef(null);
  const glitchRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero split text with 3D rotation
      const heroText = heroRef.current.querySelectorAll('.char');
      gsap.from(heroText, {
        opacity: 0,
        y: 100,
        rotationX: -90,
        transformOrigin: '50% 100%',
        stagger: {
          each: 0.03,
          from: 'random',
        },
        duration: 1.2,
        ease: 'back.out(2)',
      });

      // Continuous wave animation
      gsap.to(heroText, {
        y: -20,
        stagger: {
          each: 0.1,
          repeat: -1,
          yoyo: true,
        },
        duration: 1,
        ease: 'sine.inOut',
        delay: 2,
      });

      // Scroll-triggered split text with rotation
      const splitChars = splitTextRef.current.querySelectorAll('.split-char');
      gsap.from(splitChars, {
        scrollTrigger: {
          trigger: splitTextRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
        opacity: 0,
        y: 100,
        rotationY: 180,
        scale: 0.5,
        stagger: 0.02,
      });

      // SVG morph animation with multiple states
      const morphTimeline = gsap.timeline({ repeat: -1 });
      morphTimeline
        .to(morphRef.current, {
          attr: { d: 'M50,10 Q90,30 70,50 Q90,70 50,90 Q10,70 30,50 Q10,30 50,10' },
          duration: 2,
          ease: 'sine.inOut',
        })
        .to(morphRef.current, {
          attr: { d: 'M50,20 Q80,50 50,80 Q20,50 50,20' },
          duration: 2,
          ease: 'sine.inOut',
        })
        .to(morphRef.current, {
          attr: { d: 'M50,10 L90,50 L50,90 L10,50 Z' },
          duration: 2,
          ease: 'sine.inOut',
        });

      // Parallax cards with rotation and depth
      const cards = cardsRef.current.querySelectorAll('.card');
      cards.forEach((card, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });

        tl.to(card, {
          y: (i + 1) * -150,
          rotation: (i % 2 === 0 ? 1 : -1) * 10,
          scale: 1.1,
        });

        // Hover animation for cards
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.15,
            rotationY: 10,
            z: 50,
            duration: 0.6,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            rotationY: 0,
            z: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)',
          });
        });
      });

      // Multi-layer parallax
      gsap.to(parallaxRef.current.querySelector('.layer-1'), {
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: -300,
        rotation: 5,
      });

      gsap.to(parallaxRef.current.querySelector('.layer-2'), {
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: -150,
        rotation: -5,
      });

      gsap.to(parallaxRef.current.querySelector('.layer-3'), {
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: -50,
      });

      // Liquid button with advanced morphing
      const liquid = liquidRef.current;
      liquid.addEventListener('mouseenter', () => {
        const tl = gsap.timeline();
        tl.to(liquid.querySelector('.liquid-fill'), {
          height: '100%',
          duration: 0.8,
          ease: 'power4.out',
        })
        .to(liquid.querySelector('.liquid-text'), {
          color: '#000000',
          scale: 1.1,
          duration: 0.3,
        }, '-=0.5')
        .to(liquid, {
          boxShadow: '0 20px 60px rgba(139, 92, 246, 0.6)',
          duration: 0.3,
        }, '-=0.3');
      });

      liquid.addEventListener('mouseleave', () => {
        const tl = gsap.timeline();
        tl.to(liquid.querySelector('.liquid-fill'), {
          height: '0%',
          duration: 0.8,
          ease: 'power4.in',
        })
        .to(liquid.querySelector('.liquid-text'), {
          color: '#ffffff',
          scale: 1,
          duration: 0.3,
        }, '-=0.5')
        .to(liquid, {
          boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)',
          duration: 0.3,
        }, '-=0.3');
      });

      // Glitch effect
      const glitch = glitchRef.current;
      const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 3 });
      glitchTimeline
        .to(glitch, { x: -5, duration: 0.05 })
        .to(glitch, { x: 5, duration: 0.05 })
        .to(glitch, { x: -5, duration: 0.05 })
        .to(glitch, { x: 0, duration: 0.05 })
        .to(glitch, { skewX: 20, duration: 0.05 })
        .to(glitch, { skewX: -20, duration: 0.05 })
        .to(glitch, { skewX: 0, duration: 0.05 });

      // Particle animation
      const particles = particlesRef.current.querySelectorAll('.particle');
      particles.forEach((particle, i) => {
        gsap.to(particle, {
          y: 'random(-200, 200)',
          x: 'random(-200, 200)',
          rotation: 'random(0, 360)',
          duration: 'random(3, 5)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.1,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  // Magnetic button effect
  const handleMagneticMove = (e) => {
    const btn = magneticRef.current;
    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 200;

    if (distance < maxDistance) {
      const strength = 1 - distance / maxDistance;
      gsap.to(btn, {
        x: deltaX * strength * 0.6,
        y: deltaY * strength * 0.6,
        scale: 1.1,
        duration: 0.4,
        ease: 'power3.out',
      });
    }
  };

  const handleMagneticLeave = () => {
    gsap.to(magneticRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  const splitText = (text) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const splitTextScroll = (text) => {
    return text.split('').map((char, i) => (
      <span key={i} className="split-char">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroBackground}>
          <svg style={styles.heroSvg} viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            {[...Array(30)].map((_, i) => (
              <circle
                key={i}
                cx={Math.random() * 1000}
                cy={Math.random() * 1000}
                r={Math.random() * 100 + 30}
                fill="url(#grad1)"
                opacity="0.2"
                style={{ animation: `pulse ${2 + Math.random() * 2}s ease-in-out infinite ${i * 0.2}s` }}
              />
            ))}
          </svg>
        </div>
        
        <h1 ref={heroRef} style={styles.heroTitle}>
          {splitText('ADVANCED')}
        </h1>
      </div>

      {/* SVG Morph Section */}
      <div style={styles.section}>
        <div style={styles.centerContent}>
          <svg width="500" height="500" viewBox="0 0 100 100" style={styles.morphSvg}>
            <defs>
              <linearGradient id="morphGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              ref={morphRef}
              d="M50,10 L90,50 L50,90 L10,50 Z"
              fill="url(#morphGrad)"
              filter="url(#glow)"
            />
          </svg>
          <h2 style={styles.sectionTitle}>Morphing Shapes</h2>
        </div>
      </div>

      {/* Scroll-Triggered Split Text */}
      <div ref={splitTextRef} style={styles.splitTextSection}>
        <p style={styles.splitText}>
          {splitTextScroll('SCROLL REVEALS MAGIC')}
        </p>
      </div>

      {/* Parallax Cards */}
      <div ref={cardsRef} style={styles.cardsSection}>
        <h2 style={styles.cardsSectionTitle}>Parallax Depth Cards</h2>
        <div style={styles.cardsGrid}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="card"
              style={{
                ...styles.card,
                background: `linear-gradient(135deg, rgba(139, 92, 246, ${0.2 + i * 0.1}), rgba(236, 72, 153, ${0.2 + i * 0.1}))`,
              }}
            >
              <div style={styles.cardNumber}>{i}</div>
              <h3 style={styles.cardTitle}>Depth Layer {i}</h3>
              <p style={styles.cardText}>Hover and scroll for 3D parallax effects</p>
            </div>
          ))}
        </div>
      </div>

      {/* Parallax Layers */}
      <div ref={parallaxRef} style={styles.parallaxSection}>
        <div className="layer-1" style={styles.layer1}>
          <div style={styles.layerText1}>DEEP</div>
        </div>
        <div className="layer-2" style={styles.layer2}>
          <div style={styles.layerText2}>MIDDLE</div>
        </div>
        <div className="layer-3" style={styles.layer3}>
          <div style={styles.layerText3}>SURFACE</div>
        </div>
      </div>

      {/* Particles Section */}
      <div ref={particlesRef} style={styles.particlesSection}>
        <h2 style={styles.particlesTitle}>Particle System</h2>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              ...styles.particle,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Interactive Buttons */}
      <div style={styles.buttonsSection}>
        <h2 style={styles.buttonsSectionTitle}>Advanced Interactions</h2>
        
        {/* Liquid Button */}
        <div ref={liquidRef} style={styles.liquidButton}>
          <div className="liquid-fill" style={styles.liquidFill}></div>
          <span className="liquid-text" style={styles.liquidText}>Liquid Fill Effect</span>
        </div>

        {/* Magnetic Button */}
        <div
          onMouseMove={handleMagneticMove}
          onMouseLeave={handleMagneticLeave}
          style={styles.magneticWrapper}
        >
          <button ref={magneticRef} style={styles.magneticButton}>
            Magnetic Pull
          </button>
        </div>

        {/* Glitch Text */}
        <div ref={glitchRef} style={styles.glitchText} data-text="GLITCH">
          GLITCH
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.15);
          }
        }

        .char {
          display: inline-block;
          transform-style: preserve-3d;
        }

        .split-char {
          display: inline-block;
          transform-style: preserve-3d;
        }

        .card {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
    color: '#ffffff',
    overflow: 'hidden',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  hero: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBackground: {
    position: 'absolute',
    inset: 0,
    opacity: 0.3,
  },
  heroSvg: {
    width: '100%',
    height: '100%',
  },
  heroTitle: {
    fontSize: 'clamp(4rem, 15vw, 12rem)',
    fontWeight: '900',
    textAlign: 'center',
    margin: 0,
    perspective: '1000px',
    letterSpacing: '0.05em',
  },
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  centerContent: {
    textAlign: 'center',
  },
  morphSvg: {
    maxWidth: '100%',
    marginBottom: '3rem',
    filter: 'drop-shadow(0 25px 50px rgba(139, 92, 246, 0.5))',
  },
  sectionTitle: {
    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
    fontWeight: '800',
    margin: 0,
  },
  splitTextSection: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem',
  },
  splitText: {
    fontSize: 'clamp(3rem, 10vw, 8rem)',
    fontWeight: '900',
    textAlign: 'center',
    lineHeight: 1.2,
    margin: 0,
  },
  cardsSection: {
    minHeight: '100vh',
    padding: '8rem 2rem',
    position: 'relative',
  },
  cardsSectionTitle: {
    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: '5rem',
  },
  cardsGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    height: '400px',
    borderRadius: '1.5rem',
    padding: '3rem',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    transition: 'box-shadow 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  cardNumber: {
    fontSize: '6rem',
    fontWeight: '900',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  cardTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '1rem',
  },
  cardText: {
    fontSize: '1rem',
    color: '#d1d5db',
  },
  parallaxSection: {
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },
  layer1: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  layerText1: {
    fontSize: 'clamp(6rem, 15vw, 12rem)',
    fontWeight: '900',
    opacity: 0.15,
    color: '#8B5CF6',
  },
  layer2: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  layerText2: {
    fontSize: 'clamp(5rem, 12vw, 9rem)',
    fontWeight: '900',
    opacity: 0.3,
    color: '#EC4899',
  },
  layer3: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  layerText3: {
    fontSize: 'clamp(3rem, 10vw, 6rem)',
    fontWeight: '900',
    opacity: 0.6,
  },
  particlesSection: {
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  particlesTitle: {
    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
    fontWeight: '800',
    position: 'relative',
    zIndex: 10,
  },
  particle: {
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
    boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)',
  },
  buttonsSection: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4rem',
    padding: '2rem',
  },
  buttonsSectionTitle: {
    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
    fontWeight: '800',
    marginBottom: '2rem',
  },
  liquidButton: {
    position: 'relative',
    padding: '1.5rem 4rem',
    borderRadius: '9999px',
    border: '3px solid #ffffff',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)',
  },
  liquidFill: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '0%',
    background: 'linear-gradient(180deg, #ffffff, #8B5CF6)',
  },
  liquidText: {
    position: 'relative',
    zIndex: 10,
    fontSize: '1.8rem',
    fontWeight: '800',
    color: '#ffffff',
  },
  magneticWrapper: {
    position: 'relative',
    padding: '3rem',
  },
  magneticButton: {
    padding: '1.5rem 4rem',
    borderRadius: '9999px',
    background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    fontSize: '1.8rem',
    fontWeight: '800',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    boxShadow: '0 20px 60px rgba(59, 130, 246, 0.4)',
  },
  glitchText: {
    fontSize: 'clamp(3rem, 10vw, 6rem)',
    fontWeight: '900',
    position: 'relative',
    letterSpacing: '0.1em',
  },
};