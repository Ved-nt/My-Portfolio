import React from "react"
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Background() {
  const pointsRef = useRef();
  const count = 3000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += 0.0003;
    pointsRef.current.rotation.x += 0.00015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.025}
        color={new THREE.Color("#7dd3fc")} // muted sky blue
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  );
}
