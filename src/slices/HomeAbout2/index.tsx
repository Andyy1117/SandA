import Bounded from "@/components/Bounded";
import ButtonOrange from "@/components/ButtonOrange";
import ButtonWhite from "@/components/ButtonWhite";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HomeAbout2`.
 */
export type HomeAbout2Props = SliceComponentProps<Content.HomeAbout2Slice>;

/**
 * Component for "HomeAbout2" Slices.
 */
const HomeAbout2 = ({ slice }: HomeAbout2Props): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#FFAC1C]"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        <div className="md:w-1/2 p-4">
          <PrismicNextImage field={slice.primary.image} className="rounded-lg" />
        </div>

        <div className="md:w-1/2 p-4 md:pt-40">
          <PrismicRichText 
          field={slice.primary.title} 
          components={{
            heading2: ({ children }) =>
              <h2 className="text-balance text-center text-white text-4xl md:text-5xl font-medium">{ children }</h2>
          }}/>
          <div className="mx-auto mt-8 max-w-md text-balance text-white text-center text-xl font-medium">
            <PrismicRichText field={slice.primary.body} />
          </div>

          <div className="flex flex-row items-center justify-center space-x-4">
            <ButtonOrange field={slice.primary.button1} className="mt-8">
              <>{slice.primary.button1text || "Learn More"}</>
            </ButtonOrange>

            <ButtonWhite field={slice.primary.button2} className="mt-8">
            <>{slice.primary.button2text || "Contact Us"}</>
            </ButtonWhite>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default HomeAbout2;
