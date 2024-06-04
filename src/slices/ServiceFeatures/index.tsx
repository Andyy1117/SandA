import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServiceFeatures`.
 */
export type ServiceFeaturesProps =
  SliceComponentProps<Content.ServiceFeaturesSlice>;

/**
 * Component for "ServiceFeatures" Slices.
 */
const ServiceFeatures = ({ slice }: ServiceFeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 my-auto">
          {slice.items.map((item, index) => (
            <div key={index}> 
              <div className="my-12">
                <div className="text-left text-3xl font-semibold">
                  <PrismicRichText field={item.title} />
                </div>
                <div className="text-left text-balance ">
                  <PrismicRichText field={item.body} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/2">
          <PrismicNextImage 
          field={slice.primary.image}
          className="rounded-lg" />
        </div>

      
      </div>
      
    </Bounded>
  );
};

export default ServiceFeatures;
