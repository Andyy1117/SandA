import Bounded from "@/components/Bounded";
import ButtonOrange from "@/components/ButtonOrange";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectSpec2`.
 */
export type ProjectSpec2Props = SliceComponentProps<Content.ProjectSpec2Slice>;

/**
 * Component for "ProjectSpec2" Slices.
 */
const ProjectSpec2 = ({ slice }: ProjectSpec2Props): JSX.Element => {
	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
      >
			<div className="flex flex-col md:flex-row">
				<div className="md:w-1/2 my-auto">
					<PrismicRichText
						field={slice.primary.title}
						components={{
							heading2: ({ children }) => (
								<h2 className="text-left text-balance text-4xl md:text-5xl font-bold ">
									{children}
								</h2>
							),
						}}
					/>
					<div className="text-left text-balance font-mediums my-4">
						<PrismicRichText field={slice.primary.body} />
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 mt-8">
						{slice.items.map((item, index) => (
							<div key={index} className="">
								<div className="text-left text-balance text-4xl font-semibold">
									<PrismicRichText field={item.percentage} />
								</div>

								<div className="text-balance mt-4">
									<PrismicRichText field={item.description} />
								</div>
							</div>
						))}
					</div>

          <ButtonOrange field={slice.primary.button_link} className="mt-8">
						<>{slice.primary.button_label}</>
					</ButtonOrange>

				</div>
				<div className="md:w-1/2">
					<PrismicNextImage
						field={slice.primary.image}
						className="rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</Bounded>
	);
};

export default ProjectSpec2;
