import Link from "next/link";
import type { Metadata } from "next";
import BookTrialButton from "@/components/BookTrialButton";

export const metadata: Metadata = {
  title: "The Orange Belt Conundrum | Kansai Karate Gold Coast",
  description: "Orange belt is the first real test in karate — and the one most students struggle to get past. Sensei Michael Hunt explains why, and what it really takes.",
  alternates: { canonical: "/the-orange-belt-conundrum" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Orange Belt Conundrum",
  "author": { "@type": "Person", "name": "Michael Hunt" },
  "publisher": {
    "@type": "Organization",
    "name": "Kansai Karate Gold Coast",
    "url": "https://kansaikarategoldcoast.com.au"
  },
  "datePublished": "2021-06-24",
  "dateModified": "2026-01-01",
  "url": "https://kansaikarategoldcoast.com.au/the-orange-belt-conundrum",
  "description": "Orange belt is the first real test in karate — and the one most students struggle to get past."
};

export default function OrangeBeltPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#FFB800] font-semibold uppercase tracking-widest text-sm mb-3">Karate Insights</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Orange Belt Conundrum</h1>
          <p className="text-white/70 text-sm">By Sensei Michael Hunt &mdash; Head Instructor, Kansai Karate Gold Coast</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">

          <div className="prose prose-lg max-w-none text-gray-700">

            <p className="text-xl text-gray-800 font-medium leading-relaxed mb-8">
              The first major roadblock in a student&rsquo;s karate journey is Orange Belt. It&rsquo;s not the only one &mdash; but it&rsquo;s the one that catches most people off guard. And if you want to reach Black Belt, you have to get past it.
            </p>

            <h2 className="text-2xl font-bold text-[#003087] mt-10 mb-4">Why Orange Belt Is Different</h2>
            <p>
              When students start karate, the early belt grades feel achievable. White to yellow, yellow to orange &mdash; the techniques are new and exciting, and progress comes with consistent attendance. Then Orange Belt arrives, and suddenly the bar is higher.
            </p>
            <p>
              At orange belt level, students are no longer just copying movements. They&rsquo;re expected to understand them. The stances need to be correct under pressure. The combinations need to flow. Kata need to be performed with memory, posture, and intent &mdash; not just vaguely followed along.
            </p>
            <p>
              For many students, this is the first time they discover that karate requires something they haven&rsquo;t had to call on before: genuine discipline.
            </p>

            <h2 className="text-2xl font-bold text-[#003087] mt-10 mb-4">The 1-in-1000 Statistic</h2>
            <p>
              It&rsquo;s commonly repeated in karate circles that only 1 in 1000 people who start karate ever achieve Black Belt. I can&rsquo;t verify the exact number &mdash; but it paints an accurate picture. The vast majority of people who begin their journey don&rsquo;t finish it.
            </p>
            <p>
              That&rsquo;s not a failure of those people. It&rsquo;s simply the nature of a pursuit that demands consistent effort over years, not months. Life changes. Priorities shift. Some people get what they came for at white or yellow belt and move on. Others hit the Orange Belt wall and decide it&rsquo;s not for them.
            </p>
            <p>
              The students who do make it to Black Belt share one thing in common: they kept showing up when it was hard.
            </p>

            <h2 className="text-2xl font-bold text-[#003087] mt-10 mb-4">It&rsquo;s Not About the Belt</h2>
            <p>
              Many people start karate for good reasons &mdash; fitness, discipline, self-defence, confidence. All of those are valid. But the students who reach Black Belt are the ones who stopped thinking about the belt and started thinking about becoming better.
            </p>
            <p>
              There&rsquo;s a saying we use at Kansai: you don&rsquo;t &ldquo;get&rdquo; a Black Belt, you &ldquo;become&rdquo; one. The belt is just the evidence of who you&rsquo;ve already become by the time you receive it.
            </p>
            <p>
              Orange Belt is where that shift has to start. Students who are just training to collect the next colour won&rsquo;t make it. Students who are training to genuinely improve &mdash; those are the ones who get through.
            </p>

            <h2 className="text-2xl font-bold text-[#003087] mt-10 mb-4">What Gets Students Through</h2>
            <p>At Kansai Karate Gold Coast, we&rsquo;ve watched hundreds of students navigate this hurdle. The ones who succeed tend to do a few things differently:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>They train between classes.</strong> Five minutes of practice at home, three nights a week, makes a measurable difference by grading day.</li>
              <li><strong>They ask questions.</strong> Instructors want to explain. Students who ask &ldquo;why does my stance look like that?&rdquo; improve faster than students who just repeat the movement.</li>
              <li><strong>They don&rsquo;t skip class when things feel hard.</strong> That&rsquo;s exactly when showing up matters most.</li>
              <li><strong>They understand that grading day is just a snapshot.</strong> It measures the quality of weeks of consistent training, not a single performance under pressure.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#003087] mt-10 mb-4">A Note for Parents</h2>
            <p>
              If your child is approaching orange belt and starting to feel the pressure &mdash; that&rsquo;s normal. That&rsquo;s karate working exactly as it should. The discomfort of being challenged is part of what builds the confidence and resilience that make karate genuinely valuable for kids.
            </p>
            <p>
              The best thing parents can do is encourage consistency without adding extra pressure. &ldquo;I&rsquo;m proud of you for training&rdquo; lands very differently to &ldquo;you need to pass this grading.&rdquo; We&rsquo;ve seen both approaches, and the first one produces better karatekas every time.
            </p>

            <h2 className="text-2xl font-bold text-[#003087] mt-10 mb-4">The Belt System at Kansai Karate Gold Coast</h2>
            <p>
              Our kyu grade progression follows the traditional Shukokai system, from white through to brown, before Dan (black belt) grades. Each grade requires a minimum number of training hours and demonstrated technical competence assessed by qualified instructors.
            </p>
            <p>
              Orange belt sits at the point where students have enough foundation to start experiencing real karate &mdash; and enough self-awareness to understand how much there is still to learn. That combination is uncomfortable. It&rsquo;s also exactly where the real growth starts.
            </p>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-6">Thinking about starting karate, or helping your child get started? The first lesson is free &mdash; no commitment required.</p>
            <BookTrialButton className="bg-[#003087] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#001A52] transition-colors">
              Book a Free First Lesson
            </BookTrialButton>
          </div>

          <div className="mt-10">
            <Link href="/" className="text-[#003087] hover:underline text-sm">&larr; Back to home</Link>
          </div>

        </div>
      </section>
    </>
  );
}
