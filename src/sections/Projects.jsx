import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedShapes from "../components/AnimatedShapes.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    

    return(
        <section id="projects" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden text-white">
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <AnimatedShapes />
            </div>
            
            <div className="max-w-6xl w-full relative z-10">

                
            </div>
        </section>
    )
}