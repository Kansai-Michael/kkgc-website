import Link from "next/link";
import IframeEscape from "@/components/IframeEscape";
import MetaPixelEvent from "@/components/MetaPixelEvent";

const OLD_43 = "/images";
const HERO_IMG = `${OLD_43}/kansai-homeheader.webp`;

export const metadata = {
  title: "You're In! | Kansai Karate Gold Coast",
  description: "Thanks for booking your free trial class at Kansai Karate Gold Coast.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <IframeEscape />
      <MetaPixelEvent event="Lead" />
      <MetaPixelEvent event="CompleteRegistration" />
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
      <div className="relative z-10 px-6 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-5">You&rsquo;re in!</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4 leading-snug">
          We&rsquo;ll contact you ASAP to be sure you&rsquo;re ready for your first visit. We&rsquo;re excited to meet you!
        </p>
        <p className="text-white/70 mb-10">
          Have questions before you meet us? Call{" "}
          <a href="tel:0489265960" className="text-[#FFB800] hover:underline font-semibold">
            0489 265 960
          </a>
        </p>
        <Link
          href="/"
          className="inline-block border-2 border-white text-white font-bold px-8 py-3 hover:bg-white hover:text-[#5B7DB1] transition-colors uppercase tracking-widest text-sm"
        >
          Back to Home
        </Link>
      </div>
    </section>
    </>
  );
}
