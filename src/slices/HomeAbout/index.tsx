import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HomeAbout`.
 */
export type HomeAboutProps = SliceComponentProps<Content.HomeAboutSlice>;

/**
 * Component for "HomeAbout" Slices.
 */
const HomeAbout = ({ slice }: HomeAboutProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 ">
        <div className="md:w-1/2 p-4 md:pt-40">
            <PrismicRichText 
            field={slice.primary.title} 
            components={{
              heading2: ({ children }) => 
                <h2 className="text-balance text-center text-4xl md:text-5xl font-medium">{ children }</h2>
            }}/>


            <div className="mx-auto mt-6 max-w-md text-balance text-center">
              <PrismicRichText field={slice.primary.body} />
            </div>

        </div>

        <div className="md:w-1/2 p-4">
          <PrismicNextImage 
          field={slice.primary.image} 
          className="rounded-lg"
          />
        </div>

      </div>

      
    </Bounded>
  );
};

export default HomeAbout;
          
