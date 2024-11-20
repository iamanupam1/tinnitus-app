import React from "react";
import DocxViewer from "../base/docs-preview";

const DepressionQuestionnairesComponent = () => {
  const allDocs = {
    gds: [
      {
        fileName: "Geriatric Depression Scale",
        uri: "/docs/depression/Geriatric Depression Scale Short Form15.pdf",
      },
    ],
    phq: [
      {
        fileName: "PHQ Patient Health Questionnaire",
        uri: "/docsdepression/PHQ Patient Health Questionnaire.pdf",
      },
    ],
    beck: [
      {
        fileName: "Beck Anxiety Inventory (BAI)",
        uri: "/docs/depression/Beck Anxiety Inventory (BAI).pdf",
      },
      {
        fileName: "Beck Depression Inventory",
        uri: "/docs/depression/Beck Depression Inventory.docx",
      },
      {
        fileName: "Scoring Beck Depression Inventory",
        uri: "/docs/depression/Scoring Beck Depression Inventory.pdf",
      },
    ],
  };

  return (
    <section className="bg-white text-black px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-10">
      <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-teal-800 mb-4">
          Geriatric Depression Scale (GDS)
        </h3>
        <p className="mt-2 leading-relaxed text-justify">
          The Geriatric Depression Scale (GDS) is a screening tool designed to
          identify symptoms of depression in older adults. It consists of simple
          yes/no questions that assess emotional well-being, energy levels, and
          social engagement. Scoring provides a measure of depressive symptoms,
          helping clinicians determine the need for further evaluation or
          intervention tailored to the elderly population.
        </p>
        <div className="mt-4">
          <DocxViewer documents={allDocs.gds} />
        </div>
      </div>
      <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-teal-800 mb-4">
          Patient Health Questionnaire (PHQ-9)
        </h3>
        <p className="mt-2 leading-relaxed text-justify">
          The Patient Health Questionnaire (PHQ-9) is a widely used screening
          tool for diagnosing and measuring the severity of depression. It
          assesses the frequency of depressive symptoms over the past two weeks,
          including mood, sleep, appetite, and concentration. Scoring allows
          healthcare providers to evaluate the level of depression and plan
          appropriate treatment or referrals.
        </p>
        <div className="mt-4">
          <DocxViewer documents={allDocs.phq} />
        </div>
      </div>
      <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-teal-800 mb-4">
          Beck Depression Inventory (BDI)
        </h3>
        <p className="mt-2 leading-relaxed text-justify">
          The Beck Depression Inventory (BDI) is a self-report questionnaire
          used to measure the intensity of depressive symptoms. It evaluates
          emotional, cognitive, and physical aspects of depression, such as
          sadness, self-criticism, and energy levels. Scoring provides a
          quantitative assessment of depression severity, guiding clinicians in
          diagnosis and treatment planning.
        </p>
        <div className="mt-4">
          <DocxViewer documents={allDocs.beck} />
        </div>
      </div>
    </section>
  );
};

export default DepressionQuestionnairesComponent;
