import TimetablePage from "@/components/TimetablePage";

const OLD = "https://kansaikarategoldcoast.com.au/wp-content/uploads/sites/27/2025/02";

export const metadata = { title: "Teens Karate Class Timetable | Kansai Karate Gold Coast" };

export default function TeensTimetable() {
  return (
    <TimetablePage
      name="Teens Karate"
      slug="teens"
      heroImg={`${OLD}/Teengoogle-1.webp`}
      headline="Build fitness, focus, and real self-defence skills!"
      subheadline="Teens Karate is for ages 13+. Book a FREE First Lesson and discover what you're capable of."
    />
  );
}
