import React from "react";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import FooterComponent from "../../component/base/footer";

const TRTPage = () => {
  return (
    <BaseLayoutComponent>
      <Navbar />
      <section className="relative bg-gradient-to-r from-[#502888] to-[#2E847C] px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Lenire</h1>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-white bg-opacity-10">
        <p className="mt-2 leading-relaxed text-justify">
          Lenire is a neuromodulation device used in the treatment of tinnitus,
          developed by the Irish company Neuromod Devices. It employs bimodal
          neuromodulation, which combines sound stimulation (via headphones)
          with mild electrical stimulation of the tongue (via a small intraoral
          device). This approach aims to retrain the brain auditory pathways and
          reduce the perception of tinnitus over time.
        </p>
        <div className="mt-4">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/kZlU3-B_CbU?si=BwZ9aslMTQHOj1WL&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default TRTPage;
