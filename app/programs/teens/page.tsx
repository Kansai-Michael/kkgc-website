import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

const OLD = "/images";

export const metadata: Metadata = {
  title: "Teens Karate (Ages 13+) | Kansai Karate Gold Coast",
  description: "Teen karate classes in Upper Coomera. Build fitness, focus, and real self-defence skills in a structured class designed specifically for teenagers.",
  alternates: { canonical: "/programs/teens" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kansaikarategoldcoast.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Teens Karate (Ages 13–18)", "item": "https://kansaikarategoldcoast.com.au/programs/teens" }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Teen Karate Classes (Ages 13–18)",
  "description": "Karate classes designed specifically for teenagers in Upper Coomera. Builds fitness, focus, self-defence skills, and mental resilience in a class designed for teens.",
  "url": "https://kansaikarategoldcoast.com.au/programs/teens",
  "provider": { "@type": "SportsActivityLocation", "name": "Kansai Karate Gold Coast", "url": "https://kansaikarategoldcoast.com.au" },
  "areaServed": { "@type": "City", "name": "Upper Coomera" },
  "audience": { "@type": "PeopleAudience", "suggestedMinAge": "13", "suggestedMaxAge": "18" },
  "serviceType": "Karate Classes",
  "offers": { "@type": "Offer", "description": "Free trial class available. No uniform or equipment required to start.", "url": "https://kansaikarategoldcoast.com.au/programs/teens" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "My teenager isn't interested in sport — could karate still work for them?", "acceptedAnswer": { "@type": "Answer", "text": "Karate appeals to teens who don't fit the team-sport mould. It's individual, progressive, and non-competitive by default (though competition is available if they want it). Many of our most committed teen students started reluctantly and found something they genuinely love." } },
    { "@type": "Question", "name": "Will teens train with adults?", "acceptedAnswer": { "@type": "Answer", "text": "No. Teens have their own dedicated classes designed specifically for their age group — the pace, content, and social environment are tailored to teenagers, not mixed with adult beginners or younger kids." } },
    { "@type": "Question", "name": "Is karate good for teenagers' mental health?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Structured physical activity is one of the most effective ways to manage stress and anxiety. Karate adds the mental benefits of goal-setting, self-discipline, and a supportive community — all of which are particularly valuable during the high school years." } },
    { "@type": "Question", "name": "Can teens compete?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, through QKA and AKF affiliated tournaments. Competition is entirely optional — plenty of our teen students train purely for fitness, confidence, and the art itself." } },
    { "@type": "Question", "name": "How do I book a free trial for my teen?", "acceptedAnswer": { "@type": "Answer", "text": "Use the Book Free Trial button on this page. We'll confirm a session time and have everything ready for their first visit. No uniform or equipment needed to start." } }
  ]
};

export default function TeensPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProgramPage
      name="Teens Karate"
      slug="teens"
      heroImg={`${OLD}/1-adult.jpg`}
      headline="Teen Karate Classes in Upper Coomera — Designed for Ages 13–18"
      subheadline="Martial Arts is the perfect activity for teenagers! It gives them an outlet for their unique energy through engagement, and cross motor skill activity, in a structured class designed just for them."
      introText="Teen Karate at Kansai Karate Gold Coast is a dedicated class for students aged 13 to 18, held at our dojo in Upper Coomera QLD 4209. Unlike programs that mix teens with younger children or adults, this class is built specifically for teenagers — the pace, content, and atmosphere are designed around their energy and maturity. Classes run Monday to Thursday evenings and are taught by Sensei Michael Hunt (5th Dan Shitoryu Shukokai). Teens learn kata, kihon, and sparring through structured training that builds fitness, focus, and genuine self-defence capability. Competition is available through QKA and AKF affiliations for those who want it, or students can train purely for the personal development and fitness benefits. Your teen's first class is free — book online and arrive in comfortable clothes."
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
        text: "Michael and the team are dedicated to giving the students confidence and skills to help them feel good about who they are and stay very fit at the same time. Our son has been a student for almost 6 years and we attribute his positive growth to his karate training.",
        author: "Simon Taylor — Google Review ⭐⭐⭐⭐⭐",
      }}
      faqs={[
        {
          q: "My teenager isn't interested in sport — could karate still work for them?",
          a: "Karate appeals to teens who don't fit the team-sport mould. It's individual, progressive, and non-competitive by default (though competition is available if they want it). Many of our most committed teen students started reluctantly and found something they genuinely love.",
        },
        {
          q: "Will teens train with adults?",
          a: "No. Teens have their own dedicated classes designed specifically for their age group — the pace, content, and social environment are tailored to teenagers, not mixed with adult beginners or younger kids.",
        },
        {
          q: "Is karate good for teenagers' mental health?",
          a: "Yes. Structured physical activity is one of the most effective ways to manage stress and anxiety. Karate adds the mental benefits of goal-setting, self-discipline, and a supportive community — all of which are particularly valuable during the high school years.",
        },
        {
          q: "Can teens compete?",
          a: "Yes, through QKA and AKF affiliated tournaments. Competition is entirely optional — plenty of our teen students train purely for fitness, confidence, and the art itself.",
        },
        {
          q: "How do I book a free trial for my teen?",
          a: "Use the Book Free Trial button on this page. We'll confirm a session time and have everything ready for their first visit. No uniform or equipment needed to start.",
        },
      ]}
      ctaHeading="This Could be the Best Thing you've ever done for your teen."
      ctaText="Teen Karate Classes Build Benefits for Life"
      secondaryImages={[
        `${OLD}/Teengoogle-1.jpg`,
        `${OLD}/teens.jpg`,
        `${OLD}/adultgoogle6.jpg`,
      ]}
    />
    </>
  );
}
