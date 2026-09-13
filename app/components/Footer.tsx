"use client";

import { navLinks } from "../lib/data";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "../lib/icons";
import { Mail } from "lucide-react";

export default function Footer() {
  const go = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "var(--ink)", color: "var(--parchment)", borderTop: "1px solid rgba(237,232,220,0.15)" }}>
      {/* Top accent rule */}
      <div style={{ background: "var(--amber)", height: "2px" }} />

      <div className="wrap py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p
              className="font-serif"
              style={{ fontSize: "1.5rem", color: "var(--parchment)", marginBottom: "0.5rem", letterSpacing: "-0.01em" }}
            >
              Naveed Latif
            </p>
            <p
              className="label mb-5"
              style={{ color: "rgba(237,232,220,0.45)", letterSpacing: "0.12em" }}
            >
              FULL-STACK DEVELOPER · DEVOPS ENGINEER
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.95rem",
                lineHeight: 1.85,
                color: "rgba(237,232,220,0.6)",
                marginBottom: "1.5rem",
              }}
            >
              Full-Stack Developer and DevOps Engineer building scalable
              web applications and cloud infrastructure from code to
              production deployment.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { href: "https://github.com/NaveedLatiff", Icon: GithubIcon, label: "GitHub" },
                { href: "https://www.linkedin.com/in/naveedlatif526", Icon: LinkedinIcon, label: "LinkedIn" },
                { href: "https://wa.me/923102331695", Icon: WhatsappIcon, label: "WhatsApp" },
                { href: "mailto:naveedlatif526@gmail.com", Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center transition-all cursor-pointer"
                  style={{
                    border: "1px solid rgba(237,232,220,0.15)",
                    color: "rgba(237,232,220,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--parchment)";
                    e.currentTarget.style.borderColor = "var(--amber)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(237,232,220,0.6)";
                    e.currentTarget.style.borderColor = "rgba(237,232,220,0.15)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="label mb-5"
              style={{ color: "rgba(237,232,220,0.5)", letterSpacing: "0.12em", borderBottom: "1px solid rgba(237,232,220,0.1)", paddingBottom: "0.5rem" }}
            >
              NAVIGATION
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => go(link.href)}
                    className="label flex items-center gap-2 transition-colors cursor-pointer"
                    style={{ color: "rgba(237,232,220,0.6)", letterSpacing: "0.08em", fontSize: "0.88rem" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--parchment)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(237,232,220,0.6)")}
                  >
                    <span style={{ color: "var(--amber)" }}>→</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="label mb-5"
              style={{ color: "rgba(237,232,220,0.5)", letterSpacing: "0.12em", borderBottom: "1px solid rgba(237,232,220,0.1)", paddingBottom: "0.5rem" }}
            >
              DIRECT CONTACT
            </p>
            <div className="space-y-3">
              <div>
                <p className="label" style={{ color: "rgba(237,232,220,0.45)", fontSize: "0.78rem" }}>EMAIL</p>
                <a
                  href="mailto:naveedlatif526@gmail.com"
                  className="cursor-pointer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.95rem",
                    color: "var(--amber)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    display: "block",
                    marginTop: "0.2rem",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--parchment)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--amber)")}
                >
                  naveedlatif526@gmail.com ↗
                </a>
              </div>
              <div>
                <p className="label" style={{ color: "rgba(237,232,220,0.45)", fontSize: "0.78rem" }}>GITHUB</p>
                <a
                  href="https://github.com/NaveedLatiff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.95rem",
                    color: "rgba(237,232,220,0.65)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    display: "block",
                    marginTop: "0.2rem",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--parchment)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(237,232,220,0.65)")}
                >
                  github.com/NaveedLatiff ↗
                </a>
              </div>
              <div>
                <p className="label" style={{ color: "rgba(237,232,220,0.45)", fontSize: "0.78rem" }}>WHATSAPP</p>
                <a
                  href="https://wa.me/923102331695"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.95rem",
                    color: "rgba(237,232,220,0.65)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    display: "block",
                    marginTop: "0.2rem",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--parchment)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(237,232,220,0.65)")}
                >
                  +92 310 2331695 ↗
                </a>
              </div>
              <div
                className="mt-4 p-3.5"
                style={{ border: "1px solid rgba(237,232,220,0.12)", background: "rgba(237,232,220,0.04)" }}
              >
                <p className="label" style={{ color: "var(--amber)", fontSize: "0.8rem", marginBottom: "0.25rem" }}>
                  ▪ CURRENTLY AVAILABLE
                </p>
                <p className="label" style={{ color: "rgba(237,232,220,0.5)", fontSize: "0.78rem" }}>
                  OPEN TO FREELANCE · FULL-TIME · REMOTE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="wrap py-4 flex flex-wrap items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(237,232,220,0.1)" }}
      >
        <p className="label" style={{ color: "rgba(237,232,220,0.4)", fontSize: "0.82rem", letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} NAVEED LATIF · ALL RIGHTS RESERVED
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="label cursor-pointer hover:underline"
          style={{ color: "var(--amber)", fontSize: "0.82rem", letterSpacing: "0.08em" }}
        >
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  );
}
