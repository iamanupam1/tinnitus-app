import React from "react";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import FooterComponent from "../../component/base/footer";
import DocxViewer from "../../component/base/docs-preview";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const MindfulPage = () => {
  const mindful = [
    {
      fileName: "Mindfulness for tinnitus relief Handout",
      uri: "/docs/treatment/Mindfulness for tinnitus relief Handout.pdf",
    },
  ];
  return (
    <BaseLayoutComponent>
      <Navbar />
      <section className="relative bg-gradient-to-r from-[#502888] to-[#2E847C] px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Mindfulness Medication</h1>
          <div className="flex justify-between mt-12">
            <Link
              href="/treatment-counseling/cbt"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition duration-300 text-white px-6 py-3 rounded-full"
            >
              <ChevronLeft />
              Cognitive Behavioral Therapy
            </Link>

            <Link
              href="/treatment-counseling/trt"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition duration-300 text-white px-6 py-3 rounded-full"
            >
              Tinnitus Retraining Therapy
              <ChevronRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-white bg-opacity-10">
        <div
          className="relative h-[400px] rounded-xl overflow-hidden mb-8"
        >
          <Image
            src="/images/mindfulness.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            alt="Mindfulness Practice"
            className="transition-transform hover:scale-105 duration-500"
          />
        </div>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">
            MindfulTinnitusRelief.com gives you easy access to the MBTSR
            Tinnitus Relief Program in the comfort of your own home, accessible
            at any convenient time to fit your busy schedule, no matter what
            your time zone.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            There are elements of deep breathing, yoga, relaxation and
            meditation throughout the course to reframe your relationship with
            tinnitus. You will learn techniques that will empower you to
            maintain balance and comfort in your everyday life.
          </p>

          <Link
            href="https://mindfultinnitusrelief.com/"
            target="_blank"
            className="inline-flex items-center gap-2 text-[#502888] hover:text-[#2E847C] transition-colors px-6 py-3 bg-gray-50 rounded-lg hover:bg-gray-100"
          >
            Visit MindfulTinnitusRelief.com
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
        <div className="mt-4">
          <DocxViewer documents={mindful} showTitle={false} />
        </div>
      </section>
      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default MindfulPage;
