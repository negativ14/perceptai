import { cn } from "@/lib/utils";
import React, { ElementType } from "react";

export default function Badge({
  className,
  children,
  icon: Icon,
  iconClassName,
}: {
  className?: string;
  children: React.ReactNode;
  icon: ElementType;
  iconClassName?: string;
}) {
  return (
    <div
      className={cn("flex items-center gap-3 bg-foreground rounded-md w-fit pr-4 pl-2 py-1", className)}
    >
      <div className="bg-background rounded-full p-1">
        <Icon className={cn("size-4 lg:size-6 text-foreground shrink-0", iconClassName)} />
      </div>{" "}
      <span className="font-mono text-xs md:text-sm lg:text-md font-semibold text-background">{children}</span>
    </div>
  );
}
