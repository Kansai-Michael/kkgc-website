import TimetablePage from "@/components/TimetablePage";
import type { MoreInfoContent } from "@/components/TimetablePage";

const OLD = "/images";
const BOOKING_URL = "https://app.kihonsoft.au/book/1st-lesson-bookings";

export const metadata = { title: "Adult Karate Class Timetable | Kansai Karate Gold Coast" };

const moreInfo: MoreInfoContent = {
  shineHeading: "This isn't your average \"workout\" class",
  shineFeatures: [
    {
      title: "Physical",
      body: "If you're looking for physical change, you'll see it after starting with us. We WILL make you stronger, faster, more flexible, and in the process you'll start to look better and feel better.",
    },
    {
      title: "Emotional",
      body: "Self Defence isn't just about stopping \"bad guys\". What about the daily challenges we all face like judgement from others, challenging work situations, and family stress? Being emotionally fit is vital, and this class will help you cultivate that.",
    },
    {
      title: "Spiritual",
      body: "Are you able to connect with your inner sense of peace and calm? Or do you feel like having control is challenging? Our classes will help you find your inner self through hard work and overcoming challenges.",
    },
    {
      title: "Environmental",
      body: "Where you spend your time and who you choose to spend it with has a huge effect on your quality of life. Regularly attending a class where you step into a culture of success and positivity is vital to your own personal success.",
    },
    {
      title: "Social",
      body: "Let's face it: It's not always easy to make friends. We need social interaction! Interacting, making friends, learning and contributing are vital to our existence, and classes at Kansai Karate are built around this.",
    },
    {
      title: "Mental",
      body: "Staying mentally sharp is often the difference between life and death in a self defence situation. The mental benefits of training regularly will spill over into your life outside of class — our students say they feel more aware and connected in their daily lives.",
    },
  ],
  dividerPhoto: `${OLD}/adultsgoogle2.jpg`,
  classHeading: "What do members do in Adult Karate classes?",
  classIntro: "Most people know what the \"gym\" is like. There are sweaty machines and too many people. But what is Adult Karate like?",
  classItems: [
    {
      title: "Warm Ups & Stretching",
      body: "We don't just stretch to prevent injury, we stretch to increase performance, flexibility, strength and overall muscle capacity. When you're taught how to do it well, stretching is amazing!",
    },
    {
      title: "Skill Work",
      body: "You'll begin creating deep connections between your mind and body as you learn new, amazing skills. Not just kicks and punches, but foundational movement skills that will help you realize your full physical potential.",
    },
    {
      title: "Building Muscle Memory",
      body: "Adult Karate members take their new skills to \"real work\" application by executing (super fun) technique drills that help embed the learning deep into your muscle memory.",
    },
    {
      title: "Partner and Team Work",
      body: "Members are often given challenges and drills to complete with partners, teams and groups. This creates an opportunity for you to learn from and support your fellow members as you all strive to be the best version of yourselves!",
    },
  ],
  classPhoto: `${OLD}/ADULTS-3.jpg`,
  faqs: [
    {
      q: "Can I try it before signing up?",
      a: "Yes! Our trial offers and available spaces are updated on this page regularly. Just click one of the buttons on this page to see available spaces.",
    },
    {
      q: "If I like it, how do I sign up?",
      a: "After your trial, you'll have a better idea of whether it's right for you. If it is, we'll walk you through getting started. If you have questions, don't worry — we'll reach out before your trial to be sure you're 100% ready!",
    },
    {
      q: "How many classes do I attend?",
      a: "That depends on your schedule, but many adults are successful with as little as twice a week attendance. If you love classes, we likely have a program that will allow you to attend more!",
    },
  ],
  closingStatement:
    "You're right. Adult Karate at Kansai Karate is 100% worth it.",
  closingSubtext: "But trial class spaces go fast — take advantage of our no-strings-attached offer today.",
};

export default function AdultsTimetable() {
  return (
    <TimetablePage
      name="Adult Karate"
      slug="adults"
      heroImg={`${OLD}/adultsgoogle4.webp`}
      headline="The best workout in Upper Coomera — for real people."
      subheadline="Book a FREE First Lesson and find out why our adults keep coming back."
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
  );
}
