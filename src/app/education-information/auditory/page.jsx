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

const AuditoryInformationPage = () => {
  const sections = [
    {
      title: "Outer Ear",
      description:
        "The outer ear consists of the pinna (auricle) and the external auditory canal. It collects and funnels sound waves toward the eardrum.",
      images: [
        {
          src: "/images/anatomy/outer/outer middle and inner ear.jpg",
          alt: "Outer ear anatomy diagram",
          caption: "Detailed anatomy of the outer ear",
        },
      ],
    },
    {
      title: "Middle Ear",
      description:
        "The middle ear is an air-filled cavity containing three small bones: the malleus, incus, and stapes. These bones amplify and transmit sound vibrations.",
      images: [
        {
          src: "/images/anatomy/middle/Middle Ear sound wave to TM.png",
          alt: "Middle ear ossicles",
          caption: "The three ossicles of the middle ear",
        },
        {
          src: "/images/anatomy/middle/outer middle and inner ear.jpg",
          alt: "Tympanic membrane",
          caption: "Structure of the eardrum",
        },
      ],
    },
    {
      title: "Inner Ear",
      description:
        "The inner ear contains the cochlea for hearing and the vestibular system for balance. The cochlea converts sound waves into nerve signals.",
      images: [
        {
          src: "/images/anatomy/inner/Corti-Diagram.jpg",
          alt: "Corti-Diagram",
          caption: "Corti-Diagram",
        },
        {
          src: "/images/anatomy/inner/Inner and outer hair cell close up.png",
          alt: "Inner and outer hair cell close up",
          caption: "Inner and outer hair cell close up",
        },
        {
          src: "/images/anatomy/inner/Inner and outer hair cell healthy.jpg",
          alt: "Inner and outer hair cell healthy",
          caption: "Inner and outer hair cell healthy",
        },
        {
          src: "/images/anatomy/inner/Organ of Corti drawing.png",
          alt: "Organ of Corti drawing",
          caption: "Organ of Corti drawing",
        },
        {
          src: "/images/anatomy/inner/Organ of Corti.png",
          alt: "Organ of Corti",
          caption: "Organ of Corti",
        },
        {
          src: "/images/anatomy/inner/Outer and inner hair cell damaged and close up of damage.jpg",
          alt: "Outer and inner hair cell damaged and close up of damage",
          caption: "Outer and inner hair cell damaged and close up of damage",
        },
        {
          src: "/images/anatomy/inner/Inner Ear fluid in motion in cochlea.png",
          alt: "Inner Ear fluid in motion in cochlea",
          caption: "Inner Ear fluid in motion in cochlea",
        },
        {
          src: "/images/anatomy/inner/Outer hair cell bundle healthy.jpg",
          alt: "Outer hair cell bundle healthy",
          caption: "Outer hair cell bundle healthy",
        },
        {
          src: "/images/anatomy/inner/outer middle and inner ear.jpg",
          alt: "outer middle and inner ear",
          caption: "outer middle and inner ear",
        },
      ],
    },
    {
      title: "Auditory Nerve to Auditory Cortex",
      description:
        "The auditory pathway carries sound information from the cochlea through the auditory nerve to the brain's auditory cortex for processing.",
      images: [
        {
          src: "/images/anatomy/cortex/Correspondence between cochlea and acoustic area of cerebral cortex.png",
          alt: "Correspondence between cochlea and acoustic area of cerebral cortex",
          caption:
            "Correspondence between cochlea and acoustic area of cerebral cortex",
        },
      ],
    },
  ];

  return (
    <BaseLayoutComponent>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Anatomy of Auditory Systems
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-gray-100">
        <div className="max-w-[1800px] mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Providing educational information is crucial in the treatment of
            tinnitus patients as it helps them understand their condition,
            manage expectations, and engage effectively in therapeutic
            interventions.
          </p>
        </div>
      </section>

      {/* Anatomy Sections */}
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

export default AuditoryInformationPage;
