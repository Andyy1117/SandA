import Bounded from "@/components/Bounded";
import MessageForm from "@/components/MessageForm";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm = ({ slice }: ContactFormProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative flex items-center justify-center min-h-screen text-center bg-gray-800 md:mt-0"
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        <PrismicNextImage 
          field={slice.primary.image} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <Bounded>
        <div className="relative z-20 p-4 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <PrismicRichText 
            field={slice.primary.heading} 
            components={{
              heading2: ({ children }) => (
                <h2 className="text-4xl font-medium md:text-5xl mb-4 text-white">
                  {children}
                </h2>
              ),
            }}
          />
          <div className="bg-opacity-90 p-8 rounded-lg shadow-lg">
            <MessageForm />
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default ContactForm;
