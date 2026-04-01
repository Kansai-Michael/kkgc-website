import TrialCTA from "@/components/TrialCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Little Lions Program (Ages 5–7) | Kansai Karate Gold Coast",
  description: "Karate classes for 5, 6, and 7 year olds in Upper Coomera. Little Lions builds focus, respect, and real karate foundations in a fun, structured environment.",
};

export default function LittleLionsPage() {
  return (
    <>
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#FFB800] font-semibold uppercase tracking-wider text-sm mb-3">Little Lions Program</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Karate for Ages 5–7</h1>
          <p className="text-xl text-white/80">
            Channel that boundless energy into something meaningful. Little Lions is where kids fall in love with karate — and start building habits that last a lifetime.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#003087] mb-6">What Little Lions Learn</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: "🎯", title: "Focus & Attention", body: "Structured classes that teach kids how to concentrate, listen, and follow through — skills that show up directly at school." },
              { icon: "🥋", title: "Real Karate Technique", body: "Stances, strikes, blocks, and kata. Age-appropriate technique that lays the foundation for everything that follows." },
              { icon: "🤝", title: "Respect & Manners", body: "Bowing in, following instructions, respecting Sensei and classmates. Parents regularly comment on the change at home." },
              { icon: "🏅", title: "Belt Progression", body: "A clear, motivating belt system that keeps kids engaged and gives them real goals to work towards." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-[#003087] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#003087] mb-4">A Typical Class</h2>
          <p className="text-gray-600 mb-6">
            Little Lions classes run for 45 minutes. We open with warm-up games to get energy out, move into structured karate drills and technique work, and close with a focus activity and bow-out. Every class has a clear beginning, middle, and end — which kids this age love.
          </p>

          <h2 className="text-2xl font-bold text-[#003087] mb-4">What Parents Tell Us</h2>
          <blockquote className="border-l-4 border-[#FFB800] pl-4 italic text-gray-600 mb-8">
            &ldquo;Our daughter has been in Little Lions for two years. Her focus at school has improved noticeably. We cannot recommend Kansai Karate enough.&rdquo;
            <footer className="mt-2 text-sm font-semibold text-[#003087] not-italic">— Parent of a Little Lions student</footer>
          </blockquote>
        </div>
      </section>

      <TrialCTA
        heading="Book a Free Little Lions Trial"
        subtext="Let them try a class, meet Sensei, and see what they think. No commitment required."
        program="Little Lions"
      />
    </>
  );
}
