import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { FaHammer, FaLightbulb, FaWarehouse } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import ButtonOrange from "@/components/ButtonOrange";

const icons = {
  Bulb: <FaLightbulb />,
  Construction: <MdConstruction />,
  Hammer: <FaHammer />,
  House: <FaWarehouse />,
};


/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col md:flex-row">
        <div className="items-left justify-center mr-8">
          <PrismicRichText 
            field={slice.primary.title} 
            components={{
              heading2: ({ children }) => (
                <h2 className="text-balance text-left text-4xl md:text-5xl font-medium">
                  { children }
                </h2>
              )
            }}
          />
          <div className="max-w-md text-left text-balance mt-4 text-lg">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <ButtonOrange 
            field={slice.primary.button_link}
            className="mt-8"><>{slice.primary.button_label}</>
          </ButtonOrange>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

          {slice.items.map((item, index) => (
        
              <div key={index}>
                {item.icon && (
                  <div className="text-2xl text-blue-700">
                    <>{icons[item.icon]}</>
                  </div>
                )}

                <div className="text-2xl font-semibold mt-4 border-b border-blue-600">
                  <PrismicRichText field={item.title} />
                </div>

                <div className="mt-4">
                  <PrismicRichText field={item.body} />
                </div>
              </div>            
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Services;
