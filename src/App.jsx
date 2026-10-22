import { useState, useEffect, useRef, useCallback } from "react";
import {
  CheckCircle2, ArrowRight, ArrowUpRight, Download,
  Mail, Menu, X, Shield, Activity, Database, GitBranch, Bot, Lock,
  Layers, ChevronDown, Workflow, Zap
} from "lucide-react";

const Github = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
const Linkedin = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

/* ── DATA ── */
const P = {
  name:"Nav Gill", handle:"nav.gill",
  titles:["Senior SDET","QA Automation Architect","AI-Enabled QA Engineer","Quality Engineering Leader","Builder"],
  email:"buildwithnav@gmail.com", linkedin:"https://www.linkedin.com/in/navinder-gill/",
  github:"https://github.com/buildwithnav", resumeUrl:import.meta.env.BASE_URL+"resume.pdf",
};

const EXP = [
  { id:"abbott",org:"Abbott",title:"Software Development Engineer in Test (SDET)",loc:"Sylmar, CA",start:"Sep 2025",end:null,active:true,
    scope:"Test infrastructure, clinical data validation, and AI platform testing across regulated healthcare systems",
    items:["Architected enterprise test automation platform (.NET 9, Playwright, xUnit, Oracle, Docker) with modular multi-layer architecture (UI + API + Database). Fluent API, flaky-test retry mechanisms, pre-flight health checks, BDD via Reqnroll, ADO test case sync. Adopted by multiple teams as the standard forkable foundation","Built SQL-first clinical data validation framework — externalized fixtures, Oracle DB connector, parameterized async queries, source-vs-target diff assertions, per-run artifact isolation (CSV exports, SQL snapshots) for full audit traceability","Validated clinical data pipelines end-to-end — ingestion, transformation, schema integrity, and replication across 20+ Oracle tables with automated regression history tracking","Tested multi-service AI orchestration platform end-to-end with Playwright — .NET APIs, Angular UIs, Python retrieval services, vector search. Validated MCP protocol integration, runtime tool discovery, and multi-auth flows","AI-assisted database validation — GitHub Copilot CLI + Oracle MCP for prompt-driven querying and dynamic verification","Shift-left testing on APIs, contracts, and schema mappings across 21 CFR Part 11 regulated environments"]},
  { id:"rtd",org:"Reliable Tire Depot",title:"Software Development Engineer in Test",loc:"Santa Clarita, CA",start:"Apr 2024",end:"Aug 2025",active:false,
    scope:"Built QA function from zero — hiring, mentoring, framework, and process",
    items:["Cypress automation: UI, API, regression, and accessibility testing","85%+ automation coverage · 40% reduction in regression cycle time","GitHub Actions — matrix builds, fail-fast, smart retries","Postman, Newman, k6, Lighthouse CI","Shift-left with Jest and Pact · Xray + Jira traceability"]},
  { id:"s37",org:"Science37",title:"Senior Test Engineer",loc:"Culver City, CA",start:"Sep 2020",end:"Dec 2023",active:false,
    scope:"Decentralized clinical trial platform — enrollment, eConsent, telemedicine",
    items:["CodeceptJS / Puppeteer framework with role-based workflow validation","21 CFR Part 11 regulated environment · SpiraTest integration","Mentoring QA engineers on automation strategy and best practices"]},
  { id:"ep",org:"Entertainment Partners",title:"Software QA Engineer",loc:"Burbank, CA",start:"Sep 2018",end:"Jun 2020",active:false,
    scope:"Entertainment payroll platform — identity, access management, API testing",
    items:["Selenium BDD framework — Java, Cucumber, JUnit","SSO, MFA, SSPR authentication testing · Postman API collections","Agile QA process, defect tracking, release quality"]},
  { id:"kp",org:"Kaiser Permanente",title:"Software QA Engineer",loc:"Pasadena, CA",start:"Aug 2016",end:"Aug 2018",active:false,
    scope:"Enterprise healthcare platform — patient workflows, scheduling, clinical systems",
    items:["500+ automation scenarios with Selenium for healthcare workflows","JMeter performance testing · Cross-functional quality improvements"]},
];

const SKILLS = [
  {label:"Languages",items:["C#","JavaScript","TypeScript","Java"]},
  {label:"Automation",items:["Playwright","Cypress","Selenium","CodeceptJS","Puppeteer"]},
  {label:"API & Perf",items:["Postman","Newman","k6","JMeter","Lighthouse CI","Pact"]},
  {label:"CI/CD",items:["Azure DevOps","GitHub Actions","Jenkins","Docker"]},
  {label:"Cloud",items:["AWS","Azure","Docker"]},
  {label:"Frameworks",items:["xUnit","Jest","Cucumber","TestNG","JUnit","Mocha"]},
  {label:"Management",items:["Jira","Xray","Zephyr","SpiraTest","Allure","Mochawesome"]},
  {label:"AI Tooling",items:["GitHub Copilot","Claude Code CLI","OpenAI Codex","Oracle MCP","Playwright MCP"]},
  {label:"Methods",items:["Agile","Scrum","Shift-Left","BDD","TDD","SDLC","STLC","21 CFR Part 11"]},
];

