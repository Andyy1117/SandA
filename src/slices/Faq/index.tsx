"use client";

import React from "react";
import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Accordion from "@/components/Accordion";
import ButtonOrange from "@/components/ButtonOrange";

/**
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<Content.FaqSlice>;

/**
 * Component for "Faq" Slices.
 */
const Faq = ({ slice }: FaqProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText 
        field={slice.primary.title} 
        components={{
          heading2: ({ children }) =>
            <h2 className="text-balance text-center font-bold text-4xl md:text-5xl">{children}</h2>
        }}
      />

      <div className="mx-auto max-w-md text-center text-balance mt-6 text-xl text-slate-600"> 
        <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="space-y-4 mt-16">
        {slice.items.map((item, index) => (
          <Accordion
            key={index}
            title={<PrismicRichText field={item.question} />}
            content={<PrismicRichText field={item.answer} />}
            className="border-b border-gray-600"
            buttonClassName="hover:bg-orange-200"
            questionClassName="font-medium text-lg text-black"  // Example classes for questions
            answerClassName="text-gray-700 text-balance text-lg"  // Example classes for answers
          />
        ))}
      </div>
    </Bounded>
  );
};

export default Faq;
