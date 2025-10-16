import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CARDS = [
  {
    name: "Seena Mojahedi",
    image: '/people/SeenaImg.png',
    position: "CEO at Kandor Solutions",
    note: "Darjan is EXCELLENT and I HIGHLY recommend and endorse his work. He designed a beautiful application from front-to-back, built the entire front end…",
  },
  {
    name: "Colby Dugger",
    image: '/people/ColbyImg.png',
    position: "Marketing Lead & Marketing Ops",
    note: "Darjan was able to automate all of this saving our team weeks of time. Not only were his Python skills on showcase, but the turnaround time and collaboration were unmatched.",
  },
  {
    name: "Mohamed Anwer",
    image: '/people/MohamedImg.png',
    position: "Senior Software Engineer at Pequity",
    note: "I was consistently impressed by his productivity and speed… his ability to solve complex problems in a timely manner is truly exceptional.",
  },
  {
    name: "Harsh Patel",
    image: '/people/HarshImg.png',
    position: "Product Manager at Pequity",
    note: "Darjan is a PM’s engineer… Right from backlog grooming to product launch he was a terrific partner, customer centric and delivered big time.",
  },
  {
    name: "Warren Lebovics",
    image: '/people/WarrenImg.png',
    position: "Co-Founder at Pequity",
    note: "Darjan is a designer’s dream frontend partner… brings so much creativity and pride to his work, resulting in extremely polished and thoughtful user experiences.",
  },
  {
    name: "Jeff Auston",
    image: '/people/JeffImg.png',
    position: "Engineering Leadership at Pequity",
    note: "He worked very hard to improve his skills and made significant contributions… what a pleasure to work with – he’s a great communicator",
  },
  {
    name: "Io Ma",
    image: '/people/IoImg.png',
    position: "Platform Engineer @ Pequity",
    note: "If anyone is searching for the absolute frontend rockstar, I have to recommend you Darjan!",
  },
  {
    name: "Milos Glendza",
    image: '/people/MilosImg.png',
    position: "Software Developer at ServalIT",
    note: "He’s an easy-going yet reliable guy who always works hard to outbest yesterday’s self.",
  },
  {
    name: "Ji Tae Kim",
    image: '/people/KimImg.png',
    position: "Product Designer Ex-Instagram, Linkedin",
    note: "Darjan is an engineer who thinks like a designer. He can turn any design into a flawless and stunning feature that delights your end users."
  },
  {
    name: "Joseph Lee",
    image: '/people/JosephImg.png',
    position: "Software Engineer @ Magic Eden",
    note: "He fearlessly took on difficult frontend assignments… eager to learn more and improve his skills.",
  },
  {
    name: "Petar Cevriz",
    image: '/people/PetarImg.png',
    position: "Software Engineer",
    note: "Darjan demonstrated a remarkable ability to bring ideas to life… consistently delivered pixel-perfect designs with precision.",
  },
  {
    name: "Giannis Koutsaftakis",
    image: '/people/GiannisImg.png',
    position: "Principal Frontend Developer at Pequity",
    note: "Darjan is an exceptional front-end developer with excellent proficiency in Python too.",
  },
];

function ScrollingRow({ items, direction = "left", duration = 100 }) {
  const rowRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const card = row.children[0];
    const cardWidth =
      card.offsetWidth + parseFloat(getComputedStyle(card).marginRight) * 2;
    const loopWidth = cardWidth * items.length;

    gsap.fromTo(
      row,
      { x: direction === "left" ? 0 : -loopWidth },
      {
        x: direction === "left" ? -loopWidth : 0,
        duration,
        ease: "none",
        repeat: -1,
      }
    );
  }, [items, direction, duration]);

  return (
    <div ref={rowRef} className="flex will-change-transform">
      {[...items, ...items].map((card, i) => (
        <div
          key={i}
          className="relative group min-w-[260px] md:min-w-[350px] h-[160px] md:h-[190px]
            mx-3 md:mx-6 p-[1px] rounded-2xl overflow-hidden transition-all duration-300
            bg-gradient-to-br from-white/[0.08] via-[#8F78F3]/10 to-transparent
            hover:from-[#8F78F3]/40 hover:via-[#5E3CF4]/30 hover:to-transparent
            hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(143,120,243,0.25)]"
        >
          <div
            className="bg-[rgba(12,12,20,0.85)] h-full w-full rounded-2xl px-4 py-3
              flex flex-col justify-between backdrop-blur-sm border border-white/[0.05]
              transition-all duration-300 group-hover:border-[#8F78F3]/30"
          >
            <div className="flex gap-3 items-center">
              <img
                src={card.image}
                alt={card.name}
                className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover ring-1 ring-white/[0.08] group-hover:ring-[#8F78F3]/40 transition-all"
              />
              <div>
                <h1 className="font-semibold text-sm md:text-base">{card.name}</h1>
                <span className="block text-xs md:text-sm font-medium bg-gradient-to-r from-[#8F78F3] to-[#5E3CF4] bg-clip-text text-transparent">
                  {card.position}
                </span>
              </div>
            </div>

            <p className="text-xs md:text-[13px] opacity-70 leading-snug mt-4 line-clamp-3 transition-all group-hover:opacity-100">
              {card.note}
            </p>

            {/* glowing border pulse */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl bg-gradient-to-r from-[#8F78F3]/10 via-[#5E3CF4]/10 to-transparent transition-all duration-500" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CardSlider() {
  return (
    <div className="overflow-hidden w-full flex flex-col gap-4 md:gap-8 relative py-4">
      <ScrollingRow items={CARDS} direction="left" duration={100} />
      <ScrollingRow items={CARDS} direction="right" duration={100} />
    </div>
  );
}