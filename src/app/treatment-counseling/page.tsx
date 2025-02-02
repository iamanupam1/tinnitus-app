import React from "react";
import BaseLayoutComponent from "../component/base/base-layout";
import { Navbar } from "../component/base/navbar";
import FooterComponent from "../component/base/footer";
import OtherProtocolsSection from "../component/treatment-counseling/other-protocol";
import OtherTinnitusSection from "../component/treatment-counseling/tinnitus-protocols";
import Image from "next/image";

const TreatmentCounselingPage = () => {
  const protocols = [
    {
      title: "Mindfulness Meditation",
      description:
        "A practice involving focused attention and awareness to help manage the stress and anxiety associated with tinnitus, promoting relaxation and well-being.",
      image: "/images/meditation.jpg",
    },
    {
      title: "Sound Therapy",
      description:
        "An intervention that utilizes specific sound patterns, such as white noise, nature sounds, or customized sound frequencies, to mask tinnitus and provide relief.",
      image: "/images/candle in dark room.jpg",
    },
    {
      title: "Cognitive Behavioral Therapy",
      description:
        "A psychological treatment aimed at reshaping negative thought patterns and emotional responses to tinnitus, empowering patients with effective coping strategies.",
      image: "/images/CBT.png",
    },
    {
      title: "Tinnitus Retraining Therapy",
      description:
        "A comprehensive approach combining sound therapy and counseling to retrain the brain, reducing the perception and emotional impact of tinnitus over time.",
      image: "/images/Neurophysiological model of tinnitus.jpg",
    },
  ];

  return (
    <BaseLayoutComponent>
      <Navbar />
      <section className="relative bg-gradient-to-r from-[#502888] to-[#2E847C] px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Treatment and Counseling</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive treatment and counseling for chronic tinnitus
            significantly enhance quality of life by reducing symptoms and
            empowering individuals with effective coping strategies.
          </p>
        </div>
      </section>
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-[#502888] bg-opacity-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image
              width={500}
              height={500}
              src="/images/counseling photo.jpg"
              alt="counseling photo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-[#502888]">
              Comprehensive Care and Counseling
            </h2>
            <p className="text-[#000000] text-lg leading-relaxed">
              Treatment and proper instructive counseling for chronic tinnitus
              offer significant benefits, improving the quality of life for
              those affected. Effective treatment strategies can help reduce the
              perception of tinnitus and alleviate its impact on daily
              functioning. Instructive counseling provides essential education
              about the condition, helping patients understand its nature,
              manage their symptoms, and reduce anxiety. This comprehensive
              approach empowers individuals to develop coping mechanisms,
              reduces the psychological burden, and enhances overall well-being,
              fostering a sense of control and improved life satisfaction
              despite the persistent nature of tinnitus.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-[#502888]">
          Treatment Protocols
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {protocols.map((protocol, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-lg p-6 
                         transform transition-all duration-500 ease-in-out
                         border border-[#502888] border-opacity-20"
            >
              <div className="w-full md:w-1/3">
                <Image
                  width={200}
                  height={200}
                  src={protocol.image}
                  alt={protocol.title}
                  className="w-full h-50 object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold mb-3 text-[#502888]">
                  {protocol.title}
                </h3>
                <p className="text-[#000000]">{protocol.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <OtherProtocolsSection />
      <OtherTinnitusSection />
      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default TreatmentCounselingPage;
