import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

const OLD = "/images";

export const metadata: Metadata = {
  title: "Little Lions Program (Ages 5–7) | Kansai Karate Gold Coast",
  description: "Karate classes for 5, 6, and 7 year olds in Upper Coomera. Little Lions builds focus, respect, and real karate foundations in a fun, structured environment.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kansaikarategoldcoast.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Little Lions Karate (Ages 5–7)", "item": "https://kansaikarategoldcoast.com.au/programs/little-lions" }
  ]
};

export default function LittleLionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProgramPage
      name="Little Lions"
      slug="little-lions"
      heroImg={`${OLD}/lll.jpg`}
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
        text: "Joining Kansai Karate has been one of the best decisions we have made. Our daughter loves it. She learns not only karate, but respect, discipline, confidence and pride in her achievements.",
        author: "Lauren H., Upper Coomera",
      }}
      faqs={[
        {
          q: "My child is shy — will they cope in a group class?",
          a: "Many of our Little Lions students start shy and blossom within the first few weeks. Our instructors are experienced with this age group and create an encouraging environment where every child feels included and safe.",
        },
        {
          q: "What will my child learn in Little Lions?",
          a: "Focus, listening skills, coordination, self-confidence, and the foundations of Shitoryu Shukokai karate — including basic stances, blocks, and strikes — delivered through fun, structured activities.",
        },
        {
          q: "How often should they train?",
          a: "We recommend twice a week for the best results. Once a week is a great starting point if you want to ease in, and many families find their kids quickly want to come more often.",
        },
        {
          q: "Can they earn belts?",
          a: "Yes! Little Lions can grade for their first coloured belt. Gradings happen every few months and are a huge confidence milestone for kids this age.",
        },
        {
          q: "Is there a free trial?",
          a: "Yes — we offer a free trial class with no obligation. Book online and bring your child along. If they love it (they usually do), we'll get them started from there.",
        },
      ]}
      ctaHeading="This could be the best thing you've ever done for your child."
      ctaText="Little Lions Classes Build Benefits for Life"
      secondaryImages={[
        `${OLD}/ll6.jpg`,
        `${OLD}/lilgoogle4.jpg`,
        `${OLD}/llllllllllll.jpg`,
      ]}
    />
    </>
  );
}
