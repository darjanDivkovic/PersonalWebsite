import CardSlider from "./components/CardSlider";

const Recommendations = () => {
    return (
        <>
        <div className="px-[15%] flex flex-col items-center xl:items-start text-center xl:text-start">
            <p className="font-pacifico border w-min rounded-full px-4 border-white/20 py-0.5 bg-gradient-to-r from-[#8F78F3] to-[#43338F] bg-clip-text text-transparent">Recommendations</p>
              <h1 className="text-[24px] xl:text-[40px] leading-none font-bold mt-6">
             <span className="relative font-raleway">Don’t just
              <img src="/images/Underline.svg" className="absolute left-0 b-0" /></span>
              <br />
              <span className="font-raleway">take my word for it.</span>
            </h1>

            <p className="mt-6 text-[#b2b2b2] shadow-xxl text-[13px] modernist">Insights from those who’ve seen me design, code, and ship in action.</p>
        </div>
      
        <div className="mt-22">
          <CardSlider />
        </div>
      
        </>
    )
}

export default Recommendations;