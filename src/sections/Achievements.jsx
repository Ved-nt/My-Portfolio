import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Award } from "lucide-react";
import AnimatedShapes from "../components/AnimatedShapes.jsx";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    icon: Trophy,
    title: "CodeSprint 2.0 – Top 10",
    description:
      "Ranked among the Top 10 sprinters in CodeSprint 2.0 organized by UiPath Students Community (KIIT).",
    date: "July 2025",
  },
  {
    icon: Award,
    title: "Graphs Camp – Selected Mentee",
    description:
      "Selected from 40,000+ students across India to learn advanced graph techniques under a Codeforces Master.",
    date: "March 2025",
  },
  {
    icon: Trophy,
    title: "Konverge Hackathon - Top 20",
    descritption: 
      "Recognized among the Top 20 teams for developing a scalable web-based solution during the hackathon.",
    date: " February 2026"
  }
    
];

export default function Achievements() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const titleLineRef = useRef(null); // NEW underline ref
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });

      // Underline animation (beneath heading)
      gsap.from(titleLineRef.current, {
        scaleX: 0,
        duration: 0.8,
        ease: "power3.out",
        transformOrigin: "left",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });

      // Timeline line animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Achievement items animation
      gsap.from(itemsRef.current, {
        opacity: 0,
        x: 80,
        duration: 1,
        stagger: 0.35,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <AnimatedShapes />
      </div>

      <div className="max-w-5xl w-full relative z-10">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2
            ref={headingRef}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Achievements
          </h2>

          {/* Underline */}
          <span
            ref={titleLineRef}
            className="block mx-auto mt-4 h-[3px] w-24 bg-teal-400 origin-left"
          />

          <p className="mt-4 text-gray-400 text-lg">
            Milestones that shaped my journey
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex">
          {/* Vertical line */}
          <div className="relative w-12 flex justify-center">
            <div
              ref={lineRef}
              className="w-[2px] h-full bg-gradient-to-b from-teal-400 via-teal-400/60 to-transparent"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-20">
            {achievements.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  ref={(el) => (itemsRef.current[i] = el)}
                  className="flex gap-6 items-start"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-full
                               bg-teal-400/15 backdrop-blur-md
                               flex items-center justify-center
                               text-teal-400
                               shadow-lg shadow-teal-400/20
                               transition-transform duration-300
                               hover:scale-110"
                  >
                    <Icon size={22} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <span className="text-sm text-teal-300/80">
                      {item.date}
                    </span>

                    <p className="mt-3 text-gray-400 max-w-2xl leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
