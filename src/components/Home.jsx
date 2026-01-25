import React from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Scene from "../canvas/Scene";

export default function Home() {
  const heroRef = useRef(null);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;

      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;

      heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center cursor-pointer justify-center overflow-hidden"
    >
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <Scene />
        </Canvas>
      </div>


      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-20 text-center px-6 max-w-4xl
                   transition-transform duration-200 ease-out"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-2xl md:text-7xl font-bold tracking-tight text-teal-400"
        >
          Vedant Sharma
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-300"
        >
          Full-Stack Developer · Problem Solver · Curious Builder
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex justify-center gap-6"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg border border-gray-500
                       text-gray-300 hover:text-white
                       hover:border-teal-400
                       transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-teal-500/10
                       text-teal-300 hover:bg-teal-500/20
                       transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  );
}
