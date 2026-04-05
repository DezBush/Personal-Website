"use client";

import { useEffect, useRef } from "react";

/* ── SVG icon components ── */
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

/* ── Skill tag ── */
function Tag({ children }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.7rem",
        background: "var(--amber-dim)",
        color: "var(--amber)",
        border: "1px solid var(--amber-border)",
        padding: "3px 11px",
        borderRadius: "99px",
      }}
    >
      {children}
    </span>
  );
}

/* ── Experience card ── */
function ExpItem({ dates, title, company, href, description, tags }) {
  return (
    <div
      className="group grid gap-x-5 rounded-[10px] border border-transparent p-[18px] transition-all duration-200"
      style={{
        gridTemplateColumns: "96px 1fr",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--bg-hover)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.borderColor = "transparent";
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--muted)",
          paddingTop: "3px",
          whiteSpace: "nowrap",
        }}
      >
        {dates}
      </div>
      <div>
        <div
          style={{
            fontSize: "0.92rem",
            fontWeight: 600,
            color: "var(--light)",
            lineHeight: 1.35,
            marginBottom: "8px",
          }}
        >
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "inherit", textDecoration: "none" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--amber)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "inherit")
              }
            >
              {title} · {company}{" "}
              <span
                className="group-hover:translate-x-[3px] group-hover:-translate-y-[3px] inline-block transition-transform duration-200"
                style={{ color: "var(--amber)", fontSize: "0.8em" }}
              >
                ↗
              </span>
            </a>
          ) : (
            <>
              {title} · {company}
            </>
          )}
        </div>
        <p
          style={{
            fontSize: "0.84rem",
            lineHeight: 1.75,
            color: "var(--soft)",
            marginBottom: "14px",
          }}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-[7px]">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main page ── */