const PROJECTS = [
  {name:"DataSquad",repo:"https://github.com/buildwithnav/DataSquad",tag:"SQL-first clinical data validation",
    desc:"Modular .NET 9 + xUnit framework with Oracle DB connector, externalized SQL fixtures, per-run artifact isolation, and Azure DevOps reporting.",
    tech:["C#",".NET 9","xUnit","Oracle","Azure DevOps"],color:"#0ea5e9"},
  {name:"Cypress-E2E",repo:"https://github.com/buildwithnav/Cypress-E2E",tag:"Production-grade E2E automation",
    desc:"Full-stack Cypress framework with reusable commands, custom reporters, Slack notifications, and GitHub Actions matrix builds.",
    tech:["Cypress","JavaScript","GitHub Actions","Mochawesome"],color:"#8b5cf6"},
];

const CAPS = [
  {icon:<Layers size={24}/>,name:"Test Architecture",desc:"Multi-layer frameworks across UI, API, and data validation with built-in DB connectors for direct source verification.",tech:"Playwright · Cypress · Selenium · xUnit",color:"#4f46e5"},
  {icon:<Database size={24}/>,name:"Data Validation",desc:"SQL-first pipeline verification with source-vs-target diffs, parameterized async queries, and per-run artifact isolation.",tech:"Oracle · SQL · ETL · Allure",color:"#0ea5e9"},
  {icon:<GitBranch size={24}/>,name:"CI/CD Quality Gates",desc:"Automated checkpoints with matrix builds, fail-fast strategies, smart retries, and gated releases.",tech:"Azure DevOps · GitHub Actions · Jenkins",color:"#f59e0b"},
  {icon:<Bot size={24}/>,name:"AI-Assisted QA",desc:"Prompt-driven validation, MCP-based workflow automation, intelligent test generation.",tech:"Copilot · Oracle MCP · Playwright MCP",color:"#8b5cf6"},
  {icon:<Lock size={24}/>,name:"Regulated Systems",desc:"Compliance-heavy environments — clinical trials, healthcare, 21 CFR Part 11 audit readiness.",tech:"FDA · HIPAA · GxP · IQ/OQ/PQ",color:"#ec4899"},
  {icon:<Activity size={24}/>,name:"Performance",desc:"Load testing, benchmarking, reliability validation against defined SLAs and thresholds.",tech:"k6 · JMeter · Lighthouse CI",color:"#10b981"},
];

/* ── HOOKS ── */
function useReveal(t=0.1){const r=useRef(null);const[v,sV]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([x])=>{if(x.isIntersecting){sV(true);o.unobserve(e)}},{threshold:t});o.observe(e);return()=>o.disconnect()},[]);return[r,v]}

/* ── PRIMITIVES ── */
function R({children,delay=0,y=32,style:s}){const[ref,v]=useReveal();return<div ref={ref} style={{opacity:v?1:0,transform:v?"none":`translateY(${y}px)`,transition:`opacity .8s cubic-bezier(.16,1,.3,1) ${delay}s, transform .8s cubic-bezier(.16,1,.3,1) ${delay}s`,...s}}>{children}</div>}

function Typewriter({texts,speed=70,del=35,hold=2200}){
  const[d,sD]=useState("");const[i,sI]=useState(0);const[p,sP]=useState("t");
  useEffect(()=>{const c=texts[i];let t;
    if(p==="t"){if(d.length<c.length)t=setTimeout(()=>sD(c.slice(0,d.length+1)),speed);else t=setTimeout(()=>sP("h"),0)}
    else if(p==="h")t=setTimeout(()=>sP("d"),hold);
    else{if(d.length>0)t=setTimeout(()=>sD(d.slice(0,-1)),del);else{sI((i+1)%texts.length);sP("t")}}
    return()=>clearTimeout(t)},[d,i,p,texts,speed,del,hold]);
  return<span>{d}<span className="cursor"/></span>;
}

function Counter({end,suffix="",go}){const[v,sV]=useState(0);useEffect(()=>{if(!go)return;let c=0;const s=Math.max(1,Math.floor(end/35));const id=setInterval(()=>{c+=s;if(c>=end){sV(end);clearInterval(id)}else sV(c)},28);return()=>clearInterval(id)},[go,end]);return<>{v}{suffix}</>}

/* ── NAV ── */
function Nav({active}){
  const[sc,sSc]=useState(false);const[mob,sMob]=useState(false);
  useEffect(()=>{const h=()=>sSc(window.scrollY>30);window.addEventListener("scroll",h,{passive:true});return()=>window.removeEventListener("scroll",h)},[]);
  const tabs=[{id:"about",l:"About"},{id:"caps",l:"Skills"},{id:"projects",l:"Projects"},{id:"exp",l:"Experience"},{id:"stack",l:"Stack"},{id:"impact",l:"Impact"},{id:"connect",l:"Connect"}];
  const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});sMob(false)};
  return(
    <nav className={`nav${sc?" scrolled":""}`}>
      <div className="nav-inner">
        <button onClick={()=>go("hero")} className="brand">
          <div className="brand-mark">NG</div>
          <span className="brand-name">{P.handle}</span>
        </button>
        <div className="tabs">{tabs.map(t=><button key={t.id} onClick={()=>go(t.id)} className={`tab${active===t.id?" on":""}`}>{t.l}</button>)}</div>
        <button className="mob-btn" onClick={()=>sMob(!mob)}>{mob?<X size={20}/>:<Menu size={20}/>}</button>
      </div>
      {mob&&<div className="mob-menu">{tabs.map(t=><button key={t.id} onClick={()=>go(t.id)} className={`mob-item${active===t.id?" on":""}`}>{t.l}</button>)}</div>}
    </nav>
  );
}

