"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "../lib/icons";
import { Mail } from "lucide-react";

const socials = [
  { Icon: GithubIcon, label: "GITHUB", val: "NaveedLatiff", href: "https://github.com/NaveedLatiff" },
  { Icon: LinkedinIcon, label: "LINKEDIN", val: "naveedlatif", href: "https://www.linkedin.com/in/naveedlatif526" },
  { Icon: Mail, label: "EMAIL", val: "naveedlatif526@gmail.com", href: "mailto:naveedlatif526@gmail.com" },
  { Icon: WhatsappIcon, label: "WHATSAPP", val: "+92 310 2331695", href: "https://wa.me/923102331695" },
];

interface FormData { name: string; email: string; message: string; }

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitError(null);
    setSubmitting(true);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "b9e7c671-41c2-4d47-b1c5-e17486d74c88";
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          subject: `Portfolio Inquiry from ${form.name.trim()}`,
          from_name: form.name.trim(),
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setSubmitError(data.message || "Unable to send message. Please reach out directly to naveedlatif526@gmail.com.");
      }
    } catch {
      setSubmitError("Network error. Please reach out directly to naveedlatif526@gmail.com.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormData]) setErrors((p) => ({ ...p, [e.target.name]: undefined }));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--parchment-2)",
    border: "1px solid var(--rule-light)",
    borderRadius: 0,
    padding: "0.8rem 1rem",
    fontFamily: "var(--font-mono)",
    fontSize: "0.98rem",
    color: "var(--ink)",
    outline: "none",
    letterSpacing: "0.02em",
    transition: "border-color 0.15s",
  };

  return (
    <section
      id="contact"
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
            07 · CONTACT &amp; INQUIRIES
          </span>
          <span className="label" style={{ color: "var(--ink-4)" }}>
            GET IN TOUCH
          </span>
        </motion.div>

        {/* Header */}
        <motion.div
          className="py-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
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
            Have an idea{" "}
            <em style={{ fontStyle: "italic" }}>worth building?</em>
          </h2>
          <p
            className="font-mono text-xs sm:text-sm md:text-base leading-relaxed"
            style={{
              color: "var(--ink-3)",
              maxWidth: "580px",
            }}
          >
            Let&apos;s discuss your next project, collaboration, or engineering role.
            Reach out directly through any channel or send a message below.
          </p>
        </motion.div>

        {/* Two-col layout */}
        <motion.div
          className="grid md:grid-cols-12 gap-0 pb-8"
          style={{ borderTop: "1px solid var(--rule-light)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {/* Left — channels */}
          <div
            className="md:col-span-5 pt-6 pr-0 md:pr-8 border-b md:border-b-0 md:border-r pb-8 md:pb-0"
            style={{ borderColor: "var(--rule-light)" }}
          >
            <p className="label mb-4" style={{ color: "var(--ink-4)" }}>DIRECT CONTACT</p>
            <div className="space-y-0">
              {socials.map(({ Icon, label, val, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") || href === "#contact" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 py-3.5 group cursor-pointer"
                  style={{ borderBottom: "1px solid var(--rule-light)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(26,24,8,0.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                    style={{ border: "1px solid var(--rule-light)", background: "var(--parchment-2)" }}
                  >
                    <Icon size={16} style={{ color: "var(--amber)" }} />
                  </div>
                  <div>
                    <p className="label" style={{ color: "var(--amber)", fontSize: "0.78rem" }}>{label}</p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.95rem",
                        color: "var(--ink)",
                        letterSpacing: "0.01em",
                        fontWeight: 700,
                      }}
                    >
                      {val}
                    </p>
                  </div>
                  <span className="ml-auto label" style={{ color: "var(--ink-4)", fontSize: "0.9rem" }}>→</span>
                </a>
              ))}
            </div>

            {/* Status */}
            <div
              className="mt-6 p-4"
              style={{ background: "var(--parchment-2)", border: "1px solid var(--rule-light)" }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: "var(--amber)" }} />
                <span className="label-amber" style={{ fontSize: "0.82rem" }}>AVAILABLE FOR NEW WORK</span>
              </div>
              <p className="label" style={{ color: "var(--ink-4)", fontSize: "0.78rem" }}>
                TYPICAL RESPONSE TIME: WITHIN 24 HOURS
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-7 md:pl-8 pt-6">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                style={{ border: "1px solid var(--rule-light)", background: "var(--parchment-2)" }}
              >
                <CheckCircle size={32} style={{ color: "var(--amber)" }} />
                <div>
                  <p
                    className="font-serif"
                    style={{ fontSize: "1.5rem", color: "var(--ink)", marginBottom: "0.5rem" }}
                  >
                    Message received.
                  </p>
                  <p
                    style={{ fontFamily: "var(--font-mono)", color: "var(--ink-3)", fontSize: "0.95rem" }}
                  >
                    Thank you for reaching out. I will respond to your message promptly.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setSubmitError(null); setForm({ name: "", email: "", message: "" }); }}
                  className="btn-outline cursor-pointer"
                  style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Field: Name */}
                <div>
                  <label
                    htmlFor="c-name"
                    className="label block mb-1.5"
                    style={{ color: "var(--ink-3)", fontSize: "0.82rem" }}
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      borderColor: errors.name ? "var(--amber)" : "var(--rule-light)",
                    }}
                  />
                  {errors.name && (
                    <p className="label-amber mt-1" style={{ fontSize: "0.82rem" }}>
                      {errors.name}
                    </p>
                  )}
                </div>
                {/* Field: Email */}
                <div>
                  <label
                    htmlFor="c-email"
                    className="label block mb-1.5"
                    style={{ color: "var(--ink-3)", fontSize: "0.82rem" }}
                  >
                    YOUR EMAIL
                  </label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      borderColor: errors.email ? "var(--amber)" : "var(--rule-light)",
                    }}
                  />
                  {errors.email && (
                    <p className="label-amber mt-1" style={{ fontSize: "0.82rem" }}>
                      {errors.email}
                    </p>
                  )}
                </div>
                {/* Field: Message */}
                <div>
                  <label
                    htmlFor="c-message"
                    className="label block mb-1.5"
                    style={{ color: "var(--ink-3)", fontSize: "0.82rem" }}
                  >
                    YOUR MESSAGE
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project, timeline, or inquiry..."
                    value={form.message}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      borderColor: errors.message ? "var(--amber)" : "var(--rule-light)",
                    }}
                  />
                  {errors.message && (
                    <p className="label-amber mt-1" style={{ fontSize: "0.82rem" }}>
                      {errors.message}
                    </p>
                  )}
                </div>
                {/* Error notice if submission fails */}
                {submitError && (
                  <div
                    className="p-3 text-xs"
                    style={{
                      border: "1px solid var(--amber)",
                      background: "rgba(184, 92, 0, 0.08)",
                      color: "var(--amber)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    ⚠ {submitError}
                  </div>
                )}

                {/* Submit */}
                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="btn-filled cursor-pointer"
                    disabled={submitting}
                    style={{ flex: 1, justifyContent: "center", fontSize: "0.88rem" }}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        SENDING...
                      </>
                    ) : (
                      <>SEND MESSAGE <Send size={14} /></>
                    )}
                  </button>
                </div>
                <p className="label" style={{ color: "var(--ink-4)", fontSize: "0.8rem", marginTop: "0.5rem" }}>
                  Direct contact: naveedlatif526@gmail.com
                </p>
              </form>
            )}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="py-3 flex items-center justify-between"
          style={{ borderTop: "1px solid var(--rule)" }}
        >
          <span className="label" style={{ color: "var(--ink-4)", fontSize: "0.82rem" }}>
            GET IN TOUCH
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
