import Bounded from "@/components/Bounded";
import ButtonOrange from "@/components/ButtonOrange";
import ButtonWhite from "@/components/ButtonWhite";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServiceBenefits`.
 */
export type ServiceBenefitsProps =
  SliceComponentProps<Content.ServiceBenefitsSlice>;

/**
 * Component for "ServiceBenefits" Slices.
 */
const ServiceBenefits = ({ slice }: ServiceBenefitsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col md:flex-row gap-8 my-8">
        <div className="md:w-1/2">
          <div className="text-start text-balance text-4xl md:text-5xl font-bold">
            <PrismicRichText field={slice.primary.title} />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="text-start text-balance mb-4">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <div className="space-x-4">
            <ButtonWhite field={slice.primary.button1link}><>{slice.primary.button2label}</></ButtonWhite>
            <ButtonOrange field={slice.primary.button2link}><>{slice.primary.button2text}</></ButtonOrange>
          </div>
        </div>
      </div>
      <PrismicNextImage 
      field={slice.primary.image} 
      className="rounded-lg"
      />
    </Bounded>
  );
};

export default ServiceBenefits;
