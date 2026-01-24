import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

function ParticleField({ color }) {
  const ref = useRef();

  // Generate random positions for particles inside a sphere
  const positions = useMemo(
    () => random.inSphere(new Float32Array(2000), { radius: 2.0 }), // ✅ slightly larger sphere radius
    []
  );

  // Rotate the particle field slowly
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.05;
    ref.current.rotation.x += delta * 0.02;
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
      frustumCulled
      position={[0, -0.5, 0]}   // ✅ slide sphere down along Y-axis
    >
      <PointMaterial
        transparent
        vertexColors={false}     // ✅ force uniform color
        color={color}            // ✅ use the passed-in color
        size={0.02}              // ✅ larger dots (was 0.015)
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function AnimatedBackground({ dotColor = "#7dd3fc" }) {
  return (
    <Canvas
      className="absolute inset-0"
      camera={{ position: [0, 0, 3], fov: 75 }}
      gl={{ antialias: false, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.5} />
      <ParticleField color={dotColor} />
    </Canvas>
  );
}
