import Bounded from "@/components/Bounded";
import { Content, asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
	PrismicRichText,
	PrismicText,
	SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `HomeTeam`.
 */
export type HomeTeamProps = SliceComponentProps<Content.HomeTeamSlice>;

/**
 * Component for "HomeTeam" Slices.
 */
const HomeTeam = ({ slice }: HomeTeamProps): JSX.Element => {
	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}>
			<PrismicRichText
				field={slice.primary.title}
				components={{
					heading2: ({ children }) => (
						<h2 className="text-balance text-center text-4xl md:text-5xl font-bold">
							{children}
						</h2>
					),
				}}
			/>

			<div className="mx-auto max-w-md text-center text-balance mt-6 text-xl text-slate-600">
				<PrismicRichText field={slice.primary.body} />
			</div>

			<div className="mt-16 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10">
				{slice.items.map((item) => (
					<div
						className="glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-white p-4"
						key={asText(item.name)}>
						<div>
							<PrismicNextImage field={item.image} className="rounded-lg" />
						</div>

						<h3 className="text-2xl font-semibold mt-4 border-b border-black">
							<PrismicText field={item.name} />
						</h3>

						<div className="text-xl">
							<PrismicRichText field={item.position} />
						</div>

						<div className="max-w-md text-balance mt-8">
							<PrismicRichText field={item.body} />
						</div>
					</div>
				))}
			</div>
		</Bounded>
	);
};

export default HomeTeam;
