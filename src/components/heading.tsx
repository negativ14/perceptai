import { cn } from "@/lib/utils";
import React from "react";

export default function Heading({
  className,
  children,
  as = "h2",
  variant = "medium",
}: {
  className?: string;
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  variant?: "big" | "medium" | "small";
}) {
  const variants = {
    big: "text-2xl md:text-4xl lg:text-6xl",
    medium: "text-xl md:text-2xl lg:text-4xl",
    small: "text-lg md:text-xl lg:text-2xl",
  };
  const Tag = as;
  return (
    <Tag
      className={cn(
        "font-semibold tracking-tight font-manrope",
        variants[variant],
        className
      )}
    >
      {children}
    </Tag>
  );
}
