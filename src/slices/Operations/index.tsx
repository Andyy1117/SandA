import Bounded from "@/components/Bounded";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `Operations`.
 */
export type OperationsProps = SliceComponentProps<Content.OperationsSlice>;

/**
 * Component for "Operations" Slices.
 */
const Operations = async ({ slice }: OperationsProps): Promise<JSX.Element> => {

  const client = createClient();

  const operations =  await Promise.all(
    slice.items.map(async (item)=>{
      if(isFilled.contentRelationship(item.operations)) {
        return await client.getByID<Content.OperationsDocument>(item.operations.id,)
      }
    })
  )
  return (

    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.body} />

      <div className="grid gap-16 bg-orange">
        {operations.map(
          (operation, index) =>
            operation && (
              <div
              key={operation.id}
              className="relative grid gap-8 opacity-85 transition-opacity duration-300 hover:opacity-100 md:grid-cols-2 lg:grid-cols-3 hover:cursor-pointer"
              >
                {/* Text Content */}
                <div className="flex flex-col justify-center gap-4 col-span-1">
                  <h3 className="text-6xl font-bold">
                    <PrismicText field={operation.data.heading} />
                  </h3>
                  <div className="text-lg text-gray-600">
                    <PrismicRichText field={operation.data.body} />
                  </div>
                  <PrismicNextLink
                    document={operation}
                    className="text-blue-500 font-medium hover:underline after:absolute after:inset-0"
                    >
                    Read More
                  </PrismicNextLink>
                </div>

                {/* Image Content */}
                <PrismicNextImage
                  field={operation.data.image}
                  quality={100}
                  className={clsx(
                    "rounded-xl col-span-1 lg:col-span-2",
                    index % 2 && "md:order-first" // Alternate image order
                  )}
                  />
              </div>
            )
          )}
      </div>

    </Bounded>
  );
};

export default Operations;
