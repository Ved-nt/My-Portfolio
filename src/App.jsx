import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollIndicator from "./components/ScrollIndicator.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show indicator after Home section
      setShowIndicator(window.scrollY > window.innerHeight * 0.6);
    };

    const handleHashChange = () => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#0b0b0b] overflow-x-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px]
                     bg-sky-500/20 rounded-full blur-[160px]"
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px]
                     bg-cyan-400/15 rounded-full blur-[140px]"
        />
      </div>

      {/* Scroll Indicator (only after hero) */}
      {showIndicator && (
        <div className="fixed inset-0 z-40 pointer-events-none animate-fadeIn">
          <ScrollIndicator />
        </div>
      )}

      {/* UI Sections */}
      <Navbar />

      <section id="home" className="relative z-10 h-screen">
        <Home />
      </section>

      <section id="about" className="relative z-10 min-h-screen">
        <About />
      </section>

      <section id="projects" className="relative z-10 min-h-screen">
        <Projects />
      </section>

      <section id="skills" className="relative z-10 min-h-screen">
        <Skills />
      </section>
    </div>
  );
}
