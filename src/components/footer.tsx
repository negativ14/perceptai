import Logo from "@/assets/icons/logo";
import Container from "./container";
import SubHeading from "./sub-heading";
import { YCombinator } from "@/assets/icons/ycombinator";

const footerLinks = [
  { title: "Product", list: ["Playground", "Pricing", "API Docs"] },
  { title: "Company", list: ["Blog", "Contact"] },
  { title: "Legal", list: ["Privacy", "Terms"] },
];

export default function Footer() {
  return (
    <footer>
      <Container className="flex flex-col gap-4 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row gap-4 md:gap-20 lg:gap-50">
          <div className="flex flex-col gap-4">
            <Logo />
            <SubHeading className="lg:text-md max-w-xs md:max-w-[200px] lg:max-w-[200px]">
              Custom vision understanding models in minutes. No training data
              needed.
            </SubHeading>
            <span className="flex flex-col gap-2">
              backed by <YCLogo />
            </span>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {footerLinks.map((item, index) => (
              <FooterLink key={index} title={item.title} list={item.list} />
            ))}
          </div>
        </div>
        <h2 className="pt-6 pb-2 px-4 text-sm text-muted-foreground font-mono text-center border-t">
          © 2025 Dragoneye. All rights reserved.
        </h2>
      </Container>
    </footer>
  );
}

export function FooterLink({ title, list }: { title: string; list: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-manrope">{title}</h2>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <p className="text-sm text-muted-foreground font-mono" key={item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export function YCLogo() {
  return (
    <div className="bg-white border rounded-md overflow-hidden w-fit flex items-center gap-2 p-0.5 pr-1">
      <YCombinator className="size-6 rounded"/>
      <p className="text-md text-orange-400 font-medium">Combinator</p>
    </div>
  );
}
