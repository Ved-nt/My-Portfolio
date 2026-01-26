import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ScrollIndicator() {
  const barRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    let shown = false;

    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);

      // Show indicator only after user starts scrolling
      if (scrollTop > 30 && !shown) {
        shown = true;
        gsap.to(wrapperRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      }

      gsap.to(barRef.current, {
        scaleY: progress,
        transformOrigin: "top",
        duration: 0.25,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", updateScroll);
    updateScroll();

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed right-3 top-0 h-full w-[1px]
                 opacity-0 z-40 pointer-events-none"
    >
      {/* Soft track */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Progress */}
      <div
        ref={barRef}
        className="absolute inset-0 bg-teal-400/60"
        style={{ transform: "scaleY(0)" }}
      />
    </div>
  );
}
