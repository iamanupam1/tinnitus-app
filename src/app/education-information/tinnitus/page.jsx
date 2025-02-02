"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import FooterComponent from "../../component/base/footer";
import DocxViewer from "../../component/base/docs-preview";

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

const TinnitusInformationPage = () => {
  const sections = [
    {
      title: "Medications Associated with Tinnitus",
      images: [
        {
          src: "/images/tinnitus/Pills in hand photo.jpg",
          alt: "Pills in hand photo",
          caption: "Pills in hand photo",
        },
      ],
      docs: [
        {
          fileName: "TinnitusDrugList2013 (ID 2125)",
          uri: "/images/tinnitus/TinnitusDrugList2013 (ID 2125).pdf",
        },
      ],
    },
    {
      title: "Medical and Non-Medical Causes Associate",
      images: [
        {
          src: "/images/tinnitus/Ossicular dysfunction.jpg",
          alt: "Ossicular dysfunction",
          caption: "Ossicular dysfunction",
        },
        {
          src: "/images/tinnitus/Otosclerosis.jpg",
          alt: "Otosclerosis",
          caption: "Otosclerosis",
        },
        {
          src: "/images/anatomy/inner/Outer and inner hair cell damaged and close up of damage.jpg",
          alt: "Outer and inner hair cell damaged and close up of damage",
          caption: "Outer and inner hair cell damaged and close up of damage",
        },
        {
          src: "/images/anatomy/inner/Outer hair cell bundle healthy.jpg",
          alt: "Outer hair cell bundle healthy",
          caption: "Outer hair cell bundle healthy",
        },
      ],
      docs: [
        {
          fileName: "Causes of Tinnitus",
          uri: "/images/tinnitus/Causes of Tinnitus.docx",
        },
        {
          fileName: "How hearing loss - aud change create onset tinn text",
          uri: "/images/tinnitus/How hearing loss - aud change create onset tinn text.docx",
        },
        {
          fileName: "Noise Thermometer",
          uri: "/images/tinnitus/Noise Thermometer.pdf",
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
          <h1 className="text-5xl font-bold mb-6">Tinnitus Information</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Tinnitus is the perception of sound, such as ringing, buzzing, or
            hissing, in the ears or head without an external auditory stimulus
          </p>
        </div>
      </section>

      {/* Tinnitus Sections */}
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
            {section.docs ? <DocxViewer documents={section.docs} /> : null}
          </div>
        </section>
      ))}

      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default TinnitusInformationPage;
