import Link from "next/link";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import { ArrowRight } from "lucide-react";
import GridBackground from "./background/grid-background";

export default function CTA() {
  return (
    <section id="cta">
      <Container>
        <div className="border p-2 rounded-3xl bg-secondary">
          <div className="border rounded-2xl bg-background overflow-hidden flex flex-col items-center justify-center p-4 gap-8 h-80 relative">
            <Heading variant="big">Want to get started?</Heading>
            <SubHeading variant="big" className="text-center">
              Jump into our playground and start building with AI today
            </SubHeading>
            <Link
              href={"https://playground.dragoneye.ai/"}
              className="flex items-center gap-2 bg-compliment rounded-md px-4 py-2 text-md font-medium"
            >
              Go to PlayGround <ArrowRight className="size-4" />
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
