import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto h-full w-full max-w-screen-xl px-4 md:px-20 lg:px-12 2xl:max-w-[1320px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
