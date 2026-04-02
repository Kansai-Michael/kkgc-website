import TimetablePage from "@/components/TimetablePage";

const OLD = "https://kansaikarategoldcoast.com.au/wp-content/uploads/sites/27/2025/02";

export const metadata = { title: "Juniors Class Timetable | Kansai Karate Gold Coast" };

export default function JuniorsTimetable() {
  return (
    <TimetablePage
      name="Juniors"
      slug="juniors"
      heroImg={`${OLD}/Juniors.webp`}
      headline="Take your child's skills to the next level with Juniors!"
      subheadline="Juniors is for ages 8-12. Book a FREE First Lesson and see real growth in confidence and discipline."
    />
  );
}
