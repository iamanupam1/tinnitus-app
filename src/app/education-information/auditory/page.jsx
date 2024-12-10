import React from "react";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import FooterComponent from "../../component/base/footer";
import Link from "next/link";
import Image from "next/image";

const AuditoryInformationPage = () => {
  return (
    <BaseLayoutComponent>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6"> Anatomy of Auditory Systems</h1>
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

      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default AuditoryInformationPage;
