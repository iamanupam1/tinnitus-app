import React from "react";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import FooterComponent from "../../component/base/footer";
import DocxViewer from "../../component/base/docs-preview";

const CBTPage = () => {
  const cbt = [{
    fileName:
      "QUIETMIND Leaflet V9 (1)",
    uri: "/docs/treatment/QUIETMIND Leaflet V9 (1).pdf",
  }]
  return (
    <BaseLayoutComponent>
      <Navbar />
      <section className="relative bg-gradient-to-r from-[#502888] to-[#2E847C] px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Cognitive Behavioral Therapy (CBT)
          </h1>
        </div>
      </section>
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-white bg-opacity-10">
        <p className="mt-2 leading-relaxed text-justify">
          Cognitive Behavioral Therapy (CBT) is a structured, time-limited
          psychotherapy that focuses on identifying and changing negative
          thought patterns and behaviors. It aims to help individuals develop
          healthier coping mechanisms and improve emotional regulation by
          addressing the connections between thoughts, feelings, and actions.
          Dialectical Behavior Therapy (DBT) is a type of psychotherapy that
          combines cognitive-behavioral techniques with mindfulness practices.
          It focuses on helping individuals manage intense emotions, improve
          relationships, and develop skills for coping with distress, with a
          particular emphasis on balancing acceptance and change. Referral for
          these treatments to mental health professionals.
        </p>
        <div className="mt-4">
          <DocxViewer documents={cbt} />
        </div>
      </section>

      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default CBTPage;
