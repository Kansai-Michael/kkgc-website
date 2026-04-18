import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

const OLD = "/images";

export const metadata: Metadata = {
  title: "Cubs Program (Ages 3–4) | Kansai Karate Gold Coast",
  description: "Karate classes for 3 and 4 year olds in Upper Coomera. Our Cubs program builds listening skills, coordination, and confidence through fun, structured movement.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kansaikarategoldcoast.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Cubs Karate (Ages 3–4)", "item": "https://kansaikarategoldcoast.com.au/programs/cubs" }
  ]
};

export default function CubsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProgramPage
      name="Cubs"
      slug="cubs"
      heroImg={`${OLD}/cub3.jpg`}
      headline="Cubs Classes at Kansai Karate set positive pathways for life!"
      subheadline="Our Cubs program for ages 3-4 teaches way more than physical skills! Your child will learn how to interact in a social setting, plus learn valuable life lessons."
      introText=""
      benefitsHeading="Cubs Classes Build Benefits for Life"
      benefits={[
        {
          title: "Listening & Social Skills",
          body: "From listening skills to taking turns, our program for ages 3-4 teaches way more than physical skills! Your child will learn how to interact in a social setting, plus learn valuable life lessons that will help them as they grow.",
        },
        {
          title: "Confidence & Coordination",
          body: "Cubs develop balance, coordination, and body awareness through age-appropriate activities. They'll gain confidence in their abilities and learn to try new things in a supportive environment.",
        },
        {
          title: "Fun & Structured Learning",
          body: "Every Cubs class is designed to be fun first, with structured activities that keep little ones engaged. Short, high-energy sessions ensure they stay focused and leave with a smile every time.",
        },
      ]}
      whyHeading="Why Kids Love Cubs Classes"
      whyFeatures={[
        { title: "Age Appropriate", body: "Classes designed specifically for 3-4 year olds — not watered-down adult classes." },
        { title: "Safe Environment", body: "A nurturing, safe space where little ones feel comfortable to explore and try new things." },
        { title: "Social Development", body: "Learning to take turns, follow instructions, and interact with peers in a positive setting." },
        { title: "Parent Friendly", body: "Convenient class times that fit around family schedules. Parents can watch from the viewing area." },
      ]}
      testimonial={{
        text: "My 3-year-old absolutely loves Cubs! She has come out of her shell so much since starting. The instructors are so patient and caring with the little ones.",
        author: "Parent of a Cubs student",
      }}
      ctaHeading="This could be the best thing you've ever done for your child."
      ctaText="Cubs Classes Build Benefits for Life"
      secondaryImages={[
        `${OLD}/cub3.jpg`,
        `${OLD}/cub4.jpg`,
        `${OLD}/Cubs-1.jpg`,
      ]}
    />
    </>
  );
}
