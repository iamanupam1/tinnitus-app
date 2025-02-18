import React from "react";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import FooterComponent from "../../component/base/footer";
import DocxViewer from "../../component/base/docs-preview";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CBTPage = () => {
  const cbt = [
    {
      fileName: "QUIETMIND Leaflet V9 (1)",
      uri: "/docs/treatment/QUIETMIND Leaflet V9 (1).pdf",
    },
    {
      fileName: "Oto App Based CBT",
      imageURL: "/images/sound/Oto App Based CBT.webp",
      type: "link",
      link: "https://www.joinoto.com/",
    },
  ];

  const keyPoints = [
    {
      title: "Purpose",
      points: [
        "Change Perception and Reaction: CBT helps individuals alter their emotional and behavioral responses to tinnitus, reducing its impact on their quality of life.",
        "Improve Coping Skills: The therapy provides strategies to cope with the stress and anxiety associated with tinnitus.",
      ],
    },
    {
      title: "Components of CBT for Tinnitus",
      points: [
        "Education: Understanding tinnitus, its causes, and its effects on the brain and emotions. This knowledge can reduce fear and misconceptions about the condition.",
        "Cognitive Restructuring: Identifying and challenging negative thoughts related to tinnitus.",
        "Relaxation Techniques: Learning methods such as deep breathing, progressive muscle relaxation, and mindfulness to reduce overall stress and anxiety.",
        "Attention Control: Training to shift focus away from tinnitus and towards other activities or thoughts.",
        "Behavioral Activation: Encouraging engagement in enjoyable and meaningful activities.",
        "Sleep Hygiene: Implementing strategies to improve sleep quality.",
      ],
    },
    {
      title: "Typical Process",
      points: [
        "Assessment: Initial sessions involve understanding the individual's specific experience with tinnitus.",
        "Goal Setting: Setting realistic and achievable goals for therapy.",
        "Structured Sessions: Regular sessions with a therapist to work through various techniques.",
        "Progress Monitoring: Regularly reviewing progress and making adjustments.",
      ],
    },
    {
      title: "Effectiveness",
      points: [
        "Reduced Distress: Many individuals report significant reductions in distress and anxiety.",
        "Improved Quality of Life: Better management of symptoms and improved overall well-being.",
        "Long-Term Benefits: Skills and techniques learned provide lasting coping strategies.",
      ],
    },
  ];

  return (
    <BaseLayoutComponent>
      <Navbar />
      <section className="relative bg-gradient-to-r from-[#502888] to-[#2E847C] px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Cognitive Behavioral Therapy (CBT)
          </h1>

          <div className="flex justify-between mt-12">
            <Link
              href="/treatment-counseling/sound"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition duration-300 text-white px-6 py-3 rounded-full"
            >
              <ChevronLeft />
              Sound Therapy
            </Link>

            <Link
              href="/treatment-counseling/mindful"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition duration-300 text-white px-6 py-3 rounded-full"
            >
              Mindfulness Meditation
              <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Cognitive Behavioral Therapy (CBT) is a structured, time-limited
            psychotherapy that focuses on identifying and changing negative
            thought patterns and behaviors. It aims to help individuals develop
            healthier coping mechanisms and improve emotional regulation by
            addressing the connections between thoughts, feelings, and actions.
            Dialectical Behavior Therapy (DBT) is a type of psychotherapy that
            combines cognitive-behavioral techniques with mindfulness practices.
            It focuses on helping individuals manage intense emotions, improve
            relationships, and develop skills for coping with distress, with a
            particular emphasis on balancing acceptance and change. Referral for
            these treatments to mental health professionals.{" "}
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Cognitive Behavioral Therapy (CBT) is a widely used psychological
            treatment that helps individuals manage various conditions by
            changing their thoughts and behaviors. When applied to tinnitus, CBT
            aims to reduce the distress and impact caused by the perception of
            tinnitus, rather than eliminating the tinnitus itself.
          </p>

          {keyPoints.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-[#502888] mb-4">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-3 bg-[#2E847C] rounded-full" />
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#502888] mb-4">Summary</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Cognitive Behavioral Therapy (CBT) for tinnitus focuses on
                changing the negative thoughts and behaviors associated with
                tinnitus to reduce its distressing impact. It involves
                education, cognitive restructuring, relaxation techniques,
                attention control, behavioral activation, and sleep hygiene. The
                therapy is typically structured over several sessions, with
                regular progress monitoring and adjustments. CBT has been shown
                to be effective in reducing the emotional and psychological
                burden of tinnitus, leading to improved quality of life for many
                individuals.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg shadow-sm w-100">
          <DocxViewer documents={cbt} title="Additional Resources" />
        </div>
      </section>

      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default CBTPage;
