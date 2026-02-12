import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedShapes from "../components/AnimatedShapes";
import { Mail, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden text-white"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <AnimatedShapes />
      </div>

      {/* Massive Background Text */}
      <h1 className="absolute text-[18vw] font-extrabold text-white/5 select-none pointer-events-none tracking-widest">
        CONTACT
      </h1>

      <div
        ref={contentRef}
        className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-20 items-center"
      >
        {/* LEFT SIDE — Editorial Style */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Let’s create
            <br />
            something
            <span className="text-teal-400"> impactful.</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-md">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to collaborate.
          </p>

          <div className="space-y-6 pt-6">
            <div className="flex items-center gap-4 text-gray-300">
              <Mail size={18} className="text-teal-400" />
              vedantsh06@gmail.com
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <MapPin size={18} className="text-teal-400" />
              India
            </div>

            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/Ved-nt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 backdrop-blur-md
                           flex items-center justify-center
                           hover:bg-teal-400/20 hover:scale-110
                           transition-all duration-300"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/vedantsh11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 backdrop-blur-md
                           flex items-center justify-center
                           hover:bg-teal-400/20 hover:scale-110
                           transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://instagram.com/vedantsh06"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 backdrop-blur-md
                           flex items-center justify-center
                           hover:bg-teal-400/20 hover:scale-110
                           transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Modern Glass Form */}
        <div className="relative p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl shadow-2xl">
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 rounded-3xl bg-teal-400/5 blur-2xl pointer-events-none"></div>

          <form className="relative space-y-6">
            {["Name", "Email"].map((label, i) => (
              <div key={i} className="relative">
                <input
                  type={label === "Email" ? "email" : "text"}
                  required
                  placeholder=" "
                  className="peer w-full px-4 py-4 bg-white/5 rounded-xl
                             border border-white/10
                             focus:border-teal-400
                             focus:bg-white/10
                             focus:outline-none
                             transition-all duration-300"
                />
                <label
                  className="absolute left-4 top-4 text-gray-400 text-sm
                                  peer-focus:-top-4 peer-focus:text-xs
                                  peer-focus:text-teal-400
                                  peer-valid:-top-4 peer-valid:text-xs
                                  transition-all duration-300"
                >
                  {label}
                </label>
              </div>
            ))}

            <div className="relative">
              <textarea
                rows="4"
                required
                placeholder=" "
                className="peer w-full px-4 py-4 bg-white/5 rounded-xl
                           border border-white/10
                           focus:border-teal-400
                           focus:bg-white/10
                           focus:outline-none
                           transition-all duration-300 resize-none"
              />
              <label
                className="absolute left-4 top-4 text-gray-400 text-sm
                                peer-focus:-top-4 peer-focus:text-xs
                                peer-focus:text-teal-400
                                peer-valid:-top-4 peer-valid:text-xs
                                transition-all duration-300"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4
                         bg-teal-400 text-black font-semibold rounded-xl
                         hover:scale-105 hover:shadow-lg hover:shadow-teal-400/40
                         transition-all duration-300"
            >
              Send Message
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
