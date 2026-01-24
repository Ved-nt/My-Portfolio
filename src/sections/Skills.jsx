import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
  SiMongodb,
  SiTypescript,
  SiPython,
  SiDocker,
} from "react-icons/si";
import {FaJava} from "react-icons/fa"
import AnimatedBackground from "../components/AnimatedBackground.jsx";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    title: "Frontend",
    gradient: "from-teal-500/10 to-cyan-500/10",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Three.js", icon: <SiThreedotjs /> },
    ],
  },
  {
    title: "Backend",
    gradient: "from-blue-500/10 to-indigo-500/10",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "REST APIs", icon: "🌐" },
    ],
  },
  {
    title: "Tools & Platforms",
    gradient: "from-slate-500/10 to-red-500/10",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Linux", icon: <SiLinux /> },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ===== MAIN TITLE ===== */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        })
        .from(titleRef.current.children, {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.06,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          titleLineRef.current,
          { scaleX: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        );

      /* ===== CARDS ===== */
      const cards = gsap.utils.toArray(".skill-card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      /* ===== CARD HEADINGS ===== */
      gsap.utils.toArray(".card-heading").forEach((heading) => {
        const line = heading.querySelector(".card-line");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
            },
          })
          .from(heading, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power2.out",
          })
          .from(
            line,
            { scaleX: 0, duration: 0.5, ease: "power2.out" },
            "-=0.3"
          );
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen px-6 flex items-center overflow-hidden text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatedBackground dotColor="#38fdfd" />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold flex justify-center gap-2"
          >
            {"Skills".split("").map((c, i) => (
              <span key={i} className="inline-block">
                {c}
              </span>
            ))}
          </h2>

          <span
            ref={titleLineRef}
            className="block mx-auto mt-4 h-[3px] w-24 bg-teal-400 origin-left"
          />

          <p className="mt-6 text-gray-400 text-lg">
            Technologies I work with
          </p>
        </div>

        {/* Main cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((group, i) => (
            <div
              key={i}
              className="skill-card group relative rounded-2xl p-8
                         bg-white/5 backdrop-blur-md
                         border border-white/10
                         transition-all duration-300
                         hover:-translate-y-2 hover:scale-[1.03]
                         hover:border-teal-400/30
                         hover:shadow-2xl hover:shadow-teal-400/10
                         overflow-hidden"
            >
              <div
                className={`absolute inset-0 opacity-0
                bg-gradient-to-br ${group.gradient}
                transition-opacity duration-500
                group-hover:opacity-100`}
              />

              <div className="relative z-10">
                <div className="card-heading mb-6">
                  <h3 className="text-2xl font-semibold">{group.title}</h3>
                  <span className="card-line block h-[2px] w-12 bg-teal-400 mt-2 origin-left" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {group.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 text-white/70 hover:text-white transition-colors"
                    >
                      <span className="text-2xl text-teal-400">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages & Technologies */}
        <div className="flex justify-center mt-8">
          <div className="skill-card group relative rounded-2xl p-8
                          bg-white/5 backdrop-blur-md
                          border border-white/10
                          transition-all duration-300
                          hover:-translate-y-2 hover:scale-[1.03]
                          hover:border-teal-400/30
                          hover:shadow-2xl hover:shadow-teal-400/10
                          overflow-hidden w-full md:w-1/3"
          >
            <div className="absolute inset-0 opacity-0
                            bg-gradient-to-br from-purple-500/10 to-pink-500/10
                            transition-opacity duration-500
                            group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="card-heading mb-6">
                <h3 className="text-2xl font-semibold">
                  Languages & Technologies
                </h3>
                <span className="card-line block h-[2px] w-12 bg-teal-400 mt-2 origin-left" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <SkillItem icon={<SiPython />} label="Python" />
                <SkillItem icon={<FaJava />} label="Java" />
                <SkillItem icon={<SiTypescript />} label="TypeScript" />
                <SkillItem icon={<SiDocker />} label="Docker" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillItem({ icon, label }) {
  return (
    <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
      <span className="text-2xl text-teal-400">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
