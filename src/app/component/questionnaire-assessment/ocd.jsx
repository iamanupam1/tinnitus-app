import React from "react";
import DocxViewer from "../base/docs-preview";

const OCDQuestionnairesComponent = () => {
  const docs = [
    {
      fileName: "Yale Brown OCD",
      uri: "/docs/ocd/Yale Brown OCD.docx",
    },
  ];
  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-10">
      <div className="mb-5">
        <p className="mt-2 leading-relaxed text-justify">
          The Yale-Brown Obsessive-Compulsive Scale (Y-BOCS) is a standardized
          tool used to assess the severity of obsessive-compulsive disorder
          (OCD). It evaluates the time spent on obsessions and compulsions, the
          level of distress caused, and their impact on daily functioning.
          Scoring provides a comprehensive measure of OCD severity, helping
          clinicians monitor progress and tailor treatment approaches to the
          individual needs.
        </p>
      </div>
      <DocxViewer documents={docs} />
    </section>
  );
};

export default OCDQuestionnairesComponent;
