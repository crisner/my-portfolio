import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <section className="mx-auto max-w-3xl md:mx-0 md:mt-24">
      <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Hi, I'm Renisha Christie!
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        I'm a frontend developer venturing into fullstack development. My
        curiosity keeps me constantly learning and exploring new technologies.
      </p>
      <Link href="/about" className="flex items-center gap-2 mt-16">
        <small>More about me</small>
        <ArrowLongRightIcon className="h-6 w-6" />
      </Link>
    </section>
  );
}
