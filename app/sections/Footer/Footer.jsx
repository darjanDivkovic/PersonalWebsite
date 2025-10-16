import CTAButton from "../../shared/components/CTAButton";

const Footer = () => {
  return (
    <footer className="relative w-full font-modernist px-6 sm:px-10 py-12 md:py-20 overflow-hidden">
      {/* blurred background accent */}

      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0">
        {/* left section */}
        <div className="md:w-[55%]">
          <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold font-raleway leading-tight">
            I'm here to{" "}
            <span className="relative">
              help!
              <img
                src="/images/Underline.svg"
                className="absolute left-0 bottom-[-3px] w-full"
                alt="underline"
              />
            </span>
          </h1>

          <p className="text-[13px] sm:text-[14px] mt-6 sm:mt-8 opacity-80 font-raleway max-w-[90%]">
            Whether you’re building a bold new product, refining an existing
            experience, or exploring an idea that needs the right creative and
            technical partner — I’m here to help bring it to life with clarity,
            precision, and impact.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mt-10 sm:mt-14">
            <a href="https://calendly.com/darjan-developer/30min" target="_blank">
                <CTAButton />
              </a>
            <p className="text-[12px] sm:text-[13px] opacity-60 font-raleway">
              CEST GMT +2 🌎
            </p>
          </div>
        </div>

        {/* right section */}
        <div className="md:w-[40%] flex flex-col sm:flex-row justify-between text-[13px] gap-10 sm:gap-[25%]">
          {/* Links */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-[#8F78F3] font-bold mb-4 sm:mb-6">Links</h2>
              <p className="cursor-pointer hover:text-[#8F78F3] transition-colors">
                <a href="https://www.linkedin.com/in/darjan-divkovi%C4%87-171386163/" target="_blank">LinkedIn</a>
              </p>
              <p className="mt-4 sm:mt-6 cursor-pointer hover:text-[#8F78F3] transition-colors">
              <a href="https://github.com/darjanDivkovic" target="_blank">GitHub</a>
              </p>
            </div>

            <p className="mt-10 sm:mt-0 opacity-80">
              <a href="https://www.linkedin.com/in/darjan-divkovi%C4%87-171386163/details/recommendations/?detailScreenTabIndex=0" target="_blank">Recommendations</a></p>
          </div>

          {/* Contact */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-[#8F78F3] font-bold mb-4 sm:mb-6">Contact</h2>
              <p className="mt-2 sm:mt-4 opacity-80 break-words">
                darjan.developer@gmail.com
              </p>
              <p className="mt-4 sm:mt-6 opacity-80">+387 64 41 80 453</p>
            </div>

            <p className="mt-10 sm:mt-0 opacity-60 text-[12px]">
              © Darjan Divkovic — 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
