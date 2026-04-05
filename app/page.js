"use client";

import { useEffect, useRef } from "react";

/* ── Icons ── */
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

/* ── Tag pill ── */
function Tag({ children }) {
  return (
    <span style={{
      fontFamily: "var(--font-mono)",
      fontSize: "0.72rem",
      background: "var(--amber-dim)",
      color: "var(--amber)",
      border: "1px solid var(--amber-border)",
      padding: "4px 13px",
      borderRadius: "99px",
      whiteSpace: "nowrap",
    }}>
      {children}
    </span>
  );
}

/* ── Social icon link ── */
function SocialLink({ href, title, children, external = true }) {
  return (
    <a
      href={href}
      title={title}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={{ color: "var(--muted)", display: "flex", transition: "color .2s, transform .2s" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--bright)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--muted)";
        e.currentTarget.style.transform = "none";
      }}
    >
      {children}
    </a>
  );
}

/* ── Experience card ── */
function ExpItem({ dates, title, company, bullets, tags }) {
  return (
    <div
      className="group rounded-xl border border-transparent transition-all duration-200"
      style={{ padding: "20px 16px", marginBottom: "4px" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--bg-hover)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.borderColor = "transparent";
      }}
    >
      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        color: "var(--muted)",
        marginBottom: "10px",
        letterSpacing: "0.04em",
      }}>
        {dates}
      </p>
      <p style={{
        fontSize: "1rem",
        fontWeight: 600,
        color: "var(--light)",
        lineHeight: 1.3,
        marginBottom: "10px",
      }}>
        {title}
        <span style={{ color: "var(--muted)", fontWeight: 400 }}> · </span>
        {company}
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px 0", display: "flex", flexDirection: "column", gap: "8px" }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span style={{ color: "var(--amber)", marginTop: "6px", flexShrink: 0, fontSize: "0.5rem" }}>▸</span>
            <span style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--soft)" }}>{b}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
    </div>
  );
}

/* ── Data ── */
const EXPERIENCE = [
  {
    dates: "Nov 2025 — Feb 2026",
    title: "Software Engineer",
    company: "Insight Global → Bank of America",
    bullets: [
      "Decoupled a monolithic financial subledger validation service into a service-oriented architecture, enabling parallel development across 3 feature teams and cutting deployment time by 50%.",
      "Architected a bulk data retrieval feature in React and Python that replaced manual queries with a single-request pipeline, reducing subledger dataset access time to seconds.",
      "Optimized the core validation pipeline with targeted query parameters, cutting execution time by 90% during peak traffic windows.",
      "Overhauled the unit test suite across 20 financial recording applications to enforce data integrity checks and catch record mismatches early.",
    ],
    tags: ["Python", "React JS", "Oracle SQL", "Flask API"],
  },
  {
    dates: "Aug 2023 — Nov 2025",
    title: "Software Engineer",
    company: "JPMorgan Chase & Co.",
    bullets: [
      "Designed an event-driven anomaly detection pipeline in Python for 24/7 high-frequency trading monitoring, handling real-time data streams with sub-second alerting.",
      "Cut infrastructure costs by 50% by consolidating redundant API services and eliminating unnecessary AWS bandwidth fees using Bash and Python automation.",
      "Built Flask APIs and automated monitoring scripts tracking CPU usage, active sessions, login timestamps, and FIX connection status across 3 trading servers.",
      "Engineered automated outage detection and response in Python and Bash, eliminating manual on-call triage and cutting incident response time by 50%.",
      "Built an internal React.js dashboard to visualize system health, giving support teams and product managers real-time actionable insights.",
    ],
    tags: ["Python", "Flask", "React", "AWS", "Pandas", "Bash"],
  },
  {
    dates: "Jun 2022 — Aug 2022",
    title: "Software Engineer Intern",
    company: "JPMorgan Chase & Co.",
    bullets: [
      "Migrated a monolithic Java application to Spring Boot microservices, reducing inter-service coupling and enabling independent deployments that shortened the release cycle.",
      "Developed high-performance Java microservices for large-scale data processing in Oracle SQL, reducing system latency by 30%.",
      "Implemented Apache Kafka to handle real-time streaming and processing of 10,000+ daily call events, improving data flow efficiency.",
      "Authored system design documentation and onboarding guides to accelerate team ramp-up.",
    ],
    tags: ["Java", "Spring Boot", "Apache Kafka", "Oracle SQL"],
  },
];

const SKILLS = [
  "Python", "TypeScript / JavaScript", "Java", "SQL",
  "React.js", "Next.js", "Flask", "FastAPI", "Spring Boot",
  "Node.js", "Docker", "AWS", "PostgreSQL", "MongoDB",
];

const NAV_ITEMS = ["about", "experience"];

