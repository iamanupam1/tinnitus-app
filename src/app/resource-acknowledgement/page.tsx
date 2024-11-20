import React from "react";
import BaseLayoutComponent from "../component/base/base-layout";
import { Navbar } from "../component/base/navbar";
import FooterComponent from "../component/base/footer";

const ResourceAcknowledgementPage = () => {
  const ResearcherCard = ({ name, contributions }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-teal-700 p-4">
        <h3 className="text-xl font-bold text-white">{name}</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-2">
          {contributions.map((contribution, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-teal-500 mr-2">•</span>
              <span className="text-gray-700">{contribution}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const researchers = [
    {
      name: "Jastreboff, Pawel J.",
      contributions: [
        "Developed the Tinnitus Retraining Therapy (TRT).",
        "Pioneered the neurophysiological model of tinnitus.",
      ],
    },
    {
      name: "Eggermont, Jos J.",
      contributions: [
        "Made significant contributions to understanding the neural mechanisms underlying tinnitus.",
      ],
    },
    {
      name: "Lockwood, Alan H.",
      contributions: [
        "Conducted influential brain imaging studies in tinnitus.",
      ],
    },
    {
      name: "Langguth, Berthold",
      contributions: [
        "Known for his research in tinnitus treatment and involvement in clinical trials.",
      ],
    },
    {
      name: "Baguley, David M.",
      contributions: ["Researcher in the field of audiology and tinnitus."],
    },
    {
      name: "Henry, James A.",
      contributions: [
        "Developed and validated various tinnitus management protocols and therapeutic approaches.",
      ],
    },
    {
      name: "Tyler, Richard S.",
      contributions: [
        "Worked extensively on the development of tinnitus questionnaires and management strategies.",
      ],
    },
    {
      name: "House, John W.",
      contributions: ["Pioneered surgical treatments for tinnitus."],
    },
    {
      name: "Folmer, Robert L.",
      contributions: [
        "Researched and implemented various tinnitus management strategies, including sound therapy and neuromodulation.",
      ],
    },
    {
      name: "Searchfield, Grant D.",
      contributions: [
        "Audiologist specializing in tinnitus management and cognitive-behavioral strategies.",
      ],
    },
    {
      name: "Roberts, Larry E.",
      contributions: [
        "Conducted research on the neurological aspects of tinnitus.",
      ],
    },
    {
      name: "McKenna, Laurence",
      contributions: [
        "Psychologist known for cognitive-behavioral therapy (CBT) approaches for tinnitus.",
      ],
    },
    {
      name: "Hesser, Hugo",
      contributions: [
        "Contributed to psychological approaches and interventions for tinnitus.",
      ],
    },
    {
      name: "Bauer, Carol A.",
      contributions: [
        "Investigated pharmacological treatments and mechanisms of tinnitus.",
      ],
    },
    {
      name: "Shore, Susan E.",
      contributions: [
        "Research on the role of the somatosensory system in tinnitus.",
      ],
    },
    {
      name: "Downs, Sara K.",
      contributions: [
        "Combining Mind Body work with sound therapy for tinnitus management – www.hearwellnorth.com",
      ],
    },
  ];

  return (
    <BaseLayoutComponent>
      <Navbar />
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Resource Acknowledgement</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Please know that any oversight is unintentional and in no way
            diminishes the value of your involvement and support.
          </p>
        </div>
      </section>
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchers.map((researcher, index) => (
            <ResearcherCard key={index} {...researcher} />
          ))}
        </div>
      </section>
      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default ResourceAcknowledgementPage;
