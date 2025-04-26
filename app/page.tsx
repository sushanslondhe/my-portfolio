"use client";

import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ProjectCardList from "./components/ProjectCardList";
import { GithubGraph } from "./components/github";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-[350px]:overflow-hidden mt-8 max-sm:mt-0"
    >
      <div className="w-full flex justify-center" id="home-section">
        <HeroSection />
      </div>

      <div className="w-full flex justify-center mt-24">
        <Experience />
      </div>

      <div className="w-full flex justify-center">
        <ProjectCardList />
      </div>

      <GithubGraph
        username="sushanslondhe"
        blockMargin={2}
        colorPallete={["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]}
      />

      <div className="w-full flex justify-center mt-8">
        <Skills />
      </div>

      <div className="w-full flex justify-center mt-8" id="projects">
        <Education />
      </div>

      {/*
        <div className="mt-4">
          <Coursework />
        </div> 
      */}

      <div className="w-full flex justify-center mt-8" id="contact-section">
        <Contact />
      </div>
    </motion.div>
  );
}
