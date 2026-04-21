import Image from "next/image";
import Link from "next/link";
import BookTrialButton from "@/components/BookTrialButton";

const BADGE_IMG = "/images/KKA-Logo-Trans-background.png";

interface Feature {
  title: string;
  body: string;
}

interface Faq {
  q: string;
  a: string;
}

interface ProgramPageProps {
  name: string;
  slug: string;
  heroImg: string;
  headline: string;
  subheadline: string;
  introText: string;
  benefitsHeading: string;
  benefits: Feature[];
  whyHeading: string;
  whyFeatures: Feature[];
  testimonial?: { text: string; author: string };
  faqs?: Faq[];
  ctaHeading: string;
  ctaText: string;
  secondaryImages: string[];
}

export default function ProgramPage({
  name,
  slug,
  heroImg,
  headline,
  subheadline,
  introText,
  benefitsHeading,
  benefits,
  whyHeading,
  whyFeatures,
  testimonial,
  faqs,
  ctaHeading,
  ctaText,
  secondaryImages,
}: ProgramPageProps) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white py-20 px-4"
        style={{ minHeight: "60vh" }}
      >
        <Image
          src={heroImg}
          alt={`${name} karate program at Kansai Karate Gold Coast`}
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,30,80,0.70)" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[40vh]">
          <Image src={BADGE_IMG} alt="Kansai Karate Academy" width={128} height={128} className="w-24 md:w-32 mb-6" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{headline}</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">{subheadline}</p>
        </div>
      </section>

      {/* Intro + CTA strip */}
      <section className="bg-[#5B7DB1] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{benefitsHeading}</h2>
          <BookTrialButton
            program={slug}
            className="inline-block border-2 border-white text-white font-bold px-10 py-3 hover:bg-white hover:text-[#5B7DB1] transition-colors uppercase tracking-widest text-sm"
          />
        </div>
      </section>

      {/* Intro text */}
      {introText && (
        <section className="bg-white py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-base leading-relaxed">{introText}</p>
          </div>
        </section>
      )}

      {/* Benefits - alternating photo/text sections */}
      {benefits.length > 0 && (
        <>
          {benefits.map((b, i) => {
            const isBlue = i % 2 === 1;
            return (
              <section key={b.title} style={isBlue ? { background: "#5B7DB1" } : undefined} className={isBlue ? "" : "bg-white"}>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center py-14 px-4">
                  {i % 2 === 0 ? (
                    <>
                      <div className="relative rounded-lg overflow-hidden aspect-[4/5]" style={{ backgroundColor: "#e5e7eb" }}>
                        {secondaryImages[i] && <Image src={secondaryImages[i]} alt="" fill style={{ objectFit: "cover" }} />}
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{b.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{b.body}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">{b.title}</h3>
                        <p className="text-white/80 leading-relaxed">{b.body}</p>
                      </div>
                      <div className="relative rounded-lg overflow-hidden aspect-[4/5]" style={{ backgroundColor: "#4A6DA0" }}>
                        {secondaryImages[i] && <Image src={secondaryImages[i]} alt="" fill style={{ objectFit: "cover" }} />}
                      </div>
                    </>
                  )}
                </div>
              </section>
            );
          })}
        </>
      )}

      {/* Mid CTA */}
      <section className="bg-[#5B7DB1] text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">Ready to get started with {name}?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookTrialButton
              program={slug}
              className="inline-block border-2 border-white text-white font-bold px-10 py-3 hover:bg-white hover:text-[#5B7DB1] transition-colors uppercase tracking-widest text-sm"
            />
            <Link
              href={`/programs/${slug}/timetable`}
              className="text-white/70 underline text-sm hover:text-white transition-colors"
            >
              View class timetable →
            </Link>
          </div>
        </div>
      </section>

      {/* Why section - 4 features */}
      {whyFeatures.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">{whyHeading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {whyFeatures.map((f) => (
                <div key={f.title} className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-[#5B7DB1] text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {testimonial && (
        <section className="py-16 px-4" style={{ background: "#4A6DA0" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-6">What Parents Say</h2>
            <blockquote className="text-white/80 text-lg italic leading-relaxed mb-4">
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>
            <p className="text-[#FFB800] font-semibold">— {testimonial.author}</p>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-gray-200 pb-6">
                  <h3 className="font-bold text-[#5B7DB1] mb-2">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section
        className="relative py-20 px-4 text-white"
      >
        <Image src={heroImg} alt="" fill aria-hidden="true" style={{ objectFit: "cover", objectPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "rgba(10,30,80,0.85)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{ctaHeading}</h2>
          <p className="text-white/70 text-lg mb-8">{ctaText}</p>
          <BookTrialButton
            program={slug}
            className="inline-block bg-[#FFB800] text-[#001040] font-bold text-lg px-10 py-4 rounded-lg hover:bg-[#E6A500] transition-colors uppercase tracking-widest"
          />
          <p className="mt-4 text-white/40 text-sm">
            Kansai Karate · Upper Coomera, QLD 4209
          </p>
        </div>
      </section>
    </>
  );
}
