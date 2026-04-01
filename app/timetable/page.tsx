import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Timetable | Kansai Karate Gold Coast",
  description: "Class schedule for Kansai Karate Upper Coomera. Monday to Thursday afternoons and Saturday mornings. View the timetable and book your spot.",
};

// TODO: Replace KIHON_TIMETABLE_EMBED with your actual Kihon iframe embed code
const KIHON_TIMETABLE_EMBED = "";

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
                    { day: "Monday", time: "4:00 PM", program: "Little Lions (Ages 5–7)" },
                    { day: "Monday", time: "5:00 PM", program: "Juniors Beginner (Ages 8–12)" },
                    { day: "Monday", time: "6:00 PM", program: "Teens & Adults" },
                    { day: "Tuesday", time: "4:00 PM", program: "Cubs (Ages 3–4)" },
                    { day: "Tuesday", time: "5:00 PM", program: "Juniors Intermediate/Advanced" },
                    { day: "Tuesday", time: "6:00 PM", program: "Teens & Adults" },
                    { day: "Wednesday", time: "4:00 PM", program: "Little Lions (Ages 5–7)" },
                    { day: "Wednesday", time: "5:00 PM", program: "Juniors Beginner (Ages 8–12)" },
                    { day: "Thursday", time: "5:00 PM", program: "Juniors Intermediate/Advanced" },
                    { day: "Thursday", time: "6:00 PM", program: "Teens & Adults" },
                    { day: "Saturday", time: "8:30 AM", program: "Cubs (Ages 3–4)" },
                    { day: "Saturday", time: "9:15 AM", program: "Little Lions (Ages 5–7)" },
                    { day: "Saturday", time: "10:00 AM", program: "Juniors All Levels" },
                    { day: "Saturday", time: "11:00 AM", program: "Teens & Adults" },
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
            <h2 className="text-2xl font-bold text-[#003087] mb-6">Book Your Spot</h2>
            {KIHON_TIMETABLE_EMBED ? (
              <div
                className="rounded-xl overflow-hidden border border-gray-200"
                dangerouslySetInnerHTML={{ __html: KIHON_TIMETABLE_EMBED }}
              />
            ) : (
              <div className="bg-gray-100 rounded-xl p-8 text-center text-gray-500">
                <p className="mb-2 font-medium">Booking calendar coming soon.</p>
                <p className="text-sm">
                  In the meantime, call us on{" "}
                  <a href="tel:0489265960" className="text-[#003087] font-semibold hover:underline">
                    0489 265 960
                  </a>{" "}
                  or{" "}
                  <a href="/contact" className="text-[#003087] font-semibold hover:underline">
                    send us a message
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
