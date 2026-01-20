import React from "react"
import Background from "./Background";

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <Background />
    </>
  );
}
