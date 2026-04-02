import Link from "next/link";

interface TrialCTAProps {
  heading?: string;
  subtext?: string;
  program?: string;
}

export default function TrialCTA({
  heading = "Ready to try? Your first class is free.",
  subtext = "No contracts. No pressure. Just come and see if it's right for your family.",
  program,
}: TrialCTAProps) {
  const href = program ? `/contact?program=${encodeURIComponent(program)}` : "/contact";

  return (
    <section className="bg-[#5B7DB1] text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-white/80 text-lg mb-8">{subtext}</p>
        <Link
          href={href}
          className="inline-block bg-[#FFB800] text-[#5B7DB1] font-bold text-lg px-10 py-4 rounded-lg hover:bg-[#E6A500] transition-colors shadow-lg"
        >
          Book Your Free Trial Class
        </Link>
        <p className="mt-4 text-white/50 text-sm">
          Or call us: <a href="tel:0489265960" className="underline hover:text-white">0489 265 960</a>
        </p>
      </div>
    </section>
  );
}
