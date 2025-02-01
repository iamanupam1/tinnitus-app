import React from "react";
import BaseLayoutComponent from "../component/base/base-layout";
import { Navbar } from "../component/base/navbar";
import FooterComponent from "../component/base/footer";
import Link from "next/link";
import Image from "next/image";

const EducationalInformationPage = () => {
  return (
    <BaseLayoutComponent>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Educational Information</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Exploring the Auditory System: From Sound Processing to Emotional
            Impact and Tinnitus
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Providing educational information is crucial in the treatment of
            tinnitus patients as it helps them understand their condition,
            manage expectations, and engage effectively in therapeutic
            interventions.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Anatomy of Auditory Systems Section */}
        <section className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <Image
              width={500}
              height={500}
              src="/images/Auditory Pathways.jpg"
              alt="Auditory System Anatomy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              Anatomy of Auditory Systems
            </h3>
            <p className="text-gray-700 mb-6">
              Explores the structure and function of the auditory pathway, from
              sound detection in the ear to processing in the brain.
            </p>
            <Link
              href="/education-information/auditory"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Limbic System Section */}
        <section className="flex flex-col md:flex-row-reverse items-center bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <Image
              width={500}
              height={500}
              src="/images/Limbic system.jpg"
              alt="Limbic System"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              Limbic System
            </h3>
            <p className="text-gray-700 mb-6">
              A key brain region involved in emotions, memory, and the
              processing of auditory stimuli.
            </p>
            <Link
              href="/education-information/limbic"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Tinnitus Impact Section */}
        <section className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <Image
              width={500}
              height={500}
              src="/images/tinnitus photo woman .jpg"
              alt="Tinnitus Impact"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              Tinnitus
            </h3>
            <p className="text-gray-700 mb-6">
              A condition characterized by the perception of ringing or other
              sounds in the ears, often linked to auditory system dysfunction.
            </p>
            <Link
              href="/education-information/tinnitus"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Hyperacusis Section */}
        <section className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              Hyperacusis
            </h3>
            <p className="text-gray-700 mb-6">
              An abnormal sensitivity to everyday sounds, leading to discomfort
              or pain.
            </p>
            <Link
              href="/education-information/tinnitus"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              width={500}
              height={500}
              src="/images/hyper.png"
              alt="Tinnitus Impact"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </div>
      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default EducationalInformationPage;
