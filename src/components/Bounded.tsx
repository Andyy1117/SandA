import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx(
        "px-4 py-14 first:pt-10 md:px-2 md:py-20 lg:py-24",
        className,
      )}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-7xl items-center">
        {children}
      </div>
    </Comp>
  );
}
