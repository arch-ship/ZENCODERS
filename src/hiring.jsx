import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const DOMAIN_QUESTIONS = {
  "Technical": [
    { id: "tech_skills", type: "checkbox", question: "Which technologies are you comfortable with?", options: ["C / C++", "Python", "JavaScript", "React", "DSA", "Competitive Programming", "Web Dev (HTML/CSS)", "Backend (Node/Django)", "Other"] },
    { id: "tech_project", type: "textarea", question: "Tell us about a project or problem you've worked on. What did you build and what did you learn?", placeholder: "Describe a project, hackathon, or interesting problem..." },
    { id: "tech_github", type: "text", question: "Share your GitHub profile link.", placeholder: "https://github.com/yourusername" },
  ],
  "Management": [
    { id: "management_skills", type: "textarea", question: "What management or leadership experience do you have? Give us specific examples.", placeholder: "Event coordination, team handling, planning — tell us what you've done..." },
    { id: "management_scenario", type: "textarea", question: "An event is happening in 2 days and 3 team members drop out. How do you handle it?", placeholder: "Walk us through your approach..." },
  ],
  "Creative": [
    { id: "creative_skills", type: "checkbox", question: "Which creative skills do you have?", options: ["Graphic Design", "Illustration", "Motion Design", "Typography", "Poster Design", "Branding", "Canva", "Adobe Illustrator / Photoshop", "Other"] },
    { id: "creative_work", type: "text", question: "Share a link to your creative work or portfolio.", placeholder: "https://instagram.com/... or Behance / Drive link" },
    { id: "creative_brief", type: "textarea", question: "Design a concept for a ZenCoders event poster — describe it in words (colors, theme, vibe).", placeholder: "Describe your concept..." },
  ],
  "Marketing": [
    { id: "marketing_skills", type: "checkbox", question: "Which areas of marketing are you experienced in?", options: ["Social Media", "Content Writing", "Branding", "Analytics", "Campaign Strategy", "Graphic Design", "Video Editing", "Other"] },
    { id: "marketing_example", type: "textarea", question: "Describe a campaign, post, or marketing idea you've run or would love to run for ZenCoders.", placeholder: "Your idea or past work..." },
    { id: "marketing_platform", type: "mcq", question: "Which platform do you think ZenCoders should focus on most?", options: ["Instagram", "LinkedIn", "Twitter / X", "YouTube", "Discord"] },
  ],
  "Public Relations": [
    { id: "pr_skills", type: "textarea", question: "Describe your experience with outreach, partnerships, or external communication.", placeholder: "Partnerships, collaborations, college fests, industry connections..." },
    { id: "pr_pitch", type: "textarea", question: "Write a short pitch you'd send to another club or company to collaborate with ZenCoders.", placeholder: "Keep it genuine and compelling..." },
  ],
  "Digital": [
    { id: "digital_skills", type: "checkbox", question: "Which digital tools or skills do you have experience with?", options: ["Figma", "Adobe XD", "Canva", "UI/UX Research", "Frontend (HTML/CSS)", "WordPress", "SEO", "Social Media Management", "Other"] },
    { id: "digital_portfolio", type: "text", question: "Share a link to your portfolio or any digital work.", placeholder: "https://behance.net/... or https://dribbble.com/..." },
    { id: "digital_vision", type: "textarea", question: "How would you improve ZenCoders' digital presence? Give us a specific idea.", placeholder: "Website, social media, branding — your vision..." },
  ],
  "Cinematics": [
    { id: "cinema_skills", type: "checkbox", question: "Which cinematography or video skills do you have?", options: ["Video Shooting", "Video Editing", "Reels / Shorts", "Color Grading", "After Effects", "Premiere Pro", "DaVinci Resolve", "Photography", "Other"] },
    { id: "cinema_work", type: "text", question: "Share a link to your video work or reel.", placeholder: "https://youtube.com/... or Drive / Instagram link" },
    { id: "cinema_idea", type: "textarea", question: "Pitch a short video concept you'd shoot for ZenCoders — event coverage, a reel, a promo. Describe it.", placeholder: "Concept, style, vibe — what would you create?" },
  ],
};

