import aicoldmailerImg from "@/assets/aicoldmailer.png";
import codecompassImg from "@/assets/codecompass.png";
import thepodcastspaceImg from "@/assets/thepodcastspace.png";
import portfolioImg from "@/assets/portfolio.png";
import ridobikoImg from "@/assets/ridobiko.png";
import aialarmImg from "@/assets/aialarm.jpg";
import imageGeniusImg from "@/assets/imagegenius.jpg";
import stockmateImg from "@/assets/stockmate.jpg";
import seatingPlanImg from "@/assets/seatingplan.jpg";

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
      "Code Compass is an AI-powered pull request review system designed to streamline the code review process. Users can connect their GitHub account, select a repository and branch to monitor, and let the system automatically track new pull requests. Whenever a PR is raised, Code Compass leverages an AI model from Hugging Face to analyze the code changes and generate intelligent review comments, which are then published directly on the pull request. This helps developers receive quick, consistent, and constructive feedback, reducing review bottlenecks and improving overall code quality.",
    localImagePathOfProject: codecompassImg,
  },
  {
    name: "The Podcast Space",
    projectLink: "https://thepodcastspace.vercel.app/",
    description:
      "This project is a real-time podcasting web application built with Next.js, designed to provide seamless audio collaboration. Users can create or join rooms and communicate in real time through WebRTC and WebSocket, ensuring low-latency interactions. To maintain high audio fidelity, the app supports local recordings, enabling lossless audio quality for playback and storage. Authentication is handled via OAuth, offering secure and hassle-free user access, while collaborative features make it easy for multiple participants to manage and interact within a room. For scalability and reliability, the application is containerized with Docker and deployed on AWS EC2, ensuring a robust infrastructure that can handle dynamic user demands.",
    localImagePathOfProject: thepodcastspaceImg,
  },
  {
    name: "AI Automatic Mailer",
    projectLink: "https://github.com/Kan7sh/AI-ColdMailer",
    description:
      "I created an open-source AI-powered emailer designed to simplify and automate the job application process. The platform allows users to add multiple sender and recipient email addresses, craft custom prompts, and generate personalized emails using Ollama from Hugging Face integrated with shadcn for a modern UI. Users can include details such as education, work experience, skills, and projects directly in the email, ensuring tailored applications for each opportunity. The app also provides both an “Easy Send” option for single emails and a “Send All” feature for bulk applications, making the process faster and more efficient. This tool empowers job seekers to manage and scale their applications seamlessly while maintaining personalization.",
    localImagePathOfProject: aicoldmailerImg,
  },
  {
    name: "Portfolio",
    projectLink: "https://kanish.in/",
    description:
      "I built a personal portfolio website using React, featuring an extremely polished and visually appealing UI that pushed my creative and technical limits. The site showcases my projects, experiences, and personal background, serving as a professional platform to represent my skills and work in an engaging way.",
    localImagePathOfProject: portfolioImg,
  },
  {
    name: "Ridobiko",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.ridobikocustomer.app&pcampaignid=web_share",
    description:
      "During my internship, I developed Ridobbiko, a mobile application designed to make booking two-wheelers in the city simple and convenient. The app allows users to browse and book bikes at different price points, compare options, and even access exclusive fuel discount coupons for added savings. It includes a personalized profile section where users can manage their bookings and account details. For secure and seamless transactions, the app is integrated with Razorpay payment gateway, ensuring a smooth checkout experience. Ridobbiko combines affordability, usability, and reliability, providing a practical solution for urban commuters.",
    localImagePathOfProject: ridobikoImg,
  },
  {
    name: "AI Alarm",
    projectLink: "https://github.com/Kan7sh/AI.Alarm",
    apkLink:
      "https://drive.google.com/file/d/1P44Njcd1oVqZPe7jpTaBGz8QCb2DGiN5/view",
    description:
      "The project is an AI-based alarm system that adds a unique twist to traditional alarms by requiring physical activity to dismiss them. Instead of simply snoozing or turning off the alarm, users can create an alarm by uploading an image of a specific object. When the alarm rings, it will only stop once the user clicks a picture of the same object in real time, ensuring they are actively engaged and out of bed. Along with this innovative feature, the alarm also supports standard functionalities such as setting repeating days and customizing ringtones, making it both practical and effective in helping users wake up consistently.",
    localImagePathOfProject: aialarmImg,
  },
  {
    name: "Image Genius",
    projectLink: "https://github.com/Kan7sh/Image-Genius",
    apkLink:
      "https://drive.google.com/file/d/1OZ7MHhJvsjT9qePjXSrxFSEjkdg8CvBK/view",
    description:
      "Image Genius is an AI-powered application that combines creativity with productivity. The project leverages OpenAI’s DALL·E API to generate custom logos using artificial intelligence, allowing users to create unique visual designs instantly. Beyond logo generation, it enables users to convert images into PDF format for easy storage and sharing. The application also supports complete CRUD (Create, Read, Update, Delete) operations on images and documents, giving users full control over their content. To enhance collaboration, Image Genius integrates Firebase Cloud Storage, allowing users to share documents in a common room where multiple participants can access and exchange files seamlessly. This makes Image Genius a powerful tool for both personal and collaborative image and document management.",
    localImagePathOfProject: imageGeniusImg,
  },
  {
    name: "Stock Mate Scrapper",
    projectLink: "https://github.com/Kan7sh/Stock-Mate-Scrapper",
    apkLink:
      "https://drive.google.com/file/d/1jF3hp4dA1LjvJBUXllTuipMgYX-qWYfc/view",

    description:
      "This project is a Flutter-based mobile application built with Dart, Firebase, Python, and Flask, designed to provide real-time financial insights. The app functions as a scrapper that collects data from multiple websites, including information on top gainers, losers, cryptocurrencies, and currencies. Data scraping is handled through Python modules, and the results are integrated into the Flutter application via a Flask-based API, which currently runs on localhost. The app also allows users to search the stock price of any market-listed stock for quick access to live updates. To enhance security and accessibility, Firebase authentication with Google Sign-In is implemented, enabling users to manage their sessions seamlessly. This combination of technologies ensures a robust, interactive, and user-friendly financial data application.",
    localImagePathOfProject: stockmateImg,
  },
  {
    name: "Exam Seating Plan Maker",
    projectLink: "https://github.com/Kan7sh/Seating-Plan-Maker",
    apkLink:
      "https://drive.google.com/file/d/1sW0tSL04TgCFt4NrZKD2MXLKPxK9UGi2/view?usp=sharing",
    description:
      "The Seating Plan Maker App is a smart solution for organizing exam hall arrangements efficiently. Users can sign in securely using Google authentication and create customized seating plans with ease. The app allows administrators or teachers to generate seating layouts by selecting the number of classes to shuffle, the number of rooms available, subjects, children in each class, and the number of benches in each room. By automating the process of mixing students from different classes and subjects, the app helps reduce chances of malpractice while saving time and effort in manual planning. This makes it a practical tool for schools, colleges, and institutions conducting large-scale examinations.",
    localImagePathOfProject: seatingPlanImg,
  },
];
