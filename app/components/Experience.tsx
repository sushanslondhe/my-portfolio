"use client";
import Image from "next/image";
// import { Link } from '@radix-ui/themes';
import { I_Experience } from "@/types/project";
import { experienceData } from "@/utils/data";
import Title from "./Title";
import { MagicCard } from "./magic-card";
// import { useDarkMode } from '@/hooks/useDarkMode';

const Experience = () => {
  // const { isDarkMode } = useDarkMode();
  return (
    <div className="w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center mt-4 pb-8">
      <span className="mb-3">
        <Title title="Experience " />
      </span>
      {experienceData.map((exp: I_Experience, idx) => (
        <MagicCard
          key={idx}
          className="cursor-pointer h-fit dark:shadow-2xl !bg-transparent border-none"
        >
          <div className={`flex w-full px-5 max-sm:px-0 max-sm:pr-1 py-3`}>
            <div className="w-full flex items-center justify-center">
              <Image
                src={exp.company_logo}
                alt="company-logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-2 max-sm:ml-0">
                <h1 className="text-lg leading-4 mb-1 max-sm:text-base font-semibold">
                  {exp.job_title}
                </h1>
                <span className="text-xs max-sm:text-[10px] max-sm:hidden">
                  {exp.duration}
                </span>
              </div>
            </div>
          </div>
        </MagicCard>
      ))}
    </div>
  );
};

export default Experience;