const DOMAINS = ["Technical","Management","Creative","Marketing","Public Relations","Digital","Cinematics"];

function ProgressBar({ current, total }) {
  const pct = total === 0 ? 0 : Math.min((current / total) * 100, 100);
  return (
    <div style={{ width: "100%", height: 2, background: "rgba(201,168,76,0.12)", borderRadius: 2, marginBottom: 40 }}>
      <div style={{ height: "100%", width: pct + "%", background: "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.5))", borderRadius: 2, transition: "width 0.5s ease", boxShadow: "0 0 8px rgba(201,168,76,0.4)" }} />
    </div>
  );
}

function QuestionCard({ question, answer, onChange, onNext, onBack, canBack, isLast, domainLabel, winWidth }) {
  const inputRef = useRef(null);
  useEffect(() => { if (inputRef.current) inputRef.current.focus(); }, [question.id]);

  const canProceed = () => {
    if (question.type === "checkbox" || question.type === "multi_domain") return Array.isArray(answer) && answer.length > 0;
    return answer && answer.toString().trim() !== "";
  };

  const baseInput = {
    width: "100%", background: "transparent", border: "none",
    borderBottom: "1px solid rgba(201,168,76,0.35)",
    color: "#fff", fontSize: "1rem",
    fontFamily: "'Rajdhani', sans-serif", fontWeight: 500,
    letterSpacing: "0.04em", padding: "12px 0 10px",
    outline: "none", transition: "border-color 0.25s", boxSizing: "border-box",
  };

  return (
    <div style={{ animation: "slideIn 0.4s cubic-bezier(0.22,1,0.36,1)" }}>
      {domainLabel && (
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", color: "rgba(201,168,76,0.6)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 8 }}>{domainLabel}</p>
      )}
      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1rem, 2.2vw, 1.4rem)", fontWeight: 700, color: "#fff", lineHeight: 1.45, marginBottom: 28, textShadow: "0 0 30px rgba(201,168,76,0.15)" }}>
        {question.question}
      </h2>

      {question.type === "text" && (
        <input ref={inputRef} type="text" value={answer || ""} onChange={e => onChange(e.target.value)}
          onKeyDown={e => e.key === "Enter" && canProceed() && onNext()}
          placeholder={question.placeholder} style={baseInput}
          onFocus={e => e.target.style.borderBottomColor = "rgba(201,168,76,0.8)"}
          onBlur={e => e.target.style.borderBottomColor = "rgba(201,168,76,0.35)"}
        />
      )}

      {question.type === "textarea" && (
        <textarea ref={inputRef} value={answer || ""} onChange={e => onChange(e.target.value)}
          placeholder={question.placeholder} rows={1}
          onInput={e => { e.target.style.height = "auto"; e.target.style.height = e.target.scrollHeight + "px"; }}
          style={{ ...baseInput, resize: "none", lineHeight: 1.7, overflow: "hidden", minHeight: "2.5rem" }}
          onFocus={e => e.target.style.borderBottomColor = "rgba(201,168,76,0.8)"}
          onBlur={e => e.target.style.borderBottomColor = "rgba(201,168,76,0.35)"}
        />
      )}

      {question.type === "mcq" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {question.options.map(opt => (
            <button key={opt} onClick={() => { onChange(opt); setTimeout(onNext, 280); }}
              style={{
                textAlign: "left", padding: "14px 18px",
                background: answer === opt ? "rgba(201,168,76,0.14)" : "rgba(255,255,255,0.03)",
                border: answer === opt ? "1px solid rgba(201,168,76,0.6)" : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8, color: answer === opt ? "#C9A84C" : "rgba(255,255,255,0.7)",
                fontFamily: "'Rajdhani', sans-serif", fontSize: "0.92rem", fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
              }}>
              <span style={{ color: "rgba(201,168,76,0.5)", marginRight: 10 }}>→</span>{opt}
            </button>
          ))}
        </div>
      )}

      {question.type === "multi_domain" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {question.options.map(opt => {
            const checked = Array.isArray(answer) && answer.includes(opt);
            return (
              <button key={opt} onClick={() => { const cur = Array.isArray(answer) ? answer : []; onChange(checked ? cur.filter(x => x !== opt) : [...cur, opt]); }}
                style={{
                  textAlign: "left", padding: "14px 18px",
                  background: checked ? "rgba(201,168,76,0.14)" : "rgba(255,255,255,0.03)",
                  border: checked ? "1px solid rgba(201,168,76,0.6)" : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8, color: checked ? "#C9A84C" : "rgba(255,255,255,0.7)",
                  fontFamily: "'Rajdhani', sans-serif", fontSize: "0.92rem", fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
                  display: "flex", alignItems: "center", gap: 12,
                }}>
                <span style={{ width: 16, height: 16, borderRadius: 4, flexShrink: 0, border: checked ? "none" : "1px solid rgba(255,255,255,0.2)", background: checked ? "#C9A84C" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#000" }}>{checked ? "✓" : ""}</span>
                {opt}
              </button>
            );
          })}
          {Array.isArray(answer) && answer.length > 0 && (
            <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.72rem", color: "rgba(201,168,76,0.6)", marginTop: 8 }}>
              {answer.length} domain{answer.length > 1 ? "s" : ""} selected
            </p>
          )}
        </div>
      )}

      {question.type === "checkbox" && (
        <div>
          <div className="checkbox-grid" style={{ display: "grid", gap: 8 }}>
            {question.options.map(opt => {
              const checked = Array.isArray(answer) && answer.includes(opt);
              return (
                <button key={opt} onClick={() => { const cur = Array.isArray(answer) ? answer : []; const updated = checked ? cur.filter(x => x !== opt) : [...cur, opt]; onChange(updated); }}
                  style={{
                    textAlign: "left", padding: "11px 14px",
                    background: checked ? "rgba(201,168,76,0.12)" : "rgba(255,255,255,0.03)",
                    border: checked ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 7, color: checked ? "#C9A84C" : "rgba(255,255,255,0.6)",
                    fontFamily: "'Rajdhani', sans-serif", fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
                    display: "flex", alignItems: "center", gap: 8,
                  }}>
                  <span style={{ width: 14, height: 14, borderRadius: 3, flexShrink: 0, border: checked ? "none" : "1px solid rgba(255,255,255,0.2)", background: checked ? "#C9A84C" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.55rem", color: "#000" }}>{checked ? "✓" : ""}</span>
                  {opt}
                </button>
              );
            })}
          </div>

          {/* "Other" text input — slides in when Other is checked */}
          {Array.isArray(answer) && answer.includes("Other") && (
            <div style={{ animation: "slideIn 0.3s ease", marginTop: 12 }}>
              <input
                type="text"
                placeholder="Please specify..."
                value={(answer && answer._otherText) || ""}
                onChange={e => {
                  const cur = Array.isArray(answer) ? [...answer] : [];
                  const updated = Object.assign(cur, { _otherText: e.target.value });
                  onChange(updated);
                }}
                style={{
                  ...baseInput,
                  borderBottomColor: "rgba(201,168,76,0.5)",
                  fontSize: "0.9rem",
                }}
                onFocus={e => e.target.style.borderBottomColor = "rgba(201,168,76,0.8)"}
                onBlur={e => e.target.style.borderBottomColor = "rgba(201,168,76,0.5)"}
              />
              <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.6rem", color: "rgba(255,255,255,0.2)", marginTop: 6, letterSpacing: "0.1em" }}>Tell us more about your other skills</p>
            </div>
          )}
        </div>
      )}

      <div style={{ display: "flex", gap: 12, marginTop: 32, alignItems: "center" }}>
        {canBack && (
          <button onClick={onBack} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 7, padding: "11px 20px", color: "rgba(255,255,255,0.4)", fontFamily: "'Cinzel', serif", fontSize: "0.7rem", letterSpacing: "0.15em", cursor: "pointer", textTransform: "uppercase" }}>← Back</button>
        )}
        {question.type !== "mcq" && (
          <button onClick={onNext} disabled={!canProceed()} style={{
            background: canProceed() ? "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.08))" : "rgba(255,255,255,0.03)",
            border: canProceed() ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(255,255,255,0.07)",
            borderRadius: 7, padding: "11px 28px",
            color: canProceed() ? "#C9A84C" : "rgba(255,255,255,0.2)",
            fontFamily: "'Cinzel', serif", fontSize: "0.72rem", letterSpacing: "0.2em",
            cursor: canProceed() ? "pointer" : "default", textTransform: "uppercase",
          }}>
            {isLast ? "Submit →" : "Next →"}
          </button>
        )}
      </div>
      {question.type === "text" && (
        <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.6rem", color: "rgba(255,255,255,0.2)", marginTop: 10, letterSpacing: "0.1em" }}>Press Enter to continue</p>
      )}
    </div>
  );
}

