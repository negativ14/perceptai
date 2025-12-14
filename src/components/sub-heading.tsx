import { cn } from "@/lib/utils";
import React from "react";

export default function SubHeading({
  className,
  children,
  as = "p",
  variant = "medium",
}: {
  className?: string;
  children: React.ReactNode;
  as?: "p" | "h3";
  variant?: "big" | "medium" | "small";
}) {
  const variants = {
    big: "text-lg md:text-xl",
    medium: "text-md md:text-lg",
    small: "text-xs md:text-sm",
  };
  const Tag = as;
  return (
    <Tag
      className={cn(
        "text-muted-foreground font-mono",
        variants[variant],
        className
      )}
    >
      {children}
    </Tag>
  );
}
