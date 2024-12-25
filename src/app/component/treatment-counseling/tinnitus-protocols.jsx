import React from "react";
import DocxViewer from "../base/docs-preview";

const OtherTinnitusSection = () => {
  const allDocs = {
    sleep: [
      {
        fileName: "Sleeping Protocol",
        uri: "/docs/protocols/Sleeping protocol.docx",
      },
      {
        fileName: "Tips for a Good Nights Sleep",
        uri: "/docs/protocols/Tips for a Good Nights Sleep.docx",
      },
    ],
    musical: [
      {
        fileName: "Musical Treatment plan for patient",
        uri: "/docs/protocols/Musical Tinnitus - explanation and treatment plan for patient.docx",
      },
      {
        fileName: "Musical Tinnitus",
        uri: "/docs/protocols/Musical Tinnitus.docx",
      },
    ],
  };

  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-white">
      <h2 className="text-3xl font-bold mb-12 text-gray-800">
        Other Tinnitus Protocols
      </h2>
      <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-teal-800 mb-4">
          Sleep and Tinnitus
        </h3>
        <p className="mt-2 leading-relaxed text-justify">
          Managing chronic tinnitus often involves treating underlying hearing
          loss, as the two conditions are closely related. Hearing aids or other
          auditory interventions can restore auditory input, reducing the
          prominence of tinnitus sounds. This approach not only makes tinnitus
          more manageable but also improves communication and social
          interactions, ultimately enhancing the quality of life.
        </p>
        <div className="mt-4">
          <DocxViewer documents={allDocs.sleep} />
        </div>
      </div>
      <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-teal-800 mb-4">
          Musical Tinnitus
        </h3>
        <p className="mt-2 leading-relaxed text-justify">
          Relaxation plays a vital role in managing chronic tinnitus by reducing
          stress and anxiety, which can intensify symptoms. Techniques like
          mindfulness, deep breathing, or progressive muscle relaxation can make
          tinnitus less intrusive and support emotional well-being, improving
          the overall effectiveness of treatment strategies.
        </p>
        <div className="mt-4">
          <DocxViewer documents={allDocs.musical} />
        </div>
      </div>
    </section>
  );
};

export default OtherTinnitusSection;
