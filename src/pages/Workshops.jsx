import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Workshops = () => {
  return (
    <>
      <Helmet>
        <title>Madhur Achanta | Workshops & Training Events</title>
        <meta
          name="description"
          content="Workshops conducted by Madhur Achanta on business metrics, KPIs, and startup analytics. Explore hands-on sessions delivered to MBA students."
        />
        <meta
          name="keywords"
          content="Madhur Achanta, workshop, business metrics, KPI, startup analytics, Sri Vasavi Engineering College, MBA training"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Madhur Achanta | Workshops" />
        <meta
          property="og:description"
          content="Explore Madhur Achanta’s training sessions on business metrics and data-driven strategies."
        />
        <meta
          property="og:image"
          content="https://madhur-achanta.vercel.app/static/media/profile.png"
        />
        <meta
          property="og:url"
          content="https://madhur-achanta.vercel.app/workshops"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <motion.section
        id="workshops"
        className="py-20 bg-indigo-50 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">
          Workshops & Events
        </h2>
        <div className="max-w-3xl mx-auto space-y-10">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Workshop: Mastering Business Metrics
            </h3>
            <p className="italic text-gray-600 mb-4">
              Sri Vasavi Engineering College &mdash; 5th Semester (Mar 2024)
            </p>
            <ul className="list-disc list-outside pl-4 text-gray-700 space-y-1 leading-relaxed">
              <li>
                <strong>Designed and led</strong> a session for 60+ MBA students on
                data-driven decision-making, KPIs, and revenue models.
              </li>
              <li>
                <strong>Covered key metrics</strong> like CAC, LTV, unit economics,
                and funnel conversion using real-world startup case studies.
              </li>
              <li>
                <strong>Received 95% “Excellent” rating</strong> for clarity and
                hands-on Excel-based break-even analysis exercises.
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Workshops;
