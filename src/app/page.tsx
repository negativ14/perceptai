import Blog from "@/components/blog";
import FAQs from "@/components/faqs";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Integrate from "@/components/integrate";
import ModelTemplate from "@/components/model-template";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ModelTemplate />
      <Integrate />
      <Blog />
      <FAQs />
    </main>
  );
}
