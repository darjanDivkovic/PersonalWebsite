const CTAButton = ({ text = "Get in touch", type = "button", disabled = false }) => {
  return (
    <div className="relative w-fit p-[1px] rounded-[12px] bg-gradient-to-r from-transparent to-white max-h-[50px]">
      <button
        type={type}
        disabled={disabled}
        className="rounded-[12px] bg-gradient-to-r from-[#5E3CF4] to-[#8F78F3] glowbtn flex items-center px-16 py-2 max-h-[50px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="text-[14px] font-modernist">{text}</span>
      </button>
    </div>
  );
};

export default CTAButton;