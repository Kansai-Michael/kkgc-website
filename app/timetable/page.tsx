import type { Metadata } from "next";
import InteractiveTimetable from "@/components/InteractiveTimetable";

export const metadata: Metadata = {
  title: "Class Timetable | Kansai Karate Gold Coast",
  description:
    "The Kansai Karate Gold Coast class timetable. Pick your program and belt level to see exactly which classes you can attend — Monday to Thursday afternoons and Saturday mornings.",
  alternates: { canonical: "/timetable" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kansaikarategoldcoast.com.au" },
    { "@type": "ListItem", position: 2, name: "Timetable" },
  ],
};

export default function TimetablePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Class Timetable</h1>
          <p className="text-lg text-white/80">
            Pick your program and belt level to see exactly which classes you can attend. Classes run
            Monday–Thursday afternoons and Saturday mornings — find a time that fits your family.
          </p>
        </div>
      </section>

      {/* Interactive timetable */}
      <section className="py-14 px-4 bg-white">
        <InteractiveTimetable />
      </section>
    </>
  );
}
