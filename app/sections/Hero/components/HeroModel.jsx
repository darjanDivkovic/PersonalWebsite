"use client";

import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Model = () => {
  const mesh = useRef();
  const { nodes } = useGLTF("/models/Gem.glb");

  useFrame(() => {
    mesh.current.rotation.y -= 0.002;
  });

  const materialProps = {
    thickness: 1.2,
    roughness: 0,
    transmission: 1.05,
    ior: 17.5,
    backside: true,
  };

  return (
    <group
      scale={1.4}
      ref={mesh}
      position={[0, -1.9, 0]}
      rotation={[0.4, 0, 0.1]}
    >
      {/* 🔥 360° PERFECT LIGHTING SETUP 🔥 */}
      
      {/* TOP LIGHT - Soft overhead glow */}
      <rectAreaLight
        width={8} height={8}
        intensity={200}
        color="#8F78F3"
        position={[0, 8, 0]}
        rotation={[-0.3, 0, 0]}
      />
      
      {/* FRONT LIGHT - Main hero glow */}
      <rectAreaLight
        width={6} height={6}
        intensity={250}
        color="#6F71CC"
        position={[6, 0, 0]}
        rotation={[0, -0.2, 0]}
      />
      
      {/* BACK LIGHT - Rim glow effect */}
      <rectAreaLight
        width={5} height={5}
        intensity={180}
        color="#43338F"
        position={[-6, 0, 0]}
        rotation={[0, 0.2, 0]}
      />
      
      {/* LEFT LIGHT - Side fill */}
      <rectAreaLight
        width={4} height={4}
        intensity={150}
        color="#A8B6FF"
        position={[0, 0, 6]}
        rotation={[0, 1.4, 0]}
      />
      
      {/* RIGHT LIGHT - Opposite side fill */}
      <rectAreaLight
        width={4} height={4}
        intensity={150}
        color="#A8B6FF"
        position={[0, 0, -6]}
        rotation={[0, -1.4, 0]}
      />
      
      {/* BOTTOM LIGHT - Subtle bounce */}
      <rectAreaLight
        width={10} height={10}
        intensity={100}
        color="#D1D5FF"
        position={[0, -8, 0]}
        rotation={[0.3, 0, 0]}
      />

      {/* ✨ AMBIENT - Perfect even fill */}
      <ambientLight intensity={0.6} color="#6F71CC" />

      {/* Render meshes */}
      {Object.keys(nodes).map((key, index) => {
        if (index < 1) return null;
        return (
          <mesh {...nodes[key]} key={index}>
            <MeshTransmissionMaterial {...materialProps} envMap={null} />
          </mesh>
        );
      })}
    </group>
  );
};

export default Model;