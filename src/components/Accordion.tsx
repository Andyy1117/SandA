"use client";

import React, { useState } from 'react';
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
  questionClassName?: string;
  answerClassName?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  className,
  buttonClassName,
  contentClassName,
  questionClassName,
  answerClassName
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className={`py-2 ${className}`}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex justify-between w-full p-4 bg-white rounded-md ${buttonClassName}`}
      >
        <span className={questionClassName}>{title}</span>
        <svg
          className={`fill-current text-orange-600 shrink-0 ml-8 transition-transform duration-200 ${
            accordionOpen ? "rotate-180" : ""
          }`}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="7" width="16" height="2" rx="1" />
          <rect y="7" width="16" height="2" rx="1" className="rotate-90" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } ${contentClassName}`}
      >
        <div className={`p-4 ${answerClassName}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