/* ── Page ── */
export default function Home() {
  const navRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            NAV_ITEMS.forEach((id) => navRefs.current[id]?.classList.remove("active"));
            navRefs.current[entry.target.id]?.classList.add("active");
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    NAV_ITEMS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .layout {
            flex-direction: column !important;
            padding: 0 20px !important;
            max-width: 100% !important;
          }
          .left-panel {
            position: static !important;
            height: auto !important;
            width: 100% !important;
            /* FIX 3: more space between tagline and socials on mobile */
            padding: 48px 0 0 !important;
            flex-direction: column !important;
            gap: 40px !important;
          }
          .left-panel nav { display: none !important; }
          .right-panel { padding: 32px 0 80px !important; }
          .mobile-section-label { display: block !important; }
          /* On mobile the left-panel is no longer space-between,
             so push socials down with margin on the top block */
          .left-top-block { margin-bottom: 0 !important; }
        }
        .mobile-section-label { display: none; }
      `}</style>

      <div
        className="layout flex mx-auto px-8"
        style={{ maxWidth: "1200px" }}
      >

        {/* ── LEFT PANEL ── */}
        <aside
          className="left-panel sticky top-0 flex flex-col justify-between flex-shrink-0"
          style={{ height: "100vh", width: "360px", minWidth: "300px", padding: "96px 0" }}
        >
          {/* Top block */}
          <div className="left-top-block">
            {/* FIX 1: single-line name — removed <br />, reduced font size slightly so it fits */}
            <h1 style={{
              fontSize: "2.5rem",
              fontWeight: 600,
              color: "var(--bright)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              whiteSpace: "nowrap",
            }}>
              Desmond Bush
            </h1>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 400, color: "var(--light)", margin: "16px 0 14px" }}>
              Software Engineer
            </h2>
            <p style={{ fontSize: "0.95rem", maxWidth: "280px", lineHeight: 1.8, color: "var(--muted)" }}>
              I build full-stack products that are fast, reliable, and useful to everyday people.
            </p>

            {/* Nav */}
            <nav style={{ marginTop: "56px" }}>
              <ul className="flex flex-col gap-1 list-none p-0">
                {NAV_ITEMS.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      ref={(el) => (navRefs.current[id] = el)}
                      className={`nav-link${id === "about" ? " active" : ""}`}
                    >
                      <span className="nav-dash" />
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Socials */}
          <div className="flex gap-5 items-center">
            <SocialLink href="https://github.com/DezBush" title="GitHub">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/desmond-bush/" title="LinkedIn">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href="mailto:desmondobush@gmail.com?subject=Contact%20From%20Portfolio" title="Email" external={false}>
              <EmailIcon />
            </SocialLink>
          </div>
        </aside>

        {/* ── RIGHT PANEL ── */}
        <main
          className="right-panel"
          style={{ flex: 1, minWidth: 0, padding: "96px 0 160px 80px" }}
        >

          {/* ABOUT */}
          {/* FIX 2: reduced marginBottom from 120px to 72px to tighten gap before Experience */}
          <section id="about" style={{ marginBottom: "72px", scrollMarginTop: "80px" }}>
            <p
              className="mobile-section-label"
              style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "24px" }}
            >
              About
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--soft)", marginBottom: "18px" }}>
              I&apos;m a software engineer based in New York City who specializes in full-stack
              development and data science. I love building things that are useful to real people —
              whether that&apos;s internal tooling for trading platforms, financial validation systems,
              or consumer-facing products.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--soft)", marginBottom: "18px" }}>
              I&apos;ve spent my career at the intersection of backend reliability and front-end clarity,
              turning complex infrastructure into experiences that just work. I care about performance,
              clean architecture, and the small details that make software feel polished.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--soft)", marginBottom: "36px" }}>
              Outside of work you can find me playing guitar, lifting weights, or reading Dune <a href="https://en.wikipedia.org/wiki/Sandworm_(Dune)">🪱</a>
            </p>

            {/* Skills */}
            <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "16px" }}>
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => <Tag key={s}>{s}</Tag>)}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" style={{ marginBottom: "120px", scrollMarginTop: "80px" }}>
            <p
              className="mobile-section-label"
              style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "24px" }}
            >
              Experience
            </p>

            {EXPERIENCE.map((job, i) => (
              <ExpItem key={i} {...job} />
            ))}

            <a
              href="/Bush_Desmond_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-all duration-200"
              style={{
                marginTop: "32px",
                marginLeft: "16px",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "var(--light)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "2px",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--amber)";
                e.currentTarget.style.borderBottomColor = "var(--amber)";
                e.currentTarget.style.gap = "14px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--light)";
                e.currentTarget.style.borderBottomColor = "var(--border)";
                e.currentTarget.style.gap = "8px";
              }}
            >
              View full résumé →
            </a>
          </section>

          {/* FOOTER */}
          <footer style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.8 }}>
            <p>
              Built with{" "}
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--soft)", textDecoration: "none" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--amber)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--soft)"}
              >Next.js</a>{" "}
              &amp; deployed on{" "}
              <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--soft)", textDecoration: "none" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--amber)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--soft)"}
              >Vercel</a>.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}