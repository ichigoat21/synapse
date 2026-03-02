import { useNavigate } from "react-router-dom"
import { GitIcon } from "../icons/github"
import { TwTicon } from "../icons/twitter"

export function LandingPage() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#f8f8f6",
        color: "#1a1a1a",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Fraunces:ital,wght@0,300;0,600;1,300&display=swap');

        .nav-btn {
          background: #1a1a1a;
          color: #f8f8f6;
          border: none;
          padding: 10px 22px;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .nav-btn:hover { opacity: 0.75; }

        .cta-primary {
          background: #1a1a1a;
          color: #f8f8f6;
          border: none;
          padding: 14px 32px;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.15s, opacity 0.15s;
        }
        .cta-primary:hover { transform: translateY(-1px); opacity: 0.8; }

        .cta-secondary {
          background: transparent;
          color: #1a1a1a;
          border: 1px solid rgba(26,26,26,0.2);
          padding: 14px 32px;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 400;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s;
        }
        .cta-secondary:hover { border-color: rgba(26,26,26,0.5); transform: translateY(-1px); }

        .icon-link {
          color: #aaa;
          transition: color 0.2s;
          display: flex;
          align-items: center;
        }
        .icon-link:hover { color: #1a1a1a; }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #efefed;
          border: 1px solid #e0e0dc;
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 12px;
          color: #888;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4ade80;
        }

        .orb {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
      `}</style>

      <div className="orb" />

      {/* NAV */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 40px",
          flexShrink: 0,
        }}
      >
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: "22px", fontWeight: 300, letterSpacing: "-0.02em" }}>
          Synapse
        </span>
        <button className="nav-btn" onClick={() => navigate("/signup")}>
          Get Started
        </button>
      </nav>

      {/* HERO */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
          position: "relative",
        }}
      >
        <div className="badge">
          <span className="dot" />
          Your second brain
        </div>

        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            maxWidth: "720px",
            marginBottom: "20px",
            color: "#1a1a1a",
          }}
        >
          Never lose a great
          <br />
          <em style={{ fontStyle: "italic", color: "#999" }}>idea from the web.</em>
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#888",
            maxWidth: "420px",
            lineHeight: 1.65,
            marginBottom: "40px",
            fontWeight: 300,
          }}
        >
          Synapse captures your internet highlights so you can revisit, search, and build on them — effortlessly.
        </p>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <button className="cta-primary" onClick={() => navigate("/signup")}>
            Sign Up Free
          </button>
          <button className="cta-secondary" onClick={() => navigate("/signin")}>
            Log In
          </button>
        </div>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 40px",
          borderTop: "1px solid #e8e8e4",
        }}
      >
        <span style={{ fontSize: "12px", color: "#bbb" }}>© 2026 Synapse</span>
        <span style={{ fontSize: "12px", color: "#bbb" }}>by Shiv</span>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <a href="https://github.com/ichigoat21/synapse" target="_blank" rel="noopener noreferrer" className="icon-link">
            <GitIcon />
          </a>
          <a href="https://x.com/codegazer" target="_blank" rel="noopener noreferrer" className="icon-link">
            <TwTicon />
          </a>
        </div>
      </footer>
    </div>
  )
}