const COMMON_QUESTIONS = [
  { id: "q_name", type: "text", question: "What's your full name?", placeholder: "Enter your full name" },
  { id: "q_year", type: "mcq", question: "What year are you currently in?", options: ["1st Year", "2nd Year", "3rd Year", "4th Year"] },
  { id: "q_domains", type: "multi_domain", question: "Which domain(s) are you applying for? Select all that apply.", options: DOMAINS },
  { id: "q_why", type: "textarea", question: "Why do you want to join ZenCoders? What do you want to give and what do you hope to take away?", placeholder: "Be honest — we value genuine answers." },
  { id: "q_avail", type: "mcq", question: "How many hours per week can you dedicate to ZenCoders?", options: ["Less than 2 hours", "2–4 hours", "4–6 hours", "6+ hours"] },
  { id: "q_instagram", type: "text", question: "Share your Instagram profile link.", placeholder: "https://instagram.com/yourusername" },
  { id: "q_linkedin", type: "text", question: "Share your LinkedIn profile link.", placeholder: "https://linkedin.com/in/yourusername" },
  { id: "q_contact", type: "text", question: "Your email or phone number.", placeholder: "email@example.com or +91 XXXXXXXXXX" },
];

export default function Hiring() {
  const navigate = useNavigate();
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  useEffect(() => { const h = () => setWinWidth(window.innerWidth); window.addEventListener("resize", h); return () => window.removeEventListener("resize", h); }, []);

  const [phase, setPhase] = useState("common");
  const [commonAnswers, setCommonAnswers] = useState({});
  const [commonIdx, setCommonIdx] = useState(0);
  const [commonHistory, setCommonHistory] = useState([0]);
  const [domainQueue, setDomainQueue] = useState([]);
  const [currentDomainIdx, setCurrentDomainIdx] = useState(0);
  const [domainQuestionIdx, setDomainQuestionIdx] = useState(0);
  const [domainAnswers, setDomainAnswers] = useState({});

  const totalCommon = COMMON_QUESTIONS.length;
  const currentCommonQ = COMMON_QUESTIONS[commonIdx];

  const handleCommonNext = () => {
    if (commonIdx === totalCommon - 1) {
      const selected = commonAnswers["q_domains"] || [];
      const sorted = DOMAINS.filter(d => selected.includes(d));
      setDomainQueue(sorted); setCurrentDomainIdx(0); setDomainQuestionIdx(0); setPhase("domain");
      return;
    }
    const next = commonIdx + 1;
    setCommonHistory(h => [...h, next]);
    setCommonIdx(next);
  };

  const handleCommonBack = () => {
    if (commonHistory.length <= 1) return;
    const prev = commonHistory[commonHistory.length - 2];
    setCommonHistory(h => h.slice(0, -1));
    setCommonIdx(prev);
  };

  const currentDomain = domainQueue[currentDomainIdx];
  const domainQList = currentDomain ? DOMAIN_QUESTIONS[currentDomain] : [];
  const currentDomainQ = domainQList[domainQuestionIdx];
  const getDomainAnswer = (qid) => (domainAnswers[currentDomain] || {})[qid];
  const setDomainAnswer = (qid, val) => setDomainAnswers(prev => ({ ...prev, [currentDomain]: { ...(prev[currentDomain] || {}), [qid]: val } }));

  const handleDomainNext = () => {
    const isLastQ = domainQuestionIdx === domainQList.length - 1;
    const isLastDomain = currentDomainIdx === domainQueue.length - 1;
    if (isLastQ && isLastDomain) { setPhase("done"); return; }
    if (isLastQ) { setCurrentDomainIdx(i => i + 1); setDomainQuestionIdx(0); }
    else { setDomainQuestionIdx(i => i + 1); }
  };

  const handleDomainBack = () => {
    if (domainQuestionIdx > 0) { setDomainQuestionIdx(i => i - 1); }
    else if (currentDomainIdx > 0) { const prev = domainQueue[currentDomainIdx - 1]; setCurrentDomainIdx(i => i - 1); setDomainQuestionIdx(DOMAIN_QUESTIONS[prev].length - 1); }
    else { setPhase("common"); setCommonIdx(totalCommon - 1); }
  };

  const totalDomainQ = domainQueue.reduce((acc, d) => acc + DOMAIN_QUESTIONS[d].length, 0);
  const completedDomainQ = domainQueue.slice(0, currentDomainIdx).reduce((acc, d) => acc + DOMAIN_QUESTIONS[d].length, 0) + domainQuestionIdx;
  const totalSteps = totalCommon + totalDomainQ;
  const completedSteps = phase === "common" ? commonIdx : totalCommon + completedDomainQ;

  if (phase === "done") {
    return (
      <div style={{ minHeight: "100vh", background: "radial-gradient(ellipse at 30% 40%, #0d0d1a 0%, #07070f 50%, #030308 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cinzel', serif" }}>
        <div style={{ textAlign: "center", padding: "0 24px", animation: "slideIn 0.6s ease" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.5)", background: "rgba(201,168,76,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px", boxShadow: "0 0 40px rgba(201,168,76,0.2)", fontSize: "2rem" }}>✦</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fff", letterSpacing: "0.1em", margin: "0 0 16px" }}>APPLICATION RECEIVED</h1>
          <div style={{ width: 60, height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)", margin: "0 auto 24px" }} />
          <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, maxWidth: 420, margin: "0 auto 40px" }}>Thank you for applying to ZenCoders. We'll be in touch soon!</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => navigate("/")} style={{ background: "transparent", border: "1px solid rgba(201,168,76,0.4)", borderRadius: 7, padding: "12px 28px", color: "#C9A84C", fontFamily: "'Cinzel', serif", fontSize: "0.7rem", letterSpacing: "0.2em", cursor: "pointer", textTransform: "uppercase" }}>← Back to Home</button>
            <button onClick={() => { setPhase("common"); setCommonAnswers({}); setCommonIdx(0); setCommonHistory([0]); setDomainAnswers({}); setDomainQueue([]); setCurrentDomainIdx(0); setDomainQuestionIdx(0); }} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 7, padding: "12px 28px", color: "rgba(255,255,255,0.4)", fontFamily: "'Cinzel', serif", fontSize: "0.7rem", letterSpacing: "0.2em", cursor: "pointer" }}>Apply Again</button>
          </div>
        </div>
        <style>{`@keyframes slideIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }`}</style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "radial-gradient(ellipse at 20% 60%, #0d0d1a 0%, #07070f 40%, #030308 100%)", display: "flex", flexDirection: "column", fontFamily: "'Cinzel', serif", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "fixed", width: 500, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(60,30,120,0.12) 0%, transparent 70%)", top: "10%", left: "5%", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", width: 400, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(20,60,120,0.08) 0%, transparent 70%)", bottom: "5%", right: "10%", pointerEvents: "none", zIndex: 0 }} />
      <svg style={{ position: "fixed", inset: 0, width: "100%", height: "100%", opacity: 0.02, pointerEvents: "none", zIndex: 0 }}>
        <defs><pattern id="hgrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="0.5" /></pattern></defs>
        <rect width="100%" height="100%" fill="url(#hgrid)" />
      </svg>

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "28px", paddingRight: "32px", background: "rgba(3,5,8,0.88)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(201,168,76,0.18)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, overflow: "hidden" }}>
            <img src="/assets/Zenlogo.png" alt="ZenCoders" style={{ width: "100%", height: "100%", objectFit: "contain" }} onError={e => { e.currentTarget.style.display = "none"; }} />
          </div>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.22em" }}>ZENCODERS</span>
        </div>
        <button onClick={() => navigate("/")} style={{ background: "transparent", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 6, padding: "7px 16px", color: "rgba(201,168,76,0.7)", fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.15em", cursor: "pointer", textTransform: "uppercase" }}>← Home</button>
      </nav>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: winWidth < 768 ? "90px 16px 40px" : "100px 24px 60px", position: "relative", zIndex: 10 }}>
        <div style={{ width: "100%", maxWidth: 640 }}>
          <div style={{ marginBottom: 36, textAlign: "center" }}>
            <p style={{ fontSize: "0.58rem", color: "rgba(201,168,76,0.45)", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 12 }}>ZenCoders · Open Recruitment</p>
            <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, color: "#fff", letterSpacing: "0.1em", margin: "0 0 8px" }}>JOIN THE TEAM</h1>
            <div style={{ width: 50, height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)", margin: "0 auto" }} />
          </div>

          {phase === "domain" && (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 24 }}>
              {domainQueue.map((d, i) => (
                <span key={d} style={{ padding: "4px 14px", borderRadius: 20, fontSize: "0.62rem", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: i === currentDomainIdx ? "rgba(201,168,76,0.18)" : "rgba(255,255,255,0.04)", border: i === currentDomainIdx ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(255,255,255,0.08)", color: i === currentDomainIdx ? "#C9A84C" : "rgba(255,255,255,0.3)" }}>{d}</span>
              ))}
            </div>
          )}

          <ProgressBar current={completedSteps} total={totalSteps} />

          {phase === "common" && (
            <QuestionCard key={currentCommonQ.id} question={currentCommonQ} answer={commonAnswers[currentCommonQ.id]}
              onChange={val => setCommonAnswers(a => ({ ...a, [currentCommonQ.id]: val }))}
              onNext={handleCommonNext} onBack={handleCommonBack}
              canBack={commonHistory.length > 1} isLast={commonIdx === totalCommon - 1} winWidth={winWidth} />
          )}

          {phase === "domain" && currentDomainQ && (
            <QuestionCard key={currentDomain + currentDomainQ.id} question={currentDomainQ}
              answer={getDomainAnswer(currentDomainQ.id)} onChange={val => setDomainAnswer(currentDomainQ.id, val)}
              onNext={handleDomainNext} onBack={handleDomainBack} canBack={true}
              isLast={currentDomainIdx === domainQueue.length - 1 && domainQuestionIdx === domainQList.length - 1}
              domainLabel={currentDomain + " — Question " + (domainQuestionIdx + 1) + " of " + domainQList.length}
              winWidth={winWidth} />
          )}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Rajdhani:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes slideIn { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); font-family: 'Rajdhani', sans-serif; font-size: 0.9rem; }
        .checkbox-grid { grid-template-columns: 1fr; }
        @media (min-width: 768px) { .checkbox-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </div>
  );
}