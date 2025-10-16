'use client';

import { Canvas, useThree } from "@react-three/fiber";
import { Environment, Html, Preload, useGLTF, useTexture } from "@react-three/drei";
import { Suspense, useMemo, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import * as THREE from "three";

const ICONS = [
  null, null, null, null, null, null, null, null,
  '/icons/FigmaIcon.png', '/icons/SaaSIcon.png', '/icons/HTMLIcon.png', '/icons/CSSIcon.png', '/icons/NodeIcon.png', null, null, null,
  '/icons/VueIcon.png', '/icons/CucumberIcon.png', '/icons/CypressIcon.png', '/icons/javaScriptIcon.png', '/icons/JestIcon.png', '/icons/NextIcon.png', '/icons/UIUXIcon.png', null, null,
  '/icons/MySQLIcon.png', '/icons/TailwindIcon.png', '/icons/PostgreIcon.png', '/icons/ReactIcon.png', '/icons/ExpressIcon.png',
];

const Tile = ({ row, col, nodes, index }) => {
  const iconRef = useRef();
  const groupRef = useRef();
  const spacing = 2.1;
  const material = useMemo(() => nodes.Cube.material.clone(), [nodes]);
  const originalColor = useMemo(() => material.color.clone(), [material]);
  const texture = useTexture(ICONS[index] || '/icons/Empty.png');

  const handleHover = (hover) => {
    if (!groupRef.current) return;
    gsap.to(groupRef.current.position, { y: hover ? 0.5 : 0, duration: 0.8, ease: "power2.out" });
    const targetColor = hover ? new THREE.Color(0x43338F) : originalColor;
    gsap.to(material.color, { ...targetColor, duration: 0.8, ease: "power2.out" });
    if (iconRef.current)
      gsap.to(iconRef.current.material, { opacity: hover ? 1 : 0.1, duration: 0.6, ease: "power2.out" });
  };

  return (
    <group
      ref={groupRef}
      position={[col * spacing, 0, row * spacing]}
      onPointerOver={() => handleHover(true)}
      onPointerOut={() => handleHover(false)}
    >
      <mesh geometry={nodes.Cube.geometry} material={material} />
      <mesh position={[-0.01, 1.01, 0]} rotation={[-Math.PI / 1.8, 0, -0.05]} ref={iconRef}>
        <planeGeometry args={[0.7, 0.7]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={0.1}
          depthTest={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

// helper to adjust camera and scale on resize
const ResponsiveGroup = ({ nodes }) => {
  const group = useRef();
  const { viewport, camera } = useThree();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // mobile
        camera.position.set(0, 14, 10);
        group.current.scale.set(0.7, 0.7, 0.7);
        group.current.position.set(-6, -8, -5);
      } else if (width < 1024) {
        // tablet
        camera.position.set(0, 12, 8);
        group.current.scale.set(0.85, 0.85, 0.85);
        group.current.position.set(-7, -7, -5);
      } else {
        // desktop
        camera.position.set(0, 10, 5);
        group.current.scale.set(1, 1, 1);
        group.current.position.set(-7, -7, -5);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [camera]);

  const items = Array.from({ length: 40 }, (_, i) => ({
    id: `cube-${i}`,
    row: Math.floor(i / 8),
    col: i % 8,
    index: i,
  }));

  return (
    <group ref={group} rotation={[0, 0.4, 0]}>
      {items.map((props) => (
        <Tile key={props.id} {...props} nodes={nodes} />
      ))}
    </group>
  );
};

const SkillsSceneInner = () => {
  const { nodes } = useGLTF("/models/Cube.glb");
  return (
    <Canvas camera={{ position: [0, 10, 5.5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense>
        <Environment preset="night" />
        <ambientLight intensity={20} />
        <spotLight position={[5, 5, 0]} intensity={250} />
        <spotLight position={[-5, 5, 0]} intensity={50} />
        <ResponsiveGroup nodes={nodes} />
         <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SkillsSceneInner;
