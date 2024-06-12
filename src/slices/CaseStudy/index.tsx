import Bounded from "@/components/Bounded";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
	PrismicRichText,
	PrismicText,
	SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `CaseStudy`.
 */
export type CaseStudyProps = SliceComponentProps<Content.CaseStudySlice>;

/**
 * Component for "CaseStudy" Slices.
 */
const CaseStudy = async ({ slice }: CaseStudyProps): Promise<JSX.Element> => {
	const client = createClient();

	const caseStudies = await Promise.all(
		slice.items.map(async (item) => {
			if (isFilled.contentRelationship(item.case_study)) {
				return await client.getByID<Content.CaseStudyDocument>(
					item.case_study.id
				);
			}
		})
	);

	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}>
			<PrismicRichText
				field={slice.primary.title}
				components={{
					heading2: ({ children }) => (
						<h2 className="text-left text-balance text-4xl md:text-5xl font-bold">
							{children}
						</h2>
					),
				}}
			/>
			<div className="text-xl text-left text-balance font-medium text-slate-600 mt-6">
				<PrismicRichText field={slice.primary.body} />
			</div>

			<div className="mt-20 grid gap-16">
				{caseStudies.map(
					(caseStudy, index) =>
						caseStudy && (
							<div
								key={caseStudy.id}
								className="relative grid gap-4 opacity-85 transition-opacity
            duration-300 hover:cursor-pointer 
            hover:opacity-100 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
								<div className="flex col-span-1 flex-col justify-center gap-4">
									<h3 className="text-4xl">
										<PrismicText field={caseStudy.data.heading} />
									</h3>
									<div className="max-w-md">
										<PrismicRichText field={caseStudy.data.body} />
									</div>

									<PrismicNextLink
										document={caseStudy}
										className="after:absolute after:inset-0 hover-underline underline-black"
                    
									>
                    Read <PrismicText field={caseStudy.data.heading}/>
                  </PrismicNextLink>
								</div>
								<PrismicNextImage
									field={caseStudy.data.image}
									quality={100}
									className={clsx(
										"rounded-lg lg:col-span-2",
										index % 2 && "md:-order-1"
									)}
								/>
							</div>
						)
				)}
			</div>
		</Bounded>
	);
};

export default CaseStudy;
