import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const NAV_LINKS = ["Home", "Events", "Academic", "FAQ", "About", "Contact Us", "Join Us"];

function HamburgerIcon({ open }) {
  return (
    <div style={{ width: 32, height: 32, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
      <span style={{ display: "block", width: "22px", height: "2px", background: "#C9A84C", marginBottom: "5px", transform: open ? "translateY(7px) rotate(45deg)" : "translateY(0)", transition: "transform 0.3s ease" }} />
      <span style={{ display: "block", width: "22px", height: "2px", background: "#C9A84C", marginBottom: "5px", opacity: open ? 0 : 1, transition: "opacity 0.2s ease" }} />
      <span style={{ display: "block", width: "22px", height: "2px", background: "#C9A84C", transform: open ? "translateY(-7px) rotate(-45deg)" : "translateY(0)", transition: "transform 0.3s ease" }} />
    </div>
  );
}

function StarField() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = canvas.offsetWidth, H = canvas.offsetHeight;
    canvas.width = W; canvas.height = H;
    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.3 + 0.2,
      alpha: Math.random() * 0.6 + 0.1,
      twinkle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.005,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      stars.forEach(s => {
        s.twinkle += s.speed;
        const a = s.alpha * (0.5 + 0.5 * Math.sin(s.twinkle));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fill();
      });
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = canvas.offsetWidth; H = canvas.offsetHeight; canvas.width = W; canvas.height = H; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />;
}

export default function Contact() {
  const [form, setForm]       = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent]       = useState(false);
  const [focused, setFocused] = useState(null);
  const [btnHov, setBtnHov]   = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWinWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        message: form.message,
        reply_to: form.email,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );

    setSent(true);
    setForm({ name: "", phone: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  } catch (err) {
    console.error("EmailJS error:", err);
    alert("Message could not be sent. Please try again.");
  }
};

  const fields = [
    { name: "name",    placeholder: "Your name" },
    { name: "phone",   placeholder: "Your phone" },
    { name: "email",   placeholder: "Your e-mail" },
    { name: "message", placeholder: "Message", multiline: true },
  ];

  const linkHref = (link) => {
    if (link === "Contact Us") return "/contact";
    if (link === "Home") return "/";
    if (link === "Join Us") return "/hiring";
    if (link === "Events") return "/events";
    if (link === "About") return "/about";
    return "#";
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(ellipse at 20% 60%, #0d0d1a 0%, #07070f 40%, #030308 100%)",
      display: "flex", flexDirection: "column",
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      position: "relative", overflow: "hidden",
    }}>
      <StarField />
      <div style={{ position: "fixed", width: 500, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(60,30,120,0.15) 0%, transparent 70%)", top: "10%", left: "5%", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", width: 400, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(20,60,120,0.1) 0%, transparent 70%)", bottom: "5%", right: "10%", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(80,20,100,0.08) 0%, transparent 70%)", top: "50%", right: "30%", pointerEvents: "none", zIndex: 0 }} />
      <svg style={{ position: "fixed", inset: 0, width: "100%", height: "100%", opacity: 0.025, pointerEvents: "none", zIndex: 0 }}>
        <defs><pattern id="cgrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="0.5" /></pattern></defs>
        <rect width="100%" height="100%" fill="url(#cgrid)" />
      </svg>

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "28px", paddingRight: "32px", background: "rgba(3,5,8,0.88)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderBottom: "1px solid rgba(201,168,76,0.18)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <div style={{ width: 34, height: 34, overflow: "hidden", flexShrink: 0 }}>
            <img src="/assets/Zenlogo.png" alt="ZenCoders" style={{ width: "100%", height: "100%", objectFit: "contain" }} onError={e => { e.currentTarget.style.display = "none"; }} />
          </div>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.22em", whiteSpace: "nowrap", textShadow: "0 0 16px rgba(201,168,76,0.4)" }}>ZENCODERS</span>
        </div>
        <ul style={{ display: winWidth >= 768 ? "flex" : "none", alignItems: "center", fontFamily: "'Cinzel', serif", listStyle: "none", margin: 0, padding: 0, gap: "2.5rem" }}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              {link === "Contact Us" || link === "Home" || link === "Events" || link === "About" ? (
                <Link to={linkHref(link)} style={{ color: link === "Contact Us" ? "#C9A84C" : "rgba(255,255,255,0.92)", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.14em", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
                  onMouseLeave={e => e.currentTarget.style.color = link === "Contact Us" ? "#C9A84C" : "rgba(255,255,255,0.92)"}
                >{link}</Link>
              ) : link === "Join Us" ? (
                <Link to="/hiring" style={{ color: "#10b981", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.14em", textDecoration: "none", textShadow: "0 0 12px rgba(16,185,129,0.5)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#34d399"}
                  onMouseLeave={e => e.currentTarget.style.color = "#10b981"}
                >{link}</Link>
              ) : (
                <a href="#" style={{ color: "rgba(255,255,255,0.92)", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.14em", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.92)"}
                >{link}</a>
              )}
            </li>
          ))}
          
        </ul>
        <button onClick={() => setMenuOpen(o => !o)} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: winWidth >= 768 ? "none" : "flex", alignItems: "center" }} aria-label="Toggle menu">
          <HamburgerIcon open={menuOpen} />
        </button>
      </nav>
      {menuOpen && winWidth < 768 && (
  <div
    style={{
      position: "fixed",
      top: "60px",
      left: 0,
      right: 0,
      zIndex: 40,
      display: "flex",
      flexDirection: "column",
      padding: "16px 28px",
      gap: "18px",
      background: "rgba(3,5,8,0.97)",
      borderBottom: "1px solid rgba(201,168,76,0.18)",
    }}
  >
    {NAV_LINKS.map((link) => {
      const href = linkHref(link);

      return href === "#" ? (
        <a
          key={link}
          href="#"
          onClick={() => setMenuOpen(false)}
          style={{
            color: "rgba(255,255,255,0.92)",
            fontFamily: "'Cinzel', serif",
            fontSize: "0.82rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textDecoration: "none",
          }}
        >
          {link}
        </a>
      ) : (
        <Link
          key={link}
          to={href}
          onClick={() => setMenuOpen(false)}
          style={{
            color: link === "Contact Us" ? "#C9A84C" : "rgba(255,255,255,0.92)",
            fontFamily: "'Cinzel', serif",
            fontSize: "0.82rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textDecoration: "none",
          }}
        >
          {link}
        </Link>
      );
    })}
  </div>
)}

      <div style={{ flex: 1, display: "flex", alignItems: winWidth < 768 ? "flex-start" : "stretch", flexDirection: winWidth < 768 ? "column" : "row", padding: winWidth < 768 ? "80px 24px 60px" : "80px 48px 60px", gap: 0, position: "relative", zIndex: 10 }}>

        <div style={{ flex: winWidth < 768 ? "unset" : "0 0 42%", width: winWidth < 768 ? "100%" : "auto", paddingRight: winWidth < 768 ? 0 : 60, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 700, color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 28px", lineHeight: 1.1 }}>CONTACT</h1>
          <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.9rem", color: "rgb(255,255,255)", lineHeight: 1.85, letterSpacing: "0.02em", margin: "0 0 48px", maxWidth: 360 }}>
            Have an idea, a question, or want to collaborate? ZenCoders is always open to new conversations. Reach out and we'll get back to you as soon as possible.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: "1rem", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 4px" }}>Address</p>
<a
  href="https://www.instagram.com/zencodersjiit62/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "block",
    width: "fit-content",
    position: "relative",
    zIndex: 20,
    cursor: "pointer",
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "1rem",
    color: "#C9A84C",
    margin: "0 0 8px",
    letterSpacing: "0.04em",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  }}
