"use client";
import { useState } from "react";
import Heading from "../heading";
import SubHeading from "../sub-heading";
import { PricingSlider } from "./pricing-slider";
import { CircleAlert } from "lucide-react";

export function PriceCalculator() {
  const VIDEO_RATE = 0.069;
  const IMAGE_RATE = 0.0069;
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
          Estimate usage costs based on your video workload
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
            <p>Video: $0.069/min</p>
            <p>Image: $0.0069/image</p>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2 px-2 pb-4">
        <CircleAlert className="text-yellow-400 mt-1 shrink-0 size-4" />
        <h2 className="text-muted-foreground">
          Pricing is based on video length at 1 FPS, with proportional scaling
          for higher frame rates and volume-based discounts.
        </h2>
      </div>
    </div>
  );
}
