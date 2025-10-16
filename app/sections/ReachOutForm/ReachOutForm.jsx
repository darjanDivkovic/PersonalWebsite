"use client";
import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import gsap from "gsap";
import CTAButton from "../../shared/components/CTAButton";

const ReachOutForm = () => {
  const leftGlowRef = useRef(null);
  const rightGlowRef = useRef(null);
  const [state, handleSubmit] = useForm("mzzjodgp"); // your form ID

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { duration: 3, ease: "sine.inOut" } });
    tl.to(leftGlowRef.current, { scale: 1.3, yPercent: -5, opacity: 0.7 }, 0)
      .to(rightGlowRef.current, { scale: 1.2, yPercent: 3, opacity: 0.7 }, 0);
    return () => tl.kill();
  }, []);

  if (state.succeeded) {
    return (
      <section className="text-center py-20">
        <h1 className="text-[32px] sm:text-[40px] font-raleway font-bold">
          ✅ Message sent successfully!
        </h1>
        <p className="text-gray-400 mt-4 text-[14px]">
          I’ll get back to you as soon as possible.
        </p>
      </section>
    );
  }

  return (
    <section className="relative flex flex-col items-center justify-center w-full 
      py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-0 
      rounded-2xl md:rounded-3xl overflow-hidden 
      bg-gradient-to-b from-[#0A0A0A] to-[#120B25]/20 shadow-[0_0_50px_-10px_rgba(0,0,0,0.7)]">

      {/* glows */}
      <div ref={leftGlowRef} className="absolute left-[-20%] sm:left-[-10%] bottom-[-25%] sm:bottom-[-20%]
        w-[40vh] sm:w-[55vh] md:w-[70vh] h-[40vh] sm:h-[55vh] md:h-[70vh]
        rounded-full blur-[120px] sm:blur-[140px] md:blur-[160px]
        bg-[radial-gradient(circle_at_center,_#8F78F3,_transparent)] opacity-80 -z-10" />
      <div ref={rightGlowRef} className="absolute right-[-20%] sm:right-[-10%] bottom-[-25%] sm:bottom-[-20%]
        w-[40vh] sm:w-[55vh] md:w-[70vh] h-[40vh] sm:h-[55vh] md:h-[70vh]
        rounded-full blur-[120px] sm:blur-[140px] md:blur-[160px]
        bg-[radial-gradient(circle_at_center,_#5E3CF4,_transparent)] opacity-80 -z-10" />

      <h1 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] xl:text-[46px] text-center font-raleway leading-tight px-2">
        Let’s build something <br />
        <span className="bg-gradient-to-r from-[#8F78F3] to-[#5E3CF4] bg-clip-text text-transparent">
          great together.
        </span>
      </h1>

      <p className="mt-3 sm:mt-4 text-[13px] sm:text-[14px] md:text-[15px] text-gray-400 text-center font-modernist max-w-[90%] sm:max-w-[520px]">
        Drop your work email and a quick note — I’ll get back to you on how I can help
        <strong className="text-white"> within 12h.</strong>
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12 w-full sm:w-[80%] md:w-[60%] max-w-[520px] text-[13px]"
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Input id="name" name="name" placeholder="Full Name" type="text" required />
          <Input id="email" name="email" placeholder="Work Email" type="email" required />
        </div>

        <Textarea id="message" name="message" placeholder="Note" required />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <div className="flex justify-center mt-5 sm:mt-6">
          <CTAButton
            text={state.submitting ? "Sending..." : "Send message"}
            type="submit"
            disabled={state.submitting}
        />
</div>
      </form>
    </section>
  );
};

/* Inputs */
const Input = ({ type = "text", placeholder, ...props }) => (
  <input
    type={type}
    placeholder={placeholder}
    {...props}
    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl 
    text-white placeholder-gray-500 text-[12px] sm:text-[13px]
    bg-[rgba(255,255,255,0.03)] border border-white/[0.07] backdrop-blur-lg
    shadow-[inset_0_0_10px_rgba(255,255,255,0.02)] transition-all duration-300
    hover:border-[#8F78F3]/30 focus:border-[#8F78F3]/60 focus:ring-2 focus:ring-[#8F78F3]/40 outline-none"
  />
);

const Textarea = ({ placeholder, ...props }) => (
  <textarea
    rows={4}
    placeholder={placeholder}
    {...props}
    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl 
    text-white placeholder-gray-500 text-[12px] sm:text-[13px]
    bg-[rgba(255,255,255,0.03)] border border-white/[0.07] backdrop-blur-lg resize-none
    shadow-[inset_0_0_10px_rgba(255,255,255,0.02)] transition-all duration-300
    hover:border-[#8F78F3]/30 focus:border-[#8F78F3]/60 focus:ring-2 focus:ring-[#8F78F3]/40 outline-none"
  />
);

export default ReachOutForm;
