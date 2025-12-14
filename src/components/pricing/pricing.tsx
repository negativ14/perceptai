"use client";
import { pricingPlans } from "@/lib/constants";
import Container from "../container";
import Heading from "../heading";
import SubHeading from "../sub-heading";
import { PriceCalculator } from "./price-calculator";
import { PricingCard } from "./pricing-card";

export interface PricingPlan {
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
              Transparent Pricing
            </Heading>
            <SubHeading variant="big" className="text-center mx-auto">
              Build, test, and deploy vision models with clear usage-based
              pricing.
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
