'use client'

import Bounded from "@/components/Bounded";
import Slider from "@/components/Carousel"; // Assuming the path is correct
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type CarousalProps = SliceComponentProps<Content.CarousalSlice>;

const CarouselSlide = ({ slice }: CarousalProps): JSX.Element => {
  // Filter out null or undefined URLs and provide a default URL if necessary
  const slides = slice.items
    .map((item) => item.image.url) // Extract URLs
    .filter((url) => url) // Filter out null or undefined URLs
    .map((url) => ({
      url: url || 'https://example.com/default.jpg', // Provide a default URL if necessary
    }));

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      
      <PrismicRichText field={slice.primary.title} 
      components={{
        heading2: ({ children }) =>
          <h2 className="text-center text-balance text-4xl md:text-5xl font-bold">
            {children}
          </h2>
      }}/>
      <div className="text-balance text-center text-xl mt-6">
        <PrismicRichText field={slice.primary.body} />
      </div>
      <Slider slides={slides} />
    </Bounded>
  );
};

export default CarouselSlide;
