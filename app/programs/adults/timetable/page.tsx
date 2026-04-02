import TimetablePage from "@/components/TimetablePage";

const OLD = "https://kansaikarategoldcoast.com.au/wp-content/uploads/sites/27/2025/02";

export const metadata = { title: "Adult Karate Class Timetable | Kansai Karate Gold Coast" };

export default function AdultsTimetable() {
  return (
    <TimetablePage
      name="Adult Karate"
      slug="adults"
      heroImg={`${OLD}/adultsgoogle4.webp`}
      headline="The best workout in Upper Coomera — for real people."
      subheadline="Book a FREE First Lesson and find out why our adults keep coming back."
    />
  );
}
