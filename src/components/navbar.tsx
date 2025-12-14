"use client";
import Logo from "@/assets/icons/logo";
import Link from "next/link";
import Container from "./container";
import ModeToggle from "./ui/theme-toggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-background z-10 relative">
      <Container className="overflow-hidden px-4 md:px-8 lg:px-16">
        <div className="hidden md:flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6 font-manrope">
            <ModeToggle />
            <nav className="flex items-center gap-8">
              <Link href={"/docs"}>Documents</Link>

              <Link
                href={"/playground"}
                className="bg-compliment text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.96] dark:bg-linear-to-br dark:from-yellow-400 dark:via-yellow-200 dark:to-amber-500 bg-linear-to-br from-yellow-400 to-amber-500 dark:text-background"
              >
                Try it Now!
              </Link>
            </nav>
          </div>
        </div>

        <div className="md:hidden flex item-center justify-between gap-4">
          <Logo />
          <div className="shrink-0 flex items-center gap-2">
            <ModeToggle />
            <Button
              onClick={() => setOpen(!open)}
              className=""
              variant={"ghost"}
              size={"icon"}
            >
              {open ? (
                <X className="shrink-0 size-4" />
              ) : (
                <Menu className="shrink-0 size-4" />
              )}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0, paddingTop: 0 }}
              animate={{ opacity: 1, height: "auto", paddingTop: 10 }}
              exit={{ opacity: 0, height: 0, paddingTop: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="flex flex-col gap-4"
            >
              <Link href={"/docs"}>Documents</Link>

              <Link
                href={"/playground"}
                className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.96] w-fit dark:bg-linear-to-br dark:from-yellow-400 dark:via-yellow-200 dark:to-amber-500 bg-linear-to-br from-yellow-400 to-amber-500 dark:text-background"
              >
                Try it Now!
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
