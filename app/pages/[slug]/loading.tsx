import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  const render = () => {
    return (
      <div className="flex flex-col gap-2">
        <Skeleton className="w-[100px] h-[32px] rounded-md" />
        <Skeleton className="w-full h-[18px] rounded-md" />
        <Skeleton className="w-full h-[18px] rounded-md" />
        <Skeleton className="w-full h-[18px] rounded-md" />
        <Skeleton className="w-full h-[18px] rounded-md" />
        <Skeleton className="w-full h-[18px] rounded-md" />
      </div>
    );
  };
  return (
    <div className="w-full flex flex-col gap-4">
      <Skeleton className="w-[45%] h-[40px] rounded-md" />

      <div className="flex flex-col gap-4">
        <Skeleton className="h-6 w-[250px]" />
        <Skeleton className="h-6 w-[200px]" />
        <Skeleton className="h-6 w-[200px]" />
        <Skeleton className="h-6 w-[250px]" />
        <Skeleton className="h-6 w-[200px]" />
        <Skeleton className="h-6 w-[200px]" />
        <Skeleton className="h-6 w-[200px]" />
      </div>

      <div className="flex flex-col gap-4">
        {Array.from({ length: 30 }).map((_, index) => (
          <React.Fragment key={index}>{render()}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Loading;
