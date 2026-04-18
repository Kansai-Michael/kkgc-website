import Link from "next/link";

const OLD = "/images";
const OLD_43 = "/images";

const HERO_IMG = `${OLD_43}/kansai-homeheader.webp`;
const BADGE_IMG = `${OLD}/KKA-Logo-Trans-background.png`;
const DOJO_INTERIOR = `${OLD_43}/Adults.jpg`;
const KIDS_PHOTO = `${OLD}/Lillions2.jpg`;
const ADULTS_PHOTO = `${OLD}/adultgoogle6.jpg`;

const programs = [
  {
    name: "Cubs",
    age: "Ages 3-4",
    href: "/programs/cubs",
    img: `${OLD}/cub3.jpg`,
    description:
      "From listening skills to taking turns, our program for ages 3-4 teach way more than physical skills! Your child will learn how to interact in a social setting, plus learn valuable life lessons that will help them as they grow.",
  },
  {
    name: "Little Lions",
    age: "Ages 5-7",
    href: "/programs/little-lions",
    img: `${OLD}/lll.jpg`,
    description:
      "There's nothing more satisfying than watching your 5-7 year old gain physical and social skills that you know will benefit them for life. Your little one will learn focus, self-confidence and discipline, while getting a full body work out.",
  },
  {
    name: "Juniors",
    age: "Ages 8-12",
    href: "/programs/juniors",
    img: `${OLD}/juniorsgoogle.jpg`,
    description:
      "Martial Arts is one of the best possible activities for children. They'll learn to defend themselves physically, but more importantly they'll build the mental and emotional skill sets necessary to conquer challenges like high school, university, and becoming a healthy, balanced adult.",
  },
  {
    name: "Teen Karate",
    age: "Ages 13+",
    href: "/programs/teens",
    img: `${OLD}/Teengoogle-1.jpg`,
    description:
      "Martial Arts is the perfect activity for teenagers! It gives them an outlet for their unique energy through engagement, and cross motor skill activity, but at Kansai Karate, they'll do it in a structured class designed and taught just for them.",
  },
  {
    name: "Adult Karate",
    age: "",
    href: "/programs/adults",
    img: `${OLD}/adultsgoogle4.jpg`,
    description:
      "Whether it's losing weight, building muscle, learning to defend yourself, or just having a blast, our Adult Martial Arts classes have exactly what you need. You'll love the high energy class instruction, your body will love the awesome workout, and your spirit will love the camaraderie and positive atmosphere.",
  },
];

const whyFeatures = [
  {
    icon: "📅",
    title: "Schedule Focused",
    body: "Our programs were created for real family schedules. Convenient class times mean that kids, adults, and whole families can improve their quality of life without killing every moment of spare time.",
  },
  {
    icon: "👥",
    title: "Community Positive",
    body: "Our positive atmosphere is contagious, and you'll know without a doubt that you're in a place where kids will learn positive habits and adults will make meaningful, lasting friendships.",
  },
  {
    icon: "⭐",
    title: "Values Oriented",
    body: "All of our programs improve physical prowess, and that's important. But what's far more important is the mental and emotional benefits that our programs bring to everyday life.",
  },
  {
    icon: "🏃",
    title: "Movement Based",
    body: "Both kids and adults will gain flexibility, agility, and strength, even if they aren't athletic! They'll love it, because it's not only super fun, it's inclusive and accommodating at every step.",
  },
];

const kidsFeatures = [
  {
    icon: "🥋",
    title: "Amazing Classes",
    body: "Kids love classes at Kansai Karate because they're unbelievably fun (but parents love them because they build benefits for life!)",
  },
  {
    icon: "📋",
    title: "Structured Activity",
    body: "Everything we do is intentionally structured based on our extensive experience. Kids at Kansai Karate actually like the structure, because it makes them feel safe and cared for.",
  },
  {
    icon: "🤝",
    title: "Full Inclusion",
    body: "We take kids' emotions seriously. The culture at Kansai Karate is one of inclusion — no cliques, no cool kids club, no unkind actions or attitudes. Kids love it because they always feel like they belong!",
  },
  {
    icon: "😄",
    title: "Awesome Fun!",
    body: "It's so much fun! At Kansai Karate, we know that getting your child out of the house, in the car, and across town to an activity is a big deal. We guarantee that when they leave, it will have been 100% worth it, every time!",
  },
];

