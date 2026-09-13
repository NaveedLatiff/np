"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { journeyItems } from "../lib/data";

export default function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="journey"
      ref={ref}
      style={{ background: "var(--parchment)", borderTop: "1px solid var(--rule)" }}
    >
      <div className="wrap">
        {/* Section index */}
        <motion.div
          className="section-idx"
          style={{ marginTop: "2rem" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          <span className="label" style={{ color: "var(--ink-3)" }}>
            06 · CAREER TIMELINE &amp; JOURNEY
          </span>
          <span className="label" style={{ color: "var(--ink-4)" }}>
            MILESTONES
          </span>
        </motion.div>

        {/* Header */}
        <motion.div
          className="grid md:grid-cols-12 gap-8 py-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="md:col-span-6">
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(1.65rem, 4vw, 3.2rem)",
                color: "var(--ink)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Development{" "}
              <em style={{ fontStyle: "italic" }}>milestones</em>{" "}
              &amp; story.
            </h2>
          </div>
          <div className="md:col-span-6 flex items-end">
            <p
              className="font-mono text-xs sm:text-sm md:text-base leading-relaxed"
              style={{
                color: "var(--ink-3)",
              }}
            >
              A chronological record of engineering milestones, technology
              adoption, and architecture decisions documenting growth from initial curiosity to production-ready systems.
            </p>
          </div>
        </motion.div>

        {/* Timeline as editorial table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          style={{ border: "1px solid var(--rule-light)" }}
        >
          {/* Table header - hidden on mobile */}
          <div
            className="hidden md:grid grid-cols-12 gap-0 px-4 py-2.5 label"
            style={{
              borderBottom: "1px solid var(--rule-light)",
              background: "var(--parchment-2)",
              color: "var(--ink-4)",
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
            }}
          >
            <span className="col-span-2">YEAR</span>
            <span className="col-span-3">MILESTONE</span>
            <span className="col-span-7">TECHNICAL RECORD</span>
          </div>

          {journeyItems.map((item, i) => {
            const isCurrent = item.type === "current";
            return (
              <motion.div
                key={item.year}
                className="flex flex-col md:grid md:grid-cols-12 gap-1.5 md:gap-0 p-3.5 md:px-4 md:py-4.5 items-start"
                style={{
                  borderBottom: i < journeyItems.length - 1 ? "1px solid var(--rule-light)" : "none",
                  background: isCurrent ? "rgba(26,24,8,0.04)" : "transparent",
                }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                {/* Year */}
                <div className="md:col-span-2 flex items-center md:items-start gap-2 flex-row md:flex-col">
                  <span
                    className="label font-bold text-xs sm:text-sm"
                    style={{
                      color: isCurrent ? "var(--amber)" : "var(--ink-2)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {item.year}
                  </span>
                  {isCurrent && (
                    <span className="label-amber text-[0.72rem]">
                      ▪ NOW
                    </span>
                  )}
                </div>

                {/* Milestone title */}
                <div className="md:col-span-3 md:pr-4">
                  <p
                    className="font-serif text-base sm:text-lg md:text-[1.15rem]"
                    style={{
                      color: "var(--ink)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </p>
                </div>

                {/* Description */}
                <div className="md:col-span-7 mt-0.5 md:mt-0">
                  <p
                    className="font-mono text-xs sm:text-sm md:text-[0.95rem] leading-relaxed"
                    style={{
                      color: "var(--ink-2)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer */}
        <div
          className="py-2 label flex items-center justify-between"
          style={{ borderTop: "1px solid var(--rule)", color: "var(--ink-4)", fontSize: "0.7rem" }}
        >
          <span>LEDGER: 2021 → 2026 · {journeyItems.length} ENTRIES</span>
          <span className="label-amber">STATUS: ONGOING ▪</span>
        </div>
      </div>
    </section>
  );
}
