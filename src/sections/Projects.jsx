import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedShapes from "../components/AnimatedShapes.jsx";

gsap.registerPlugin(ScrollTrigger);

const funProjects = [
  {
    title: "Bhagavad Gita Explorer",
    description: "Explore chapters and verses with AI-powered insights.",
    tech: ["React", "Node.js", "Express", "OpenAI API"],
    live: "#",
    code: "#",
    hover: "from-teal-500/15 via-cyan-500/10 to-sky-500/15",
  },
  {
    title: "3D Portfolio Experiments",
    description: "Creative Three.js scenes and micro-interactions.",
    tech: ["Three.js", "GSAP", "React", "WebGL"],
    live: "#",
    code: "#",
    hover: "from-cyan-500/15 via-blue-500/10 to-indigo-500/15",
  },
];

const realProjects = [
  {
    title: "Meditation & Journal Tracker",
    description: "Full-stack app with auth, PostgreSQL & AWS deployment.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    live: "#",
    code: "#",
    hover: "from-blue-500/15 via-indigo-500/10 to-violet-500/15",
  },
  {
    title: "Book Notes Manager",
    description: "Knowledge system inspired by Derek Sivers.",
    tech: ["React", "Express", "PostgreSQL", "REST API"],
    live: "#",
    code: "#",
    hover: "from-slate-500/15 via-gray-500/10 to-zinc-500/15",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const cardsRef = useRef([]);

  const [activeTab, setActiveTab] = useState("fun");

  const projects = activeTab === "fun" ? funProjects : realProjects;

  /* Main heading animation */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        underlineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* Card animation on tab switch */
  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      }
    );
  }, [activeTab]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <AnimatedShapes />
      </div>

      <div className="max-w-6xl w-full relative z-10 text-center">
        {/* MAIN HEADING */}
        <div className="inline-block mb-14">
          <h2
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Featured Projects
          </h2>
          <div
            ref={underlineRef}
            className="h-[3px] w-full bg-teal-400 mt-4 rounded-full"
          />
        </div>

        {/* SUBHEADINGS */}
        <div className="flex justify-center gap-10 mb-16">
          {[
            { key: "fun", label: "Fun Projects" },
            { key: "real", label: "Real World Projects" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`relative text-lg font-medium transition-all duration-300
                ${
                  activeTab === key
                    ? "text-teal-300 after:scale-x-100"
                    : "text-white/50 hover:text-white"
                }
                after:content-[''] after:block after:h-[2px]
                after:bg-teal-400 after:mt-2 after:scale-x-0
                after:transition-transform after:duration-300`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {projects.map((project, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative rounded-2xl p-7
                bg-white/5 backdrop-blur-lg
                border border-white/10
                transition-all duration-300 ease-out hover:border-teal-400/30
                hover:scale-[1.04] hover:-translate-y-2
                hover:shadow-2xl hover:shadow-teal-400/10
                overflow-hidden"
            >
              {/* Gradient Hover Background */}
              <div
                className={`absolute inset-0 opacity-0
                  bg-gradient-to-br ${project.hover}
                  transition-opacity duration-500
                  group-hover:opacity-100`}
              />

              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full
                        bg-white/10 text-white/70
                        backdrop-blur-md
                        transition-colors duration-300
                        group-hover:bg-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-5 py-2.5 rounded-lg
                      bg-teal-500/10 text-teal-300
                      hover:bg-teal-500/20
                      transition-all duration-300"
                  >
                    View Project
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    className="px-5 py-2.5 rounded-lg
                      border border-white/20
                      text-white/70
                      hover:text-white hover:border-white/40
                      transition-all duration-300"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
