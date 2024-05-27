import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import Bounded from "@/components/Bounded";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

const icons = {
  Email: <MdOutlineEmail/>,
  Phone: <FiPhone/>,
  Office: <MdOutlineLocationOn/>,
};
/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mb-40"
    >
      <div className="flex flex-col items-center justify-center text-balance">
        <PrismicRichText 
              field={slice.primary.title} 
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-balance text-left text-4xl md:text-5xl font-bold">
                    { children }
                  </h2>
                )
              }}
          />
        <div className="max-w-md text-center text-balance mt-4 text-lg">
          <PrismicRichText field={slice.primary.body} />
        </div>
      </div>

      <div className="mt-16 mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
        {slice.items.map((item, index) => (
          <div key={index}>
            {item.icon && (
              <div className="flex text-3xl md:text-4xl text-center justify-center text-blue-700">
                <>{icons[item.icon]}</>
              </div>
            )}
            
            <div className="text-3xl text-center text-balance font-bold mt-8 border-b border-blue-600">
              <PrismicRichText field={item.heading} />
            </div>

            <div className="mt-8 text-center text-balance">
              <PrismicRichText field={item.description} />
            </div>

            <div className="mt-8 text-center underline text-black">
              <PrismicRichText field={item.link} />
            </div>
          </div>
        ))}
      </div>
      
    </Bounded>
  );
};

export default Contact;
