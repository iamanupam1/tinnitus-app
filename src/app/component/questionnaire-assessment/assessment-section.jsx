"use client";
import React, { useState } from "react";
import Image from "next/image";
import Accordion from "./accordion";

const AssessmentSection = () => {
  const [activeTab, setActiveTab] = useState("MCL");

  const assessmentItems = [
    {
      title: "Pitch Matching",
      possibleAnswers: [
        "Present PT/NBN at 5-10 dB SL ipsilaterally.",
        "Present two tones at different frequencies, two octaves apart.",
        "Ask patient to identify which of the two tones more closely matches the perceived tinnitus.",
        "Present the selected tone with one octave higher or one octave lower based on patient's choice.",
        "If the patient chose the lower tone, present one octave lower; if they chose the higher tone, present one octave higher.",
        "Use the bracket method to narrow down the frequency difference between the two tones.",
        "Repeat the process to confirm the reliability of the selected tinnitus match.",
      ],
    },
    {
      title: "Loudness Matching",
      possibleAnswers: [
        "Begin presentation at the threshold of the pitch matched by the patient and increase in 1 dB steps, performed ipsilaterally.",
        "Ask the patient to indicate when the external signal is perceived to be at the same level as their tinnitus.",
        "Measure each ear separately and for each sound identified.",
      ],
    },
    {
      title: "Minimum Masking Levels (MML)",
      possibleAnswers: [
        "Measure Right, Left, and Binaural responses.",
        "Establish White Noise (WN) Thresholds for each ear individually and binaurally.",
        "Begin presenting WN at threshold and increase in 5 dB steps.",
        "Measure Minimum Masking Level (MML) for both contralateral and ipsilateral effects on tinnitus.",
        "Ask the patient to focus on the tinnitus while WN is presented to the contralateral ear.",
        "Patient should indicate any changes in tinnitus perception as the WN is increased.",
        "Determine MML when the tinnitus is masked.",
        "Repeat the process with ipsilateral WN presentation, asking the patient to identify changes in tinnitus in the stimulated ear.",
        "If tinnitus is bilateral, repeat the procedure with the other ear.",
        "Use MML results for counseling and monitoring of treatment programs.",
      ],
    },
    {
      title: "Residual Inhibition",
      possibleAnswers: [
        "Protocol for Residual Inhibition: (to see reduced intensity of tinnitus following presentation of certain sounds) – can show tinnitus becomes softer or partially stops)",
        "WN presented at MML plus 10dB for 60 seconds",
        "Time the effect of inhibition until they hear the tinnitus again – (seconds and minutes)",
      ],
    },
  ];

  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-gray-100">
      <div>
        <h2 className="text-4xl leading-tight font-bold mb-8">Assessments</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative mb-8 overflow-hidden rounded-xl shadow-2xl group">
          <Image
            width={600}
            height={400}
            src="/images/audiologist testing .jpg"
            alt="Audiologist testing"
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-600/80 via-gray-400/70 to-gray-200/80 mix-blend-multiply group-hover:opacity-90 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="text-3xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-lg">
              Advanced Audiological Testing
            </h3>
            <div className="w-16 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md">
          <h3 className="text-2xl font-semibold mb-4">Instructions</h3>
          <div className="flex mb-4">
            <button
              className={`flex-1 py-2 px-4 ${
                activeTab === "MCL"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } rounded-l-lg focus:outline-none transition duration-300`}
              onClick={() => setActiveTab("MCL")}
            >
              Most Comfortable Loudness (MCL)
            </button>
            <button
              className={`flex-1 py-2 px-4 ${
                activeTab === "LDL"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } rounded-r-lg focus:outline-none transition duration-300`}
              onClick={() => setActiveTab("LDL")}
            >
              Loudness Discomfort Level (LDL)
            </button>
          </div>
          <div className="text-gray-600 leading-relaxed">
            {activeTab === "MCL" ? (
              <p>
                The purpose of this task is to find a loudness level at which
                the beeping sound/speech is most comfortable to listen to.
                Choose this level by presuming that you must listen to the
                beeping sound/speech to obtain information from it. For example,
                if you listen to the news on the radio would you adjust the
                volume to that level.
              </p>
            ) : (
              <p>
                The purpose of this task is to find a loudness level at which
                the beeping sound/speech is either too loud, uncomfortably loud,
                annoyingly loud or discomforting loud. This means that the
                beeping sound/speech is at a level to which you would not choose
                to listen for any length.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg w-100">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Protocols</h3>
          <Accordion items={assessmentItems} />
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;
