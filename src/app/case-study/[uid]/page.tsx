import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicError } from "@prismicio/client";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
	const client = createClient();
	const page = await client
		.getByUID("case_study", params.uid)
		.catch(() => notFound());

	return (
		<Bounded as={"article"} className="mt-24">
			<h1 className="text-7xl font-medium text-center">
				<PrismicText field={page.data.heading} />
				<p className="text-lg text-yellow-500">Case Study</p>
				<p className="mb-4 mt-8 text-lg text-center">
					<PrismicText field={page.data.body} />
				</p>
				<PrismicNextImage
				field={page.data.image}
				className="rounded-lg"
				quality={100}/>
			</h1>
			<div className="mx-auto">
				<SliceZone slices={page.data.slices} components={components} />
			</div>
		</Bounded>
	);
}

export async function generateMetadata({
	params,
}: {
	params: Params;
}): Promise<Metadata> {
	const client = createClient();
	const page = await client
		.getByUID("case_study", params.uid)
		.catch(() => notFound());

	return {
		title: page.data.meta_title,
		description: page.data.meta_description,
	};
}

export async function generateStaticParams() {
	const client = createClient();
	const pages = await client.getAllByType("case_study");

	return pages.map((page) => {
		return { uid: page.uid };
	});
}
