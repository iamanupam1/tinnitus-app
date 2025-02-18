"use client";
import React, { useEffect } from "react";
import BaseLayoutComponent from "../component/base/base-layout";
import { Navbar } from "../component/base/navbar";
import FooterComponent from "../component/base/footer";
import SuicidePreventionSection from "../component/treatment-counseling/sucide-prevention";
import AlternativeTreatmentSection from "../component/treatment-counseling/alternative-treatments";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const TreatmentCounselingPage = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return; 

    const hash = window.location.hash.substring(1);
    if (!hash) return;

    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  const protocols = [
    {
      title: "Sound Therapy",
      description:
        "An intervention that utilizes specific sound patterns, such as white noise, nature sounds, or customized sound frequencies, to mask tinnitus and provide relief.",
      image: "/images/sound-therapy.webp",
      link: "/treatment-counseling/sound",
    },
    {
      title: "Cognitive Behavioral Therapy",
      description:
        "A psychological treatment aimed at reshaping negative thought patterns and emotional responses to tinnitus, empowering patients with effective coping strategies.",
      image: "/images/CBT.png",
      link: "/treatment-counseling/cbt",
    },
    {
      title: "Mindfulness Meditation",
      description:
        "A practice involving focused attention and awareness to help manage the stress and anxiety associated with tinnitus, promoting relaxation and well-being.",
      image: "/images/meditation.jpg",
      link: "/treatment-counseling/mindful",
    },
    {
      title: "Tinnitus Retraining Therapy",
      description:
        "A comprehensive approach combining sound therapy and counseling to retrain the brain, reducing the perception and emotional impact of tinnitus over time.",
      image: "/images/Neurophysiological model of tinnitus.jpg",
      link: "/treatment-counseling/trt",
    },
    {
      title: "Lenire",
      description:
        "Lenire is a non-invasive, FDA-approved medical device designed to treat tinnitus. It combines sound therapy with mild tongue stimulation to retrain the brain and reduce the perception of ringing in the ears. Lenire is backed by clinical trials and offers a personalized treatment plan supervised by healthcare professionals.",
      image: "/images/lenire.jpg",
      link: "/treatment-counseling/lenire",
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
      <section
        className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-white"
        id="protocols"
      >
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
                <p className="text-[#000000] line-clamp-4">
                  {protocol.description}
                </p>{" "}
                <Link
                  href={protocol.link}
                  className="my-5 group flex items-center w-fit gap-2 rounded-lg border border-[#502888] bg-white px-4 py-2 text-sm font-medium text-[#502888] shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  View Detail
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="treatment-counseling/other-protocols"
          className="my-5 group flex items-center w-fit gap-2 rounded-lg border border-[#502888] bg-white px-4 py-2 text-sm font-medium text-[#502888] shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          View Other Protocols & Strategies
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </section>
      <SuicidePreventionSection />
      <AlternativeTreatmentSection />
      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default TreatmentCounselingPage;
