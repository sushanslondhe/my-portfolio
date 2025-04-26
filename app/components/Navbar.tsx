"use client";
import { Link as ScrollLink } from "react-scroll";

import React from "react";
import { usePathname } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";
// import { Tooltip } from "@radix-ui/react-tooltip";
import { FileIcon, Github, HomeIcon, Linkedin } from "lucide-react";
import Link from "next/link";
// import { useDarkMode } from '@/hooks/useDarkMode';
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MagicCard } from "./magic-card";

const Navbar = () => {
  // const { isDarkMode, toggleDarkMode } = useDarkMode();
  const pathname = usePathname();

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="w-full py-6 flex justify-center fixed top-0 z-50"
    >
      <div className="rounded-full w-[850px] max-lg:w-[800px] max-[400px]:w-[345px] max-[450px]:w-[400px] max-[350px]:w-[330px] max-[321px]:w-[310px] px-2 py-1 bg-white bg-opacity-10 backdrop-blur-lg border dark:border-white/20 flex items-center justify-center dark:shadow-none shadow">
        <MagicCard className="flex justify-center px-2 items-center max-sm:gap-4 gap-8 max-[400px]:gap-4 max-[450px]:gap-5 transition-all bg-white border-none">
          <div className="flex justify-center px-2 items-center max-sm:gap-4 gap-8 max-[400px]:gap-4 max-[450px]:gap-5 transition-all">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href="/">
                    <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                      <HomeIcon
                        className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == "/" ? "dark:!text-[#FFC83D] !text-[#cc9e2b]" : ""}`}
                      />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <ScrollLink
                    to="home-section"
                    activeClass="active"
                    smooth={true}
                    offset={-120}
                    duration={1100}
                  >
                    Home
                  </ScrollLink>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/* <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                    <CodeIcon
                      className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == "/projects" ? "dark:!text-[#FFC83D] !text-[#cc9e2b]" : ""}`}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>Projects</TooltipContent>
              </Tooltip>
            </TooltipProvider> */}

            {/* <TooltipProvider>
            <Tooltip>
            <TooltipTrigger>
                <Link href="/about">
                  <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                    <IoPerson
                      className={`w-[18px] h-[18px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == "/about" ? "dark:!text-[#FFC83D] !text-[#cc9e2b]" : ""}`}
                    />
                    </div>
                    </Link>
                    </TooltipTrigger>
                    <TooltipContent>about</TooltipContent>
            </Tooltip>
          </TooltipProvider> */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href="/resume.pdf" target="_blank">
                    <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                      <FileIcon className="w-[19px] h-[19px] max-sm:h-[15px] max-sm:w-[15px] text-black dark:text-white" />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>resume</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href="https://github.com/sushanslondhe" target="_blank">
                    <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                      <Github className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white" />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>github</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href="https://x.com/sushanslondhe07" target="_blank">
                    <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                      <FaXTwitter className="w-[17px] h-[17px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white" />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>twitter</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href="https://www.linkedin.com/in/SushansLondhe/"
                    target="_blank"
                  >
                    <div className="hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all duration-300">
                      <Linkedin className="w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white" />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>linkedin</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </MagicCard>
      </div>
    </motion.nav>
  );
};

export default Navbar;
