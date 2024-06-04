import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FaHammer } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";

/**
 * Props for `ServiceFields`.
 */
export type ServiceFieldsProps =
  SliceComponentProps<Content.ServiceFieldsSlice>;

const icons = {
  Construction: <MdConstruction />,
  Hammer: <FaHammer />,
};
/**
 * Component for "ServiceFields" Slices.
 */
const ServiceFields = ({ slice }: ServiceFieldsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      
    >
      <PrismicRichText 
      field={slice.primary.title} 
      components={{
        heading2:({children}) => (
          <h2 className="text-center font-bold text-4xl md:text-5xl mb-16">
            {children}
          </h2>
        )
      }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mx-auto border-8 border-blue-700 rounded-xl p-8">
        {slice.items.map((item, index ) =>
        <div key={index} className="row-span-3 grid grid-rows-subgrid">
          {item.icons && (
            <div className="text-4xl text-blue-700 mx-auto">
              <>{icons[item.icons]}</>
            </div>
          )}

          <div className="text-2xl font-semibold mt-4 border-b border-blue-600 text-balance text-center">
            <PrismicRichText field={item.header} />
          </div>

          <div className="mt-4 text-balance text-center">
            <PrismicRichText field={item.description} />
          </div>

        </div>
        )}
      </div>
      
    </Bounded>
  );
};

export default ServiceFields;
