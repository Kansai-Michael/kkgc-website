import TimetablePage from "@/components/TimetablePage";
import type { MoreInfoContent } from "@/components/TimetablePage";

const OLD = "/images";
const OLD_43 = "/images";
const BOOKING_URL = "https://app.kihonsoft.au/book/1st-lesson-bookings";

export const metadata = { title: "Juniors Class Timetable | Kansai Karate Gold Coast", description: "Junior karate class times for ages 8–12 at Kansai Karate Gold Coast, Upper Coomera. Mon–Thu evenings & Sat mornings. Book a FREE trial class today.", alternates: { canonical: "/programs/juniors/timetable" } };

const moreInfo: MoreInfoContent = {
  shineHeading: "Are you ready for your child to shine?",
  shineFeatures: [
    {
      title: "Self Esteem",
      body: "It's impossible for your child to try new things and not have challenges. But at Juniors Karate, we give them challenges on purpose. As they slowly overcome these challenges, their self esteem solidifies, becoming a rock solid foundation of their lives.",
    },
    {
      title: "Team Work",
      body: "Learning to interact with others and work towards a common goal is extremely important, and kids in Juniors Karate do exactly that! Working together with peers helps kids cultivate interpersonal skills that will benefit them for life!",
    },
    {
      title: "Leadership",
      body: "Not only will your child be surrounded by positive leadership examples in class, as they advance they'll get opportunities to be in leadership positions of their own if they choose. They'll learn firsthand how to be a positive example in their own lives!",
    },
  ],
  dividerPhoto: `${OLD_43}/kansai-homeheader.webp`,
  classHeading: "What do kids do in Juniors Karate classes?",
  classIntro: "Most parents understand traditional sports. There will be practices, games, and you'll have to bring snacks at least once. But what is Juniors Karate like?",
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
      body: "Youth Juniors Karate members take their new skills to \"real work\" application by executing (super fun) technique drills that help embed the learning into their muscle memory.",
    },
    {
      title: "Partner and Team Work",
      body: "Students are often given challenges and drills to complete with partners and larger teams. This creates an opportunity for them to learn to interact positively with other children, effectively communicate their ideas, and be pushed by their teams to do their absolute best.",
    },
  ],
  classPhoto: `${OLD_43}/Adults.jpg`,
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
      a: "That depends on your schedule and program, but many kids in Juniors Karate are successful with as little as once a week attendance. If they love classes, we likely have a program that will allow them to attend more!",
    },
  ],
  closingStatement:
    "Juniors Karate is the character enriching, healthy life building, super fun program every parent wishes their child could have.",
};

export default function JuniorsTimetable() {
  return (
    <TimetablePage
      name="Juniors"
      slug="juniors"
      heroImg={`${OLD}/juniorsgoogle.jpg`}
      headline="Take your child's skills to the next level with Juniors!"
      subheadline="Juniors is for ages 8–12. Book a FREE First Lesson and see real growth in confidence and discipline."
      scheduleRows={[
        {
          label: "JUNIORS",
          sublabel: "8 - 12 YEARS\n(Beginners)",
          mon: "5:45 - 6:30pm",
          tue: "5:00 - 5:45pm",
          wed: "5:45 - 6:30pm",
          thu: "5:00 - 5:45pm",
          sat: "9:30 - 10:15am",
        },
        {
          label: "JUNIORS",
          sublabel: "8 - 12 YEARS\n(Int - Adv)",
          mon: "6:30 - 7:15pm",
          tue: "5:45 - 6:30pm",
          wed: "6:30 - 7:15pm",
          thu: "5:45 - 6:30pm",
          sat: "9:30 - 10:15am",
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
  );
}
