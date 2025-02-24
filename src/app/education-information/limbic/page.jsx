"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import FooterComponent from "../../component/base/footer";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";

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

const ImageCard = ({
  src,
  alt,
  caption,
  sectionIndex,
  imageIndex,
  sections,
  onOpenModal,
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
      onClick={() => onOpenModal(sectionIndex, imageIndex)}
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

const LimbicInformationPage = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    sectionIndex: 0,
    imageIndex: 0,
  });

  const sections = [
    {
      title: "Amygdala Highlighted in Brain Anatomy",
      description:
        "A detailed illustration of the human brain with the amygdala highlighted in red, showcasing its location within the limbic system. The amygdala plays a key role in processing emotions, especially fear and pleasure.",
      images: [
        {
          src: "/images/limbic/brain anatomy amygdala in red.jpg",
          alt: "brain anatomy amygdala in red",
          caption: "brain anatomy amygdala in red",
        },
      ],
    },
    {
      title: "Brain – Non-Auditory Systems",
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

  const handleNavigate = (direction) => {
    setModalState((prev) => {
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
      {sections.map((section, sectionIndex) => (
        <section
          key={section.title}
          className={`px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 ${
            sectionIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
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
                  sectionIndex={sectionIndex}
                  imageIndex={imageIndex}
                  sections={sections}
                  onOpenModal={handleOpenModal}
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
      />

      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default LimbicInformationPage;
