import React from "react";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import FooterComponent from "../../component/base/footer";
import DocxViewer from "../../component/base/docs-preview";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const SoundTherapyPage = () => {
  const auditoryEffects = [
    "Decreases the 'gain' in the cochlea",
    "Detunes the pattern of the neuronal activities in the ANS",
    "Brightens up the auditory room",
    "Reduces the way LS evaluates the magnitude of perceived tinnitus loudness",
  ];

  const allApps = [
    {
      name: "Buddhify",
      imageUrl: "/images/sound/buddhify.webp",
      link: "https://buddhify.com/",
    },
    {
      name: "Calm",
      imageUrl: "/images/sound/calm-icon.webp",
      link: "https://www.calm.com/",
    },
    {
      name: "headspace",
      imageUrl: "/images/sound/headspace.webp",
      link: "https://www.headspace.com/",
    },
    {
      name: "myNoise",
      imageUrl: "/images/sound/myNoise.webp",
      link: "https://mynoise.net/",
    },
    {
      name: "Sound Pillow",
      imageUrl: "/images/sound/Pillow_Sound-150x150.webp",
      link: "https://www.soundpillow.com/product/10-new-sound-pillow-tinnitus-veteran-first-responder-hospital-staff-asd/ ",
    },
    {
      name: "Relax Melodies",
      imageUrl: "/images/sound/Relax-Melodies.webp",
      link: "",
    },
    {
      name: "Resound Relief",
      imageUrl: "/images/sound/Resound-Relief.webp",
      link: "https://www.resound.com/en-us/hearing-aids/apps/relief",
    },
    {
      name: "Simply Noise",
      imageUrl: "/images/sound/Simply-Noise.webp",
      link: "https://simplynoise.com/",
    },
    {
      name: "Sleep Phones",
      imageUrl: "/images/sound/Sleep Phones.jpg",
      link: "https://www.sleepphones.com/ ",
    },
    {
      name: "Starkey Relax",
      imageUrl: "/images/sound/Starkey-Relax.webp",
      link: "https://www.starkey.com/hearing-aids/apps",
    },
    {
      name: "Tao Mix",
      imageUrl: "/images/sound/Tao-Mix.webp",
      link: "",
    },
    {
      name: "Whist Tinnitus Relief",
      imageUrl: "/images/sound/Whist-Tinnitus-Relief.webp",
      link: "https://www.sens.com/products/whist-custom-sound-therapy-for-tinnitus/overview/",
    },
    {
      name: "White Noise Lite",
      imageUrl: "/images/sound/White-Noise-Lite.webp",
      link: "https://www.tmsoft.com/white-noise/",
    },
  ];
  const allAids = [
    {
      name: "Oticon Intent",
      imageUrl: "/images/sound/Oticon Intent.jpg",
      link: "https://www.oticon.com/solutions/intent",
    },
    {
      name: "Widex SmartRIC",
      imageUrl:
        "/images/sound/Widex_SmartRIC_charger-on-table_bag_1920x1080.webp",
      link: "https://www.widex.com/en-us/hearing-aids/smartric/",
    },
  ];
  const allDocs = {
    sound: [
      {
        fileName: "The Best Apps for Tinnitus",
        uri: "/docs/treatment/The Best Apps for Tinnitus.docx",
      },
      {
        fileName: "Sound Therapy Apps",
        uri: "/docs/treatment/Sound Therapy Apps.docx",
      },
      {
        fileName: "Tinnitus Sound Therapy Products",
        uri: "/docs/treatment/Tinnitus Sound Therapy Products.docx",
      },
    ],
    thl: [
      {
        fileName: "Real Ear Measures",
        uri: "/docs/protocols/REAL EAR MEASURES for sound generators.docx",
      },
      {
        fileName: "Stochastic Resonance",
        uri: "/docs/protocols/Stochastic resonance definition.docx",
      },
    ],
  };

  const AppCard = ({ key, name, imageUrl, link }) => (
    <Link
      key={key}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline hover:text-blue-400"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Image
          width={100}
          height={100}
          objectFit="cover"
          src={imageUrl}
          alt={`${name} app icon`}
          className="h-20 w-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-center capitalize">{name}</h3>
      </div>
    </Link>
  );

  const HearingAppCard = ({ key, name, imageUrl, link }) => (
    <Link
      key={key}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline hover:text-blue-400"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Image
          width={100}
          height={100}
          objectFit="cover"
          src={imageUrl}
          alt={`${name} app icon`}
          className="h-20 w-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-center capitalize">{name}</h3>
      </div>
    </Link>
  );

  return (
    <BaseLayoutComponent>
      <Navbar />
      <section className="relative bg-gradient-to-r from-[#502888] to-[#2E847C] px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Sound Therapy </h1>
        </div>
      </section>
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-white bg-opacity-10">
        <p className="mt-2 leading-relaxed text-justify">
          Sound therapy for tinnitus has been recognized as a very important
          contributor in treating tinnitus because it will help decrease the
          central gain in the cochlea, detune the pattern of neuronal activity
          in the autonomic nervous system, “brighten up” the auditory
          environment, and reduce the way the limbic system evaluated the
          magnitude of the perceived tinnitus loudness.
        </p>
        <div className="my-5">
          <ul>
            {auditoryEffects.map((item, i) => (
              <li key={i} className="flex items-start align-center space-x-2">
                <span className="text-teal-700 mt-1 semibold">•</span>
                <span className="capitalize font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-gray-100">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#502888] mb-4">
            Sound Oasis
          </h2>
          <div className="space-y-4">
            <Image
              width={100}
              height={100}
              objectFit="cover"
              src="/images/sound-therapy.webp"
              alt={`app icon`}
              className="h-100 w-100"
            />
            <p className="text-gray-700 leading-relaxed">
              Sound Oasis offers innovative tinnitus relief solutions developed
              by leading experts like Dr. Jeffrey Thompson and Dr. Lee Bartel.
              Their approach combines high and low-frequency sounds embedded in
              pleasant musical compositions and nature sounds to effectively
              mask tinnitus. The company provides a wide range of options,
              including sound machines, mobile apps, 8-hour MP3 downloads, and
              specialized speakers, allowing users to customize their tinnitus
              therapy for both day and night use. Sound Oasis emphasizes the
              importance of experimenting with different sounds to find the most
              effective relief, recognizing that tinnitus affects individuals
              differently. Their products aim to help the millions of Americans
              suffering from tinnitus to improve sleep quality and overall
              well-being. Many tinnitus therapy sound options including sound
              therapy systems, sound pillow, pillow speakers, sound machines, SD
              cards with sound recordings, etc.
            </p>

            <Link
              href="https://www.soundoasis.com/product-category/tinnitus-solutions/"
              className="group flex items-center gap-2 rounded-lg text-sm font-medium text-[#502888]"
            >
              Read More
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/candles in light room.jpg"
              alt="Candle in dark"
              className="w-full h-96 object-cover transition-transform duration-300"
            />
            <p className="leading-relaxed capitalize p-2 text-center">
              candles in light room
            </p>
            <div className="absolute inset-0 bg-black bg-opacity-0"></div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/candle in dark room.jpg"
              alt="Candle in light"
              className="w-full h-96 object-cover transition-transform duration-300"
            />
            <p className="leading-relaxed capitalize p-2 text-center">
              candle in dark room
            </p>
            <div className="absolute inset-0 bg-black bg-opacity-0"></div>
          </div>
        </div>
        <div className="my-12">
          <h2 className="text-2xl font-bold text-[#502888] mb-8">
            Apps for Sound Therapy
          </h2>
          <div className="flex gap-4 flex-wrap">
            {allApps.map((app) => (
              <AppCard
                key={app.name}
                name={app.name}
                imageUrl={app.imageUrl}
                link={app.link}
              />
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#502888] mb-8">
            Hearing Aids/ Combo Devices
          </h2>
          <div className="flex gap-4 flex-wrap">
            {allAids.map((app) => (
              <HearingAppCard
                key={app.name}
                name={app.name}
                imageUrl={app.imageUrl}
                link={app.link}
              />
            ))}
          </div>

          <div className="mt-4">
            <DocxViewer documents={allDocs.thl} />
          </div>
        </div>
      </section>

      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default SoundTherapyPage;
