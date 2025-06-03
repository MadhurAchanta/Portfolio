// src/pages/Experience.jsx
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Head of Event Management",
      organization: "Blackbox Student Community (BBSC)",
      duration: "Oct 2024 – Present",
      details: [
        "Led and organized multiple hackathons, debates, and workshops with 2000+ combined student attendance.",
        'Coordinated logistics and promotional campaigns for "Algophoniex" at College Fest 2025.',
      ],
    },
    {
      role: "Class Representative & Hackathon Team Lead",
      organization: "Sri Vasavi Engineering College",
      duration: "2023 – 2024",
      details: [
        "Facilitated communication between 200+ classmates and faculty, improving event planning.",
        "Led a team of 10 to the final round of intramural hackathon; developed a P2P lending prototype (3rd place).",
      ],
    },
    {
      role: "Workshop Facilitator: Mastering Business Metrics",
      organization: "Sri Vasavi Engineering College",
      duration: "Mar 2024",
      details: [
        "Designed and delivered a workshop on revenue models, unit economics, and KPI analysis to 60+ MBA final-year students.",
        "Received 95% positive feedback for clarity and practical applicability.",
      ],
    },
  ];

  return (    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              Experience & Leadership
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              I've had the opportunity to lead various initiatives and contribute to
              meaningful projects. Here's a look at my professional journey so far.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="group relative flex flex-col items-start border-l-2 border-zinc-200 dark:border-zinc-700 pl-6 pt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="absolute -left-[9px] top-[14px] h-4 w-4 rounded-full border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-black" />

                <time className="text-sm text-zinc-500 dark:text-zinc-400">
                  {exp.duration}
                </time>

                <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  {exp.role}
                </h3>

                <p className="mt-1 text-base font-medium text-zinc-600 dark:text-zinc-400">
                  {exp.organization}
                </p>

                <ul className="mt-4 space-y-3">
                  {exp.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
