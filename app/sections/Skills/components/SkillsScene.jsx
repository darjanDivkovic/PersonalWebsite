"use client";

import dynamic from "next/dynamic";

// Dynamically import your 3D scene client-side only
const SkillsScene = dynamic(() => import("./SkillsSceneInner"), { ssr: false });

export default SkillsScene;
