import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Experience = () => {
  const experiences = [
    {
      role: "Founder's Office – Generalist",
      organization: "Farmbowl",
      type: "Full-time",
      duration: "Dec 2025 – Present · 10 mos",
      location: "Hyderabad, Telangana, India · On-site",
      intro: [
        "Designed, built and deployed Farmbowl's core operations platform — now used daily by 50+ users across 12+ outlets and the central kitchen.",
        "It replaced an entirely manual chain (collecting indents, consolidating them, preparing the prep, procurement and dispatch sheets by hand, plus packet labelling, wastage, receiving and closing-stock logs) with one connected system that saves the head chef 125+ hours a month (5+ hours every day).",
      ],
      sections: [
        {
          heading: "WHAT THE PLATFORM RUNS",
          points: [
            "Ordering → kitchen prep → procurement → vendor POs → dispatch → receiving, in one flow",
            "A live inventory ledger that costs every ingredient at its real purchase price",
            "FSSAI-compliant packet labelling with QR-based batch traceability",
            "Closing-stock counts, photo-verified wastage, and inter-outlet surplus transfers",
            "Sales analytics, an automated monthly P&L, and a reconciling manual MIS",
            "HR, payroll, compliance and fixed-asset records",
            "Built on React, TypeScript and Supabase/Postgres, deployed on Vercel, with offline-capable mobile capture for field staff",
          ],
        },
      ],
      auditTrail:
        "Every order, batch, dispatch, receipt and wastage entry is now captured automatically under 8 role-based access and a full audit trail — moving food cost and accountability from estimates to measured numbers, with a read-only investor and auditor login for full transparency. Currently extending it with a RAG-based AI assistant for plain-English querying of sales, cost and inventory data.",
      beyondSections: [
        {
          heading: "BEYOND THE PLATFORM",
          points: [
            "Cut food cost by ~600 basis points through targeted cost-control initiatives",
            "Automated Instagram DM and comment workflows, reducing manual effort by ~99%",
            "Built an item-wise and outlet-wise sales dashboard for category and store performance",
            "Standardized data-collection templates for consistent, faster reporting",
            "Ran store audits for hygiene and SOP compliance, and led visual branding initiatives",
            "Drove rollout and training across every outlet, taking the platform from zero to daily use",
          ],
        },
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
                    {exp.organization}{exp.type ? ` · ${exp.type}` : ""}
                  </p>

                  {exp.location && (
                    <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-500">
                      {exp.location}
                    </p>
                  )}

                  {/* Structured format (Farmbowl-style) */}
                  {exp.intro ? (
                    <div className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {exp.intro.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}

                      {exp.sections && exp.sections.map((sec, si) => (
                        <div key={si} className="mt-3">
                          <p className="font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide text-xs mb-2">
                            {sec.heading}
                          </p>
                          <ul className="space-y-1.5">
                            {sec.points.map((pt, pi) => (
                              <li key={pi} className="flex gap-2">
                                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {exp.auditTrail && (
                        <p className="mt-3">{exp.auditTrail}</p>
                      )}

                      {exp.beyondSections && exp.beyondSections.map((sec, si) => (
                        <div key={si} className="mt-3">
                          <p className="font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide text-xs mb-2">
                            {sec.heading}
                          </p>
                          <ul className="space-y-1.5">
                            {sec.points.map((pt, pi) => (
                              <li key={pi} className="flex gap-2">
                                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Legacy simple details list */
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
                  )}
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
