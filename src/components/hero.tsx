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
      <Container className="flex flex-col justify-center items-center gap-20 lg:gap-44 py-20 lg:py-40 relative">
        <div className="flex flex-col gap-4">
          <Heading variant="big" as="h1" className="text-center lg:leading-18">
            Real-Time Object Recognition <br />
            <span className="py-4 text-2xl md:text-4xl lg:text-6xl font-semibold tracking-tight font-manrope">
              powered by{" "}
              <span className="dark:bg-linear-to-br dark:from-yellow-400 dark:via-yellow-200 dark:to-amber-500 bg-linear-to-br from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Vision AI
              </span>
            </span>
          </Heading>

          <SubHeading
            variant="medium"
            className="text-center mx-auto tracking-tight"
          >
            Deploy custom detection models in minutes{" "}
            <br className="hidden md:block" />
            —with zero labeling or ML expertise.
          </SubHeading>
        </div>
        <div className="border aspect-video rounded-3xl p-2 bg-secondary relative z-10 select-none flex w-full">
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-center">
            ( use this to show some message when video not playing)
          </p>
          <div className="border rounded-2xl h-full min-w-full overflow-hidden">
            <video
              src={"https://dragoneye.ai/videos/bg-av1.mp4"}
              autoPlay
              muted
              loop
              playsInline
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        <Doodle1 className="absolute top-15 left-40 lg:size-13 md:size-7 hidden md:block text-muted-foreground opacity-20" />
        <Doodle2 className="absolute top-60 left-20 lg:size-10 md:size-5 hidden md:block text-muted-foreground opacity-20" />
        <Doodle3 className="absolute top-20 lg:size-12 md:size-6 right-40 hidden md:block text-muted-foreground opacity-20" />
        <Doodle4 className="absolute top-80 left-70 lg:size-20 hidden lg:block text-muted-foreground opacity-20" />
        <Doodle5 className="absolute top-80 right-60 lg:size-12 md:size-6 hidden md:block text-muted-foreground opacity-20" />
        <Doodle6 className="absolute top-8 right-120 lg:size-12 md:size-7 hidden md:block text-muted-foreground opacity-20" />
        <Doodle7 className="absolute top-25 left-120 lg:size-11 hidden lg:block text-muted-foreground opacity-20" />

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
