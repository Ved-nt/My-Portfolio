import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedShapes from "../components/AnimatedShapes.jsx";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- PROJECT DATA ---------------- */

const funProjects = [
  {
    title: "ThinkTank",
    description: "Your personal space to think, learn, and grow.ThinkTank is more than just a productivity tool—it’s your digital companion for learning, reflection, and creativity.",
    tech: ["Three.js", "GSAP", "React", "WebGL"],
    live: "https://thinktank-iota.vercel.app/",
    code: "https://github.com/Ved-nt/ThinkTank",
    hover: "from-cyan-500/15 via-blue-500/10 to-indigo-500/15",
    image: "/thinktank.png"
  },
  {
    title: "Adidas Reimagined Website",
    description: "Adidas website redesigned. RE-IMAGINE the future of sport with Adidas Innovative gear for your ultimate performance.",
    tech: ["HTML","CSS","JavaScript", "GSAP"],
    live: "https://re-imagine-adidas.netlify.app/",
    code: "https://github.com/Ved-nt/addidas",
    hover: "from-cyan-500/15 via-blue-500/10 to-indigo-500/15",
    image:"/adidas.png"
  },
  {
    title: "Valorant Reimagined Website",
    description: "Valorant website redesigned for reimagine hackathon round 2.",
    tech: ["HTML","CSS","JavaScript", "GSAP"],
    live: "https://valorant12.netlify.app/",
    code: "https://github.com/Ved-nt/Valorant",
    hover: "from-cyan-500/15 via-blue-500/10 to-indigo-500/15",
    image:"/valorant.png"
  },
  {
    title: "Snake Game",
    description: "It is a fun Snake Game.",
    tech: ["HTML","CSS","JavaScript"],
    live: "https://snake-game-five-tan.vercel.app/",
    code: "https://github.com/Ved-nt/snake_game",
    hover: "from-teal-500/15 via-cyan-500/10 to-sky-500/15",
    image: "/snakegame.png"
  },
  {
    title: "Image Editor",
    description: "Creative Three.js scenes and micro-interactions.",
    tech: ["HTML","CSS","JavaScript"],
    live: "https://imageeditor-seven.vercel.app/",
    code: "https://github.com/Ved-nt/image-editor",
    hover: "from-cyan-500/15 via-blue-500/10 to-indigo-500/15",
    image: "/image-editor.png"
  },
  {
    title: "Cynthia Ugwu Landing Page",
    description: "This is Cynthia ugwu reimagined website.",
    tech: ["HTML","CSS","JavaScript", "GSAP"],
    live: "https://reimagined-phi.vercel.app/",
    code: "https://github.com/Ved-nt/reimagined",
    hover: "from-cyan-500/15 via-blue-500/10 to-indigo-500/15",
    image:"/reimagined.png"
  },
];

const realProjects = [
  {
    title: "SORTFIY: Sorting Algorithm Visualiser",
    description: "SORTIFY is a sleek, interactive sorting algorithm visualizer. Designed for learners and educators, it showcases popular sorting techniques like Bubble, Selection, Insertion, Merge, and Quick Sort through animated bar charts and step-by-step transitions.",
    tech: ["React", "JavaScript", "CSS"],
    live: "https://sortify-algo-lab1.netlify.app/",
    code: "https://github.com/Ved-nt/SORTIFY",
    hover: "from-blue-500/15 via-indigo-500/10 to-violet-500/15",
    image: "/sortify.png"
  },
  {
    title: "AI for Medicational interaction and side-effect prediction (NOT YET DEPOLYED)",
    description: "Knowledge system inspired by Derek Sivers.",
    tech: ["React", "Express", "PostgreSQL", "REST API"],
    live: "#",
    code: "#",
    hover: "from-slate-500/15 via-gray-500/10 to-zinc-500/15",
    image:"/aiproject.png"
  },
  {
    title: "Card Dealership Website",
    description: "Developed and deployed a full-stack car dealership platform to streamline vehicle listings and customer inquiries.Implemented secure admin authentication with dynamic routes for adding, editing, and deleting car listings",
    tech: ["React","Node.js","Express.js","MongoDB","TailwindCSS"],
    live: "https://autotradzllp.vercel.app/",
    code: "https://github.com/Ved-nt/Car_Dealership",
    hover: "from-blue-500/15 via-indigo-500/10 to-violet-500/15",
    image:"/cardealership.png"
  },
  {
    title: "Bhagavad Gita Website",
    description: "Developed a web application to provide chapter-wise insights from the Bhagavad Gita. Integrated an external API using Axios to fetch and display content dynamically.",
    tech: ["HTML","CSS","JavaScript","Node.js","Express.js","API","axios"],
    live: "https://autotradzllp.vercel.app/",
    code: "https://github.com/Ved-nt/API",
    hover: "from-blue-500/15 via-indigo-500/10 to-violet-500/15",
    image:"/bhagavadgita.png"
  },
];

/* ---------------- COMPONENT ---------------- */

export default function Projects() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const cardsRef = useRef([]);

  const [activeTab, setActiveTab] = useState("real");

  const projects = activeTab === "real" ? realProjects : funProjects;

  /* -------- Heading Animation -------- */
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

  /* -------- Card Entrance Animation -------- */
  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.15,
      }
    );
  }, [activeTab]);

  /* -------- Image Hover Parallax -------- */
  const handleImageMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;

    gsap.to(el.querySelector("img"), {
      x,
      y,
      scale: 1.05,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const resetImage = (el) => {
    gsap.to(el.querySelector("img"), {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen py-28 px-6 text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <AnimatedShapes />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Featured Projects
          </h2>
          <div
            ref={underlineRef}
            className="h-[3px] w-40 bg-teal-400 mt-4 mx-auto"
          />
        </div>

        {/* TABS */}
        <div className="flex justify-center gap-12 mb-20">
          {["real", "fun"].map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`text-lg font-medium transition-all duration-300 ${
                activeTab === key
                  ? "text-teal-300"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {key === "real" ? "Real World Projects" : "Fun Projects"}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative rounded-3xl overflow-hidden
                bg-white/5 backdrop-blur-xl
                border border-white/10
                transition-all duration-500
                hover:border-teal-400/30
                hover:shadow-2xl hover:shadow-teal-400/10"
            >
              {/* IMAGE SECTION */}
              <div
                className="relative h-64 overflow-hidden cursor-pointer"
                onMouseMove={(e) =>
                  handleImageMove(e, e.currentTarget)
                }
                onMouseLeave={(e) =>
                  resetImage(e.currentTarget)
                }
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full
                        bg-white/10 text-white/70
                        backdrop-blur-md
                        transition-all duration-300
                        group-hover:bg-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
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