export default function Home() {
  const navRefs = useRef({});

  /* Active nav on scroll */
  useEffect(() => {
    const sectionIds = ["about", "experience", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionIds.forEach((id) => {
              const el = navRefs.current[id];
              if (el) el.classList.remove("active");
            });
            const active = navRefs.current[entry.target.id];
            if (active) active.classList.add("active");
          }
        });
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="flex mx-auto px-8"
      style={{ maxWidth: "1080px" }}
    >

      {/* ── LEFT PANEL ── */}
      <aside
        className="sticky top-0 flex flex-col justify-between flex-shrink-0"
        style={{
          height: "100vh",
          width: "320px",
          minWidth: "280px",
          padding: "88px 0",
        }}
      >
        {/* Top: name + nav */}
        <div>
          <h1
            style={{
              fontSize: "2.4rem",
              fontWeight: 600,
              color: "var(--bright)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            Desmond
            <br />
            Bush
          </h1>
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 400,
              color: "var(--light)",
              margin: "14px 0 16px",
            }}
          >
            Software Engineer
          </h2>
          <p
            style={{
              fontSize: "0.875rem",
              maxWidth: "260px",
              lineHeight: 1.75,
              color: "var(--muted)",
            }}
          >
            I build full-stack projects and craft experiences that are useful
            to everyday people.
          </p>

          {/* Nav */}
          <nav style={{ marginTop: "52px" }}>
            <ul className="flex flex-col gap-0.5 list-none">
              {["about", "experience", "contact"].map((id) => (
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

        {/* Bottom: socials */}
        <div className="flex gap-[18px] items-center">
          <a
            href="https://github.com/desmondbush"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            style={{ color: "var(--muted)", transition: "color .2s, transform .2s" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--bright)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.transform = "none";
            }}
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/desmond-bush/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            style={{ color: "var(--muted)", transition: "color .2s, transform .2s" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--bright)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.transform = "none";
            }}
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:desmondobush@gmail.com?subject=Contact%20From%20Portfolio"
            title="Email"
            style={{ color: "var(--muted)", transition: "color .2s, transform .2s" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--bright)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.transform = "none";
            }}
          >
            <EmailIcon />
          </a>
        </div>
      </aside>

      {/* ── RIGHT PANEL ── */}
      <main
        style={{
          flex: 1,
          minWidth: 0,
          padding: "88px 0 160px 72px",
        }}
      >

        {/* ABOUT */}
        <section
          id="about"
          style={{ marginBottom: "112px", scrollMarginTop: "80px" }}
        >
          <p style={{ fontSize: "0.92rem", lineHeight: 1.85, color: "var(--soft)", marginBottom: "18px" }}>
            I&apos;m a passionate software engineer based in New York City who
            specializes in full-stack development and data science. I love
            working on projects that are useful to everyday people, applying my
            skills to unique challenges in the world, and keeping up with the
            latest trends in software.
          </p>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.85, color: "var(--soft)", marginBottom: "18px" }}>
            Outside of coding you can find me reading Dune, lifting weights, or
            playing with my two dogs 🐶
          </p>

          {/* Skills */}
          <div style={{ marginTop: "32px" }}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "16px",
              }}
            >
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "JavaScript/TypeScript", "Java", "React JS", "Flask & Fast API", "Spring Boot"].map(
                (s) => <Tag key={s}>{s}</Tag>
              )}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          style={{ marginBottom: "112px", scrollMarginTop: "80px" }}
        >
          <ExpItem
            dates="Nov 2025 — Feb 2026"
            title="Full-stack Software Engineer"
            company="J.P. Morgan Chase & Co."
            href={null}
            description="Created validation system"
            tags={["Python", "Node.js", "DevOps", "HFT", "Network Monitoring"]}
          />
          <ExpItem
            dates="Aug 2023 — Nov 2025"
            title="Full-stack Software Engineer"
            company="J.P. Morgan Chase & Co."
            href={null}
            description="Led the development and deployment of applications for high-frequency trading monitoring, ensuring minimal latency and seamless operations. Automated outage handling and optimized backend processes to boost productivity. Integrated Python and Node.js applications into the environment for network monitoring and server enhancements."
            tags={["Python", "Node.js", "DevOps", "HFT", "Network Monitoring"]}
          />
          <ExpItem
            dates="June — Aug 2022"
            title="Backend Software Engineer Intern"
            company="J.P. Morgan Chase & Co."
            href={null}
            description="Leveraged Apache Kafka to manage and store large-scale event data, improving backend efficiency. Revamped legacy code for Java applications and contributed to system design and documentation. Collaborated with senior developers to create scalable data storage solutions using Oracle SQL Developer."
            tags={["Java", "Apache Kafka", "Oracle SQL", "System Design"]}
          />

          <a
            href="/Bush_Desmond_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[7px] transition-all duration-200"
            style={{
              marginTop: "28px",
              fontSize: "0.86rem",
              fontWeight: 600,
              color: "var(--light)",
              textDecoration: "none",
              borderBottom: "1px solid var(--border)",
              paddingBottom: "2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--amber)";
              e.currentTarget.style.borderBottomColor = "var(--amber)";
              e.currentTarget.style.gap = "12px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--light)";
              e.currentTarget.style.borderBottomColor = "var(--border)";
              e.currentTarget.style.gap = "7px";
            }}
          >
            View full résumé →
          </a>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          style={{ marginBottom: "112px", scrollMarginTop: "80px" }}
        >
          <p
            style={{
              fontSize: "0.92rem",
              lineHeight: 1.85,
              color: "var(--soft)",
              marginBottom: "28px",
              maxWidth: "480px",
            }}
          >
            I&apos;m always open to new opportunities, collaborations, or just
            a good conversation about tech. Feel free to reach out — my inbox
            is open.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://www.linkedin.com/in/desmond-bush/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200"
              style={{
                background: "var(--amber-dim)",
                color: "var(--amber)",
                border: "1px solid var(--amber-border)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(245,166,35,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--amber-dim)";
              }}
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href="mailto:desmondobush@gmail.com?subject=Contact%20From%20Portfolio"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200"
              style={{
                background: "var(--amber-dim)",
                color: "var(--amber)",
                border: "1px solid var(--amber-border)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(245,166,35,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--amber-dim)";
              }}
            >
              <EmailIcon /> Email
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}