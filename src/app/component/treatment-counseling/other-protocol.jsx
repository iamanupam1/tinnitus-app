import React from "react";
import DocxViewer from "../base/docs-preview";

const OtherProtocolsSection = () => {
  const allDocs = {
    thl: [
      {
        fileName: "Real Ear Measures",
        uri: "/docs/protocols/REAL EAR MEASURES for sound generators.docx",
      },
      {
        fileName: "Stochastic Resonance",
        uri: "/docs/protocols/Stochastic resonance definition.docx",
      },
    ],
    relaxation: [
      {
        fileName: "Relaxation for Therapy Patients",
        uri: "/docs/protocols/Relaxation for Therapy Patients.docx",
      },
      {
        fileName: "Sleeping Protocol",
        uri: "/docs/protocols/Sleeping protocol.docx",
      },
      {
        fileName: "Tips for a Good Nights Sleep",
        uri: "/docs/protocols/Tips for a Good Nights Sleep.docx",
      },
    ],
  };

  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-12 text-gray-800">
        Other Protocols and Strategies
      </h2>
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-teal-800 mb-4">
          Treatment Hearing Loss
        </h3>
        <p className="mt-2 leading-relaxed text-justify">
          Treating hearing loss is crucial in managing chronic tinnitus, as the
          two conditions are often closely linked. Hearing loss can exacerbate
          the perception of tinnitus by reducing the auditory input that
          typically masks tinnitus sounds. Addressing hearing loss through
          hearing aids or other auditory interventions can help restore this
          input, making tinnitus less prominent and more manageable.
          Additionally, improving hearing can enhance communication and social
          interaction, reducing the stress and isolation that often accompany
          tinnitus. By treating hearing loss, patients can experience a more
          comprehensive and effective approach to managing their tinnitus,
          leading to better overall outcomes and quality of life.
        </p>
        <div className="mt-4">
          <DocxViewer documents={allDocs.thl} />
        </div>
      </div>
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-teal-800 mb-4">
          Relaxation Strategies
        </h3>
        <p className="mt-2 leading-relaxed text-justify">
          Relaxation is crucial in the treatment of chronic tinnitus as it helps
          reduce stress and anxiety, which can exacerbate tinnitus symptoms. By
          practicing relaxation techniques such as deep breathing, mindfulness,
          or progressive muscle relaxation, individuals can lower their overall
          stress levels, making tinnitus less intrusive and easier to manage.
          Incorporating relaxation into a treatment plan can improve emotional
          well-being and enhance the effectiveness of other tinnitus management
          strategies.
        </p>
        <div className="mt-4">
          <DocxViewer documents={allDocs.relaxation} />
        </div>
      </div>
    </section>
  );
};

export default OtherProtocolsSection;
