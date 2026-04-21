import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

const OLD = "/images";

export const metadata: Metadata = {
  title: "Adult Karate Classes | Kansai Karate Gold Coast",
  description: "Adult karate classes in Upper Coomera. Whether it's fitness, self-defence, or mental health — our classes are designed for the average person to see real results.",
  alternates: { canonical: "/programs/adults" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kansaikarategoldcoast.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Adult Karate Classes", "item": "https://kansaikarategoldcoast.com.au/programs/adults" }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Adult Karate Classes",
  "description": "Adult karate classes in Upper Coomera. Traditional Shitoryu Shukokai karate for beginners through to advanced students. Builds fitness, self-defence skills, and mental wellbeing.",
  "url": "https://kansaikarategoldcoast.com.au/programs/adults",
  "provider": { "@type": "SportsActivityLocation", "name": "Kansai Karate Gold Coast", "url": "https://kansaikarategoldcoast.com.au" },
  "areaServed": { "@type": "City", "name": "Upper Coomera" },
  "audience": { "@type": "PeopleAudience", "suggestedMinAge": "18" },
  "serviceType": "Karate Classes",
  "offers": { "@type": "Offer", "description": "Free trial class available. No uniform or equipment required to start.", "url": "https://kansaikarategoldcoast.com.au/programs/adults" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Am I too old or unfit to start karate?", "acceptedAnswer": { "@type": "Answer", "text": "Not at all. Most adults in our program start as complete beginners with no martial arts background. Our classes are designed for real people with real bodies — you build fitness and technique progressively, at your own pace." } },
    { "@type": "Question", "name": "What fitness level do I need?", "acceptedAnswer": { "@type": "Answer", "text": "None required to start. The classes build your fitness over time. Whether you're a runner or someone who hasn't exercised in years, you'll work at a level that challenges you without overwhelming you." } },
    { "@type": "Question", "name": "Will I be training with teenagers or children?", "acceptedAnswer": { "@type": "Answer", "text": "No. Adults train in their own dedicated sessions. The pace, content, and atmosphere are tailored to adult learners — focused, respectful, and enjoyable." } },
    { "@type": "Question", "name": "What style of karate do you teach?", "acceptedAnswer": { "@type": "Answer", "text": "We teach Shitoryu Shukokai — a traditional Japanese karate style known for technical precision, powerful striking, and practical self-defence application. You'll learn kata (forms), kihon (basics), and kumite (sparring)." } },
    { "@type": "Question", "name": "Is there a free trial for adults?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Book a free trial class with no obligation. Come along in comfortable clothing — we'll show you how a class runs and you can decide from there with no pressure." } }
  ]
};

export default function AdultsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProgramPage
      name="Adult Karate"
      slug="adults"
      heroImg={`${OLD}/adultsgoogle4.jpg`}
      headline="See why Adult Karate Classes Are the Best Workout in Upper Coomera!"
      subheadline="Whether it's losing weight, building muscle, learning to defend yourself, or just having a blast, our Adult Martial Arts classes have exactly what you need."
      introText="Adult Karate at Kansai Karate Gold Coast is a traditional Shitoryu Shukokai class for students aged 18 and over, based at Upper Coomera QLD 4209. Classes run Monday to Thursday evenings and are taught by Sensei Michael Hunt — 5th Dan, with over 25 years of teaching experience. Whether you have never trained before or are returning to martial arts after a break, adult classes are structured to build your fitness and technique progressively, with no requirement to be fit or athletic before you start. Students work through kata (forms), kihon (basics), and kumite (sparring) in a focused, respectful class environment. Convenient for adults across the northern Gold Coast — Upper Coomera, Coomera, Pimpama, Oxenford, and Hope Island. Book your free first class online and arrive in comfortable clothing."
      benefitsHeading="Adult Karate Classes Build Benefits for Life"
      benefits={[
        {
          title: "Adult Karate Classes at Kansai Karate Build Benefits for Life",
          body: "You'll love the high energy class instruction, your body will love the awesome workout, and your spirit will love the camaraderie and positive atmosphere. Whether you're a complete beginner or returning to martial arts, you'll fit right in.",
        },
        {
          title: "More Than Just a Workout",
          body: "Our classes were designed specifically for the average person. You'll build skills step by step, without having to be a superstar to see improvement. But stick with it, and you'll see your abilities soar!",
        },
        {
          title: "Adult Karate Classes Build Real Skills",
          body: "It's more than just learning awesome looking moves — it's proprioception, balance, agility and more — physical skills that will remain with and benefit you for the rest of your life.",
        },
      ]}
      whyHeading="Why Adults Love Kansai Karate"
      whyFeatures={[
        { title: "Curriculum", body: "Our classes were designed specifically for the average person. You'll build skills step by step, without having to be a superstar to see improvement." },
        { title: "Community", body: "You'll be surrounded by peers striving towards the same goals you are, day in, day out. You'll build friendships and be supported in your individual journey." },
        { title: "Mental Health", body: "You must take time for your own mental health. Our classes help you clear your mind, accomplish your goals, and be more healthy, from the inside out." },
        { title: "Physical Skills", body: "It's proprioception, balance, agility and more — physical skills that will remain with and benefit you for the rest of your life." },
      ]}
      testimonial={{
        text: "Fantastic dojo for the whole family! Wonderful atmosphere of support and friendly teachers. Highly recommended!",
        author: "Liz L., Upper Coomera",
      }}
      faqs={[
        {
          q: "Am I too old or unfit to start karate?",
          a: "Not at all. Most adults in our program start as complete beginners with no martial arts background. Our classes are designed for real people with real bodies — you build fitness and technique progressively, at your own pace.",
        },
        {
          q: "What fitness level do I need?",
          a: "None required to start. The classes build your fitness over time. Whether you're a runner or someone who hasn't exercised in years, you'll work at a level that challenges you without overwhelming you.",
        },
        {
          q: "Will I be training with teenagers or children?",
          a: "No. Adults train in their own dedicated sessions. The pace, content, and atmosphere are tailored to adult learners — focused, respectful, and enjoyable.",
        },
        {
          q: "What style of karate do you teach?",
          a: "We teach Shitoryu Shukokai — a traditional Japanese karate style known for technical precision, powerful striking, and practical self-defence application. You'll learn kata (forms), kihon (basics), and kumite (sparring).",
        },
        {
          q: "Is there a free trial for adults?",
          a: "Yes. Book a free trial class with no obligation. Come along in comfortable clothing — we'll show you how a class runs and you can decide from there with no pressure.",
        },
      ]}
      ctaHeading="This Could be the Best Thing you've ever done for yourself."
      ctaText="Adult Karate Classes Build Benefits for Life"
      secondaryImages={[
        `${OLD}/Adults.jpg`,
        `${OLD}/adultgoogle6.jpg`,
        `${OLD}/adultsgoogle2.jpg`,
      ]}
    />
    </>
  );
}
