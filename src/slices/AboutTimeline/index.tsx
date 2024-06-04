"use client";

import Bounded from "@/components/Bounded";
import { Content, asText } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



/**
 * Props for `AboutTimeline`.
 */
export type AboutTimelineProps =
  SliceComponentProps<Content.AboutTimelineSlice>;

/**
 * Component for "AboutTimeline" Slices.
 */
const AboutTimeline = ({ slice }: AboutTimelineProps): JSX.Element => {
  console.log("Slice Data:", slice); // Debugging: Log the slice data to ensure it's correct

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText 
        field={slice.primary.title} 
        components={{
          heading2: ({children}) =>
          <h2 className="text-balance text-center text-4xl md:text-5xl font-bold">
            {children}
          </h2>
        }}
      />
      <div className="mx-auto max-w-md text-center text-balance my-8">
        <PrismicRichText field={slice.primary.description} />
      </div>

      <VerticalTimeline 
      lineColor="#ffe599">
        {slice.items.map((item, index) => (
          <VerticalTimelineElement 
            
            visible={true}
            key={index}
            date={asText(item.date)}
            icon={<AiFillCaretDown />}
            dateClassName="text-black"
            iconStyle={{ 
              background: 'rgb(255, 255, 255)', 
              color: '#000000' 
            }}
            contentStyle={{ 
              background: "#f3f4f6", 
              boxShadow: 'none' ,
              border: '1px solid rgba(0, 0, 0, 0.25)', 
              textAlign: 'left',
              padding: '1.3rem 2rem',
            }}


            contentArrowStyle={{ 
              borderRight: '0.4rem solid #9ca3af' }}
          >
            <h3 className="font-bold capitalize text-black">
              <PrismicRichText field={item.title} />
            </h3>

            <div className="!mt-1 !font-normal text-gray-700">
              <PrismicRichText field={item.timeline} />
            </div>
          
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Bounded>
  );
};

export default AboutTimeline;
