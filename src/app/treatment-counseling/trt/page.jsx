"use client";
import React, { useState } from "react";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import FooterComponent from "../../component/base/footer";
import Link from "next/link";
import Image from "next/image";
import DocxViewer from "../../component/base/docs-preview";

const TRTPage = () => {
  const [activeTab, setActiveTab] = useState("understanding");

  const [activeTab1, setActiveTab1] = useState("apps");

  const allApps = [
    {
      name: "Buddhify",
      imageUrl: "/images/sound/buddhify.webp",
      link: "https://buddhify.com/",
    },
    {
      name: "Calm",
      imageUrl: "/images/sound/calm-icon.webp",
      link: "https://www.calm.com/",
    },
    {
      name: "headspace",
      imageUrl: "/images/sound/headspace.webp",
      link: "https://www.headspace.com/",
    },
    {
      name: "myNoise",
      imageUrl: "/images/sound/myNoise.webp",
      link: "https://mynoise.net/",
    },
    {
      name: "Sound Pillow",
      imageUrl: "/images/sound/Pillow_Sound-150x150.webp",
      link: "https://www.soundpillow.com/product/10-new-sound-pillow-tinnitus-veteran-first-responder-hospital-staff-asd/ ",
    },
    {
      name: "Relax Melodies",
      imageUrl: "/images/sound/Relax-Melodies.webp",
      link: "",
    },
    {
      name: "Resound Relief",
      imageUrl: "/images/sound/Resound-Relief.webp",
      link: "https://www.resound.com/en-us/hearing-aids/apps/relief",
    },
    {
      name: "Simply Noise",
      imageUrl: "/images/sound/Simply-Noise.webp",
      link: "https://simplynoise.com/",
    },
    {
      name: "Sleep Phones",
      imageUrl: "/images/sound/Sleep Phones.jpg",
      link: "https://www.sleepphones.com/ ",
    },
    {
      name: "Starkey Relax",
      imageUrl: "/images/sound/Starkey-Relax.webp",
      link: "https://www.starkey.com/hearing-aids/apps",
    },
    {
      name: "Tao Mix",
      imageUrl: "/images/sound/Tao-Mix.webp",
      link: "",
    },
    {
      name: "Whist Tinnitus Relief",
      imageUrl: "/images/sound/Whist-Tinnitus-Relief.webp",
      link: "https://www.sens.com/products/whist-custom-sound-therapy-for-tinnitus/overview/",
    },
    {
      name: "White Noise Lite",
      imageUrl: "/images/sound/White-Noise-Lite.webp",
      link: "https://www.tmsoft.com/white-noise/",
    },
  ];
  const allAids = [
    {
      name: "Oticon Intent",
      imageUrl: "/images/sound/Oticon Intent.jpg",
      link: "https://www.oticon.com/solutions/intent",
    },
    {
      name: "Widex SmartRIC",
      imageUrl:
        "/images/sound/Widex_SmartRIC_charger-on-table_bag_1920x1080.webp",
      link: "https://www.widex.com/en-us/hearing-aids/smartric/",
    },
  ];
  const AppCard = ({ key, name, imageUrl, link }) => (
    <Link
      key={key}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline hover:text-blue-400"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Image
          width={100}
          height={100}
          objectFit="cover"
          src={imageUrl}
          alt={`${name} app icon`}
          className="h-20 w-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-center capitalize">{name}</h3>
      </div>
    </Link>
  );

  const HearingAppCard = ({ key, name, imageUrl, link }) => (
    <Link
      key={key}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline hover:text-blue-400"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Image
          width={100}
          height={100}
          objectFit="cover"
          src={imageUrl}
          alt={`${name} app icon`}
          className="h-20 w-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-center capitalize">{name}</h3>
      </div>
    </Link>
  );
  const allDocs = {
    thl: [
      {
        fileName: "Real Ear Measures",
        uri: "/docs/protocols/REAL EAR MEASURES for sound generators.docx",
      },
      {
        fileName: "Stochastic Resonance",
        uri: "/docs/protocols/Stochastic resonance definition.docx",
      },
    ],
  };

  const softwareTabContent = {
    understanding: (
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#502888] mb-3">
          Understanding Tinnitus (Parables)
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Understanding tinnitus through parables can help patients better
          conceptualize their condition. These stories and metaphors provide
          relatable examples that demonstrate how tinnitus affects the brain and
          why certain therapeutic approaches work. Common parables include "The
          Smoke Alarm," "The Party Guest," and "The Leaky Faucet," each
          illustrating different aspects of how we perceive and react to
          tinnitus sounds.
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-[#502888]">
            Example Parable: The Smoke Alarm
          </h4>
          <p className="text-gray-700 mt-2">
            Think of tinnitus like a smoke alarm that`&#34;s malfunctioning. The
            alarm is designed to get your attention when there`&#34;s danger, but
            sometimes it goes off even when there`&#34;s no smoke. Even though it`&#34;s
            annoying, you know there`&#34;s no real danger, so you gradually learn to
            ignore it. Tinnitus works in a similar way - it`&#34;s a false alarm in
            your auditory system that your brain can learn to filter out when
            you understand it`&#34;s not harmful.
          </p>
        </div>
      </div>
    ),
    demystification: (
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#502888] mb-3">
          Demystification
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Demystifying tinnitus involves addressing common myths and
          misconceptions about the condition. This process helps patients
          understand that while tinnitus can be distressing, it`&#34;s typically not
          dangerous or indicative of serious health issues. With proper
          education, patients can reduce fear and anxiety associated with their
          symptoms.
        </p>
        <div className="mt-4 space-y-3">
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-[#502888]">
              Myth: Tinnitus always gets worse over time
            </h4>
            <p className="text-gray-700 mt-1">
              Fact: While tinnitus may fluctuate, many people experience
              stability or improvement over time, especially with proper
              management strategies.
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-[#502888]">
              Myth: If you have tinnitus, you`&#34;ll go deaf
            </h4>
            <p className="text-gray-700 mt-1">
              Fact: Tinnitus and hearing loss can co-occur, but having tinnitus
              does not mean you will lose your hearing. Many people with
              tinnitus maintain stable hearing throughout their lives.
            </p>
          </div>
        </div>
      </div>
    ),
    auditory: (
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#502888] mb-3">
          How the Auditory System Works
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Understanding the auditory system is crucial for comprehending
          tinnitus. This section explains the pathway of sound from the ear to
          the brain and how disruptions in this system can lead to tinnitus
          perception.
        </p>
        <div className="mt-4 text-center">
          <Link
            href="/education"
            className="inline-block px-6 py-2 bg-[#502888] text-white rounded-lg hover:bg-[#3e1f68] transition-colors"
          >
            Learn More on Education Page
          </Link>
        </div>
      </div>
    ),
    nonauditory: (
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#502888] mb-3">
          Understanding Non-Auditory Systems and Limbic System
        </h3>
        <p className="text-gray-700 leading-relaxed">
          The perception and impact of tinnitus extends beyond the auditory
          system. The limbic system (responsible for emotions), the reticular
          formation (involved in attention and awareness), and the amygdala
          (processing emotional reactions) all play crucial roles in how
          tinnitus affects individuals.
        </p>
        <div className="mt-4 space-y-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-[#502888]">
              The Reticular Formation
            </h4>
            <p className="text-gray-700 mt-1">
              This network of neurons in the brainstem regulates arousal and
              awareness. In tinnitus, an overactive reticular formation can make
              tinnitus sounds more noticeable by keeping them in conscious
              awareness.
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-[#502888]">The Amygdala</h4>
            <p className="text-gray-700 mt-1">
              As the brain`&#34;s emotional processing center, the amygdala can
              attach emotional significance to tinnitus sounds, creating
              anxiety, fear, or stress responses that reinforce the perception
              of tinnitus.
            </p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <Link
            href="/education"
            className="inline-block px-6 py-2 bg-[#502888] text-white rounded-lg hover:bg-[#3e1f68] transition-colors"
          >
            Learn More on Education Page
          </Link>
        </div>
      </div>
    ),
    habituation: (
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-[#502888] mb-3">
          Habituation (Stages of Habituation)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Habituation is the process by which the brain gradually reduces its
          response to a repeated stimulus over time, leading to decreased
          awareness or sensitivity to it. In the context of tinnitus,
          habituation involves the brain learning to ignore the tinnitus sound,
          making it less bothersome or noticeable.
        </p>
        <h3 className="text-xl font-medium text-[#502888] mb-2">
          The Four Stages of Habituation:
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-[#502888] mb-2">
              Stage 1: Initial Awareness
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                Persistent awareness of tinnitus, except during sleep and
                masking by louder sounds
              </li>
              <li>Frequent worrying and depressing thoughts about tinnitus</li>
              <li>Difficulty concentrating for more than a few minutes</li>
              <li>Absorbing activities provide only slight distraction</li>
              <li>
                Severe insomnia (if present), sometimes requiring medication
              </li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-[#502888] mb-2">
              Stage 2: Familiarity
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                Intermittent lack of awareness of tinnitus, especially during
                absorbing activities
              </li>
              <li>
                Improvement in concentration reflected in increasing engagement
                in normal activities
              </li>
              <li>
                Beginnings of emotional acceptance; the implications of tinnitus
                no longer seem catastrophic
              </li>
              <li>Gradual return to normal sleep pattern (if disturbed)</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-[#502888] mb-2">
              Stage 3: Passive Habituation
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                Awareness of tinnitus mainly limited to periods of fatigue,
                stress, or quiet
              </li>
              <li>
                Noises intrude mainly when listening and mental concentration
                are important
              </li>
              <li>Noises annoying rather than emotionally distressing</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-[#502888] mb-2">
              Stage 4: Complete Habituation
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                Attention rarely given to the tinnitus, limited to periods when
                it`&#34;s louder than normal or you are reminded of it
              </li>
              <li>Noises do not intrude into normal activities</li>
              <li>
                Emotional acceptance achieved — tinnitus neither pleasant nor
                unpleasant
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    plasticity: (
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#502888] mb-3">
          Plasticity
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Plasticity, in the context of tinnitus management, refers to the
          brain`&#34;s ability to adapt and reorganize itself in response to
          tinnitus. This neural adaptability can be harnessed through therapies
          to reduce the perception of tinnitus by encouraging the brain to shift
          its focus away from the tinnitus sound and form new, less distressing
          neural connections.
        </p>
        <div className="mt-4 space-y-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-[#502888]">
              Brain Plasticity and Learning
            </h4>
            <p className="text-gray-700 mt-1">
              The brain`&#34;s plasticity allows for learning and the creation of
              conditioned reflexes. This occurs through modifications in the
              strength of connections between neurons, forming the basis of
              memory, conscious learning, and the development of conditioned
              reflexes.
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-[#502888]">
              Relearning and Retraining
            </h4>
            <p className="text-gray-700 mt-1">
              Relearning or correcting previously learned behaviors often takes
              longer than initial learning. This principle applies to various
              skills, from sports to language acquisition. For tinnitus
              patients, retraining conditioned reflexes will take time but can
              be achieved through consistent, proper exercises.
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-[#502888]">
              Tinnitus Retraining Process
            </h4>
            <p className="text-gray-700 mt-1">
              Tinnitus patients need to perform exercises over time aimed at
              extinguishing inappropriate reflexes. These reflexes link
              tinnitus-related neuronal activity within the auditory system to
              the activation of systems responsible for anxiety and annoyance.
              The stronger the emotional association, the longer this retraining
              process may take.
            </p>
          </div>
        </div>
      </div>
    ),
    cognitive: (
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#502888] mb-3">
          Cognitive Counseling
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Cognitive counseling is a fundamental component of TRT that helps
          patients identify and modify negative thought patterns related to
          tinnitus. This process, combined with relaxation techniques, reduces
          emotional reactions and supports habituation.
        </p>
        <div className="mt-4 space-y-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-[#502888]">
              Managing Negative Thoughts
            </h4>
            <p className="text-gray-700 mt-1">
              Counseling helps identify catastrophic thinking patterns (like "my
              tinnitus will never improve" or "I can`&#34;t handle this") and replace
              them with realistic, constructive thoughts. This cognitive
              restructuring reduces distress and breaks the cycle of negative
              reinforcement.
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-[#502888]">
              Relaxation Techniques
            </h4>
            <p className="text-gray-700 mt-1">
              Progressive muscle relaxation, guided imagery, deep breathing
              exercises, and mindfulness meditation help reduce physiological
              tension and anxiety associated with tinnitus. Regular practice of
              these techniques helps deactivate the autonomic nervous system`&#34;s
              stress response.
            </p>
            <div className="mt-3 space-y-2">
              <h5 className="font-medium text-[#502888] text-sm">
                Common Relaxation Approaches:
              </h5>
              <ul className="list-disc list-inside">
                <li>Progressive Muscle Relaxation (PMR)</li>
                <li>Mindfulness-Based Stress Reduction (MBSR)</li>
                <li>Guided visualization exercises</li>
                <li>Deep breathing techniques</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  const hardwareTabContent = {
    apps: (
      <div className="mt-6">
        <div className="flex gap-4 flex-wrap">
          {allApps.map((app) => (
            <AppCard
              key={app.name}
              name={app.name}
              imageUrl={app.imageUrl}
              link={app.link}
            />
          ))}
        </div>
      </div>
    ),
    aids: (
      <div className="mt-6">
        <div className="flex gap-4 flex-wrap">
          {allAids.map((app) => (
            <HearingAppCard
              key={app.name}
              name={app.name}
              imageUrl={app.imageUrl}
              link={app.link}
            />
          ))}
        </div>

        <div className="mt-4">
          <DocxViewer documents={allDocs.thl} />
        </div>
      </div>
    ),
  };

  return (
    <BaseLayoutComponent>
      <Navbar />
      <section className="relative bg-gradient-to-r from-[#502888] to-[#2E847C] px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Tinnitus Retraining Therapy (TRT)
          </h1>
        </div>
      </section>
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-white bg-opacity-10">
        <p className="mt-2 leading-relaxed text-justify">
          Tinnitus retraining therapy (TRT) is a treatment for tinnitus that
          aims to help people get used to the sounds of tinnitus so they are no
          longer bothered by them. TRT combines sound therapy and counseling.
          The goal of TRT is to help people manage their tinnitus so that it
          doesn`&#34;t interfere with their lives.
        </p>
        <div className="my-12">
          <h2 className="text-2xl font-bold text-[#502888] mb-4">
            Hardware Components
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Sound therapy for tinnitus has been recognized as a very important
              contributor in treating tinnitus because it will help decrease the
              central gain in the cochlea, detune the pattern of neuronal
              activity in the autonomic nervous system, "brighten up" the
              auditory environment, and reduce the way the limbic system
              evaluated the magnitude of the perceived tinnitus loudness.
            </p>
          </div>
          {/* Tabs Navigation */}
          <div className="border-b border-gray-200 mt-8">
            <nav
              className="-mb-px flex flex-wrap space-x-1 sm:space-x-2"
              aria-label="Tabs"
            >
              <button
                onClick={() => setActiveTab1("apps")}
                className={`${
                  activeTab1 === "apps"
                    ? "border-[#502888] text-[#502888]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-3 px-1 sm:px-3 border-b-2 font-medium text-xs sm:text-sm`}
              >
                Apps for Sound Therapy
              </button>
              <button
                onClick={() => setActiveTab1("aids")}
                className={`${
                  activeTab1 === "aids"
                    ? "border-[#502888] text-[#502888]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-3 px-1 sm:px-3 border-b-2 font-medium text-xs sm:text-sm`}
              >
                Hearing Aids/ Combo Devices
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6">{hardwareTabContent[activeTab1]}</div>
        </div>
        <div className="my-12">
          <h2 className="text-2xl font-bold text-[#502888] mb-4">
            Software Components
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Sound therapy for tinnitus has been recognized as a very important
              contributor in treating tinnitus because it will help decrease the
              central gain in the cochlea, detune the pattern of neuronal
              activity in the autonomic nervous system, "brighten up" the
              auditory environment, and reduce the way the limbic system
              evaluated the magnitude of the perceived tinnitus loudness.
            </p>

            {/* Tabs Navigation */}
            <div className="border-b border-gray-200 mt-8">
              <nav
                className="-mb-px flex flex-wrap space-x-1 sm:space-x-2"
                aria-label="Tabs"
              >
                <button
                  onClick={() => setActiveTab("understanding")}
                  className={`${
                    activeTab === "understanding"
                      ? "border-[#502888] text-[#502888]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-3 px-1 sm:px-3 border-b-2 font-medium text-xs sm:text-sm`}
                >
                  Understanding Tinnitus
                </button>
                <button
                  onClick={() => setActiveTab("demystification")}
                  className={`${
                    activeTab === "demystification"
                      ? "border-[#502888] text-[#502888]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-3 px-1 sm:px-3 border-b-2 font-medium text-xs sm:text-sm`}
                >
                  Demystification
                </button>
                <button
                  onClick={() => setActiveTab("auditory")}
                  className={`${
                    activeTab === "auditory"
                      ? "border-[#502888] text-[#502888]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-3 px-1 sm:px-3 border-b-2 font-medium text-xs sm:text-sm`}
                >
                  Auditory System
                </button>
                <button
                  onClick={() => setActiveTab("nonauditory")}
                  className={`${
                    activeTab === "nonauditory"
                      ? "border-[#502888] text-[#502888]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-3 px-1 sm:px-3 border-b-2 font-medium text-xs sm:text-sm`}
                >
                  Non-Auditory Systems
                </button>
                <button
                  onClick={() => setActiveTab("habituation")}
                  className={`${
                    activeTab === "habituation"
                      ? "border-[#502888] text-[#502888]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-3 px-1 sm:px-3 border-b-2 font-medium text-xs sm:text-sm`}
                >
                  Habituation
                </button>
                <button
                  onClick={() => setActiveTab("plasticity")}
                  className={`${
                    activeTab === "plasticity"
                      ? "border-[#502888] text-[#502888]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-3 px-1 sm:px-3 border-b-2 font-medium text-xs sm:text-sm`}
                >
                  Plasticity
                </button>
                <button
                  onClick={() => setActiveTab("cognitive")}
                  className={`${
                    activeTab === "cognitive"
                      ? "border-[#502888] text-[#502888]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-3 px-1 sm:px-3 border-b-2 font-medium text-xs sm:text-sm`}
                >
                  Cognitive Counseling
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="mt-6">{softwareTabContent[activeTab]}</div>
          </div>
        </div>
      </section>

      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default TRTPage;
