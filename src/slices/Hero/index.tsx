import Bounded from "@/components/Bounded";
import ButtonOrange from "@/components/ButtonOrange";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServiceHeader`.
 */
export type ServiceHeaderProps = SliceComponentProps<Content.ServiceHeaderSlice>;

/**
 * Component for "ServiceHeader" Slices.
 */
const ServiceHeader = ({ slice }: ServiceHeaderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative flex items-center justify-center min-h-screen text-center bg-gray-800 mt-24 md:mt-0"
    >
      {isFilled.image(slice.primary.image) && (
        <div className="absolute inset-0 overflow-hidden z-0">
          <PrismicNextImage 
            field={slice.primary.image} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}

      <Bounded>
        <div className="relative z-20 text-white p-4">
        {isFilled.richText(slice.primary.title) && (
            <h1 className="text-5xl font-medium md:text-7xl mb-4">
              <PrismicText field={slice.primary.title} />
            </h1>
          )}

          {isFilled.richText(slice.primary.body) && (
            <div className="mx-auto mt-6 max-w-md text-lg md:text-xl">
              <PrismicRichText field={slice.primary.body} />
            </div>
          )}

          {isFilled.link(slice.primary.button_link) && (
            <div className="mt-8 flex justify-center space-x-4">
              <ButtonOrange className="bg-black text-white px-6 py-3 rounded-full" field={slice.primary.button_link}>
                <>{slice.primary.button_label}</>
              </ButtonOrange>
            </div>
          )}
        </div>
      </Bounded>
    </section>
  );
};

export default ServiceHeader;
