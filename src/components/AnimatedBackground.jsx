import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

function ParticleField({ color }) {
  const ref = useRef();

  // Generate fewer random positions inside a smaller sphere
  const positions = useMemo(
    () => random.inSphere(new Float32Array(1000), { radius: 1.5 }), 
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
      position={[0, 0, 0]}
    >
      <PointMaterial
        transparent
        vertexColors={false}
        color={color}
        size={0.015}          // dot size
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
