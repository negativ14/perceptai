import Image from "next/image";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import blog from "@/assets/images/blog.png";

export default function Blog() {
  return (
    <section id="blog">
      <Container className="overflow-hidden relative py-10 md:py-20 lg:py-32 flex flex-col gap-6 md:gap-10 lg:gap-20 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col gap-4">
          <Heading variant="big" className="md:text-center">
            Our Blog
          </Heading>
          <SubHeading
            variant="big"
            className="md:mx-auto lg:max-w-2xl md:text-center"
          >
            Articles, tutorials, and practical insights on vision systems and
            visual AI.
          </SubHeading>
        </div>

        <div className="border bg-secondary rounded-3xl p-2">
          <div className="border rounded-2xl bg-background flex flex-col lg:flex-row gap-4 p-4">
            <div className="flex flex-col md:justify-center gap-4">
              <Heading variant="small">
                Understanding Bounding Box Standards
              </Heading>
              <SubHeading className="max-w-lg">
                An overview of popular bounding box formats like COCO, YOLO, and
                Pascal VOC. Learn how object regions are represented, how
                formats differ, and which one fits your detection workflow best.
              </SubHeading>
              <p className="mt-4 dark:bg-linear-to-br dark:from-yellow-400 dark:via-yellow-200 dark:to-amber-500 bg-linear-to-br from-yellow-400 to-amber-500 w-fit bg-clip-text text-transparent">
                January 14, 2026
              </p>
            </div>

            <div className="flex-1 rounded-xl overflow-hidden min-h-full w-auto relative">
              <Image
                src={
                  "https://res.cloudinary.com/dag2hnynz/image/upload/v1735893335/jfj1rmvmy3hh7hvvweru.jpg"
                }
                alt="image blog"
                height={1600}
                width={900}
                className="w-full h-auto object-cover "
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-xl" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
