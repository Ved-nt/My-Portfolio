import React from "react"
import { Canvas } from "@react-three/fiber";
import Navbar from "./components/Navbar";
import Scene from "./canvas/Scene";

export default function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0b0b0b]">
      
      {/* Three.js Layer */}
      <Canvas
        className="absolute inset-0 z-10"
        camera={{ position: [0, 0, 8], fov: 75 }}
      >
        <Scene />
      </Canvas>

      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px]
                        bg-sky-500/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px]
                        bg-cyan-400/15 rounded-full blur-[140px]" />
      </div>

      {/* UI */}
      <Navbar />
    </div>
  );
}
