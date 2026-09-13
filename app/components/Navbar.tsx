"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../lib/data";

/* Ticker data shown in the top status bar */
const ticker = [
  { key: "STATUS", val: "AVAILABLE FOR WORK" },
  { key: "ROLE", val: "FULL-STACK · DEVOPS" },
  { key: "LOCATION", val: "PAKISTAN / REMOTE" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
const [mobileOpen, setMobileOpen] = useState(false);
const [currentTime, setCurrentTime] = useState(""); 

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.href.replace("#", ""));
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
  const updateTime = () => {
    const now = new Date();

    setCurrentTime(
      now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
    );
  };

  updateTime();

  const interval = setInterval(updateTime, 1000);

  return () => clearInterval(interval);
}, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Top ticker / status bar ── */}
      <div
        className="w-full max-w-full overflow-hidden"
        style={{ background: "var(--ink)", color: "var(--parchment)" }}
      >
        <div className="wrap">
          <div className="ticker-row py-1.5 w-full max-w-full min-w-0" style={{ gap: "1.5rem" }}>
            {/* Left brand */}
            <span
              className="font-serif text-xs flex-shrink-0"
              style={{ color: "var(--parchment)", letterSpacing: "0.04em" }}
            >
              NAVEED LATIF
            </span>
            <span
              className="label flex-shrink-0"
              style={{ color: "rgba(237,232,220,0.4)" }}
            >
              |
            </span>
            {ticker.map((t) => (
              <span key={t.key} className="flex items-center gap-1.5 flex-shrink-0">
                <span style={{ fontSize: "0.72rem", letterSpacing: "0.1em", color: "var(--amber)", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                  {t.key}
                </span>
                <span style={{ fontSize: "0.74rem", letterSpacing: "0.05em", color: "rgba(237,232,220,0.75)", fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>
                  {t.val}
                </span>
              </span>
            ))}
            {/* Right time */}
            <span className="ml-auto label flex-shrink-0 text-xs hidden sm:inline" style={{ color: "rgba(237,232,220,0.4)" }}>
              {currentTime}
            </span>
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <motion.header
        className="sticky top-0 z-50"
        style={{
          background: "var(--parchment)",
          borderBottom: "1px solid var(--rule)",
          boxShadow: scrolled ? "0 1px 0 0 rgba(26,24,8,0.12)" : "none",
        }}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="wrap">
          <nav className="flex items-center justify-between" style={{ height: "3.5rem" }}>
            {/* Logo */}
            <button
              onClick={() => go("#home")}
              className="flex items-center gap-2"
              aria-label="Home"
            >
              <span
                className="font-mono text-xs font-bold"
                style={{ letterSpacing: "0.16em", color: "var(--ink)", textTransform: "uppercase" }}
              >
                Naveed Latif
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center" style={{ gap: "0.25rem" }}>
              {navLinks.map((link) => {
                const isActive = active === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => go(link.href)}
                    className="label px-3 py-1.5 transition-colors cursor-pointer"
                    style={{
                      color: isActive ? "var(--ink)" : "var(--ink-3)",
                      textDecoration: isActive ? "underline solid" : "none",
                      textUnderlineOffset: "4px",
                      fontSize: "0.85rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:naveedlatif526@gmail.com"
                className="btn-filled hidden md:inline-flex"
                style={{ fontSize: "0.84rem", padding: "0.6rem 1.25rem" }}
              >
                CONTACT ME ↗
              </a>
              <button
                className="md:hidden label p-2 cursor-pointer"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                style={{ color: "var(--ink)", fontSize: "0.85rem" }}
              >
                {mobileOpen ? "[ CLOSE ]" : "[ MENU ]"}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{
              background: "var(--parchment)",
              top: "5.5rem",
              borderTop: "1px solid var(--rule)",
            }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="wrap py-6 space-y-px">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  className="w-full text-left label py-3.5 border-b flex justify-between cursor-pointer"
                  style={{
                    borderColor: "var(--rule-light)",
                    color: active === link.href.replace("#", "") ? "var(--ink)" : "var(--ink-3)",
                    fontSize: "0.95rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  {link.label}
                  <span style={{ color: "var(--ink-4)" }}>→</span>
                </button>
              ))}
              <div className="pt-4">
                <a href="mailto:naveedlatif526@gmail.com" className="btn-filled w-full justify-center">
                  CONTACT ME ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
