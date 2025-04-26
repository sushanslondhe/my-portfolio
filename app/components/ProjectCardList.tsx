"use client";

import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";
import Title from "./Title";
// import SimpleProjectCard from '@/components/SimpleProjectCard';

const ProjectCardList = () => {
  return (
    <div className="w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8">
      <Title title="Proof of Work" />
      {/* <SimpleProjectCard /> */}

      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCardList;

const data: Project[] = [
  {
    logo: "/trading.png",
    title: "Crypto trading Platform",
    description:
      "Crypto trading Platform is a platform that allows users to buy and sell cryptocurrencies. It provides a user-friendly interface for trading and a secure payment system.",
    techStack: [
      "React",
      "MUI",
      "Tailwind CSS",
      "Razorpay",
      "Nodemailer",
      "React Charts",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    // link: "https://enrich-salon.fardeen.tech",
    source: "https://github.com/sushanslondhe",
  },
  {
    logo: "/lms.png",
    title: "Learning Management System",
    description:
      "Learning Management System is a platform that allows users to create, manage, and track their learning progress. It provides a user-friendly interface for organizing and accessing course materials.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Google Gemini",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Tailwind CSS",
    ],
    link: "",
    source: "https://github.com/sushanslondhe",
  },
  {
    logo: "/stack-music.png",
    title: "Stack Music",
    description:
      "Stack Music is a platform that allows users to create and share their music with others. It provides a user-friendly interface for uploading and sharing music.",
    techStack: [
      "React",
      "Web3.js",
      "TypeScript",
      "Recoil",
      "spl-token",
      "Tailwind CSS",
    ],
    link: "",
    source: "https://github.com/sushanslondhe",
  },
  {
    logo: "/digital-wallet.png",
    title: "Digital Wallet",
    description:
      "Digital Wallet is a platform that allows users to store and manage their digital assets. It provides a user-friendly interface for managing digital wallets.",
    techStack: [
      "Next.js",
      "Typescript",
      "Gemini",
      "MongoDB",
      "NextAuth",
      "Nodemailer",
      "Tailwind CSS",
      "Shadcn",
    ],
    link: "",
    source: "https://github.com/Fardeen26/ghostgram",
  },
  {
    logo: "/metaverse.png",
    title: "Metaverse Platform Landing Page",
    description:
      "Metaverse Platform Landing Page is a platform that allows users to create and explore metaverse experiences. It provides a user-friendly interface for creating and sharing metaverse experiences.",
    techStack: [
      "Next.js",
      "Node.js",
      "WebSockets",
      "TypeScript",
      "Tailwind CSS",
    ],
    link: "",
    source: "https://github.com/sushanslondhe",
  },
];
