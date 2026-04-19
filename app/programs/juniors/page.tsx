import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

const OLD = "/images";

export const metadata: Metadata = {
  title: "Juniors Program (Ages 8–12) | Kansai Karate Gold Coast",
  description: "Karate classes for 8–12 year olds in Upper Coomera. Juniors builds discipline, resilience, and technical karate skills in a structured, encouraging environment.",
  alternates: { canonical: "/programs/juniors" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kansaikarategoldcoast.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Juniors Karate (Ages 8–12)", "item": "https://kansaikarategoldcoast.com.au/programs/juniors" }
  ]
};

export default function JuniorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProgramPage
      name="Juniors"
      slug="juniors"
      heroImg={`${OLD}/juniorsgoogle.jpg`}
      headline="Kansai Karate Junior Martial Arts Classes set positive pathways for life!"
      subheadline="Martial Arts is one of the best possible activities for children. They'll learn to defend themselves physically, but more importantly they'll build the mental and emotional skill sets necessary to conquer challenges."
      introText=""
      benefitsHeading="Junior Classes Build Benefits for Life"
      benefits={[
        {
          title: "Mental & Emotional Growth",
          body: "They'll build the mental and emotional skill sets necessary to conquer challenges like high school, university, and becoming a healthy, balanced adult. Martial Arts is one of the best possible activities for children.",
        },
        {
          title: "Real Technique & Physical Development",
          body: "Kata, kumite, and conditioning. Students at this age can absorb real technique and start to develop their own karate style. They'll gain strength, flexibility, and coordination.",
        },
        {
          title: "Beginner and Intermediate/Advanced",
          body: "We run separate beginner and intermediate/advanced classes for this age group, so nobody feels out of their depth and nobody is held back. Your child will be placed in the right class from day one.",
        },
      ]}
      whyHeading="Why Kids Love Junior Classes"
      whyFeatures={[
        { title: "Mental Toughness", body: "Learning to push through difficulty, handle setbacks, and keep going. Skills that transfer directly to school, sport, and life." },
        { title: "Positive Peer Group", body: "Training alongside other motivated kids creates friendships built on shared challenge — a very different dynamic to school friendships." },
        { title: "Grading & Competition", body: "Clear belt milestones and the option to enter regional and state competitions through our QKA and AKF affiliations." },
        { title: "Tournament Squad", body: "Juniors who want to compete can join the Tournament Squad — additional training focused on competition performance." },
      ]}
      testimonial={{
        text: "We have gone for a couple of lessons so far and my son really enjoys himself. It is a lovely environment for the children and I look forward to seeing my son grow in his confidence with this class.",
        author: "Laka S., Upper Coomera",
      }}
      faqs={[
        {
          q: "My child gets bored with activities quickly — will they stick with karate?",
          a: "Juniors classes are progressive and structured around belt gradings every few months, which gives kids a clear goal to work towards. The combination of new techniques, partner drills, and the satisfaction of earning each belt keeps kids engaged long-term.",
        },
        {
          q: "Can Juniors compete in tournaments?",
          a: "Yes. Through our QKA (Queensland Karate Association) and AKF (Australian Karate Federation) affiliations, Juniors can enter regional and state competitions. We also run a Tournament Squad for students who want additional competitive training.",
        },
        {
          q: "What style of karate do you teach?",
          a: "We teach Shitoryu Shukokai — a traditional Japanese karate style known for its technical precision and practical application. Students learn kata (forms), kihon (basics), and kumite (sparring) in a structured, safe environment.",
        },
        {
          q: "How large are the Junior classes?",
          a: "We keep class sizes small enough that our instructors know every student by name. Your child won't get lost in a crowd — they'll receive genuine individual attention and feedback.",
        },
        {
          q: "Do you offer a free trial for Juniors?",
          a: "Yes — book a free trial class with no obligation. Bring your child along in comfortable clothing and see how they go. We'll take care of the rest.",
        },
      ]}
      ctaHeading="This could be the best thing you've ever done for your child."
      ctaText="Junior Classes Build Benefits for Life"
      secondaryImages={[
        `${OLD}/juniorsgoogle.jpg`,
        `${OLD}/j3.jpg`,
        `${OLD}/j4.jpg`,
      ]}
    />
    </>
  );
}
