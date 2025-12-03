import { Doodle1 } from "@/assets/icons/doodles/doodle1";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import { Doodle3 } from "@/assets/icons/doodles/doodle3";
import { Doodle2 } from "@/assets/icons/doodles/doodle2";
import { Doodle7 } from "@/assets/icons/doodles/doodle7";
import { Doodle4 } from "@/assets/icons/doodles/doodle4";
import { Doodle5 } from "@/assets/icons/doodles/doodle5";
import { Doodle6 } from "@/assets/icons/doodles/doodle6";
import GridBackground from "./background/grid-background";

export default function Hero() {
  return (
    <section id="hero">
      <Container className="flex flex-col gap-20 lg:gap-44 py-20 lg:py-40 relative">
        <div className="flex flex-col gap-4">
          <Heading variant="big" as="h1" className="text-center">
            Recognize Anything <br />
            <span className="py-4 text-2xl md:text-4xl font-semibold tracking-tight font-manrope">
              with our <span className="text-primary">Vision AI</span>
            </span>
          </Heading>

          <SubHeading
            variant="medium"
            className="text-center mx-auto tracking-tight"
          >
            Build custom video detection models in under 5 minutes{" "}
            <br className="hidden md:block" />— no annotation or ML work
            required.
          </SubHeading>
        </div>
        <div className="border aspect-video rounded-3xl p-2 bg-secondary relative z-10 select-none">
          <video
            src={"https://dragoneye.ai/videos/bg-av1.mp4"}
            autoPlay
            muted
            loop
            playsInline
            className="border rounded-2xl object-cover"
          />
        </div>

        <Doodle1 className="absolute top-15 left-30 lg:size-13 md:size-7 hidden md:block text-muted-foreground opacity-50" />
        <Doodle2 className="absolute top-60 left-20 lg:size-10 md:size-5 hidden md:block text-muted-foreground opacity-50" />
        <Doodle3 className="absolute top-20 lg:size-12 md:size-6 right-40 hidden md:block text-muted-foreground opacity-50" />
        <Doodle4 className="absolute top-50 left-70 lg:size-20 hidden lg:block text-muted-foreground opacity-50" />
        <Doodle5 className="absolute top-60 right-60 lg:size-12 md:size-6 hidden md:block text-muted-foreground opacity-50" />
        <Doodle6 className="absolute top-8 right-80 lg:size-12 md:size-7 hidden md:block text-muted-foreground opacity-50" />
        <Doodle7 className="absolute top-5 left-100 lg:size-11 hidden lg:block text-muted-foreground opacity-50" />

        <div className="h-100 w-120 overflow-hidden absolute -top-60 lg:-top-50 right-0 mask-radial-to-90% ">
          <GridBackground className="bg-size-[40px_40px]" />
        </div>

        <div className="h-100 w-120 overflow-hidden absolute top-40 lg:top-80 -left-20 lg:left-0 mask-radial-to-90% hidden md:block">
          <GridBackground className="bg-size-[40px_40px]" />
        </div>
      </Container>
    </section>
  );
}
