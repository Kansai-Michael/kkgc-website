import TimetablePage from "@/components/TimetablePage";

const OLD = "https://kansaikarategoldcoast.com.au/wp-content/uploads/sites/27/2025/02";

// TODO: Replace with Kihon booking calendar group URL when available
const BOOKING_URL = "https://app.kihonsoft.au/f/jytbwwjt";

export const metadata = { title: "Juniors Class Timetable | Kansai Karate Gold Coast" };

export default function JuniorsTimetable() {
  return (
    <TimetablePage
      name="Juniors"
      slug="juniors"
      heroImg={`${OLD}/Juniors.webp`}
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
    />
  );
}
