import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

const OLD = "/images";

export const metadata: Metadata = {
  title: "Cubs Program (Ages 3–4) | Kansai Karate Gold Coast",
  description: "Karate classes for 3 and 4 year olds in Upper Coomera. Our Cubs program builds listening skills, coordination, and confidence through fun, structured movement.",
  alternates: { canonical: "/programs/cubs" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kansaikarategoldcoast.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Cubs Karate (Ages 3–4)", "item": "https://kansaikarategoldcoast.com.au/programs/cubs" }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cubs Karate Program (Ages 3–4)",
  "description": "Karate classes designed for children aged 3 to 4 years. Cubs builds listening skills, coordination, confidence, and social development through fun, structured movement in a safe environment.",
  "url": "https://kansaikarategoldcoast.com.au/programs/cubs",
  "provider": { "@type": "SportsActivityLocation", "name": "Kansai Karate Gold Coast", "url": "https://kansaikarategoldcoast.com.au" },
  "areaServed": { "@type": "City", "name": "Upper Coomera" },
  "audience": { "@type": "PeopleAudience", "suggestedMinAge": "3", "suggestedMaxAge": "4" },
  "serviceType": "Karate Classes",
  "offers": { "@type": "Offer", "description": "Free trial class available. No uniform or equipment required to start.", "url": "https://kansaikarategoldcoast.com.au/programs/cubs" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What age can my child start Cubs?", "acceptedAnswer": { "@type": "Answer", "text": "Cubs is designed for children aged 3 to 4 years old. If your child has just turned 3 and you think they're ready, book a free trial and we'll let you know after the first class." } },
    { "@type": "Question", "name": "Is karate safe for such young children?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Cubs classes are specifically designed for 3–4 year olds — there is no contact sparring. Everything is age-appropriate movement, games, and basic techniques in a safe, padded environment with patient instructors." } },
    { "@type": "Question", "name": "How long are Cubs classes?", "acceptedAnswer": { "@type": "Answer", "text": "Cubs classes run for 30 minutes — the ideal length for this age group's attention span. Short, structured, and high-energy so they leave happy every time." } },
    { "@type": "Question", "name": "Do they need a uniform to start?", "acceptedAnswer": { "@type": "Answer", "text": "No. For your free trial class, comfortable clothing is perfectly fine. Once your child decides to join, we'll help you get set up with a gi (uniform)." } },
    { "@type": "Question", "name": "Can parents watch?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — parents are welcome to watch from the viewing area. Many parents find it just as enjoyable as the kids do!" } }
  ]
};

export default function CubsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProgramPage
      name="Cubs"
      slug="cubs"
      heroImg={`${OLD}/cub3.jpg`}
      headline="Cubs Karate in Upper Coomera — Classes for Ages 3 & 4"
      subheadline="Our Cubs program for ages 3-4 teaches way more than physical skills! Your child will learn how to interact in a social setting, plus learn valuable life lessons."
      introText="Cubs at Kansai Karate Gold Coast is a 30-minute karate class designed specifically for children aged 3 and 4, held at our dojo in Upper Coomera QLD 4209. Led by Sensei Michael Hunt (5th Dan Shitoryu Shukokai), each class blends structured movement with games and basic karate technique — all at a pace that suits little ones. Cubs run Monday, Wednesday, Thursday and Saturday mornings, making it easy to fit around the family week. No experience or uniform is needed to start — just bring your child in comfortable clothes and book a free first class. Families from across the northern Gold Coast — Coomera, Pimpama, Ormeau, Oxenford — make the short drive to Upper Coomera for Cubs because there simply isn't a program like it closer to home."
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
        text: "Sensai Michael is brilliant with the kids — an excellent mix of firm and fun, and obviously skilled in the art of teaching karate. His encouragement of his sempai's to lead the warm up is also great for the younger kids. Our kids love attending class and have encouraged their friends to participate. I would highly recommend both the sport and this dojo to families.",
        author: "Alison Gill — Google Review ⭐⭐⭐⭐⭐",
      }}
      faqs={[
        {
          q: "What age can my child start Cubs?",
          a: "Cubs is designed for children aged 3 to 4 years old. If your child has just turned 3 and you think they're ready, book a free trial and we'll let you know after the first class.",
        },
        {
          q: "Is karate safe for such young children?",
          a: "Absolutely. Cubs classes are specifically designed for 3–4 year olds — there is no contact sparring. Everything is age-appropriate movement, games, and basic techniques in a safe, padded environment with patient instructors.",
        },
        {
          q: "How long are Cubs classes?",
          a: "Cubs classes run for 30 minutes — the ideal length for this age group's attention span. Short, structured, and high-energy so they leave happy every time.",
        },
        {
          q: "Do they need a uniform to start?",
          a: "No. For your free trial class, comfortable clothing is perfectly fine. Once your child decides to join, we'll help you get set up with a gi (uniform).",
        },
        {
          q: "Can parents watch?",
          a: "Yes — parents are welcome to watch from the viewing area. Many parents find it just as enjoyable as the kids do!",
        },
      ]}
      ctaHeading="This could be the best thing you've ever done for your child."
      ctaText="Cubs Classes Build Benefits for Life"
      secondaryImages={[
        `${OLD}/cub1.jpg`,
        `${OLD}/cub2.jpg`,
        `${OLD}/Cubs-1.jpg`,
      ]}
    />
    </>
  );
}
