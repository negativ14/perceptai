"use client";
import { pricingPlans } from "@/lib/constants";
import Container from "./container";
import Heading from "./heading";
import { Button } from "./ui/button";
import { Check, CircleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import SubHeading from "./sub-heading";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";
import React, { useState } from "react";

interface PricingPlan {
  title: string;
  subtitle: string;
  description: string;
  offer: string;
  offerCondition: string;
  cta: string;
  features: { text: string; beta: boolean }[];
}

export default function Pricing() {
  return (
    <section id="pricing">
      <Container className="px-4 md:px-8 lg:px-16 py-10 md:py-20 lg:py-32 overflow-hidden">
        <div className="flex flex-col gap-10 md:gap-20">
          <div className="flex flex-col gap-4">
            <Heading variant="big" className="text-center">
              Simple, Transparent Pricing
            </Heading>
            <SubHeading variant="big" className="text-center mx-auto">
              Start building with Vision AI today. No hidden fees, no surprises.
            </SubHeading>
          </div>

          <div className="flex flex-col justify-center items-strech mx-auto md:flex-row gap-4 md:gap-8">
            <PricingCard pricingPlan={pricingPlans[0]} plus={false} />
            <PricingCard pricingPlan={pricingPlans[1]} plus={true} />
          </div>

          <div className="py-6 md:py-12">
            <PriceCalculator />
          </div>
        </div>
      </Container>
    </section>
  );
}

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

export function PriceCalculator() {
  const VIDEO_RATE = 0.046;
  const IMAGE_RATE = 0.005;
  const [minutes, setMinutes] = useState(10000);
  const [images, setImages] = useState(10000);

  const videoCost = minutes * VIDEO_RATE;
  const imageCost = images * IMAGE_RATE;
  const totalCost = videoCost + imageCost;

  return (
    <div className="border bg-secondary rounded-3xl p-2 flex flex-col gap-4 md:w-2xl lg:w-4xl mx-auto">
      <div className="flex flex-col gap-2 py-4">
        <Heading className="text-center">Pricing Calculator</Heading>
        <SubHeading className="text-center mx-auto">
          Estimate your costs based on video processing needs
        </SubHeading>
      </div>
      <div className="flex-1 border rounded-2xl p-4 bg-background flex flex-col gap-8">
        <PricingSlider
          value={minutes}
          setValue={setMinutes}
          title="Minutes of Video (at 1 FPS)"
        />
        <PricingSlider
          value={images}
          setValue={setImages}
          title="Number of Images"
        />

        <div className="flex flex-col gap-4 bg-secondary rounded-[9px] p-4">
          <div className="flex items-center justify-between">
            <h2>Video Cost</h2>
            <p>${videoCost.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between">
            <h2>Image Cost</h2>
            <p>${imageCost.toFixed(2)}</p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t">
            <h2>Total Cost</h2>
            <p className="text-2xl dark:bg-linear-to-br dark:from-yellow-400 dark:via-yellow-200 dark:to-amber-500 bg-linear-to-br from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              ${totalCost.toFixed(2)}
            </p>
          </div>

          <div className="text-xs text-muted-foreground flex items-center gap-4 justify-end-safe">
            <p>Video: $0.046/min</p>
            <p>Image: $0.005/image</p>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2 px-1 pb-4">
        <CircleAlert className="text-yellow-400 mt-0.3 shrink-0" />
        <h2 className="text-muted-foreground">
          Video pricing is based on duration at 1 frame per second. Higher frame
          rates will increase costs proportionally. Volume discounts available
          for Scaled tier.
        </h2>
      </div>
    </div>
  );
}

export function PricingSlider({
  title,
  value,
  setValue,
}: {
  title: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-mono">{title}</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <Slider
          min={0}
          max={10000}
          step={1}
          value={[value]}
          onValueChange={(v) => setValue(v[0])}
          className="flex-1"
        />
        <Input
          type="number"
          min={0}
          max={10000}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-24 text-right"
        />
      </div>
    </div>
  );
}
