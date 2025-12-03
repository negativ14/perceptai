"use client";
import Logo from "@/assets/icons/logo";
import Link from "next/link";
import Container from "./container";
import ModeToggle from "./ui/theme-toggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { title: "Pricing", href: "/pricing" },
  { title: "Docs", href: "https://docs.dragoneye.ai/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-background z-10 relative">
      <Container className="overflow-hidden">
        <div className="hidden md:flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6 font-manrope">
            <ModeToggle />
            <nav className="flex items-center gap-6">
              {navLinks.map((item, index) => (
                <Link href={item.href} key={index}>
                  {item.title}
                </Link>
              ))}
            </nav>
            <Link
              href={"https://playground.dragoneye.ai/"}
              className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.96]"
            >
              Playground
            </Link>
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
              {open ? <X /> : <Menu className="shrink-0" />}
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
              {navLinks.map((item) => (
                <Link href={item.href} key={item.title}>
                  {item.title}
                </Link>
              ))}
              <Link
                href={"https://playground.dragoneye.ai/"}
                className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.96] w-fit"
              >
                Playground
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
