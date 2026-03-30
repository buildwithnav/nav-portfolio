import { useState, useEffect, useRef } from "react";
import {
  CheckCircle2, ArrowRight, ArrowUpRight, Download,
  Mail, Menu, X, Shield, Activity, Database, GitBranch, Bot, Lock,
  Layers, ChevronRight, Workflow
} from "lucide-react";

const Github = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

/* ═══════════════════════════════════════════════════════════
   CONFIG — Every editable personal value lives here.
   Change these and the entire site updates.
   ═══════════════════════════════════════════════════════════ */
const PROFILE = {
  name: "Nav Gill",
  handle: "nav.gill",
  title: "Senior SDET",
  role: "QA Automation Architect",
  specialization: "AI-Enabled QA Engineer",
  // Titles that cycle in the hero typewriter — edit/reorder as you like
  titles: [
    "Senior SDET",
    "QA Automation Architect",
    "AI-Enabled QA Engineer",
    "Quality Engineering Leader",
    "Builder",
  ],
  email: "buildwithnav@gmail.com",
  linkedin: "https://www.linkedin.com/in/navinder-gill/",
  github: "https://github.com/buildwithnav",
  resumeUrl: import.meta.env.BASE_URL + "resume.pdf",
  yearsExp: "9+",
  domain: "Healthcare · Clinical Data · Regulated Systems",
  location: "Los Angeles, CA",
};

/* ═══════════════════════════════════════════════════════════
   EXPERIENCE DATA
   ═══════════════════════════════════════════════════════════ */
