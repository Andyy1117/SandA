import Bounded from "@/components/Bounded";
import ButtonOrange from "@/components/ButtonOrange";
import ButtonWhite from "@/components/ButtonWhite";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative flex flex-col md:flex-row items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${slice.primary.image.url})` }}
        ></div>

        {/* Content with transparent background */}

        <div className="relative z-10 h-full w-full md:p-24 bg-black bg-opacity-50">
          <Bounded>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 my-auto md:mx-16">
                <PrismicRichText 
                  field={slice.primary.title}
                  components={{
                    heading2: ({ children }) => 
                      <h2 className="text-balance text-left text-5xl font-medium text-white">{children}</h2>
                  }} 
                  />
                </div>

            <div className="md:w-1/2 md:mx-16">
              <div className="text-balance text-left md:text-right mt-6 text-white text-xl font-medium">
                <PrismicRichText field={slice.primary.body} />
              </div>

              <div className="flex flex-row items-start md:items-end justify-start md:justify-end space-x-4 mt-6 ">
                <ButtonOrange field={slice.primary.button1text}>
                  {slice.primary.button1link}
                </ButtonOrange>
                <ButtonWhite field={slice.primary.button2}>
                  {slice.primary.button2text}
                </ButtonWhite>
              </div>
            </div>
            </div>
          </Bounded>
        </div>
      </div>
    </section>
  );
};

export default Cta;
