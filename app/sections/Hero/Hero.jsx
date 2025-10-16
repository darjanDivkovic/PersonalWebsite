"use client";

import { useEffect } from "react";
import CTAButton from "../../shared/components/CTAButton";
import HeroScene from "./components/HeroScene";
import SkillsTile from "./components/SkillsTile";

const HeroSection = () => {
   useEffect(() => {
        const video = document.getElementById('hero-video');
        video?.play();
    }, []);
  
    return (
        <>
        <div className="flex flex-col xl:flex-row justify-between z-10 w-[100%] mt-[15vh] xl:mt-[30vh] items-center">
          <div className="relative text-center xl:text-start">
            <span className="mt-12 text-[23px] xl:text-[30px] font-bold bg-gradient-to-r from-[#8F78F3] to-[#43338F] bg-clip-text text-transparent font-raleway">Darjan Divkovic</span>
            <h1 className="text-[40px] xl:text-[50px] leading-none font-bold">
              
              <span className="relative font-raleway">Frontend Developer</span>  
            </h1>
           
            <p className="mt-8 text-[#B2B2B2] text-[12px] w-[90%] mx-auto xl:mx-0 xl:text-[14px] modernist font-modernist">Remote First, <strong className="text-white">Senior Frontend Developer</strong> with <strong className="text-white">5+ years</strong> experience <br /> in building SaaS for <strong className="text-white">US & EU</strong> companies.</p>

            <div className="flex flex-col xl:flex-row items-center mt-16 gap-8">
              <a href="https://calendly.com/darjan-developer/30min" target="_blank">
                <CTAButton />
              </a>
              <a href="/cv/CV-Darjan-Divkovic.pdf" download>
              <button className="opacity-60 text-[13px] cursor-pointer">Download CV</button>
              </a>
            </div>
          </div>

          <div className="relative w-full xl:w-[30%]  h-[20vh] xl:h-[30vh] order-first xl:order-last mb-8 xl:mb-0">
            <HeroScene />
          </div>
          
          <video
          id="hero-video"
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-10"
          src="https://ik.imagekit.io/4qjvwlmyg/Black.mp4?updatedAt=1760614404013"
          poster="/videos/hero-poster.jpg"  // ← 50KB thumbnail
          loading="lazy"  // ← Next.js lazy
          />
        </div>

        <div className="mt-[5vh] xl:mt-[13vh] w-full">
          <SkillsTile />
        </div>
        </>
    )
}

export default HeroSection;