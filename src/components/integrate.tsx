"use client";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import { Button } from "./ui/button";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { currentCode } from "@/lib/constants";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import GridBackground from "./background/grid-background";

export default function Integrate() {
  const [code, setCode] = useState<"Python" | "Javascript">("Python");
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const timer = setInterval(
      () =>
        setCode((prev) => (prev === "Javascript" ? "Python" : "Javascript")),
      3000
    );

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="integrate">
      <Container className="flex flex-col lg:flex-row gap-10 md:gap-20 py-10 md:py-20 lg:py-32 relative">
        <div className="flex-1 h-full w-full">
          <div className="border rounded-3xl bg-secondary relative z-10 p-2">
            <div className="border rounded-2xl bg-background">
              <div className=" py-2 px-4 border-b">
                <div className="flex items-center gap-4">
                  <Button
                    onClick={() => setCode("Python")}
                    variant={code === "Python" ? "secondary" : "ghost"}
                  >
                    Python
                  </Button>
                  <Button
                    onClick={() => setCode("Javascript")}
                    variant={code === "Javascript" ? "secondary" : "ghost"}
                  >
                    Javascript
                  </Button>
                </div>
              </div>
              <div className="bg-accent/40 p-4 overflow-hidden">
                <motion.div
                  key={code}
                  initial={{
                    opacity: 0,
                    x: -100,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "backOut",
                  }}
                  className="h-84"
                >
                  <SyntaxHighlighter
                    style={resolvedTheme === "dark" ? a11yDark : duotoneLight}
                    customStyle={{
                      background: "transparent",
                      margin: 0,
                      padding: "0.5rem",
                      fontSize: "14px",
                    }}
                    language={code === "Javascript" ? "javascript" : "python"}
                  >
                    {currentCode[code]}
                  </SyntaxHighlighter>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-8 justify-center">
          <Heading>Integrate Easily</Heading>
          <div className="flex flex-col gap-2">
            <Heading variant="small" className="text-compliment">
              Ship in Minutes
            </Heading>
            <SubHeading className="max-w-sm">
              Our simple Python and Node packages that get you from idea to
              production fast.
            </SubHeading>
            <Link
              href={"https://docs.dragoneye.ai/"}
              className="mt-2 bg-compliment md:w-fit rounded-md py-1.5 px-4 text-md font-medium hover:opacity-90"
            >
              View API Docs
            </Link>
          </div>
        </div>

        <div className="h-100 w-120 overflow-hidden absolute top-80 lg:top-40 right-50 md:-left-40 lg:left-80 mask-radial-to-90% -z-10">
          <GridBackground className="bg-size-[40px_40px]" />
        </div>
      </Container>
    </section>
  );
}
