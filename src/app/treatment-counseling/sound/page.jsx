import React from "react";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import FooterComponent from "../../component/base/footer";
import DocxViewer from "../../component/base/docs-preview";

const SoundTherapyPage = () => {
  const auditoryEffects = [
    "Decreases the 'gain' in the cochlea",
    "Detunes the pattern of the neuronal activities in the ANS",
    "Brightens up the auditory room",
    "Reduces the way LS evaluates the magnitude of perceived tinnitus loudness",
  ];
  const allDocs = {
    sound: [
      {
        fileName: "The Best Apps for Tinnitus",
        uri: "/docs/treatment/The Best Apps for Tinnitus.docx",
      },
      {
        fileName:
          "Sound Therapy Apps",
        uri: "/docs/treatment/Sound Therapy Apps.docx",
      },
      {
        fileName: "Tinnitus Sound Therapy Products",
        uri: "/docs/treatment/Tinnitus Sound Therapy Products.docx",
      },
    ],
  };
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/candles in light room.jpg"
              alt="Candle in dark"
              className="w-full h-96 object-cover transition-transform duration-300"
            />
             <p className="leading-relaxed capitalize p-2 text-center">candles in light room</p>
            <div className="absolute inset-0 bg-black bg-opacity-0"></div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/candle in dark room.jpg"
              alt="Candle in light"
              className="w-full h-96 object-cover transition-transform duration-300"
            />
            <p className="leading-relaxed capitalize p-2 text-center">candle in dark room</p>
            <div className="absolute inset-0 bg-black bg-opacity-0"></div>
          </div>
        </div>
        <div className="mt-4">
          <DocxViewer documents={allDocs.sound} />
        </div>
      </section>

      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default SoundTherapyPage;
