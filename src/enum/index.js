export const ROLE_MAPPER = {
  admin: "admin",
  normal: "normal",
  "tinnitus-ext": "tinnitus-ext",
};

export const NAV_LINKS = [
  { path: "/", label: "Home", sub_link: null },
  {
    path: "#",
    label: "Sections",
    sub_link: [
      { path: "/questionnaire-assessment", label: "Questionnaires and Assessments" },
      { path: "/education-information", label: "Education Information" },
      { path: "/treatment-counseling", label: "Treatment & Counseling" },
    ],
  },
  { path: "/resource-acknowledgement", label: "Resource Acknowledgement", sub_link: null }
];

export const QUESTION_PARENT_LIST = [
  {
    title: "Front Office : Initial Telephone Screening Interview",
    content:
      "The purpose of the initial screening interview is to establish a positive and sincere impression with the patient, acknowledging their tinnitus concerns and demonstrating your practice's ability to assist with their issue. It also provides an opportunity to start assessing the severity of their problem, offer help with scheduling or referrals, and evaluate the effectiveness of your marketing efforts.",
    slug: "front-office-initial-telephone-screening-interview",
  },
  {
    title: "Tinnitus Questionnaires",
    content:
      "These questionnaires help assess the severity, impact, and characteristics of tinnitus. They aim to gather information about the patient's tinnitus experience, including its duration, intensity, and effects on daily life, enabling the practice to tailor an appropriate treatment plan.",
    slug: "tinnitus-questionnaires",
  },
  {
    title: "Hyperacusis Questionnaires",
    content:
      "Hyperacusis refers to an abnormal sensitivity to sounds. This questionnaire helps evaluate how sound sensitivity affects the patient, assessing both the intensity and frequency of discomfort caused by everyday noises, which is often associated with tinnitus.",
    slug: "hyperacusis-questionnaires",
  },
  {
    title: "Misophonia Questionnaires",
    content:
      "Misophonia involves strong emotional reactions to specific sounds, such as chewing or breathing. This questionnaire focuses on understanding the patient's specific triggers and the psychological distress these sounds may cause, which is important in managing tinnitus and related conditions.",
    slug: "misophonia-questionnaires",
  },
  {
    title: "Sleep Questionnaires",
    content:
      "Poor sleep is a common issue for tinnitus sufferers due to the constant noise in their ears. The sleep questionnaire evaluates the patient's sleep patterns, disturbances, and the impact of tinnitus on rest, helping to guide treatment for both tinnitus and related sleep disorders.",
    slug: "sleep-questionnaires",
  },
  {
    title: "OCD Questionnaires",
    content:
      "Obsessive-Compulsive Disorder (OCD) can coexist with tinnitus, where intrusive thoughts or compulsive behaviors are exacerbated by the perception of sound. This questionnaire assesses OCD symptoms to identify how they may influence the patient's tinnitus experience, facilitating a more comprehensive treatment plan.",
    slug: "ocd-questionnaires",
  },
  {
    title: "Depression Questionnaires",
    content:
      "Tinnitus can lead to or worsen feelings of depression, as the constant noise can be overwhelming and isolating. This questionnaire evaluates the severity of depressive symptoms, providing insights into the emotional impact of tinnitus and guiding the need for psychological or medical intervention.",
    slug: "depression-questionnaires",
  },
  {
    title: "Hearing Handicap Questionnaires",
    content:
      "Hearing impairment often accompanies tinnitus, affecting communication and quality of life. This questionnaire focuses on the degree to which hearing loss or tinnitus interferes with daily activities, helping to determine appropriate treatment options such as hearing aids or auditory therapy.",
    slug: "hearing-handicap-questionnaires",
  },
];
