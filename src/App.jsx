import React, { useState } from "react";

const sections = [
  {
    id: "foundation",
    emoji: "✨",
    title: "The Launchpad",
    subtitle: "Define your engineering identity",
    color: "#4285F4", // Google Blue
    prompts: [
      {
        label: "The ECE Identity Intro",
        prompt: `I am [Your Name], an ECE student focusing on IoT and Embedded Systems. I have experience with ESP32 and technical blogging. Based on my technical background and my role as a Gemini Student Ambassador, suggest 5 unique career paths that bridge hardware and AI.`,
        tip: "Start here to give Gemini your 'Engineering DNA'."
      },
      {
        label: "Strengths Excavator",
        prompt: `Analyze my project history (IoT Smart Cloth Protector, NodeMCU Data Logger). Ask me 5 deep questions to find my 'Flow State' and suggest how these skills translate to high-impact industry roles.`,
        tip: "This finds what you're naturally best at."
      }
    ]
  },
  {
    id: "strategy",
    emoji: "🎯",
    title: "Career Strategy",
    subtitle: "Map the path to 2026",
    color: "#34A853", // Google Green
    prompts: [
      {
        label: "The Skill Gap Analyzer",
        prompt: `My dream role is [Role Name]. I currently know C++, IoT protocols, and circuit design. What are the 'missing links' in my resume for 2026? Give me a prioritized learning list.`,
        tip: "Perfect for planning your final year of engineering."
      },
      {
        label: "Future-Proof Radar",
        prompt: `How will Generative AI change the role of an Embedded Systems Engineer by 2030? What skills should I learn now to stay ahead of automation?`,
        tip: "This helps you pick 'evergreen' skills."
      }
    ]
  },
  {
    id: "branding",
    emoji: "📢",
    title: "Personal Branding",
    subtitle: "Content for LinkedIn & Medium",
    color: "#EA4335", // Google Red
    prompts: [
      {
        label: "Technical Blog Scripter",
        prompt: `I just finished a project using [Component]. Help me write an outline for a Medium article that explains the 'Vertical Integration' logic I used, making it accessible for fellow students.`,
        tip: "Use this to maintain your blogging streak!"
      },
      {
        label: "The LinkedIn Hook",
        prompt: `I was just selected as a 2026 Gemini Student Ambassador! Help me write a professional yet excited LinkedIn post that explains how I plan to use AI to help my peers in ECE.`,
        tip: "Great for building your professional network."
      }
    ]
  }
];

export default function GeminiToolkit() {
  const [activeSection, setActiveSection] = useState("foundation");
  const [copyStatus, setCopyStatus] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopyStatus("Prompt Copied!");
    setTimeout(() => setCopyStatus(""), 2000);
  };

  const current = sections.find(s => s.id === activeSection);

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", color: "#3c4043", fontFamily: "'Google Sans', sans-serif", padding: "0" }}>
      {/* Brand Header */}
      <nav style={{ background: "#fff", padding: "16px 40px", borderBottom: "1px solid #dadce0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "24px", height: "24px", background: "linear-gradient(45deg, #4285f4, #9b72cb, #d96570)", borderRadius: "50%" }}></div>
          <span style={{ fontWeight: "500", fontSize: "20px", letterSpacing: "-0.5px" }}>Gemini <span style={{ color: "#70757a", fontWeight: "400" }}>Student Ambassador</span></span>
        </div>
        <div style={{ fontSize: "12px", color: "#70757a", fontWeight: "500" }}>TOOLKIT v1.0</div>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "60px 20px", background: "#fff" }}>
        <h1 style={{ fontSize: "48px", margin: "0 0 16px", fontWeight: "400", color: "#1f1f1f" }}>Find Your <span style={{ color: "#1a73e8", fontStyle: "italic" }}>Dream Career</span></h1>
        <p style={{ maxWidth: "600px", margin: "0 auto", color: "#5f6368", lineHeight: "1.6" }}>
          The official prompt library for ECE students to navigate the future using Gemini AI. 
          Copy, personalize, and build your roadmap.
        </p>
      </div>

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px", display: "flex", gap: "40px" }}>
        {/* Navigation */}
        <div style={{ width: "260px", flexShrink: 0 }}>
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              style={{
                display: "block", width: "100%", padding: "12px 16px", marginBottom: "8px", textAlign: "left",
                background: activeSection === s.id ? `${s.color}15` : "transparent",
                border: "none", borderRadius: "8px", cursor: "pointer",
                color: activeSection === s.id ? s.color : "#5f6368",
                fontWeight: activeSection === s.id ? "600" : "400",
                transition: "0.2s"
              }}
            >
              <span style={{ marginRight: "12px" }}>{s.emoji}</span> {s.title}
            </button>
          ))}
        </div>

        {/* Prompts */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", color: "#70757a", marginBottom: "20px" }}>{current.subtitle}</h2>
          {current.prompts.map((p, idx) => (
            <div key={idx} style={{ background: "#fff", border: "1px solid #dadce0", borderRadius: "12px", padding: "24px", marginBottom: "20px" }}>
              <h3 style={{ margin: "0 0 12px", fontSize: "18px", color: "#1f1f1f" }}>{p.label}</h3>
              <div style={{ background: "#f1f3f4", padding: "16px", borderRadius: "8px", fontFamily: "monospace", fontSize: "14px", color: "#3c4043", border: "1px solid #e8eaed", marginBottom: "16px" }}>
                {p.prompt}
              </div>
              <button
                onClick={() => handleCopy(p.prompt)}
                style={{ background: current.color, color: "#fff", border: "none", padding: "10px 20px", borderRadius: "20px", fontWeight: "500", cursor: "pointer" }}
              >
                Copy for Gemini
              </button>
              <span style={{ marginLeft: "15px", fontSize: "13px", color: "#70757a" }}>💡 {p.tip}</span>
            </div>
          ))}
        </div>
      </div>

      {copyStatus && (
        <div style={{ position: "fixed", bottom: "30px", left: "50%", transform: "translateX(-50%)", background: "#323336", color: "#fff", padding: "12px 24px", borderRadius: "4px", fontSize: "14px", boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}>
          {copyStatus}
        </div>
      )}
    </div>
  );
}