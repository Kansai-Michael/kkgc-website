import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

const OLD = "https://kansaikarategoldcoast.com.au/wp-content/uploads/sites/27/2025/02";

export const metadata: Metadata = {
  title: "Little Lions Program (Ages 5–7) | Kansai Karate Gold Coast",
  description: "Karate classes for 5, 6, and 7 year olds in Upper Coomera. Little Lions builds focus, respect, and real karate foundations in a fun, structured environment.",
};

export default function LittleLionsPage() {
  return (
    <ProgramPage
      name="Little Lions"
      slug="little-lions"
      heroImg={`${OLD}/Lillionsgoogle.webp`}
      headline="Little Lions Classes at Kansai Karate set positive pathways for life!"
      subheadline="There's nothing more satisfying than watching your 5-7 year old gain physical and social skills that you know will benefit them for life."
      introText=""
      benefitsHeading="Little Lions Classes Build Benefits for Life"
      benefits={[
        {
          title: "Focus, Self-Confidence and Discipline",
          body: "Your little one will learn focus, self-confidence and discipline, while getting a full body work out. Preschool Martial Arts teach fantastic martial arts moves plus vital interpersonal skills.",
        },
        {
          title: "It's not just kids that love it...",
          body: "Parents love Little Lions because they see the benefits at home and at school. Better focus, improved behaviour, and a child who is genuinely excited to go to their activity every week.",
        },
        {
          title: "Structured Activity That Kids Actually Enjoy",
          body: "Everything we do is intentionally structured based on our extensive experience. Kids at Kansai Karate actually like the structure, because it makes them feel safe and cared for.",
        },
      ]}
      whyHeading="Why Kids Love Little Lions Classes"
      whyFeatures={[
        { title: "Amazing Classes", body: "Kids love classes at Kansai Karate because they're unbelievably fun (but parents love them because they build benefits for life!)" },
        { title: "Structured Activity", body: "Everything we do is intentionally structured based on our extensive experience. Kids actually like the structure, because it makes them feel safe." },
        { title: "Full Inclusion", body: "The culture at Kansai Karate is one of inclusion — no cliques, no cool kids club. Kids love it because they always feel like they belong!" },
        { title: "Awesome Fun!", body: "We guarantee that when they leave, it will have been 100% worth it, every time!" },
      ]}
      testimonial={{
        text: "Our daughter has been in Little Lions for two years. Her focus at school has improved noticeably. We cannot recommend Kansai Karate enough.",
        author: "Parent of a Little Lions student",
      }}
      ctaHeading="This could be the best thing you've ever done for your child."
      ctaText="Little Lions Classes Build Benefits for Life"
      secondaryImages={[
        `${OLD}/Lillionsgoogle3.webp`,
        `${OLD}/lilgoogle4.webp`,
        `${OLD}/llllllllllll.webp`,
      ]}
    />
  );
}
