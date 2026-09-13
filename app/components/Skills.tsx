"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { skills, skillCategories, type SkillCategory } from "../lib/data";

const catLabel: Record<SkillCategory, string> = {
  Frontend: "FRONTEND DEVELOPMENT",
  Backend: "BACKEND & APIS",
  Database: "DATABASES",
  DevOps: "DEVOPS & CLOUD",
};

const catAbbr: Record<SkillCategory, string> = {
  Frontend: "FE",
  Backend: "BE",
  Database: "DB",
  DevOps: "OPS",
};

/* ── Fullscreen Skills Modal ── */
function FullscreenModal({
  cat,
  grouped,
  onClose,
  onPrev,
  onNext,
  categories,
}: {
  cat: SkillCategory;
  grouped: Record<SkillCategory, typeof skills>;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  categories: SkillCategory[];
}) {
  const catSkills = grouped[cat];
  const catIdx = categories.indexOf(cat);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: "var(--parchment)", overflow: "hidden" }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Top bar ── */}
      <div
        className="flex items-center justify-between flex-shrink-0 px-3 sm:px-8 py-3"
        style={{
          borderBottom: "1px solid var(--rule)",
          background: "var(--ink)",
        }}
      >
        {/* Left: brand + breadcrumb */}
        <div className="flex items-center gap-2 sm:gap-4">
          <span
            className="font-serif text-sm sm:text-base"
            style={{ color: "var(--parchment)", letterSpacing: "0.02em" }}
          >
            Skills Dossier
          </span>
          <span style={{ color: "rgba(237,232,220,0.35)", fontFamily: "var(--font-mono)", fontSize: "0.72rem" }}>
            /
          </span>
          <span
            className="label-amber text-xs sm:text-sm"
            style={{ letterSpacing: "0.12em" }}
          >
            {catLabel[cat]}
          </span>
          <span
            className="label hidden sm:inline"
            style={{ color: "rgba(237,232,220,0.5)", fontSize: "0.82rem" }}
          >
            / {catSkills.length} TECHNOLOGIES
          </span>
        </div>

        {/* Right: category tabs + close */}
        <div className="flex items-center gap-1 sm:gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                const idx = categories.indexOf(c);
                const cur = categories.indexOf(cat);
                if (idx > cur) onNext();
                else if (idx < cur) onPrev();
              }}
              className="label cursor-pointer text-xs sm:text-sm px-1.5 sm:px-2.5 py-1"
              style={{
                letterSpacing: "0.08em",
                color: c === cat ? "var(--parchment)" : "rgba(237,232,220,0.45)",
                textDecoration: c === cat ? "underline" : "none",
                textUnderlineOffset: "3px",
                background: c === cat ? "rgba(237,232,220,0.08)" : "transparent",
                borderRadius: 0,
                cursor: "pointer",
              }}
            >
              {catAbbr[c]}
            </button>
          ))}
          <span style={{ color: "rgba(237,232,220,0.2)", margin: "0 0.25rem" }}>|</span>
          <button
            onClick={onClose}
            className="flex items-center gap-1 sm:gap-2 label cursor-pointer text-xs sm:text-sm"
            style={{
              color: "rgba(237,232,220,0.65)",
              letterSpacing: "0.08em",
              cursor: "pointer",
            }}
            aria-label="Close fullscreen"
          >
            <X size={16} />
            <span className="hidden sm:inline">ESC</span>
          </button>
        </div>
      </div>

      {/* ── Classification bar ── */}
      <div
        className="flex items-center justify-between flex-shrink-0 px-3 sm:px-8 py-2.5"
        style={{
          borderBottom: "1px solid var(--rule-light)",
          background: "var(--parchment-2)",
        }}
      >
        <span className="label text-xs sm:text-sm" style={{ color: "var(--ink)" }}>
          03 · {catLabel[cat]}
        </span>
        <span className="label text-xs sm:text-sm" style={{ color: "var(--ink-4)" }}>
          {catIdx + 1} OF {categories.length} CATEGORIES
        </span>
      </div>

      {/* ── Main content ── */}
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-10">
        <div className="max-w-5xl mx-auto">
          {/* Category title */}
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3.4rem)",
                color: "var(--ink)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                marginBottom: "0.5rem",
              }}
            >
              {catLabel[cat].split("&")[0]}
              {catLabel[cat].includes("&") && (
                <em style={{ fontStyle: "italic" }}>&amp; {catLabel[cat].split("&")[1]}</em>
              )}
            </h2>
            <p
              className="label mb-6 sm:mb-8 text-xs sm:text-sm"
              style={{ color: "var(--ink-4)", letterSpacing: "0.1em" }}
            >
              {catSkills.length} TECHNOLOGIES · CLASSIFICATION: {catAbbr[cat]} SYSTEM
            </p>

            {/* Skills grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1px] bg-[var(--rule-light)] border border-[var(--rule-light)]"
            >
              {catSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="bg-[var(--parchment)] p-4 sm:p-5 hover:bg-[rgba(26,24,8,0.04)] transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.025 }}
                >
                  {/* Number */}
                  <p
                    className="label mb-2"
                    style={{ color: "var(--amber)", fontSize: "0.68rem", letterSpacing: "0.1em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  {/* Name */}
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.95rem",
                      color: "var(--ink)",
                      fontWeight: 700,
                      letterSpacing: "0.02em",
                      lineHeight: 1.3,
                    }}
                  >
                    {skill.name}
                  </p>
                  {/* Category badge */}
                  <p
                    className="label mt-1.5"
                    style={{ color: "var(--ink-4)", fontSize: "0.65rem" }}
                  >
                    {catLabel[skill.category as SkillCategory]}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom navigation bar ── */}
      <div
        className="flex items-center justify-between flex-shrink-0 px-3 sm:px-8 py-3"
        style={{
          borderTop: "1px solid var(--rule)",
          background: "var(--parchment-2)",
        }}
      >
        <button
          onClick={onPrev}
          disabled={catIdx === 0}
          className="btn-outline"
          style={{
            fontSize: "0.72rem",
            padding: "0.5rem 1rem",
            opacity: catIdx === 0 ? 0.35 : 1,
          }}
        >
          ← PREV CATEGORY
        </button>

        <div className="flex items-center gap-3">
          {categories.map((c) => (
            <span
              key={c}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: c === cat ? "var(--ink)" : "var(--rule-light)",
                border: "1px solid var(--ink-3)",
                display: "inline-block",
                transition: "background 0.2s",
              }}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={catIdx === categories.length - 1}
          className="btn-filled"
          style={{
            fontSize: "0.72rem",
            padding: "0.5rem 1rem",
            opacity: catIdx === categories.length - 1 ? 0.35 : 1,
          }}
        >
          NEXT CATEGORY →
        </button>
      </div>
    </motion.div>
  );
}

