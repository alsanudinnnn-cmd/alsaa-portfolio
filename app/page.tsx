"use client";

import { FormEvent, useEffect, useState } from "react";

const projects = [
  { number: "01", title: "Not Just Whipped Cream", summary: "E-commerce dessert shop — product design, WordPress development and a conversion-focused brand system.", tags: ["WordPress", "WooCommerce", "SEO"], className: "cream", eyebrow: "E-commerce / 2025" },
  { number: "02", title: "KEEPR", summary: "A privacy-first password vault and personal life OS, designed around clarity, encryption and calm daily use.", tags: ["Laravel", "React", "Security"], className: "keepr", eyebrow: "Full-stack / In progress" },
  { number: "03", title: "Haven for Paws", summary: "Pet adoption and identification platform using computer vision to help lost animals find their way home.", tags: ["Python", "EfficientNet", "PostgreSQL"], className: "paws", eyebrow: "AI platform / 2025" },
  { number: "04", title: "FieldOps Console", summary: "A focused operations dashboard that turns high-volume requests into clear, trackable workflows for teams.", tags: ["Laravel", "Tailwind", "Analytics"], className: "fieldops", eyebrow: "Operations / 2024" },
];

const experience = [
  ["Apr 2024 — Present", "WordPress Developer & SEO Specialist", "Freelance", "Australia · Remote"],
  ["Sept 2023 — Jun 2025", "IT Specialist", "One Clique Studio", "San Juan City, Philippines"],
  ["Apr 2023 — Aug 2023", "Marketing Analyst", "JG Superstore", "San Juan City, Philippines"],
  ["Jan 2023 — Jun 2023", "Content Associate", "JG Superstore", "San Juan City, Philippines"],
  ["Aug 2022 — Jan 2023", "Technical Support Representative", "Independent", "Manila, Philippines"],
];

const technologies = ["Laravel", "WordPress", "React", "TypeScript", "JavaScript", "Tailwind CSS", "PHP", "Python", "PostgreSQL", "MySQL", "Supabase", "Figma", "GitHub", "SEO"];
const certifications = [
  ["Apr 2026", "The GiveHER Effect: Powering AI and Robotics", "DEVCON Philippines"],
  ["Mar 2026", "Gen AI to Z: A Career Summit in an AI-Driven World", "Vibe Coders PH"],
];

function ThemeButton() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("rbl-theme");
    const next = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
  }, []);
  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("rbl-theme", next ? "dark" : "light");
  }
  return <button className="icon-button theme-button" type="button" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}><span className="theme-icon" aria-hidden="true" /></button>;
}

function ProjectVisual({ className, title }: { className: string; title: string }) {
  return <div className={`project-visual ${className}`} role="img" aria-label={`${title} interface preview`}>
    <div className="mock-browser"><div className="mock-top"><span /><span /><span /><i /></div><div className="mock-body"><div className="mock-kicker" /><div className="mock-title" /><div className="mock-copy" /><div className="mock-button" /></div></div>
    <span className="visual-label">{title}</span>
  </div>;
}

