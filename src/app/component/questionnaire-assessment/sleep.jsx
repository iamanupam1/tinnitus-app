import React from "react";
import DocxViewer from "../base/docs-preview";

const SleepQuestionnairesComponent = () => {
  const docs = [
    {
      fileName: "Epworth Sleepiness Scale",
      uri: "/docs/sleep/Epworth Sleepiness Scale.pdf",
    },
  ];
  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-10">
      <div className="mb-5">
        <p className="mt-2 leading-relaxed text-justify">
          The Epworth Sleepiness Scale is a widely used questionnaire designed
          to measure daytime sleepiness. It asks individuals to rate their
          likelihood of falling asleep in various everyday situations. The total
          score helps assess the severity of sleepiness, providing valuable
          insights into potential sleep disorders such as sleep apnea or
          narcolepsy. Practitioners use the results to guide diagnosis and
          develop appropriate treatment plans.
        </p>
      </div>
      <DocxViewer documents={docs} />
    </section>
  );
};

export default SleepQuestionnairesComponent;
