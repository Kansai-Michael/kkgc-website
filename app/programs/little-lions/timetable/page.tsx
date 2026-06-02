import TimetablePage from "@/components/TimetablePage";
import type { MoreInfoContent } from "@/components/TimetablePage";

const OLD = "/images";
const BOOKING_URL = "https://app.kihonsoft.au/book/1st-lesson-bookings";

export const metadata = { title: "Little Lions Class Timetable | Kansai Karate Gold Coast", description: "Little Lions class times for ages 5–7 at Kansai Karate Gold Coast, Upper Coomera. Mon–Thu & Sat sessions available. Book your child's FREE first lesson today.", alternates: { canonical: "/programs/little-lions/timetable" } };

const moreInfo: MoreInfoContent = {
  shineHeading: "Are you ready for your child to shine?",
  shineFeatures: [
    {
      title: "Self Esteem",
      body: "It's impossible for your child to try new things and not have challenges. But at Little Lions, we give them challenges on purpose. As they slowly overcome these challenges, their self esteem solidifies, becoming a rock solid foundation of their lives.",
    },
    {
      title: "Team Work",
      body: "Learning to interact with others and work towards a common goal is extremely important, and kids in Little Lions do exactly that! Working together with peers helps kids cultivate interpersonal skills that will benefit them for life!",
    },
    {
      title: "Leadership",
      body: "Your child will be surrounded by positive leadership examples in class, and this matters! It can be difficult for young children to know how to choose positive actions when they're with peers. But if they're enrolled in Little Lions, they'll learn firsthand how to be a positive example in their own lives!",
    },
  ],
  dividerPhoto: `${OLD}/LL1.jpg`,
  classHeading: "What do kids do in Little Lions classes?",
  classIntro: "Most parents understand traditional sports. There will be practices, games, and you'll have to bring snacks at least once! But what is Little Lions like?",
  classItems: [
    {
      title: "Warm Ups & Stretching",
      body: "We don't just stretch to prevent injury, we stretch to increase performance, flexibility, strength and overall muscle capacity. You might not know it, but kids love to stretch, especially when they can see the results!",
    },
    {
      title: "Skill Work",
      body: "Your new karate kid will be creating deep connections between their minds and body as they learn new, amazing skills. Not just kicks and punches, but foundational movement skills that will help them realize their full physical potential.",
    },
    {
      title: "Disguising Repetition",
      body: "Youth Little Lions members take their new skills to \"real work\" application by executing (super fun) technique drills that help embed the learning into their muscle memory.",
    },
    {
      title: "Partner and Team Work",
      body: "Students are often given challenges and drills to complete with partners and larger teams. This creates an opportunity for them to learn to interact positively with other children, effectively communicate their ideas, and be pushed by their teams to do their absolute best.",
    },
  ],
  classPhoto: `${OLD}/ll2.jpg`,
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
      a: "We recommend a minimum of two classes per week for Little Lions. Two sessions gives kids the consistency they need to progress and build habits. Most families find their kids quickly want to come more often once they settle in.",
    },
  ],
  closingStatement:
    "Little Lions is the character enriching, healthy life building, super fun program every parent wishes their child could have.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kansaikarategoldcoast.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Little Lions Karate", "item": "https://kansaikarategoldcoast.com.au/programs/little-lions" },
    { "@type": "ListItem", "position": 3, "name": "Little Lions Class Timetable" },
  ],
};

export default function LittleLionsTimetable() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TimetablePage
      name="Little Lions"
      slug="little-lions"
      heroImg={`${OLD}/lll.jpg`}
      headline="Unleash your child's inner superhero at Little Lions!"
      subheadline="Little Lions is for ages 5–7. Book a FREE First Lesson and watch your child's confidence grow."
      scheduleRows={[
        {
          label: "LITTLE LIONS",
          sublabel: "5 - 7 YEARS",
          mon: "5:00 - 5:45pm",
          tue: "4:15 - 5:00pm",
          wed: "5:00 - 5:45pm",
          thu: "4:15 - 5:00pm",
          sat: "8:45 - 9:30am",
        },
      ]}
      bookingIframeUrl={BOOKING_URL}
      moreInfo={moreInfo}
    />
    </>
  );
}
