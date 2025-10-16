import Image from 'next/image';
import SkillsScene from './components/SkillsScene';

const TECH_NAMES = [
  "Figma",
  "Node.js",
  "Vue.js",
  "Cypress",
  "JavaScript",
  "Jest",
  "Next.js",
  "MySQL",
  "Tailwind",
  "PostgreSQL",
  "React",
  "Express"
];

const Skills = () => {
    return (
        <>
        <div className="absolute top-0 z-10 w-screen h-content px-[15%] flex mt-[5%] pointer-events-none flex-col text-center">
        <p className="pacifico border w-min mx-auto rounded-full px-4 border-white/20 py-0.5 bg-gradient-to-r from-[#8F78F3] to-[#43338F] bg-clip-text text-transparent font-pacifico mt-12">Skills</p>
        <h1 className="text-[24px] xl:text-[40px] leading-none font-bold mt-6 font-raleway">
         The Stack 
          <br />
          Behind My <span className="relative">
            Results
            <Image
                src="/images/Underline.svg"
                alt="Kinnect Underline"
                width={300}
                height={200}
                className="rounded-lg object-cover absolute left-0"/>
            </span>
        </h1>

        <p className="mt-8 text-[#b2b2b2] shadow-xxl text-[13px] modernist">These aren’t buzzwords. They’re the technologies behind SaaS platforms <br/> already running in enterprise environments.</p>

      <div className="max-w-[800px] w-full mx-auto mt-8 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-[13px] px-2 md:px-4">
          {TECH_NAMES.map((tech, i) => (
            <div
              key={i}
              className="bg-white/5 px-4 md:px-6 py-1 md:py-1.5 rounded-full border border-white/20 backdrop-blur-sm whitespace-nowrap"
            >
              <h1>{tech}</h1>
            </div>
          ))}
        </div>

      </div>
      <div className="w-screen h-[70vh] z-0 relative">
        <SkillsScene />
      <div className="absolute inset-0 pointer-events-none shadow-none md:shadow-[inset_0_0_250px_150px_black]" />
      </div>
        </>
    )
}

export default Skills;