import Bounded from "@/components/Bounded";
import ContactForm from "@/components/MessageForm";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { MdImportContacts } from "react-icons/md";


/**
 * Props for `ContactHeader`.
 */
export type ContactHeaderProps =
  SliceComponentProps<Content.ContactHeaderSlice>;

/**
 * Component for "ContactHeader" Slices with vertical centering.
 */
const ContactHeader = ({ slice }: ContactHeaderProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mt-36">

          {isFilled.richText(slice.primary.heading) && (
            <h1 className="text-balance text-center text-5xl font-bold md:text-7xl mb-4">
              <PrismicText field={slice.primary.heading} />
            </h1>
            )}

            {isFilled.richText(slice.primary.body) && (
              <div className="mx-auto max-w-md text-center text-balance my-8 text-slate-600 text-xl font-medium">
                <PrismicRichText field={slice.primary.body} />
              </div>

            )}
      </div>
    </Bounded>
  );
};

export default ContactHeader;
