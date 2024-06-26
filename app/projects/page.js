import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import collabEarth from "@/public/images/collabearth.png";
import cookies from "@/public/images/cookies.jpg";
import ProjectItem from "@/components/ProjectItem";

export default function Projects() {
  return (
    <>
      <section className="mx-auto lg:mx-0 relative left-full -translate-x-full">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Side Projects
        </h2>
        <ul role="list" className="mt-10">
          <ProjectItem
            title="Collab Earth - 
                Collaborative data visualization platform"
            description={
              <>
                I'm currently immersed in Collab Earth, a collaborative conservation visualization tool for the web designed to facilitate effective collaboration among conservation enthusiasts. This platform allows users to add sightings data and notes, enabling seamless collaboration with peers. Collab Earth is built using TypeScript, React, Leaflet, Formik, Yup, and NextAuth, providing a robust and user-friendly experience. The project integrates a secure user authentication system via NextAuth, supporting custom login credentials and Google provider support. The home screen features an interactive map powered by Leaflet, enhancing user engagement and exploration. Data is securely stored in MongoDB, with Mongoose ensuring efficient database interaction. I'm also documenting the progress of this project in a blog post, which you can find{" "}
                <a
                  href="https://blog.renishachristie.com/series/making-of-collab-earth"
                  className="link-text"
                  target="_blank"
                >
                  here
                </a>
                .
              </>
            }
            image={collabEarth}
            imageAlt="Project collab earth"
            link="https://github.com/crisner/collab-earth"
            year="Present"
            skills={[
              "NextJS",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "shadcn/ui",
              "NextAuth",
              "MongoDB",
              "Mongoose",
            ]}
          />
          <ProjectItem
            title="Cookies - E-commerce website"
            description="This project is an E-commerce website built using the MERN stack, leveraging Redux for state management to ensure smooth user interactions. TypeScript with React was utilized for type-checking, enhancing front-end stability and reducing errors. The REST API, established with Express.js, enables seamless CRUD operations, allowing users to browse, add, update, and remove products from their cart. Authentication and session persistence are implemented using Passport.js, ensuring secure access to user accounts and seamless browsing sessions. Data is stored in a MongoDB database, with Mongoose used to connect and interact with the database, facilitating efficient data management and retrieval."
            image={cookies}
            imageAlt="E-commerce project"
            link="https://github.com/crisner/cookies-e-commerce-website"
            year="2020"
            skills={[
              "React",
              "TypeScript",
              "ExpressJS",
              "Redux",
              "REST API",
              "PassportJS",
              "MongoDB",
              "Mongoose",
            ]}
          />
        </ul>
      </section>
      <section className="mx-auto lg:mx-0 relative left-full -translate-x-full mt-20">
        <h3 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Older Projects
        </h3>
        <ul role="list" className="mt-10">
          <ProjectItem
            title="Neighbourhood Map"
            description="A single page map application using React and Mapbox. Used
            Material-UI for React and Zomato's API to gather data. Made the
            site accessible, responsive and it uses React's service worker
            for offline availability."
            link="https://github.com/crisner/neighbourhood-map"
            skills={["React", "MaterialUI"]}
          />
          <ProjectItem
            title="My Reads"
            description="A responsive web application that allows users to select and categorize books into a virtual bookshelf. Leveraged React to support a dynamic user interface that interacts with an API server and client library."
            link="https://github.com/crisner/myreads-react-project"
            skills={["React", "Fetch API"]}
          />
          <ProjectItem
            title="Arcade Game Clone"
            description="A simple arcade game made powered with HTML5 canvas and developed using Object Oriented JavaScript. The game can keep track of scores and lives of the player which is also updated on the screen using canvas elements."
            link="https://github.com/crisner/arcade-game"
            skills={["Html5 Canvas", "JavaScript"]}
          />
          <ProjectItem
            title="Memory Game"
            description="A browser-based card matching game that tests the player's memory and concentration. The game uses JavaScript to keep track of scores and JavaScript's event listeners for the user to play the game."
            link="https://github.com/crisner/memory-game"
            skills={["Html", "CSS", "JavaScript"]}
          />
          <ProjectItem
            title="Todo List"
            description="A simple todo list that runs in the browser and is developed using JavaScript. Used Animate.css library for animations and JSDoc for documentation."
            link="https://github.com/crisner/todo-list"
            skills={["Html", "CSS", "JavaScript"]}
          />
          <ProjectItem
            title="Pixel Art Maker"
            description="A web application to play with pixel art. It displays a grid size selected by the user which can be painted upon with tools from the displayed toolbox."
            link="https://github.com/crisner/pixel-art-maker"
            skills={["Html", "CSS", "JQuery"]}
          />
          <ProjectItem
            title="Weather App"
            description="A weather app that uses Google's geolocation API to find the user's current location and displays current temperature and weather by making use of the Open Weather Map api."
            link="https://github.com/crisner/weather-app"
            skills={["Html", "CSS", "JQuery", "Bootstrap"]}
          />
          <ProjectItem
            title="Wikipedia Viewer"
            description="Uses the Wikipedia API to filter and display search results from Wikipedia for the query entered by the user."
            link="https://github.com/crisner/wikipedia-viewer"
            skills={["Html", "CSS", "JQuery", "CSS Grid"]}
          />
        </ul>
        <Link href="/blog" className="flex items-center gap-2 mt-16">
          <small>Check out my blog</small>
          <ArrowLongRightIcon className="h-6 w-6" />
        </Link>
      </section>
    </>
  );
}