/* ── Main Skills section ── */
export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [filter, setFilter] = useState<SkillCategory | "All">("All");
  const [modalCat, setModalCat] = useState<SkillCategory | null>(null);

  const grouped: Record<SkillCategory, typeof skills> = {
    Frontend: [], Backend: [], Database: [], DevOps: [],
  };
  skills.forEach((s) => grouped[s.category as SkillCategory]?.push(s));

  const displayCategories = filter === "All" ? skillCategories : [filter as SkillCategory];

  const openModal = (cat: SkillCategory) => setModalCat(cat);
  const closeModal = () => setModalCat(null);
  const prevCat = () => {
    if (!modalCat) return;
    const i = skillCategories.indexOf(modalCat);
    if (i > 0) setModalCat(skillCategories[i - 1]);
  };
  const nextCat = () => {
    if (!modalCat) return;
    const i = skillCategories.indexOf(modalCat);
    if (i < skillCategories.length - 1) setModalCat(skillCategories[i + 1]);
  };

  return (
    <>
      <section
        id="skills"
        ref={ref}
        style={{ background: "var(--parchment)", borderTop: "1px solid var(--rule)" }}
      >
        <div className="wrap">
          {/* Section index */}
          <motion.div
            className="section-idx"
            style={{ marginTop: "3rem" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            <span className="label" style={{ color: "var(--ink-3)" }}>
              03 · TECHNICAL STACK &amp; CAPABILITIES
            </span>
            <span className="label" style={{ color: "var(--ink-4)" }}>
              STACK 03
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="py-8"
          >
            <div className="grid md:grid-cols-12 gap-8 mb-8">
              <div className="md:col-span-6">
                <h2
                  className="font-serif"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", color: "var(--ink)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
                >
                  Technical <em style={{ fontStyle: "italic" }}>skills</em>{" "}
                  &amp; technologies.
                </h2>
              </div>
              <div className="md:col-span-6 flex flex-col justify-end">
                {/* Filter tabs */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setFilter("All")}
                    className={`${filter === "All" ? "btn-filled" : "btn-outline"} cursor-pointer`}
                    style={{ fontSize: "0.84rem", padding: "0.55rem 1.1rem" }}
                  >
                    ALL SKILLS
                  </button>
                  {skillCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`${filter === cat ? "btn-filled" : "btn-outline"} cursor-pointer`}
                      style={{ fontSize: "0.84rem", padding: "0.55rem 1.1rem" }}
                    >
                      {catAbbr[cat]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Columnar skill list */}
            {/* Columnar skill list */}
            <div
              className={`grid gap-[1px] bg-[var(--rule-light)] border border-[var(--rule-light)] ${displayCategories.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}`}
            >
              {displayCategories.map((cat, ci) => {
                const catSkills = grouped[cat];

                return (
                  <motion.div
                    key={cat}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 + ci * 0.08 }}
                    className="bg-[var(--parchment)] flex flex-col"
                  >
                    {/* Col header */}
                    <div
                      className="flex items-center justify-between px-4 py-3.5"
                      style={{ borderBottom: "1px solid var(--rule-light)", background: "var(--parchment-2)" }}
                    >
                      <span className="label-amber" style={{ fontSize: "0.85rem" }}>{catLabel[cat]}</span>
                      <span className="label" style={{ color: "var(--ink-4)", fontSize: "0.8rem" }}>
                        {catSkills.length} ITEMS
                      </span>
                    </div>

                    {/* Items preview */}
                    <div className="px-4 py-2 flex-1">
                      {catSkills.slice(0, 6).map((skill, i) => (
                        <div key={skill.name} className="num-entry py-2.5">
                          <span className="label flex-shrink-0" style={{ color: "var(--amber)", minWidth: "1.75rem", fontSize: "0.82rem" }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="flex-1">
                            <p
                              style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "1rem",
                                color: "var(--ink)",
                                fontWeight: 700,
                                letterSpacing: "0.02em",
                                lineHeight: 1.4,
                              }}
                            >
                              {skill.name}
                            </p>
                          </div>
                          <span className="label flex-shrink-0" style={{ color: "var(--ink-4)", fontSize: "0.78rem" }}>
                            {catAbbr[skill.category as SkillCategory]}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Col footer */}
                    <div
                      className="px-4 py-3.5 flex items-center justify-between"
                      style={{
                        borderTop: "1px solid var(--rule-light)",
                        background: "var(--parchment-2)",
                      }}
                    >
                      <span
                        className="label"
                        style={{ color: "var(--ink-4)", fontSize: "0.78rem", letterSpacing: "0.07em" }}
                      >
                        6 OF {catSkills.length}
                      </span>
                      <button
                        onClick={() => openModal(cat)}
                        className="label-amber cursor-pointer hover:underline"
                        style={{
                          fontSize: "0.84rem",
                          letterSpacing: "0.08em",
                          textUnderlineOffset: "3px",
                          cursor: "pointer",
                        }}
                      >
                        VIEW ALL {catSkills.length} ↗
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Bottom stat bar */}
          <div
            className="py-2 label flex flex-wrap gap-6"
            style={{ borderTop: "1px solid var(--rule)", color: "var(--ink-4)", fontSize: "0.7rem" }}
          >
            <span>TOTAL TECHNOLOGIES: {skills.length}</span>
            {skillCategories.map((cat) => (
              <span key={cat}>
                {catAbbr[cat]}: {grouped[cat].length}
              </span>
            ))}
            <button
              onClick={() => openModal(skillCategories[0])}
              className="label ml-auto"
              style={{
                color: "var(--amber)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                fontSize: "0.7rem",
                cursor: "pointer",
              }}
            >
              OPEN FULL DOSSIER ↗
            </button>
          </div>
        </div>
      </section>

      {/* ── Fullscreen Modal ── */}
      <AnimatePresence>
        {modalCat && (
          <FullscreenModal
            cat={modalCat}
            grouped={grouped}
            onClose={closeModal}
            onPrev={prevCat}
            onNext={nextCat}
            categories={skillCategories as unknown as SkillCategory[]}
          />
        )}
      </AnimatePresence>
    </>
  );
}
