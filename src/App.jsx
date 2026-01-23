import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";

export default function App() {
  return (
    <div className="relative w-screen min-h-screen bg-[#0b0b0b]">
      
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px]
                     bg-sky-500/20 rounded-full blur-[160px]"
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px]
                     bg-cyan-400/15 rounded-full blur-[140px]"
        />
      </div>

      {/* UI Sections */}
      <Navbar />
      <section id="hero" className="relative z-10 h-screen">
        <Hero />
      </section>
      <section id="about" className="relative z-10 min-h-screen">
        <About />
      </section>
      <section id="projects" className="relative z-10 min-h-screen">
        <Projects />
      </section>
    </div>
  );
}
