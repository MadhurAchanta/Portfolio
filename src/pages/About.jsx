// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ children }) => {
  return (
    <h2 className="text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {children}
    </h2>
  );
};

const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <motion.div
          className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Column - Top: Introduction */}
          <div className="lg:order-1">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I'm Madhur Achanta. I live in India, where I build the future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p className="text-justify">
                As a B.Tech CSE student (2022–2026) at Sri Vasavi Engineering College with a 9.41 CGPA,
                I blend technology, finance, and entrepreneurship to create impactful solutions.
              </p>
              <p className="text-justify">
                My journey in technology has been driven by a passion for innovation and problem-solving.
                From developing AI-powered summarizers to creating mobile applications, I've consistently
                pushed the boundaries of what's possible.
              </p>
              <p className="text-justify">
                Today, I focus on building intelligent solutions that empower startups and businesses
                with data-driven insights and automated workflows.
              </p>
            </div>
          </div>

          {/* Right Column - Top: Technical Expertise */}
          <div className="lg:order-2">
            <div className="rounded-2xl border border-zinc-100 dark:border-zinc-700/40 p-6 bg-white dark:bg-black">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                Technical Expertise
              </h2>
              <hr className="border-t border-zinc-100 dark:border-zinc-700/40 my-4" />
              <div className="mt-6 flow-root">
                <ul className="divide-y divide-zinc-100 dark:divide-zinc-100/5">
                  <li className="py-4 text-base text-zinc-700 dark:text-zinc-300">
                    <strong className="text-zinc-900 dark:text-zinc-100">Programming:</strong><br />
                    Java, Java collections, Python, C++ STL, C
                  </li>
                  <li className="py-4 text-base text-zinc-700 dark:text-zinc-300">
                    <strong className="text-zinc-900 dark:text-zinc-100">Web/Mobile Dev:</strong><br />
                    HTML, CSS, React, Flask
                  </li>
                  <li className="py-4 text-base text-zinc-700 dark:text-zinc-300">
                    <strong className="text-zinc-900 dark:text-zinc-100">Data Analysis:</strong><br />
                    NumPy, Pandas, Matplotlib, Seaborn, scikit-learn
                  </li>
                  <li className="py-4 text-base text-zinc-700 dark:text-zinc-300">
                    <strong className="text-zinc-900 dark:text-zinc-100">Machine Learning:</strong><br />
                    CNN, RNN, NLP, LLaMA-3, TensorFlow/Keras
                  </li>
                  <li className="py-4 text-base text-zinc-700 dark:text-zinc-300">
                    <strong className="text-zinc-900 dark:text-zinc-100">Tools & Databases:</strong><br />
                    Git, Github, Microsoft Word, Power Point, Excel, Weka, MySQL, Oracle SQL
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Left Column - Bottom: Leadership & Community */}
          <div className="lg:order-3">
            <SectionHeading>Leadership & Community</SectionHeading>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 text-justify">
              As Head of Event Management at Blackbox Student Community (BBSC), I organized large-scale hackathons, debates, and workshops reaching over 2000+ students. I also led a workshop on Mastering Business Metrics for 60+ MBA final-year students and continue to guide our college tech club's initiatives and team projects.
            </p>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 text-justify">
              Additionally, I participated in Aspire's Leaders Program, which significantly enhanced my communication and entrepreneurship skills. This program provided me with valuable insights into effective leadership strategies and business development approaches that I apply in my current roles.
            </p>
          </div>

          {/* Right Column - Bottom: Key Projects */}
          <div className="lg:order-4">
            <SectionHeading>Key Projects</SectionHeading>
            <ul className="mt-6 space-y-4">
              {[
                {
                  title: "YouTube Summarizer (LLaMA-3)",
                  desc: "Flask + React NLP pipeline summarizing YouTube videos in under 10 seconds.",
                },
                {
                  title: "Alarmify (React Native)",
                  desc: "Calendar-based personal assistant with automated alarms and push notifications.",
                },
                {
                  title: "Skin & Brain Cancer Detection",
                  desc: "CNN-based classifiers for early medical diagnosis (2024).",
                },
                {
                  title: "ECG Report Classification",
                  desc: "90% accurate model for classifying ECGs as normal/abnormal.",
                },
              ].map((proj, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-auto">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {proj.title}
                    </h3>
                    <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">{proj.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Left Column - Certifications */}
          <div className="lg:order-5">
            <SectionHeading>Certifications</SectionHeading>
            <ul className="mt-6 space-y-4">
              {[
                ["Microsoft Certified: Azure AI Fundamentals (AI-900)", "Demonstrated proficiency in AI and machine learning concepts"],
                ["NISM Certification: SEBI Certified Investor", "Understanding of securities market operations and investor protection"],
                ["Research Paper Publication", "Automated YouTube Video Summarizer (LLaMA-3) at Springer CSEAi 2024"],
                ["Cloud Computing – NPTEL", "Fundamentals of cloud infrastructure and deployment models"],
                ["Introduction to Internet of Things – NPTEL", "Explored IoT architecture, protocols, and applications"],
                ["Excel Bootcamp & British Council Training", "NumPy, Pandas (NSDC & ITM) + English & Career Strokes"]
              ].map(([title, desc], idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-auto">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
                    <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Achievements */}
          <div className="lg:order-6">
            <SectionHeading>Achievements</SectionHeading>
            <ul className="mt-6 space-y-4">
              {[
                ["GeeksforGeeks Achievement", "Solved 730+ problems with a 170+ day streak in Java/C++."],
                ["Startup Ideation", "3rd place among 12 teams for pitching a P2P lending idea."],
                ["Workshop Speaker", "Taught business metrics to 60+ MBA final-year students."],
                ["Debate Winner", "Won a college debate on drug de-addiction among 50 peers."],
                ["Academic Excellence", "Secured 2nd rank in +2 with 974/1000 marks."]
              ].map(([title, desc], idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-auto">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
                    <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
