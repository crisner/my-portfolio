import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <section className="mx-auto lg:mx-0 relative left-full -translate-x-full">
      <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
        About me
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-300">
      My fascination with computers began in my early teens. The web was a whole new world to explore, igniting a passion for technology that's never faded. Learning HTML sparked a love for building interactive experiences, and my natural curiosity propelled me down the path of languages like Python and PHP.
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-300">
      In 2017, I made the leap and pursued a career in development. I honed my skills by focusing on front-end development and contributing to open-source projects. Over the past four years, I've constantly expanded my expertise as a front-end developer. At work, I leverage the power of React and its hooks to craft well-structured, maintainable, and responsive applications. I prioritize clean, reusable code, ensuring efficient development workflows. My approach strives to deliver applications with a seamless user experience by minimizing UI inconsistencies and utilizing effective state management practices to minimize prop drilling and state duplication.
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-300">
      A firm believer in lifelong learning, I'm always expanding my knowledge. In my free time, I'm actively exploring full-stack development, building applications with TypeScript, Node.js, and MongoDB. I thrive in collaborative environments and have successfully worked with remote teams using tools like Slack, Zoom, Notion, and Jira.
      </p>
      <Link href="/experience" className="flex items-center gap-2 mt-16">
        <small>Check out my work experience</small>
        <ArrowLongRightIcon className="h-6 w-6" />
      </Link>
    </section>
  );
}
