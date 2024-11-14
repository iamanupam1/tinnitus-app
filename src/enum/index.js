export const ROLE_MAPPER = {
  admin: "admin",
  normal: "normal",
  "tinnitus-ext": "tinnitus-ext",
};

export const NAV_LINKS = [
  { path: "/", label: "Home", sub_link: null },
  {
    path: "#",
    label: "Category",
    sub_link: [
      { path: "/questionnaire-assessment", label: "Questionnaires and Assessments" },
      { path: "/education", label: "Education Information" },
      { path: "/treatment", label: "Treatment & Counseiling" },
      { path: "/treatment", label: "Resource Acknowledgement" },
    ],
  },
  { path: "/team", label: "Team", sub_link: null },
  { path: "/about", label: "About", sub_link: null },
  { path: "/contact", label: "Contact", sub_link: null },
];
