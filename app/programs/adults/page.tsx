import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

const OLD = "/images";

export const metadata: Metadata = {
  title: "Adult Karate Classes | Kansai Karate Gold Coast",
  description: "Adult karate classes in Upper Coomera. Whether it's fitness, self-defence, or mental health — our classes are designed for the average person to see real results.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kansaikarategoldcoast.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Adult Karate Classes", "item": "https://kansaikarategoldcoast.com.au/programs/adults" }
  ]
};

export default function AdultsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProgramPage
      name="Adult Karate"
      slug="adults"
      heroImg={`${OLD}/adultsgoogle4.jpg`}
      headline="See why Adult Karate Classes Are the Best Workout in Upper Coomera!"
      subheadline="Whether it's losing weight, building muscle, learning to defend yourself, or just having a blast, our Adult Martial Arts classes have exactly what you need."
      introText=""
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
        text: "I started as a complete beginner at 38. Six months in and I am fitter than I have been in years. Great community, great instructors.",
        author: "Adult student",
      }}
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
