"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, AlertCircle } from "lucide-react";
import { projects, type Project } from "../lib/data";
import { GithubIcon } from "../lib/icons";

/* ── Deployment Offline / Live Link Unavailable Popup ── */
function UnavailableModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        style={{ background: "rgba(26,24,8,0.78)", backdropFilter: "blur(5px)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          className="w-full max-w-lg overflow-hidden"
          style={{
            background: "var(--parchment)",
            border: "1px solid var(--rule)",
            boxShadow: "0 24px 48px rgba(0,0,0,0.2)",
          }}
          initial={{ scale: 0.95, y: 14, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between px-5 sm:px-6 py-3"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--amber)" }} />
              <span className="label-amber" style={{ fontSize: "0.82rem" }}>
                DEPLOYMENT STATUS
              </span>
            </div>
            <button
              onClick={onClose}
              className="label cursor-pointer p-1 transition-colors hover:text-black"
              style={{ color: "var(--ink-3)" }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-6 space-y-4">
            <div>
              <span className="label mb-1 block" style={{ color: "var(--ink-4)", fontSize: "0.78rem" }}>
                PROJECT: {project.name.toUpperCase()}
              </span>
              <h3
                className="font-serif"
                style={{
                  fontSize: "clamp(1.35rem, 3.5vw, 1.75rem)",
                  color: "var(--ink)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.015em",
                }}
              >
                Deploy link not currently available
              </h3>
            </div>

            <div
              className="p-3.5"
              style={{
                background: "var(--parchment-2)",
                border: "1px solid var(--rule-light)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.92rem",
                  lineHeight: 1.75,
                  color: "var(--ink-2)",
                }}
              >
                The live deployment for <strong style={{ color: "var(--ink)", fontWeight: 700 }}>{project.name}</strong> is currently offline or undergoing infrastructure updates.
              </p>
              <p
                className="mt-2"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.92rem",
                  lineHeight: 1.75,
                  color: "var(--ink-2)",
                }}
              >
                You can check the source code directly on GitHub.
              </p>
            </div>

            {/* Actions */}
            <div
              className="flex flex-col sm:flex-row gap-2.5 pt-2"
              style={{ borderTop: "1px solid var(--rule-light)" }}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-filled flex-1 justify-center cursor-pointer text-center"
                  style={{ fontSize: "0.85rem", padding: "0.75rem 1rem" }}
                  onClick={onClose}
                >
                  <GithubIcon size={15} />
                  VIEW SOURCE CODE ON GITHUB ↗
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="btn-outline justify-center cursor-pointer"
                style={{ fontSize: "0.85rem", padding: "0.75rem 1rem" }}
              >
                CLOSE
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Project Detail Modal ── */
function Modal({
  project,
  onClose,
  onUnavailable,
}: {
  project: Project;
  onClose: () => void;
  onUnavailable: (p: Project) => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const hasLive = Boolean(project.live && project.live.trim() !== "");

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(26,24,8,0.7)", backdropFilter: "blur(4px)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          style={{
            background: "var(--parchment)",
            border: "1px solid var(--rule)",
          }}
          initial={{ scale: 0.96, y: 12, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div
            className="flex items-center justify-between px-6 py-3"
            style={{ borderBottom: "1px solid var(--rule)" }}
          >
            <span className="label-amber">▪ PROJECT DETAILS</span>
            <button
              onClick={onClose}
              className="label cursor-pointer p-1"
              style={{ color: "var(--ink-3)" }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Project header */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="label mb-1" style={{ color: "var(--ink-4)" }}>PROJECT NAME</p>
                <h3
                  className="font-serif"
                  style={{ fontSize: "2rem", color: "var(--ink)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
                >
                  {project.name}
                </h3>
              </div>
              <div>
                <p className="label mb-1" style={{ color: "var(--ink-4)" }}>CLASSIFICATION</p>
                <span className="atag">{project.category}</span>
              </div>
            </div>

            {/* Description */}
            <div style={{ borderTop: "1px solid var(--rule-light)", paddingTop: "1rem" }}>
              <p className="label mb-2" style={{ color: "var(--ink-4)" }}>TECHNICAL OVERVIEW</p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "var(--ink-2)",
                }}
              >
                {project.longDescription}
              </p>
            </div>

            {/* Tech stack */}
            <div style={{ borderTop: "1px solid var(--rule-light)", paddingTop: "1rem" }}>
              <p className="label mb-3" style={{ color: "var(--ink-4)" }}>TECHNOLOGY STACK</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="itag" style={{ fontSize: "0.85rem" }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div
              className="flex gap-3 pt-2"
              style={{ borderTop: "1px solid var(--rule)" }}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 justify-center cursor-pointer"
                >
                  <GithubIcon size={15} />
                  SOURCE CODE
                </a>
              )}
              {hasLive ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-filled flex-1 justify-center cursor-pointer"
                >
                  LIVE DEMO ↗
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => onUnavailable(project)}
                  className="btn-filled flex-1 justify-center cursor-pointer"
                >
                  LIVE DEMO ↗
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Featured project (large) ── */
function FeaturedProject({
  p,
  onClick,
  onUnavailable,
}: {
  p: Project;
  onClick: () => void;
  onUnavailable: (p: Project) => void;
}) {
  const hasLive = Boolean(p.live && p.live.trim() !== "");

  return (
    <motion.div
      className="cursor-pointer"
      style={{ borderTop: "1px solid var(--rule-light)" }}
      whileHover={{ backgroundColor: "rgba(26,24,8,0.03)" }}
      onClick={onClick}
    >
      <div className="grid md:grid-cols-12 gap-0 py-5">
        {/* Index + tag */}
        <div className="md:col-span-1 pr-4">
          <span className="label" style={{ color: "var(--amber)" }}>01</span>
        </div>

        {/* Name + desc */}
        <div className="md:col-span-5">
          <span className="atag mb-3 inline-block">★ FEATURED PROJECT</span>
          <h3
            className="font-serif mt-2"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              color: "var(--ink)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {p.name}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "1.02rem",
              lineHeight: 1.85,
              color: "var(--ink-2)",
              marginTop: "0.75rem",
              maxWidth: "480px",
            }}
          >
            {p.description}
          </p>
        </div>

        {/* Tech */}
        <div className="md:col-span-3 md:pl-8 pt-3 md:pt-0">
          <p className="label mb-2" style={{ color: "var(--ink-4)" }}>TECH STACK</p>
          <div className="space-y-1.5">
            {p.technologies.map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="label" style={{ color: "var(--amber)" }}>▸</span>
                <span
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.92rem", color: "var(--ink)" }}
                >
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-3 md:pl-4 pt-4 md:pt-0 flex flex-wrap md:flex-col gap-2.5 items-start md:items-end justify-center">
          {hasLive ? (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-filled cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              LIVE DEMO ↗
            </a>
          ) : (
            <button
              type="button"
              className="btn-filled cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onUnavailable(p);
              }}
            >
              LIVE DEMO ↗
            </button>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon size={14} />
              SOURCE CODE
            </a>
          )}
          <p className="label mt-1 hidden sm:block" style={{ color: "var(--ink-4)", fontSize: "0.82rem" }}>
            CLICK FOR DETAILS ↗
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Regular project row ── */
function ProjectRow({
  p,
  idx,
  onClick,
}: {
  p: Project;
  idx: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="cursor-pointer py-3.5 sm:py-4.5"
      style={{ borderTop: "1px solid var(--rule-light)" }}
      whileHover={{ backgroundColor: "rgba(26,24,8,0.03)" }}
      onClick={onClick}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ delay: idx * 0.06, duration: 0.5 }}
    >
      {/* Mobile view (< sm) */}
      <div className="flex sm:hidden flex-col gap-1.5">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 min-w-0">
            <span className="label flex-shrink-0" style={{ color: "var(--amber)", fontSize: "0.8rem" }}>
              {String(idx + 2).padStart(2, "0")}
            </span>
            <p
              className="font-serif truncate"
              style={{ fontSize: "1.05rem", color: "var(--ink)", letterSpacing: "-0.01em" }}
            >
              {p.name}
            </p>
          </div>
          <span
            className="label transition-transform card-arrow flex-shrink-0 ml-2"
            style={{ color: "var(--ink-4)", fontSize: "0.95rem" }}
          >
            →
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 pl-6">
          {p.technologies.slice(0, 3).map((t) => (
            <span
              key={t}
              className="itag"
              style={{ fontSize: "0.7rem", padding: "0.15rem 0.45rem", whiteSpace: "nowrap" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop view (sm+) */}
      <div className="hidden sm:grid grid-cols-12 gap-0 items-center">
        {/* Number */}
        <div className="col-span-1">
          <span className="label" style={{ color: "var(--amber)", fontSize: "0.85rem" }}>
            {String(idx + 2).padStart(2, "0")}
          </span>
        </div>
        {/* Name */}
        <div className="col-span-4 md:col-span-3 pr-2">
          <p
            className="font-serif"
            style={{ fontSize: "1.1rem", color: "var(--ink)", letterSpacing: "-0.01em" }}
          >
            {p.name}
          </p>
        </div>
        {/* Desc */}
        <div className="hidden md:block col-span-4 pr-4">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.92rem",
              color: "var(--ink-2)",
              lineHeight: 1.6,
            }}
          >
            {p.description}
          </p>
        </div>
        {/* Tech tags */}
        <div className="col-span-6 md:col-span-4 flex flex-wrap gap-1.5 justify-end">
          {p.technologies.slice(0, 3).map((t) => (
            <span key={t} className="itag" style={{ fontSize: "0.74rem", whiteSpace: "nowrap" }}>{t}</span>
          ))}
        </div>
        {/* Arrow */}
        <div className="col-span-1 flex justify-end">
          <span
            className="label transition-transform card-arrow"
            style={{ color: "var(--ink-4)", display: "block", fontSize: "1rem" }}
          >
            →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [selected, setSelected] = useState<Project | null>(null);
  const [unavailableProject, setUnavailableProject] = useState<Project | null>(null);

  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
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
            04 · FEATURED PROJECTS &amp; ARCHIVE
          </span>
          <span className="label" style={{ color: "var(--ink-4)" }}>
            {projects.length} PROJECTS TOTAL
          </span>
        </motion.div>

        {/* Header */}
        <motion.div
          className="grid md:grid-cols-12 gap-8 py-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="md:col-span-7">
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                color: "var(--ink)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Featured{" "}
              <em style={{ fontStyle: "italic" }}>projects</em>{" "}
              &amp; code{" "}
              <em style={{ fontStyle: "italic" }}>archive.</em>
            </h2>
          </div>
          <div className="md:col-span-5 flex items-end">
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1.02rem",
                color: "var(--ink-3)",
                lineHeight: 1.8,
              }}
            >
              Production-grade web applications and systems deployed in real environments.
              Click any project for technical architecture details and live links.
            </p>
          </div>
        </motion.div>

        {/* Table header (hidden on mobile) */}
        <div
          className="hidden sm:grid grid-cols-12 gap-0 py-2.5 label"
          style={{
            borderTop: "1px solid var(--rule)",
            borderBottom: "1px solid var(--rule)",
            color: "var(--ink-4)",
            fontSize: "0.82rem",
            letterSpacing: "0.08em",
          }}
        >
          <span className="col-span-1">#</span>
          <span className="col-span-4 md:col-span-3">PROJECT</span>
          <span className="hidden md:block col-span-4">DESCRIPTION</span>
          <span className="col-span-6 md:col-span-4 text-right">TECH STACK</span>
          <span className="col-span-1 text-right">→</span>
        </div>

        {/* Featured project */}
        <FeaturedProject
          p={featured}
          onClick={() => setSelected(featured)}
          onUnavailable={setUnavailableProject}
        />

        {/* Rest of projects */}
        {rest.map((p, i) => (
          <ProjectRow key={p.id} p={p} idx={i} onClick={() => setSelected(p)} />
        ))}

        {/* Footer */}
        <div
          className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
          style={{ borderTop: "1px solid var(--rule)" }}
        >
          <p className="label" style={{ color: "var(--ink-4)", fontSize: "0.78rem" }}>
            PRODUCTION APPS &amp; REPOSITORIES ARCHIVE
          </p>
          <a
            href="https://github.com/NaveedLatiff"
            target="_blank"
            rel="noopener noreferrer"
            className="label cursor-pointer"
            style={{ color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: "4px", fontSize: "0.82rem" }}
          >
            FULL GITHUB REGISTRY ↗
          </a>
        </div>
      </div>

      {selected && (
        <Modal
          project={selected}
          onClose={() => setSelected(null)}
          onUnavailable={setUnavailableProject}
        />
      )}
      {unavailableProject && (
        <UnavailableModal
          project={unavailableProject}
          onClose={() => setUnavailableProject(null)}
        />
      )}
    </section>
  );
}
