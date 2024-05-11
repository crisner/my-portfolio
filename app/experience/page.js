import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Badge from "@/components/Badge";
import ProjectItem from "@/components/ProjectItem";

export default function WorkExperience() {
  return (
    <main className="mx-auto max-w-7xl px-4 lg:px-20 py-24">
      <section className="mx-auto lg:mx-0 relative left-full -translate-x-full">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Work Experience
        </h2>
        <ul role="list" className="mt-10">
          <ProjectItem
            title="Frontend Developer, Remote (Coimbatore, India) - PreSkale"
            year="2022 - Present"
            description="During my tenure at PreSkale, I spearheaded the implementation of
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
              full-stack developers."
            skills={[
              "React",
              "NextJS",
              "JavaScript",
              "Redux Toolkit",
              "RTK Query",
              "Ant Design",
              "SASS",
            ]}
          />
          <ProjectItem
            title="Frontend Developer, Remote (Delhi, India) - Reqip"
            year="2020 - 2022"
            description={`During my time at Reqip, I oversaw the development and successful
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
              expert' video call feature within the first week of launch.`}
            skills={[
              "React",
              "NextJS",
              "JavaScript",
              "Redux Toolkit",
              "React Query",
              "RxJS",
              "Ant Design",
              "Tailwind CSS",
              "SASS",
              "AWS",
              "Figma",
            ]}
          />
          <ProjectItem
            title="Intern, Remote (New Orleans, US) - Software Freedom Conservancy, Outreachy, Public Lab"
            description={`During my internship at Outreachy/Public Lab, I played a key role in enhancing the user experience and performance of the Public Lab's Leaflet web mapping library, which displays environmental data from various sources on a unified map using Leaflet, a JavaScript library for interactive maps. I implemented the filters UI in the layer menu to provide users with comprehensive layer information, significantly improving clarity and navigation ease. Additionally, I developed a feature to optimize default markers by converting them into simple circle markers, resulting in improved visibility and reducing page lag by 80% - 90% when there are numerous markers on the page. Collaborating with a co-intern, I successfully resolved integration issues in the Leaflet web mapping library and integrated end-to-end testing with Cypress to ensure seamless functionality and a positive user experience. Addressing various challenges, I also enabled effective viewing of multiple inline maps on a page, enhancing the library's functionality on the main website and facilitating seamless comparison of environmental data.`}
            skills={['JavaScript', 'Leaflet', 'Cypress', 'Travis-CI']}
            year='2019 - 2020'
          />
          <ProjectItem
            title="Web Developer, Freelancer"
            year="2019"
            description={`I developed a responsive static website for an architecture firm
              using GatsbyJS, a modern framework for building fast websites. I
              also leveraged GraphQL to seamlessly query data from both the
              local file system and the YouTube API, enabling dynamic content
              integration and enhanced user experience. The website showcases
              the firm's portfolio, services, and projects in a visually
              appealing and accessible manner, catering to diverse audiences
              across various devices. By utilizing GatsbyJS and GraphQL, the
              website delivers optimal performance and scalability while
              offering seamless content management capabilities.`}
            skills={["GatsbyJS", "GraphQL", "Bootstrap", "SASS"]}
          />
        </ul>
        <Link href="/projects" className="flex items-center gap-2 mt-16">
          <small>Check out my side projects</small>
          <ArrowLongRightIcon className="h-6 w-6" />
        </Link>
      </section>
    </main>
  );
}
