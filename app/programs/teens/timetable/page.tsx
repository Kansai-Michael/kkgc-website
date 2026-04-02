import TimetablePage from "@/components/TimetablePage";

const OLD = "https://kansaikarategoldcoast.com.au/wp-content/uploads/sites/27/2025/02";

// TODO: Replace with Kihon booking calendar group URL when available
const BOOKING_URL = "https://app.kihonsoft.au/f/9puwpf2s";

export const metadata = { title: "Teens Karate Class Timetable | Kansai Karate Gold Coast" };

export default function TeensTimetable() {
  return (
    <TimetablePage
      name="Teens Karate"
      slug="teens"
      heroImg={`${OLD}/Teengoogle-1.webp`}
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
    />
  );
}
