import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <section className="mx-auto lg:mx-0 relative left-full -translate-x-full">
      <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
        About me
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        I loved interacting with computers ever since I was introduced to them
        in school at 11. From that point on, tech became a playground for
        exploration. I dabbled in learning HTML to see all the text and colors
        come up on the browser, and my curiosity led me down paths of Python and
        PHP.
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        Fast forward to 2017, I decided to take a leap into development.
        Outreachy became my springboard, propelling me into my first frontend
        developer role, working with React. Since then, I've honed my skills
        across various projects, from building user interfaces to exploring
        full-stack development.
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        Today, I have 4 years of experience as a frontend developer, using React
        to build tools that make a difference. The learning journey is a
        constant one, and I always strive to expand my knowledge, including
        venturing deeper into full-stack development in my free time.
      </p>
      <Link href="/experience" className="flex items-center gap-2 mt-16">
        <small>Check out my work experience</small>
        <ArrowLongRightIcon className="h-6 w-6" />
      </Link>
    </section>
  );
}
