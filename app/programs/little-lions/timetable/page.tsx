import TimetablePage from "@/components/TimetablePage";

const OLD = "https://kansaikarategoldcoast.com.au/wp-content/uploads/sites/27/2025/02";

export const metadata = { title: "Little Lions Class Timetable | Kansai Karate Gold Coast" };

export default function LittleLionsTimetable() {
  return (
    <TimetablePage
      name="Little Lions"
      slug="little-lions"
      heroImg={`${OLD}/Lillionsgoogle.webp`}
      headline="Unleash your child's inner superhero at Little Lions!"
      subheadline="Little Lions is for ages 5-7. Book a FREE First Lesson and watch your child's confidence grow."
    />
  );
}
