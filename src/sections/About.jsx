import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedShapes from "../components/AnimatedShapes.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ---- TITLE TEXT ANIMATION (Letter based) ---- */
      const letters = titleRef.current.querySelectorAll("span");

      gsap.from(letters, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.06,
        duration: 1,
        ease: "power4.out",
      });

      /* ---- LEFT COLUMN ---- */
      gsap.from(leftColRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
      });

      /* ---- RIGHT COLUMN (More dynamic) ---- */
      gsap.from(rightColRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.85,
        rotateY: 15,
        y: 100,
        duration: 1.4,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex cursor-pointer items-center justify-center px-6 overflow-hidden text-white"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <AnimatedShapes />
      </div>

      <div className="max-w-6xl w-full relative z-10">
        {/* Animated Title */}
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-16 flex flex-wrap"
        >
          {"About Me".split("").map((char, i) => (
            <span key={i} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        <div
          ref={contentRef}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT COLUMN */}
          <div
            ref={leftColRef}
            className="space-y-8 max-w-xl"
          >
            <p className="text-lg text-gray-400 leading-relaxed">
              I’m an aspiring <span className="text-white">Full Stack Developer</span> with
              hands-on experience in building scalable, responsive web
              applications using modern technologies like React, Node.js,
              Express, and PostgreSQL.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Currently pursuing my B.Tech in Computer Science at
              <span className="text-white"> KIIT University</span>, I maintain a
              strong academic record while actively solving DSA problems and
              building real-world products that focus on clean UI and smooth
              user experiences.
            </p>

            <div className="flex gap-4 pt-6">
              <div className="h-1 w-24 bg-teal-400 rounded-full" />
              <div className="h-1 w-16 bg-teal-600 rounded-full" />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            ref={rightColRef}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-2xl blur-xl transition-all duration-700 group-hover:blur-2xl" />

            <div
              className="relative px-8 py-8 rounded-2xl border border-gray-600
              bg-black/60 backdrop-blur-xl
              transition-all duration-500 ease-out
              group-hover:border-teal-400
              group-hover:-translate-y-2
              group-hover:shadow-2xl group-hover:shadow-teal-400/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                Quick Facts
              </h3>

              <ul className="space-y-5">
                {[
                  "New Delhi",
                  "KIIT University – CSE",
                  "CGPA: 9.15 / 10",
                  "Open to Opportunities",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-pulse" />
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