const EXPERIENCE = [
  {
    id: "abbott",
    org: "Abbott",
    title: "Software Development Engineer in Test (SDET)",
    loc: "Sylmar, CA",
    start: "Sep 2025",
    end: null,
    status: "active",
    scope: "Clinical data pipeline validation — ingestion, transformation, Oracle downstream systems",
    deliverables: [
      "Architected enterprise boilerplate test framework (C#, .NET 9, Playwright, xUnit) adopted by multiple teams as the forkable foundation for new automation projects",
      "Built SQL-first validation framework with externalized fixtures, Oracle DB connector, parameterized async queries, and per-run artifact isolation (CSV exports, SQL snapshots, summaries)",
      "Source-vs-target diff assertions for clinical data discrepancy validation across ingestion, transformation, and Oracle downstream systems",
      "AI-assisted database validation utility — GitHub Copilot CLI + Oracle MCP for prompt-driven querying",
      "Playwright MCP for browser automation with AI-driven test orchestration",
      "Azure DevOps MCP for test case generation, execution tracking, and ADO test result reporting via Unity.ADO integration",
      "Shift-left testing on APIs and contracts with 3-tier config fallback (JSON, User Secrets, env vars)",
    ],
  },
  {
    id: "rtd",
    org: "Reliable Tire Depot",
    title: "Software Development Engineer in Test",
    loc: "Santa Clarita, CA",
    start: "Apr 2024",
    end: "Aug 2025",
    status: "completed",
    scope: "Built QA function from zero — hiring, mentoring, framework, and process",
    deliverables: [
      "Cypress automation: UI, API, regression, and accessibility testing",
      "85%+ automation coverage · 40% reduction in regression cycle time",
      "GitHub Actions — matrix builds, fail-fast, smart retries",
      "Postman, Newman, k6, Lighthouse CI",
      "Shift-left with Jest and Pact · Xray + Jira traceability",
    ],
  },
  {
    id: "s37",
    org: "Science37",
    title: "Senior Test Engineer",
    loc: "Culver City, CA",
    start: "Sep 2020",
    end: "Dec 2023",
    status: "completed",
    scope: "Decentralized clinical trial platform — enrollment, eConsent, telemedicine, site coordination",
    deliverables: [
      "CodeceptJS / Puppeteer framework with role-based workflow validation",
      "21 CFR Part 11 regulated environment · SpiraTest integration",
      "Mentoring QA engineers on automation strategy and best practices",
    ],
  },
  {
    id: "ep",
    org: "Entertainment Partners",
    title: "Software QA Engineer",
    loc: "Burbank, CA",
    start: "Sep 2018",
    end: "Jun 2020",
    status: "completed",
    scope: "Entertainment payroll platform — identity, access management, API testing",
    deliverables: [
      "Selenium BDD framework — Java, Cucumber, JUnit",
      "SSO, MFA, SSPR authentication testing · Postman API collections",
      "Agile QA process, defect tracking, release quality",
    ],
  },
  {
    id: "kp",
    org: "Kaiser Permanente",
    title: "Software QA Engineer",
    loc: "Pasadena, CA",
    start: "Aug 2016",
    end: "Aug 2018",
    status: "completed",
    scope: "Enterprise healthcare platform — patient workflows, scheduling, clinical systems",
    deliverables: [
      "500+ automation scenarios with Selenium for healthcare workflows",
      "JMeter performance testing · Cross-functional quality improvements",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════
   SKILLS MANIFEST
   ═══════════════════════════════════════════════════════════ */
const MANIFEST = [
  { group: "lang", label: "Languages", items: ["C#", "JavaScript", "TypeScript", "Java"] },
  { group: "auto", label: "Automation", items: ["Playwright", "Cypress", "Selenium", "CodeceptJS", "Puppeteer"] },
  { group: "api",  label: "API · Performance", items: ["Postman", "Newman", "k6", "JMeter", "Lighthouse CI", "Pact"] },
  { group: "cicd", label: "CI/CD · DevOps", items: ["Azure DevOps", "GitHub Actions", "Jenkins", "Docker"] },
  { group: "cloud",label: "Cloud · Infra", items: ["AWS", "Azure", "Docker"] },
  { group: "fwk",  label: "Test Frameworks", items: ["xUnit", "Jest", "Cucumber", "TestNG", "JUnit", "Mocha"] },
  { group: "mgmt", label: "Test Management", items: ["Jira", "Xray", "Zephyr", "SpiraTest", "Azure DevOps", "Allure", "Mochawesome"] },
  { group: "ai",   label: "AI Tooling", items: ["GitHub Copilot", "Claude Code CLI", "OpenAI Codex", "Azure DevOps MCP", "Oracle MCP", "Playwright MCP"] },
  { group: "meth", label: "Methodologies", items: ["Agile", "Scrum", "Shift-Left", "BDD", "TDD", "SDLC", "STLC", "21 CFR Part 11"] },
];

/* ═══════════════════════════════════════════════════════════
   PROJECTS DATA — your open-source repos
   ═══════════════════════════════════════════════════════════ */
const PROJECTS = [
  {
    name: "DataSquad",
    repo: "https://github.com/buildwithnav/DataSquad",
    tagline: "SQL-first data validation framework for clinical pipeline integrity",
    description: "Modular .NET 9 + xUnit framework with Oracle DB connector, externalized SQL fixtures, per-run artifact isolation (CSV exports, SQL snapshots), and Azure DevOps test result reporting. Validates source-vs-target diffs, schema integrity, and transformation rules across clinical data pipelines.",
    tech: ["C#", ".NET 9", "xUnit", "Oracle", "Azure DevOps", "Playwright", "Allure"],
    status: "active",
  },
  {
    name: "Cypress-E2E",
    repo: "https://github.com/buildwithnav/Cypress-E2E",
    tagline: "Production-grade E2E automation framework",
    description: "Full-stack Cypress testing framework covering UI, API, regression, and accessibility testing. Built with reusable commands, custom reporters, Slack notifications on run completion, and CI-ready configuration for GitHub Actions matrix builds.",
    tech: ["Cypress", "JavaScript", "GitHub Actions", "Mochawesome", "Slack"],
    status: "active",
  },
  {
    name: "AgenticAI-Heimdall",
    repo: "https://github.com/buildwithnav/AgenticAI-Heimdall",
    tagline: "Agentic AI approach to test automation",
    description: "AI-driven testing framework using agentic workflows for intelligent test generation, execution, and validation. Explores prompt-driven QA automation with MCP integrations and LLM-assisted decision-making.",
    tech: ["AI/ML", "MCP", "Agentic Workflows", "LLM"],
    status: "active",
  },
];

/* ═══════════════════════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════════════════════ */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setV(true); obs.unobserve(el); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, v];
}

/* ═══════════════════════════════════════════════════════════
   PRIMITIVES
   ═══════════════════════════════════════════════════════════ */
const StatusDot = ({ on = true, size = 7, color, pulse = false }) => (
  <span style={{
    display: "inline-block", width: size, height: size, borderRadius: "50%",
    background: color || (on ? "var(--green)" : "#4a4a5a"),
    boxShadow: on ? `0 0 6px ${color || "rgba(52,211,153,0.4)"}` : "none",
    animation: (on && pulse) ? "statusPulse 2.5s ease-in-out infinite" : "none",
    flexShrink: 0,
  }} />
);

function Reveal({ children, delay = 0, y = 20, style: extraStyle }) {
  const [ref, v] = useReveal();
  return (
    <div ref={ref} style={{
      opacity: v ? 1 : 0,
      transform: v ? "none" : `translateY(${y}px)`,
      transition: `opacity 0.65s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.65s cubic-bezier(.16,1,.3,1) ${delay}s`,
      ...extraStyle,
    }}>{children}</div>
  );
}

function Mono({ children, style = {}, ...p }) {
  return <span style={{ fontFamily: "var(--mono)", letterSpacing: "0.04em", ...style }} {...p}>{children}</span>;
}

/* ═══════════════════════════════════════════════════════════
   TYPEWRITER — types, pauses, deletes, cycles through titles
   ═══════════════════════════════════════════════════════════ */
function Typewriter({ texts, typeSpeed = 70, deleteSpeed = 35, holdMs = 2200 }) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState("type"); // type | hold | delete

  useEffect(() => {
    const current = texts[idx];
    let timer;

    if (phase === "type") {
      if (display.length < current.length) {
        timer = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), typeSpeed);
      } else {
        timer = setTimeout(() => setPhase("hold"), 0);
      }
    } else if (phase === "hold") {
      timer = setTimeout(() => setPhase("delete"), holdMs);
    } else if (phase === "delete") {
      if (display.length > 0) {
        timer = setTimeout(() => setDisplay(display.slice(0, -1)), deleteSpeed);
      } else {
        setIdx((idx + 1) % texts.length);
        setPhase("type");
      }
    }

    return () => clearTimeout(timer);
  }, [display, idx, phase, texts, typeSpeed, deleteSpeed, holdMs]);

  return (
    <span style={{ position: "relative" }}>
      {display}
      <span style={{
        display: "inline-block", width: 2, height: "0.85em",
        background: "var(--blue)", marginLeft: 2,
        verticalAlign: "text-bottom",
        animation: "cursorBlink 0.9s step-end infinite",
      }} />
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION RULE — replaces generic "section label"
   ═══════════════════════════════════════════════════════════ */
function SectionRule({ id, label, number }) {
  return (
    <div id={id} style={{
      display: "flex", alignItems: "baseline", gap: 14,
      paddingBottom: 28, marginBottom: 8,
      borderBottom: "1px solid var(--border)",
    }}>
      <Mono style={{ fontSize: 11, color: "var(--dim)", fontWeight: 500 }}>{number}</Mono>
      <span style={{
        fontFamily: "var(--display)", fontSize: 13, fontWeight: 700,
        color: "var(--fg2)", letterSpacing: "0.12em", textTransform: "uppercase",
      }}>{label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════════════════════ */
function Counter({ end, suffix = "", go }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!go) return;
    let c = 0;
    const s = Math.max(1, Math.floor(end / 35));
    const id = setInterval(() => {
      c += s;
      if (c >= end) { setV(end); clearInterval(id); } else setV(c);
    }, 28);
    return () => clearInterval(id);
  }, [go, end]);
  return <>{v}{suffix}</>;
}

/* ═══════════════════════════════════════════════════════════
   NAV — tabbed, minimal
   ═══════════════════════════════════════════════════════════ */
function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const tabs = [
    { id: "profile", l: "Profile" },
    { id: "capabilities", l: "Capabilities" },
    { id: "systems", l: "Systems" },
    { id: "pipeline", l: "Pipeline" },
    { id: "registry", l: "Stack" },
    { id: "output", l: "Output" },
    { id: "connect", l: "Connect" },
  ];

  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMob(false); };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      height: 52,
      background: scrolled ? "rgba(8,8,11,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 0.25s",
    }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 28px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Mark */}
        <button onClick={() => go("hero")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 24, height: 24, borderRadius: 3, border: "1.5px solid var(--green)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Mono style={{ fontSize: 9, fontWeight: 800, color: "var(--green)" }}>NG</Mono>
          </div>
          <Mono style={{ fontSize: 13, fontWeight: 600, color: "var(--fg)" }}>{PROFILE.handle}</Mono>
          <StatusDot on size={6} pulse />
        </button>

        {/* Desktop tabs */}
        <div className="dtabs" style={{ display: "flex", gap: 1 }}>
          {tabs.map(t => {
            const isActive = active === t.id;
            return (
              <button key={t.id} onClick={() => go(t.id)} style={{
                background: isActive ? "var(--surface)" : "none",
                border: isActive ? "1px solid var(--border)" : "1px solid transparent",
                borderRadius: 4, padding: "5px 11px", cursor: "pointer",
                transition: "all 0.15s",
              }}>
                <Mono style={{ fontSize: 11, fontWeight: isActive ? 600 : 400, color: isActive ? "var(--fg)" : "var(--dim)" }}>{t.l}</Mono>
              </button>
            );
          })}
        </div>

        <button className="mnav" onClick={() => setMob(!mob)} style={{ background: "none", border: "none", color: "var(--fg)", cursor: "pointer", display: "none" }}>
          {mob ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {mob && (
        <div style={{ background: "rgba(8,8,11,0.97)", borderBottom: "1px solid var(--border)", padding: "6px 28px 14px" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => go(t.id)} style={{
              display: "block", width: "100%", textAlign: "left", background: active === t.id ? "var(--surface)" : "none",
              border: "none", borderRadius: 4, padding: "10px 12px", cursor: "pointer",
            }}>
              <Mono style={{ fontSize: 12, color: active === t.id ? "var(--fg)" : "var(--dim)" }}>{t.l}</Mono>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO — Quality Gate Dashboard
   ═══════════════════════════════════════════════════════════ */
function Hero() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const [pipelineStep, setPipelineStep] = useState(-1);
  const [gatesRevealed, setGatesRevealed] = useState(0);
  const [hoveredStage, setHoveredStage] = useState(null);

  // Pipeline stages animate in on mount
  const stages = [
    { id: "ingest", label: "Ingest", icon: <Database size={13} /> },
    { id: "validate", label: "Validate", icon: <Shield size={13} /> },
    { id: "transform", label: "Transform", icon: <Workflow size={13} /> },
    { id: "verify", label: "Verify", icon: <CheckCircle2 size={13} /> },
    { id: "release", label: "Release", icon: <ArrowRight size={13} /> },
  ];

  const gates = [
    { label: "Data Integrity", value: "VERIFIED", status: "pass" },
    { label: "Schema Validation", value: "42 TABLES", status: "pass" },
    { label: "Pipeline Health", value: "STABLE", status: "pass" },
    { label: "API Contracts", value: "18/18 PASS", status: "pass" },
    { label: "Regression Suite", value: "247 PASSED", status: "pass" },
    { label: "Regulatory", value: "21 CFR PART 11 · GxP", status: "pass" },
    { label: "Data Privacy", value: "HIPAA · GDPR", status: "pass" },
    { label: "Certification", value: "AWS CCP", status: "pass" },
    { label: "Release Readiness", value: "APPROVED", status: "pass" },
  ];

  useEffect(() => {
    // Cascade pipeline stages
    const timers = stages.map((_, i) =>
      setTimeout(() => setPipelineStep(i), 600 + i * 350)
    );
    // Cascade gate reveals
    const gateTimers = gates.map((_, i) =>
      setTimeout(() => setGatesRevealed(i + 1), 600 + stages.length * 350 + i * 120)
    );
    return () => { timers.forEach(clearTimeout); gateTimers.forEach(clearTimeout); };
  }, []);

  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "110px 28px 60px", position: "relative",
    }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", width: "100%" }}>
        <div className="hero-glow" />
        {/* Breadcrumb */}
        <Reveal delay={0.05}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 44 }}>
            <Mono style={{ fontSize: 11, color: "var(--dim)" }}>quality-ops</Mono>
            <Mono style={{ fontSize: 11, color: "var(--border)" }}>/</Mono>
            <Mono style={{ fontSize: 11, color: "var(--dim)" }}>engineers</Mono>
            <Mono style={{ fontSize: 11, color: "var(--border)" }}>/</Mono>
            <Mono style={{ fontSize: 11, color: "var(--green)" }}>{PROFILE.handle}</Mono>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, alignItems: "start" }} className="hero-g">
          {/* ─── Left: Identity ─── */}
          <div>
            <Reveal delay={0.1}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <StatusDot on size={8} pulse />
                <Mono style={{ fontSize: 11, color: "var(--green)", fontWeight: 600 }}>AVAILABLE · OPEN TO OPPORTUNITIES</Mono>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <h1 style={{
                fontFamily: "var(--display)", fontSize: "clamp(48px, 7vw, 80px)",
                fontWeight: 800, color: "var(--fg)", lineHeight: 0.9,
                letterSpacing: "-0.05em", marginBottom: 20,
              }}>{PROFILE.name}</h1>
            </Reveal>

            <Reveal delay={0.25}>
              <div style={{
                marginBottom: 32, minHeight: 38,
                fontFamily: "var(--display)", fontSize: "clamp(20px, 2.6vw, 30px)",
                fontWeight: 600, color: "var(--blue)", letterSpacing: "-0.02em",
              }}>
                <Typewriter texts={PROFILE.titles} />
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <p style={{
                fontFamily: "var(--body)", fontSize: 16.5, lineHeight: 1.75,
                color: "var(--fg3)", maxWidth: 520, marginBottom: 40,
              }}>
                I build the test architectures that tell teams whether software is ready to ship.
                Nine years of automation engineering across healthcare platforms, clinical data
                pipelines, and regulated enterprise systems — focused on validation, reliability,
                and shipping with confidence.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button onClick={() => go("pipeline")} style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  padding: "10px 20px", borderRadius: 4, border: "none", cursor: "pointer",
                  background: "var(--green)", color: "var(--bg)",
                  fontFamily: "var(--mono)", fontSize: 12, fontWeight: 700, letterSpacing: "0.05em",
                  transition: "filter 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.filter = "brightness(1.15)"}
                  onMouseLeave={e => e.currentTarget.style.filter = "brightness(1)"}
                >VIEW PIPELINE <ArrowRight size={13} /></button>
                <a href={PROFILE.resumeUrl} download="Nav-Gill-Resume.pdf" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  padding: "10px 20px", borderRadius: 4, textDecoration: "none",
                  border: "1px solid var(--border)", color: "var(--fg3)",
                  fontFamily: "var(--mono)", fontSize: 12, fontWeight: 500, letterSpacing: "0.05em",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-h)"; e.currentTarget.style.color = "var(--fg)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--fg3)"; }}
                ><Download size={13} /> RESUME</a>
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 38, height: 38, borderRadius: 4, textDecoration: "none",
                  border: "1px solid var(--border)", color: "var(--dim)", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-h)"; e.currentTarget.style.color = "var(--fg)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--dim)"; }}
                ><Github size={15} /></a>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 38, height: 38, borderRadius: 4, textDecoration: "none",
                  border: "1px solid var(--border)", color: "var(--dim)", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-h)"; e.currentTarget.style.color = "var(--fg)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--dim)"; }}
                ><Linkedin size={15} /></a>
              </div>
            </Reveal>
          </div>

          {/* ─── Right: Quality Gate Panel ─── */}
          <Reveal delay={0.15} y={30}>
            <div className="gate-panel" style={{
              background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 5,
              overflow: "hidden",
            }}>
              {/* Panel header */}
              <div style={{
                padding: "9px 16px", borderBottom: "1px solid var(--border)",
                background: "var(--surface-deep)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <Shield size={12} style={{ color: "var(--green)" }} />
                  <Mono style={{ fontSize: 10, color: "var(--dim)", fontWeight: 600, letterSpacing: "0.1em" }}>QUALITY GATE</Mono>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <StatusDot on size={5} />
                  <Mono style={{ fontSize: 9, color: "var(--green)", fontWeight: 600 }}>ALL PASSING</Mono>
                </div>
              </div>

              {/* Pipeline visualization */}
              <div style={{
                padding: "16px 16px 12px", borderBottom: "1px solid var(--border)",
              }}>
                <Mono style={{ fontSize: 9, color: "var(--dim)", fontWeight: 600, letterSpacing: "0.1em", display: "block", marginBottom: 12 }}>EXECUTION PIPELINE</Mono>
                <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
                  {stages.map((s, i) => {
                    const active = i <= pipelineStep;
                    const isHovered = hoveredStage === s.id;
                    return (
                      <div key={s.id} style={{ display: "flex", alignItems: "center", flex: 1 }}
                        onMouseEnter={() => setHoveredStage(s.id)}
                        onMouseLeave={() => setHoveredStage(null)}
                      >
                        {/* Stage node */}
                        <div style={{
                          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                          flex: 1, cursor: "default",
                        }}>
                          <div style={{
                            width: 32, height: 32, borderRadius: 5,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            background: active
                              ? (isHovered ? "rgba(61,214,140,0.2)" : "rgba(61,214,140,0.1)")
                              : "var(--surface-deep)",
                            border: `1.5px solid ${active ? (isHovered ? "var(--green)" : "rgba(61,214,140,0.35)") : "var(--border)"}`,
                            color: active ? "var(--green)" : "var(--dim)",
                            transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                            boxShadow: active && isHovered ? "0 0 12px rgba(61,214,140,0.15)" : "none",
                          }}>
                            {s.icon}
                          </div>
                          <Mono style={{
                            fontSize: 9, fontWeight: 600,
                            color: active ? (isHovered ? "var(--fg)" : "var(--fg3)") : "var(--dim)",
                            letterSpacing: "0.06em",
                            transition: "color 0.2s",
                          }}>{s.label.toUpperCase()}</Mono>
                        </div>
                        {/* Connector line */}
                        {i < stages.length - 1 && (
                          <div style={{
                            width: 20, height: 1.5, flexShrink: 0,
                            background: i < pipelineStep ? "rgba(61,214,140,0.3)" : "var(--border)",
                            transition: "background 0.4s ease",
                            marginBottom: 20,
                          }} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Gate status rows */}
              <div style={{ padding: "4px 0" }}>
                {gates.map((g, i) => {
                  const revealed = i < gatesRevealed;
                  const statusColors = { pass: "var(--green)", warn: "var(--amber)", fail: "var(--red)" };
                  return (
                    <div key={i} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "8px 16px",
                      background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.008)",
                      opacity: revealed ? 1 : 0,
                      transform: revealed ? "none" : "translateX(8px)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <StatusDot on={revealed} size={5} color={revealed ? statusColors[g.status] : undefined} />
                        <Mono style={{ fontSize: 11, color: "var(--dim)" }}>{g.label}</Mono>
                      </div>
                      <Mono style={{
                        fontSize: 10, fontWeight: 700,
                        color: revealed ? statusColors[g.status] : "var(--dim)",
                        letterSpacing: "0.06em",
                      }}>{g.value}</Mono>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div style={{
                padding: "10px 16px", borderTop: "1px solid var(--border)",
                background: "var(--surface-deep)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <Mono style={{ fontSize: 9, color: "var(--dim)" }}>9 checks passed · 0 failed</Mono>
                <Mono style={{ fontSize: 9, color: "var(--green)", fontWeight: 600 }}>RELEASE CANDIDATE APPROVED</Mono>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT + CAPABILITIES — combined asymmetric section
   ═══════════════════════════════════════════════════════════ */
function Capabilities() {
  const modules = [
    { icon: <Layers size={17} />, name: "Test Architecture", desc: "Multi-layer frameworks across UI, API, and data validation with built-in DB connectors for direct source verification. Scalable, forkable patterns that teams adopt.", tech: "Playwright · Cypress · Selenium · xUnit · Oracle DB" },
    { icon: <Database size={17} />, name: "Data Validation", desc: "SQL-first pipeline verification with externalized fixtures, source-vs-target diff assertions, parameterized async queries, and per-run artifact isolation for full audit traceability.", tech: "Oracle · SQL · ETL · CSV Artifacts · Async Queries · Allure" },
    { icon: <GitBranch size={17} />, name: "CI/CD Quality Gates", desc: "Automated checkpoints in delivery pipelines. Matrix builds, fail-fast strategies, smart retries, gated releases.", tech: "Azure DevOps · GitHub Actions · Jenkins" },
    { icon: <Bot size={17} />, name: "AI-Assisted QA", desc: "Prompt-driven database validation, MCP-based workflow automation, intelligent test generation — practical AI integration.", tech: "GitHub Copilot CLI · Oracle MCP · ADO MCP · Playwright MCP" },
    { icon: <Lock size={17} />, name: "Regulated Systems", desc: "Testing in compliance-heavy environments — clinical trials, healthcare platforms, 21 CFR Part 11 audit readiness.", tech: "FDA · HIPAA · GxP · IQ/OQ/PQ" },
    { icon: <Activity size={17} />, name: "Performance & Reliability", desc: "Load testing, benchmarking, and reliability validation against defined thresholds and SLAs.", tech: "k6 · JMeter · Lighthouse CI" },
  ];

  return (
    <section style={{ padding: "80px 28px", position: "relative" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <Reveal><SectionRule id="profile" number="01" label="System Profile" /></Reveal>

        {/* About block */}
        <Reveal delay={0.1}>
          <div style={{ marginBottom: 64, paddingBottom: 48, borderBottom: "1px solid var(--border)" }}>
            {/* Label + opening line */}
            <div style={{
              display: "grid", gridTemplateColumns: "120px 1fr", gap: 16,
              marginBottom: 20,
            }} className="about-g">
              <Mono style={{ fontSize: 11, color: "var(--dim)", fontWeight: 500, paddingTop: 4 }}>ABOUT</Mono>
              <p style={{ fontFamily: "var(--body)", color: "var(--fg2)", fontWeight: 500, fontSize: 17, lineHeight: 1.6, margin: 0 }}>
                Quality is a system problem. I build the automation that solves it.
              </p>
            </div>
            {/* Body paragraphs — aligned with tagline */}
            <div style={{ fontFamily: "var(--body)", fontSize: 16, lineHeight: 1.8, color: "var(--fg3)", paddingLeft: 136 }} className="about-body">
              <p style={{ marginBottom: 14 }}>
                Over nine years, I've built test automation architectures across healthcare platforms,
                clinical data pipelines, and regulated enterprise systems. My work sits at the intersection
                of automation engineering, data validation, and CI/CD quality — enforcing quality gates
                that catch failures before they reach production.
              </p>
              <p>
                Currently at Abbott, I'm validating clinical data pipelines end-to-end and building
                AI-assisted validation tooling with GitHub Copilot CLI, Oracle MCP, Playwright MCP,
                and Azure DevOps MCP — replacing manual database checks with prompt-driven verification,
                automating test case generation, and orchestrating browser testing through agentic workflows.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Capability modules */}
        <Reveal><SectionRule id="capabilities" number="02" label="Capability Modules" /></Reveal>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 1,
          background: "var(--border)", borderRadius: 5, overflow: "hidden", marginTop: 20,
        }}>
          {modules.map((m, i) => (
            <Reveal key={i} delay={i * 0.06} style={{ display: "flex" }}>
              <div style={{
                background: "var(--bg)", padding: "28px 24px",
                transition: "background 0.2s",
                cursor: "default", flex: 1,
              }}
                className="cap-cell"
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ color: "var(--blue)" }}>{m.icon}</span>
                  <span style={{ fontFamily: "var(--display)", fontSize: 15, fontWeight: 700, color: "var(--fg)" }}>{m.name}</span>
                </div>
                <p style={{
                  fontFamily: "var(--body)", fontSize: 13.5, lineHeight: 1.65,
                  color: "var(--fg3)", marginBottom: 14,
                }}>{m.desc}</p>
                <Mono style={{ fontSize: 11, color: "var(--dim)" }}>{m.tech}</Mono>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SYSTEMS — Open-source projects showcase
   ═══════════════════════════════════════════════════════════ */
function Systems() {
  return (
    <section style={{ padding: "80px 28px", position: "relative" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <Reveal><SectionRule id="systems" number="03" label="Open Systems" /></Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <a href={p.repo} target="_blank" rel="noopener noreferrer" style={{
                display: "block", textDecoration: "none",
                background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 5,
                overflow: "hidden", transition: "border-color 0.2s",
              }}
                className="sys-card"
              >
                {/* Header */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "12px 20px", borderBottom: "1px solid var(--border)",
                  background: "var(--surface-deep)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Github size={14} style={{ color: "var(--dim)" }} />
                    <Mono style={{ fontSize: 13, fontWeight: 700, color: "var(--fg)" }}>
                      {p.name}
                    </Mono>
                    <Mono style={{
                      fontSize: 9, fontWeight: 600, color: "var(--green)",
                      padding: "2px 7px", borderRadius: 3, letterSpacing: "0.08em",
                      background: "rgba(61,214,140,0.08)", border: "1px solid rgba(61,214,140,0.15)",
                    }}>PUBLIC</Mono>
                  </div>
                  <ArrowUpRight size={14} style={{ color: "var(--dim)" }} />
                </div>

                {/* Body */}
                <div style={{ padding: "16px 20px" }}>
                  <div style={{
                    fontFamily: "var(--display)", fontSize: 15, fontWeight: 600,
                    color: "var(--blue)", marginBottom: 6,
                  }}>{p.tagline}</div>
                  <p style={{
                    fontFamily: "var(--body)", fontSize: 13.5, lineHeight: 1.65,
                    color: "var(--fg3)", marginBottom: 14, maxWidth: 640,
                  }}>{p.description}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.tech.map(t => (
                      <span key={t} style={{
                        display: "inline-flex", alignItems: "center", gap: 5,
                        padding: "3px 10px", borderRadius: 3,
                        background: "var(--surface-deep)", border: "1px solid var(--border)",
                        fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--dim)",
                        letterSpacing: "0.03em",
                      }}>
                        <StatusDot on size={4} />{t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PIPELINE — Experience as pipeline stages
   ═══════════════════════════════════════════════════════════ */
function Pipeline() {
  const [expanded, setExpanded] = useState("abbott");

  return (
    <section style={{ padding: "80px 28px", position: "relative" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <Reveal><SectionRule id="pipeline" number="04" label="Execution Pipeline" /></Reveal>

        {/* Pipeline bar visualization */}
        <Reveal delay={0.1}>
          <div style={{
            display: "flex", gap: 2, marginBottom: 32, borderRadius: 4, overflow: "hidden",
            height: 36, background: "var(--border)",
          }}>
            {EXPERIENCE.map((role, i) => {
              const isActive = role.status === "active";
              const isSelected = expanded === role.id;
              return (
                <button key={role.id} onClick={() => setExpanded(expanded === role.id ? null : role.id)} style={{
                  flex: 1, height: "100%", border: "none", cursor: "pointer",
                  background: isSelected
                    ? (isActive ? "var(--green)" : "var(--blue)")
                    : (isActive ? "rgba(52,211,153,0.12)" : "var(--surface)"),
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.25s", position: "relative",
                  borderRight: i < EXPERIENCE.length - 1 ? "1px solid var(--bg)" : "none",
                }}>
                  <Mono style={{
                    fontSize: 10, fontWeight: 700,
                    color: isSelected ? (isActive ? "var(--bg)" : "#fff") : "var(--dim)",
                    letterSpacing: "0.06em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    padding: "0 12px",
                  }}>{role.org.toUpperCase()}</Mono>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Detail panels */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {EXPERIENCE.map((role, i) => {
            const isOpen = expanded === role.id;
            const isActive = role.status === "active";
            return (
              <Reveal key={role.id} delay={i * 0.06}>
                <div style={{
                  background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 5,
                  overflow: "hidden",
                  borderLeftWidth: 3,
                  borderLeftColor: isOpen ? (isActive ? "var(--green)" : "var(--blue)") : "var(--border)",
                  transition: "border-color 0.2s",
                }}>
                  {/* Header — always visible */}
                  <button onClick={() => setExpanded(isOpen ? null : role.id)} style={{
                    width: "100%", background: "none", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "14px 20px", gap: 12,
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <StatusDot on={isActive} color={isActive ? undefined : "var(--blue)"} />
                      <span style={{ fontFamily: "var(--display)", fontSize: 16, fontWeight: 700, color: "var(--fg)", textAlign: "left" }}>{role.org}</span>
                      {isActive && (
                        <Mono style={{
                          fontSize: 9, fontWeight: 700, color: "var(--green)",
                          padding: "2px 7px", borderRadius: 3,
                          background: "rgba(61,214,140,0.1)", border: "1px solid rgba(61,214,140,0.18)",
                          letterSpacing: "0.08em",
                        }}>ACTIVE</Mono>
                      )}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Mono style={{ fontSize: 11, color: "var(--dim)", whiteSpace: "nowrap" }}>{role.start} – {role.end || "Present"}</Mono>
                      <ChevronRight size={14} style={{
                        color: "var(--dim)", transition: "transform 0.2s",
                        transform: isOpen ? "rotate(90deg)" : "none",
                      }} />
                    </div>
                  </button>

                  {/* Body — collapsible */}
                  {isOpen && (
                    <div style={{
                      padding: "0 20px 20px",
                      borderTop: "1px solid var(--border)",
                      animation: "slideDown 0.25s ease",
                    }}>
                      <div style={{ paddingTop: 16 }}>
                        <div style={{ fontFamily: "var(--body)", fontSize: 14, fontWeight: 500, color: "var(--fg3)", marginBottom: 4 }}>{role.title}</div>
                        <Mono style={{ fontSize: 11, color: "var(--dim)", display: "block", marginBottom: 14 }}>{role.loc}</Mono>

                        {/* Scope */}
                        <div style={{
                          padding: "10px 14px", borderRadius: 4,
                          background: "var(--surface-deep)", border: "1px solid var(--border)",
                          marginBottom: 16,
                        }}>
                          <Mono style={{ fontSize: 10, color: "var(--dim)", fontWeight: 600, display: "block", marginBottom: 4, letterSpacing: "0.08em" }}>SCOPE</Mono>
                          <span style={{ fontFamily: "var(--body)", fontSize: 14, color: "var(--fg2)", lineHeight: 1.5 }}>{role.scope}</span>
                        </div>

                        {/* Deliverables */}
                        <Mono style={{ fontSize: 10, color: "var(--dim)", fontWeight: 600, display: "block", marginBottom: 10, letterSpacing: "0.08em" }}>DELIVERABLES</Mono>
                        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                          {role.deliverables.map((d, j) => (
                            <div key={j} style={{
                              display: "flex", gap: 10, alignItems: "flex-start",
                              padding: "5px 0",
                            }}>
                              <CheckCircle2 size={13} style={{
                                color: isActive ? "var(--green)" : "var(--blue)",
                                marginTop: 2, flexShrink: 0, opacity: 0.65,
                              }} />
                              <span style={{ fontFamily: "var(--body)", fontSize: 13.5, lineHeight: 1.55, color: "var(--fg3)" }}>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   REGISTRY — Skills as a package manifest
   ═══════════════════════════════════════════════════════════ */
function Registry() {
  return (
    <section style={{ padding: "80px 28px", position: "relative" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <Reveal><SectionRule id="registry" number="05" label="Dependency Registry" /></Reveal>
        <div style={{
          background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 5, overflow: "hidden",
        }}>
          {/* Header */}
          <div style={{
            padding: "9px 20px", borderBottom: "1px solid var(--border)",
            background: "var(--surface-deep)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <Mono style={{ fontSize: 10, color: "var(--dim)", fontWeight: 600, letterSpacing: "0.1em" }}>INSTALLED PACKAGES</Mono>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <StatusDot on size={5} />
              <Mono style={{ fontSize: 9, color: "var(--green)" }}>{MANIFEST.reduce((a, g) => a + g.items.length, 0)} RESOLVED</Mono>
            </div>
          </div>

          <div style={{ padding: "8px 20px 20px" }}>
            {MANIFEST.map((g, gi) => (
              <Reveal key={gi} delay={gi * 0.04}>
                <div style={{
                  padding: "14px 0",
                  borderBottom: gi < MANIFEST.length - 1 ? "1px solid var(--border)" : "none",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <Mono style={{
                      fontSize: 10, fontWeight: 700, color: "var(--blue)",
                      letterSpacing: "0.1em", textTransform: "uppercase",
                    }}>{g.label}</Mono>
                    <Mono style={{ fontSize: 10, color: "var(--dim)" }}>({g.items.length})</Mono>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {g.items.map(item => (
                      <span key={item} className="pkg-tag" style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        padding: "4px 11px", borderRadius: 3,
                        border: "1px solid var(--border)", background: "var(--surface-deep)",
                        fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--fg3)",
                        transition: "all 0.15s", cursor: "default", letterSpacing: "0.02em",
                      }}>
                        <StatusDot on size={4} />{item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   OUTPUT — Impact metrics + achievements
   ═══════════════════════════════════════════════════════════ */
function Output() {
  const [ref, v] = useReveal();
  const kpis = [
    { n: 85, s: "%+", label: "Automation Coverage", note: "enterprise threshold exceeded" },
    { n: 40, s: "%",  label: "Faster Regressions", note: "cycle time reduction" },
    { n: 500, s: "+", label: "Scenarios Automated", note: "cross-platform suites" },
    { n: 9, s: "+",   label: "Years Experience", note: "enterprise QA" },
  ];

  const wins = [
    "Architected enterprise boilerplate framework adopted by multiple teams as the standard automation foundation",
    "Built QA organizations from zero — hiring, frameworks, process, standards",
    "Developed AI-assisted Oracle MCP utility for prompt-driven database validation",
    "Scaled automation to 85%+ coverage across clinical and e-commerce platforms",
    "Embedded quality gates in CI/CD reducing post-release defects significantly",
    "Validated compliance-critical workflows for 21 CFR Part 11 regulated systems",
    "Integrated Azure DevOps MCP for intelligent test generation and execution tracking",
  ];

  return (
    <section ref={ref} style={{ padding: "80px 28px", position: "relative" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <Reveal><SectionRule id="output" number="06" label="Performance Output" /></Reveal>

        {/* KPI row */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1,
          background: "var(--border)", borderRadius: 5, overflow: "hidden", marginBottom: 28,
        }} className="kpi-g">
          {kpis.map((k, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{ background: "var(--bg)", padding: "30px 20px", textAlign: "center" }}>
                <div style={{
                  fontFamily: "var(--display)", fontSize: 44, fontWeight: 800,
                  color: "var(--fg)", lineHeight: 1, letterSpacing: "-0.04em", marginBottom: 6,
                }}>
                  <Counter end={k.n} suffix={k.s} go={v} />
                </div>
                <div style={{ fontFamily: "var(--body)", fontSize: 13, fontWeight: 600, color: "var(--fg3)", marginBottom: 3 }}>{k.label}</div>
                <Mono style={{ fontSize: 10, color: "var(--dim)" }}>{k.note}</Mono>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Achievements */}
        <Reveal delay={0.2}>
          <div style={{
            display: "grid", gridTemplateColumns: "120px 1fr", gap: 16,
          }} className="about-g">
            <Mono style={{ fontSize: 11, color: "var(--dim)", fontWeight: 500, paddingTop: 4 }}>KEY RESULTS</Mono>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {wins.map((w, i) => (
                <div key={i} style={{
                  display: "flex", gap: 11, alignItems: "flex-start",
                  padding: "8px 12px", borderRadius: 3,
                  background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
                }}>
                  <CheckCircle2 size={14} style={{ color: "var(--green)", marginTop: 2, flexShrink: 0, opacity: 0.7 }} />
                  <span style={{ fontFamily: "var(--body)", fontSize: 14, lineHeight: 1.6, color: "var(--fg3)" }}>{w}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONNECT — minimal contact
   ═══════════════════════════════════════════════════════════ */
function Connect() {
  const channels = [
    { icon: <Mail size={15} />,     label: "Email",    value: PROFILE.email,   href: `mailto:${PROFILE.email}` },
    { icon: <Linkedin size={15} />, label: "LinkedIn", value: "Profile",       href: PROFILE.linkedin },
    { icon: <Github size={15} />,   label: "GitHub",   value: "Repositories",  href: PROFILE.github },
    { icon: <Download size={15} />, label: "Resume",   value: "Download PDF",  href: PROFILE.resumeUrl },
  ];

  return (
    <section style={{ padding: "80px 28px 48px", position: "relative" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <Reveal><SectionRule id="connect" number="07" label="Connection" /></Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--border)", borderRadius: 5, overflow: "hidden" }} className="conn-g">
          <Reveal delay={0.08} style={{ display: "flex" }}>
            <div style={{ background: "var(--bg)", padding: "32px 28px", flex: 1 }}>
              <span style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 700, color: "var(--fg)", display: "block", marginBottom: 14, letterSpacing: "-0.02em" }}>
                Let's talk quality engineering.
              </span>
              <p style={{ fontFamily: "var(--body)", fontSize: 15, lineHeight: 1.75, color: "var(--fg3)" }}>
                Open to senior SDET and QA architecture roles. Especially interested in
                teams working on healthcare, clinical data, or regulated systems where
                quality isn't optional.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12} style={{ display: "flex" }}>
            <div style={{ background: "var(--bg)", padding: "20px 28px", flex: 1 }}>
              {channels.map((ch, i) => (
                <a key={i} href={ch.href} target={ch.label === "Email" ? undefined : "_blank"} rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "13px 0", textDecoration: "none", color: "var(--fg3)",
                  borderBottom: i < channels.length - 1 ? "1px solid var(--border)" : "none",
                  transition: "color 0.15s",
                }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--fg)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--fg3)"}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "var(--blue)" }}>{ch.icon}</span>
                    <Mono style={{ fontSize: 12, fontWeight: 500 }}>{ch.label}</Mono>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Mono style={{ fontSize: 11, color: "var(--dim)" }}>{ch.value}</Mono>
                    <ArrowUpRight size={12} style={{ color: "var(--dim)" }} />
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Footer */}
        <Reveal delay={0.15}>
          <div style={{
            marginTop: 48, paddingTop: 20, borderTop: "1px solid var(--border)",
            display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
          }}>
            <Mono style={{ fontSize: 11, color: "#2a2a35" }}>© 2026 {PROFILE.name}</Mono>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <StatusDot on size={4} pulse />
              <Mono style={{ fontSize: 10, color: "#2a2a35" }}>all systems operational</Mono>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   APP
   ═══════════════════════════════════════════════════════════ */
export default function App() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const ids = ["connect", "output", "registry", "pipeline", "systems", "capabilities", "profile", "hero"];
    const onScroll = () => {
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500;600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        :root {
          --bg: #06070a;
          --surface: #0c0d12;
          --surface-deep: #090a0e;
          --border: #16171f;
          --border-h: #282a38;
          --fg: #eaebf0;
          --fg2: #b8b9c8;
          --fg3: #7c7d94;
          --dim: #4e4f66;
          --green: #34d399;
          --green-dim: rgba(52,211,153,0.08);
          --blue: #6993f5;
          --blue-dim: rgba(105,147,245,0.08);
          --amber: #f0b429;
          --amber-dim: rgba(240,180,41,0.08);
          --red: #f06050;
          --teal: #2dd4bf;
          --display: 'Geist', -apple-system, sans-serif;
          --body: 'Source Sans 3', -apple-system, sans-serif;
          --mono: 'Geist Mono', 'SF Mono', monospace;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); -webkit-font-smoothing: antialiased; }
        ::selection { background: rgba(105,147,245,0.25); }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--border-h); }

        @keyframes slideDown {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 800px; }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        /* Pulse for active status dots */
        @keyframes statusPulse {
          0%, 100% { box-shadow: 0 0 4px rgba(52,211,153,0.3); }
          50% { box-shadow: 0 0 10px rgba(52,211,153,0.6); }
        }
        /* Subtle horizontal scan for quality gate panel */
        @keyframes gateScan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { top: 100%; opacity: 0; }
        }
        /* Section rule line grow animation */
        @keyframes ruleGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        /* Fade in up for staggered children */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Hero background — refined grid with gradient wash */
        #hero::after {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(105,147,245,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(105,147,245,0.015) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 60% 50% at 50% 30%, rgba(0,0,0,0.6) 0%, transparent 70%);
          pointer-events: none;
        }
        /* Top accent — warmer, more intentional gradient */
        #hero::before {
          content: '';
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 560px; height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(52,211,153,0.4) 30%, rgba(105,147,245,0.35) 60%, rgba(45,212,191,0.2) 80%, transparent 100%);
        }
        /* Ambient glow behind hero — very subtle */
        #hero .hero-glow {
          position: absolute;
          top: -120px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(105,147,245,0.04) 0%, transparent 65%);
          pointer-events: none;
        }

        /* Quality gate panel scan line */
        .gate-panel { position: relative; overflow: hidden; }
        .gate-panel::after {
          content: '';
          position: absolute; left: 0; right: 0;
          height: 1px; top: 0;
          background: linear-gradient(90deg, transparent, rgba(52,211,153,0.15), transparent);
          animation: gateScan 6s ease-in-out infinite;
          pointer-events: none;
        }

        /* Capability cell hover — colored left border accent */
        .cap-cell {
          border-left: 2px solid transparent;
          transition: background 0.2s, border-color 0.3s !important;
        }
        .cap-cell:hover {
          background: var(--surface) !important;
          border-left-color: var(--blue) !important;
        }

        /* Skill tags — richer hover */
        .pkg-tag {
          transition: all 0.2s ease !important;
        }
        .pkg-tag:hover {
          border-color: rgba(52,211,153,0.25) !important;
          color: var(--green) !important;
          background: var(--green-dim) !important;
        }

        /* System cards — left border accent on hover */
        .sys-card {
          border-left: 2px solid transparent;
          transition: border-color 0.2s, box-shadow 0.3s !important;
        }
        .sys-card:hover {
          border-color: var(--border-h) !important;
          border-left-color: var(--green) !important;
          box-shadow: 0 2px 20px rgba(52,211,153,0.04) !important;
        }

        /* Pipeline bar segments — hover glow */
        .pipe-seg {
          transition: all 0.2s ease !important;
          position: relative;
        }
        .pipe-seg:hover {
          filter: brightness(1.3);
        }

        /* KPI panels — subtle top border accent on hover */
        .kpi-cell {
          transition: box-shadow 0.3s !important;
          position: relative;
        }
        .kpi-cell::before {
          content: '';
          position: absolute; top: 0; left: 20%; right: 20%;
          height: 1px; background: transparent;
          transition: all 0.3s;
        }
        .kpi-cell:hover::before {
          background: rgba(52,211,153,0.3);
          left: 10%; right: 10%;
        }

        @media (max-width: 860px) {
          .hero-g { grid-template-columns: 1fr !important; }
          .about-g { grid-template-columns: 1fr !important; }
          .about-body { padding-left: 0 !important; }
          .conn-g { grid-template-columns: 1fr !important; }
          .kpi-g { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          .kpi-g { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .dtabs { display: none !important; }
          .mnav { display: block !important; }
        }
        @media (min-width: 769px) {
          .mnav { display: none !important; }
        }
      `}</style>

      <Nav active={active} />
      <Hero />
      <Capabilities />
      <Systems />
      <Pipeline />
      <Registry />
      <Output />
      <Connect />
    </div>
  );
}
