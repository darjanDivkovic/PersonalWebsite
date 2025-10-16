import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const experiences = [
  {
    name: "Kinnect",
    role: "Senior Frontend Developer",
    years: "2023 - Current",
    site: "https://kinnectx.com/",
    image: "/images/KinnectProject.png",
    glow: "from-[#8F78F3]/40 to-[#5E3CF4]/10",
  },
  {
    name: "Pequity",
    role: "Frontend Developer",
    years: "2021 - 2023",
    site: "https://pequity.com/",
    image: "/images/PequityProject.png",
    glow: "from-[#5E3CF4]/40 to-[#8F78F3]/10",
  },
  {
    name: "InnoScripta",
    role: "Junior Developer",
    years: "2021 - 2023",
    site: "https://www.innoscripta.com/en",
    image: "/images/InnoScriptaProject.png",
    glow: "from-[#8F78F3]/40 to-[#43338F]/10",
  },
];

const Experiences = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <section className="flex flex-col items-center text-center relative overflow">
      <p className="font-pacifico border w-min rounded-full px-4 border-white/20 py-0.5 bg-gradient-to-r from-[#8F78F3] to-[#43338F] bg-clip-text text-transparent">
        Experience
      </p>

      <h1 className="text-[32px] xl:text-[42px] leading-none font-bold mt-6 font-raleway">
        Projects where <br />
        I left My{" "}
        <span className="relative ml-2">
          Mark
          <img
            src="/images/Underline.svg"
            className="absolute left-0 bottom-[-7px]"
          />
        </span>
      </h1>

      <p className="mt-6 text-[#b2b2b2] text-[13px] font-modernist max-w-[600px]">
        From zero-to-one startups to enterprise SaaS — these aren’t side
        projects, they’re <strong className="text-white">products in the wild.</strong>
      </p>

      <div className="mt-[10vh] flex flex-col xl:flex-row gap-20 xl:gap-10 justify-between items-center xl:items-start">
        {experiences.map((exp, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="relative group"
          >
            {/* glowing hover background */}
            

            <a href={exp.site} target="_blank">
            <div className="relative bg-white/[0.02] backdrop-blur-sm rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:border-[#8F78F3]/40 group-hover:scale-[1.03] bg-transparent">
              <Image
                src={exp.image}
                alt={exp.name}
                width={360}
                height={240}
                className="rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
            </div>
            </a>

            <h1 className="flex flex-col mt-6 text-[16px] xl:text-[22px]">
              <span className="opacity-60 text-[14px] xl:text-[18px]">
                {exp.name}
              </span>
              <strong className="font-modernist text-white">
                {exp.role}
              </strong>
            </h1>

            <strong className="font-modernist text-[14px] xl:text-[16px] text-[#8F78F3] mt-1 block">
              {exp.years}
            </strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
