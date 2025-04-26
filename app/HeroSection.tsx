import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { textVariant, zoomIn } from "@/utils/motion";
import Avatar from "./components/Avatar";

export default function HeroSection() {
  return (
    <div className="w-full flex justify-center py-5 pt-36 dark:bg-black">
      <div className="w-2/3 max-sm:w-full flex flex-col items-center">
        <div>
          <Avatar />
        </div>
        <div className="mt-4 px-32 max-sm:px-4">
          <motion.h1
            initial="hidden"
            whileInView="show"
            variants={zoomIn(0.5, 1)}
            className={`!text-[3rem] mt-2 max-sm:!text-[1.6rem] !whitespace-nowrap font-bold tracking-tight text-center `}
          >
            Hi, I&apos;m Sushans Londhe
          </motion.h1>
          <motion.h1
            initial="hidden"
            whileInView="show"
            variants={textVariant(0.5)}
            className={`mt-2 max-sm:mt-5 max-sm:px-3 !text-base max-sm:!text-sm text-center !font-normal !tracking-normal inter !leading-6 `}
          >
            i break things, learn fast, and make shit happen. deep into code and
            cs—anything that pushes the limits. history, curiosity, cricket, and
            great books shaped me. still chasing mastery.
            <br />
            If you’re working on something real, let’s talk.
          </motion.h1>
        </div>
        <div className="mt-8 flex gap-4">
          <a
            href="https://cal.com/sushans-londhe/15min?overlayCalendar=true"
            target="_blank"
          >
            <Button variant="default" className=" cursor-pointer">
              Book a meet
            </Button>
          </a>
          <Button>
            <ScrollLink
              to="contact-section"
              activeClass="active"
              smooth={true}
              offset={-120}
              duration={1100}
            >
              Get in touch
            </ScrollLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
