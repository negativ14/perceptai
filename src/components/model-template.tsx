"use client";
import { ElementType } from "react";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import {
  Car,
  Hamburger,
  Laptop,
  Panda,
  Sprout,
  Volleyball,
} from "lucide-react";
import { motion } from "motion/react";
import GridBackground from "./background/grid-background";

const models = [
  { title: "Animals", icon: Panda },
  { title: "Food", icon: Hamburger },
  { title: "Vehicles", icon: Car },
  { title: "Plants", icon: Sprout },
  { title: "Electronics", icon: Laptop },
  { title: "Sports", icon: Volleyball },
];

export default function ModelTemplate() {
  return (
    <section id="model-template">
      <Container className="flex flex-col gap-8 py-10 md:py-20 relative overflow-hidden px-4 md:px-8 lg:px-16">
        <div className="flex flex-col gap-4">
          <Heading variant="big" className="md:text-center">
            Get started quick <br /> with Model Templates
          </Heading>
          <SubHeading className="md:mx-auto">
            Pre-configured templates to jumpstart your AI model
          </SubHeading>
        </div>

        <div className="flex flex-wrap gap-4 items-center md:justify-center">
          {models.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.1 * index,
              }}
            >
              <ModelBox icon={item.icon} title={item.title} />
            </motion.div>
          ))}
        </div>

        <div className="h-100 w-120 overflow-hidden absolute -top-20 right-50 md:-right-60 lg:right-50 mask-radial-to-90% -z-10">
          <GridBackground className="bg-size-[40px_40px]" />
        </div>
      </Container>
    </section>
  );
}

export function ModelBox({
  title,
  icon: Icon,
}: {
  title: string;
  icon: ElementType;
}) {
  return (
    <div className="border rounded-lg p-1 bg-secondary w-fit self-center-safe ">
      <div className="border rounded-md bg-background size-25 flex flex-col items-center justify-center gap-2">
        <Icon className="text-primary size-6" />
        <p className="text-lg tracking-tight font-medium font-mono whitespace-nowrap">
          {title}
        </p>
      </div>
    </div>
  );
}
