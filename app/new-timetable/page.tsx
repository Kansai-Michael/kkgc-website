import type { Metadata } from "next";
import InteractiveTimetable from "@/components/InteractiveTimetable";

export const metadata: Metadata = {
  title: "New Class Timetable | Kansai Karate Gold Coast",
  description:
    "Our new Kansai Karate Gold Coast timetable starts Monday 13 July 2026. Pick your program to see exactly which classes you can attend, then book your spot.",
  alternates: { canonical: "/new-timetable" },
};

const BOOKING_URL = "https://app.kihonsoft.au/book/1st-lesson-bookings";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kansaikarategoldcoast.com.au" },
    { "@type": "ListItem", position: 2, name: "New Timetable" },
  ],
};

export default function NewTimetablePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero / launch banner */}
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#FFB800] text-[#001040] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            New Timetable — Starting Monday 13 July 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our New Class Timetable</h1>
          <p className="text-lg text-white/80">
            With our renovations almost complete and new training spaces opening up, we&apos;re trialling a
            new timetable — more flexibility, more options, and more chances for families to train together.
          </p>
        </div>
      </section>

      {/* Interactive timetable */}
      <section className="py-14 px-4 bg-white">
        <InteractiveTimetable />
      </section>

      {/* Booking */}
      <section className="py-14 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003087] mb-2 text-center">Book Your Free Trial Class</h2>
          <p className="text-gray-500 text-sm mb-8 text-center">
            Select your program, choose a day and time that suits your family, then fill in your details to complete your booking.
          </p>
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
            <iframe
              src={BOOKING_URL}
              width="100%"
              height="700"
              frameBorder="0"
              title="Book your first class at Kansai Karate Gold Coast"
              style={{ display: "block" }}
            />
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            Not sure about booking online? Call us on{" "}
            <a href="tel:0489265960" className="text-[#003087] font-semibold underline hover:text-[#5B7DB1] transition-colors">
              0489 265 960
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
