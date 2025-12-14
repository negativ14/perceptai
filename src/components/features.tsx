import { Rocket, Target, Zap } from "lucide-react";
import Container from "./container";
import Heading from "./heading";
import Badge from "./ui/badge";
import SubHeading from "./sub-heading";
import GridBackground from "./background/grid-background";

export default function Features() {
  return (
    <section id="features">
      <Container className="py-10 md:py-20 lg:py-32 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-8 relative">
          <div className="flex flex-col justify-center gap-8 md:gap-12 lg:max-w-2xl relative z-10 self-start md:self-center md:max-w-sm">
            <Heading variant="big">
              From Simple Text <br /> to Accurate Detection
            </Heading>

            <div className="flex flex-wrap gap-6 max-w-sm">
              <Badge
                icon={Zap}
                className="-rotate-4 hover:rotate-0 transition-transform duration-200 ease-in"
              >
                Zero-Shot Detection
              </Badge>
              <Badge icon={Rocket}> Live in Seconds </Badge>
              <Badge
                icon={Target}
                className="rotate-3 hover:rotate-0 transition-transform duration-200 ease-in"
              >
                No Fine-Tuning
              </Badge>
            </div>

            <div className="flex flex-col lg:flex-row lg:item-center gap-4">
              <div className="flex flex-col gap-2">
                <Heading
                  variant="small"
                  className="dark:bg-linear-to-br dark:from-yellow-400 dark:via-yellow-200 dark:to-amber-500 bg-linear-to-br from-yellow-400 to-amber-500 w-fit bg-clip-text text-transparent"
                >
                  Natural Language Control
                </Heading>
                <SubHeading variant="small" className="max-w-sm lg:max-w-md">
                  Describe the target in everyday words. The platform interprets
                  your request and applies it instantly to live or recorded
                  video.
                </SubHeading>
              </div>
              <div className="flex flex-col gap-2">
                <Heading
                  variant="small"
                  className="dark:bg-linear-to-br dark:from-yellow-400 dark:via-yellow-200 dark:to-amber-500 bg-linear-to-br from-yellow-400 to-amber-500 w-fit bg-clip-text text-transparent lg:max-w-sm"
                >
                  Instant Zero-Shot Models Built for Production
                </Heading>
                <SubHeading variant="small" className="max-w-sm lg:max-w-md">
                  Skip training entirely. Your detection models are generated
                  and deployed almost immediately.
                </SubHeading>
              </div>
            </div>
          </div>

          <div className="flex-1 border bg-secondary h-full w-full p-2 rounded-3xl aspect-square flex">
            <div className="border rounded-2xl overflow-hidden">
              <video
                src={
                  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                }
                autoPlay
                muted
                loop
                playsInline
                className="rounded-2xl object-cover h-full"
              />
            </div>
          </div>

          <div className="h-100 w-120 overflow-hidden absolute opacity-50 md:opacity-100 top-0 lg:-top-60 right-0 mask-radial-to-90% -z-10">
            <GridBackground className="bg-size-[40px_40px]" />
          </div>

          <div className="h-100 w-120 overflow-hidden absolute top-40 lg:top-10 -left-20 lg:left-0 mask-radial-to-90% hidden md:block">
            <GridBackground className="bg-size-[40px_40px]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
