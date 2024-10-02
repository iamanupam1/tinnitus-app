import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="bg-gray-100">
      <section
        className="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
        items-center"
      >
        <div className="h-full absolute top-0 left-0 z-0">
          <Image
            width={800}
            height={800}
            src="/images/Woman_Holding_Ear.jpg" // Path to your image
            alt="Cover background" // Alt text for accessibility
            className="w-full h-full object-cover opacity-20" // Use className for additional styles
          />
        </div>

        <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
          <div>
            <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              A better life starts with Tinnitus Management.
            </h1>
            <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">
              Empowering Providers with Tailored, Evidence-Based Tinnitus
              Counseling Strategies for Improved Patient Care
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
