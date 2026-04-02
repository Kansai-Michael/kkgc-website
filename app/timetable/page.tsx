import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Timetable | Kansai Karate Gold Coast",
  description: "Class schedule for Kansai Karate Upper Coomera. Monday to Thursday afternoons and Saturday mornings. View the timetable and book your spot.",
};

const BOOKING_URL = "https://app.kihonsoft.au/book/1st-lesson-bookings";

export default function TimetablePage() {
  return (
    <>
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Class Timetable</h1>
          <p className="text-xl text-white/80">
            Classes run Monday–Thursday afternoons and Saturday mornings. Find a time that fits your family.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Static timetable — update with real times */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#003087] mb-6">Weekly Schedule</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#003087] text-white">
                    <th className="p-3 text-left">Day</th>
                    <th className="p-3 text-left">Time</th>
                    <th className="p-3 text-left">Program</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { day: "Monday", time: "4:15 – 4:45 PM", program: "Cubs (Ages 3–4)" },
                    { day: "Monday", time: "5:00 – 5:45 PM", program: "Little Lions (Ages 5–7)" },
                    { day: "Monday", time: "5:45 – 6:30 PM", program: "Juniors Beginner (Ages 8–12)" },
                    { day: "Monday", time: "6:30 – 7:15 PM", program: "Juniors Intermediate/Advanced (Ages 8–12)" },
                    { day: "Monday", time: "7:15 – 8:00 PM", program: "Teens (13–18) & Adults (18+)" },
                    { day: "Tuesday", time: "4:15 – 5:00 PM", program: "Little Lions (Ages 5–7)" },
                    { day: "Tuesday", time: "5:00 – 5:45 PM", program: "Juniors Beginner (Ages 8–12)" },
                    { day: "Tuesday", time: "5:45 – 6:30 PM", program: "Juniors Intermediate/Advanced (Ages 8–12)" },
                    { day: "Tuesday", time: "6:30 – 7:15 PM", program: "Teens (Ages 13–18)" },
                    { day: "Tuesday", time: "7:15 – 8:00 PM", program: "Adults (Ages 18+)" },
                    { day: "Wednesday", time: "4:15 – 4:45 PM", program: "Cubs (Ages 3–4)" },
                    { day: "Wednesday", time: "5:00 – 5:45 PM", program: "Little Lions (Ages 5–7)" },
                    { day: "Wednesday", time: "5:45 – 6:30 PM", program: "Juniors Beginner (Ages 8–12)" },
                    { day: "Wednesday", time: "6:30 – 7:15 PM", program: "Juniors Intermediate/Advanced (Ages 8–12)" },
                    { day: "Wednesday", time: "7:15 – 8:00 PM", program: "Teens (13–18) & Adults (18+)" },
                    { day: "Thursday", time: "4:15 – 5:00 PM", program: "Little Lions (Ages 5–7)" },
                    { day: "Thursday", time: "5:00 – 5:45 PM", program: "Juniors Beginner (Ages 8–12)" },
                    { day: "Thursday", time: "5:45 – 6:30 PM", program: "Juniors Intermediate/Advanced (Ages 8–12)" },
                    { day: "Thursday", time: "6:30 – 7:15 PM", program: "Teens (13–18) & Adults (18+)" },
                    { day: "Saturday", time: "8:00 – 8:30 AM", program: "Cubs (Ages 3–4)" },
                    { day: "Saturday", time: "8:45 – 9:30 AM", program: "Little Lions (Ages 5–7)" },
                    { day: "Saturday", time: "9:30 – 10:15 AM", program: "Juniors All Levels (Ages 8–12)" },
                    { day: "Saturday", time: "10:15 – 11:00 AM", program: "Combined Class — Little Lions, Juniors, Teens & Adults" },
                    { day: "Saturday", time: "11:00 – 11:45 AM", program: "Teens (13–18) & Adults (18+)" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-3 font-medium text-[#003087]">{row.day}</td>
                      <td className="p-3 text-gray-600">{row.time}</td>
                      <td className="p-3 text-gray-700">{row.program}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              * Timetable subject to change. Check with Sensei for holiday schedules.
            </p>
          </div>

          {/* Kihon booking embed */}
          <div>
            <h2 className="text-2xl font-bold text-[#003087] mb-2">Book Your First Class</h2>
            <p className="text-gray-500 text-sm mb-6">
              Select your program, choose a day and time that suits you, then fill in your details to complete your booking.
            </p>
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src={BOOKING_URL}
                width="100%"
                height="700"
                frameBorder="0"
                title="Book your first class at Kansai Karate Gold Coast"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
