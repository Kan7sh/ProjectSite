import aicoldmailerImg from "@/assets/aicoldmailer.png";
import codecompassImg from "@/assets/codecompass.png";
import thepodcastspaceImg from "@/assets/thepodcastspace.png";

import type { StaticImageData } from "next/image";

interface Project {
  name: string;
  projectLink: string;
  description: string;
  localImagePathOfProject: string | StaticImageData;
  apkLink?: string;
}

export const Projects: Project[] = [
  {
    name: "Code Compass",
    projectLink: "https://codecompass.kanish.in/",
    description:
      "Organic Maps is a free Android & iOS offline maps app for travelers, tourists, hikers, and cyclists. It uses crowd-sourced OpenStreetMap data and is developed with love by MapsWithMe (MapsMe) founders and our community. No ads, no tracking, no data collection, no crapware. Please donate to support the development! Organic Maps is a free Android & iOS offline maps app for travelers, tourists, hikers, and cyclists. It uses crowd-sourced OpenStreetMap data and is developed with love by MapsWithMe (MapsMe) founders and our community. No ads, no tracking, no data collection, no crapware. Please donate to support the development!Organic Maps is a free Android & iOS offline maps app for travelers, tourists, hikers, and cyclists. It uses crowd-sourced OpenStreetMap data and is developed with love by MapsWithMe (MapsMe) founders and our community. No ads, no tracking, no data collection, no crapware. Please donate to support the development!",
    localImagePathOfProject: codecompassImg,
  },
  {
    name: "The Podcast Space",
    projectLink: "https://thepodcastspace.vercel.app/",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS.",
    localImagePathOfProject: thepodcastspaceImg,
  },
  {
    name: "AI Automatic Mailer",
    projectLink: "https://github.com/Kan7sh/AI-ColdMailer",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS.",
    localImagePathOfProject: aicoldmailerImg,
  },
  //   {
  //     name: "Portfolio",
  //     projectLink: "https://kanish.in/",
  //     description:
  //       "A personal portfolio website built with Next.js and Tailwind CSS.",
  //     localImagePathOfProject: "/images/portfolio.png",
  //   },
  //   {
  //     name: "Ridobiko",
  //     projectLink:
  //       "https://play.google.com/store/apps/details?id=com.ridobikocustomer.app&pcampaignid=web_share",
  //     description:
  //       "A personal portfolio website built with Next.js and Tailwind CSS.",
  //     localImagePathOfProject: "/images/portfolio.png",
  //   },
  //   {
  //     name: "AI Alarm",
  //     projectLink: "https://github.com/Kan7sh/AI.Alarm",
  //     description:
  //       "A personal portfolio website built with Next.js and Tailwind CSS.",
  //     localImagePathOfProject: "/images/portfolio.png",
  //   },
  //   {
  //     name: "Stock Mate Scrapper",
  //     projectLink: "https://github.com/Kan7sh/Stock-Mate-Scrapper",
  //     description:
  //       "A personal portfolio website built with Next.js and Tailwind CSS.",
  //     localImagePathOfProject: "/images/portfolio.png",
  //   },
  //   {
  //     name: "Image Genius",
  //     projectLink: "https://github.com/Kan7sh/Image-Genius",
  //     description:
  //       "A personal portfolio website built with Next.js and Tailwind CSS.",
  //     localImagePathOfProject: "/images/portfolio.png",
  //   },
  //   {
  //     name: "Exam Seating Plan Maker",
  //     projectLink: "https://github.com/Kan7sh/Seating-Plan-Maker",
  //     description:
  //       "A personal portfolio website built with Next.js and Tailwind CSS.",
  //     localImagePathOfProject: "/images/portfolio.png",
  //   },
];
