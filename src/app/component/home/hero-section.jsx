import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="bg-[#502888] bg-opacity-10">
      <section
        className="relative bg-gradient-to-r from-[#502888] via-[#3F5682] to-[#2E847C] px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
        items-center cover"
      >
        <div className="h-full absolute top-0 left-0 z-0">
          <Image
            width={800}
            height={800}
            src="/images/Woman_Holding_Ear.jpg"
            alt="Cover background"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>

        <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
          <div>
            <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              A better life starts with Tinnitus Management.
            </h1>
            <p className="text-white text-xl md:text-2xl leading-snug mt-4">
              Empowering Providers with Tailored, Evidence-Based Tinnitus
              Counseling Strategies for Improved Patient Care
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
