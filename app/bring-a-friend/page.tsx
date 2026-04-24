import type { Metadata } from "next";
import Link from "next/link";
import BringAFriendForm from "./BringAFriendForm";

export const metadata: Metadata = {
  title: "Bring a Friend | Free First Lesson | Kansai Karate Gold Coast",
  description:
    "Been referred by a Kansai Karate student? Book your free first lesson at our Upper Coomera dojo. No lock-in contracts.",
  robots: { index: false, follow: false },
};

const steps = [
  {
    n: 1,
    title: "Share the Link",
    desc: "An existing Kansai Karate student shares this page with a friend or family member who's keen to try karate.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
        <polyline points="16 6 12 2 8 6"/>
        <line x1="12" y1="2" x2="12" y2="15"/>
      </svg>
    ),
  },
  {
    n: 2,
    title: "Book a Free Lesson",
    desc: "The referred friend fills in the form below to book their complimentary first class — no commitment required.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    n: 3,
    title: "They Sign Up",
    desc: "If your friend loves it and joins Kansai Karate, the reward is automatically unlocked for both of you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    n: 4,
    title: "Both Train Free",
    desc: "You get 2 weeks free training. Your friend gets 2 weeks free training. Everyone wins on the mat.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

export default function BringAFriendPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0a0c10", color: "#d8dde8" }}>

      {/* Nav */}
      <nav style={{ background: "#0a0c10", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        className="px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="text-white font-bold text-lg tracking-wide">
          Kansai Karate Gold Coast
        </Link>
        <a
          href="#book"
          className="text-white text-sm font-bold px-5 py-2 rounded"
          style={{ background: "#1F4EA1", letterSpacing: "0.06em" }}
        >
          Book Free Lesson →
        </a>
      </nav>

      {/* Hero */}
      <section
        className="relative px-6 py-24 text-center overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0e1526 0%, #163880 50%, #1F4EA1 100%)" }}
      >
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "#7fa8e8" }}>
            Gold Coast Referral Program
          </p>
          <h1 className="font-black text-white leading-tight mb-6" style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", fontFamily: "sans-serif", letterSpacing: "-0.01em" }}>
            Bring a Friend.{" "}
            <span style={{ color: "#D4A017" }}>Train Free.</span>
          </h1>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.75)", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Know someone who&apos;d love karate? Send them our way.
            <br />
            When they sign up,{" "}
            <strong className="text-white">you both get 2 weeks of free training</strong> — on us.
          </p>
          <a
            href="#book"
            className="inline-block text-white font-bold py-4 px-12 rounded"
            style={{ background: "#1F4EA1", fontSize: "1rem", letterSpacing: "0.08em", boxShadow: "0 4px 28px rgba(31,78,161,0.45)" }}
          >
            Claim Your Free Lesson
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20" style={{ background: "#12161f" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#7fa8e8" }}>
            Simple as that
          </p>
          <h2 className="text-center text-white font-black text-4xl mb-12" style={{ letterSpacing: "0.01em" }}>
            How It Works
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-xl p-6 relative"
                style={{ background: "#1c2130", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span
                  className="absolute top-4 right-4 font-black text-2xl"
                  style={{ color: "rgba(255,255,255,0.07)", fontFamily: "sans-serif" }}
                >
                  {s.n}
                </span>
                <div className="mb-4" style={{ color: "#7fa8e8" }}>{s.icon}</div>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section className="px-6 py-20" style={{ background: "#0a0c10" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#7fa8e8" }}>
            Your reward
          </p>
          <h2 className="text-center text-white font-black text-4xl mb-10" style={{ letterSpacing: "0.01em" }}>
            What You Both Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Referring student */}
            <div
              className="rounded-xl p-10"
              style={{ background: "linear-gradient(135deg, #163880 0%, #1F4EA1 100%)" }}
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                You — the referring student
              </p>
              <p className="font-black text-white leading-none mb-4" style={{ fontSize: "4rem", letterSpacing: "-0.02em" }}>
                2<br/>
                <span className="text-3xl">WEEKS</span><br/>
                <span className="text-3xl">FREE</span>
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                Two full weeks of training added to your membership — applied when your friend signs up.
              </p>
            </div>
            {/* New student */}
            <div
              className="rounded-xl p-10"
              style={{ background: "#0e1526", border: "1px solid rgba(31,78,161,0.35)" }}
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                Your friend — the new student
              </p>
              <p className="font-black leading-none mb-4" style={{ fontSize: "4rem", letterSpacing: "-0.02em", color: "#7fa8e8" }}>
                2<br/>
                <span className="text-3xl">WEEKS</span><br/>
                <span className="text-3xl">FREE</span>
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                Two full weeks of training included with their new membership, plus a free first lesson to get started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="book" className="px-6 py-20" style={{ background: "#12161f" }}>
        <div className="max-w-lg mx-auto">
          <p className="text-center text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#7fa8e8" }}>
            Student Referral
          </p>
          <h2 className="text-center text-white font-black text-4xl mb-3" style={{ letterSpacing: "0.01em" }}>
            Book Your Free Lesson
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
            Fill in your details and we&apos;ll get you booked in for a free first class — no commitment required.
          </p>

          <div className="rounded-xl overflow-hidden" style={{ background: "#1c2130", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="px-8 pt-8 pb-6">
              <BringAFriendForm dark />
            </div>
            <div className="px-8 pb-8 text-center">
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                Questions? Call{" "}
                <a href="tel:0489265960" className="text-white font-medium">
                  0489 265 960
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 text-center" style={{ background: "#0a0c10", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="font-bold text-white mb-1">Kansai Karate Gold Coast</p>
        <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
          Unit 3 / 2 Sierra Place, Upper Coomera QLD 4209
        </p>
        <p className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>
          <a href="tel:0489265960" className="hover:text-white transition-colors">0489 265 960</a>
          {" · "}
          <a href="mailto:info@kansaikarategoldcoast.com.au" className="hover:text-white transition-colors">info@kansaikarategoldcoast.com.au</a>
        </p>
        <Link href="/" className="text-sm" style={{ color: "#7fa8e8" }}>
          ← Back to main website
        </Link>
      </footer>

    </div>
  );
}
