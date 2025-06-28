import React from "react";
import { motion } from "framer-motion";
import { resumeThumb } from "../assets/images";
import { Helmet } from "react-helmet";

const Resume = () => {
  return (
    <>
      <Helmet>
        <title>Madhur Achanta | Resume & Profile Overview</title>
        <meta
          name="description"
          content="View or download the resume of Madhur Achanta — showcasing experience in AI, React, data, and leadership roles."
        />
        <meta
          name="keywords"
          content="Madhur Achanta, resume, CV, software engineer, portfolio, React, AI, business metrics"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Madhur Achanta | Resume" />
        <meta
          property="og:description"
          content="Explore or download Madhur Achanta’s resume highlighting projects, experience, and skills."
        />
        <meta
          property="og:image"
          content="https://madhur-achanta.vercel.app/static/media/profile.png"
        />
        <meta
          property="og:url"
          content="https://madhur-achanta.vercel.app/resume"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <motion.div
            className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:gap-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                My Resume
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                Below you can view or download my resume for detailed insights into
                my education, projects, skills, certifications, and leadership
                roles.
              </p>
              <div className="mt-8">
                <a
                  href="/Madhur_Resume_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100 px-4 py-3 text-sm font-semibold text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-all"
                >
                  View / Download Resume
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
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <motion.div
              className="relative isolate"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden rounded-2xl bg-zinc-50 dark:bg-black ring-1 ring-zinc-900/5 dark:ring-white/10">
                <img
                  src={resumeThumb}
                  alt="Resume Preview"
                  className="absolute inset-0 h-full w-full object-contain p-4"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/10 dark:ring-white/10" />
              </div>
              <div
                className="absolute -inset-y-16 -inset-x-16 z-[-1] transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 dark:from-zinc-100/20 opacity-30 dark:opacity-10 mix-blend-multiply" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Resume;
