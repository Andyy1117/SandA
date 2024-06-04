import Bounded from "@/components/Bounded";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutHeader`.
 */
export type AboutHeaderProps = SliceComponentProps<Content.AboutHeaderSlice>;

/**
 * Component for "AboutHeader" Slices.
 */
const AboutHeader = ({ slice }: AboutHeaderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="pt-24">
        <div className="bg-[#ffa600] p-4 py-8">
          {isFilled.richText(slice.primary.title) && (
            <h1 className="text-balance text-center text-white text-5xl font-bold md:text-7xl mb-4">
              <PrismicText field={slice.primary.title} />
            </h1>
          )}
        </div>
      </div>
      
      
    </section>
  );
};

export default AboutHeader;
