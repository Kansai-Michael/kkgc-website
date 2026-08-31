import Link from "next/link";

const OLD_43 = "/images";
const HERO_IMG = `${OLD_43}/kansai-homeheader.webp`;

export const metadata = {
  title: "Link Expired | Kansai Karate Gold Coast",
  description: "This link came from an older email and no longer works.",
  robots: { index: false, follow: false },
};

/**
 * Landing page for old email links.
 *
 * Until August 2026 our email provider rewrote every link in outbound email to run
 * through email.kansaikarategoldcoast.com.au for click tracking. That host had no
 * valid certificate of its own, so browsers showed families a full-page "attackers
 * might be trying to steal your information" warning instead of the page they wanted.
 *
 * Tracking is off now, but those rewritten links are baked into every email already
 * sitting in people's inboxes. The subdomain points here instead so the certificate is
 * valid and the warning is gone. The original destination is encoded in an opaque blob
 * we can't decode, so everyone lands on this one page — hence the signposts below
 * rather than a redirect.
 *
 * See next.config.ts for the host-based redirect that routes traffic here.
 */
export default function LinkExpiredPage() {
  return (
    <section
      className="relative flex items-center justify-center text-white"
      style={{
        minHeight: "calc(100vh - 64px)",
        backgroundImage: `url(${HERO_IMG})`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(10,30,80,0.72)" }} />
      <div className="relative z-10 px-6 py-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">This link has expired</h1>
        <p className="text-lg md:text-xl text-white/90 mb-4 leading-snug">
          You&rsquo;ve clicked a link from one of our older emails. Those links no longer work &mdash;
          nothing is wrong with your device, and your details are safe.
        </p>
        <p className="text-white/80 mb-10">Here&rsquo;s where you were probably headed:</p>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Link
            href="/timetable"
            className="inline-block bg-[#FFB800] text-[#0A1E50] font-bold px-8 py-3 hover:bg-white transition-colors uppercase tracking-widest text-sm text-center"
          >
            Class Timetable
          </Link>
          <a
            href="https://app.kihonsoft.au/family-portal/login"
            className="inline-block border-2 border-white text-white font-bold px-8 py-3 hover:bg-white hover:text-[#0A1E50] transition-colors uppercase tracking-widest text-sm text-center"
          >
            Family Portal
          </a>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white font-bold px-8 py-3 hover:bg-white hover:text-[#0A1E50] transition-colors uppercase tracking-widest text-sm text-center"
          >
            Contact Us
          </Link>
        </div>

        <p className="text-white/70 text-sm mb-2">
          Fees, invoices and attendance all live in the Family Portal.
        </p>
        <p className="text-white/70 text-sm mb-2">
          If you were trying to <strong className="text-white/90">unsubscribe</strong>, just reply to
          the email or get in touch and we&rsquo;ll take you off the list straight away.
        </p>
        <p className="text-white/70 text-sm">
          Still stuck? Call{" "}
          <a href="tel:0489265960" className="text-[#FFB800] hover:underline font-semibold">
            0489 265 960
          </a>
        </p>
      </div>
    </section>
  );
}
