"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Database, Cloud, Bot } from "lucide-react";
import { services } from "../lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number; style?: React.CSSProperties }>> = {
  "01": Globe,
  "02": Database,
  "03": Cloud,
  "04": Bot,
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="services"
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
            05 · CORE SERVICES
          </span>
          <span className="label" style={{ color: "var(--ink-4)" }}>
            0{services.length} SERVICES
          </span>
        </motion.div>

        {/* Header */}
        <motion.div
          className="py-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
        >
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(1.65rem, 4vw, 3.2rem)",
              color: "var(--ink)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          >
            What I <em style={{ fontStyle: "italic" }}>build</em>{" "}
            for you.
          </h2>
          <p
            className="font-mono text-xs sm:text-sm md:text-base leading-relaxed"
            style={{
              color: "var(--ink-3)",
              maxWidth: "600px",
            }}
          >
            Specialized engineering covering modern websites, scalable data architecture,
            cloud deployments, and autonomous AI systems.
          </p>
        </motion.div>

        {/* Services grid — 2x2 boxes, clean borders, no tag badges */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            border: "1px solid var(--rule-light)",
            background: "var(--rule-light)",
            gap: "1px",
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {services.map((svc, i) => {
            const Icon = iconMap[svc.number] || Globe;
            return (
              <motion.div
                key={svc.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ backgroundColor: "var(--parchment-2)" }}
                className="cursor-pointer p-5 sm:p-7 md:p-10 flex flex-col gap-3 sm:gap-4"
                style={{
                  background: "var(--parchment)",
                  transition: "background 0.2s ease",
                  cursor: "pointer",
                }}
              >
                {/* Top row: Lucide icon + number */}
                <div className="flex items-center justify-between">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2.8rem",
                      height: "2.8rem",
                      border: "1px solid var(--rule-light)",
                      borderRadius: "6px",
                      background: "rgba(184, 92, 0, 0.06)",
                    }}
                  >
                    <Icon
                      style={{
                        width: "1.4rem",
                        height: "1.4rem",
                        color: "var(--amber)",
                      }}
                      strokeWidth={1.75}
                    />
                  </div>
                  <span
                    className="label text-xs"
                    style={{
                      color: "var(--ink-4)",
                      letterSpacing: "0.12em",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {`${svc.number} · SERVICE`}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-serif text-lg sm:text-xl md:text-2xl mt-1"
                  style={{
                    color: "var(--ink)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {svc.title}
                </h3>

                {/* Description */}
                <p
                  className="font-mono text-xs sm:text-sm md:text-[0.95rem] leading-relaxed flex-1"
                  style={{
                    color: "var(--ink-2)",
                  }}
                >
                  {svc.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA bottom bar */}
        <motion.div
          className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4"
          style={{ borderTop: "1px solid var(--rule)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.95rem",
              color: "var(--ink-3)",
            }}
          >
            Have a project in mind?&nbsp;&nbsp;
            <a
              href="mailto:naveedlatif526@gmail.com"
              className="cursor-pointer"
              style={{
                color: "var(--amber)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              naveedlatif526@gmail.com ↗
            </a>
          </p>
          <a href="mailto:naveedlatif526@gmail.com" className="btn-filled cursor-pointer">
            GET IN TOUCH ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
