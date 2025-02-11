import React from "react";
import Accordion from "./accordion";
import DocsViewer from "../base/docs-viewer";
import DocxViewer from "../base/docs-preview";

const FrontOfficeComponent = () => {
  const allDocs = [
    {
      fileName: "Initial Telephone Screening Interview Form (description)",
      uri: "/docs/tinnitus/Initial Telephone Screening Interview Form (description).docx",
    },
  ];
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
        "Most people will know if their tinnitus is constant or not.  If they dont, they apparently are not overly conscious of it. It may indicate that it is not a significant problem, even if it is a chronic condition.  This will give insight to the amount of time they pay attention to it.",
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
  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-10">
      <div className="mb-5">
        <p className="mt-2 leading-relaxed text-justify">
          The purpose of the initial screening interview is to establish a
          positive and sincere impression with the patient, acknowledging their
          tinnitus concerns and demonstrating your practices ability to assist
          with their issue. It also provides an opportunity to start assessing
          the severity of their problem, offer help with scheduling or
          referrals, and evaluate the effectiveness of your marketing efforts.
        </p>
      </div>
      <Accordion items={frontOffice} openDefault />
      <div className="py-5">
        <DocxViewer documents={allDocs} />
      </div>
    </section>
  );
};

export default FrontOfficeComponent;
