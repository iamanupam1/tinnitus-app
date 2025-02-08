"use client";
import React, { useEffect, useState } from "react";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import FooterComponent from "../../component/base/footer";
import Image from "next/image";

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
          className="absolute bold top-2 right-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 z-10"
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
        className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
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
          <p className="text-sm text-gray-600 text-center">{caption}</p>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="relative w-[80vw] h-[80vh]">
          <Image src={src} alt={alt} fill className="object-contain" priority />
        </div>
        <div className="bg-white p-4">
          <p className="text-sm text-gray-600 text-center">{caption}</p>
        </div>
      </Modal>
    </>
  );
};

const LimbicInformationPage = () => {
  const sections = [
    {
      title: "Amygdala Highlighted in Brain Anatomy",
      description:
        " A detailed illustration of the human brain with the amygdala highlighted in red, showcasing its location within the limbic system. The amygdala plays a key role in processing emotions, especially fear and pleasure.",
      images: [
        {
          src: "/images/limbic/brain anatomy amygdala in red.jpg",
          alt: "brain anatomy amygdala in red",
          caption: "brain anatomy amygdala in red",
        },
      ],
    },
    {
      title: "Limbic System",
      description:
        "A detailed anatomical illustration of the human brain highlighting the limbic system, which is responsible for emotions, memory, and motivation. Key structures such as the amygdala, hippocampus, and hypothalamus are prominently featured.",
      images: [
        {
          src: "/images/limbic/Limbic system.jpg",
          alt: "Limbic system",
          caption: "Limbic system",
        },
      ],
    },
    {
      title: "Limbic System Components",
      description:
        "An anatomical illustration of the human brain highlighting the limbic system and its key components, including the amygdala, hippocampus, hypothalamus, and cingulate gyrus. The limbic system is crucial for regulating emotions, memory, and behavior.",
      images: [
        {
          src: "/images/limbic/Limbic ystem components.jpg",
          alt: "Limbic system components",
          caption: "Limbic system components",
        },
      ],
    },
  ];
  return (
    <BaseLayoutComponent>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#502888] to-[#2E847C] px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Limbic System and Brain</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-[#502888] bg-opacity-10">
        <div className="max-w-[1800px] mx-auto">
          <p className="text-lg text-[#000000] leading-relaxed">
            The limbic system, which is involved in emotional regulation and
            stress responses, has a significant correlation with bothersome
            tinnitus. Tinnitus can be particularly distressing when it becomes
            chronic. The limbic system, including structures such as the
            amygdala and hippocampus, plays a crucial role in the emotional and
            stress-related aspects of tinnitus. When tinnitus is perceived as
            bothersome, it often triggers an emotional reaction, leading to
            increased stress and anxiety. This reaction can amplify the
            perception of tinnitus, creating a feedback loop where emotional
            distress exacerbates the tinnitus symptoms, making it more difficult
            to manage. Understanding this connection is essential for developing
            effective treatments that address both the auditory and emotional
            components of tinnitus.
          </p>
        </div>
      </section>

      {/* Limbic Sections */}
      {sections.map((section, index) => (
        <section
          key={section.title}
          className={`px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="max-w-[1800px] mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {section.title}
            </h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              {section.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.images.map((image, imageIndex) => (
                <ImageCard key={imageIndex} {...image} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default LimbicInformationPage;
