import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <h1 className={cn("text-lg md:text-xl lg:text2xl font-semibold font-manrope", className)}>
      PerceptAI
    </h1>
  );
}
