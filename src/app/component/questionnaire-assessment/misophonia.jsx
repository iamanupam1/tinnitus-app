import React from "react";
import DocxViewer from "../base/docs-preview";

const MisophoniaQuestionnairesComponent = () => {
  const docs = [
    {
      fileName: "Amsterdam Misophonia Scale",
      uri: "/docs/misophonia/Amsterdam Misophonia Scale.docx",
    },
    {
      fileName: "MISOPHONIA ASSESSMENT QUESTIONNAIRE (MAQ)",
      uri: "/docs/misophonia/MISOPHONIA ASSESSMENT QUESTIONNAIRE (MAQ).pdf",
    },
    {
      fileName: "Misophonia Case History",
      uri: "/docs/misophonia/Misophonia Case History.docx",
    },
    {
      fileName: "Scoring for MAQ",
      uri: "/docs/misophonia/Scoring for Misophonia  Assessment Questionnaire (MAQ) .docx",
    },
  ];
  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-10">
      <div className="mb-5">
        <p className="mt-2 leading-relaxed text-justify">
          The Misophonia Questionnaire is a tool used to assess the severity and
          impact of misophonia, a condition characterized by intense emotional
          reactions to specific sounds. This questionnaire evaluates the
          emotional, cognitive, and behavioral aspects of the condition,
          offering insight into how misophonia affects daily functioning.
          Scoring helps practitioners understand the extent of the disorder,
          enabling them to develop personalized management strategies for the
          individual.
        </p>
      </div>
      <DocxViewer documents={docs} />
    </section>
  );
};

export default MisophoniaQuestionnairesComponent;
