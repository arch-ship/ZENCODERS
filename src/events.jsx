import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EVENTS, EventRow, ParticleField } from "./event1";

const today = new Date();
today.setHours(0, 0, 0, 0);

// Derive status from the event date so badges never go stale
const withStatus = EVENTS.map(e => ({
  ...e,
  tag: new Date(e.sortDate) >= today ? "UPCOMING" : "PAST",
}));

const UPCOMING = withStatus
  .filter(e => e.tag === "UPCOMING")
  .sort((a, b) => new Date(a.sortDate) - new Date(b.sortDate));

const PAST = withStatus
  .filter(e => e.tag === "PAST")
  .sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));

const totalParticipants = EVENTS.reduce((acc, e) => acc + (e.participants || 0), 0);

export default function EventsPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("upcoming");

  const list = tab === "upcoming" ? UPCOMING : PAST;
  const accent = tab === "upcoming" ? "#10b981" : "#00d4ff";
  const accentRGB = tab === "upcoming" ? "16,185,129" : "0,212,255";

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(ellipse at 20% 10%, #060e24 0%, #030509 60%, #020307 100%)",
      position: "relative", overflow: "hidden", padding: "100px 0 80px",
    }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <ParticleField />
      </div>

      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, zIndex: 0 }}>
        <defs>
          <pattern id="eventspagegrid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00d4ff" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#eventspagegrid)" />
      </svg>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, height: "60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        paddingLeft: "28px", paddingRight: "32px",
        background: "rgba(3,5,8,0.88)", backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0,212,255,0.18)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, overflow: "hidden" }}>
            <img src="/assets/Zenlogo.png" alt="ZenCoders" style={{ width: "100%", height: "100%", objectFit: "contain" }} onError={e => { e.currentTarget.style.display = "none"; }} />
          </div>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.22em" }}>ZENCODERS</span>
        </div>
        <button onClick={() => navigate("/")} style={{
          background: "transparent", border: "1px solid rgba(0,212,255,0.3)", borderRadius: 6,
          padding: "7px 16px", color: "rgba(0,212,255,0.8)", fontFamily: "'Cinzel', serif",
          fontSize: "0.65rem", letterSpacing: "0.15em", cursor: "pointer", textTransform: "uppercase",
        }}>← Home</button>
      </nav>

      <div style={{ position: "relative", zIndex: 2, maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 12 }}>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(0,212,255,0.5))" }} />
            <div style={{ display: "flex", gap: 4 }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{ width: 4, height: 4, background: i === 1 ? "#00d4ff" : "rgba(0,212,255,0.3)", transform: "rotate(45deg)", boxShadow: i === 1 ? "0 0 8px #00d4ff" : "none" }} />
              ))}
            </div>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(0,212,255,0.5))" }} />
          </div>

          <h1 style={{
            fontFamily: "'Cinzel', serif", fontSize: "clamp(2.2rem, 6vw, 3.6rem)",
            fontWeight: 900, color: "#fff", margin: 0, letterSpacing: "0.4em",
            textShadow: "0 0 40px rgba(0,212,255,0.35), 0 0 80px rgba(0,212,255,0.1)",
          }}>EVENTS</h1>

          <p style={{
            fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem",
            color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em",
            marginTop: 14, lineHeight: 1.8,
          }}>
            From orientations and hands-on workshops to fest showdowns —<br />
            explore everything ZenCoders has hosted and what's coming next.
          </p>
        </div>

        {/* ── STATS ── */}
        <div style={{ display: "flex", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
          {[
            { label: "Events Hosted", value: PAST.length, color: "#00d4ff" },
            { label: "Upcoming", value: UPCOMING.length, color: "#10b981" },
            { label: "Participants", value: totalParticipants + "+", color: "#a855f7" },
          ].map(s => (
            <div key={s.label} style={{
              flex: 1, minWidth: 120, textAlign: "center",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 12, padding: "16px 10px",
            }}>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.5rem", fontWeight: 900, color: s.color, textShadow: "0 0 20px " + s.color + "50" }}>{s.value}</div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── UPCOMING / PAST TABS ── */}
        <div style={{
          display: "flex", gap: 2, marginBottom: 24,
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "10px", padding: "4px",
        }}>
          {[
            { key: "upcoming", label: "Upcoming Events (" + UPCOMING.length + ")", color: "#10b981", rgb: "16,185,129" },
            { key: "past", label: "Past Events (" + PAST.length + ")", color: "#00d4ff", rgb: "0,212,255" },
          ].map(t => (
            <button key={t.key} onClick={() => setTab(t.key)} style={{
              flex: 1, fontFamily: "'Rajdhani', sans-serif",
              fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em",
              padding: "10px 12px", borderRadius: "7px",
              background: tab === t.key ? "rgba(" + t.rgb + ",0.14)" : "transparent",
              border: tab === t.key ? "1px solid rgba(" + t.rgb + ",0.35)" : "1px solid transparent",
              color: tab === t.key ? t.color : "rgba(255,255,255,0.35)",
              cursor: "pointer", transition: "all 0.25s", textTransform: "uppercase",
              boxShadow: tab === t.key ? "0 0 16px rgba(" + t.rgb + ",0.12)" : "none",
            }}
              onMouseEnter={e => { if (tab !== t.key) e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
              onMouseLeave={e => { if (tab !== t.key) e.currentTarget.style.color = "rgba(255,255,255,0.35)"; }}
            >{t.label}</button>
          ))}
        </div>

        {/* ── EVENT LIST ── */}
        <div>
          {list.length === 0 ? (
            <div style={{
              textAlign: "center", padding: "48px 24px",
              border: "1px dashed rgba(" + accentRGB + ",0.2)",
              borderRadius: "14px", background: "rgba(" + accentRGB + ",0.02)",
            }}>
              <div style={{ fontSize: "2rem", marginBottom: 12 }}>🛸</div>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.85rem", color: accent, letterSpacing: "0.08em", opacity: 0.7 }}>
                New events are brewing — stay tuned!
              </p>
            </div>
          ) : (
            list.map((event, i) => <EventRow key={event.id} event={event} index={i} />)
          )}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Rajdhani:wght@400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(0.75); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity:0; }
          to   { opacity:1; }
        }
        @keyframes livePulse {
          0%,100% { box-shadow: 0 0 20px rgba(16,185,129,0.3), 0 0 40px rgba(16,185,129,0.1); }
          50%      { box-shadow: 0 0 30px rgba(16,185,129,0.5), 0 0 60px rgba(16,185,129,0.2); }
        }
      `}</style>
    </div>
  );
}
