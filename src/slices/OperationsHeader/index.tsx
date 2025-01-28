import Bounded from "@/components/Bounded";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `OperationsHeader`.
 */
export type OperationsHeaderProps =
  SliceComponentProps<Content.OperationsHeaderSlice>;

/**
 * Component for "OperationsHeader" Slices.
 */
const OperationsHeader = ({ slice }: OperationsHeaderProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative pt-16">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 ">
          <div className="md:w-1/2 p-4">

          {isFilled.richText(slice.primary.heading) && (
            <h1 className="text-center text-balance text-4xl md:text-7xl font-bold my-auto text-black">
              <PrismicText field={slice.primary.heading} />
            </h1>
          )}
          
          {isFilled.richText(slice.primary.body) && (
            <div className="mt-6 text-center text-balance text-lg text-black">
              <PrismicRichText field={slice.primary.body} />
            </div>
          )}
          </div>
          
          <div className="md:w-1/2 p-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Top-left: Text */}
              <div className="flex items-center justify-center text-center p-4 bg-orange-400 rounded-[2vw]">
                <p className="text-7xl font-bold">56+</p>
              </div>

              {/* Top-right: Image */}
              <PrismicNextImage 
                field={slice.primary.image1} 
                className="rounded-[2vw]"
              />

              {/* Bottom-left: Image */}
              <PrismicNextImage 
                field={slice.primary.image2} 
                className="rounded-[2vw]"
              />

              {/* Bottom-right: Text */}
              <div className="flex items-center justify-center text-center p-4 bg-orange-400 rounded-[2vw]">
                <p className="text-7xl font-bold">150+</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </Bounded>
  );
};

export default OperationsHeader;
