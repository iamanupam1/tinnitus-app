import React from "react";
import Link from "next/link";
import Image from "next/image";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import FooterComponent from "../../component/base/footer";
const TinnitusInformationPage = () => {
  return (
    <BaseLayoutComponent>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Tinnitus Information</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Tinnitus is the perception of sound, such as ringing, buzzing, or
            hissing, in the ears or head without an external auditory stimulus
          </p>
        </div>
      </section>

      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default TinnitusInformationPage;
