import Bounded from "@/components/Bounded";
import ButtonOrange from "@/components/ButtonOrange";
import ButtonWhite from "@/components/ButtonWhite";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SecondaryCta`.
 */
export type SecondaryCtaProps = SliceComponentProps<Content.SecondaryCtaSlice>;

/**
 * Component for "SecondaryCta" Slices.
 */
const SecondaryCta = ({ slice }: SecondaryCtaProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="-mt-10"
    >
      <div className="bg-[#ffa600] rounded-lg p-8 items-center justify-center">
        <PrismicRichText 
        field={slice.primary.title} 
        components={{
          heading2: ({children}) =>
            <h2 className="text-center text-balance text-4xl md:text-5xl font-bold">
              {children}
            </h2> 
        }}
        />
        <div className="text-center text-balance text-xl text-slate-600 mt-6 font-medium">
          <PrismicRichText field={slice.primary.body} />
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <ButtonWhite field={slice.primary.button_link}>
            <>{slice.primary.button_label}</>
          </ButtonWhite>
        </div>
      </div>
    </section>
  );
};

export default SecondaryCta;
