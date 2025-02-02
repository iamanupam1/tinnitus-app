"use client";

import React from "react";
import FooterComponent from "../../component/base/footer";
import BaseLayoutComponent from "../../component/base/base-layout";
import { Navbar } from "../../component/base/navbar";
import { useParams } from "next/navigation";
import { QUESTION_PARENT_LIST } from "../../../enum";
import FrontOfficeComponent from "../../component/questionnaire-assessment/front-office";
import TinnitusQuestionnairesComponent from "../../component/questionnaire-assessment/tinnitus";
import HyperacusisQuestionnairesComponent from "../../component/questionnaire-assessment/hyperacusis";
import MisophoniaQuestionnairesComponent from "../../component/questionnaire-assessment/misophonia";
import SleepQuestionnairesComponent from "../../component/questionnaire-assessment/sleep";
import OCDQuestionnairesComponent from "../../component/questionnaire-assessment/ocd";
import DepressionQuestionnairesComponent from "../../component/questionnaire-assessment/depression";
import HearingHandicapQuestionnairesComponent from "../../component/questionnaire-assessment/hearing-handicap";

const SpecificQuestionnnairePage = () => {
  const { slug } = useParams();
  const title =
    QUESTION_PARENT_LIST.find((item) => item.slug == slug)?.title ?? "";

  const renderQuestionnaires = () => {
    switch (slug) {
      case "front-office-initial-telephone-screening-interview":
        return <FrontOfficeComponent />;
      case "tinnitus-questionnaires":
        return <TinnitusQuestionnairesComponent />;
      case "hyperacusis-questionnaires":
        return <HyperacusisQuestionnairesComponent />;
      case "misophonia-questionnaires":
        return <MisophoniaQuestionnairesComponent />;
      case "sleep-questionnaires":
        return <SleepQuestionnairesComponent />;
      case "ocd-questionnaires":
        return <OCDQuestionnairesComponent />;
      case "depression-questionnaires":
        return <DepressionQuestionnairesComponent />;
      case "hearing-handicap-questionnaires":
        return <HearingHandicapQuestionnairesComponent />;
      default:
        return <p>Not Found</p>;
    }
  };
  return (
    <BaseLayoutComponent>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#502888] to-[#2E847C] px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-[200px] pb-32 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
        </div>
      </section>
      {renderQuestionnaires()}
      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default SpecificQuestionnnairePage;
