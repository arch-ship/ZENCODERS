import { useNavigate } from "react-router-dom";

const DOMAINS = [
  { name: "Technical", icon: "💻", desc: "Coding, DSA, web dev, hackathons and everything in between." },
  { name: "Management", icon: "📋", desc: "Planning and executing events that run like clockwork." },
  { name: "Creative", icon: "🎨", desc: "Posters, branding and visual identity of the club." },
  { name: "Marketing", icon: "📣", desc: "Campaigns, content and growing our reach." },
  { name: "Public Relations", icon: "🤝", desc: "Outreach, partnerships and collaborations." },
  { name: "Digital", icon: "🖥️", desc: "UI/UX, website and the club's digital presence." },
  { name: "Cinematics", icon: "🎬", desc: "Event coverage, reels, promos and photography." },
];

const VALUES = [
  { title: "Learn by Building", desc: "We believe the fastest way to learn is to build. Workshops, projects and challenges keep our members hands-on." },
  { title: "Community First", desc: "ZenCoders is a family of curious minds. Seniors mentor juniors, and every voice is heard." },
  { title: "Compete & Grow", desc: "From fest events to hackathons, we push each other to compete, fail fast and level up together." },
];

function SectionHeading({ children }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 32 }}>
      <h2 style={{
        fontFamily: "'Cinzel', serif", fontSize: "clamp(1.2rem, 3vw, 1.7rem)",
        fontWeight: 700, color: "#fff", letterSpacing: "0.2em", textTransform: "uppercase",
        margin: 0, textShadow: "0 0 30px rgba(201,168,76,0.25)",
      }}>{children}</h2>
      <div style={{ width: 60, height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)", margin: "14px auto 0" }} />
    </div>
  );
}

export default function About() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(ellipse at 30% 20%, #0d0d1a 0%, #07070f 50%, #030308 100%)",
      position: "relative", overflow: "hidden",
      fontFamily: "'Cinzel', serif",
    }}>
      {/* ambient glows */}
      <div style={{ position: "fixed", width: 500, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)", top: "5%", left: "10%", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", width: 400, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(60,30,120,0.1) 0%, transparent 70%)", bottom: "10%", right: "5%", pointerEvents: "none", zIndex: 0 }} />
      <svg style={{ position: "fixed", inset: 0, width: "100%", height: "100%", opacity: 0.02, pointerEvents: "none", zIndex: 0 }}>
        <defs><pattern id="aboutgrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="0.5" /></pattern></defs>
        <rect width="100%" height="100%" fill="url(#aboutgrid)" />
      </svg>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, height: "60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        paddingLeft: "28px", paddingRight: "32px",
        background: "rgba(3,5,8,0.88)", backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(201,168,76,0.18)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, overflow: "hidden" }}>
            <img src="/assets/Zenlogo.png" alt="ZenCoders" style={{ width: "100%", height: "100%", objectFit: "contain" }} onError={e => { e.currentTarget.style.display = "none"; }} />
          </div>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.22em" }}>ZENCODERS</span>
        </div>
        <button onClick={() => navigate("/")} style={{
          background: "transparent", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 6,
          padding: "7px 16px", color: "rgba(201,168,76,0.7)", fontFamily: "'Cinzel', serif",
          fontSize: "0.65rem", letterSpacing: "0.15em", cursor: "pointer", textTransform: "uppercase",
        }}>← Home</button>
      </nav>

      <div style={{ position: "relative", zIndex: 10, maxWidth: 860, margin: "0 auto", padding: "120px 24px 80px" }}>

        {/* ── HERO ── */}
        <div style={{ textAlign: "center", marginBottom: 64, animation: "aboutFadeUp 0.6s ease both" }}>
<p style={{ fontSize: "1rem", color: "rgba(201,168,76,0.5)", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 14 }}>
  Who We Are
