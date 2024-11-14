import React from "react";
import Image from "next/image";
import BaseLayoutComponent from "../component/base/base-layout";
import { Navbar } from "../component/base/navbar";
import FooterComponent from "../component/base/footer";
import Accordion from "../component/questionnaire-assessment/accordion";
import AssessmentSection from "../component/questionnaire-assessment/assessment-section";

const QuestionnaireAssessmentPage = () => {
  const frontOffice = [
    {
      title: "Are you calling today about a tinnitus or hearing problem?",
      content:
        "This will verify that they are coming in the “tinnitus” door with tinnitus as the main concern.",
      possibleAnswers: ["Tinnitus", "Hearing", "Both"],
    },
    {
      title: "Do you have tinnitus that is constant?",
      content:
        "Most people will know if their tinnitus is constant or not.  If they don’t, they apparently are not overly conscious of it. It may indicate that it is not a significant problem, even if it is a chronic condition.  This will give insight to the amount of time they pay attention to it.",
      possibleAnswers: ["Yes", "No"],
    },
    {
      title: "How long have you had tinnitus?",
      content:
        "If the patient has had tinnitus <3 months, it may resolve on its own.  If they have had it for 3 months or longer, it is more likely to be a permanent irreversible condition and indicate a need for intervention. ",
      possibleAnswers: ["<3 months", " >3 months"],
    },
    {
      title: "How much of a problem is your tinnitus?",
      content:
        "This addresses the emotional component of tinnitus which will help to determine the extent of the problem and the need for a referral to a Fellow Member clinic. ",
      possibleAnswers: [
        "No problem (0)",
        "Small problem (2)",
        "Moderate problem (4)",
        "Big problem (10)",
      ],
    },
    {
      title: "Does the tinnitus affect your sleep?",
      content:
        "This gives insight to the degree of affect tinnitus has on their life.   ",
      possibleAnswers: [
        "Never (0)",
        "Rarely (2)",
        "Some of the time (4)",
        "Often (6)",
        "Always (10)",
      ],
    },
    {
      title: "Do you find everyday sounds uncomfortable?",
      content:
        "The patient report of sound sensitivity is not indicative in determining the presence of hyperacusis. However, when a perspective patient strongly admits to avoiding everyday sounds, he should be referred to a Fellow Member clinic.   ",
      possibleAnswers: [" Yes (10)", "No (0)"],
    },
    {
      title:
        "Were you referred to our clinic, or, how did you find out about us?",
      content:
        "This provides the opportunity to evaluate ongoing marketing and determine its effectiveness.",
    },
  ];

  const frontOfficeExcerpt="The total score from questions 4, 5 and 6 are added and if the score of 10 or greater will indicate that the patient needs to have a complete tinnitus evaluation in a Fellow Member Tinnitus Clinic. "

  return (
    <BaseLayoutComponent>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-blue-teal-gradient px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Questionnaires and Assessments
          </h1>
          <p className="text-xl">Our Library</p>
        </div>
      </section>
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-10">
        <div className="mb-5">
          <h2 className="text-3xl leading-tight font-bold mt-4">
            Questionnaires
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            When choosing a questionnaire for tinnitus patients, we consider
            factors such as the specific symptoms, the impact on daily life, and
            the purpose of the assessment to ensure it accurately captures the
            patient&apos;s experience and aids in effective treatment planning.
          </p>
        </div>
        <div className="bg-gray-100 px-8 py-4">
          <h3 className="text-xl leading-tight font-bold">
            Front Office: Initial Telephone Screening Interview
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            The purpose of the initial screening interview is to create a
            positive and sincere impression with the patient acknowledging the
            tinnitus concern and the ability of your practice to help them with
            their problem. It also creates the opportunity to begin the
            determination of the extent of their problem, assistance in
            scheduling or referral, and the opportunity to evaluate marketing
            effectiveness
          </p>
          <Accordion items={frontOffice} excerpt={frontOfficeExcerpt} openDefault showMapperText/>
        </div>
      </section>
      <AssessmentSection />
      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default QuestionnaireAssessmentPage;
