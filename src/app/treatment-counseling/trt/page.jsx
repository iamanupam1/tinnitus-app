"use client";
import React, { useState } from "react";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import FooterComponent from "../../component/base/footer";
import Link from "next/link";
import Image from "next/image";
import DocxViewer from "../../component/base/docs-preview";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const allParables = [
    {
      fileName: "Parables for counseling",
      uri: "/docs/trt/Parables for counseling.pdf",
    },
    {
      fileName:
        "Philosophy of Life - Golf ball and sand big things v small things",
      uri: "/docs/trt/Philosophy of Life - Golf ball and sand big things v small things.docx",
    },
  ];
  const allReticular = [
    {
      fileName:
        "Explanation of the Reticular Formation and Limbic system actions",
      uri: "/docs/trt/Explanation of the Reticular Formation and Limbic system actions.docx",
    },
  ];
  const allHabit = [
    {
      fileName: "Habituation of tinnitus induced reactions",
      uri: "/docs/trt/Habituation of tinnitus induced reactions.docx",
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
        fileName: "Real Ear Measures for Sound Generators",
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
          why certain therapeutic approaches work. Common parables include &quot;The
          Smoke Alarm,&quot; &quot;The Party Guest,&quot; and &quot;The Leaky Faucet,&quot; each
          illustrating different aspects of how we perceive and react to
          tinnitus sounds.
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <DocxViewer documents={allParables} title="Addition Resources" />
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
          understand that while tinnitus can be distressing, it`&#34;s typically
          not dangerous or indicative of serious health issues. With proper
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
            href="/education-information/auditory"
            className="inline-block px-6 py-2 bg-[#502888] text-white rounded-lg hover:bg-[#3e1f68] transition-colors"
          >
            Learn More
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
          The limbic system is the part of the brain involved in our behavioral
          and emotional responses, especially when it comes to behaviors we need
          for survival: feeding, reproduction and caring for our young, and
          fight or flight responses. The Limbic System is our first, primitive
          brain which we received when we were put on this planet to survive. It
          is responsible for protecting us from dangerous events. It is also
          responsible for our emotional associations, memory and learning.
        </p>
        <div className="mt-4 space-y-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-[#502888]">
              The Reticular Formation
            </h4>
            <Image
              src="/images/reticular-formation in red.jpg"
              className="my-5"
              alt="dasd"
              height={200}
              width={200}
            />
            <p className="text-gray-700 mt-1">
              The reticular formation is a network of interconnected neurons
              located in the brainstem, extending from the medulla oblongata
              through the pons and into the midbrain. It spans the central core
              of the brainstem and is involved in several crucial functions.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 my-3">
              <li>
                Regulation of Arousal and Consciousness: The reticular formation
                plays a key role in maintaining alertness and wakefulness. It is
                involved in the sleep-wake cycle and helps regulate levels of
                consciousness.
              </li>
              <li>
                Motor Control: It helps coordinate motor functions by
                transmitting signals to the spinal cord, thus influencing
                voluntary motor control and muscle tone.
              </li>
              <li>
                Autonomic Functions: The reticular formation modulates vital
                autonomic functions like heart rate, respiratory rate, and blood
                pressure by interacting with the autonomic nervous system.
              </li>
              <li>
                Pain Modulation: It is involved in the perception of pain by
                modulating the transmission of pain signals.
              </li>
              <li>
                Attention and Filtering: The reticular formation helps filter
                out irrelevant stimuli, allowing the brain to focus on important
                sensory information, thereby playing a role in attention
              </li>
            </ul>
            <DocxViewer documents={allReticular} title="Addition Resources" />
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-[#502888]">The Amygdala</h4>
            <Image
              src="/images/limbic/brain anatomy amygdala in red.jpg"
              className="my-5"
              alt="dasd"
              height={400}
              width={400}
            />
            <p className="text-gray-700 mt-1">
              As the brain&apos;s emotional processing center, the amygdala can
              attach emotional significance to tinnitus sounds, creating
              anxiety, fear, or stress responses that reinforce the perception
              of tinnitus.
            </p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <Link
            href="/education-information/limbic"
            className="inline-block px-6 py-2 bg-[#502888] text-white rounded-lg hover:bg-[#3e1f68] transition-colors"
          >
            Learn More
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
          <div className="p-4 bg-gray-50 rounded-lg">
            <DocxViewer documents={allHabit} title="Addition Resources" />
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
          brain&apos;s ability to adapt and reorganize itself in response to
          tinnitus. This neural adaptability can be harnessed through therapies
          to reduce the perception of tinnitus by encouraging the brain to shift
          its focus away from the tinnitus sound and form new, less distressing
          neural connections.
        </p>
        <div className="mt-4 space-y-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-gray-700 mb-5">
              Plasticity of the brain allows learning and creation of
              conditioned reflexes.The brain can undergo modification and
              plastic changes – this happens through modification of the
              strength of connections between neurons. This is the basis of
              memory, learning at a conscious level and development of
              conditioned reflexes.
            </p>
            <p className="text-gray-700 mb-5">
              This is how we learn new languages or learn to play a new sport
              like golf. (or re-learn the correct way to swing a club after
              years of doing it wrong – but when you learn it wrong, it will
              take you longer to correct and learn the right way than learning
              it correctly from the get go).
              <span className="text-red-600">
                RELEARNING TAKES A LONGER TIME THAN INITIAL TRAINING FROM A
                NAÏVE STATE.
              </span>
            </p>
            <p className="text-gray-700 mb-5">
              So- retraining a conditioned reflex will take time but will occur
              by performing proper exercises - TINNITUS patients will need to
              perform (over time) exercises aimed at extinction of inappropriate
              reflexes that link the tinnitus related neuronal activity within
              the auditory system with activation of the systems responsible for
              anxiety and annoyance, etc. (the stronger the emotional
              association the longer it may take to do this)
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
          <div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <Image
                src="/images/meditation.jpg"
                className="my-5"
                alt="Person meditating"
                height={400}
                width={400}
              />
              <h3 className="text-xl font-semibold text-[#502888] my-2">
                Automatic Negative Thoughts (ANTS)
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>
                  Negative thoughts not only lead us to feel anxious, angry, or
                  depressed, they also lead to a change in the level of stress
                  arousal, or anxiety, in our bodies.
                </li>
                <li>
                  Physical changes from anxiety are an integral part of the
                  emotional experience. When we are in an anxious/aroused mood,
                  we also have changes in our bodies, such as increases in heart
                  rate, muscle tension (including a feeling of tension and
                  sometimes pain in the head, neck, and shoulders), breathing
                  rate, and digestion rate (ANS). In the upper gut, things
                  actually slow down, and we feel butterflies or nausea, as well
                  as an increase in frequency and urgency to use the toilet
                  (ANS).
                </li>
                <li>
                  Many tinnitus patients complain of such symptoms, particularly
                  headache or pains around the ear and a general feeling of
                  being tense. There are many other physical changes that can
                  take place, such as sleeping difficulties.
                </li>
              </ul>
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-3">
              <h4 className="text-lg font-semibold mb-3">
                Examples of Fixing ANTS:
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 w-1/2">
                        Negative AT
                      </th>
                      <th className="border border-gray-300 px-4 py-2 w-1/2">
                        Corrective AT
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 w-1/2">
                        Oh my God! Here it goes again.
                      </td>
                      <td className="border border-gray-300 px-4 py-2 w-1/2">
                        It happened before and I survived
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 w-1/2">
                        I always lose control of my emotions
                      </td>
                      <td className="border border-gray-300 px-4 py-2 w-1/2">
                        But I have not lost control yet
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 w-1/2">
                        Here it goes again, it will ruin my whole day
                      </td>
                      <td className="border border-gray-300 px-4 py-2 w-1/2">
                        Last time it was also so loud, but I managed to go
                        through the day
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 w-1/2">
                        I hear it again, It will be for the rest of my life
                      </td>
                      <td className="border border-gray-300 px-4 py-2 w-1/2">
                        How do I know, last time I thought my headache would
                        never end - it stopped the next day
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-[#502888] mb-2">
              Relaxation
            </h3>
            <p className="text-gray-700 mb-5">
              Although it seems impossible even tinnitus patients can learn how
              to relax
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                The ANS has two branches: the sympathetic nervous system (SNS)
                and the parasympathetic nervous system (PNS)
              </li>
              <li>
                The sympathetic nervous system activates our body – the
                parasympathetic nervous system calms it down
              </li>
              <li>Normally they both balance each other </li>
              <li>
                When we suffer from anxiety caused by tinnitus the SNS learns to
                dominate.
              </li>
            </ul>
            <p className="text-gray-700 my-5">
              However, too much activation increases anxiety
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                To reduce anxiety we need to engage the parasympathetic nervous
                system; How?{" "}
                <b>
                  Engage in activities which make you feel good. (identify these
                  activities and keep doing them)
                </b>
              </li>
              <li>
                Parasympathetic nervous system has a counter-balance to the
                fight-or-flight response flight response named by Herbert Benson
              </li>
              <li>
                The relaxation response slows down breathing helps to lower
                heart rate and metabolism (inhale on 4, exhale on 6)
              </li>
            </ul>
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
          <div className="flex justify-between mt-12">
            <Link
              href="/treatment-counseling/mindful"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition duration-300 text-white px-6 py-3 rounded-full"
            >
              <ChevronLeft />
              Mindfulness Meditation
            </Link>

            <Link
              href="/treatment-counseling/lenire"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition duration-300 text-white px-6 py-3 rounded-full"
            >
              Lenire
              <ChevronRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-white bg-opacity-10">
        <p className="mt-2 leading-relaxed text-justify">
          Tinnitus retraining therapy (TRT) is a treatment for tinnitus that
          aims to help people get used to the sounds of tinnitus so they are no
          longer bothered by them. TRT combines sound therapy and counseling.
          The goal of TRT is to help people manage their tinnitus so that it
          doesn&#39;t interfere with their lives.
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
              activity in the autonomic nervous system, &quot;brighten up&quot; the
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
              activity in the autonomic nervous system, &quot;brighten up&quot; the
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