</p>          <h1 style={{
            fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 900, color: "#fff",
            letterSpacing: "0.18em", margin: "0 0 16px",
            textShadow: "0 0 40px rgba(201,168,76,0.3)",
          }}>ABOUT ZENCODERS</h1>
          <p style={{
            fontFamily: "'Rajdhani', sans-serif", fontSize: "1.05rem",
            color: "#C9A84C", letterSpacing: "0.25em", fontWeight: 700,
            textTransform: "uppercase", margin: "0 0 28px",
            textShadow: "0 0 20px rgba(201,168,76,0.4)",
          }}>Code Your Dreams</p>
          <p style={{
            fontFamily: "'Rajdhani', sans-serif", fontSize: "1rem",
            color: "rgba(255,255,255,0.6)", lineHeight: 1.9, letterSpacing: "0.03em",
            maxWidth: 640, margin: "0 auto",
          }}>
            ZenCoders is the coding club of Jaypee Institute of Information Technology (JIIT), Noida —
            a community of builders, designers, organisers and storytellers spread across the
            Sector-62 and Sector-128 campuses. We exist to turn curiosity into skill: through
            workshops, fest events, hackathons and mentorship, we help students go from writing
            their first line of code to shipping real projects.
          </p>
        </div>

        {/* ── WHAT DRIVES US ── */}
        <div style={{ marginBottom: 64 }}>
          <SectionHeading>What Drives Us</SectionHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 14 }}>
            {VALUES.map((v, i) => (
              <div key={v.title} style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: 14, padding: "24px 20px",
                animation: "aboutFadeUp 0.6s ease both", animationDelay: i * 100 + "ms",
              }}>
                <div style={{ width: 28, height: "2px", background: "linear-gradient(90deg, #C9A84C, transparent)", marginBottom: 14 }} />
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "0.85rem", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.1em", margin: "0 0 10px", textTransform: "uppercase" }}>{v.title}</h3>
                <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, margin: 0, letterSpacing: "0.02em" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── OUR DOMAINS ── */}
        <div style={{ marginBottom: 64 }}>
          <SectionHeading>Our Domains</SectionHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 12 }}>
            {DOMAINS.map((d, i) => (
              <div key={d.name} style={{
                display: "flex", gap: 12, alignItems: "flex-start",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12, padding: "16px 16px",
                animation: "aboutFadeUp 0.5s ease both", animationDelay: i * 70 + "ms",
              }}>
                <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{d.icon}</span>
                <div>
                  <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: "0.08em", margin: "0 0 4px", textTransform: "uppercase" }}>{d.name}</h4>
                  <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{
          textAlign: "center", padding: "40px 24px",
          border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: 16,
          background: "linear-gradient(135deg, rgba(201,168,76,0.05), rgba(201,168,76,0.01))",
        }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1rem, 2.5vw, 1.3rem)", fontWeight: 700, color: "#fff", letterSpacing: "0.12em", margin: "0 0 10px" }}>
            Ready to be part of the story?
          </h2>
          <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.45)", margin: "0 0 26px", letterSpacing: "0.04em" }}>
            Explore our events, meet the team, or jump straight in — recruitment is open.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => navigate("/hiring")} style={{
              background: "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(16,185,129,0.08))",
              border: "1px solid rgba(16,185,129,0.5)", borderRadius: 7, padding: "12px 28px",
              color: "#10b981", fontFamily: "'Cinzel', serif", fontSize: "0.7rem",
              letterSpacing: "0.2em", cursor: "pointer", textTransform: "uppercase",
              boxShadow: "0 0 20px rgba(16,185,129,0.15)",
            }}>Join Us →</button>
            <button onClick={() => navigate("/events")} style={{
              background: "transparent", border: "1px solid rgba(0,212,255,0.35)", borderRadius: 7,
              padding: "12px 28px", color: "rgba(0,212,255,0.85)", fontFamily: "'Cinzel', serif",
              fontSize: "0.7rem", letterSpacing: "0.2em", cursor: "pointer", textTransform: "uppercase",
            }}>Our Events</button>
            <button onClick={() => navigate("/contact")} style={{
              background: "transparent", border: "1px solid rgba(201,168,76,0.35)", borderRadius: 7,
              padding: "12px 28px", color: "rgba(201,168,76,0.85)", fontFamily: "'Cinzel', serif",
              fontSize: "0.7rem", letterSpacing: "0.2em", cursor: "pointer", textTransform: "uppercase",
            }}>Contact</button>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Rajdhani:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes aboutFadeUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>
    </div>
  );
}
