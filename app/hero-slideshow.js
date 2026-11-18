"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSlideshow({ children, slides }) {
  const [active, setActive] = useState(0);
  const [loadBackgrounds, setLoadBackgrounds] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const playing = motionAllowed && !paused;
  const rotating = playing && !hovered && visible && loadBackgrounds;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setMotionAllowed(!preference.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    preference.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setTimeout(() => setActive((active + 1) % slides.length), 7000);
    return () => window.clearTimeout(timer);
  }, [active, rotating, slides.length]);

  function selectSlide(index) {
    setLoadBackgrounds(true);
    setPaused(true);
    setActive((index + slides.length) % slides.length);
  }

  return (
    <section
      className="hero"
      aria-label="Engineering capability slideshow"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget) && event.target.matches(":focus-visible")) {
          setPaused(true);
        }
      }}
    >
      <div className="hero-media" aria-hidden="true">
        {slides.map((slide, index) => (
          (index === 0 || loadBackgrounds) && (
            <Image
              key={slide.image}
              className={index === active ? "hero-slide is-active" : "hero-slide"}
              src={slide.image}
              alt=""
              fill
              sizes="100vw"
              preload={index === 0}
              loading={index === 0 ? undefined : "eager"}
              fetchPriority={index === 0 ? undefined : "low"}
              style={{ objectPosition: slide.position }}
              onLoad={index === 0 ? () => setLoadBackgrounds(true) : undefined}
              onError={index === 0 ? () => setLoadBackgrounds(true) : undefined}
            />
          )
        ))}
      </div>
      <div className="wrap hero-inner">
        <div className="hero-copy">{children}</div>
        <div className="hero-controls">
          <p className="slide-label" aria-live={rotating ? "off" : "polite"} aria-atomic="true">
            <span>0{active + 1} / 0{slides.length}</span>
            {slides[active].label}
          </p>
          <div className="slide-navigation" role="group" aria-label="Slideshow controls">
            <button className="slide-button" type="button" aria-label="Previous slide" onClick={() => selectSlide(active - 1)}>
              <span aria-hidden="true">←</span>
            </button>
            <div className="slide-selectors">
              {slides.map((slide, index) => (
                <button
                  key={slide.label}
                  className="slide-selector"
                  type="button"
                  aria-label={`Slide ${index + 1}: ${slide.label}`}
                  aria-current={index === active ? "true" : undefined}
                  onClick={() => selectSlide(index)}
                />
              ))}
            </div>
            <button className="slide-button" type="button" aria-label="Next slide" onClick={() => selectSlide(active + 1)}>
              <span aria-hidden="true">→</span>
            </button>
            <button
              className="slide-button rotation-toggle"
              type="button"
              aria-label={playing ? "Pause slideshow" : "Play slideshow"}
              disabled={!motionAllowed}
              onClick={() => setPaused((previous) => !previous)}
            >
              <span className={playing ? "pause-symbol" : "play-symbol"} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
