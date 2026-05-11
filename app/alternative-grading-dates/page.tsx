import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alternative Grading Dates | Kansai Karate Gold Coast",
  description: "Can't make the set grading at Upper Coomera? Find alternative grading dates across the Kansai Karate network — Cubs, Little Lions, Juniors, and Teens & Adults.",
  alternates: { canonical: "/alternative-grading-dates" },
};

type GradingSession = {
  date: string;
  time: string;
  dojo: string;
  grades: string;
};

type ProgramSection = {
  program: string;
  sessions: GradingSession[];
};

const gradingData: ProgramSection[] = [
  {
    program: "Cubs",
    sessions: [
      { date: "Tuesday 9th June", time: "4:30pm", dojo: "Springfield Dojo", grades: "All Grades" },
      { date: "Saturday 13th June", time: "8:15am", dojo: "Sumner Park Dojo", grades: "All Grades" },
      { date: "Saturday 20th June", time: "8:00am", dojo: "Willawong Dojo", grades: "All Grades" },
    ],
  },
  {
    program: "Little Lions",
    sessions: [
      { date: "Monday 8th June", time: "4:30pm", dojo: "Springfield Dojo", grades: "White – LL Red+2" },
      { date: "Monday 8th June", time: "5:15pm", dojo: "Springfield Dojo", grades: "LL Yellow – LL Purple" },
      { date: "Saturday 13th June", time: "9:00am", dojo: "Sumner Park Dojo", grades: "White Belts – LL Yellow+2" },
      { date: "Saturday 13th June", time: "9:45am", dojo: "Sumner Park Dojo", grades: "LL Orange – LL Purple" },
      { date: "Wednesday 17th June", time: "5:00pm", dojo: "Moggill Dojo", grades: "All Grades" },
      { date: "Saturday 20th June", time: "8:45am", dojo: "Willawong Dojo", grades: "White – LL Red+2" },
      { date: "Saturday 20th June", time: "9:30am", dojo: "Willawong Dojo", grades: "LL Yellow – LL Purple +2" },
    ],
  },
  {
    program: "Juniors",
    sessions: [
      { date: "Tuesday 9th June", time: "5:15pm", dojo: "Springfield Dojo", grades: "White – Red" },
      { date: "Monday 8th June", time: "6:00pm", dojo: "Springfield Dojo", grades: "Red/Black – Yellow/Black" },
      { date: "Friday 12th June", time: "5:30pm", dojo: "Sumner Park Dojo", grades: "Orange/Black – Blue/Black" },
      { date: "Saturday 13th June", time: "10:30am", dojo: "Sumner Park Dojo", grades: "White – Red/Black" },
      { date: "Saturday 13th June", time: "11:15am", dojo: "Sumner Park Dojo", grades: "Yellow – Orange/Black" },
      { date: "Wednesday 17th June", time: "5:45pm", dojo: "Moggill Dojo", grades: "White – Yellow/Black" },
      { date: "Wednesday 17th June", time: "6:30pm", dojo: "Moggill Dojo", grades: "Orange – Blue/Black" },
      { date: "Saturday 20th June", time: "10:15am", dojo: "Willawong Dojo", grades: "White – Red/Black" },
      { date: "Saturday 20th June", time: "11:00am", dojo: "Willawong Dojo", grades: "Yellow – Green/Black" },
    ],
  },
  {
    program: "Teens & Adults",
    sessions: [
      { date: "Thursday 11th June", time: "6:00pm", dojo: "Sumner Park Dojo", grades: "White – Blue" },
    ],
  },
];

const dojoLocations = [
  { name: "Sumner Park Dojo", address: "Unit 5/71 Jijaws Street, Sumner Park" },
  { name: "Springfield Dojo", address: "Unit 13/21 Technology Drive, Augustine Heights" },
  { name: "Moggill Dojo", address: "3407 Moggill Road, Moggill" },
  { name: "Willawong Dojo", address: "3/14 Buttonwood Place, Willawong" },
];

export default function AlternativeGradingDatesPage() {
  return (
    <>
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Alternative Grading Dates</h1>
          <p className="text-xl text-white/80">
            If you can't make the set grading at Upper Coomera, you're welcome to grade at another Kansai Karate dojo. Find the right date and belt level for your child below.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Period heading */}
          <div className="bg-[#5B7DB1]/10 border border-[#5B7DB1]/30 rounded-lg px-6 py-4">
            <p className="text-[#003087] font-semibold text-lg">Grading Alternative Dates — June 2026</p>
            <p className="text-gray-600 text-sm mt-1">
              This page is updated each quarter. If you have questions about which grading session is right for your child, contact Sensei Michael before attending.
            </p>
          </div>

          {/* Program sections */}
          {gradingData.map((section) => (
            <div key={section.program}>
              <h2 className="text-2xl font-bold text-[#003087] mb-4">{section.program}</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#003087] text-white">
                      <th className="p-3 text-left">Date</th>
                      <th className="p-3 text-left">Time</th>
                      <th className="p-3 text-left">Location</th>
                      <th className="p-3 text-left">Belt Grades</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.sessions.map((s, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="p-3 font-medium text-[#003087] whitespace-nowrap">{s.date}</td>
                        <td className="p-3 text-gray-600 whitespace-nowrap">{s.time}</td>
                        <td className="p-3 text-gray-700">{s.dojo}</td>
                        <td className="p-3 text-gray-700">{s.grades}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Dojo locations */}
          <div>
            <h2 className="text-2xl font-bold text-[#003087] mb-4">Dojo Locations</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {dojoLocations.map((dojo) => (
                <div key={dojo.name} className="bg-gray-50 border border-gray-200 rounded-lg px-5 py-4">
                  <p className="font-bold text-[#003087] text-sm">{dojo.name}</p>
                  <p className="text-gray-600 text-sm mt-1">{dojo.address}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Please arrive 5–10 minutes before your session start time. Belt, gi, and Kansai Karate card are required.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
