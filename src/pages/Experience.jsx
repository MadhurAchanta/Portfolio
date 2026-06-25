import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Experience = () => {
  const experiences = [
    {
      role: "Founder's Office",
      organization: "Farmbowl",
      duration: "Dec 2025 – Present",
      details: [
        "Built and deployed a production-grade multi-outlet analytics platform to monitor revenue, food cost, and operational KPIs, integrating a RAG- and LangChain-powered AI assistant that transformed complex sales and inventory data into actionable business insights through natural language interactions.",
        "Strategized and implemented cost-control initiatives to reduce food cost by ~600 basis points, directly improving outlet-level profitability.",
        "Automated Instagram DMs and comment workflows, reducing manual effort by ~99% and significantly improving response efficiency and lead handling.",
        "Built and deployed an analytics dashboard for item-wise sales and outlet-wise volume comparison, providing visibility into category contribution and helping identify high- and low-performing items across stores.",
        "Standardized data collection by designing structured templates, ensuring consistency and enabling faster, more reliable insight generation.",
        "Conducted regular store audits to ensure compliance with hygiene standards and SOPs, maintaining operational quality across outlets.",
        "Led visual branding initiatives to enhance store identity and improve overall customer perception."
      ],
    },
    {
      role: "Head of Event Management",
      organization: "Blackbox Student Community (BBSC)",
      duration: "Oct 2024 – Present",
      details: [
        "Planned and executed 10+ events including hackathons, tech fest activities, farewell events, Engineers’ Day, and Teachers’ Day, engaging more than 1500 participants in total.",
        "Played a key role in the college tech fest event management team, contributing to large-scale execution.",
        "Managed participant registrations and attendance by coordinating with team and department HODs.",
        "Secured permissions from management for venues, schedules, and event logistics.",
        "Led and coordinated a team to ensure smooth execution and effective stakeholder communication.",
        "Stepped in to deliver sessions and engage participants in case of speaker delays or absence.",
        "Handled on-ground operations and resolved real-time issues to ensure a seamless event experience."
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

  return (
    <>
      <Helmet>
        <title>Madhur Achanta | Experience & Leadership</title>
        <meta
          name="description"
          content="Explore the leadership journey and event management experience of Madhur Achanta, including workshops, hackathons, and team leadership."
        />
        <meta
          name="keywords"
          content="Madhur Achanta, experience, leadership, event management, BBSC, workshop, hackathon, class representative"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Madhur Achanta | Experience & Leadership" />
        <meta
          property="og:description"
          content="Get to know the leadership roles and impactful initiatives led by Madhur Achanta at BBSC and Sri Vasavi Engineering College."
        />
        <meta
          property="og:image"
          content="https://madhur-achanta.vercel.app/static/media/profile.png"
        />
        <meta
          property="og:url"
          content="https://madhur-achanta.vercel.app/experience"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="w-full">
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
                  className="group relative flex flex-col border-l-2 border-zinc-200 dark:border-zinc-700 pl-6 pt-2 w-full"
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
    </>
  );
};

export default Experience;
