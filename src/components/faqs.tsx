"use client";
import { AnimatePresence, motion } from "motion/react";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import { faqs } from "@/lib/constants";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQs() {
  return (
    <section id="faqs">
      <Container className="py-10 md:py-20 lg:py-32 flex flex-col gap-10 md:gap-20">
        <div className="flex flex-col gap-4">
          <Heading variant="big" className="md:text-center">
            Frequently Asked Questions
          </Heading>
          <SubHeading variant="big" className="md:mx-auto">
            Everything you need to know about pricing
          </SubHeading>
        </div>

        <div className="flex flex-col gap-4 min-w-3xl mx-auto">
          {faqs.map((item) => (
            <FAQ
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-secondary flex flex-col rounded-xl p-6 w-full cursor-pointer hover:opacity-85 transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl tracking-tight">{question}</h2>
        {open ? <ChevronUp /> : <ChevronDown />}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: 10,
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <SubHeading className="font-medium">{answer}</SubHeading>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
