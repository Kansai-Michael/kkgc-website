import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

const OLD = "/images";

export const metadata: Metadata = {
  title: "Teens Karate (Ages 13+) | Kansai Karate Gold Coast",
  description: "Teen karate classes in Upper Coomera. Build fitness, focus, and real self-defence skills in a structured class designed specifically for teenagers.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kansaikarategoldcoast.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Teens Karate (Ages 13–18)", "item": "https://kansaikarategoldcoast.com.au/programs/teens" }
  ]
};

export default function TeensPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProgramPage
      name="Teens Karate"
      slug="teens"
      heroImg={`${OLD}/Teengoogle-1.jpg`}
      headline="Kansai Karate Teen Martial Arts Classes set positive pathways for life!"
      subheadline="Martial Arts is the perfect activity for teenagers! It gives them an outlet for their unique energy through engagement, and cross motor skill activity, in a structured class designed just for them."
      introText=""
      benefitsHeading="Teen Karate Classes Build Benefits for Life"
      benefits={[
        {
          title: "Teen Karate Classes Build Fitness and Focus",
          body: "Martial Arts is the perfect activity for teenagers! It gives them an outlet for their unique energy through engagement, and cross motor skill activity, but at Kansai Karate, they'll do it in a structured class designed and taught just for them.",
        },
        {
          title: "It's Not Traditional Sport — It's Better",
          body: "Teens love that karate is different. There's no bench. No being picked last. Every student progresses at their own pace while still being part of a team. The grading system gives them clear goals and real achievement.",
        },
        {
          title: "Discipline That Transfers to Life",
          body: "The self-discipline, respect, and mental toughness built in karate class shows up at school, at home, and in every other area of their life. Parents regularly tell us the change is noticeable.",
        },
      ]}
      whyHeading="Why Teens Choose Kansai Karate"
      whyFeatures={[
        { title: "Designed for Teens", body: "Not lumped in with little kids. Not thrown in with adults. A class specifically for their age group and energy level." },
        { title: "Real Self-Defence", body: "Practical skills they can actually use. Teens feel more confident knowing they can protect themselves if they ever need to." },
        { title: "Mental Health Benefits", body: "A physical outlet that helps manage stress, anxiety, and the pressures of teenage life. Clear your head, challenge your body." },
        { title: "Positive Community", body: "Training alongside peers who share the same goals creates genuine friendships built on mutual respect." },
      ]}
      testimonial={{
        text: "Our teenager was reluctant to try anything new, but after the first class he was hooked. His confidence has grown enormously and he actually looks forward to training.",
        author: "Parent of a Teen student",
      }}
      ctaHeading="This Could be the Best Thing you've ever done for your teen."
      ctaText="Teen Karate Classes Build Benefits for Life"
      secondaryImages={[
        `${OLD}/Teengoogle-1.jpg`,
        `${OLD}/Teengoogle-1.jpg`,
        `${OLD}/Teengoogle-1.jpg`,
      ]}
    />
    </>
  );
}
