import { Rocket, Target, Zap } from "lucide-react";
import Container from "./container";
import Heading from "./heading";
import Badge from "./ui/badge";
import SubHeading from "./sub-heading";
import GridBackground from "./background/grid-background";

export default function Features() {
  return (
    <section id="features">
      <Container className="py-10 md:py-20 lg:py-32">
        <div className="flex flex-col md:flex-row items-center gap-8 relative">
          <div className="flex flex-col gap-12 max-w-2xl">
            <Heading className="" variant="big">
              From Plain Text <br />
              To Precise Direction
            </Heading>

            <div className="flex flex-wrap gap-6 max-w-sm">
              <Badge icon={Zap} className="-rotate-4">
                Zero-Shot AI
              </Badge>
              <Badge icon={Rocket}>Instant Deploy </Badge>
              <Badge icon={Target} className="rotate-3">
                No Training
              </Badge>
            </div>

            <div className="flex flex-col lg:flex-row lg:item-center gap-4">
              <div className="flex flex-col gap-2">
                <Heading variant="small" className="text-compliment">
                  Plain English Input
                </Heading>
                <SubHeading variant="small" className="md:max-w-sm lg:max-w-sm">
                  Describe all the things you want to detect in just a few
                  words.
                </SubHeading>
              </div>
              <div className="flex flex-col gap-2">
                <Heading variant="small" className="text-compliment">
                  Powerful Zero-Shot Models
                </Heading>
                <SubHeading variant="small" className="md:max-w-sm lg:max-w-sm">
                  No training required. Your models are customized and deployed
                  in seconds.
                </SubHeading>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-secondary h-full w-full p-2 rounded-3xl aspect-square">
            <video
              src={
                "https://dragoneye.ai/videos/ny_construction_trimmed_web_1.mp4"
              }
              autoPlay
              muted
              loop
              playsInline
              className="border rounded-2xl object-cover h-full"
            />
          </div>

          <div className="h-100 w-120 overflow-hidden absolute opacity-50 md:opacity-100 top-0 lg:-top-60 right-0 mask-radial-to-90% ">
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
