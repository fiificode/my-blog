import React from "react";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import CoverImage from "../../public/computerboy.jpeg";
import CoverImage2 from "../../public/cover.jpeg";
import CoverImage3 from "../../public/cover1.jpg";
import CoverImage4 from "../../public/cover2.jpg";

export function FeaturedPosts() {
  return (
    <BentoGrid className="max-w-8xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          href={item.href}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: CoverImage,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    href: "/posts/adf",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: CoverImage2,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    href: "/posts/sad",
  },
  {
    title: "The Art of Design of the Art",
    description: "Discover the beauty of thoughtful and functional design.",
    header: CoverImage4,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    href: "/posts/adf",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: CoverImage3,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    href: "/posts/p",
  },
];
