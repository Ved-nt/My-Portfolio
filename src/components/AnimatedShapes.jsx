import React from "react";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingShape({ position, speed, geometry }) {
  const mesh = useRef(null);

  useFrame((state) => {
    if (!mesh.current) return;

    mesh.current.rotation.x += 0.01 * speed;
    mesh.current.rotation.y += 0.01 * speed;
    mesh.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
  });

  const renderGeometry = () => {
    switch (geometry) {
      case "box":
        return <boxGeometry args={[0.5, 0.5, 0.5]} />;
      case "sphere":
        return <sphereGeometry args={[0.3, 32, 32]} />;
      case "torus":
        return <torusGeometry args={[0.3, 0.1, 16, 100]} />;
      case "octahedron":
        return <octahedronGeometry args={[0.3]} />;
      default:
        return null;
    }
  };

  return (
    <mesh ref={mesh} position={position}>
      {renderGeometry()}
      <meshStandardMaterial
        color="#2dd4bf"          // teal-400
        wireframe
        transparent
        opacity={0.4}
        emissive="#2dd4bf"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function AnimatedShapes() {
  const shapes = [
    { position: [-3, 2, -2], speed: 0.5, geometry: "box" },
    { position: [3, -1, -3], speed: 0.7, geometry: "sphere" },
    { position: [-2, -2, -1], speed: 0.6, geometry: "torus" },
    { position: [2, 3, -2], speed: 0.8, geometry: "octahedron" },
    { position: [0, -3, -4], speed: 0.4, geometry: "box" },
  ];

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ alpha: true, antialias: true }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} />

      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </Canvas>
  );
}
