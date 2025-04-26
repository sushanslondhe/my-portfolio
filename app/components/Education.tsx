"use client";

import Image from "next/image";
import { I_Education } from "@/types/project";
import { educationData } from "@/utils/data";
import { MagicCard } from "./magic-card";
import Title from "./Title";
// import { useDarkMode } from '@/hooks/useDarkMode';

const Education = () => {
  // const { isDarkMode } = useDarkMode()

  return (
    <div className="w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center mt-4 pb-8">
      <Title title="Education" />

      {educationData.map((edu: I_Education, idx) => (
        <MagicCard
          key={idx}
          className="cursor-pointer dark:shadow-2xl mt-5 !bg-transparent border-none"
        >
          <div className="flex w-full px-5 max-sm:px-0 max-sm:pr-1 py-3">
            <div className=" flex items-center justify-center">
              {/* <Link href={edu.institute_link} target='_blank'>
                                    <Image src={edu.institute_logo} alt='institute-logo' width={50} height={50} className='rounded-full' />
                                </Link> */}
              <Image
                src={edu.institute_logo}
                alt="institute-logo"
                width={50}
                height={50}
                className="rounded-full bg-cover"
              />
              <div className="ml-2 max-sm:ml-0 ">
                <h1 className="text-lg leading-4 mb-1 max-sm:text-base font-semibold">
                  {edu.course_title}
                </h1>
                <span className="text-xs max-sm:text-[10px] max-sm:hidden">
                  {edu.ending_date}
                </span>
              </div>
            </div>
          </div>
        </MagicCard>
      ))}
    </div>
  );
};

export default Education;
