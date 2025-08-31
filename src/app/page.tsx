import { Anton, Gilda_Display } from "next/font/google";
import { Projects } from "@/lib/projects";
import { Link, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="h-screen">
      {/* Gradient Section */}
      <div
        className="h-[40%] w-full flex items-end"
        style={{
          background:
            "radial-gradient(circle at 70% 100%, #fabb00,#fab300,#fa9a00,#fa7900, #fa5700 , #fa3e00, #fa1500, #fa0000, #d20000, #ad0000, #810000, #610000, #3b0000, #190000, #140000, #000000, #000000, #000000)",
        }}
      >
        {/* Heading aligned with project-list */}
        <div
          className={`${anton.className} text-5xl text-white pb-2 lg:pl-[22.5rem]`}
        >
          PROJECTS
        </div>
      </div>

      <div className="flex flex-col w-full items-center bg-black">
        <div
          id="project-list"
          className="font-mono flex flex-col gap-2.5 border-neutral-700 border p-18 w-full max-w-4xl"
        >
          {Projects.map((project, index) => (
            <div
              key={project.name}
              className="flex flex-row justify-between w-full text-white"
            >
              <div className="flex gap-2">
                <span>{index + 1}.</span>
                <span className="underline">{project.name}</span>
              </div>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-600"
              >
                <Link size={15} />
              </a>
            </div>
          ))}
        </div>
        <div
          id="project-list"
          className="font-mono flex flex-col gap-2.5 border-neutral-700 border p-18 w-full max-w-4xl"
        >
          {Projects.map((project, index) => (
            <div key={project.name} className="flex flex-col">
              <div className="flex justify-between">
                <div className={`${anton.className} text-4xl`}>
                  {project.name}
                </div>
                <a
                  href={
                    project.apkLink != null
                      ? project.apkLink
                      : project.projectLink
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600"
                >
                  <div className="flex gap-2 items-center">
                    <div>{project.apkLink != null ? "APK" : "Visit"}</div>
                    <div>
                      <SquareArrowOutUpRight size={13} />
                    </div>
                  </div>
                </a>
              </div>
              <div className="py-6">
                <Image
                  src={project.localImagePathOfProject}
                  alt={project.name}
                />
              </div>
              <div className="text-justify ">{project.description}</div>
              {index < Projects.length - 1 && (
                <hr className="my-8 border-neutral-700" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
