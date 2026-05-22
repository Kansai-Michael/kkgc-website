import Link from "next/link";
import type { Metadata } from "next";
import BookTrialButton from "@/components/BookTrialButton";

export const metadata: Metadata = {
  title: "Bully Buster — Kids Self-Defence Workshop | Kansai Karate Gold Coast",
  description: "Help your child become bully-proof. Our Bully Buster workshop teaches kids real self-defence foundations and the confidence to handle whatever comes their way. Upper Coomera, Gold Coast.",
  alternates: { canonical: "/bullybuster" },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Bully Buster — Kids Self-Defence Workshop",
  "description": "A hands-on self-defence workshop for kids that teaches bully-proof techniques, builds confidence, and gives children the tools to handle bullying situations.",
  "provider": {
    "@type": "SportsActivityLocation",
    "name": "Kansai Karate Gold Coast",
    "url": "https://kansaikarategoldcoast.com.au",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 3 / 2 Sierra Place",
      "addressLocality": "Upper Coomera",
      "addressRegion": "QLD",
      "postalCode": "4209",
      "addressCountry": "AU"
    }
  },
  "courseMode": "onsite",
  "educationalLevel": "children",
  "url": "https://kansaikarategoldcoast.com.au/bullybuster"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What age is the Bully Buster workshop for?",
      "acceptedAnswer": { "@type": "Answer", "text": "The workshop is suitable for children aged 5 to 12. Kids work in age-appropriate groups so the content is always relevant to them." }
    },
    {
      "@type": "Question",
      "name": "Do kids need any karate experience?",
      "acceptedAnswer": { "@type": "Answer", "text": "No experience needed. The workshop is designed for complete beginners. No uniform, no equipment — just comfortable clothes and enclosed shoes." }
    },
    {
      "@type": "Question",
      "name": "Can parents stay and watch?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes — parents are encouraged to attend and watch. We actually find that kids perform better when their parents can see how capable they are." }
    },
    {
      "@type": "Question",
      "name": "Where is the workshop held?",
      "acceptedAnswer": { "@type": "Answer", "text": "At our dojo: Unit 3 / 2 Sierra Place, Upper Coomera QLD 4209. Plenty of parking available." }
    }
  ]
};

export default function BullyBusterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#003087] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#FFB800] font-semibold uppercase tracking-widest text-sm mb-4">Kids Self-Defence Workshop</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Help Your Child Become<br className="hidden md:block" /> Bully-Proof
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
            Our Bully Buster workshop teaches kids real self-defence foundations, confidence, and the tools to handle whatever comes their way &mdash; in just one session.
          </p>
          <BookTrialButton
            program="Bully Buster Workshop"
            className="bg-[#FFB800] text-[#003087] font-bold px-10 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg"
          >
            Register Your Child&rsquo;s Interest
          </BookTrialButton>
        </div>
      </section>

      {/* What they get */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#003087] mb-8 text-center">What Your Child Gets</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🥋", title: "Real self-defence techniques", body: "Practical, age-appropriate techniques taught by qualified instructors — things that actually work." },
              { icon: "💪", title: "Confidence that lasts", body: "Kids leave feeling capable. That shift in how they carry themselves is visible from the very first session." },
              { icon: "🛡️", title: "Bully-proof foundations", body: "We teach kids how to recognise bullying situations and respond — verbally and physically — in a calm, controlled way." },
              { icon: "👨‍👩‍👧", title: "Parents welcome", body: "You&rsquo;re invited to stay and watch. We want you to see exactly what your child is learning and why it works." },
            ].map(item => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the workshop */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#003087] mb-6">About the Workshop</h2>
          <p className="text-gray-700 mb-4 text-lg">
            The Bully Buster workshop is a 1.5-hour hands-on session run by Kansai Karate&rsquo;s qualified instructors. It&rsquo;s designed to give kids &mdash; especially those who have experienced or are worried about bullying &mdash; real tools they can use.
          </p>
          <p className="text-gray-700 mb-4">
            We don&rsquo;t teach kids to fight. We teach them to feel safe. There&rsquo;s a big difference. A child who knows they can handle a situation is far less likely to be targeted in the first place &mdash; confidence is the best deterrent.
          </p>
          <p className="text-gray-700 mb-8">
            No experience needed. No uniform. Just bring your child in comfortable clothes and enclosed shoes.
          </p>

          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
            <h3 className="font-bold text-[#003087] text-lg mb-4">Workshop Details</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex gap-3"><span className="font-semibold w-28 flex-shrink-0">Duration</span><span>1.5 hours</span></div>
              <div className="flex gap-3"><span className="font-semibold w-28 flex-shrink-0">Ages</span><span>5 to 12 years</span></div>
              <div className="flex gap-3"><span className="font-semibold w-28 flex-shrink-0">Experience</span><span>No experience required</span></div>
              <div className="flex gap-3"><span className="font-semibold w-28 flex-shrink-0">Location</span><span>Unit 3 / 2 Sierra Place, Upper Coomera QLD 4209</span></div>
              <div className="flex gap-3"><span className="font-semibold w-28 flex-shrink-0">Cost</span><span>FREE</span></div>
              <div className="flex gap-3"><span className="font-semibold w-28 flex-shrink-0">Places</span><span>Limited — register to secure your child&rsquo;s spot</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#003087] mb-6">Your Instructor</h2>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-1">Sensei Michael Hunt</h3>
            <p className="text-[#003087] font-semibold mb-3">5th Dan Black Belt &mdash; Head Instructor</p>
            <p className="text-gray-600 mb-3">
              Sensei Michael has been training in Shito-ryu Shukokai Karate for over 25 years and has been teaching karate since 2008. He holds teaching qualifications from Sensei Yamada Soke &mdash; World Chief Instructor of the Shito-ryu Shukokai Union &mdash; and a Bronze Coaching Certification from the Australian Sports Commission.
            </p>
            <p className="text-gray-600">
              He is a qualified National Kata Judge and Kumite Judge through the Queensland Karate Association (QKA) and Australian Karate Federation (AKF), and has been running the Gold Coast dojo at Upper Coomera since 2013.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#003087] mb-8">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: "What age is the workshop for?", a: "Kids aged 5 to 12. We work in age-appropriate groups so the content is always relevant." },
              { q: "Do they need any karate experience?", a: "None at all. The workshop is designed for complete beginners. No uniform or equipment needed — just comfortable clothes and enclosed shoes." },
              { q: "Can parents stay and watch?", a: "Yes — parents are encouraged to attend and watch. We find kids actually perform better when they can show their parents what they're capable of." },
              { q: "Is it really free?", a: "Yes. The workshop is free and there's no obligation to enrol in classes afterwards — though many families do, because their kids ask to come back." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-800 mb-2">{q}</h3>
                <p className="text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#003087] text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Register Your Child&rsquo;s Interest</h2>
          <p className="text-white/80 mb-8">Places are limited. Submit your details and we&rsquo;ll contact you with the next available date.</p>
          <BookTrialButton
            program="Bully Buster Workshop"
            className="bg-[#FFB800] text-[#003087] font-bold px-10 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg"
          >
            Register Now — It&rsquo;s Free
          </BookTrialButton>
          <p className="text-white/50 text-sm mt-4">No commitment. No uniform required.</p>
        </div>
      </section>

      <div className="py-6 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-[#003087] hover:underline text-sm">&larr; Back to home</Link>
        </div>
      </div>
    </>
  );
}
