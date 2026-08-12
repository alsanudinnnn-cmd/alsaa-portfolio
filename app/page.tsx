"use client";

import { FormEvent, useEffect, useState } from "react";

const projects = [
  { number: "01", title: "Ebik Device Repair", summary: "A responsive service website that helps students request laptop and phone repairs through a clear, approachable booking experience.", tags: ["Responsive Web", "Service UX", "Deployment"], className: "cream", eyebrow: "Service platform / Live", href: "https://ebik.vercel.app/", videoSrc: "/vid/ebik-demo.mp4" },
  { number: "02", title: "SmartWarm", summary: "An IoT-based warm-up game system combining interactive LED challenges with a simple interface for engaging group activities.", tags: ["IoT", "Arduino", "Interactive UI"], className: "keepr", eyebrow: "Final year project / Live", href: "https://smartwarm.site/", videoSrc: "/vid/smartwarm-demo.mp4" },
  { number: "03", title: "Piex Jury Platform", summary: "A jury management platform designed around participant flow, efficient scoring workflows and transparent results for live events.", tags: ["PHP", "SQL", "Scoring UX"], className: "paws", eyebrow: "Event platform / Live", href: "https://spexpmj.infinityfreeapp.com/index.php", videoSrc: "/vid/piex-jury-demo.mp4" },
  { number: "04", title: "Venture Data Insight", summary: "A Data Insight for industry that need a document management flow and management files in one system", tags: ["Management", "Monitoring", "In progress"], className: "fieldops", eyebrow: "Security system / In progress", href: "#contact", videoSrc: "/vid/venture-demo.mp4" },
  { number: "05", title: "CashApp Ai", summary: "A smart financial management platform for small businesses, built around receipt scanning, budget tracking, cash-flow insights and transparent business performance.", tags: ["React", "Cloudflare", "Gemini AI"], className: "smartcash", eyebrow: "Financial platform / Business",  href: "https://cshappai.site/", videoSrc: "/vid/cashapp.mp4" },
  { number: "06", title: "Fresno Haven", summary: "A welcoming cleaning service website that presents professional home and business cleaning solutions through a clear, trustworthy and easy-to-navigate experience.", tags: ["Service Website", "Responsive Web", "Customer Experience"], className: "fresno", eyebrow: "Cleaning service / Live", href: "https://fresno-haven.vercel.app/", videoSrc: "/vid/fresno-haven-demo.mp4" },
  { number: "07", title: "Smart BioBin", summary: "An IoT-powered smart bin prototype that combines connected sensors and automated monitoring to support cleaner, more efficient waste management.", tags: ["IoT", "Sensors", "Automation"], className: "biobin", eyebrow: "IoT system / Prototype", href: "#contact", videoSrc: "/vid/smart-biobin-demo.mp4" },
];

const practiceMedia = [
  { type: "image", src: "/media/practice-hackathon.jpg", alt: "Alsa attending the Data Hackathon challenge at Raia Hotel, Terengganu" },
  { type: "image", src: "/media/practice-project-award.jpg", alt: "Alsa holding a project award at the Students' Project Exhibition" },
  { type: "video", src: "/media/practice-video.mp4", alt: "A video highlight from Alsa's learning and project journey" },
] as const;

const experience = [
  ["Jan 2026 - Currently", "Software Developer", "Freelance", "Johor Bahru"],
  ["Jan 2024 - Jan 2026", "IT Technician", "AJ Technology", "Johor Bahru"],
  ["Apr 2022 - Mar 2023", "Junior Engineer", "Kyocera", "Johor Bahru"],
  ["May 2021 - Apr 2022", "Store Management Trainee", "Original Classic", "Johor Bahru"],
];

const technologies = ["HTML", "CSS", "JavaScript", "PHP", "SQL", "C/C++", "Java", "Python", "React", "Node.js", "Firebase", "Arduino", "IoT", "Git", "GitHub", "Visual Studio Code", "NetBeans", "VMware", "Cisco", "Figma", "Canva"];

type CertificateIconName = "trophy" | "code" | "medal" | "users" | "clipboard" | "certificate" | "graduation" | "document";

const achievements: [string, string, string, CertificateIconName][] = [
  ["2026", "Best Overall Project - SPEX", "Politeknik Mersing · Gold, Faculty of Information Technology", "trophy"],
  ["2026", "Best Software Development Project - PIEX", "Faculty of Information Technology · Best overall project", "code"],
  ["2025", "Top 9 Finalist - PPKOMP", "International-level competition", "medal"],
  ["2025", "Silver Award - Data Hackathon", "National-level competition", "medal"],
  ["2022", "Gold Award - Innotech", "National-level competition", "trophy"],
  ["Leadership", "Chairperson of PPJTMK", "Student Association, Information & Communication Technology Department", "users"],
  ["Leadership", "Secretary of JPP", "Student Representative Committee, Kolej Komuniti", "clipboard"],
];

