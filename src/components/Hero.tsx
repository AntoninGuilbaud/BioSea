
import { GlobeDemo } from "./ui/GlobeMap";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { WavyBackgroundDemo } from "./ui/Backgroundwave";

const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };
  return (
    <div className="relative h-screen max-w-screen overflow-hidden">
      {/* Fond animé */}
      <WavyBackgroundDemo />

      <div className="relative flex flex-col md:flex-row gap-0 md:gap-10 justify-center items-center min-h-screen px-0 md:px-20 pt-60 md:pt-0 max-h-screen">
        {/* Effet de texte */}
        <div className="text-center md:text-left">
          <TextGenerateEffect
            words="Explorez l’équilibre fragile entre l’océan et l’humanité."
            className="text-4xl md:text-6xl z-10"
          />
          <button
            onClick={handleScroll}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-5 md:mt-0 mb-6"
          >
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1e40af_0%,#ffffee_50%,#1e40af_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
              En savoir plus
            </span>
          </button>
        </div>
        <GlobeDemo />
        {/* Globe Map */}

      </div>
    </div>
  );
};

export default Hero;


