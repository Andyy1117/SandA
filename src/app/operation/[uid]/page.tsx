import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("operations", params.uid)
    .catch(() => notFound());

  return (
    <Bounded as="article">
        <div className="grid relative place-items-center text-center pt-20">
            <h1 className="text-7xl font-medium">
                <PrismicText field={page.data.heading} />

            </h1>
            <p className="mb-4 mt-8 max-w-xl text-lg text-gray-800">
                <PrismicText field={page.data.body} /> 
            </p>
            <PrismicNextImage 
                field={page.data.image}
                className="rounded-lg"
                quality={100}
                />


        <SliceZone slices={page.data.slices} components={components}/>
        </div>
    </Bounded>
    )
};

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("operations", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("operations");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
