import bgImg from "../assets/images/hero/hero.png";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="flex items-center justify-center min-h-[85vh] flex-col gap-8 relative"
    >
      <h3 className="max-w-3xl text-center leading-8 text-[27px] font-bold text-white">
        Furniture designed to live in harmony, creating distinctive and timeless
        spaces
      </h3>
      <button className="text-[20px] text-white border-2 px-10 hover:bg-white hover:text-orange-400">
        Discover now
      </button>
      <div className="bg-black text-white px-10 py-3 absolute bottom-0 left-2">Do you know what is your decor style?</div>
    </div>
  );
};

export default Hero;
