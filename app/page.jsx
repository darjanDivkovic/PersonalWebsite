'use client';
import HeroSection from "./sections/Hero/Hero";
import ExperiencesSection from "./sections/Experiences/Experiences";
import SkillsSection from "./sections/Skills/Skills";
import RecommendationsSection from "./sections/Recommendations/Recommendations";
import ReachOutFormSection from "./sections/ReachOutForm/ReachOutForm";
import FooterSection from "./sections/Footer/Footer";

import FullScreenLoader from "./shared/components/FullScreenLoader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  useEffect(() => {
  // fade + slide up for each section
  gsap.utils.toArray("section").forEach((sec) => {
    gsap.fromTo(
      sec,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sec,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // optional smooth parallax effect on background elements
  gsap.utils.toArray("[data-parallax]").forEach((el) => {
    gsap.to(el, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        scrub: true,
      },
    });
  });
}, []);

  return (
 <div className="relative">
  <FullScreenLoader duration={3000} />

  <section>
    <div className="w-screen h-content flex flex-col items-center relative z-100 px-[5%] xl:px-[15%]">
      <HeroSection />
    </div>
  </section>

  <section>
    <div className="relative w-screen px-[15%] z-20 mt-[15vh]">
      <ExperiencesSection />
    </div>
  </section>

  <section>
    <div className="relative w-screen mt-[15vh]">
      <SkillsSection />
    </div>
  </section>

  <section>
    <div className="relative w-screen mt-[150px] xl:mt-12">
      <RecommendationsSection />
    </div>
  </section>

  <section>
    <div className="relative w-screen boredpx-[15%] mt-[9vh]">
      <ReachOutFormSection />
    </div>
  </section>

  <section>
    <div className="relative w-screen h-[80vh] xl:h-[60vh] px-[15%] flex items-center overflow-hidden mt-6">
      <FooterSection />
    </div>
  </section>
</div>
  );
}
