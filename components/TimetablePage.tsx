import Link from "next/link";

const OLD = "https://kansaikarategoldcoast.com.au/wp-content/uploads/sites/27/2025/02";
const BADGE_IMG = `${OLD}/KKA-Logo-Trans-background.png`;

interface TimetablePageProps {
  name: string;
  slug: string;
  heroImg: string;
  headline: string;
  subheadline: string;
}

export default function TimetablePage({ name, slug, heroImg, headline, subheadline }: TimetablePageProps) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white py-16 px-4"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "50vh",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,30,80,0.75)" }} />
        <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[40vh]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={BADGE_IMG} alt="Kansai Karate Academy" className="w-24 mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{headline}</h1>
            <p className="text-white/80 text-lg mb-6">{subheadline}</p>
            <Link
              href={`/contact?program=${slug}`}
              className="inline-block bg-[#FFB800] text-[#5B7DB1] font-bold px-8 py-3 rounded-lg hover:bg-[#E6A500] transition-colors uppercase tracking-widest text-sm"
            >
              Book a FREE First Lesson
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-xl font-bold text-[#FFB800] mb-4 uppercase">Current Class Schedule</h2>
            <p className="text-white/70 text-sm">
              Class schedule information will be added here once Kihon CRM integration is complete.
            </p>
            <p className="text-white/50 text-xs mt-4">
              Contact us on <a href="tel:0489265960" className="text-[#FFB800]">0489 265 960</a> for current class times.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#5B7DB1] text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">Ready to get started with {name}?</h2>
          <Link
            href={`/contact?program=${slug}`}
            className="inline-block border-2 border-white text-white font-bold px-10 py-3 hover:bg-white hover:text-[#5B7DB1] transition-colors uppercase tracking-widest text-sm"
          >
            Book a FREE First Lesson
          </Link>
          <p className="mt-4 text-white/50 text-sm">
            Kansai Karate · Upper Coomera, QLD 4209
          </p>
        </div>
      </section>
    </>
  );
}
