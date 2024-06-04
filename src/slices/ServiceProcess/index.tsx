import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServiceProcess`.
 */
export type ServiceProcessProps =
  SliceComponentProps<Content.ServiceProcessSlice>;

/**
 * Component for "ServiceProcess" Slices.
 */
const ServiceProcess = ({ slice }: ServiceProcessProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText 
      field={slice.primary.heading}
      components={{
        heading2: ({ children }) => (
          <h2 className="text-center text-balance font-bold text-4xl md:text-5xl">
            {children}
          </h2>
        )
      }} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {slice.items.map((item, index) => (
          <div key={index}>

            <PrismicNextImage field={item.image} className="rounded-lg shadow-md" />
            <div className="text-2xl font-semibold mt-4 border-b border-blue-600 text-balance text-center">
              <PrismicRichText field={item.title} />

            </div>
            <div className="mt-4 text-balance text-center">
              <PrismicRichText field={item.body} />
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default ServiceProcess;
