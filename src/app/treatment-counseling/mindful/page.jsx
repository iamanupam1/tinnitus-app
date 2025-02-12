import React from "react";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import FooterComponent from "../../component/base/footer";
import DocxViewer from "../../component/base/docs-preview";

const MindfulPage = () => {
  const mindful = [{
    fileName:
      "Mindfulness for tinnitus relief Handout",
    uri: "/docs/treatment/Mindfulness for tinnitus relief Handout.pdf",
  }]
  return (
    <BaseLayoutComponent>
      <Navbar />
      <section className="relative bg-gradient-to-r from-[#502888] to-[#2E847C] px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Mindfulness Medication</h1>
        </div>
      </section>
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-white bg-opacity-10">
        <p className="mt-2 leading-relaxed text-justify">
          MindfulTinnitusRelief.com gives you easy access to the MBTSR Tinnitus
          Relief Program in the comfort of your own home, accessible at any
          convenient time to fit your busy schedule, no matter what your time
          zone. There are elements of deep breathing, yoga, relaxation and
          meditation throughout the course to reframe your relationship with
          tinnitus. You will learn techniques that will empower you to maintain
          balance and comfort in your everyday life.
        </p>
        <div className="mt-4">
          <DocxViewer documents={mindful} showTitle={false}/>
        </div>
      </section>
      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default MindfulPage;
