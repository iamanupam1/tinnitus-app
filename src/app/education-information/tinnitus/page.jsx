"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import FooterComponent from "../../component/base/footer";
import DocxViewer from "../../component/base/docs-preview";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Modal = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
  children,
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleKeyNavigation = (e) => {
      if (e.key === "ArrowLeft") {
        onNavigate(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        onNavigate(currentIndex + 1);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", handleKeyNavigation);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleKeyNavigation);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, currentIndex, onNavigate]);

  if (!isOpen) return null;

  const showNavigation = images && images.length > 1;

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

        {showNavigation && currentIndex > 0 && (
          <button
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(currentIndex - 1);
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {showNavigation && currentIndex < images.length - 1 && (
          <button
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(currentIndex + 1);
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}

        {children}
      </div>
    </div>
  );
};

const ImageCard = ({
  src,
  alt,
  caption,
  content,
  sectionImages,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const index = sectionImages.findIndex((img) => img.src === src);
      setCurrentImageIndex(index);
    }
  }, [isOpen, src, sectionImages]);

  const handleNavigate = (newIndex) => {
    if (newIndex >= 0 && newIndex < sectionImages.length) {
      setCurrentImageIndex(newIndex);
    }
  };

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
          <p className="text-sm text-gray-600 text-center font-medium">
            {caption}
          </p>
          <p className="text-sm text-gray-600 text-center line-clamp-2">
            {content}
          </p>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        images={sectionImages}
        currentIndex={currentImageIndex}
        onNavigate={handleNavigate}
      >
        <div className="relative w-[80vw] h-[80vh]">
          <Image
            src={sectionImages[currentImageIndex].src}
            alt={sectionImages[currentImageIndex].alt}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="bg-white p-4">
          <p className="text-md text-gray-600 text-center font-medium">
            {sectionImages[currentImageIndex].caption}
          </p>
          <p className="text-md text-gray-600 text-center">
            {sectionImages[currentImageIndex].content}
          </p>
        </div>
      </Modal>
    </>
  );
};

const TinnitusInformationPage = () => {

  const sections = [
    {
      title: "Medications Associated with Tinnitus",
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
          src: "/images/anatomy/inner/Outer hair cell bundle healthy.jpg",
          alt: "Outer hair cell bundle healthy",
          caption: "Outer hair cell bundle healthy",
          content:
            "To compensate for hearing loss, the brain increases neural activity in the auditory pathway through a process called central auditory gain. This involves the upregulation of neural activity and heightened sensitivity of auditory neurons to amplify weaker signals, which can result in the perception of tinnitus",
        },
        {
          src: "/images/anatomy/inner/Outer and inner hair cell damaged and close up of damage.jpg",
          alt: "Outer and inner hair cell damaged and close up of damage",
          caption: "Outer and inner hair cell damaged and close up of damage",
          content:
            "To compensate for hearing loss, the brain increases neural activity in the auditory pathway through a process called central auditory gain. This involves the upregulation of neural activity and heightened sensitivity of auditory neurons to amplify weaker signals, which can result in the perception of tinnitus",
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
      <section className="relative bg-gradient-to-r from-[#502888] to-[#2E847C] px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Tinnitus Information</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-[#502888] bg-opacity-10">
        <div className="max-w-[1800px] mx-auto">
          <p className="text-lg text-[#000000] leading-relaxed">
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
            {section.description && (
              <p className="text-lg text-gray-700 mb-12 leading-relaxed">
                {section.description}
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section?.images?.map((image, imageIndex) => (
                <ImageCard
                  key={imageIndex}
                  {...image}
                  sectionImages={section.images}
                  sectionIndex={index}
                />
              ))}
            </div>
            {section.docs ? (
              <DocxViewer
                documents={section.docs}
                showTitle={
                  section.title === "Medications Associated with Tinnitus"
                    ? false
                    : true
                }
                imageURL={
                  section.title === "Medications Associated with Tinnitus"
                    ? "/images/tinnitus/Pills in hand photo.jpg"
                    : ""
                }
              />
            ) : null}
          </div>
        </section>
      ))}

      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default TinnitusInformationPage;
