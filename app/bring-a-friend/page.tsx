import type { Metadata } from "next";
import Link from "next/link";
import BringAFriendForm from "./BringAFriendForm";

export const metadata: Metadata = {
  title: "Bring a Friend | Free First Lesson | Kansai Karate Gold Coast",
  description:
    "Been referred by a Kansai Karate student? Book your free first lesson at our Upper Coomera dojo. No lock-in contracts.",
  robots: { index: false, follow: false },
};

export default function BringAFriendPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Minimal header */}
      <header className="bg-[var(--kkgc-blue)] py-4 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white font-bold text-xl">
            Kansai Karate Gold Coast
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[var(--kkgc-blue)] text-white pb-16 pt-10 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[var(--kkgc-yellow)] font-semibold uppercase tracking-widest text-sm mb-3">
            Student Referral
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bring a Friend to Kansai Karate
          </h1>
          <p className="text-lg text-blue-100">
            A friend told you about us — that means a lot. Fill in your details
            below and we&apos;ll get you booked in for a{" "}
            <strong className="text-white">free first lesson</strong>.
          </p>
        </div>
      </section>

      {/* Form card */}
      <section className="px-6 -mt-6 pb-20">
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Book Your Free First Lesson
          </h2>

          <BringAFriendForm />

          <p className="text-center text-sm text-gray-500 mt-5">
            Questions? Call us on{" "}
            <a
              href="tel:0489265960"
              className="text-[var(--kkgc-blue)] font-medium"
            >
              0489 265 960
            </a>
          </p>
        </div>
      </section>

      {/* Trust footer */}
      <section className="bg-[var(--kkgc-blue)] text-white py-8 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-1">
          <p className="font-semibold">Kansai Karate Gold Coast</p>
          <p className="text-blue-200 text-sm">
            Unit 3 / 2 Sierra Place, Upper Coomera QLD 4209
          </p>
          <p className="text-blue-200 text-sm">
            Traditional Japanese Karate · No Lock-In Contracts · 5-Star Dojo
          </p>
        </div>
      </section>
    </div>
  );
}
