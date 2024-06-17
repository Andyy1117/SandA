// src/pages/AboutHistory.tsx

import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `AboutHistory`.
 */
export type AboutHistoryProps = SliceComponentProps<Content.AboutHistorySlice>;

/**
 * Component for "AboutHistory" Slices.
 */
const AboutHistory = ({ slice }: AboutHistoryProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
     
    >
      
        <div className="flex flex-col md:flex-row items-center text-balance md:text-start md:space-x-8 relative z-20 content-overlay">
          <div className="md:sticky top-0 md:w-1/2">
            <PrismicRichText 
              field={slice.primary.title} 
              components={{
                heading2: ({ children }) =>
                  <h2 className="text-center md:text-start text-4xl md:text-5xl font-bold">
                    {children}
                  </h2>
                }}
            />
            <div className="text-center md:text-start text-balance mt-8 text-xl text-slate-500 space-y-6">
              <PrismicRichText field={slice.primary.body} />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mt-8 md:flex md:flex-col md:overflow-auto md:max-h-screen md:w-1/2">
            {slice.items.map((item, index) => (
              <div key={index}>
                <PrismicNextImage field={item.image} />
              </div>
            ))}
          </div>
        </div>
      
    </Bounded>
  );
};

export default AboutHistory;
