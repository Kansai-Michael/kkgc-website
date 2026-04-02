import TimetablePage from "@/components/TimetablePage";

const OLD = "https://kansaikarategoldcoast.com.au/wp-content/uploads/sites/27/2025/02";

const BOOKING_URL = "https://app.kihonsoft.au/book/1st-lesson-bookings";

export const metadata = { title: "Little Lions Class Timetable | Kansai Karate Gold Coast" };

export default function LittleLionsTimetable() {
  return (
    <TimetablePage
      name="Little Lions"
      slug="little-lions"
      heroImg={`${OLD}/Lillionsgoogle.webp`}
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
    />
  );
}
