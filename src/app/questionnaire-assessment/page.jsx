import React from "react";
import BaseLayoutComponent from "../component/base/base-layout";
import { Navbar } from "../component/base/navbar";
import FooterComponent from "../component/base/footer";
import AssessmentSection from "../component/questionnaire-assessment/assessment-section";
import Link from "next/link";
import { QUESTION_PARENT_LIST } from "../../enum";

const QuestionnaireAssessmentPage = () => {

  const CardComponent = ({ data }) => {
    return (
      <div className="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out transform">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-800 leading-tight">
              {data.title}
            </h3>
          </div>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            {data.content}
          </p>
          <div className="flex items-center justify-between">
            <Link
              className="inline-flex items-center px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-md hover:bg-teal-600 transition-colors duration-300 ease-in-out"
              href={`/questionnaire-assessment/${data.slug}`}
            >
              View Questionnaires
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const frontOfficeExcerpt =
    "The total score from questions 4, 5 and 6 are added and if the score of 10 or greater will indicate that the patient needs to have a complete tinnitus evaluation in a Fellow Member Tinnitus Clinic. ";

  return (
    <BaseLayoutComponent>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-blue-teal-gradient px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Questionnaires and Assessments
          </h1>
          <p className="text-xl">Tailored Questionnaires to Guide Treatment and Care Plans</p>
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

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {QUESTION_PARENT_LIST.map((item) => (
            <CardComponent key={item.title} data={item} />
          ))}
        </div>
      </section>
      <AssessmentSection />
      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default QuestionnaireAssessmentPage;
