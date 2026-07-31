import { useEffect, useRef, useState } from "react";

const TEAM_62 = [
    {
        id: 2, name: "Yashavi Singhal", role: "Technical head",
       img: "/assets/yashavi.jpg", bg: ["#6B4A8B", "#4B2A6B"], accent: "#a78bfa",
        year: "B.Tech CSE • 2nd Year",
        quote: "I don’t chase bugs—I make them disappear.",
        about: "As the Technical Head of ZenCoders, I turn ambitious ideas into polished digital experiences. I lead the technical team with confidence, creativity, and high standards—making sure every project is functional, seamless, and impossible to ignore.",
        skills: ["Web Development", "React", "UI/UX Design", "Problem Solving", "Technical Leadership"],
        linkedin: "https://www.linkedin.com/in/yashavi-singhal-60b0763a8?utm_source=share_via&utm_content=profile&utm_medium=member_ios", github: "https://github.com/yashavixsinghal-creator", instagram: "https://www.instagram.com/yashavi.singhal?igsh=aTlsc2RxeG1zaW15&utm_source=qr",
    },
    {
    id: 11,
    name: "Avni Gupta",
    role: "Treasurer",
    img: "/assets/avni.jpg",
    bg: ["#5A4A2B", "#3A2A0B"],
    accent: "#fbbf24",
    year: "B.Tech CSE • 2nd Year",
    quote: "Every great idea deserves a smart plan behind it.",
    about: "Avni is the Treasurer of ZenCoders Sector 62, managing the club’s resources with responsibility and attention to detail. She helps ensure that every initiative is planned efficiently and supported smoothly.",
    skills: ["Budget Management", "Financial Planning", "Organisation", "Communication", "Teamwork"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
},
{
    id: 12,
    name: "Vibhushi Agrawal",
    role: "Creative Head",
    img: "/assets/vibhushi.jpg",
    bg: ["#6B2B2B", "#4B0B0B"],
    accent: "#f87171",
    year: "B.Tech CSE • 2nd Year",
    quote: "Creativity turns every idea into something unforgettable.",
    about: "Vibhushi is the Creative Head of ZenCoders Sector 62, shaping the club’s visual identity through original ideas, thoughtful design, and engaging creative content.",
    skills: ["Graphic Design", "Branding", "Content Creation", "Canva", "Visual Storytelling"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
},
    {
        id: 8, name: "Sheezah Shiraz", role: "Cinematics Head",
        img: "/assets/sheezah.jpg", bg: ["#5A4A2B", "#3A2A0B"], accent: "#fb923c",
        year: "B.Tech CSE • 2nd Year",
        quote: "Every frame has a story waiting to be told.",
        about: "Sheezah leads the cinematics team at ZenCoders, capturing the energy, creativity, and memorable moments behind every event. From planning visual concepts to filming and editing engaging videos, she transforms each experience into content that reflects the club’s spirit and connects with its community.",
        skills: ["Videography", "Video Editing", "Cinematography", "Storytelling", "Content Creation"],
        linkedin: "https://www.linkedin.com/in/sheezah-shiraz-33407636a/", github: "https://github.com/sheexah", instagram: "https://www.instagram.com/sheexah/",
    },
    {
        id: 9, name: "Aditya Vishoriya", role: "Management Head",
        img: "/assets/adityav.jpg", bg: ["#4B6B2B", "#2B4B0B"], accent: "#a3e635",
        year: "B.Tech CSE • 2nd Year",
        quote: "I don’t just manage the plan—I make sure it delivers.",
        about: "Aditya is the Management Head of ZenCoders, keeping the team organised, aligned, and ready to turn big ideas into successful events. He coordinates people, plans, and responsibilities with confidence, ensuring every initiative runs smoothly from start to finish.",
        skills: ["Team Management", "Event Planning", "Leadership", "Communication", "Coordination"],
        linkedin: "https://www.linkedin.com/in/aditya-vishoriya-b51653380/", github: "https://github.com/vishoriya-aditya", instagram: "https://www.instagram.com/adityavishoriya/",
    },
    {
        id: 10, name: "Dhairya Khandelwal", role: "Digital Head",
        img: "/assets/dhairya.jpg", bg: ["#6B4A2B", "#4B2A0B"], accent: "#c084fc",
        year: "B.Tech CSE • 2nd Year",
        quote: "The internet is only as good as the people who shape it.",
        about: "Dhairya is a dedicated member of ZenCoders who brings creativity, curiosity, and a collaborative spirit to every project. He actively contributes to team initiatives, supports events and campaigns, and is always eager to learn, build, and grow with the community.",
        skills: ["Team Collaboration", "Event Management", "Content Creation", "Problem Solving", "Communication"],
        linkedin: "https://www.linkedin.com/in/dhairya-khandelwal-928824284/", github: "https://github.com/Dhairyax09", instagram: "https://www.instagram.com/dhairyax09/",
    },
    {
        id: 7, name: "Saumya Sharma", role: "Senior Advisor",
        img: "/assets/saumya.jpg", bg: ["#2B4A6B", "#0B2A4B"], accent: "#38bdf8",
        year: "B.Tech CSE • 4th Year",
        quote: "Organisation is not about perfection — it is about making space for people to thrive.",
        about: "Saumya is a Senior Advisor at ZenCoders, bringing valuable experience, guidance, and a thoughtful approach to the team. She supports the club’s leadership and members by sharing insights, helping shape initiatives, and ensuring that every project moves forward with clarity and purpose.",        skills: ["Management", "Documentation", "Google Workspace", "HR Coordination", "Planning"],
        linkedin: "https://linkedin.com/in/saumya-sharma", github: "https://github.com", instagram: "https://instagram.com",
    },
    {
        id: 6, name: "Ananya Agrawal", role: "Senior Advisor",
        img: "/assets/Ananya.png", bg: ["#6B2B2B", "#4B0B0B"], accent: "#f87171",
        year: "B.Tech CSE • 4th Year",
        quote: "Good design is the bridge between what something is and what it feels like.",
        about: "Ananya is a Senior Advisor at ZenCoders, known for her creative perspective and commitment to helping the team grow. She guides members on design and technical initiatives, contributes valuable insights to projects, and encourages a supportive, learning-focused community.",        skills: ["UI/UX Design", "Figma", "JavaScript", "CSS", "React"],
        linkedin: "https://linkedin.com/in/ananya-agrawal", github: "https://github.com", instagram: "https://instagram.com",
    },
    {
        id: 5, name: "Aditya Garg", role: "Senior Advisor",
        img: "/assets/Aditya.png", bg: ["#2B6B4A", "#0B4B2A"], accent: "#34d399",
        year: "BCA • 4th Year",
        quote: "Clean code is not written, it is rewritten.",
        about: "Aditya is a Senior Advisor at ZenCoders who brings strong technical experience and practical guidance to the team. He mentors members, supports development initiatives, and helps the club build impactful projects through thoughtful problem-solving and collaboration.",        skills: ["React", "System Design", "C++", "Open Source", "DSA"],
        linkedin: "https://linkedin.com/in/aditya-garg", github: "https://github.com/Aditya-0816", instagram: "https://instagram.com",
    },
    {
        id: 4, name: "Parth Sharma", role: "Organising Secretary",
        img: "/assets/Shivansh.png", bg: ["#8B5A2B", "#6B3A0B"], accent: "#fbbf24",
        year: "BCA Hons • 4th Year",
        quote: "Behind every great event is a thousand small decisions made right.",
        about: "Parth Sharma is the Organising Secretary of ZenCoders, ensuring that every event and initiative runs smoothly from planning to execution. He coordinates teams, manages logistics, and keeps everything on track with a calm, organised approach that helps turn ideas into successful experiences.",
        skills: ["Event Management", "Operations", "Communication", "MS Office", "Team Coordination"],
        linkedin: "https://linkedin.com/in/shivansh-gupta", github: "https://github.com", instagram: "https://instagram.com",
    },
    {
        id: 3, name: "Keshav Aggarwal", role: "President",
        img: "/assets/Soumil.png", bg: ["#3a3a5a", "#1a1a3a"], accent: "#60a5fa",
        year: "BCA • 3rd Year",
        quote: "A community that codes together, grows together.",
        about: "Keshav is the President of ZenCoders, leading the club with vision, energy, and a strong commitment to building a thriving tech community. He coordinates the team, guides major initiatives, and creates opportunities for members to learn, collaborate, and turn ideas into impactful projects.",
        skills: ["Leadership", "Team Management", "Strategic Planning", "Public Speaking", "Community Building"],
        linkedin: "https://www.linkedin.com/in/keshav-agrawal-02b4832bb/", github: "https://github.com/CleverCoder2024", instagram: "https://www.instagram.com/_keshav0505/",
    },
  
    {
        id: 1, name: "Rajat Gupta", role: "Technical Head",
        img: "/assets/rajat.jpg", bg: ["#8B4A6B", "#6B2A4B"], accent: "#e879a0",
        year: "B.Tech CSE • 2nd Year",
        quote: "Great code is written twice — once to make it work, once to make it right.",
        about: "Rajat Gupta is the Technical Head of ZenCoders, bringing strong problem-solving skills and a sharp technical mindset to the team. He helps lead development initiatives, supports members in building better projects, and ensures that every technical idea is turned into a reliable, high-quality solution.",
        skills: ["Web Development", "JavaScript", "React", "Problem Solving", "Technical Leadership"],
        linkedin: "https://www.linkedin.com/uas/login-submit?_l=en_US", github: "github.com/rajatGupta-qwerty", instagram: "https://instagram.com",
    },
];

//128 team
const TEAM_128 = [
    {
    id: 108,
    name: "Saumya Sharma",
    role: "Senior Advisor",
    img: "/assets/Saumya.png",
    bg: ["#2B4A6B", "#0B2A4B"],
    accent: "#38bdf8",
    year: "B.Tech CSE • 4th Year",
    quote: "Organisation is not about perfection — it is about making space for people to thrive.",
    about: "Saumya is a Senior Advisor at ZenCoders, bringing valuable experience, guidance, and a thoughtful approach to the team. She supports the club’s leadership and members by sharing insights, helping shape initiatives, and ensuring that every project moves forward with clarity and purpose.",
    skills: ["Management", "Documentation", "Google Workspace", "HR Coordination", "Planning"],
    linkedin: "https://linkedin.com/in/saumya-sharma",
    github: "https://github.com",
    instagram: "https://instagram.com",
},
{
    id: 109,
    name: "Ananya Agrawal",
    role: "Senior Advisor",
    img: "/assets/Ananya.png",
    bg: ["#6B2B2B", "#4B0B0B"],
    accent: "#f87171",
    year: "B.Tech CSE • 4th Year",
    quote: "Good design is the bridge between what something is and what it feels like.",
    about: "Ananya is a Senior Advisor at ZenCoders, known for her creative perspective and commitment to helping the team grow. She guides members on design and technical initiatives, contributes valuable insights to projects, and encourages a supportive, learning-focused community.",
    skills: ["UI/UX Design", "Figma", "JavaScript", "CSS", "React"],
    linkedin: "https://linkedin.com/in/ananya-agrawal",
    github: "https://github.com",
    instagram: "https://instagram.com",
},
{
    id: 110,
    name: "Aditya Garg",
    role: "Senior Advisor",
    img: "/assets/Aditya.png",
    bg: ["#2B6B4A", "#0B4B2A"],
    accent: "#34d399",
    year: "BCA • 4th Year",
    quote: "Clean code is not written, it is rewritten.",
    about: "Aditya is a Senior Advisor at ZenCoders who brings strong technical experience and practical guidance to the team. He mentors members, supports development initiatives, and helps the club build impactful projects through thoughtful problem-solving and collaboration.",
    skills: ["React", "System Design", "C++", "Open Source", "DSA"],
    linkedin: "https://linkedin.com/in/aditya-garg",
    github: "https://github.com/Aditya-0816",
    instagram: "https://instagram.com",
},
{
    id: 111,
    name: "Parth Sharma",
    role: "Organising Secretary",
    img: "/assets/Shivansh.png",
    bg: ["#8B5A2B", "#6B3A0B"],
    accent: "#fbbf24",
    year: "BCA Hons • 4th Year",
    quote: "Behind every great event is a thousand small decisions made right.",
    about: "Parth Sharma is the Organising Secretary of ZenCoders, ensuring that every event and initiative runs smoothly from planning to execution. He coordinates teams, manages logistics, and keeps everything on track with a calm, organised approach that helps turn ideas into successful experiences.",
    skills: ["Event Management", "Operations", "Communication", "MS Office", "Team Coordination"],
    linkedin: "https://linkedin.com/in/parth-sharma",
    github: "https://github.com",
    instagram: "https://instagram.com",
},
{
    id: 112,
    name: "Keshav Aggarwal",
    role: "President",
    img: "/assets/Soumil.png",
    bg: ["#3a3a5a", "#1a1a3a"],
    accent: "#60a5fa",
    year: "BCA • 3rd Year",
    quote: "A community that codes together, grows together.",
    about: "Keshav is the President of ZenCoders, leading the club with vision, energy, and a strong commitment to building a thriving tech community. He coordinates the team, guides major initiatives, and creates opportunities for members to learn, collaborate, and turn ideas into impactful projects.",
    skills: ["Leadership", "Team Management", "Strategic Planning", "Public Speaking", "Community Building"],
    linkedin: "https://www.linkedin.com/in/keshav-agrawal-02b4832bb/",
    github: "https://github.com/CleverCoder2024",
    instagram: "https://www.instagram.com/_keshav0505/",
},
    {
        id: 101,
        name: "Aryan Negi",
        role: "Treasurer",
        img: "/assets/Aryan.png",
        bg: ["#5A4A2B", "#3A2A0B"],
        accent: "#fbbf24",
        year: "JIIT Noida, Sector 128",
        quote: "Every great idea deserves a solid plan behind it.",
        about: "Aryan is the Treasurer of ZenCoders Sector 128, managing the club’s resources with responsibility and clarity. He helps ensure that every initiative is planned thoughtfully and supported efficiently.",
        skills: ["Financial Planning", "Budget Management", "Organisation", "Communication", "Teamwork"],
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
    },
    {
        id: 102,
        name: "Harshita Gupta",
        role: "Management Head",
        img: "/assets/Harshita.png",
        bg: ["#4B6B2B", "#2B4B0B"],
        accent: "#a3e635",
        year: "JIIT Noida, Sector 128",
        quote: "A strong team runs on clarity, trust, and great coordination.",
        about: "Harshita is the Management Head of ZenCoders Sector 128. She keeps the team organised, coordinates responsibilities, and helps every event move smoothly from planning to execution.",
        skills: ["Team Management", "Event Planning", "Coordination", "Leadership", "Communication"],
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
    },
    {
        id: 103,
        name: "Abhi Gautam",
        role: "Technical Head",
        img: "/assets/Abhi.png",
        bg: ["#2B4A6B", "#0B2A4B"],
        accent: "#38bdf8",
        year: "JIIT Noida, Sector 128",
        quote: "Good ideas become great when they are built well.",
        about: "Abhi is the Technical Head of ZenCoders Sector 128, guiding the club’s technical projects and helping members turn creative ideas into reliable digital solutions.",
        skills: ["Web Development", "Problem Solving", "Technical Leadership", "JavaScript", "Teamwork"],
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
    },
    {
        id: 104,
        name: "Anmol Sharma",
        role: "Technical Head",
        img: "/assets/Anmol.png",
        bg: ["#6B4A2B", "#4B2A0B"],
        accent: "#fb923c",
        year: "JIIT Noida, Sector 128",
        quote: "Turning complex problems into clean, reliable solutions.",
        about: "Anmol Sharma is the Technical Head of ZenCoders Sector 128, leading technical initiatives and helping the team transform ideas into well-built projects. He supports members through problem-solving, development, and a shared commitment to learning.",
        skills: ["Web Development", "Problem Solving", "Technical Leadership", "JavaScript", "Teamwork"],
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
    },
    {
        id: 105,
        name: "Divisha Agrawal",
        role: "Creative Head",
        img: "/assets/Divisha.png",
        bg: ["#6B2B2B", "#4B0B0B"],
        accent: "#f87171",
        year: "JIIT Noida, Sector 128",
        quote: "Creativity is how ideas become unforgettable.",
        about: "Divisha is the Creative Head of ZenCoders Sector 128, shaping the visual identity of the club through thoughtful design, fresh ideas, and engaging creative work.",
        skills: ["Graphic Design", "Branding", "Content Creation", "Canva", "Visual Storytelling"],
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
    },
    {
        id: 106,
        name: "Sheetal Mishra",
        role: "Digital Head",
        img: "/assets/Sheetal.png",
        bg: ["#6B4A8B", "#4B2A6B"],
        accent: "#c084fc",
        year: "JIIT Noida, Sector 128",
        quote: "A strong digital presence makes every idea travel further.",
        about: "Sheetal is the Digital Head of ZenCoders Sector 128, managing the club’s online presence and helping its events, achievements, and ideas reach the wider student community.",
        skills: ["Social Media", "Content Strategy", "Digital Marketing", "Communication", "Branding"],
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
    },
    {
        id: 107,
        name: "Jiya Sharma",
        role: "Cinematography Head",
        img: "/assets/Jiya.png",
        bg: ["#8B4A6B", "#6B2A4B"],
        accent: "#e879a0",
        year: "JIIT Noida, Sector 128",
        quote: "Every moment becomes memorable when it is captured with purpose.",
        about: "Jiya is the Cinematography Head of ZenCoders Sector 128, capturing the energy of the club through engaging photos and videos that tell the story behind every event.",
        skills: ["Videography", "Photography", "Video Editing", "Storytelling", "Content Creation"],
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        instagram: "https://instagram.com",
    },
];

const CARD_W = 130;
const CARD_H = 170;
const RX = 220;
const RY = 65;

function useTypewriter(text, isActive) {
    const [displayed, setDisplayed] = useState("");
    const [done, setDone] = useState(false);
    const idxRef = useRef(0);
    const timerRef = useRef(null);
    useEffect(() => {
        if (!isActive) { setDisplayed(""); setDone(false); idxRef.current = 0; return; }
        idxRef.current = 0; setDisplayed(""); setDone(false);
        const getDelay = (char) => {
            if ([".", "!", "?"].includes(char)) return 420 + Math.random() * 180;
            if ([",", ";", "—", "–"].includes(char)) return 180 + Math.random() * 80;
            if (char === " " && Math.random() < 0.18) return 90 + Math.random() * 60;
            return 38 + Math.random() * 34;
        };
        const tick = () => {
            idxRef.current += 1;
            setDisplayed(text.slice(0, idxRef.current));
            if (idxRef.current < text.length) timerRef.current = setTimeout(tick, getDelay(text[idxRef.current - 1]));
            else setDone(true);
        };
        timerRef.current = setTimeout(tick, 300);
        return () => clearTimeout(timerRef.current);
    }, [isActive, text]);
    return { displayed, done };
}

function LinkedInIcon({ color }) {
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="4"/><path d="M7 10v7M7 7v.01M12 10v7M12 13a3 3 0 016 0v4"/></svg>;
}
function GitHubIcon({ color }) {
    return <svg width="18" height="18" viewBox="0 0 24 24" fill={color}><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.89 1.56 2.33 1.11 2.9.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.71 0 0 .83-.27 2.73 1.04A9.3 9.3 0 0112 7.43c.84 0 1.69.12 2.48.34 1.9-1.31 2.73-1.04 2.73-1.04.54 1.41.2 2.45.1 2.71.63.72 1.02 1.63 1.02 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.27 10.27 0 0022 12.26C22 6.58 17.52 2 12 2z"/></svg>;
}
function InstagramIcon({ color }) {
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill={color} stroke="none"/></svg>;
}

function ModalSection({ title, accent, children }) {
    return (
        <div style={{ marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
                <div style={{ width: 3, height: 12, background: accent, borderRadius: 2 }} />
                <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.58rem", fontWeight: 700, color: accent, letterSpacing: "0.22em", textTransform: "uppercase" }}>{title}</span>
                <div style={{ flex: 1, height: "1px", background: `linear-gradient(to right, ${accent}44, transparent)` }} />
            </div>
            {children}
        </div>
    );
}

function TeamModal({ member, onClose }) {
    const initials = member.name.split(" ").map(n => n[0]).join("");
    const { displayed, done } = useTypewriter(member.about, true);
    useEffect(() => {
        const handler = (e) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);
    const socials = [
        { label: "LinkedIn", url: member.linkedin, Icon: LinkedInIcon },
        { label: "GitHub", url: member.github, Icon: GitHubIcon },
        { label: "Instagram", url: member.instagram, Icon: InstagramIcon },
    ];
    return (
        <div onClick={(e) => { if (e.target === e.currentTarget) onClose(); }} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(3,5,10,0.42)", backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", animation: "fadeInBackdrop 0.25s ease" }}>
            <div style={{ width: "100%", maxWidth: 720, maxHeight: "90vh", background: "linear-gradient(135deg, #0c1228 0%, #0d0a22 100%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, overflow: "hidden", boxShadow: `0 0 60px ${member.accent}22, 0 40px 80px rgba(0,0,0,0.8)`, display: "flex", flexDirection: "column", position: "relative", animation: "popIn 0.3s cubic-bezier(0.22,1,0.36,1)" }}>
                <div style={{ height: 3, background: `linear-gradient(90deg, transparent, ${member.accent}, transparent)`, flexShrink: 0 }} />
                <button onClick={onClose} style={{ position: "absolute", top: 14, right: 14, zIndex: 10, width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }} onMouseEnter={e => { e.currentTarget.style.background = `${member.accent}33`; e.currentTarget.style.color = "#fff"; }} onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}>✕</button>
                <div style={{ overflowY: "auto", flex: 1 }}>
                    <div style={{ display: "flex", gap: 20, padding: "22px 22px 18px", borderBottom: "1px solid rgba(255,255,255,0.07)", alignItems: "flex-start" }}>
                        <div style={{ width: 150, height: 200, flexShrink: 0, borderRadius: 12, background: `linear-gradient(145deg, ${member.bg[0]}, ${member.bg[1]})`, border: `1px solid ${member.accent}33`, overflow: "hidden", boxShadow: `0 8px 30px rgba(0,0,0,0.5), 0 0 20px ${member.accent}18`, display: "flex", flexDirection: "column" }}>
                            <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                                <img src={member.img} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} onError={e => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }} />
                                <div style={{ display: "none", position: "absolute", inset: 0, alignItems: "center", justifyContent: "center", fontSize: "2.2rem", fontWeight: 800, color: "rgba(255,255,255,0.9)", fontFamily: "'Cinzel', serif" }}>{initials}</div>
                                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)", pointerEvents: "none" }} />
                            </div>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ marginBottom: 10 }}>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 20, background: `${member.accent}18`, border: `1px solid ${member.accent}44`, color: member.accent, fontFamily: "'Rajdhani', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: member.accent, display: "inline-block", boxShadow: `0 0 6px ${member.accent}` }} />{member.role}
                                </span>
                            </div>
                            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "1rem", fontWeight: 700, color: "#fff", margin: "0 0 4px", lineHeight: 1.35 }}>{member.name}</h2>
                            <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.68rem", color: `${member.accent}bb`, margin: "0 0 14px", letterSpacing: "0.06em" }}>{member.year}</p>
                            <div style={{ borderLeft: `3px solid ${member.accent}77`, paddingLeft: 10 }}>
                                <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.74rem", fontStyle: "italic", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: 0 }}>"{member.quote}"</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: "18px 22px 24px" }}>
                        <ModalSection title="About" accent={member.accent}>
                            <div style={{ background: "rgba(0,0,0,0.35)", border: `1px solid ${member.accent}22`, borderRadius: 8, padding: "10px 12px", fontFamily: "'Courier New', Courier, monospace", fontSize: "0.74rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, minHeight: "5rem" }}>
                                {displayed}
                                <span style={{ display: "inline-block", width: "0.55em", height: "1em", background: member.accent, marginLeft: 2, verticalAlign: "text-bottom", animation: "blink 1.1s step-end infinite", opacity: done ? 0 : 1 }} />
                            </div>
                        </ModalSection>
                        <ModalSection title="Skills" accent={member.accent}>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                                {member.skills.map(skill => (
                                    <span key={skill} style={{ padding: "4px 12px", borderRadius: 20, background: `${member.accent}18`, border: `1px solid ${member.accent}44`, color: member.accent, fontFamily: "'Rajdhani', sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.08em" }}>{skill}</span>
                                ))}
                            </div>
                        </ModalSection>
                        <ModalSection title="Connect" accent={member.accent}>
                            <div style={{ display: "flex", gap: 10 }}>
                                {socials.map(({ label, url, Icon }) => (
                                    <a key={label} href={url} target="_blank" rel="noopener noreferrer" title={label} style={{ width: 42, height: 42, borderRadius: 10, background: `${member.accent}12`, border: `1px solid ${member.accent}33`, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all 0.2s" }} onMouseEnter={e => { e.currentTarget.style.background = `${member.accent}28`; e.currentTarget.style.borderColor = `${member.accent}88`; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={e => { e.currentTarget.style.background = `${member.accent}12`; e.currentTarget.style.borderColor = `${member.accent}33`; e.currentTarget.style.transform = "translateY(0)"; }}>
                                        <Icon color={member.accent} />
                                    </a>
                                ))}
                            </div>
                        </ModalSection>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Avatar({ name, img, bg }) {
    const initials = name.split(" ").map((n) => n[0]).join("");
    const [imgError, setImgError] = useState(false);
    return (
        <div style={{ width: "100%", height: "100%", background: `linear-gradient(145deg, ${bg[0]}, ${bg[1]})`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            {!imgError ? (
                <img src={img} alt={name} onError={() => setImgError(true)} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
            ) : (
                <>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.13)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", fontWeight: 800, color: "rgba(255,255,255,0.92)", fontFamily: "'Cinzel', serif", border: "1px solid rgba(255,255,255,0.22)" }}>{initials}</div>
                    <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", fontWeight: 700, color: "rgba(255,255,255,0.7)", textAlign: "center", padding: "0 8px", margin: "8px 0 0", lineHeight: 1.4 }}>{name}</p>
                </>
            )}
            {!imgError && <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)", pointerEvents: "none" }} />}
        </div>
    );
}

// ── Single carousel ───────────────────────────────────────────────────────────
function Carousel({ team, onSelect, label, accentColor, isMobile }) {
 const carouselCardW = isMobile ? 86 : CARD_W;
const carouselCardH = isMobile ? 114 : CARD_H;
const carouselRX = isMobile ? 80 : RX;
const carouselRY = isMobile ? 35 : RY;  
    const angleRef = useRef(0);
    const rafRef = useRef(null);
    const hoveredRef = useRef(null);
    const [cards, setCards] = useState([]);
    const [hovered, setHovered] = useState(null);

    useEffect(() => { hoveredRef.current = hovered; }, [hovered]);

    useEffect(() => {
        const compute = () => team.map((member, i) => {
            const angle = angleRef.current + (i / team.length) * Math.PI * 2;
             const x = Math.cos(angle) * carouselRX;
            const y = Math.sin(angle) * carouselRY;
            const sinA = Math.sin(angle);
            const t = (sinA + 1) / 2;
            const scale = 0.52 + 0.55 * t;
            const zIndex = Math.round(50 + sinA * 50);
            const opacity = 0.3 + 0.7 * t;
            const rotateY = isMobile ? 0 : -Math.cos(angle) * 30;
const rotateZ = isMobile ? 0 : Math.cos(angle) * -18;
            const brightness = 0.4 + 0.65 * t;
            return { ...member, x, y, scale, zIndex, opacity, rotateY, rotateZ, brightness };
        });
        const animate = () => {
            if (!hoveredRef.current) angleRef.current += 0.004;
            setCards(compute());
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, [team]);
if (isMobile) {
  return (
    <div style={{ width: "100%", padding: "0 0 12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 16px", marginBottom: 12 }}>
        <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${accentColor}44)` }} />
        <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.7rem", fontWeight: 700, color: accentColor, letterSpacing: "0.2em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          {label}
        </span>
        <div style={{ flex: 1, height: 1, background: `linear-gradient(to left, transparent, ${accentColor}44)` }} />
      </div>

      <div style={{ display: "flex", gap: 16, overflowX: "auto", padding: "10px 16px 24px", scrollSnapType: "x mandatory" }}>
        {team.map((member) => (
          <button
            key={member.id}
            type="button"
            onClick={() => onSelect(member)}
            style={{
              flex: "0 0 72vw",
              maxWidth: 260,
              padding: 0,
              border: `1px solid ${member.accent}55`,
              borderRadius: 16,
              overflow: "hidden",
              background: "rgba(7, 9, 18, 0.9)",
              cursor: "pointer",
              scrollSnapAlign: "center",
            }}
          >
            <div style={{ height: 300 }}>
              <Avatar name={member.name} img={member.img} bg={member.bg} />
            </div>

            <div style={{ padding: "12px 10px 14px", textAlign: "center" }}>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.72rem", fontWeight: 700, color: "#fff", margin: 0 }}>
                {member.name}
              </p>
              <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.68rem", color: member.accent, margin: "5px 0 0", textTransform: "uppercase" }}>
                {member.role}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
    return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", minWidth: 0 }}>
            {/* Campus label */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", marginBottom: 16, padding: "0 16px" }}>
                <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${accentColor}44)` }} />
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.7rem", fontWeight: 700, color: accentColor, letterSpacing: "0.2em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{label}</span>
                <div style={{ flex: 1, height: 1, background: `linear-gradient(to left, transparent, ${accentColor}44)` }} />
            </div>

            {/* Carousel stage */}
            <div style={{ position: "relative", width: "100%", height: isMobile ? 280 : 340, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {cards.map((member) => {
                    const isHov = hovered === member.id;
                    return (
                        <div
                            key={member.id}
                            onMouseEnter={() => setHovered(member.id)}
                            onMouseLeave={() => setHovered(null)}
                            onClick={() => onSelect(member)}
                            style={{
                                position: "absolute", left: "50%", top: "50%",
                                width: carouselCardW, height: carouselCardH,
                                marginLeft: -carouselCardW / 2, marginTop: -carouselCardH / 2,
                                zIndex: isHov ? 200 : member.zIndex,
                                opacity: isHov ? 1 : member.opacity,
                                cursor: "pointer",
                                transform: isHov
                                    ? `translate(${member.x}px, ${member.y}px) scale(${member.scale * 1.2})`
                                    : `translate(${member.x}px, ${member.y}px) scale(${member.scale}) rotateY(${member.rotateY}deg) rotateZ(${member.rotateZ}deg)`,
                                filter: isHov
                                    ? "brightness(1.4) drop-shadow(0 24px 48px rgba(0,0,0,0.95))"
                                    : `brightness(${member.brightness}) drop-shadow(0 8px 24px rgba(0,0,0,0.7))`,
                                transition: isHov
                                    ? "transform 0.38s cubic-bezier(0.23,1,0.32,1), opacity 0.3s ease, filter 0.3s ease"
                                    : "opacity 0.08s linear, filter 0.08s linear",
                                willChange: "transform, opacity, filter",
                                borderRadius: "16px",
                            }}
                        >
                            <div style={{ width: "100%", height: "100%", borderRadius: "16px", overflow: "hidden", border: isHov ? `1px solid ${member.accent}88` : "1px solid rgba(255,255,255,0.07)", boxShadow: isHov ? `0 32px 80px rgba(0,0,0,0.9), 0 0 20px ${member.accent}22` : "0 10px 40px rgba(0,0,0,0.5)", transition: "box-shadow 0.35s ease, border-color 0.35s ease" }}>
                                <Avatar name={member.name} img={member.img} bg={member.bg} />
                            </div>
                            <div style={{ position: "absolute", bottom: "-38px", left: "50%", transform: "translateX(-50%)", textAlign: "center", whiteSpace: "nowrap", opacity: isHov ? 1 : Math.max(0, (member.opacity - 0.7) * 3.5), transition: "opacity 0.3s ease", pointerEvents: "none" }}>
                                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", fontWeight: 700, color: "#fff", margin: 0, letterSpacing: "0.07em", textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}>{member.name}</p>
                                <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.58rem", color: "rgba(201,168,76,0.95)", margin: "2px 0 0", letterSpacing: "0.1em", textTransform: "uppercase", textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}>{member.role}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Team() {
    const [selectedMember, setSelectedMember] = useState(null);
    const [winWidth, setWinWidth] = useState(window.innerWidth);
    useEffect(() => { const h = () => setWinWidth(window.innerWidth); window.addEventListener("resize", h); return () => window.removeEventListener("resize", h); }, []);

    return (
        <div style={{ minHeight: "100vh", background: "radial-gradient(ellipse at 50% 40%, #0d1020 0%, #050709 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", padding: "40px 0" }}>
            {/* Atmosphere blobs */}
            <div style={{ position: "absolute", width: 400, height: 300, borderRadius: "50%", background: "#3b1d6e", filter: "blur(90px)", opacity: 0.4, top: "5%", left: "0", pointerEvents: "none", animation: "blob1 10s ease-in-out infinite" }} />
            <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "#1a3060", filter: "blur(90px)", opacity: 0.4, top: "50%", right: "0", pointerEvents: "none", animation: "blob2 12s ease-in-out infinite" }} />
            <div style={{ position: "absolute", left: 0, top: "15%", bottom: "15%", width: "3px", background: "linear-gradient(to bottom, transparent, #22c55e 40%, #22c55e 60%, transparent)", borderRadius: "2px" }} />

            {/* Header */}
            <div style={{ textAlign: "center", zIndex: 100, position: "relative", marginBottom: 32 }}>
                <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", margin: 0, letterSpacing: "0.04em", textShadow: "0 2px 40px rgba(255,255,255,0.15)" }}>Meet our Team</h2>
                <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(0.82rem, 1.8vw, 0.98rem)", color: "rgba(255,255,255,0.48)", marginTop: 10, maxWidth: 480, lineHeight: 1.7, letterSpacing: "0.02em", margin: "10px auto 0" }}>
                    A diverse team of passionate professionals driving innovation and excellence in every project.
                </p>
            </div>

            {/* Two carousels side by side */}
            <div style={{ display: "flex", flexDirection: winWidth < 768 ? "column" : "row", width: "min(1100px, 98vw)", position: "relative", zIndex: 10, alignItems: "flex-start" }}>
<Carousel team={TEAM_62} onSelect={setSelectedMember} label="Sector 62" accentColor="#C9A84C" isMobile={winWidth < 768} />
                {/* Divider — vertical on desktop, horizontal on mobile */}
                <div style={{
                  width: winWidth < 768 ? "80%" : 1,
                  height: winWidth < 768 ? 1 : "auto",
                  alignSelf: winWidth < 768 ? "center" : "stretch",
                  background: winWidth < 768
                    ? "linear-gradient(to right, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent)"
                    : "linear-gradient(to bottom, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent)",
                  flexShrink: 0,
                  margin: winWidth < 768 ? "8px 0" : "0 8px",
                }} />

<Carousel team={TEAM_128} onSelect={setSelectedMember} label="Sector 128" accentColor="#a78bfa" isMobile={winWidth < 768} />
                </div>
            {selectedMember && <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />}

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;800&family=Rajdhani:wght@400;600;700&display=swap');
                * { box-sizing: border-box; margin: 0; padding: 0; }
                @keyframes blob1 { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-20px) scale(1.08)} }
                @keyframes blob2 { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(20px) scale(1.06)} }
                @keyframes fadeInBackdrop { from{opacity:0} to{opacity:1} }
                @keyframes popIn { from{opacity:0;transform:scale(0.92) translateY(20px)} to{opacity:1;transform:scale(1) translateY(0)} }
                @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
            `}</style>
        </div>
    );
}
