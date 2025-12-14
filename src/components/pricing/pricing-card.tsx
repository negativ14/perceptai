import { Check } from "lucide-react";
import Heading from "../heading";
import { PricingPlan } from "./pricing";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function PricingCard({
  pricingPlan,
  plus,
}: {
  pricingPlan: PricingPlan;
  plus: boolean;
}) {
  const features = pricingPlan.features;
  return (
    <div className="border p-2 rounded-3xl bg-secondary relative overflow-hidden max-w-96">
      <div className="border rounded-2xl bg-background p-4 relative z-10 w-full h-full flex flex-col items-center justify-between gap-8">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-2">
            <Heading className="text-center">{pricingPlan.title}</Heading>
            <p className="text-center dark:bg-linear-to-br dark:from-yellow-400 dark:via-yellow-200 dark:to-amber-500 bg-linear-to-br from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              {pricingPlan.subtitle}
            </p>
            <p className="text-center max-w-xs">{pricingPlan.description}</p>
          </div>

          <div>
            <Heading className="dark:bg-linear-to-br dark:from-yellow-400 dark:via-yellow-200 dark:to-amber-500 bg-linear-to-br from-yellow-400 to-amber-500 w-fit bg-clip-text text-transparent">
              {pricingPlan.offer}
            </Heading>
            <p className="text-center">{pricingPlan.offerCondition}</p>
          </div>

          <div className="flex flex-col gap-2 self-start">
            {features.map((item, index) => (
              <p
                key={index}
                className="flex items-center gap-2 text-muted-foreground"
              >
                {" "}
                <Check className="text-green-500" />
                <span>{item.text}</span>
                {item.beta && (
                  <span className="text-white text-[10px] bg-linear-to-br from-sky-400 via-sky-500 to-blue-500 px-1.5 py-0.5 rounded-md rounded-bl-none">
                    Beta
                  </span>
                )}
              </p>
            ))}
          </div>
        </div>

        <Button
          className={cn(
            "w-full",
            plus
              ? "dark:bg-linear-to-br dark:from-yellow-400 dark:via-yellow-200 dark:to-amber-500 bg-linear-to-br from-yellow-400 to-amber-500 text-black hover:opacity-90"
              : "bg-foreground text-background hover:bg-foreground/80"
          )}
        >
          {pricingPlan.cta}
        </Button>
      </div>
    </div>
  );
}
