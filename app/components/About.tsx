"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const highlights = [
  { label: "SCHOOL", val: "St. Laurent's Grammar School", sub: "Matriculation" },
  { label: "INTER", val: "SRE Majeed College", sub: "Intermediate" },
  { label: "COURSE", val: "Full Stack Development at SMIT", sub: "MERN · React · Node.js · MongoDB" },
  { label: "DEGREE", val: "BSCS at University of Karachi", sub: "Bachelor of Science in Computer Science" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="about" ref={ref} style={{ background: "var(--parchment)", borderTop: "1px solid var(--rule)" }}>
      <div className="wrap">
        {/* Section index */}
        <motion.div
          className="section-idx"
          style={{ marginTop: "3rem" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          <span className="label" style={{ color: "var(--ink-3)" }}>
            02 · PROFILE &amp; BIOGRAPHY
          </span>
          <span className="label" style={{ color: "var(--ink-4)" }}>
            BACKGROUND
          </span>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-12 gap-0 py-8 md:py-10"
        >
          {/* Left — big statement */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-6 pr-0 md:pr-12 border-b md:border-b-0 md:border-r pb-8 md:pb-0"
            style={{ borderColor: "var(--rule-light)" }}
          >
            <p className="label-amber mb-4">EDUCATION &amp; MILESTONES</p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(1.65rem, 4vw, 3.4rem)",
                lineHeight: 1.15,
                color: "var(--ink)",
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}
            >
              I build &{" "}
              <em style={{ fontStyle: "italic" }}>deploy</em>{" "}
              full-stack{" "}
              <em style={{ fontStyle: "italic" }}>applications.</em>
            </h2>

            {/* Highlight table */}
            <div className="space-y-0 mt-6">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex flex-col sm:flex-row sm:gap-4 gap-1 py-3"
                  style={{ borderTop: "1px solid var(--rule-light)" }}
                >
                  <span className="label sm:w-24 flex-shrink-0 text-xs sm:text-sm mt-0.5" style={{ color: "var(--amber)" }}>
                    {h.label}
                  </span>
                  <div>
                    <p
                      className="font-mono text-xs sm:text-sm md:text-base font-bold leading-snug"
                      style={{
                        color: "var(--ink)",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {h.val}
                    </p>
                    <p className="label mt-0.5 text-[0.75rem] sm:text-xs" style={{ color: "var(--ink-3)" }}>
                      {h.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-6 md:pl-12 pt-8 md:pt-0"
          >
            <div
              className="p-4 sm:p-6"
              style={{
                background: "var(--parchment-2)",
                border: "1px solid var(--rule-light)",
                marginBottom: "1.5rem",
              }}
            >
              <p className="label-amber mb-2 text-xs">ENGINEERING PHILOSOPHY</p>
              <p
                className="font-mono text-xs sm:text-sm md:text-base leading-relaxed italic"
                style={{
                  color: "var(--ink-2)",
                  letterSpacing: "0.01em",
                }}
              >
                &ldquo;Good code ships fast. Great code ships reliably,
                tested, containerized, monitored, and ready to scale
                from day one.&rdquo;
              </p>
              <p className="label mt-2.5 text-xs" style={{ color: "var(--ink-4)" }}>
                NAVEED LATIF &nbsp;&nbsp;·&nbsp;&nbsp; FULL-STACK &amp; DEVOPS
              </p>
            </div>

            <p
              className="font-mono text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4"
              style={{
                color: "var(--ink-2)",
                letterSpacing: "0.01em",
              }}
            >
              Full-Stack Developer and DevOps Engineer specializing in the
              MERN ecosystem including React, Next.js, Node.js, MongoDB, and
              PostgreSQL. I build scalable, production-ready applications
              with clean architecture and real-world performance.
            </p>

            <p
              className="font-mono text-xs sm:text-sm md:text-base leading-relaxed mb-4"
              style={{
                color: "var(--ink-3)",
                letterSpacing: "0.01em",
              }}
            >
              On the DevOps side, I handle containerization with Docker,
              orchestration with Kubernetes, CI/CD pipelines, and cloud
              infrastructure on AWS and Azure, owning the full path from
              code to deployment.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="py-3 flex items-center justify-between"
          style={{
            borderTop: "1px solid var(--rule)",
          }}
        >
          <span className="label" style={{ color: "var(--ink-4)", fontSize: "0.82rem" }}>
            EXPERIENCE &amp; EDUCATION
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="label cursor-pointer hover:underline"
            style={{ color: "var(--amber)", fontSize: "0.82rem" }}
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </section>
  );
}
