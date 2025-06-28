import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { medialLogo } from "../assets/images";
import { Helmet } from "react-helmet";

const SocialLink = ({ href, icon: Icon, children, delay = 0 }) => {
  return (
    <motion.li 
      className="group"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <a
        href={href}
        className="flex items-center gap-3 sm:gap-4 py-3 px-3 sm:px-4 rounded-lg bg-white dark:bg-black border border-zinc-200/80 dark:border-zinc-700/50 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="h-6 w-6 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-50" />
        <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-50">
          {children}
        </span>
      </a>
    </motion.li>
  );
};

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Madhur Achanta | Contact Me</title>
        <meta
          name="description"
          content="Reach out to Madhur Achanta — aspiring entrepreneur and software engineer. Connect via email, LinkedIn, GitHub, LeetCode, and more."
        />
        <meta
          name="keywords"
          content="Madhur Achanta contact, email, LinkedIn, GitHub, LeetCode, GeeksforGeeks, Medial, portfolio"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Madhur Achanta | Contact" />
        <meta
          property="og:description"
          content="Connect with Madhur Achanta through social platforms or email. Get in touch now!"
        />
        <meta
          property="og:image"
          content="https://madhur-achanta.vercel.app/static/media/profile.png"
        />
        <meta
          property="og:url"
          content="https://madhur-achanta.vercel.app/contact"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-y-8 lg:grid-rows-[auto_1fr] lg:gap-x-8">
            <motion.div 
              className="lg:pl-8 lg:order-last"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Get in touch
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                I'm always open to new opportunities—especially in startups, finance, and data-driven roles.
                Feel free to reach out through any of these platforms!
              </p>
            </motion.div>

            <div className="lg:order-first">
              <ul className="grid grid-cols-1 gap-4">
                <SocialLink 
                  href="mailto:madhurachanta2005@gmail.com" 
                  icon={FaEnvelope}
                  delay={0.1}
                >
                  madhurachanta2005@gmail.com
                </SocialLink>

                <SocialLink 
                  href="https://www.linkedin.com/in/madhur-achanta-693b0b28a" 
                  icon={FaLinkedin}
                  delay={0.2}
                >
                  Follow on LinkedIn
                </SocialLink>

                <SocialLink 
                  href="https://github.com/MadhurAchanta" 
                  icon={FaGithub}
                  delay={0.3}
                >
                  Follow on GitHub
                </SocialLink>

                <SocialLink 
                  href="https://leetcode.com/u/Madhur_Achanta/" 
                  icon={SiLeetcode}
                  delay={0.4}
                >
                  Follow on LeetCode
                </SocialLink>

                <SocialLink 
                  href="https://www.geeksforgeeks.org/user/madhurachn5h4/" 
                  icon={SiGeeksforgeeks}
                  delay={0.5}
                >
                  Follow on GeeksForGeeks
                </SocialLink>

                <SocialLink 
                  href="https://www.instagram.com/madhur_achanta/" 
                  icon={FaInstagram}
                  delay={0.6}
                >
                  Follow on Instagram
                </SocialLink>

                <SocialLink 
                  href="https://medial.app/user/madhur-achanta-09ea210554fa0" 
                  icon={() => (
                    <img
                      src={medialLogo}
                      alt="Medial Logo"
                      className="h-6 w-6 text-zinc-600 dark:text-zinc-400"
                    />
                  )}
                  delay={0.7}
                >
                  Follow on Medial
                </SocialLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
