// src/pages/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { projYouTube, projAlarmify, projEcg, projSkin } from "../assets/images";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700/40 bg-white dark:bg-black"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {project.image && (
        <div className="aspect-[16/9] relative">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-zinc-900/0" />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            {project.title}
          </h3>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
        </div>
        {project.link !== "#" && (
          <div className="mt-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              View on GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectList = [
    {
      title: "YouTube Summarizer (LLaMA-3)",
      description:
        "Built an end-to-end NLP summarizer that processes any YouTube video in under 10 seconds. Deployed using Flask + React.",
      link: "https://github.com/MadhurAchanta/Automated-YouTube-Video-Summarizer",
      image: projYouTube,
    },
    {
      title: "Alarmify – React Native Personal Assistant",
      description:
        "A mobile app for calendar-based scheduling, automated alarms, and push notifications. Implemented Notifications API and local storage.",
      link: "https://github.com/MadhurAchanta/Alarmify",
      image: projAlarmify,
    },
    {
      title: "ECG Report Classification",
      description:
        "Developed a CNN that classifies ECG reports into normal vs abnormal with 90% validation accuracy.",
      link: "#",
      image: projEcg,
    },
    {
      title: "Skin & Brain Cancer Detection (CNN)",
      description:
        "Trained and fine-tuned two separate CNNs for early skin and brain tumor detection using medical image datasets (2024).",
      link: "#",
      image: projSkin,
    },
  ];

  return (    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="space-y-12">
          <div>
            <motion.h2
              className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Things I've made
            </motion.h2>
            <motion.p
              className="mt-4 text-zinc-600 dark:text-zinc-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              I love building things. Here are some of my favorite projects that
              showcase my expertise in AI, web development, and mobile applications.
            </motion.p>
          </div>          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projectList.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