function ChatPanel({ onClose }: { onClose: () => void }) {
  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "A portfolio visitor");
    const message = String(form.get("message") || "I'd like to work together.");
    window.location.href = `mailto:rblenon18@gmail.com?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(message)}`;
  }
  return <section className="chat-panel" role="dialog" aria-modal="false" aria-labelledby="chat-title">
    <div className="chat-head"><div><span className="eyebrow">Start a conversation</span><h2 id="chat-title">What can I build for you?</h2></div><button className="icon-button close-button" type="button" onClick={onClose} aria-label="Close contact panel">×</button></div>
    <form onSubmit={sendMessage}>
      <label htmlFor="chat-name">Your name</label><input id="chat-name" name="name" autoComplete="name" required placeholder="How should I address you?" />
      <label htmlFor="chat-message">Project details</label><textarea id="chat-message" name="message" required rows={4} placeholder="A quick note about your idea, timeline, or goals." />
      <button className="button button-dark send-button" type="submit">Send via email <span aria-hidden="true">↗</span></button>
    </form>
  </section>;
}

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const contributionCells = Array.from({ length: 154 }, (_, index) => {
    const value = (index * 17 + Math.floor(index / 7) * 11) % 13;
    return value < 5 ? 0 : value < 8 ? 1 : value < 11 ? 2 : 3;
  });
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="RBL home">RBL<span>.</span></a>
      <nav aria-label="Primary navigation"><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <ThemeButton />
    </header>
    <main id="main">
      <section className="hero section-shell" id="top">
        <div className="hero-profile"><div className="portrait" aria-label="Renielyn Lenon monogram portrait" role="img"><span>RL</span><i className="portrait-line one" /><i className="portrait-line two" /><i className="portrait-line three" /></div><div><p className="profile-name">Renielyn Lenon <span className="verified" aria-label="Verified">✓</span></p><div className="profile-links" aria-label="Contact links"><a href="mailto:rblenon18@gmail.com">Email</a><a href="#contact">Let&apos;s talk</a></div></div></div>
        <div className="hero-copy"><p className="hero-kicker">Independent developer · Manila / Remote</p><h1>Freelance Web Developer <span>— Laravel & WordPress</span></h1><p className="hero-description">I build thoughtful websites and dependable backend systems for ambitious teams. My work connects clean interfaces with Laravel, WordPress, PostgreSQL and practical SEO—currently expanding into computer vision and LLM-powered products.</p><div className="hero-actions"><a className="button button-dark" href="#experience">View resume <span aria-hidden="true">→</span></a><a className="text-link" href="#projects">Explore selected work <span aria-hidden="true">↓</span></a></div></div>
        <p className="hero-index" aria-hidden="true">01 / 06</p>
      </section>

      <section className="section-shell content-section" id="projects">
        <div className="section-heading"><div><span className="eyebrow">Selected work</span><h2>Projects</h2></div><p>Designing products that feel obvious to use and hard to forget.</p></div>
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><ProjectVisual className={project.className} title={project.title} /><div className="project-meta"><span>{project.number}</span><span>{project.eyebrow}</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>

      <section className="section-shell content-section" id="experience">
        <div className="section-heading"><div><span className="eyebrow">A practical path</span><h2>Experience</h2></div><p>Technical execution shaped by support, marketing and a close understanding of real users.</p></div>
        <div className="timeline" role="list">{experience.map(([date, role, company, place], index) => <article className="timeline-row" role="listitem" key={`${role}-${date}`}><span className="timeline-number">0{index + 1}</span><time>{date}</time><div><h3>{role}</h3><p>{company}</p></div><p className="place">{place}</p></article>)}</div>
      </section>

      <section className="section-shell content-section split-section" id="about"><div className="split-title"><span className="eyebrow">Toolbox</span><h2>Technologies</h2><p>The stack changes. The standard stays the same: maintainable systems, fast pages and considered details.</p></div><div className="tech-cloud">{technologies.map((tech, index) => <span className={index < 3 ? "featured" : ""} key={tech}>{tech}</span>)}</div></section>

      <section className="section-shell education-row"><div><span className="eyebrow">Education</span><h2>Always learning.</h2></div><div className="education-detail"><time>2022 — 2027</time><div><h3>Bachelor of Science in Information Technology</h3><p>Polytechnic University of the Philippines · San Juan Campus</p></div></div></section>

      <section className="section-shell content-section certifications"><div className="section-heading"><div><span className="eyebrow">Continued learning</span><h2>Certifications</h2></div><p>Keeping pace with the fields changing how we design, build and work.</p></div><div className="certificate-list">{certifications.map(([date, title, issuer], index) => <article key={title}><time>{date}</time><span className={`certificate-mark mark-${index + 1}`} aria-hidden="true">RBL</span><div><h3>{title}</h3><p>{issuer}</p></div><span className="certificate-arrow" aria-hidden="true">↗</span></article>)}</div></section>

      <section className="section-shell content-section outside"><div className="outside-copy"><span className="eyebrow">Outside the IDE</span><h2>Curious by default.</h2><p>When I step away from the tech world, I recharge through manga, quiet cafés, long city walks and time with animals. The best product ideas tend to arrive somewhere in between.</p></div><div className="outside-art" aria-hidden="true"><span className="art-label">OFFLINE / ONLINE</span><div className="art-circle" /><div className="art-type">R</div></div></section>

      <section className="section-shell contribution-section" aria-labelledby="contribution-title"><div className="contribution-copy"><span className="eyebrow">The practice</span><h2 id="contribution-title">Repetition until it becomes technique.</h2></div><div className="contribution-grid" role="img" aria-label="A year of consistent development activity">{contributionCells.map((level, index) => <span className={`level-${level}`} key={index} />)}</div></section>

      <section className="section-shell contact-section content-section" id="contact"><div className="contact-copy"><span className="eyebrow">Have a project in mind?</span><h2>Let&apos;s work together.</h2><p>Available for freelance web development, WordPress, Laravel and full-stack builds. I also support existing sites with SEO, Search Console and ongoing improvements.</p></div><div className="contact-options"><a href="mailto:rblenon18@gmail.com"><span className="contact-icon" aria-hidden="true">@</span><span><small>Email</small><strong>rblenon18@gmail.com</strong></span><i aria-hidden="true">→</i></a><button type="button" onClick={() => setChatOpen(true)}><span className="contact-icon" aria-hidden="true">+</span><span><small>Let&apos;s talk</small><strong>Tell me about your project</strong></span><i aria-hidden="true">→</i></button></div></section>
    </main>
    <footer className="site-footer section-shell"><p><span>Renielyn Lenon</span> · Still sharpening · San Juan City, PH</p><p>Designed & built with care <span>© 2026</span></p></footer>
    <a className="scroll-top" href="#top" aria-label="Back to top">↑</a>
    {chatOpen && <ChatPanel onClose={() => setChatOpen(false)} />}
    <button className="chat-trigger" type="button" onClick={() => setChatOpen((value) => !value)} aria-expanded={chatOpen}><span className="chat-dot" aria-hidden="true" /> Chat with Ren</button>
  </>;
}
