import { Projects } from "@/lib/projects";
import { Link, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo_white.png";


export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth bg-black text-white">
      <div
        className="relative isolate h-[30vh] w-full flex items-end overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #820b23, #820b23, #820b23 75%)",
        }}
      >
        <div aria-hidden="true" className="header-aurora">
          <span className="aurora-ribbon aurora-ribbon-one" />
          <span className="aurora-ribbon aurora-ribbon-two" />
          <span className="aurora-ribbon aurora-ribbon-three" />
        </div>
        <a
          href="https://kanishc.in"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 left-1/2 z-10 -translate-x-1/2"
        >
          <Image
            src={logo}
            alt="Top Logo"
            width={35}
            height={35}
          />
        </a>
        <div className="relative z-10 font-mono text-7xl text-white pb-2 pl-5 lg:pl-[22.5rem]">
          PROJECTS
        </div>
      </div>

      <div className="flex flex-col w-full items-center">
        <div
          id="project-list"
          className="font-mono flex flex-col gap-2.5 border-neutral-700 border p-5 lg:p-18 w-full max-w-4xl"
        >
          {Projects.map((project, index) => (
            <div
              key={project.name}
              className="flex flex-row justify-between w-full text-white font-body"
            >
              <div className="flex gap-2">
                <span>{index + 1}.</span>
                <a
                  href={`#project-${index}`}
                  className="underline"
                >
                  {project.name}
                </a>
              </div>
              <a
                href={project.apkLink ?? project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
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
              className="flex flex-col scroll-mt-20 font-body"
            >
              <div className="flex justify-between">
                <div className="font-heading text-3xl lg:text-5xl text-white">
                  {project.name}
                </div>
                <a
                  href={project.apkLink ?? project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
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
