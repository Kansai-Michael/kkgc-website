import TimetablePage from "@/components/TimetablePage";

const OLD = "https://kansaikarategoldcoast.com.au/wp-content/uploads/sites/27/2025/02";

const BOOKING_URL = "https://app.kihonsoft.au/book/1st-lesson-bookings";

export const metadata = { title: "Adult Karate Class Timetable | Kansai Karate Gold Coast" };

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
    />
  );
}