const credentials: [string, string, string, string, CertificateIconName][] = [
  ["Credential", "CompTIA Data+", "Verified professional certification", "/pdf/comptia-data-plus.pdf", "certificate"],
  ["Academic", "Academic Transcript", "Official academic record and course results", "/pdf/academic-transcript.pdf", "graduation"],
  ["Profile", "Professional Resume", "Experience, education, skills and achievements", "/pdf/alsa-resume.pdf", "document"],
];

function CertificateIcon({ name }: { name: CertificateIconName }) {
  const paths: Record<CertificateIconName, React.ReactNode> = {
    trophy: <><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" /><path d="M7 6H4v2a4 4 0 0 0 4 4" /><path d="M17 6h3v2a4 4 0 0 1-4 4" /></>,
    code: <><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m14 5-4 14" /></>,
    medal: <><circle cx="12" cy="14" r="5" /><path d="M8.5 9 6 3h4l2 4 2-4h4l-2.5 6" /><path d="m10 14 1.4 1.4L14 13" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    clipboard: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V2h6v2" /><path d="m9 13 2 2 4-4" /></>,
    certificate: <><rect x="5" y="3" width="14" height="15" rx="2" /><path d="M9 7h6M9 11h4" /><path d="m10 18-1 4 3-2 3 2-1-4" /></>,
    graduation: <><path d="m2 10 10-5 10 5-10 5L2 10Z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /><path d="M22 10v6" /></>,
    document: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h6" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function ThemeButton() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("alsa-theme");
    const next = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
  }, []);
  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("alsa-theme", next ? "dark" : "light");
  }
  return <button className="icon-button theme-button" type="button" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}><span className="theme-icon" aria-hidden="true" /></button>;
}

function ProjectVisual({ className, title, videoSrc }: { className: string; title: string; videoSrc?: string }) {
  return <div className={`project-visual ${className}`} role="img" aria-label={`${title} interface preview`}>
    {videoSrc
      ? <video className="project-demo-video" src={videoSrc} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
      : <div className="mock-browser"><div className="mock-top"><span /><span /><span /><i /></div><div className="mock-body"><div className="mock-kicker" /><div className="mock-title" /><div className="mock-copy" /><div className="mock-button" /></div></div>}
    <span className="visual-label">{title}</span>
  </div>;
}

function PracticeSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % practiceMedia.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  const activeMedia = practiceMedia[activeIndex];

  return <div className="contribution-image" role="group" aria-label={`Practice highlight ${activeIndex + 1} of ${practiceMedia.length}`}>
    {activeMedia.type === "video"
      ? <video key={activeMedia.src} className="practice-media" src={activeMedia.src} aria-label={activeMedia.alt} autoPlay muted loop playsInline preload="metadata" />
      : <img key={activeMedia.src} className="practice-media" src={activeMedia.src} alt={activeMedia.alt} width="572" height="800" loading="lazy" />}
    <div className="practice-dots" aria-hidden="true">
      {practiceMedia.map((media, index) => <span className={index === activeIndex ? "active" : ""} key={media.src} />)}
    </div>
  </div>;
}

