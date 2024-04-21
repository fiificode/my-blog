import { BentoGridSecondDemo } from "@/components/featured-posts/featuredPosts";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-headers text-center capitalize pt-5">
        fiifi Tech Corner
      </h1>
      <p className="font-text text-sm text-center">
        Welcome to Fiifi&apos;s Tech Corner, your source for frontend
        development insights and the latest in tech. Join me as we explore new
        frameworks, cutting-edge technologies, and valuable tips to stay ahead
        in the dynamic world of web development.
      </p>
      <div className="mt-8">
        <h2 className="text-xl font-headers mb-3">Featured Posts</h2>
        <BentoGridSecondDemo />
      </div>
    </main>
  );
}