>
  JIIT Campus, Sector 62, Noida
</a>

<a
  href="https://www.instagram.com/zencodersjiit128/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "block",
    width: "fit-content",
    position: "relative",
    zIndex: 20,
    cursor: "pointer",
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "1rem",
    color: "#C9A84C",
    margin: 0,
    letterSpacing: "0.04em",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  }}
>
  JIIT Campus, Sector 128, Noida
</a>
            </div>
            {[
              { label: "Email", value: "zencodersmanagement@gmail.com" },
              { label: "Instagram", value: "@zencodersjiit" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "1rem", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 4px" }}>{label}</p>
                <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1rem", color: "hsl(0,0%,100%)", margin: 0, letterSpacing: "0.04em" }}>{value}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 44 }}>
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/company/zencoders/", svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(208,170,65,0.6)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="4"/><path d="M7 10v7M7 7v.01M12 10v7M12 13a3 3 0 016 0v4"/></svg> },
              { label: "Instagram", href: "https://www.instagram.com/zencodersjiit62", svg: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.6)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="rgba(201,168,76,0.6)" stroke="none"/></svg> },
            ].map(({ label, href, svg }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.7, transition: "opacity 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "1"}
                onMouseLeave={e => e.currentTarget.style.opacity = "0.7"}
              >{svg}</a>
            ))}
          </div>
        </div>

        <div style={{ width: "1px", display: winWidth < 768 ? "none" : "block", background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.18) 20%, rgba(201,168,76,0.18) 80%, transparent)", alignSelf: "stretch", flexShrink: 0 }} />

        <div style={{ flex: 1, width: winWidth < 768 ? "100%" : "auto", paddingLeft: winWidth < 768 ? 0 : 60, paddingTop: winWidth < 768 ? 40 : 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 32px", lineHeight: 1.1 }}>CONTACT FORM</h2>

          <div style={{
            background: "linear-gradient(145deg, rgba(18,18,34,0.96) 0%, rgba(11,11,22,0.98) 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: 4,
            padding: "32px 32px 0 32px",
            boxShadow: "0 32px 80px rgba(0,0,0,0.8), 0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(201,168,76,0.06)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)" }} />

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
              {fields.map(({ name, placeholder, multiline }) => (
                <div key={name} style={{ marginBottom: 6 }}>
                  {multiline ? (
                    <textarea
                      name={name} value={form[name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(name)}
                      onBlur={() => setFocused(null)}
                      placeholder={placeholder} rows={1}
                      style={{
                        width: "100%", background: "transparent", border: "none",
                        borderBottom: `1px solid ${focused === name ? "rgba(201,168,76,0.5)" : "rgba(255,255,255,0.5)"}`,
                        color: "#fff", fontSize: "0.78rem", letterSpacing: "0.04em",
                        padding: "14px 0 10px", outline: "none", resize: "none",
                        fontFamily: "'Rajdhani', sans-serif",
                        transition: "border-color 0.25s", boxSizing: "border-box",
                      }}
                    />
                  ) : (
                    <input
                      type={name === "email" ? "email" : name === "phone" ? "tel" : "text"}
                      name={name} value={form[name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(name)}
                      onBlur={() => setFocused(null)}
                      placeholder={placeholder}
                      style={{
                        width: "100%", background: "transparent", border: "none",
                        borderBottom: `1px solid ${focused === name ? "rgba(201,168,76,0.5)" : "rgba(255,255,255,0.5)"}`,
                        color: "#fff", fontSize: "0.78rem", letterSpacing: "0.04em",
                        padding: "14px 0 10px", outline: "none",
                        fontFamily: "'Rajdhani', sans-serif",
                        transition: "border-color 0.25s", boxSizing: "border-box",
                      }}
                    />
                  )}
                </div>
              ))}

              {/* Send button — styled as golden rounded rectangle */}
              <div style={{
                marginTop: 28,
                marginBottom: 32,
                display: "flex",
                justifyContent: "center",
                transform: btnHov ? "translateY(-4px)" : "translateY(0px)",
                transition: "transform 0.35s cubic-bezier(0.23,1,0.32,1)",
              }}>
                <button
                  type="submit"
                  onMouseEnter={() => setBtnHov(true)}
                  onMouseLeave={() => setBtnHov(false)}
                  style={{
                    width: "400px",
                    background: btnHov ? "rgba(201,168,76,0.14)" : "rgba(201,168,76,0.06)",
                    border: `1px solid ${btnHov ? "rgba(201,168,76,0.7)" : "rgba(201,168,76,0.35)"}`,
                    borderRadius: 6,
                    color: btnHov ? "#C9A84C" : "rgba(255,255,255,0.75)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.22em", textTransform: "uppercase",
                    fontWeight: 700, padding: "16px 0",
                    cursor: "pointer",
                    fontFamily: "'Cinzel', serif",
                    transition: "all 0.35s cubic-bezier(0.23,1,0.32,1)",
                    textShadow: btnHov ? "0 0 16px rgba(201,168,76,0.4)" : "none",
                    boxShadow: btnHov ? "0 0 20px rgba(201,168,76,0.15), inset 0 1px 0 rgba(201,168,76,0.1)" : "inset 0 1px 0 rgba(201,168,76,0.05)",
                  }}
                >
                  {sent ? "MESSAGE SENT ✓" : "SEND MESSAGE +"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div style={{ position: "fixed", right: 20, top: "50%", transform: "translateY(-50%) rotate(90deg)", display: "flex", alignItems: "center", gap: 10, zIndex: 10 }}>
        <div style={{ width: 32, height: "1px", background: "rgba(201,168,76,0.2)" }} />
        <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.52rem", color: "rgba(201,168,76,0.25)", letterSpacing: "0.25em", textTransform: "uppercase" }}>SCROLL</span>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Rajdhani:wght@400;600;700&display=swap');
        input::placeholder, textarea::placeholder {
          color: rgb(255,255,255,0.5);
          font-size: 0.75rem;
          letter-spacing: 0.06em;
          font-family: 'Rajdhani', sans-serif;
        }
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px #0b0b16 inset;
          -webkit-text-fill-color: #fff;
        }
      `}</style>
    </div>
  );
}
