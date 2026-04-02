import TimetablePage from "@/components/TimetablePage";

const OLD = "https://kansaikarategoldcoast.com.au/wp-content/uploads/sites/27/2025/02";

const BOOKING_URL = "https://app.kihonsoft.au/book/1st-lesson-bookings";

export const metadata = { title: "Cubs Class Timetable | Kansai Karate Gold Coast" };

export default function CubsTimetable() {
  return (
    <TimetablePage
      name="Cubs"
      slug="cubs"
      heroImg={`${OLD}/cub1.webp`}
      headline="Unleash your child's inner superhero at Cubs!"
      subheadline="Cubs is for ages 3–4. Book a FREE First Lesson and see your little one shine."
      scheduleRows={[
        {
          label: "CUBS",
          sublabel: "3 - 4 YEARS",
          mon: "4:15 - 4:45pm",
          wed: "4:15 - 4:45pm",
          sat: "8:00 - 8:30am",
        },
      ]}
      bookingIframeUrl={BOOKING_URL}
    />
  );
}
