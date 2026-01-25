import React from "react"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  // 🔹 Scroll handler (Lenis-ready)
  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const NavLink = ({ label, target }) => (
    <button
      onClick={() => scrollToSection(target)}
      className="relative text-md cursor-pointer text-white transition-colors duration-300
      hover:text-teal-400 group"
    >
      {label}

      {/* underline */}
      <span
        className="absolute left-0 -bottom-1 h-[2px] w-full bg-teal-400/70 scale-x-0 origin-left transition-transform duration-300 
        group-hover:scale-x-100"
      />
    </button>
  );

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-sm text-white overflow-x-hidden"
    >

      <h1
        onClick={() => scrollToSection("home")}
        className="text-2xl  text-teal-400 font-semibold tracking-wide cursor-pointer"
      >
        VS
      </h1>

      <div className="flex gap-8">
        <NavLink label="Home" target="home" />
        <NavLink label="About" target="about" />
        <NavLink label="Projects" target="projects" />
        <NavLink label="Skills" target="skills" />
        <NavLink label="Achievements" target="achievements" />
        <NavLink label="Contact" target="contact" />
      </div>
    </nav>
  );
}
