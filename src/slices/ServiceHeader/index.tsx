import Bounded from "@/components/Bounded";
import ButtonOrange from "@/components/ButtonOrange";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServiceHeader`.
 */
export type ServiceHeaderProps =
  SliceComponentProps<Content.ServiceHeaderSlice>;

/**
 * Component for "ServiceHeader" Slices.
 */
const ServiceHeader = ({ slice }: ServiceHeaderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="h-screen"
    >
      <div className="relative flex flex-col md:flex-row h-full gap-6">
        <div className="md:w-1/2 relative h-full">
          {isFilled.image(slice.primary.image) && (
            <PrismicNextImage field={slice.primary.image} className="w-full h-full object-cover" />
          )}

          {/* Overlay for mobile view */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center md:hidden h-full">
            {isFilled.richText(slice.primary.title) && (
              <h1 className="text-white text-5xl mb-4 font-bold">
                <PrismicText field={slice.primary.title} />
              </h1>
            )}
            {isFilled.richText(slice.primary.body) && (
              <div className="text-white text-lg mb-4">
                <PrismicRichText field={slice.primary.body} />
              </div>
            )}
            {isFilled.link(slice.primary.button_link) && (
              <ButtonOrange field={slice.primary.button_link}>{slice.primary.button_label}</ButtonOrange>
            )}
          </div>
        </div>

        {/* Text container for desktop view */}
        <div className="md:w-1/2 my-auto items-start hidden md:flex flex-col h-full justify-center">
          {isFilled.richText(slice.primary.title) && (
            <h1 className="text-balance text-7xl mb-4 font-bold">
              <PrismicText field={slice.primary.title} />
            </h1>
          )}
          {isFilled.richText(slice.primary.body) && (
            <div className="text-left text-lg mb-4">
              <PrismicRichText field={slice.primary.body} />
            </div>
          )}
          {isFilled.link(slice.primary.button_link) && (
            <ButtonOrange field={slice.primary.button_link}>{slice.primary.button_label}</ButtonOrange>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceHeader;
