import React from "react";
import DocxViewer from "../base/docs-preview";

const HearingHandicapQuestionnairesComponent = () => {
  const docs = [
    {
      fileName: "Hearing Handicap Inventory Screening",
      uri: "/docs/hearing/Hearing Handicap Inventory Screening HHIE-S.pdf",
    },
    {
      fileName: "HHIA",
      uri: "/docs/hearing/HHIA.pdf",
    },
    {
      fileName: "Self-Assessment-of-Communication",
      uri: "/docs/hearing/Self-Assessment-of-Communication.pdf",
    },
  ];
  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-10">
      <div className="mb-5">
        <p className="mt-2 leading-relaxed text-justify">
          The Hearing Handicap Inventory is a self-assessment tool used to
          evaluate the emotional and social effects of hearing loss on an
          individuals daily life. It measures the perceived impact of hearing
          difficulties in various situations, providing insight into the
          severity of the handicap. Scoring helps practitioners determine the
          extent of the hearing loss and guide appropriate interventions or
          rehabilitation strategies.
        </p>
      </div>
      <DocxViewer documents={docs} />
    </section>
  );
};

export default HearingHandicapQuestionnairesComponent;
