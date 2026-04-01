import TrialCTA from "@/components/TrialCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cubs Program (Ages 3–4) | Kansai Karate Gold Coast",
  description: "Karate classes for 3 and 4 year olds in Upper Coomera. Our Cubs program builds listening skills, coordination, and confidence through fun, structured movement.",
};

export default function CubsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#FFB800] font-semibold uppercase tracking-wider text-sm mb-3">Cubs Program</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Karate for Ages 3–4</h1>
          <p className="text-xl text-white/80">
            Short, high-energy classes built for little ones. Your 3 or 4-year-old will love it — and you will see real development from week one.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003087] mb-6">What to Expect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: "👂", title: "Listening Skills", body: "Following instructions in a safe, fun environment. A foundation for everything else — school, sport, life." },
              { icon: "🎯", title: "Coordination & Balance", body: "Age-appropriate movement that challenges little bodies in exactly the right way." },
              { icon: "😊", title: "Confidence Building", body: "Every child progresses at their own pace. We celebrate every win, no matter how small." },
              { icon: "🏅", title: "First Belt Milestones", body: "Cubs earn their first belt, which means the world to a 3 or 4-year-old. Proud parents. Proud kids." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-[#003087] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#003087] mb-4">Class Format</h2>
          <p className="text-gray-600 mb-6">
            Classes are 30 minutes long — the perfect attention span for this age group. Small class sizes mean every child gets individual attention from Sensei. Sessions are structured but playful, mixing karate basics with games and movement activities.
          </p>

          <h2 className="text-2xl font-bold text-[#003087] mb-4">Is My Child Ready?</h2>
          <p className="text-gray-600 mb-3">Your child is ready for Cubs if they:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-8">
            <li>Are aged 3–4</li>
            <li>Can follow simple instructions (most of the time!)</li>
            <li>Are curious about movement and activity</li>
            <li>Would benefit from structured time away from screens</li>
          </ul>
          <p className="text-gray-600">Not sure? Book a free trial class and see for yourself. There is no commitment required.</p>
        </div>
      </section>

      <TrialCTA
        heading="Book a Free Cubs Trial Class"
        subtext="Come and see how your little one goes. No cost, no commitment — just 30 minutes of fun."
        program="Cubs"
      />
    </>
  );
}
