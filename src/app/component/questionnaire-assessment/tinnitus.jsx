import React from "react";
import Accordion from "./accordion";
import DocxViewer from "../base/docs-preview";

const TinnitusQuestionnairesComponent = () => {
  const ITQView = () => {
    const docs = [
      {
        fileName: "Initial Tinnitus Questionnaire",
        uri: "/docs/tinnitus/ITQ.docx",
      },
    ];
    return (
      <div>
        <p>
          A screening tool used to gather initial information about the patients
          tinnitus symptoms and assess its impact on daily life. This helps in
          determining whether tinnitus is their primary concern.
        </p>
        <DocxViewer documents={docs} />
      </div>
    );
  };

  const THIView = () => {
    const docs = [
      {
        fileName: "THI - Tinnitus Handicap Inventory",
        uri: "/docs/tinnitus/THI - Tinnitus Handicap Inventory.docx",
      },
      {
        fileName: "THI Scoring",
        uri: "/docs/tinnitus/THI Scoring.docx",
      },
    ];
    return (
      <div>
        <p>
          A standardized questionnaire that evaluates the severity and emotional
          impact of tinnitus on the patient. It helps audiologists understand
          how tinnitus is affecting the patients quality of life.
        </p>
        <DocxViewer documents={docs} />
      </div>
    );
  };

  const TFIView = () => {
    const docs = [
      {
        fileName: "TFI with Scoring",
        uri: "/docs/tinnitus/TFI+with+scoring.pdf",
      },
    ];
    return (
      <div>
        <p>
          An evidence-based assessment tool used to measure the functional
          impact of tinnitus on a patients daily activities, sleep,
          concentration, and emotional well-being. It helps track treatment
          progress.
        </p>
        <DocxViewer documents={docs} />
      </div>
    );
  };

  const COSITView = () => {
    const docs = [
      {
        fileName: "Client Oriented Improvement in Tinnitus",
        uri: "/docs/tinnitus/Client Oriented Scale of Improvement in Tinnitus (COSIT).doc",
      },
    ];
    return (
      <div>
        <p>
          A patient-centered tool that measures individual improvements in
          tinnitus symptoms. Based on the Client-Oriented Scale of Improvement
          (COSI), it helps audiologists assess the effectiveness of tinnitus
          management strategies.
        </p>
        <DocxViewer documents={docs} />
      </div>
    );
  };

  const MiscView = () => {
    const docs = [
      {
        fileName: "TKI Tinnitus Knowledge Inventory",
        uri: "/docs/tinnitus/TKI Tinnitus Knowledge Inventory.pdf",
      },
      {
        fileName: "Tinnitus React Questions",
        uri: "/docs/tinnitus/TinnitusReactQues.pdf",
      },
      {
        fileName: "Tinnitus Screener",
        uri: "/docs/tinnitus/Tinnitus Screener.pdf",
      },
    ];
    return (
      <div>
        <p>
          A brief questionnaire designed to screen for common causes and
          contributing factors to tinnitus, ensuring that the patients main
          concern is properly identified and addressed during the assessment.
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
      CustomComponent: THIView,
    },
    {
      title: "Tinnitus Functional Index (TFI)",
      CustomComponent: TFIView,
    },
    {
      title: "Client Oriented Scale of Improvement in Tinnitus (COSIT)",
      CustomComponent: COSITView,
    },
    {
      title: "Misc Screener",
      CustomComponent: MiscView,
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
