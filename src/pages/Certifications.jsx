import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const SectionHeading = ({ children }) => {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
      {children}
    </h2>
  );
};

const Certifications = () => {
  return (
    <>
      <Helmet>
        <title>Madhur Achanta | Certifications</title>
        <meta
          name="description"
          content="Certifications earned by Madhur Achanta across cloud computing, AI, finance, and research. Explore credentials from Microsoft, NPTEL, Springer, and more."
        />
        <meta
          name="keywords"
          content="Madhur Achanta, certifications, AI-900, SEBI, NPTEL, LLaMA-3, research, Excel Bootcamp, British Council"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Madhur Achanta | Certifications" />
        <meta
          property="og:description"
          content="Certifications and accomplishments in AI, cloud, finance, and research earned by Madhur Achanta."
        />
        <meta
          property="og:image"
          content="https://madhur-achanta.vercel.app/static/media/profile.png"
        />
        <meta
          property="og:url"
          content="https://madhur-achanta.vercel.app/certifications"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <SectionHeading>Certifications</SectionHeading>
          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Microsoft Azure AI Fundamentals */}
            <div className="rounded-2xl border border-zinc-100 dark:border-zinc-700/40 p-6 bg-white dark:bg-black shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Microsoft Certified: Azure AI Fundamentals (AI-900)
              </h3>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                Validated foundational knowledge of Azure AI services and cloud-based AI solutions.
              </p>
              <a
                href="/images/azure-ai-fundamentals-ai-900.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
              >
                Verify Certificate
              </a>
            </div>

            {/* NISM SEBI Certified Investor */}
            <div className="rounded-2xl border border-zinc-100 dark:border-zinc-700/40 p-6 bg-white dark:bg-black shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                NISM Certification: SEBI Certified Investor
              </h3>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                Proven expertise in Indian securities regulations, market operations, and investor protection.
              </p>
              <a
                href="/images/sebi-certified-investor.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
              >
                Verify Certificate
              </a>
            </div>

            {/* Research Paper Publication */}
            <div className="rounded-2xl border border-zinc-100 dark:border-zinc-700/40 p-6 bg-white dark:bg-black shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Research Paper Publication
              </h3>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                Published “Automated YouTube Video Summarizer (LLaMA-3)” at Springer CSEAi 2024 conference.
              </p>
              <a
                href="/images/research-paper-publication.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
              >
                Verify Certificate
              </a>
            </div>

            {/* Cloud Computing – NPTEL */}
            <div className="rounded-2xl border border-zinc-100 dark:border-zinc-700/40 p-6 bg-white dark:bg-black shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Cloud Computing – NPTEL
              </h3>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                Gained in-depth understanding of cloud architectures, services, and deployment models.
              </p>
              <a
                href="/images/cloud-computing-nptel.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
              >
                Verify Certificate
              </a>
            </div>

            {/* Introduction to Internet of Things – NPTEL */}
            <div className="rounded-2xl border border-zinc-100 dark:border-zinc-700/40 p-6 bg-white dark:bg-black shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Introduction to Internet of Things – NPTEL
              </h3>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                Explored IoT fundamentals, sensor networks, and real-world deployment scenarios.
              </p>
              <a
                href="/images/introduction-iot-nptel.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
              >
                Verify Certificate
              </a>
            </div>

            {/* Excel Bootcamp & British Council Training */}
            <div className="rounded-2xl border border-zinc-100 dark:border-zinc-700/40 p-6 bg-white dark:bg-black shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Excel Bootcamp &amp; British Council Training
              </h3>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                Advanced proficiency in spreadsheet analytics (NumPy, Pandas) and professional English communication.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
