import TrialCTA from "@/components/TrialCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juniors Program (Ages 8–12) | Kansai Karate Gold Coast",
  description: "Karate classes for 8–12 year olds in Upper Coomera. Juniors builds discipline, resilience, and technical karate skills in a structured, encouraging environment.",
};

export default function JuniorsPage() {
  return (
    <>
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#FFB800] font-semibold uppercase tracking-wider text-sm mb-3">Juniors Program</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Karate for Ages 8–12</h1>
          <p className="text-xl text-white/80">
            Real technique. Real challenge. Real growth. The Juniors program is where kids discover what they are actually capable of.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003087] mb-6">What Makes Juniors Different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: "🧠", title: "Mental Toughness", body: "Learning to push through difficulty, handle setbacks, and keep going. Skills that transfer directly to school, sport, and life." },
              { icon: "🥋", title: "Technical Depth", body: "Kata, kumite, and conditioning. Students at this age can absorb real technique and start to develop their own karate style." },
              { icon: "🏆", title: "Grading & Competition", body: "Clear belt milestones and the option to enter regional and state competitions through our QKA and AKF affiliations." },
              { icon: "👥", title: "Positive Peer Group", body: "Training alongside other motivated kids creates friendships built on shared challenge — a very different dynamic to school friendships." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-[#003087] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#003087] mb-4">Beginner and Intermediate/Advanced</h2>
          <p className="text-gray-600 mb-6">
            We run separate beginner and intermediate/advanced classes for this age group, so nobody feels out of their depth and nobody is held back. Your child will be placed in the right class from day one.
          </p>

          <h2 className="text-2xl font-bold text-[#003087] mb-4">Tournament Squad</h2>
          <p className="text-gray-600 mb-8">
            Juniors who want to compete can join the Tournament Squad — additional training focused on competition performance. Ask Sensei about eligibility after your trial class.
          </p>
        </div>
      </section>

      <TrialCTA
        heading="Book a Free Juniors Trial"
        subtext="Come in, try a class, and see if it clicks. We think it will."
        program="Juniors"
      />
    </>
  );
}
