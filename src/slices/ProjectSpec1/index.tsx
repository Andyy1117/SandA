import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectSpec1`.
 */
export type ProjectSpec1Props = SliceComponentProps<Content.ProjectSpec1Slice>;

/**
 * Component for "ProjectSpec1" Slices.
 */
const ProjectSpec1 = ({ slice }: ProjectSpec1Props): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

    <div className="flex flex-col md:flex-row items-center text-balance md:text-right md:space-x-8">
        <div className="grid grid-cols-2 gap-2 mt-8 md:flex md:flex-col md:overflow-auto md:max-h-screen md:w-1/2">
          {slice.items.map((item, index) => (
            <div key={index}>
              <PrismicNextImage field={item.image} />
            </div>
          ))}
        </div>
      <div className="md:sticky top-0 md:w-1/2">
        <PrismicRichText 
        field={slice.primary.title} 
        components={{
          heading2: ({children}) =>
            <h2 className="text-right text-balance text-4xl md:text-5xl font-bold mb-8 ">
              {children}
            </h2>
        }}/>
        <div className="text-right text-balance text-xl font-medium text-slate-600 space-y-8">
          <PrismicRichText field={slice.primary.body} />
        </div>
      </div>

    </div>
    </Bounded>
  );
};

export default ProjectSpec1;
