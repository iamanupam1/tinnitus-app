import React from "react";
import DocxViewer from "../base/docs-preview";

const AlternativeTreatmentSection = () => {
  const allDocs = {
    treatment: [
      {
        fileName: "List of alternative treatments",
        uri: "/docs/treatment/List of alternative treatments.docx",
      },
      {
        fileName: "Sources for Outside Treatments",
        uri: "/docs/treatment/Sources for Outside Treatments.docx",
      },
    ],
  };

  const cbd = [
    "Anti-inflammatory Properties: CBD is known for its anti-inflammatory effects, which might help reduce inflammation in the ears or surrounding areas that could contribute to tinnitus.",
    "Anxiety Reduction: Many people with tinnitus experience anxiety or stress, which can exacerbate the perception of ringing. CBD may help alleviate anxiety, potentially making tinnitus more manageable.",
    "Individual Variability: Responses to CBD can vary significantly from person to person. Some may find relief, while others may not notice any effect.",
    "Consultation with a Professional: It's essential to consult with a healthcare professional before starting any new treatment, especially since tinnitus can be a symptom of underlying conditions.",
    "Legality and Quality: Ensure that any CBD product you consider is legal in your area and comes from a reputable source to guarantee quality and safety."
  ];

  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-16 pb-4 bg-white">
      <h2 className="text-3xl font-bold mb-12 text-gray-800">
        Alternative Treatments
      </h2>
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-teal-800 mb-4">
          CBD (Cannabidiol)
        </h3>
        <p className="mt-2 leading-relaxed text-justify">
          It has gained attention for its potential therapeutic
          effects, including its possible benefits for tinnitus, a condition
          characterized by ringing or buzzing in the ears. Research on CBD and
          tinnitus is still limited, but here are some points to consider: 
          <div className="my-5">
              <ul>
                {cbd.map((item, i) => (
                  <li key={i} className="flex items-start align-center space-x-2">
                    <span className="text-teal-700 mt-1 semibold">•</span>
                    <span className="capitalize font-semibold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
        </p>
        <div className="mt-4">
          <DocxViewer documents={allDocs.treatment} />
        </div>
      </div>
    </section>
  );
};

export default AlternativeTreatmentSection;
