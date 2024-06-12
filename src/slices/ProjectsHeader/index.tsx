import Bounded from "@/components/Bounded";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectsHeader`.
 */
export type ProjectsHeaderProps =
  SliceComponentProps<Content.ProjectsHeaderSlice>;

/**
 * Component for "ProjectsHeader" Slices.
 */
const ProjectsHeader = ({ slice }: ProjectsHeaderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="pt-24">
        <div className="bg-[#ffa600] p-4 py-8">
          {isFilled.richText(slice.primary.title) && (
            <h1 className="text-center text-balance text-xl md:text-7xl font-bold my-auto text-white">
              <PrismicText field={slice.primary.title} />
            </h1>
          )}

          {isFilled.richText(slice.primary.body) && (
            <div className="mt-6 text-center text-balance text-xl text-white">
              <PrismicRichText field={slice.primary.body} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsHeader;
