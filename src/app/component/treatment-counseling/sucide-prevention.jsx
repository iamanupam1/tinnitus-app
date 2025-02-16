import React from "react";
import DocxViewer from "../base/docs-preview";

const SuicidePreventionSection = () => {
  const allDocs = {
    suicide: [
      {
        fileName: "RHATC Provider Self-Care",
        uri: "/docs/suicide/RHATC Provider Self-Care.pdf",
      },
      {
        fileName:
          "Tinnitus Suicide Prevention Resources Southwest Florida 2024 (ID 16365)",
        uri: "/docs/suicide/Tinnitus Suicide Prevention Resources Southwest Florida 2024 (ID 16365).docx",
      },
      {
        fileName: "RESOURCES",
        uri: "/docs/suicide/RESOURCES.pdf",
      },
      {
        fileName: "RHATC SUICIDE PROTOCOL - ESCALATION",
        uri: "/docs/suicide/RHATC SUICIDE PROTOCOL - ESCALATION.pdf",
      },
      {
        fileName: "Suicide Protocol RHATC Providers May 2024",
        uri: "/docs/suicide/Suicide Protocol RHATC Providers May 2024.pdf",
      },
    ],
    neosensory: [
      {
        fileName:
          "Cross-Modal Sensory Boosting to Improve High-Frequency Hearing Loss- Device Development and Validation",
        uri: "/docs/neosensory/Cross-Modal Sensory Boosting to Improve High-Frequency Hearing Loss- Device Development and Validation.pdf",
      },
      {
        fileName: "ENT_AUD_Info_Page",
        uri: "/docs/neosensory/ENT_AUD_Info_Page.pdf",
      },
      {
        fileName: "Neosensory Fitting Protocol - AT (2)[15]",
        uri: "/docs/neosensory/Neosensory Fitting Protocol - AT (2)[15].pdf",
      },
      {
        fileName: "Neosensory-Clinical-Guide[90]",
        uri: "/docs/neosensory/Neosensory-Clinical-Guide[90].pdf",
      },
      {
        fileName: "Neosensory-Clinical-Quick-Guide (1)[20]",
        uri: "/docs/neosensory/Neosensory-Clinical-Quick-Guide (1)[20].pdf",
      },
      {
        fileName:
          "Perottaetal2023_Bimodal_stimulation_for_the_reduction_of_tinnitus_IntlTinnitusJo",
        uri: "/docs/neosensory/Perottaetal2023_Bimodal_stimulation_for_the_reduction_of_tinnitus_IntlTinnitusJo.pdf",
      },
    ],
  };

  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-16 pb-4 bg-gray-100" id="suicide">
      <h2 className="text-3xl font-bold mb-12 text-gray-800">
        Suicide Prevention and Treatment Devices
      </h2>
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-teal-800 mb-4">
          Suicide Prevention
        </h3>
        <p className="mt-2 leading-relaxed text-justify">
          Treating hearing loss is crucial in managing chronic tinnitus, as the
          two conditions are often closely linked. Hearing loss can exacerbate
          the perception of tinnitus by reducing the auditory input that
          typically masks tinnitus sounds. Addressing hearing loss through
          hearing aids or other auditory interventions can help restore this
          input, making tinnitus less prominent and more manageable.
          Additionally, improving hearing can enhance communication and social
          interaction, reducing the stress and isolation that often accompany
          tinnitus. By treating hearing loss, patients can experience a more
          comprehensive and effective approach to managing their tinnitus,
          leading to better overall outcomes and quality of life.
        </p>
        <div className="mt-4">
          <DocxViewer documents={allDocs.suicide} />
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-teal-800 mb-4">
          Treatment Devices
        </h3>
        <h4 className="text-2xl font-semibold mb-4">
          Neuromod Lenire
        </h4>
        <p className="mt-2 leading-relaxed text-justify">
          Neuromod&apos;s Lenire is a non-invasive, FDA-approved medical device
          designed to treat tinnitus. It combines sound therapy with mild tongue
          stimulation to retrain the brain and reduce the perception of ringing
          in the ears. Lenire is backed by clinical trials and offers a
          personalized treatment plan supervised by healthcare professionals.
        </p>
        <div className="mt-4">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/kZlU3-B_CbU?si=BwZ9aslMTQHOj1WL&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <h4 className="text-2xl font-semibold my-4">
          Neosensory
        </h4>
        <p className="mt-2 leading-relaxed text-justify">
          Neosensory develops wearable technology that translates sound into
          vibrations, helping individuals with hearing loss and other sensory
          needs. Their flagship device, Neosensory Buzz, allows users to
          perceive sound through touch by converting audio signals into haptic
          feedback. The company leverages neuroplasticity to enhance sensory
          experiences and improve accessibility.
        </p>
        <div className="mt-4">
          <DocxViewer documents={allDocs.neosensory} />
        </div>
      </div>
    </section>
  );
};

export default SuicidePreventionSection;
