import TimetablePage from "@/components/TimetablePage";
import type { MoreInfoContent } from "@/components/TimetablePage";

const OLD = "/images";
const BOOKING_URL = "https://app.kihonsoft.au/book/1st-lesson-bookings";

export const metadata = { title: "Teens Karate Class Timetable | Kansai Karate Gold Coast", description: "Teen karate class times for ages 13–18 at Kansai Karate Gold Coast, Upper Coomera. Mon–Thu evenings & Sat mornings. Book a FREE first lesson today.", alternates: { canonical: "/programs/teens/timetable" } };

const moreInfo: MoreInfoContent = {
  shineHeading: "Are you ready for your teenager to shine?",
  shineFeatures: [
    {
      title: "Self Esteem",
      body: "It's impossible for your teen to try new things and not have challenges. But at Teen Karate, we give them challenges on purpose. As they slowly overcome these challenges, their self esteem solidifies, becoming a rock solid foundation of their lives.",
    },
    {
      title: "Team Work",
      body: "Learning to interact with others and work towards a common goal is extremely important, and teenagers in Teen Karate do exactly that! Working together with peers helps teens cultivate interpersonal skills that will benefit them for life!",
    },
    {
      title: "Leadership",
      body: "Not only will your teenager be surrounded by positive leadership examples in class, as they advance they'll get opportunities to be in leadership positions of their own if they choose. They'll learn firsthand how to be a positive example in their own lives!",
    },
  ],
  dividerPhoto: `${OLD}/adultsgoogle5.jpg`,
  classHeading: "What do teens do in Teen Karate classes?",
  classIntro: "Most parents understand typical teen activities. Take them to a friend's house and then prepare to hear all about how amazing the video game play was once you pick them up. But what are Teen Karate classes like?",
  classItems: [
    {
      title: "Warm Ups & Stretching",
      body: "We don't just stretch to prevent injury, we stretch to increase performance, flexibility, strength and overall muscle capacity. You might not know it, but kids love to stretch, especially when they can see the results!",
    },
    {
      title: "Skill Work",
      body: "Your new super-teen karate kid will be creating deep connections between their minds and body as they learn new, amazing skills. Not just cool karate moves, but foundational movement skills that will help them realize their full physical potential.",
    },
    {
      title: "Disguising Repetition",
      body: "Teen Karate members take their new skills to \"real work\" application by executing (super fun) technique drills that help embed the learning into their muscle memory.",
    },
    {
      title: "Partner and Team Work",
      body: "Students are often given challenges and drills to complete with partners and larger teams. This creates an opportunity for them to learn to interact positively with others, effectively communicate their ideas, and be pushed by their teams to do their absolute best.",
    },
  ],
  classPhoto: `${OLD}/adultgoogle6.jpg`,
  faqs: [
    {
      q: "Can we try it before signing up?",
      a: "Yes! Our trial offers and available spaces are updated on this page regularly. Just click one of the buttons on this page to see available spaces.",
    },
    {
      q: "If we like it, how do we sign up?",
      a: "After your child's trial, we'll all know if it was the right activity for them. If it is, we'll walk you through getting started at Kansai Karate. If you have questions, don't worry — we'll reach out before your child's trial to be sure you're 100% ready!",
    },
    {
      q: "How many classes do we attend?",
      a: "We recommend a minimum of two classes per week for Teen Karate. Two sessions gives teens the consistency to build real technique and see genuine progress. Many students train three times a week once they find their feet.",
    },
  ],
  closingStatement:
    "Teen Karate is the character enriching, healthy life building, super fun program every parent wishes their child could have.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kansaikarategoldcoast.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Teens Karate", "item": "https://kansaikarategoldcoast.com.au/programs/teens" },
    { "@type": "ListItem", "position": 3, "name": "Teens Karate Class Timetable" },
  ],
};

export default function TeensTimetable() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TimetablePage
      name="Teens Karate"
      slug="teens"
      heroImg={`${OLD}/Teengoogle-1.jpg`}
      headline="Build fitness, focus, and real self-defence skills!"
      subheadline="Teens Karate is for ages 13–18. Book a FREE First Lesson and discover what you're capable of."
      scheduleRows={[
        {
          label: "TEENS",
          sublabel: "13 - 18 YEARS",
          mon: "7:15 - 8:00pm",
          tue: "6:30 - 7:15pm",
          wed: "7:15 - 8:00pm",
          thu: "6:30 - 7:15pm",
          sat: "11:00 - 11:45am",
        },
        {
          label: "ADULTS",
          sublabel: "18 YEARS +",
          mon: "7:15 - 8:00pm",
          tue: "7:15 - 8:00pm",
          wed: "7:15 - 8:00pm",
          thu: "6:30 - 7:15pm",
          sat: "11:00 - 11:45am",
        },
        {
          label: "Combined Class",
          sublabel: "Little Lions,\nJuniors,\nTeens & Adults",
          sat: "10:15 - 11:00am",
        },
      ]}
      bookingIframeUrl={BOOKING_URL}
      moreInfo={moreInfo}
    />
    </>
  );
}
