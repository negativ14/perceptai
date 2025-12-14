import Blog from "@/components/blog";
import CTA from "@/components/cta";
import FAQs from "@/components/faqs";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Integrate from "@/components/integrate";
import ModelTemplate from "@/components/model-template";
import Pricing from "@/components/pricing/pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ModelTemplate />
      <Integrate />
      <Blog />
      <Pricing />
      <FAQs />
      <CTA />
    </main>
  );
}
