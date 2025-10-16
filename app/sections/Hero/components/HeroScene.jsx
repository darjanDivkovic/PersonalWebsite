"use client";

import { Canvas } from "@react-three/fiber";
import HeroModel from "./HeroModel";

const HeroScene = () => {

    return (
        <Canvas resize={false}>
            <HeroModel />
        </Canvas>
    )
}

export default HeroScene;