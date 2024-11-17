"use client";
import React from "react";
import Accordion from "./accordion";
import DocxViewer from "../base/docs-preview";

const TinnitusQuestionnairesComponent = () => {
  const docs = [
    { fileName: "Document 1.docx", uri: "/docs/ITQ.docx" },
    { fileName: "Document 2.docx", uri: "/docs/ITQ.docx" },
    // Add more files as needed
  ];
  const ITQView = () => {
    return (
      <div>
        <p>
          A screening tool used to gather initial information about the
          patients tinnitus symptoms and assess its impact on daily life. This
          helps in determining whether tinnitus is their primary concern.
        </p>
        <DocxViewer documents={docs} />
      </div>
    );
  };
  const tinnitusItems = [
    {
      title: "Initial Tinnitus Questionnaire (ITQ)",
      CustomComponent: ITQView,
    },
    {
      title: "TH Inventory (Newman et al) THI",
      content:
        "A standardized questionnaire that evaluates the severity and emotional impact of tinnitus on the patient. It helps audiologists understand how tinnitus is affecting the patient's quality of life.",
    },
    {
      title: "Tinnitus Functional Index (THI)",
      content:
        "An evidence-based assessment tool used to measure the functional impact of tinnitus on a patient's daily activities, sleep, concentration, and emotional well-being. It helps track treatment progress.",
    },
    {
      title: "Client Oriented Scale of Improvement in Tinnitus (COSIT)",
      content:
        "A patient-centered tool that measures individual improvements in tinnitus symptoms. Based on the Client-Oriented Scale of Improvement (COSI), it helps audiologists assess the effectiveness of tinnitus management strategies.",
    },
    {
      title: "Misc Screener",
      content:
        "A brief questionnaire designed to screen for common causes and contributing factors to tinnitus, ensuring that the patient's main concern is properly identified and addressed during the assessment.",
    },
  ];
  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-10">
      <div className="mb-5">
        <p className="mt-2 leading-relaxed text-justify">
          These questionnaires help assess the severity, impact, and
          characteristics of tinnitus. They aim to gather information about the
          patients tinnitus experience, including its duration, intensity, and
          effects on daily life, enabling the practice to tailor an appropriate
          treatment plan.
        </p>
      </div>
      <Accordion items={tinnitusItems} openDefault />
    </section>
  );
};

export default TinnitusQuestionnairesComponent;
