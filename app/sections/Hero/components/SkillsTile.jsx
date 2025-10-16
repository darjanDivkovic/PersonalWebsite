const SkillsTile = () => {
  return (
    <div className="w-full mt-[10%] xl:mt-[5%] bg-black rounded-md border border-white/10 z-10">
      {/* MOBILE: 2-COLUMN GRID - NO ICONS */}
      <div className="grid grid-cols-2 gap-6 p-6 xl:hidden">
        <div className="text-center">
          <h1 className="text-[32px] font-bold">5+</h1>
          <p className="text-[12px] opacity-60 mt-2">Years Exp</p>
        </div>
        
        <div className="text-center">
          <h1 className="text-[32px] font-bold">3</h1>
          <p className="text-[12px] opacity-60 mt-2">Companies</p>
        </div>
        
        <div className="text-center">
          <h1 className="text-[32px] font-bold">7</h1>
          <p className="text-[12px] opacity-60 mt-2">Projects</p>
        </div>
        
        <div className="text-center">
          <h1 className="text-[32px] font-bold">15K</h1>
          <p className="text-[12px] opacity-60 mt-2">Hours</p>
        </div>
      </div>

      {/* DESKTOP: YOUR ORIGINAL */}
      <div className="hidden xl:flex justify-between px-8 pt-2.5 pb-5">
        <div className="flex items-end gap-3 pt-1">
          <h1 className="text-[32px]">5+</h1>
          <p className="text-[13px] pb-1.5 opacity-60">Years of Experience</p>
        </div>
        <div className="flex items-end gap-3">
          <h1 className="text-[32px]">3</h1>
          <p className="text-[13px] pb-1.5 opacity-60">International Companies</p>
        </div>
        <div className="flex items-end gap-3">
          <h1 className="text-[32px]">7</h1>
          <p className="text-[13px] pb-1.5 opacity-60">Different Projects</p>
        </div>
        <div className="flex items-end gap-3">
          <h1 className="text-[32px]">15K</h1>
          <p className="text-[13px] pb-1.5 opacity-60">Hours coding</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsTile;