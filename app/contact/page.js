import Link from "next/link";
import {
  ArrowLongRightIcon,
  // EnvelopeIcon
} from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";

export default function Contact() {
  return (
    <div className="flex justify-center">
      <section className="mx-auto max-w-3xl lg:mx-0 mt-24">
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Let's connect! Whether you're interested in discussing potential
          collaborations, diving deeper into my work, or simply grabbing a
          virtual coffee to chat about your projects, I'm here and eager to
          connect. Feel free to reach out to me on any of the platforms below!
        </p>
        <div className="flex gap-x-6 lg:gap-x-12 justify-center mt-10">
          <Link href="mailto:christie.reni@gmail.com">
            <EnvelopeIcon className="h-8 w-8" />
          </Link>
          <Link href="https://www.linkedin.com/in/renishachristie/">
            <LinkedInIcon className="h-7 w-7 social-icon" />
          </Link>
          <Link href="https://github.com/crisner">
            <GithubIcon className="h-7 w-7 social-icon" />
          </Link>
          <Link href="https://twitter.com/crisner86">
            <TwitterIcon className="h-7 w-7 social-icon" />
          </Link>
        </div>
        <Link href="/" className="flex items-center gap-2 mt-16">
          <small>Go to home page</small>
          <ArrowLongRightIcon className="h-6 w-6" />
        </Link>
      </section>
    </div>
  );
}
