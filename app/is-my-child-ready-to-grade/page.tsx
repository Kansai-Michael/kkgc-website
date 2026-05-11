import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is My Child Ready to Grade? | Kansai Karate Gold Coast",
  description: "Wondering if your child is ready for their first karate grading? Find out what we look for across Cubs, Little Lions, Juniors, and Teens & Adults at Kansai Karate Gold Coast.",
  alternates: { canonical: "/is-my-child-ready-to-grade" },
};

const sections = [
  {
    title: "Cubs",
    ages: "Ages 3–4",
    body: "For our 3–4 year olds, the first grading is about participation — copying the skills demonstrated, listening, and working with parents. Coordination, knowing the techniques outside of class, and even getting the correct legs and hands is not expected. This is all part of typical childhood development.",
  },
  {
    title: "Little Lions",
    ages: "Ages 5–7",
    body: "For our 5–7 year olds, the first grading is participation, enthusiasm, and demonstrating the techniques practised in class, including punches, kicks, and cuts. The children may not remember everything, and getting hands and legs perfectly correct is not required. Instructors will provide feedback during the class. Practising at home beforehand is not required, but if students are interested we would encourage it — it helps build their sense of achievement.",
  },
  {
    title: "Juniors",
    ages: "Ages 8–12",
    body: "For our 8–12 year olds, the first grading is participation, enthusiasm, and demonstrating the techniques practised in class, including pad work and kata. Much like the Little Lions, students may not remember everything — but being confident to have a go and a familiarity with all of the content is important. Karate is not like a lot of other physical activities, and kids being uncoordinated at first is not uncommon. Part of their karate journey is learning new movements and developing body awareness — that takes time. Just ask any parent who has started karate after watching their kids for years. It looks easy until you do it yourself.",
  },
  {
    title: "Teens & Adults",
    ages: "Ages 13+",
    body: "For our teens and adults, participation, determination, and spirit are the big factors. We expect a level of maturity to practise and learn their techniques, but at the beginning it's still about getting in there and having a go, making mistakes, and pushing through. For this group it's also about learning — getting past nerves and feeling that sense of accomplishing the first of many goals and milestones.",
  },
];

export default function IsMyChildReadyToGradePage() {
  return (
    <>
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Is My Child Ready to Grade?</h1>
          <p className="text-xl text-white/80">
            The question that comes up all the time from parents before their child's first karate grading (belt exam) is — are they ready?
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Class photo */}
          <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/images/LL1.jpg"
              alt="Little Lions karate class at Kansai Karate Gold Coast"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Short answer */}
          <div className="bg-[#5B7DB1]/10 border border-[#5B7DB1]/30 rounded-lg px-6 py-5">
            <p className="text-[#003087] font-bold text-lg mb-1">The short answer</p>
            <p className="text-gray-700">
              If you've received a grading form, then yes — they're ready. If you haven't and you're unsure, please come and talk to us. Usually it just means they haven't done enough classes in preparation yet. If in doubt, ask.
            </p>
          </div>

          {/* Intro */}
          <div className="space-y-4 text-gray-600">
            <p>
              At Kansai Karate we run age-specific classes for four different age groups, with expectations and training programs tailored to suit the specific abilities of those groups. We even have different belts for each group to visually demonstrate these differences.
            </p>
            <p>
              For our students, their first grading from White Belt is a recognition of starting their karate journey. We don't expect karate mastery or fully coordinated kids after a few lessons. The biggest goal is getting involved, building a sense of achievement, and developing confidence. Karate can be a lifelong journey of continual development and improvement — but first, we have to start.
            </p>
            <p>
              We run gradings at regular 3-month intervals and allow students to grade with a certain number of classes attended, with the expectation of regular training for the full length of time between gradings after their first. Our expectations are different for each group: Cubs (3–4 years), Little Lions (5–7 years), Juniors (8–12 years), and Teens & Adults (13+ years).
            </p>
            <p className="font-semibold text-gray-800">
              In all cases, what we look for most is a student who is enthusiastic to learn, shows a willingness to accept help and correct themselves when given feedback, and has a determination to never give up.
            </p>
          </div>

          {/* Per-program sections */}
          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <div className="flex items-baseline gap-3 mb-2">
                  <h2 className="text-2xl font-bold text-[#003087]">{s.title}</h2>
                  <span className="text-sm text-gray-500 font-medium">{s.ages}</span>
                </div>
                <p className="text-gray-600">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="space-y-4 text-gray-600 border-t border-gray-200 pt-8">
            <p>
              Everyone makes mistakes. As long as we listen and learn from them, you will have no problems at Kansai Karate.
            </p>
            <p>
              We encourage parents to come and discuss any concerns about their child's training and participation. We don't like having students miss gradings — they tend to get discouraged when they see their peers receive new belts and they miss out. This can become a reluctance to attend karate and wanting to quit. They may not say this is the cause, but it does happen a lot.
            </p>
            <p className="font-semibold text-gray-800">
              Please talk with us and help you and your child achieve your goals.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-block bg-[#003087] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#001A52] transition-colors"
            >
              Talk to Sensei
            </Link>
            <Link
              href="/timetable"
              className="inline-block bg-white text-[#003087] font-semibold px-6 py-3 rounded-lg border-2 border-[#003087] hover:bg-[#003087] hover:text-white transition-colors"
            >
              View Timetable
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