/* ── HERO ── */
function Hero(){
  const go=id=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
  const[step,sStep]=useState(-1);const[gates,sGates]=useState(0);
  const stages=[{l:"Ingest",i:<Database size={14}/>},{l:"Validate",i:<Shield size={14}/>},{l:"Transform",i:<Workflow size={14}/>},{l:"Verify",i:<CheckCircle2 size={14}/>},{l:"Release",i:<ArrowRight size={14}/>}];
  const checks=[{l:"Data Integrity",v:"VERIFIED"},{l:"Schema Validation",v:"42 TABLES"},{l:"Pipeline Health",v:"STABLE"},{l:"API Contracts",v:"18/18 PASS"},{l:"Regression Suite",v:"247 PASSED"},{l:"Regulatory",v:"21 CFR · GxP"},{l:"Data Privacy",v:"HIPAA · GDPR"},{l:"Certification",v:"AWS CCP"},{l:"Release Gate",v:"APPROVED"}];
  useEffect(()=>{const t1=stages.map((_,i)=>setTimeout(()=>sStep(i),800+i*350));const t2=checks.map((_,i)=>setTimeout(()=>sGates(i+1),800+stages.length*350+i*120));return()=>{t1.forEach(clearTimeout);t2.forEach(clearTimeout)}},[]);

  return(
    <section id="hero" className="hero">
      <div className="hero-mesh"/>
      <div className="container hero-split">
        <div className="hero-left">
          <R delay={0.05}><span className="hero-eyebrow">Nav Gill — Senior SDET</span></R>
          <R delay={0.12}><h1 className="hero-h1">I build the systems that tell you<br/>when software is <span className="hero-accent">ready to ship</span>.</h1></R>
          <R delay={0.22}><p className="hero-sub"><Typewriter texts={P.titles}/></p></R>
          <R delay={0.3}><p className="hero-body">Nine years of automation engineering across healthcare platforms, clinical data pipelines, and regulated enterprise systems — focused on validation, reliability, and shipping with confidence.</p></R>
          <R delay={0.38}>
            <div className="hero-btns">
              <button onClick={()=>go("exp")} className="btn-primary">View Experience <ArrowRight size={15}/></button>
              <a href={P.resumeUrl} download="Nav-Gill-Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary"><Download size={15}/> Resume</a>
              <a href={P.github} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Github size={17}/></a>
              <a href={P.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Linkedin size={17}/></a>
            </div>
          </R>
        </div>
        <R delay={0.18} y={40}>
          <div className="gate">
            <div className="gate-head"><div className="gate-hl"><Shield size={13}/>QUALITY GATE</div><div className="gate-hr"><span className="gate-dot"/>ALL PASSING</div></div>
            <div className="gate-pipe">
              <span className="gate-pipe-l">EXECUTION PIPELINE</span>
              <div className="gate-stages">{stages.map((s,i)=><div key={i} className="gs-wrap"><div className={`gs${i<=step?" on":""}`}>{s.i}</div><span className={`gs-label${i<=step?" on":""}`}>{s.l}</span>{i<stages.length-1&&<div className={`gs-line${i<step?" on":""}`}/>}</div>)}</div>
            </div>
            <div className="gate-checks">{checks.map((c,i)=><div key={i} className={`gc${i<gates?" show":""}`}><div className="gc-l"><span className="gc-dot"/>{c.l}</div><span className="gc-v">{c.v}</span></div>)}</div>
            <div className="gate-foot"><span>9 checks · 0 failed</span><span className="gate-ok">RELEASE APPROVED</span></div>
          </div>
        </R>
      </div>
    </section>
  );
}

/* ── ABOUT + CAPABILITIES ── */
function Capabilities(){
  return(
    <section className="sec"><div className="container">
      <R><div id="about" className="sh"><span className="sh-num">01</span><span>About</span></div></R>
      <R delay={0.08}>
        <div className="about-block">
          <h2 className="about-h">Quality is a system problem. I build the automation that solves it.</h2>
          <p className="about-p">Over nine years, I've built test automation architectures across healthcare platforms, clinical data pipelines, and regulated enterprise systems. Currently at Abbott, validating clinical data pipelines end-to-end and building AI-assisted validation tooling with MCP integrations.</p>
        </div>
      </R>
      <R delay={0.12}><div id="caps" className="sh"><span className="sh-num">02</span><span>Capabilities</span></div></R>
      <div className="cap-grid">{CAPS.map((m,i)=><R key={i} delay={i*0.06} style={{display:"flex"}}><div className={`cap${i===0?" wide":""}`} style={{"--c":m.color}}>
        <div className="cap-icon">{m.icon}</div>
        <div className="cap-body"><h3>{m.name}</h3><p>{m.desc}</p><span className="cap-tech">{m.tech}</span></div>
      </div></R>)}</div>
    </div></section>
  );
}

/* ── PROJECTS ── */
function Projects(){
  return(
    <section className="sec sec-alt"><div className="container">
      <R><div id="projects" className="sh"><span className="sh-num">03</span><span>Open Source</span></div></R>
      <div className="proj-grid">{PROJECTS.map((p,i)=><R key={i} delay={i*0.1} style={{display:"flex"}}><a href={p.repo} target="_blank" rel="noopener noreferrer" className="proj" style={{"--c":p.color}}>
        <div className="proj-top"><div className="proj-name"><Github size={18}/>{p.name}</div><ArrowUpRight size={16} className="proj-arrow"/></div>
        <p className="proj-tag">{p.tag}</p>
        <p className="proj-desc">{p.desc}</p>
        <div className="proj-tech">{p.tech.map(t=><span key={t}>{t}</span>)}</div>
      </a></R>)}</div>
    </div></section>
  );
}

/* ── EXPERIENCE ── */
function Experience(){
  const[open,sOpen]=useState("abbott");
  return(
    <section className="sec"><div className="container">
      <R><div id="exp" className="sh"><span className="sh-num">04</span><span>Experience</span></div></R>
      <div className="tl">{EXP.map((r,i)=>{const o=open===r.id;return(
        <R key={r.id} delay={i*0.06}><div className={`tl-card${o?" open":""}${r.active?" active":""}`}>
          <button onClick={()=>sOpen(o?null:r.id)} className="tl-head">
            <div className="tl-hl"><span className={`tl-dot${r.active?" on":""}`}/><span className="tl-org">{r.org}</span>{r.active&&<span className="tl-badge">CURRENT</span>}</div>
            <div className="tl-hr"><span className="tl-dates">{r.start} – {r.end||"Present"}</span><ChevronDown size={16} className={`tl-chev${o?" open":""}`}/></div>
          </button>
          {o&&<div className="tl-body">
            <p className="tl-title">{r.title}<span className="tl-loc"> · {r.loc}</span></p>
            <div className="tl-scope"><span>SCOPE</span>{r.scope}</div>
            <div className="tl-items">{r.items.map((d,j)=><div key={j} className="tl-item"><CheckCircle2 size={14} className={`tl-ck${r.active?" on":""}`}/><span>{d}</span></div>)}</div>
          </div>}
        </div></R>
      )})}</div>
    </div></section>
  );
}

/* ── STACK ── */
function Stack(){
  return(
    <section className="sec sec-alt"><div className="container">
      <R><div id="stack" className="sh"><span className="sh-num">05</span><span>Tech Stack</span></div></R>
      <div className="sk">{SKILLS.map((g,i)=><R key={i} delay={i*0.04}><div className="sk-row"><span className="sk-label">{g.label}</span><div className="sk-tags">{g.items.map(t=><span key={t} className="sk-tag">{t}</span>)}</div></div></R>)}</div>
    </div></section>
  );
}

/* ── IMPACT ── */
function Impact(){
  const[ref,v]=useReveal();
  const kpis=[{n:85,s:"%+",l:"Automation Coverage",d:"Enterprise threshold exceeded"},{n:40,s:"%",l:"Faster Regressions",d:"Cycle time reduction"},{n:500,s:"+",l:"Scenarios Automated",d:"Cross-platform suites"},{n:9,s:"+",l:"Years Experience",d:"Enterprise QA"}];
  const wins=["Architected enterprise boilerplate framework adopted by multiple teams","Built QA organizations from zero — hiring, frameworks, process, standards","Developed AI-assisted Oracle MCP utility for prompt-driven database validation","Scaled automation to 85%+ coverage across clinical and e-commerce platforms","Embedded quality gates in CI/CD reducing post-release defects significantly","Validated compliance-critical workflows for 21 CFR Part 11 regulated systems","Integrated Azure DevOps MCP for intelligent test generation and tracking"];
  return(
    <section ref={ref} className="sec"><div className="container">
      <R><div id="impact" className="sh"><span className="sh-num">06</span><span>Impact</span></div></R>
      <div className="kpi-row">{kpis.map((k,i)=><R key={i} delay={i*0.08}><div className="kpi"><span className="kpi-num"><Counter end={k.n} suffix={k.s} go={v}/></span><span className="kpi-label">{k.l}</span><span className="kpi-note">{k.d}</span></div></R>)}</div>
      <R delay={0.2}><div className="wins"><h3>Key Results</h3>{wins.map((w,i)=><div key={i} className="win"><Zap size={14}/><span>{w}</span></div>)}</div></R>
    </div></section>
  );
}

/* ── CONNECT ── */
function Connect(){
  const links=[{icon:<Mail size={17}/>,l:"Email",v:P.email,h:`mailto:${P.email}`},{icon:<Linkedin size={17}/>,l:"LinkedIn",v:"Profile",h:P.linkedin},{icon:<Github size={17}/>,l:"GitHub",v:"Repositories",h:P.github},{icon:<Download size={17}/>,l:"Resume",v:"Download PDF",h:P.resumeUrl}];
  return(
    <section className="sec sec-alt sec-last"><div className="container">
      <R><div id="connect" className="sh"><span className="sh-num">07</span><span>Connect</span></div></R>
      <div className="conn-grid">
        <R delay={0.08} style={{display:"flex"}}><div className="conn-cta">
          <h3>Let's talk quality engineering.</h3>
          <p>Open to senior SDET and QA architecture roles. Especially interested in teams working on healthcare, clinical data, or regulated systems where quality isn't optional.</p>
          <div className="conn-cta-btns">
            <a href={`mailto:${P.email}`} className="btn-primary"><Mail size={15}/> Get in Touch</a>
            <a href={P.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Linkedin size={15}/> LinkedIn</a>
          </div>
        </div></R>
        <R delay={0.12} style={{display:"flex"}}><div className="conn-links">{links.map((c,i)=><a key={i} href={c.h} target={c.l==="Email"?undefined:"_blank"} rel="noopener noreferrer" className="conn-link"><div className="conn-ll">{c.icon}<span>{c.l}</span></div><div className="conn-lr"><span>{c.v}</span><ArrowUpRight size={13}/></div></a>)}</div></R>
      </div>
      <R delay={0.15}><footer className="foot"><span>&copy; 2026 {P.name}</span><span>Los Angeles, CA</span></footer></R>
    </div></section>
  );
}

/* ── APP ── */
export default function App(){
  const[active,sA]=useState("hero");
  useEffect(()=>{const ids=["connect","impact","stack","exp","projects","caps","about","hero"];const h=()=>{for(const id of ids){const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=120){sA(id);break;}}};window.addEventListener("scroll",h,{passive:true});return()=>window.removeEventListener("scroll",h)},[]);
  return(<>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet"/>
    <style>{CSS}</style>
    <div className="root"><Nav active={active}/><Hero/><Capabilities/><Projects/><Experience/><Stack/><Impact/><Connect/></div>
  </>);
}

const CSS=`
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#fafaf9;
  --bg2:#f5f5f4;
  --white:#ffffff;
  --text:#1c1917;
  --text2:#44403c;
  --text3:#78716c;
  --dim:#a8a29e;
  --border:#e7e5e4;
  --border-h:#d6d3d1;
  --indigo:#4f46e5;
  --violet:#7c3aed;
  --green:#059669;
  --font:'Inter',system-ui,sans-serif;
  --body:'Source Sans 3',system-ui,sans-serif;
  --mono:'JetBrains Mono',monospace;
}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);-webkit-font-smoothing:antialiased;font-family:var(--font)}
::selection{background:rgba(79,70,229,.15)}
::-webkit-scrollbar{width:6px}
::-webkit-scrollbar-track{background:var(--bg)}
::-webkit-scrollbar-thumb{background:var(--border);border-radius:3px}
.root{min-height:100vh}

/* ─ animations ─ */
@keyframes cursorBlink{0%,100%{opacity:1}50%{opacity:0}}
@keyframes slideDown{from{opacity:0;max-height:0}to{opacity:1;max-height:1200px}}
@keyframes scan{0%{top:0;opacity:0}10%{opacity:.4}90%{opacity:.4}100%{top:100%;opacity:0}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.cursor{display:inline-block;width:2px;height:.85em;margin-left:2px;background:var(--indigo);vertical-align:text-bottom;animation:cursorBlink .9s step-end infinite}

/* ─ nav ─ */
.nav{position:fixed;top:0;left:0;right:0;z-index:200;height:64px;transition:all .3s;border-bottom:1px solid transparent}
.nav.scrolled{background:rgba(250,250,249,.85);backdrop-filter:blur(16px) saturate(1.5);border-bottom-color:var(--border)}
.nav-inner{max-width:1100px;margin:0 auto;padding:0 32px;height:100%;display:flex;align-items:center;justify-content:space-between}
.brand{background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:10px}
.brand-mark{
  width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;
  background:var(--text);color:var(--bg);
  font-family:var(--mono);font-size:12px;font-weight:800;
}
.brand-name{font-family:var(--mono);font-size:14px;font-weight:600;color:var(--text)}
.tabs{display:flex;gap:4px}
.tab{background:none;border:none;border-radius:8px;padding:6px 12px;cursor:pointer;font-family:var(--font);font-size:13px;font-weight:500;color:var(--text3);transition:all .2s}
.tab:hover{color:var(--text2);background:var(--bg2)}
.tab.on{color:var(--text);background:var(--bg2);font-weight:600}
.mob-btn{background:none;border:none;color:var(--text);cursor:pointer;display:none}
.mob-menu{background:rgba(250,250,249,.97);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);padding:8px 32px 16px}
.mob-item{display:block;width:100%;text-align:left;background:none;border:none;border-radius:8px;padding:12px 14px;cursor:pointer;font-size:14px;color:var(--text3)}
.mob-item.on{color:var(--text);background:var(--bg2);font-weight:600}

/* ─ layout ─ */
.container{max-width:1100px;margin:0 auto;padding:0 32px}
.sec{padding:96px 0}
.sec-alt{background:var(--bg2)}
.sec-last{padding-bottom:48px}

/* ─ section headings ─ */
.sh{display:flex;align-items:center;gap:12px;margin-bottom:48px}
.sh-num{font-family:var(--mono);font-size:13px;font-weight:700;color:var(--indigo)}
.sh>span:last-child{font-size:15px;font-weight:700;letter-spacing:-.01em;color:var(--text3);text-transform:uppercase;letter-spacing:.06em}

/* ─ hero ─ */
.hero{min-height:100vh;display:flex;align-items:center;padding:80px 32px;position:relative;overflow:hidden}
.hero-mesh{
  position:absolute;inset:0;pointer-events:none;
  background:
    radial-gradient(ellipse 80% 60% at 70% 20%,rgba(79,70,229,.06),transparent 50%),
    radial-gradient(ellipse 60% 40% at 20% 80%,rgba(236,72,153,.04),transparent 50%);
}
.hero-split{display:grid;grid-template-columns:1fr 420px;gap:72px;align-items:center;position:relative;z-index:1}
.hero-left{display:flex;flex-direction:column}
.hero-eyebrow{
  font-family:var(--mono);font-size:13px;font-weight:600;color:var(--indigo);
  letter-spacing:.04em;margin-bottom:20px;display:block;
}
.hero-h1{
  font-size:clamp(36px,4.5vw,54px);font-weight:800;line-height:1.15;
  letter-spacing:-.03em;margin-bottom:20px;color:var(--text);
}
.hero-accent{
  background:linear-gradient(135deg,var(--indigo),var(--violet),#ec4899);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
}
.hero-sub{font-size:clamp(18px,2vw,22px);font-weight:500;color:var(--text3);margin-bottom:20px;min-height:28px}
.hero-body{font-family:var(--body);font-size:17px;line-height:1.75;color:var(--text3);max-width:500px;margin-bottom:36px}
.hero-btns{display:flex;gap:10px;align-items:center;flex-wrap:wrap}

/* ─ buttons ─ */
.btn-primary{
  display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border-radius:10px;border:none;cursor:pointer;
  background:var(--text);color:var(--bg);
  font-family:var(--font);font-size:14px;font-weight:600;
  box-shadow:0 1px 3px rgba(0,0,0,.1),0 1px 2px rgba(0,0,0,.06);
  transition:all .2s;text-decoration:none;
}
.btn-primary:hover{background:#0c0a09;transform:translateY(-1px);box-shadow:0 4px 12px rgba(0,0,0,.15)}
.btn-secondary{
  display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border-radius:10px;text-decoration:none;
  border:1px solid var(--border);color:var(--text2);background:var(--white);
  font-family:var(--font);font-size:14px;font-weight:600;transition:all .2s;
}
.btn-secondary:hover{border-color:var(--border-h);background:var(--bg2)}
.btn-ghost{
  display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:10px;
  text-decoration:none;color:var(--text3);transition:all .2s;
}
.btn-ghost:hover{color:var(--text);background:var(--bg2)}

/* ─ quality gate (dark card on light bg = contrast) ─ */
.gate{
  background:#1c1917;border-radius:20px;overflow:hidden;color:#fafaf9;
  box-shadow:0 25px 60px rgba(0,0,0,.2),0 4px 16px rgba(0,0,0,.1);
  position:relative;animation:float 6s ease-in-out infinite;
}
.gate::after{content:'';position:absolute;left:0;right:0;height:1px;top:0;background:linear-gradient(90deg,transparent,rgba(79,70,229,.4),transparent);animation:scan 5s ease-in-out infinite;pointer-events:none}
.gate-head{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid #292524}
.gate-hl{display:flex;align-items:center;gap:8px;font-family:var(--mono);font-size:11px;font-weight:600;color:#a8a29e;letter-spacing:.08em}
.gate-hl svg{color:#10b981}
.gate-hr{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10px;font-weight:700;color:#10b981}
.gate-dot{width:6px;height:6px;border-radius:50%;background:#10b981;box-shadow:0 0 8px rgba(16,185,129,.5)}
.gate-pipe{padding:16px 20px;border-bottom:1px solid #292524}
.gate-pipe-l{display:block;font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:.14em;color:#78716c;margin-bottom:14px}
.gate-stages{display:flex;align-items:flex-start}
.gs-wrap{display:flex;flex-direction:column;align-items:center;flex:1;position:relative}
.gs{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#292524;border:1.5px solid #44403c;color:#78716c;transition:all .4s cubic-bezier(.16,1,.3,1)}
.gs.on{background:rgba(16,185,129,.1);border-color:rgba(16,185,129,.4);color:#10b981;box-shadow:0 0 12px rgba(16,185,129,.12)}
.gs-label{display:block;text-align:center;font-family:var(--mono);font-size:8px;font-weight:600;letter-spacing:.08em;color:#78716c;margin-top:6px;transition:color .3s}
.gs-label.on{color:#a8a29e}
.gs-line{position:absolute;top:18px;right:-12px;width:20px;height:2px;border-radius:1px;background:#44403c;transition:background .4s}
.gs-line.on{background:rgba(16,185,129,.4)}
.gate-checks{padding:4px 0}
.gc{display:flex;justify-content:space-between;align-items:center;padding:8px 20px;opacity:0;transform:translateX(10px);transition:all .35s}
.gc.show{opacity:1;transform:none}
.gc-l{display:flex;align-items:center;gap:10px;font-family:var(--mono);font-size:11px;color:#a8a29e}
.gc-dot{width:5px;height:5px;border-radius:50%;background:#10b981;box-shadow:0 0 6px rgba(16,185,129,.4)}
.gc-v{font-family:var(--mono);font-size:10px;font-weight:700;color:#10b981;letter-spacing:.06em}
.gate-foot{display:flex;align-items:center;justify-content:space-between;padding:12px 20px;border-top:1px solid #292524;font-family:var(--mono);font-size:9px;color:#78716c}
.gate-ok{color:#10b981;font-weight:700}

/* ─ about ─ */
.about-block{margin-bottom:56px}
.about-h{font-size:clamp(24px,3vw,36px);font-weight:800;color:var(--text);line-height:1.3;letter-spacing:-.02em;margin-bottom:20px}
.about-p{font-family:var(--body);font-size:17px;line-height:1.8;color:var(--text3);max-width:680px}

/* ─ capability grid ─ */
.cap-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.cap{
  flex:1;display:flex;gap:20px;padding:28px 24px;border-radius:16px;cursor:default;
  background:var(--white);border:1px solid var(--border);
  transition:all .3s cubic-bezier(.16,1,.3,1);
}
.cap.wide{grid-column:span 2}
.cap:hover{border-color:var(--border-h);transform:translateY(-3px);box-shadow:0 12px 36px rgba(0,0,0,.06)}
.cap-icon{
  width:48px;height:48px;min-width:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;
  background:color-mix(in srgb,var(--c) 8%,white);color:var(--c);
}
.cap-body h3{font-size:16px;font-weight:700;color:var(--text);margin-bottom:8px}
.cap-body p{font-family:var(--body);font-size:14px;line-height:1.65;color:var(--text3);margin-bottom:12px}
.cap-tech{font-family:var(--mono);font-size:11px;color:var(--dim)}

/* ─ projects ─ */
.proj-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.proj{
  flex:1;display:flex;flex-direction:column;text-decoration:none;
  padding:28px 24px;border-radius:16px;
  background:var(--white);border:1px solid var(--border);
  transition:all .3s cubic-bezier(.16,1,.3,1);position:relative;overflow:hidden;
}
.proj:hover{border-color:var(--border-h);transform:translateY(-3px);box-shadow:0 12px 36px rgba(0,0,0,.06)}
.proj:hover .proj-arrow{color:var(--text);transform:translate(2px,-2px)}
.proj-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.proj-name{display:flex;align-items:center;gap:10px;font-size:17px;font-weight:700;color:var(--text)}
.proj-name svg{color:var(--text3)}
.proj-arrow{color:var(--dim);transition:all .3s}
.proj-tag{font-size:14px;font-weight:600;color:var(--c);margin-bottom:10px}
.proj-desc{font-family:var(--body);font-size:14px;line-height:1.65;color:var(--text3);margin-bottom:18px;flex:1}
.proj-tech{display:flex;gap:6px;flex-wrap:wrap}
.proj-tech span{padding:4px 10px;border-radius:6px;background:var(--bg2);font-family:var(--mono);font-size:11px;color:var(--text3)}

/* ─ timeline ─ */
.tl{display:flex;flex-direction:column;gap:8px}
.tl-card{background:var(--white);border:1px solid var(--border);border-radius:14px;overflow:hidden;transition:all .3s}
.tl-card.open{border-color:var(--border-h);box-shadow:0 4px 16px rgba(0,0,0,.04)}
.tl-card.open.active{border-color:rgba(5,150,105,.3)}
.tl-head{width:100%;background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;padding:16px 24px;gap:12px}
.tl-hl{display:flex;align-items:center;gap:12px}
.tl-dot{width:10px;height:10px;border-radius:50%;background:var(--border-h);flex-shrink:0}
.tl-dot.on{background:var(--green);box-shadow:0 0 10px rgba(5,150,105,.3)}
.tl-org{font-size:17px;font-weight:700;color:var(--text);text-align:left}
.tl-badge{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--green);padding:3px 8px;border-radius:5px;background:rgba(5,150,105,.08);letter-spacing:.06em}
.tl-hr{display:flex;align-items:center;gap:12px}
.tl-dates{font-family:var(--mono);font-size:12px;color:var(--dim);white-space:nowrap}
.tl-chev{color:var(--dim);transition:transform .3s}
.tl-chev.open{transform:rotate(180deg)}
.tl-body{padding:0 24px 24px;border-top:1px solid var(--border);animation:slideDown .3s cubic-bezier(.16,1,.3,1)}
.tl-title{padding-top:20px;margin-bottom:16px;font-family:var(--body);font-size:15px;font-weight:500;color:var(--text2)}
.tl-loc{color:var(--dim);font-weight:400}
.tl-scope{padding:14px 16px;border-radius:10px;background:var(--bg2);margin-bottom:18px;font-family:var(--body);font-size:14px;color:var(--text2);line-height:1.6}
.tl-scope span{display:block;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.1em;color:var(--dim);margin-bottom:6px}
.tl-items{display:flex;flex-direction:column;gap:6px}
.tl-item{display:flex;gap:10px;align-items:flex-start;padding:6px 0}
.tl-item span{font-family:var(--body);font-size:14px;line-height:1.6;color:var(--text3)}
.tl-ck{color:var(--dim);margin-top:2px;flex-shrink:0}
.tl-ck.on{color:var(--green)}

/* ─ stack ─ */
.sk{display:flex;flex-direction:column}
.sk-row{display:flex;align-items:baseline;gap:24px;padding:18px 0;border-bottom:1px solid var(--border)}
.sk-row:last-child{border-bottom:none}
.sk-label{font-family:var(--mono);font-size:12px;font-weight:700;color:var(--text2);min-width:100px;flex-shrink:0}
.sk-tags{display:flex;flex-wrap:wrap;gap:8px}
.sk-tag{
  padding:6px 14px;border-radius:8px;background:var(--white);border:1px solid var(--border);
  font-family:var(--mono);font-size:12px;color:var(--text3);transition:all .2s;cursor:default;
}
.sk-tag:hover{border-color:var(--indigo);color:var(--indigo);background:rgba(79,70,229,.04);transform:translateY(-1px)}

/* ─ KPIs ─ */
.kpi-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:48px}
.kpi{text-align:center;padding:36px 20px;border-radius:16px;background:var(--white);border:1px solid var(--border);transition:all .3s}
.kpi:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.05)}
.kpi-num{display:block;font-size:clamp(40px,5vw,56px);font-weight:900;letter-spacing:-.04em;line-height:1;margin-bottom:8px;color:var(--text)}
.kpi-label{display:block;font-family:var(--body);font-size:14px;font-weight:600;color:var(--text2);margin-bottom:4px}
.kpi-note{font-family:var(--mono);font-size:10px;color:var(--dim)}

/* ─ wins ─ */
.wins h3{font-size:20px;font-weight:700;color:var(--text);margin-bottom:16px}
.win{display:flex;gap:12px;align-items:flex-start;padding:12px 16px;border-radius:10px;transition:all .2s}
.win:hover{background:var(--white)}
.win span{font-family:var(--body);font-size:15px;line-height:1.6;color:var(--text3)}
.win svg{color:var(--indigo);margin-top:3px;flex-shrink:0}

/* ─ connect ─ */
.conn-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:12px}
.conn-cta{flex:1;padding:40px 36px;border-radius:20px;background:var(--text);color:var(--bg)}
.conn-cta h3{font-size:clamp(22px,3vw,32px);font-weight:800;line-height:1.2;letter-spacing:-.02em;margin-bottom:16px}
.conn-cta p{font-family:var(--body);font-size:15px;line-height:1.7;color:#a8a29e;margin-bottom:24px}
.conn-cta-btns{display:flex;gap:10px;flex-wrap:wrap}
.conn-cta .btn-primary{background:var(--bg);color:var(--text)}
.conn-cta .btn-primary:hover{background:#e7e5e4}
.conn-cta .btn-secondary{background:transparent;border-color:#44403c;color:#d6d3d1}
.conn-cta .btn-secondary:hover{border-color:#78716c;background:rgba(255,255,255,.05)}
.conn-links{flex:1;padding:8px;border-radius:20px;background:var(--white);border:1px solid var(--border);display:flex;flex-direction:column;justify-content:center}
.conn-link{display:flex;align-items:center;justify-content:space-between;padding:16px 16px;text-decoration:none;color:var(--text3);border-radius:10px;transition:all .2s}
.conn-link:hover{background:var(--bg2);color:var(--text)}
.conn-ll{display:flex;align-items:center;gap:12px;font-size:14px;font-weight:600}
.conn-ll svg{color:var(--indigo)}
.conn-lr{display:flex;align-items:center;gap:8px;font-family:var(--mono);font-size:11px;color:var(--dim)}
.conn-lr svg{transition:all .2s}
.conn-link:hover .conn-lr svg{color:var(--indigo);transform:translate(2px,-2px)}

/* ─ footer ─ */
.foot{margin-top:48px;padding-top:20px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;font-family:var(--mono);font-size:11px;color:var(--dim)}

/* ─ responsive ─ */
@media(max-width:960px){
  .hero-split{grid-template-columns:1fr!important;gap:48px}
  .cap-grid,.proj-grid{grid-template-columns:1fr 1fr!important}
  .cap.wide{grid-column:span 2!important}
  .conn-grid{grid-template-columns:1fr!important}
  .kpi-row{grid-template-columns:1fr 1fr!important}
  .sk-row{flex-direction:column;gap:10px}
  .sk-label{min-width:auto}
}
@media(max-width:600px){
  .cap-grid,.proj-grid{grid-template-columns:1fr!important}
  .cap.wide{grid-column:span 1!important}
  .kpi-row{grid-template-columns:1fr 1fr!important}
  .hero{padding:100px 20px 60px}
  .container{padding:0 20px}
  .sec{padding:72px 0}
}
@media(max-width:768px){.tabs{display:none!important}.mob-btn{display:block!important}}
@media(min-width:769px){.mob-btn{display:none!important}}
`;
