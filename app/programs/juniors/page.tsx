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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Juniors Karate Program (Ages 8–12)",
  "description": "Karate classes for children aged 8 to 12 in Upper Coomera. Separate beginner and intermediate/advanced classes. Develops discipline, resilience, technique, and real karate skills.",
  "url": "https://kansaikarategoldcoast.com.au/programs/juniors",
  "provider": { "@type": "SportsActivityLocation", "name": "Kansai Karate Gold Coast", "url": "https://kansaikarategoldcoast.com.au" },
  "areaServed": { "@type": "City", "name": "Upper Coomera" },
  "audience": { "@type": "PeopleAudience", "suggestedMinAge": "8", "suggestedMaxAge": "12" },
  "serviceType": "Karate Classes",
  "offers": { "@type": "Offer", "description": "Free trial class available. No uniform or equipment required to start.", "url": "https://kansaikarategoldcoast.com.au/programs/juniors" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "My child gets bored with activities quickly — will they stick with karate?", "acceptedAnswer": { "@type": "Answer", "text": "Juniors classes are progressive and structured around belt gradings every few months, which gives kids a clear goal to work towards. The combination of new techniques, partner drills, and the satisfaction of earning each belt keeps kids engaged long-term." } },
    { "@type": "Question", "name": "Can Juniors compete in tournaments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Through our QKA (Queensland Karate Association) and AKF (Australian Karate Federation) affiliations, Juniors can enter regional and state competitions. We also run a Tournament Squad for students who want additional competitive training." } },
    { "@type": "Question", "name": "What style of karate do you teach?", "acceptedAnswer": { "@type": "Answer", "text": "We teach Shitoryu Shukokai — a traditional Japanese karate style known for its technical precision and practical application. Students learn kata (forms), kihon (basics), and kumite (sparring) in a structured, safe environment." } },
    { "@type": "Question", "name": "How large are the Junior classes?", "acceptedAnswer": { "@type": "Answer", "text": "We keep class sizes small enough that our instructors know every student by name. Your child won't get lost in a crowd — they'll receive genuine individual attention and feedback." } },
    { "@type": "Question", "name": "Do you offer a free trial for Juniors?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — book a free trial class with no obligation. Bring your child along in comfortable clothing and see how they go. We'll take care of the rest." } }
  ]
};

export default function JuniorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProgramPage
      name="Juniors"
      slug="juniors"
      heroImg={`${OLD}/Juniors.jpg`}
      headline="Junior Karate Classes in Upper Coomera — Ages 8–12 at Kansai Karate"
      subheadline="Juniors Karate at Upper Coomera gives 8–12 year olds real skills, genuine fitness and the kind of self-discipline that shows up everywhere — at school, at home, and in sport."
      introText="Juniors at Kansai Karate Gold Coast is a karate program for children aged 8 to 12, based at Upper Coomera QLD 4209. We run separate Beginner and Intermediate/Advanced classes, so your child trains at the right level from day one rather than being placed in a one-size-fits-all group. Classes cover kata (forms), kihon (basics), and kumite (sparring), taught by Sensei Michael Hunt — 5th Dan Shitoryu Shukokai. The program runs Monday to Thursday evenings and Saturday mornings, convenient for families in Upper Coomera, Coomera, Pimpama, and the wider northern Gold Coast. Junior students grade for belts every few months and can enter regional and state competitions through our QKA and AKF affiliations. Book a free trial class to get started — no uniform or experience needed."
      benefitsHeading="Junior Classes Build Benefits for Life"
      benefits={[
        {
          title: "Mental & Emotional Growth",
          body: "Juniors Karate builds the mental and emotional skills that carry your child through school, sport and life — focus, determination, resilience, and the ability to work hard toward a goal.",
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
        text: "My son started learning karate here last year and he has nothing but positive things to say. All the instructors do an amazing job and appear very passionate about what they do. I love the word of the week — they teach the kids about it and give out badges to students who have demonstrated that quality. Highly recommend.",
        author: "Paul Fenby — Google Review ⭐⭐⭐⭐⭐",
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
        `${OLD}/j2.jpg`,
        `${OLD}/j3.jpg`,
        `${OLD}/j5.jpg`,
      ]}
    />
    </>
  );
}
