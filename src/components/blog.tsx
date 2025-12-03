import Image from "next/image";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./sub-heading";
import blog from "@/assets/images/blog.png";

export default function Blog() {
  return (
    <section id="blog">
      <Container className="overflow-hidden relative py-10 md:py-20 lg:py-32 flex flex-col gap-6 md:gap-10 lg:gap-20">
        <div className="flex flex-col gap-4">
          <Heading variant="big" className="md:text-center">
            Our Blog
          </Heading>
          <SubHeading variant="big" className="md:mx-auto lg:max-w-2xl">
            Insights, guides, and best practices for Vision AI and computer
            vision
          </SubHeading>
        </div>

        <div className="border bg-secondary rounded-3xl p-2">
          <div className="border rounded-2xl bg-background flex flex-col lg:flex-row gap-4 p-4">
            <div className="flex flex-col md:justify-center gap-4">
              <Heading>A Guide to Bounding Box Formats</Heading>
              <SubHeading>
                Learn the most common bounding box formats used in computer
                vision, including COCO, YOLO, and Pascal VOC. This quick guide
                explains how bounding boxes represent objects in images, the key
                format differences, and how to choose the right one for your
                object detection projects.
              </SubHeading>
              <p className="mt-4">February 18, 2025</p>
            </div>

            <div className="flex-1 rounded-[6px] overflow-hidden">
              <Image
                src={blog}
                alt="image blog"
                height={100}
                width={100}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
