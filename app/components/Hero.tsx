"use client";

import { motion } from "framer-motion";

/* ─── Animated terminal-style status block ─── */
function StatusBlock() {
  const lines = [
    { k: "ROLE", v: "Developer & DevOps Engineer" },
    { k: "MERN", v: "MongoDB · Express · React · Node.js" },
    { k: "DEVOPS", v: "Docker · Kubernetes · CI/CD · Nginx" },
    { k: "CLOUD", v: "AWS · Azure · Vercel · Railway · Render" },
  ];

  return (
    <div
      className="border w-full max-w-full overflow-hidden"
      style={{ borderColor: "var(--rule-light)", background: "var(--parchment-2)" }}
    >
      {/* Block header */}
      <div
        className="flex items-center justify-between px-3.5 py-2"
        style={{ borderBottom: "1px solid var(--rule-light)" }}
      >
        <span className="label-amber text-xs">▪ PROFILE</span>
        <span className="label text-xs" style={{ color: "var(--ink-4)" }}>
          NAVEED LATIF
        </span>
      </div>
      {/* Lines */}
      <div className="px-3.5 py-2.5 space-y-2">
        {lines.map((l, i) => (
          <motion.div
            key={l.k}
            className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2.5"
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.08 }}
          >
            <span
              className="label text-[0.72rem] sm:text-xs sm:w-16 flex-shrink-0 font-bold"
              style={{ color: "var(--amber)" }}
            >
              {l.k}
            </span>
            <span
              className="font-mono text-[0.8rem] sm:text-[0.88rem] leading-relaxed"
              style={{
                color: "var(--ink-2)",
                letterSpacing: "0.02em",
              }}
            >
              {l.v}
            </span>
          </motion.div>
        ))}
      </div>
      {/* Footer */}
      <div
        className="flex items-center justify-between px-3.5 py-2"
        style={{ borderTop: "1px solid var(--rule-light)" }}
      >
        <span className="label text-xs" style={{ color: "var(--ink-4)" }}>
          NAVEED LATIF
        </span>
        <span className="label text-xs" style={{ color: "var(--amber)" }}>
          OPEN TO WORK ▪
        </span>
      </div>
    </div>
  );
}



const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Hero() {
  return (
    <section id="home" style={{ background: "var(--parchment)" }}>
      {/* ── Main hero area ── */}
      <div className="wrap">
        {/* Section index row */}
        <motion.div
          className="section-idx"
          style={{ marginTop: "2rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="label text-xs sm:text-sm" style={{ color: "var(--ink-3)" }}>
            01 · SOFTWARE ENGINEER &amp; DEVOPS
          </span>
          <span className="label text-xs sm:text-sm" style={{ color: "var(--ink-4)" }}>
            OVERVIEW
          </span>
        </motion.div>

        {/* Big editorial heading */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="py-6 sm:py-8 md:py-10"
        >
          <motion.h1
            variants={fadeUp}
            className="font-serif"
            style={{
              fontSize: "clamp(1.65rem, 4.8vw, 4.2rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              maxWidth: "900px",
            }}
          >
            Full-Stack Developer &{" "}
            <em className="editorial-italic" style={{ fontStyle: "italic" }}>
              DevOps
            </em>{" "}
            Engineer building{" "}
            <em className="editorial-italic" style={{ fontStyle: "italic" }}>
              scalable
            </em>{" "}
            systems from code to{" "}
            <em className="editorial-italic" style={{ fontStyle: "italic" }}>
              cloud.
            </em>
          </motion.h1>
        </motion.div>

        {/* Two-col body + sidebar */}
        <motion.div
          className="grid md:grid-cols-12 gap-8 pb-8"
          style={{ borderBottom: "1px solid var(--rule)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* Left — bio copy */}
          <div className="md:col-span-7 space-y-4">
            <p
              className="font-mono text-xs sm:text-sm md:text-base leading-relaxed"
              style={{
                color: "var(--ink-2)",
                letterSpacing: "0.01em",
              }}
            >
              Full-Stack Developer and DevOps Engineer with hands-on experience
              across the MERN stack, building production-ready web applications
              from React frontends to Node.js APIs, with CI/CD pipelines and
              cloud deployments on AWS and Azure.
            </p>
            <p
              className="font-mono text-xs sm:text-sm md:text-base leading-relaxed"
              style={{
                color: "var(--ink-3)",
                letterSpacing: "0.01em",
              }}
            >
              I specialize in bridging the gap between development and
              operations by containerizing applications with Docker, automating
              deployments, and managing infrastructure on AWS, Azure,
              and Vercel.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-filled cursor-pointer"
              >
                VIEW PROJECTS ↘
              </button>
              <a
                href="https://github.com/NaveedLatiff"
                target="_blank"
                rel="noopener noreferrer"
                className="label flex items-center gap-1.5 cursor-pointer"
                style={{
                  color: "var(--ink)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.08em",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                ↗ GITHUB
              </a>
            </div>
          </div>

          {/* Right — status box */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <StatusBlock />
          </motion.div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <motion.div
          className="py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href="https://github.com/NaveedLatiff"
              target="_blank"
              rel="noopener noreferrer"
              className="label cursor-pointer"
              style={{ color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: "4px", fontSize: "0.85rem" }}
            >
              GITHUB ↗
            </a>
            <a
              href="https://www.linkedin.com/in/naveedlatif526"
              target="_blank"
              rel="noopener noreferrer"
              className="label cursor-pointer"
              style={{ color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: "4px", fontSize: "0.85rem" }}
            >
              LINKEDIN ↗
            </a>
            <a
              href="https://wa.me/923102331695"
              target="_blank"
              rel="noopener noreferrer"
              className="label-amber cursor-pointer"
              style={{ textDecoration: "underline", textUnderlineOffset: "4px", fontSize: "0.85rem" }}
            >
              WHATSAPP ↗
            </a>
            <a
              href="mailto:naveedlatif526@gmail.com"
              className="label cursor-pointer"
              style={{ color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: "4px", fontSize: "0.85rem" }}
            >
              EMAIL ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
