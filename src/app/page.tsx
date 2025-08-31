import { Anton } from "next/font/google";
import { Projects } from "@/lib/projects";
import { Link, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo_white.png";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="h-screen scroll-smooth">
      <div
        className="h-[40%] w-full flex items-end"
        style={{
          background:
            "radial-gradient(circle at 70% 100%, #fabb00,#fab300,#fa9a00,#fa7900, #fa5700 , #fa3e00, #fa1500, #fa0000, #d20000, #ad0000, #810000, #610000, #3b0000, #190000, #140000, #000000, #000000, #000000)",
        }}
      >
        <a href="https://kanish.in" target="_blank">
          <Image
            src={logo}
            alt="Top Logo"
            width={35}
            height={35}
            className="absolute top-4 left-1/2 -translate-x-1/2"
          />
        </a>
        <div
          className={`${anton.className} text-5xl text-white pb-2 pl-5 lg:pl-[22.5rem]`}
        >
          PROJECTS
        </div>
      </div>

      <div className="flex flex-col w-full items-center bg-black">
        <div
          id="project-list"
          className="font-mono flex flex-col gap-2.5 border-neutral-700 border p-5 lg:p-18 w-full max-w-4xl"
        >
          {Projects.map((project, index) => (
            <div
              key={project.name}
              className="flex flex-row justify-between w-full text-white"
            >
              <div className="flex gap-2">
                <span>{index + 1}.</span>
                <a
                  href={`#project-${index}`}
                  className="underline hover:text-orange-600"
                >
                  {project.name}
                </a>
              </div>
              <a
                href={project.apkLink ?? project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600"
              >
                <Link size={15} />
              </a>
            </div>
          ))}
        </div>

        <div className="font-mono flex flex-col gap-2.5 border-neutral-700 border p-5 lg:p-18 w-full max-w-4xl">
          {Projects.map((project, index) => (
            <div
              key={project.name}
              id={`project-${index}`}
              className="flex flex-col scroll-mt-20"
            >
              <div className="flex justify-between">
                <div className={`${anton.className}  text-2xl lg:text-4xl`}>
                  {project.name}
                </div>
                <a
                  href={project.apkLink ?? project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600"
                >
                  <div className="flex gap-2 items-center">
                    <div>{project.apkLink ? "APK" : "Visit"}</div>
                    <SquareArrowOutUpRight size={13} />
                  </div>
                </a>
              </div>

              <div className="py-6">
                <Image
                  src={project.localImagePathOfProject}
                  alt={project.name}
                />
              </div>

              <div className="text-justify">{project.description}</div>

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
