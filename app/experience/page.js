import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Badge from "@/components/Badge";

export default function WorkExperience() {
  return (
    <main className="mx-auto max-w-7xl px-4 lg:px-20 py-24">
      <section className="mx-auto lg:mx-0 relative left-full -translate-x-full">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Work Experience
        </h2>
        <ul role="list" className="mt-10">
          <li className="py-5 mb-10 bg-[#3f3030] p-12 rounded-lg">
            <p className="flex flex-wrap justify-between items-center w-full">
              <span className="text-lg font-semibold leading-6">
                Frontend Developer, Remote (Coimbatore, India) - PreSkale{" "}
              </span>
              <span className="text-sm">2022 - Present</span>
            </p>
            <p className="text-base text-stone-400 mt-4">
              During my tenure at PreSkale, I spearheaded the implementation of
              React best practices, which included adopting a modular component
              architecture and utilizing React hooks for state management. This
              initiative led to a notable 20% reduction in code review time.
              Additionally, I introduced Redux and RTK Query to address prop
              drilling and state duplication issues across the majority of the
              codebase, resulting in enhanced scalability and maintainability. I
              also played a pivotal role in resolving layout inconsistencies by
              implementing responsive design solutions, ensuring a seamless user
              experience across various screen sizes. Furthermore, I optimized
              data loading processes using React techniques, achieving a
              significant 50% reduction in load times and boosting feature
              performance. My proactive approach to troubleshooting enabled me
              to efficiently resolve client-reported bugs in collaboration with
              remote team members. Lastly, I contributed to improving overall
              frontend code quality by conducting comprehensive code reviews and
              providing guidance on React best practices to backend-focused
              full-stack developers.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge>React</Badge>
              <Badge>NextJS</Badge>
              <Badge>JavaScript</Badge>
              <Badge>Redux Toolkit</Badge>
              <Badge>React Query</Badge>
              <Badge>RxJS</Badge>
              <Badge>Ant Design</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>AWS</Badge>
              <Badge>Figma</Badge>
            </div>
          </li>
          <li className="py-5 bg-[#3f3030] p-12 rounded-lg">
            <p className="flex flex-wrap justify-between items-center w-full">
              <span className="text-lg font-semibold leading-6">
                Frontend Developer, Remote (Delhi, India) - Reqip{" "}
              </span>
              <span className="text-sm">2020 - 2022</span>
            </p>
            <p className="text-base text-stone-400 mt-4">
              During my time at Reqip, I oversaw the development and successful
              launch of four projects, ensuring alignment with stakeholder
              requirements from conception to deployment. By collaborating
              closely with product management, I gathered feature requirements
              that resulted in the successful deployment of projects meeting
              stakeholder expectations. Additionally, I configured CI/CD
              pipelines for Create React App (CRA) and Next.js projects using
              AWS S3, CloudFront, and Amplify, streamlining the deployment
              process. Initially, I also played a key role in creating UI using
              Figma, minimizing development delays and improving user interfaces
              by laying the groundwork. Collaborating with the product team, I
              contributed to the development of a platform empowering EPCs,
              facilitating direct onboarding and conversion of on-demand tickets
              onto the platform, thereby enhancing service delivery. Finally, I
              led the development and launch of a direct-to-consumer (D2C) store
              with integrated video call support, which achieved a 60% increase
              in new website users and 26% engagement in the 'Talk to the
              expert' video call feature within the first week of launch.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge>React</Badge>
              <Badge>JavaScript</Badge>
              <Badge>Redux Toolkit</Badge>
              <Badge>RTK Query</Badge>
              <Badge>Ant Design</Badge>
              <Badge>SASS</Badge>
            </div>
          </li>
        </ul>
        <Link href="/projects" className="flex items-center gap-2 mt-16">
          <small>Check out my side projects</small>
          <ArrowLongRightIcon className="h-6 w-6" />
        </Link>
      </section>
    </main>
  );
}