const adultsFeatures = [
  {
    icon: "📚",
    title: "Curriculum",
    body: "Our classes were designed specifically for the average person. You'll build skills step by step, without having to be a superstar to see improvement. But stick with it, and you'll see your abilities soar!",
  },
  {
    icon: "👥",
    title: "Community",
    body: "You'll be surrounded by peers striving towards the same goals you are, day in, day out. You'll build friendships and be supported in your individual journey.",
  },
  {
    icon: "🧠",
    title: "Mental Health",
    body: "We've always known it, but now the science agrees: You must take time for your own mental health. Our classes help you clear your mind, accomplish your goals, and be more healthy, from the inside out.",
  },
  {
    icon: "💪",
    title: "Physical Skills",
    body: "It's more than just learning awesome looking moves — it's proprioception, balance, agility and more — physical skills that will remain with and benefit you for the rest of your life.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex items-center justify-center text-white"
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Blue-tinted dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10, 30, 80, 0.62)" }}
        />
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          {/* Badge */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BADGE_IMG}
            alt="Kansai Karate Academy"
            className="w-32 md:w-40 mb-8"
          />
          {/* H1 */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white max-w-3xl mx-auto leading-snug font-semibold">
            <span className="text-[#FFB800]">Kids</span> build Focus and Discipline, <span className="text-[#FFB800]">Teens</span> find classes designed just for
            them, and <span className="text-[#FFB800]">Adults</span> have a workout that helps keep them fit &amp; safe
          </h1>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programs" className="py-16 px-4" style={{ background: "#5B7DB1" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Proudly Serving Upper Coomera and surrounding communities.
            </h2>
            <p className="text-white/70 text-lg">
              Find the Kansai Karate program for you:
            </p>
          </div>

          {/* Top row — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {programs.slice(0, 3).map((p) => (
              <div
                key={p.href + p.name}
                className="relative rounded overflow-hidden flex flex-col"
                style={{ minHeight: "380px" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(10,20,50,0.78)" }}
                />
                <div className="relative z-10 flex flex-col h-full p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {p.name}
                    <br />
                    <span className="text-xl font-normal">({p.age})</span>
                  </h3>
                  <p className="text-white/75 text-sm mt-3 leading-relaxed flex-1">
                    {p.description}
                  </p>
                  <Link
                    href={p.href}
                    className="mt-6 block text-center border border-white text-white font-bold py-3 hover:bg-white hover:text-[#5B7DB1] transition-colors uppercase tracking-widest text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row — 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programs.slice(3).map((p) => (
              <div
                key={p.href + p.name}
                className="relative rounded overflow-hidden flex flex-col"
                style={{ minHeight: "340px" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(10,20,50,0.78)" }}
                />
                <div className="relative z-10 flex flex-col h-full p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {p.name}
                    {p.age && (
                      <>
                        <br />
                        <span className="text-xl font-normal">({p.age})</span>
                      </>
                    )}
                  </h3>
                  <p className="text-white/75 text-sm mt-3 leading-relaxed flex-1">
                    {p.description}
                  </p>
                  <Link
                    href={p.href}
                    className="mt-6 block text-center border border-white text-white font-bold py-3 hover:bg-white hover:text-[#5B7DB1] transition-colors uppercase tracking-widest text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY UPPER COOMERA CHOOSES KANSAI ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Photo — 1/3 */}
          <div className="rounded-lg overflow-hidden aspect-[4/5] bg-cover bg-center"
            style={{ backgroundImage: `url(${DOJO_INTERIOR})` }}
          />
          {/* Features — 2/3 */}
          <div className="md:col-span-2">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">
              The best in Upper Coomera
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
              Why Upper Coomera chooses Kansai Karate
            </h2>
            <hr className="border-gray-300 mb-8 w-16" />
            <div className="grid grid-cols-2 gap-8">
              {whyFeatures.map((f) => (
                <div key={f.title}>
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── KIDS CHOOSE KANSAI ── */}
      <section className="py-16 px-4" style={{ background: "#5B7DB1" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Features — 2/3 */}
          <div className="md:col-span-2">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-3">
              Upper Coomera Kids agree:
            </p>
            <h2 className="text-3xl font-bold text-white mb-4 leading-snug">
              Kids choose Kansai Karate every time
            </h2>
            <hr className="border-white/30 mb-8 w-16" />
            <div className="grid grid-cols-2 gap-8">
              {kidsFeatures.map((f) => (
                <div key={f.title}>
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Photo — 1/3 */}
          <div className="rounded-lg overflow-hidden aspect-[4/5] bg-cover bg-center"
            style={{ backgroundImage: `url(${KIDS_PHOTO})` }}
          />
        </div>
      </section>

      {/* ── WHY ADULTS LOVE KANSAI ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Photo — 1/3 */}
          <div className="rounded-lg overflow-hidden aspect-[4/5] bg-cover bg-center"
            style={{ backgroundImage: `url(${ADULTS_PHOTO})` }}
          />
          {/* Features — 2/3 */}
          <div className="md:col-span-2">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">
              Programs built for real people
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
              Why Adults love Kansai Karate Programs
            </h2>
            <hr className="border-gray-300 mb-8 w-16" />
            <div className="grid grid-cols-2 gap-8">
              {adultsFeatures.map((f) => (
                <div key={f.title}>
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4" style={{ background: "#5B7DB1" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Ready to be part of Kansai Karate? Select a Program and Get Started Today!
          </h2>
          <Link
            href="/#programs"
            className="inline-block border-2 border-white text-white font-bold text-lg px-12 py-4 hover:bg-white hover:text-[#5B7DB1] transition-colors uppercase tracking-widest"
          >
            Select Your Program
          </Link>
        </div>
      </section>
    </>
  );
}
