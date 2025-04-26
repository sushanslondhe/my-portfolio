"use client";

import React from "react";
import Title from "./Title";

const Skills = () => {
  return (
    <div className="w-2/3 max-lg:w-full max-sm:w-full flex flex-col items-center mt-4 pb-8">
      <Title title="Skills" />

      <div className="flex w-full flex-col max-lg:flex-row max-sm:flex-row gap-3 max-sm:gap-2 lg:flex-row mt-4 px-40 max-[1285px]:px-24 max-lg:px-28 max-sm:px-6 flex-wrap justify-center items-center max-sm:ml-">
        {data.map((skill, idx) => (
          <div key={idx}>
            <div className="flex items-center border  p-2 rounded-full text-white bg-primary cursor-pointer hover:bg-primary/90 transition-all duration-300">
              {skill}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

const data: string[] = [
  "JavaScript",
  "TypeScript",
  "C++",
  "Java",
  "Solidity",
  "Next.js",
  "React",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "MySQL",
  "Turborepo",
  "Docker",
  "AWS",
  "Redux",
  "Recoil",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express,js",
  "WebSocket",
  "foundry",
  "Zod",
  "Git",
];
