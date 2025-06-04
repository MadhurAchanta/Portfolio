// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { profilePic } from "../assets/images";

const Home = () => {    
  return (      
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-[calc(100vh-144px)] flex items-center">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Aspiring entrepreneur and AI enthusiast.
                </h1>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                  I'm Madhur Achanta, a B.Tech CSE student passionate about empowering
                  startups with data-driven solutions in finance and beyond.
                </p>
                <motion.div
                  className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100 px-4 py-3 text-sm font-semibold text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-all"
                  >
                    Learn more
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 justify-center rounded-lg border border-zinc-300 dark:border-zinc-700/50 px-4 py-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all"
                  >
                    View projects
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >              <div className="relative isolate w-full max-w-[280px] xs:max-w-[350px] sm:max-w-md lg:max-w-[450px] mx-auto">
                <div className="relative aspect-square w-full rounded-2xl bg-zinc-50 dark:bg-black ring-1 ring-zinc-900/5 dark:ring-white/10 rotate-3 transform">
                  <img
                    src={profilePic}
                    alt="Madhur Achanta"
                    className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/10 dark:ring-white/10" />
                </div>
                <div
                  className="absolute -inset-4 sm:-inset-6 lg:-inset-8 z-[-1] transform-gpu blur-2xl"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 dark:from-zinc-100/20 opacity-30 dark:opacity-10 mix-blend-multiply" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
