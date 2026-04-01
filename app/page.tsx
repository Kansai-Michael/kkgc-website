import Link from "next/link";
import TrialCTA from "@/components/TrialCTA";

const programs = [
  {
    name: "Cubs",
    age: "Ages 3–4",
    href: "/programs/cubs",
    color: "bg-yellow-50 border-yellow-300",
    icon: "🐯",
    tagline: "First steps in focus and fun",
    description: "Short, high-energy classes designed for little ones. Builds listening skills, coordination, and confidence in a safe, nurturing environment.",
  },
  {
    name: "Little Lions",
    age: "Ages 5–7",
    href: "/programs/little-lions",
    color: "bg-blue-50 border-blue-300",
    icon: "🦁",
    tagline: "Where big skills begin",
    description: "Structured classes that channel boundless energy into focus, respect, and the foundations of real karate technique.",
  },
  {
    name: "Juniors",
    age: "Ages 8–12",
    href: "/programs/juniors",
    color: "bg-green-50 border-green-300",
    icon: "⭐",
    tagline: "Build character under pressure",
    description: "Technical karate training that builds resilience, self-discipline, and mental toughness — skills that transfer directly to school and life.",
  },
  {
    name: "Teens & Adults",
    age: "Ages 13+",
    href: "/programs/teens-adults",
    color: "bg-purple-50 border-purple-300",
    icon: "🥋",
    tagline: "Fitness, focus, and real self-defence",
    description: "A full-body workout that also trains your mind. Learn authentic karate in a welcoming community of adults who show up for themselves.",
  },
];

const pillars = [
  {
    icon: "📅",
    title: "Fits Real Family Schedules",
    body: "Mon–Thu afternoons and Saturday mornings. Convenient class times so karate fits your life — not the other way around.",
  },
  {
    icon: "🤝",
    title: "Positive Community",
    body: "No cliques. No cool-kids club. Every student is welcomed and supported. Our culture is one of the things families love most.",
  },
  {
    icon: "🧠",
    title: "Values-Based Training",
    body: "Traditional Shitoryu Shukokai karate teaches more than kicks and punches. Students learn respect, discipline, and self-control.",
  },
  {
    icon: "💪",
    title: "Real Physical Development",
    body: "Flexibility, agility, strength, and coordination. Whether your child is sporty or not, they will surprise themselves.",
  },
];

const testimonials = [
  {
    text: "My son went from refusing to try anything new to earning his first belt in three months. The instructors are incredible with kids.",
    author: "Parent of a Junior student",
  },
  {
    text: "I started as a complete beginner at 38. Six months in and I am fitter than I have been in years. Great community, great instructors.",
    author: "Adult student",
  },
  {
    text: "Our daughter has been in Little Lions for two years. Her focus at school has improved noticeably. We cannot recommend it enough.",
    author: "Parent of a Little Lions student",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#003087] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#FFB800] font-semibold uppercase tracking-wider text-sm mb-4">
            Upper Coomera QLD · Traditional Japanese Karate
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            The Karate School<br />
            <span className="text-[#FFB800]">Upper Coomera Families</span><br />
            Keep Coming Back To
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Cubs through to Adults. Traditional Shitoryu Shukokai karate in a warm, family-focused dojo. 188+ students and growing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#FFB800] text-[#003087] font-bold text-lg px-10 py-4 rounded-lg hover:bg-[#E6A500] transition-colors shadow-lg"
            >
              Book Your Free Trial Class
            </Link>
            <Link
              href="#programs"
              className="border-2 border-white text-white font-semibold text-lg px-10 py-4 rounded-lg hover:bg-white hover:text-[#003087] transition-colors"
            >
              See Our Programs
            </Link>
          </div>
          <p className="mt-6 text-white/50 text-sm">No contracts · No pressure · First class is free</p>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#001A52] text-white/80 text-sm py-3 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-center">
          <span>⭐ 188+ Active Students</span>
          <span>📍 Upper Coomera, QLD 4209</span>
          <span>🥋 Ages 3 to Adults</span>
          <span>🏆 Affiliated: QKA · AKF</span>
          <span>👨‍🏫 Sensei Michael Hunt (4th Dan)</span>
        </div>
      </div>

      {/* Programs */}
      <section id="programs" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003087] mb-4">Find the Right Program</h2>
            <p className="text-gray-600 text-lg">Every age group has its own dedicated class — designed for where they are, not a one-size-fits-all approach.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className={`block border-2 rounded-xl p-6 hover:shadow-lg transition-shadow ${p.color}`}
              >
                <div className="text-4xl mb-3">{p.icon}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">{p.age}</div>
                <h3 className="text-xl font-bold text-[#003087] mb-2">{p.name}</h3>
                <p className="text-sm font-medium text-gray-700 mb-3 italic">{p.tagline}</p>
                <p className="text-sm text-gray-600">{p.description}</p>
                <p className="mt-4 text-[#003087] font-semibold text-sm">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kansai */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003087] mb-4">Why Upper Coomera Chooses Kansai Karate</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{p.icon}</div>
                <div>
                  <h3 className="font-bold text-[#003087] text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-600">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003087] mb-4">What Our Members Say</h2>
            <p className="text-gray-500">Real feedback from real families in Upper Coomera.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-[#FFB800] text-2xl mb-3">★★★★★</div>
                <p className="text-gray-700 italic mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="text-sm font-semibold text-[#003087]">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trial CTA */}
      <TrialCTA />

      {/* Location */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#003087] mb-4">Find Us in Upper Coomera</h2>
          <p className="text-gray-600 mb-6">
            Unit 3/2 Sierra Place, Upper Coomera QLD 4209 ·{" "}
            <a href="tel:0489265960" className="text-[#003087] font-semibold hover:underline">0489 265 960</a>
          </p>
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=Unit+3%2F2+Sierra+Place+Upper+Coomera+QLD+4209&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Kansai Karate Gold Coast location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
