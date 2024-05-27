import Bounded from "@/components/Bounded";
import ButtonOrange from "@/components/ButtonOrange";
import ButtonWhite from "@/components/ButtonWhite";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Cta`.
 */
export type CtaProps = SliceComponentProps<Content.CtaSlice>;

/**
 * Component for "Cta" Slices.
 */
const Cta = ({ slice }: CtaProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#FFA500]"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4 mt-28">
          
          <PrismicRichText 
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => 
              <h2 className="text-balance text-center text-5xl font-medium text-white">{ children }</h2>
            }} />
          

          <div className="text-balance text-center mt-6 text-white">
            <PrismicRichText field={slice.primary.body} />
          </div>
        
        <div className="flex flex-row items-center justify-center space-x-4 mt-6 ">
          <ButtonOrange 
          field={slice.primary.button1text}
          >
            <>{slice.primary.button1link}</>
          </ButtonOrange>
          <ButtonWhite
          field={slice.primary.button2}
          >
            <>{slice.primary.button2text}</>
          </ButtonWhite>
        </div>
        </div>

        <div className="md:w-1/2">
          <PrismicNextImage field={slice.primary.image} className="rounded-lg" />
        </div>
      </div>
    </Bounded>
  );
};

export default Cta;
