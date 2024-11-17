"use client";
import React, { useState } from "react";

const AccordionItem = ({
  title,
  content,
  possibleAnswers,
  isOpen,
  onToggle,
  index,
  showMapperText,
  CustomComponent
}) => {
  return (
    <div className="mb-4 border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <button
        className={`flex justify-between items-center w-full px-5 py-2 text-left 
        transition-colors duration-300 ease-in-out
        ${isOpen ? "bg-teal-600" : "bg-white hover:bg-gray-100"}
        focus:outline-none focus:ring-2 focus:ring-teal-300`}
        onClick={() => onToggle(title)}
      >
        <span
          className={`font-semibold text-lg  ${
            isOpen ? "text-white" : "text-gray-8000"
          }`}
        >
          {index + 1}. {title}
        </span>
        <svg
          className={`w-6 h-6 transition-transform duration-300 ease-in-out
            ${isOpen ? "rotate-180 text-teal-500" : "text-gray-400"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-5 bg-white border-t border-gray-100">
          {possibleAnswers && possibleAnswers.length > 0 && (
            <div className="mt-1 mb-5">
              {showMapperText && (
                <h4 className="font-semibold text-gray-800 mb-2">
                  Possible Answers:
                </h4>
              )}
              <ul className="space-y-2">
                {possibleAnswers.map((answer, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-sm font-semibold text-teal-600 bg-teal-100 rounded-full">
                      {idx + 1}
                    </span>
                    <span className="text-gray-600">{answer}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {content && (
            <p className="text-gray-700 leading-relaxed">{content}</p>
          )}
          {CustomComponent && <CustomComponent />}
        </div>
      )}
    </div>
  );
};

const Accordion = ({
  items,
  excerpt,
  openDefault = false,
  showMapperText = false,
}) => {
  const [openIndex, setOpenIndex] = useState(
    openDefault ? items[0].title : null
  );

  const handleToggle = (clickedIndex) => {
    setOpenIndex((prevOpenIndex) =>
      prevOpenIndex === clickedIndex ? null : clickedIndex
    );
  };

  return (
    <div className="w-full mx-auto p-4 bg-gray-50 shadow-md">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          index={index}
          isOpen={item.title === openIndex}
          onToggle={handleToggle}
          showMapperText={showMapperText}
        />
      ))}
      <p className="mt-2 leading-relaxed text-justify">{excerpt ?? null}</p>
    </div>
  );
};

export default Accordion;
