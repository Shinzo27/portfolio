import Link from "next/link";
import { Button } from "./ui/button";

const projectsData = [
    {
      title: "Learnlive",
      description:
        "Learnlive is a platform that users can come and learn the latest technologies and programming languages.",
      link: "https://github.com/Shinzo27/LearnLive.git",
      code: "https://github.com/Shinzo27/LearnLive.git",
      previewVideo: "/videos/LearnLive.mp4",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "TypeScript",
        "Shadcn",
      ],
    },
    {
      title: "Grocery Store",
      description:
        "Grocery Store is a web application that allows users to buy groceries online with all the requirements.",
      link: "https://github.com/Shinzo27/Grocery-Store.git",
      code: "https://github.com/Shinzo27/Grocery-Store.git",
      previewVideo: "/videos/EmojiGitPreview.mp4",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    },
    {
      title: "DevTrack: Project management tool!",
      description:
        "DevTrack is a project management tool that allows you to manage your projects and tasks.",
      link: "https://github.com/Shinzo27/DevTrack.git",
      code: "https://github.com/Shinzo27/DevTrack.git",
      previewVideo: "/videos/CloudSpacePreview.mp4",
      technologies: [
        "Node.js",
        "React",
        "MongoDB",
        "Express",
        "TailwindCSS",
      ],
    },
];

const Projects = () => {    
    return (
        <div className="flex flex-col gap-4 w-full pt-10">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border rounded-md dark:border-gray-700"
          >
            <video
              src={project.previewVideo}
              autoPlay
              muted
              loop
              className="rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-4 grow">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-[4px]">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-neutral-700 rounded-sm text-sm font-medium me-2 px-2.5 py-0.5 roundedtext-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <Link href={project.link}>
                  <Button variant="default">View</Button>
                </Link>
                <Link href={project.code} className="">
                  <Button variant="outline" className="text-white bg-neutral-800 border-none hover:bg-neutral-800 hover:text-white">Code</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}

export default Projects;