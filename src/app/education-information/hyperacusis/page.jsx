"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import FooterComponent from "../../component/base/footer";
import DocxViewer from "../../component/base/docs-preview";

// Modal component remains the same but with updated colors
const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-[90vw] max-h-[90vh] rounded-lg overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute bold top-2 right-2 text-purple-800 hover:text-purple-900 transition-colors duration-200 z-10"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

const ImageCard = ({ src, alt, caption }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer border border-purple-900/10"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-96 w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-purple-900 text-center">{caption}</p>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="relative w-[80vw] h-[80vh]">
          <Image src={src} alt={alt} fill className="object-contain" priority />
        </div>
        <div className="bg-white p-4">
          <p className="text-sm text-purple-900 text-center">{caption}</p>
        </div>
      </Modal>
    </>
  );
};

const HyperacusisInformationPage = () => {
  const sections = [
    {
      title: "Symptoms of Hyperacusis",
      description:
        "Hyperacusis can manifest in various ways, affecting daily life and emotional well-being. Common symptoms include:",
      content: [
        "Discomfort or pain in response to specific sounds or general noise levels.  ",
        "Avoidance of noisy environments. ",
        "Anxiety or stress due to noise exposure.",
        "Possible co-occurrence with other auditory disorders such as tinnitus (ringing in the ears)",
      ],
    },
    {
      title: "Types of Hyperacusis",
      content: [
        "Loudness hyperacusis ",
        "Misophonia (annoyance hyperacusis) (Misophonia Folder) ",
        "Phonophobia (fear/avoidance hyperacusis) ",
        "Pain Hyperacusis (pain in ear following exposure) Tonic Tensor Tympani",
      ],
    },
    {
      title: "Causes of Hyperacusis",
      description:
        "Medical conditions previously linked to decreased sound tolerance include: tinnitus, Bell's palsy, Lyme Disease, Asberger’s,  Williams Syndrome, Ramsay Hunt Syndrome, stapedectomy, perilymphatic fistula, head injury, migraine, depression, withdrawal from benzodiazepines, increased Cerebral Spinal Fluid (CSF) pressure and Addison's disease. ",
      docs: [
        {
          fileName:
            "Medical conditions previously linked to decreased sound tolerance include",
          uri: "/docs/hyperacusis/Medical conditions previously linked to decreased sound tolerance include.docx",
        },
        {
          fileName: "Hyperacusis and Lyme Disease",
          uri: "/docs/hyperacusis/Hyperacusis and Lyme Disease.docx",
        },
      ],
    },
    {
      title: "Diagnosis Hyperacusis",
      description:
        "Diagnosis of hyperacusis through a complete history, including assessment forms (Khalfa, depression, OCD, tinnitus etc), complete audiological and UCL testing. ",
      docs: [
        {
          fileName: "Khalfa Hyperacusis",
          uri: "/docs/hyperacusis/Khalfa Hyperacusis.docx",
        },
        {
          fileName: "Khalfa Hyperacusis Scoring",
          uri: "/docs/hyperacusis/Khalfa Hyperacusis Scoring.docx",
        },
      ],
    },
    {
      title: "Treatments Counseling",
      description:
        "Studies found that listening to low level sounds for several months can alleviate tinnitus and hyperacusis. The association of positive experiences with sound treatment can result in the elimination of hyperacusis symptoms. Behavioral modification is NECESSARY to reverse aversion to phobic stimuli before loudness desensitization can occur.   ",
      docs: [
        {
          fileName: "Desensitization",
          uri: "/docs/hyperacusis/Desensitization.docx",
        },
        {
          fileName: "Exercises for TTTS",
          uri: "/docs/hyperacusis/Exercises for TTTS.docx",
        },
        {
          fileName: "Hyperacusis and Lyme Disease",
          uri: "/docs/hyperacusis/Hyperacusis and Lyme Disease.docx",
        },
        {
          fileName: "Sound Generator Care and Usage",
          uri: "/docs/hyperacusis/Sound Generator Care and Usage.docx",
        },
        {
          fileName: "Sound Generator Protocol for Hyperacusis",
          uri: "/docs/hyperacusis/Sound Generator Protocol for Hyperacusis.docx",
        },
        {
          fileName: "USD Hyperacusis Fitting Protocol",
          uri: "/docs/hyperacusis/USD Hyperacusis Fitting Protocol.docx",
        },
        {
          fileName: "Sound Tolerance Handout",
          uri: "/docs/hyperacusis/Sound Tolerance Handout.pdf",
        },
        {
          fileName: "Sound Tolerance Worksheet",
          uri: "/docs/hyperacusis/Sound Tolerance Worksheet.pdf",
        },
      ],
    },
  ];

  return (
    <BaseLayoutComponent>
      <Navbar />
      <section className="relative bg-gradient-to-r from-[#502888] to-[#2E847C] px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Understanding Hyperacusis</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A comprehensive guide to sound sensitivity: symptoms, causes,
            diagnosis, and treatment options
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-[#502888] bg-opacity-10">
        <div className="max-w-[1800px] mx-auto">
          <p className="text-lg text-[#000000] leading-relaxed">
            Hyperacusis is a hearing condition where everyday sounds appear much
            louder than they should, often causing discomfort or pain. This
            condition can significantly impact daily life, but with proper
            understanding and management, many people find effective ways to
            cope and improve their quality of life.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <section
          key={section.title}
          className={`px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 ${
            index % 2 === 0 ? "bg-white" : "bg-purple-50/50"
          }`}
        >
          <div className="max-w-[1800px] mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-purple-900">
              {section.title}
            </h2>
            <p className="text-lg text-purple-900/90 mb-8 leading-relaxed">
              {section.description}
            </p>

            <div className="mb-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.content?.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-teal-700 mt-1">•</span>
                    <span className="text-purple-900/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {section.images && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {section.images.map((image, imageIndex) => (
                  <ImageCard key={imageIndex} {...image} />
                ))}
              </div>
            )}

            {section.docs && <DocxViewer documents={section.docs} />}
          </div>
        </section>
      ))}

      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default HyperacusisInformationPage;
