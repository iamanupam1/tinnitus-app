"use client";
import React from "react";
import {
  ClipboardList,
  BookOpen,
  Stethoscope,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const CategoryCard = ({
  mainIcon: MainIcon,
  title,
  description,
  subCategories,
  link,
}) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <MainIcon className="w-6 h-6 text-[#502888]" />
          </div>
          <h4 className="text-xl font-semibold text-[#502888]">{title}</h4>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>

        {subCategories.map((category, index) => (
          <Link
            key={index}
            href={category.href}
            className="flex items-center p-3 rounded-lg hover:bg-purple-50 transition-colors group/item h-14"
          >
            <ExternalLink className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
            <span className="text-sm text-gray-700 group-hover/item:text-purple-700">
              {category.label}
            </span>
          </Link>
        ))}
      </div>

      <div className="p-4 border-t">
        <Link className="flex justify-center cursor-pointer" href={link}>
          <div className="flex items-center text-[#502888] text-sm font-medium ">
            <span>Explore All</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </Link>
      </div>
    </div>
  );
};

const ExploreSection = () => {
  const categories = [
    {
      icon: ClipboardList,
      title: "Questionnaires and Assessments",
      description:
        "Comprehensive tools to evaluate and monitor your tinnitus journey",
      subCategories: [
        {
          label: "Questionnaires",
          href: "/questionnaire-assessment#questionnaire",
        },
        { label: "Assessments", href: "/questionnaire-assessment#assessment" },
        { label: "Protocols", href: "/questionnaire-assessment#protocols" },
      ],
      link: "/questionnaire-assessment",
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Expert knowledge and insights about tinnitus management",
      subCategories: [
        {
          label: "Anatomy of Auditory Systems",
          href: "/education-information/auditory",
        },
        { label: "Limbic System", href: "/education-information/limbic" },
        { label: "Tinnitus", href: "/education-information/tinnitus" },
        { label: "Hyperacusis", href: "/education-information/hyperacusis" },
      ],
      link: "/education-information/",
    },
    {
      icon: Stethoscope,
      title: "Treatment and Counseling",
      description: "Personalized treatment options and professional guidance",
      subCategories: [
        {
          label: "Treatment Protocols",
          href: "/treatment-counseling#protocols",
        },
        {
          label: "Suicide Prevention and Treatment Devices",
          href: "/treatment-counselin#suicide",
        },
        {
          label: "Other Protocols and Strategies",
          href: "/treatment-counseling/other-protocols",
        },
        {
          label: "Alternative Treatments",
          href: "/treatment-counseling#alternative",
        },
      ],
      link: "/treatment-counseling",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-purple-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#502888] mb-4">
            Explore our Sections
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover comprehensive resources and tools designed to help you
            understand, manage, and track your tinnitus journey effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              mainIcon={category.icon}
              title={category.title}
              description={category.description}
              subCategories={category.subCategories}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
