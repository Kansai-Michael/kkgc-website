import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

const OLD = "https://kansaikarategoldcoast.com.au/wp-content/uploads/sites/27/2025/02";

export const metadata: Metadata = {
  title: "Juniors Program (Ages 8–12) | Kansai Karate Gold Coast",
  description: "Karate classes for 8–12 year olds in Upper Coomera. Juniors builds discipline, resilience, and technical karate skills in a structured, encouraging environment.",
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
      heroImg={`${OLD}/Juniors.webp`}
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
        text: "My son went from refusing to try anything new to earning his first belt in three months. The instructors are incredible with kids.",
        author: "Parent of a Junior student",
      }}
      ctaHeading="This could be the best thing you've ever done for your child."
      ctaText="Junior Classes Build Benefits for Life"
      secondaryImages={[
        `${OLD}/Juniors.webp`,
        `${OLD}/Juniors.webp`,
        `${OLD}/Juniors.webp`,
      ]}
    />
    </>
  );
}
