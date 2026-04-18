import TrialCTA from "@/components/TrialCTA";
import type { Metadata } from "next";
import { Dumbbell, Brain, ShieldCheck, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Teens & Adults Karate (Ages 13+) | Kansai Karate Gold Coast",
  description: "Adult karate classes in Upper Coomera. Traditional Shitoryu Shukokai karate for teens and adults. Fitness, self-defence, and a genuine community. Book your free trial.",
};

export default function TeensAdultsPage() {
  return (
    <>
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#FFB800] font-semibold uppercase tracking-wider text-sm mb-3">Teens & Adults Program</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Karate for Ages 13+</h1>
          <p className="text-xl text-white/80">
            No experience needed. No fitness level required. Just show up and start. Adults who train at Kansai Karate stay for years — because it works, and because the community is worth coming back to.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003087] mb-6">Why Adults Choose Kansai Karate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: <Dumbbell className="w-7 h-7 text-[#003087] flex-shrink-0" />, title: "Real Fitness", body: "Cardiovascular fitness, strength, flexibility, and coordination. A full-body workout that never gets boring because you are always learning something." },
              { icon: <Brain className="w-7 h-7 text-[#003087] flex-shrink-0" />, title: "Mental Clarity", body: "An hour of karate clears your head like nothing else. Training is a break from everything — fully present, fully focused." },
              { icon: <ShieldCheck className="w-7 h-7 text-[#003087] flex-shrink-0" />, title: "Practical Self-Defence", body: "Traditional karate contains highly effective self-defence principles. You will learn skills that build real confidence." },
              { icon: <HeartHandshake className="w-7 h-7 text-[#003087] flex-shrink-0" />, title: "Genuine Community", body: "Adult students at Kansai Karate form real friendships. Training side-by-side through shared challenge creates bonds that last." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
                {item.icon}
                <div>
                  <h3 className="font-bold text-[#003087] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#003087] mb-4">Common Questions</h2>
          <div className="space-y-4 mb-8">
            {[
              { q: "I have never done martial arts. Can I still start?", a: "Absolutely. Most adult students start with zero experience. You will be placed with other beginners and progress at your own pace." },
              { q: "I am not very fit. Will I manage?", a: "Fitness improves through training, not before it. Start where you are. Everyone does." },
              { q: "Is this full-contact fighting?", a: "No. Kansai Karate is traditional karate — controlled, disciplined, and focused on technique. Sparring is introduced gradually and safely." },
              { q: "What is the time commitment?", a: "Most students train 2–3 times per week. You choose the sessions that fit your schedule." },
            ].map((item) => (
              <details key={item.q} className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-[#003087] cursor-pointer">{item.q}</summary>
                <p className="mt-3 text-gray-600 text-sm">{item.a}</p>
              </details>
            ))}
          </div>

          <blockquote className="border-l-4 border-[#FFB800] pl-4 italic text-gray-600">
            &ldquo;I started as a complete beginner at 38. Six months in and I am fitter than I have been in years. Great community, great instructors.&rdquo;
            <footer className="mt-2 text-sm font-semibold text-[#003087] not-italic">— Adult student</footer>
          </blockquote>
        </div>
      </section>

      <TrialCTA
        heading="Book Your Free Adult Trial Class"
        subtext="One class. No commitment. See for yourself why people keep coming back."
        program="Teens & Adults"
      />
    </>
  );
}
