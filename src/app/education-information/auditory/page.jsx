"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import FooterComponent from "../../component/base/footer";

const NavigationButton = ({ direction, onClick, disabled, className = "" }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`${className} flex items-center justify-center p-2 bg-white/80 hover:bg-white rounded-full shadow-lg 
    transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
      disabled ? "invisible" : ""
    }`}
  >
    {direction === "left" ? (
      <ChevronLeft className="w-6 h-6 text-gray-800" />
    ) : (
      <ChevronRight className="w-6 h-6 text-gray-800" />
    )}
  </button>
);

const Modal = ({
  isOpen,
  onClose,
  currentImage,
  sectionIndex,
  imageIndex,
  sections,
  onNavigate,
  onSectionChange,
}) => {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate("prev");
      if (e.key === "ArrowRight") onNavigate("next");
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen) return null;

  const isFirstImage = imageIndex === 0;
  const isLastImage = imageIndex === sections[sectionIndex].images.length - 1;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="w-full h-full max-w-7xl mx-auto p-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 text-white">
          <button
            onClick={() => setShowNavigation(!showNavigation)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            {sections[sectionIndex].title}
          </button>
          <button
            className="text-white hover:text-gray-300 transition-colors"
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
        </div>

        {/* Navigation Overlay */}
        {showNavigation && (
          <div className="absolute inset-0 bg-black bg-opacity-95 z-60 p-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-white text-2xl font-bold mb-6">Sections</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sections.map((section, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg cursor-pointer transition-all
                      ${
                        idx === sectionIndex
                          ? "bg-white text-black"
                          : "bg-gray-800 text-white hover:bg-gray-700"
                      }`}
                    onClick={() => {
                      onSectionChange(idx);
                      setShowNavigation(false);
                    }}
                  >
                    <h4 className="font-semibold mb-2">{section.title}</h4>
                    <p className="text-sm opacity-80">
                      {section.images.length} images
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 relative">
          <NavigationButton
            direction="left"
            onClick={() => onNavigate("prev")}
            disabled={isFirstImage && sectionIndex === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20"
          />
          <NavigationButton
            direction="right"
            onClick={() => onNavigate("next")}
            disabled={isLastImage && sectionIndex === sections.length - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20"
          />

          <div className="relative w-full h-full">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4">
          <div className="flex justify-center space-x-2 mb-4">
            {sections[sectionIndex].images.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all
                  ${
                    idx === imageIndex
                      ? "bg-white scale-125"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                onClick={() => onNavigate(null, idx)}
              />
            ))}
          </div>
          <p className="text-sm text-white text-center">
            {currentImage.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ src, alt, caption, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
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
  );
};

const AuditoryInformationPage = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    sectionIndex: 0,
    imageIndex: 0,
  });

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

  const handleOpenModal = (sectionIndex, imageIndex) => {
    setModalState({
      isOpen: true,
      sectionIndex,
      imageIndex,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNavigate = (direction, specificIndex = null) => {
    setModalState((prev) => {
      if (specificIndex !== null) {
        return { ...prev, imageIndex: specificIndex };
      }

      const currentSection = sections[prev.sectionIndex];
      let newSectionIndex = prev.sectionIndex;
      let newImageIndex = prev.imageIndex;

      if (direction === "next") {
        if (newImageIndex < currentSection.images.length - 1) {
          newImageIndex++;
        } else if (newSectionIndex < sections.length - 1) {
          newSectionIndex++;
          newImageIndex = 0;
        }
      } else {
        if (newImageIndex > 0) {
          newImageIndex--;
        } else if (newSectionIndex > 0) {
          newSectionIndex--;
          newImageIndex = sections[newSectionIndex].images.length - 1;
        }
      }

      return {
        ...prev,
        sectionIndex: newSectionIndex,
        imageIndex: newImageIndex,
      };
    });
  };

  const handleSectionChange = (newSectionIndex) => {
    setModalState((prev) => ({
      ...prev,
      sectionIndex: newSectionIndex,
      imageIndex: 0,
    }));
  };

  return (
    <BaseLayoutComponent>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#502888] to-[#2E847C] px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Anatomy of Auditory Systems
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-[#502888] bg-opacity-10">
        <div className="max-w-[1800px] mx-auto">
          <p className="text-lg text-[#000000] leading-relaxed">
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
                <ImageCard
                  key={imageIndex}
                  {...image}
                  onClick={() => handleOpenModal(index, imageIndex)}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <Modal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        currentImage={
          sections[modalState.sectionIndex].images[modalState.imageIndex]
        }
        sectionIndex={modalState.sectionIndex}
        imageIndex={modalState.imageIndex}
        sections={sections}
        onNavigate={handleNavigate}
        onSectionChange={handleSectionChange}
      />

      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default AuditoryInformationPage;
