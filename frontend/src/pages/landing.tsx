import { useNavigate } from "react-router-dom"
import { GitIcon } from "../icons/github"
import { TwTicon } from "../icons/twitter"

export function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f8f6] text-[#1a1a1a]">

      {/* NAV */}
      <nav className="flex items-center justify-between px-6 sm:px-10 py-5 shrink-0">
        <span className="text-xl font-light tracking-tight" style={{ fontFamily: "'Fraunces', serif" }}>
          Synapse
        </span>
        <button
          onClick={() => navigate("/signup")}
          className="bg-[#1a1a1a] text-[#f8f8f6] text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-75 transition-opacity whitespace-nowrap"
        >
          Get Started
        </button>
      </nav>

      {/* HERO */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12 sm:py-0">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#efefed] border border-[#e0e0dc] rounded-full px-3 py-1.5 text-[11px] uppercase tracking-widest text-[#888] mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
          Your second brain
        </div>

        <h1
          className="font-light leading-[1.1] tracking-tight text-[#1a1a1a] w-full max-w-2xl mb-4 px-2"
          style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 8vw, 4.5rem)" }}
        >
          Never lose a great
          <br />
          <em className="not-italic text-[#999]">idea from the web.</em>
        </h1>

        <p
          className="text-[#888] font-light leading-relaxed max-w-xs sm:max-w-sm mb-8 px-2"
          style={{ fontSize: "clamp(13px, 3.5vw, 16px)" }}
        >
          Synapse captures your internet highlights so you can revisit, search, and build on them — effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs sm:max-w-none sm:w-auto">
          <button
            onClick={() => navigate("/signup")}
            className="w-full sm:w-auto bg-[#1a1a1a] text-[#f8f8f6] text-sm font-medium px-7 py-3 rounded-full hover:opacity-80 hover:-translate-y-px transition-all"
          >
            Sign Up Free
          </button>
          <button
            onClick={() => navigate("/signin")}
            className="w-full sm:w-auto bg-transparent text-[#1a1a1a] text-sm border border-[#1a1a1a]/20 px-7 py-3 rounded-full hover:border-[#1a1a1a]/50 hover:-translate-y-px transition-all"
          >
            Log In
          </button>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="shrink-0 flex items-center justify-between px-6 sm:px-10 py-4 border-t border-[#e8e8e4] mt-auto">
        <span className="text-[11px] text-[#bbb]">© 2026 Synapse</span>
        <span className="text-[11px] text-[#bbb]">by Shiv</span>
        <div className="flex items-center gap-4">
          <a href="https://github.com/ichigoat21/synapse" target="_blank" rel="noopener noreferrer" className="text-[#aaa] hover:text-[#1a1a1a] transition-colors flex items-center">
            <GitIcon />
          </a>
          <a href="https://x.com/codegazer" target="_blank" rel="noopener noreferrer" className="text-[#aaa] hover:text-[#1a1a1a] transition-colors flex items-center">
            <TwTicon />
          </a>
        </div>
      </footer>

    </div>
  )
}