function ChatPanel({ onClose }: { onClose: () => void }) {
  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "A portfolio visitor");
    const message = String(form.get("message") || "I'd like to work together.");
    window.location.href = `mailto:alsanudinnnn@gmail.com?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(message)}`;
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
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Alsa home">ALSA<span>.</span></a>
      <nav aria-label="Primary navigation"><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <ThemeButton />
    </header>
    <main id="main">
      <section className="hero section-shell" id="top">
        <div className="hero-profile"><div className="portrait"><img className="portrait-main" src="/images/profile-main.png" alt="Portrait of Alsa Nudin" width="738" height="680" /><img className="portrait-hover" src="/images/profile-hover.jpg" alt="" width="1536" height="1537" aria-hidden="true" /></div><div><p className="profile-name">Alsa Nudin <span className="verified" aria-label="Verified">✓</span></p><div className="profile-links" aria-label="Contact links"><a href="mailto:alsanudinnnn@gmail.com">Email</a><a href="https://github.com/alsanudinnnn-cmd/" target="_blank" rel="noreferrer">GitHub</a></div></div></div>
        <div className="hero-copy"><p className="hero-kicker">IT professional · Johor, Malaysia</p><h1>Full-Stack Developer <span>— building practical digital experiences</span></h1><p className="hero-description">I turn ideas into reliable web products, technical systems and connected experiences. My background spans software development, IT support, database management and IoT—with a practical focus on solutions people can use confidently.</p><div className="hero-actions"><a className="button button-dark" href="/pdf/alsa-resume.pdf" download>Download resume <span aria-hidden="true">↓</span></a><a className="text-link" href="#projects">Explore selected work <span aria-hidden="true">→</span></a></div></div>
        <p className="hero-index" aria-hidden="true">01 / 08</p>
      </section>
      <section className="section-shell content-section" id="projects">
        <div className="section-heading"><div><span className="eyebrow">Selected work</span><h2>Projects</h2></div><p>Web, IoT and security products shaped around clear workflows and real-world needs.</p></div>
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><a href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noreferrer" : undefined} aria-label={`View ${project.title}`}><ProjectVisual className={project.className} title={project.title} videoSrc={project.videoSrc} /></a><div className="project-meta"><span>{project.number}</span><span>{project.eyebrow}</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>
      <section className="section-shell content-section" id="experience">
        <div className="section-heading"><div><span className="eyebrow">Industry journey</span><h2>Experience</h2></div><p>Technical problem-solving supported by engineering discipline, customer care and hands-on operations.</p></div>
        <div className="timeline" role="list">{experience.map(([date, role, company, place], index) => <article className="timeline-row" role="listitem" key={`${role}-${date}`}><span className="timeline-number">0{index + 1}</span><time>{date}</time><div><h3>{role}</h3><p>{company}</p></div><p className="place">{place}</p></article>)}</div>
      </section>
      <section className="section-shell content-section split-section" id="about"><div className="split-title"><span className="eyebrow">Toolbox</span><h2>Technologies</h2><p>The tools span development, infrastructure, design and connected hardware. The goal stays constant: dependable work with a clear purpose.</p></div><div className="tech-cloud">{technologies.map((tech, index) => <span className={index < 4 ? "featured" : ""} key={tech}>{tech}</span>)}</div></section>
      <section className="section-shell education-row"><div><span className="eyebrow">Education</span><h2>Built on a practical foundation.</h2></div><div><div className="education-detail"><time>Dec 2023 - Jan 2026</time><div><h3>Diploma in Information Technology (Software & Development)</h3><p>Politeknik Mersing · Johor</p></div></div><div className="education-detail"><time>Apr 2020 - Dec 2022</time><div><h3>Certificate in Information Technology</h3><p>Kolej Komuniti Cawangan Gelang Patah · Johor</p></div></div></div></section>
      <section className="section-shell content-section certifications" id="achievements"><div className="section-heading"><div><span className="eyebrow">Recognition & leadership</span><h2>Achievements</h2></div><p>Competition results and leadership responsibilities that reflect initiative, teamwork and consistent delivery.</p></div><div className="certificate-list">{achievements.map(([date, title, issuer, icon], index) => <article key={title}><time>{date}</time><span className={`certificate-mark mark-${(index % 2) + 1}`} aria-hidden="true"><CertificateIcon name={icon} /></span><div><h3>{title}</h3><p>{issuer}</p></div><span className="certificate-arrow" aria-hidden="true">↗</span></article>)}</div></section>
      <section className="section-shell content-section certifications"><div className="section-heading"><div><span className="eyebrow">Verified documents</span><h2>Credentials</h2></div><p>Professional and academic documents available for review.</p></div><div className="certificate-list">{credentials.map(([date, title, issuer, href, icon], index) => <article key={title}><time>{date}</time><span className={`certificate-mark mark-${(index % 2) + 1}`} aria-hidden="true"><CertificateIcon name={icon} /></span><div><h3>{title}</h3><p>{issuer}</p></div><a className="certificate-arrow" href={href} target="_blank" rel="noreferrer" aria-label={`Open ${title}`}>↗</a></article>)}</div></section>
      <section className="section-shell content-section outside"><div className="outside-copy"><span className="eyebrow">How I work</span><h2>Curious, practical and always learning.</h2><p>I enjoy moving between code, hardware and user experience—understanding the real problem first, then choosing the right tools. I use AI as a professional tool to accelerate good thinking, never as a replacement for it.</p></div><div className="outside-art"><img src="/images/how-i-work-github.png" alt="Alsa's GitHub profile showing pinned web, IoT, AI and data projects" width="1495" height="802" loading="lazy" /></div></section>
      <section className="section-shell contribution-section" aria-labelledby="contribution-title"><div className="contribution-copy"><span className="eyebrow">The practice</span><h2 id="contribution-title">Learning through every build.</h2></div><PracticeSlideshow /></section>
      <section className="section-shell contact-section content-section" id="contact"><div className="contact-copy"><span className="eyebrow">Have a project in mind?</span><h2>Let&apos;s build something useful.</h2><p>I&apos;m open to web development, IT support, IoT and software projects where thoughtful execution can make a real difference.</p></div><div className="contact-options"><a href="mailto:alsanudinnnn@gmail.com"><span className="contact-icon" aria-hidden="true">@</span><span><small>Email</small><strong>alsanudinnnn@gmail.com</strong></span><i aria-hidden="true">→</i></a><button type="button" onClick={() => setChatOpen(true)}><span className="contact-icon" aria-hidden="true">+</span><span><small>Let&apos;s talk</small><strong>Tell me about your project</strong></span><i aria-hidden="true">→</i></button></div></section>
    </main>
    <footer className="site-footer section-shell"><p><span>Muhamad Alsanudin</span> · Building and learning · Johor, Malaysia</p><p>Designed & built with care <span>© 2026</span></p></footer>
    <a className="scroll-top" href="#top" aria-label="Back to top">↑</a>
    {chatOpen && <ChatPanel onClose={() => setChatOpen(false)} />}
    <button className="chat-trigger" type="button" onClick={() => setChatOpen((value) => !value)} aria-expanded={chatOpen}><span className="chat-dot" aria-hidden="true" /> Chat with Alsa</button>
  </>;
}
