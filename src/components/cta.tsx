import Link from "next/link";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import { ArrowRight } from "lucide-react";
import GridBackground from "./background/grid-background";

export default function CTA() {
  return (
    <section id="cta">
      <Container className="py-10 md:py-20 lg:py-32 px-4 md:px-8 lg:px-16">
        <div className="border p-2 rounded-3xl bg-secondary">
          <div className="border rounded-2xl bg-background overflow-hidden flex flex-col items-center justify-center p-4 gap-8 h-80 relative">
            <Heading variant="big">Ready to start building?</Heading>
            <SubHeading variant="big" className="text-center">
              Explore the playground and begin creating AI-powered workflows
              today
            </SubHeading>
            <Link
              href={"/playground"}
              className="flex items-center gap-2 bg-compliment text-white rounded-md px-4 py-2 text-md font-medium dark:bg-linear-to-br dark:from-yellow-400 dark:via-yellow-200 dark:to-amber-500 bg-linear-to-br from-yellow-400 to-amber-500 md:w-fit dark:text-background"
            >
              Try it Now
              <ArrowRight className="size-4" />
            </Link>

            <div className="h-100 w-120 overflow-hidden absolute -top-40 -right-60 md:-top-20 md:-right-50 mask-radial-to-90% ">
              <GridBackground className="bg-size-[40px_40px]" />
            </div>

            <div className="h-100 w-120 overflow-hidden absolute -bottom-60 -left-60 md:-bottom-40 md:-left-50 mask-radial-to-90% ">
              <GridBackground className="bg-size-[40px_40px]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
