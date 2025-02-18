"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";

const Modal = ({
  isOpen,
  onClose,
  currentImage,
  onNext,
  onPrevious,
  totalImages,
}) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleKeyNavigation = (e) => {
      if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "ArrowLeft") {
        onPrevious();
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
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-6xl h-[90vh] rounded-lg overflow-hidden relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
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

        {/* Flex container for image and content */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Image container */}
          <div className="relative w-full md:w-1/2 h-[40vh] md:h-full flex-shrink-0">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              priority
            />
            {/* Navigation buttons */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-full z-10"
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
            >
              &lt;
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-full z-10"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
            >
              &gt;
            </button>
          </div>

          {/* Content container */}
          <div className="flex-1 overflow-y-auto p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {currentImage.text}
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              {currentImage.detailedText}
            </p>
            {currentImage.points?.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Key Points:
                </h4>
                <ul className="list-disc pl-6 text-base text-gray-700 leading-relaxed space-y-2">
                  {currentImage.points.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ image, onOpen }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
      onClick={onOpen}
    >
      <div className="relative h-96 w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 text-center">{image.text}</p>
      </div>
    </div>
  );
};

const NervousPage = () => {
  const auditoryPathways = [
    {
      title: "Spiral Ganglion Neurons",
      description:
        "Transmit acoustic signals from hair cells to the cochlear nucleus in the brainstem.",
      src: "/images/nervous/1 spriral ganglion.png",
      alt: "Spiral Ganglion Neurons diagram",
      text: "Spiral Ganglion Neurons",
      detailedText:
        "Spiral Ganglion Neurons transmit acoustic signals from hair cells to the cochlear nucleus in the brainstem. Humans have about 3000 inner hair cells and 30,000 spiral ganglion neurons. Type I neurons (90-95%), myelinated, innervate primarily with IHCs (1:1). They are responsible for the fine timing and frequency resolution of the auditory system and have different spontaneous firing rates. Type II neurons are unmyelinated, small, innervate OHCs and are more efferent/protective. Both hair cells and spiral ganglion neurons can be damaged by noise, age, ototoxic drugs, and ear infections.",
    },
    {
      title: "Type 1 Nerve Fibers",
      description:
        "Classified by spontaneous spiking activities for different sound processing.",
      src: "/images/nervous/1 a Auditory nerve.png",
      alt: "Type 1 nerve fibers diagram",
      text: "Type 1 Nerve Fibers Classification",
      detailedText:
        "Type 1 nerve fibers fall into classes of sound depending on spontaneous spiking activities. High Spontaneous Rate Fibers (60%) are needed for detecting sound, have lower threshold, are more readily activated with response to sound, have broader range of activation, narrow dynamic ranges (shorter range before they saturate the response), and recover sensitivity following a loud stimulus more quickly than low spontaneous rate fibers. Low Spontaneous Rate Fibers (40%) cover a broader range of sound intensity than high SR nerves, are needed for hearing in noise because they are more active above the threshold (suprathreshold sound detection), allow for higher specificity of sound. Noise exposure causes loss of auditory nerve synapses that are concentrated toward low spontaneous rate fibers.",
    },
    {
      title: "Cochlear Synapses",
      description:
        "Critical connection points that can degenerate, affecting sound transmission.",
      src: "/images/nervous/2 Ribbon Synapse.jpg",
      alt: "Diagram of a cell membrane showing synapses",
      text: "Cochlear Synapses",
      detailedText:
        "When cochlear synapses are destroyed, the auditory nerve fibers that connect degenerate, limiting sound information carried to the brain. There is a larger response at the cortex because of the weaker input, so the cortex is overcompensating. Cochlear synapses are more sensitive to noise exposure and aging than hair cells or stereocilia and don't elevate thresholds.",
    },
    {
      title: "Neural Pathway Overview",
      description: "Complete auditory pathway from ear to brain.",
      src: "/images/nervous/3 Neural pathway.png",
      alt: "A diagram of a human skull showing neural pathway",
      text: "Neural Pathway",
      points: [
        "ANF inputs segregate into ascending neuronal pathways specialized in parallel processing of different acoustic features ",
        "Auditory processing is a sophisticated, rapid integration between the afferent pathways",
        "All points do specific work of decoding, filtering, and integrating sound ",
        "Needs to process frequency features and preserve the temporal structure of sound ",
        "The auditory system is more than 1000 times faster than photoreceptors in the visual system ",
        "Thus, the auditory system is more sensitive to neurological insults that disrupt microsecond-level temporal resolution ",
      ],
    },
    {
      title: "Cochlear Nucleus",
      description: "First processing station in the auditory pathway.",
      src: "/images/nervous/4 Cochlear Nucleus.png",
      alt: "Cochlear nucleus diagram",
      text: "Cochlear Nucleus",
      points: [
        "Codes different sound features ",
        "Preserves frequency information",
        "Parallel by separate ascending pathways (Contralateral pathway to Superior Olivary Complex for binaural processing and Ipsilateral pathway for monaural processing)",
        "Dorsal Cochlear Nucleus (DCN): Integrates auditory and multisensory signals (somatosensory, visual, vestibular) ",
        "Dorsal Cochlear Nucleus (DCN): Roles for this region include sound localization in the vertical plane, head orientation to sounds of interest, and suppression of sensitivity to expected sounds ",
        "Dorsal Cochlear Nucleus (DCN): Auditory and non-auditory information streams to the DCN are refined by a remarkably complex array of inhibitory and excitatory interneurons ",
        "Dorsal Cochlear Nucleus (DCN): Believed to play a key role in orientation toward sounds of interest and/or suppression of responses to expected body-generated sounds ",
        "Ventral Cochlear Nucleus: Encodes intensity and timing ",
      ],
    },
    {
      title: "Inferior Colliculus",
      description: "Critical for sound localization and integration.",
      src: "/images/nervous/5 Inferior Colliculus .png",
      alt: "Diagram of the brain with labeled Inferior Colliculus",
      text: "Inferior Colliculus",
      points: [
        "Responsible for integrated sound localization ",
        "Plays and important role in generating the startle response, orienting the body towards relevant stimuli and discriminating pitch and rhythm ",
        "Receives signals from many non-auditory sources, but primarily from the other brainstem nuclei involved in the auditory system ",
        "Damage in one Inferior Colliculus has resulted in auditory issues such as tinnitus, hyperacusis, audiogenic seizures, auditory agnosia, deficits in contralateral hemispace, sound localization, and difficulty recognizing speech among other concurrent noises on the ipsilateral side (Driscoll and Tadi, 2023) ",
      ],
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % auditoryPathways.length
    );
  }, [auditoryPathways.length]);

  const handlePrevious = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? auditoryPathways.length - 1 : prevIndex - 1
    );
  }, [auditoryPathways.length]);

  const handleOpenModal = useCallback((index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  }, []);

  return (
    <BaseLayoutComponent>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#502888] to-[#2E847C] px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nervous System
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Explore how sound travels from the ear through the neural network to
            your brain
          </p>
        </div>
      </section>

      {/* Educational Note */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Auditory Neural Pathway
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The auditory neural pathway refers to the series of structures and
            connections in the nervous system that process sound from the ear to
            the brain. It transmits and interprets auditory information,
            allowing for the perception of sound.
          </p>
        </div>
      </section>

      {/* Neural Pathway Gallery */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Components of the Auditory Neural Pathway
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditoryPathways.map((component, index) => (
              <ImageCard
                key={index}
                image={component}
                onOpen={() => handleOpenModal(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentImage={auditoryPathways[currentImageIndex]}
        onNext={handleNext}
        onPrevious={handlePrevious}
        totalImages={auditoryPathways.length}
      />
    </BaseLayoutComponent>
  );
};

export default NervousPage;
