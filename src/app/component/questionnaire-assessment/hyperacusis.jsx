import React from "react";
import DocxViewer from "../base/docs-preview";

const HyperacusisQuestionnairesComponent = () => {
  const docs = [
    {
      fileName: "Khalfa Hyperacusis",
      uri: "/docs/hyperacusis/Khalfa Hyperacusis.docx",
    },
    {
      fileName: "Khalfa Hyperacusis Scoring",
      uri: "/docs/hyperacusis/Khalfa Hyperacusis Scoring.docx",
    },
  ];
  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-10">
      <div className="mb-5">
        <p className="mt-2 leading-relaxed text-justify">
          The Khalfa Hyperacusis Handicap Questionnaire (Khalfa et al., 2002) is
          designed to evaluate the impact and severity of hyperacusis, a
          condition characterized by heightened sensitivity to sound. The
          questionnaire assesses emotional, social, and functional aspects of
          the condition, providing valuable insight into how hyperacusis affects
          the individuals daily life. Scoring enables practitioners to quantify
          the degree of hypersensitivity and tailor interventions to address
          specific patient needs effectively.
        </p>
      </div>
      <DocxViewer documents={docs} />
    </section>
  );
};

export default HyperacusisQuestionnairesComponent;
