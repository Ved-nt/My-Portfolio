import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedShapes from "../components/AnimatedShapes.jsx";

export default function Achievements() {
    return (
        <section 
            id="achievements"
            className="relative min-h-screen flex cursor-pointer items-center justify-center px-6 overflow-hidden text-white"
        >

            <div className="absolute inset-0 pointer-events-none opacity-40">
                <AnimatedShapes />
            </div>
        </section>
    )
}