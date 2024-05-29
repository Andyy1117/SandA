import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutHistory`.
 */
export type AboutHistoryProps = SliceComponentProps<Content.AboutHistorySlice>;

/**
 * Component for "AboutHistory" Slices.
 */
const AboutHistory = ({ slice }: AboutHistoryProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      
    >
      <div className="container flex flex-col md:flex-row items-start md:space-x-8 -mt-24">
        <div className="text-container rounded-lg p-4">
          <PrismicRichText 
            field={slice.primary.title} 
            components={{
              heading2: ({ children }) =>
                <h2 className="text-balance text-start text-4xl md:text-5xl font-medium">
                  {children}
                </h2>
              }}
          />
          <div className="max-w-md text-wrap text-start mt-8 text-xl text-slate-500">
            <PrismicRichText field={slice.primary.body} />
          </div>
        </div>
        
        <div className="image-container hidden md:visible">
          {slice.items.map((item, index)=> (
            <div key={index} className="rounded-lg">
              <PrismicNextImage field={item.image} />
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AboutHistory;
