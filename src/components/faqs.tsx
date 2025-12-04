"use client";
import { AnimatePresence, motion } from "motion/react";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import { faqs } from "@/lib/constants";
import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function FAQs() {
  return (
    <section id="faqs">
      <Container className="py-10 md:py-20 lg:py-32 flex flex-col gap-10 md:gap-20 overflow-hidden px-4 md:px-8 lg:px-16">
        <div className="flex flex-col gap-4">
          <Heading variant="big" className="md:text-center">
            Frequently Asked Questions
          </Heading>
          <SubHeading variant="big" className="md:mx-auto">
            Everything you need to know about pricing
          </SubHeading>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-auto md:min-w-2xl lg:min-w-3xl mx-auto">
          {faqs.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.1 * index,
              }}
            >
              <FAQ question={item.question} answer={item.answer} />
            </motion.div>
          ))}

          <Link
            href="https://playground.dragoneye.ai/?contactForm"
            className="bg-secondary flex flex-col rounded-xl p-6 w-full cursor-pointer hover:opacity-85 transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl tracking-tight">Still have questions?</h2>
              <span className="flex items-center gap-2 text-sky-500">
                Contact us <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
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
      <div className="flex items-start justify-between">
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
              marginTop: 0,
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
