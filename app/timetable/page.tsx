import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Timetable | Kansai Karate Gold Coast",
  description: "Class schedule for Kansai Karate Upper Coomera. Monday to Thursday afternoons and Saturday mornings. View the timetable and book your spot.",
  alternates: { canonical: "/timetable" },
};

const HEADER_BG = "#003087";
const LIGHT_COL = "#c5d9f0";

interface Cell {
  label: string;
  grade?: string;
}

interface Row {
  wkTime: string;
  satTime: string;
  mon?: Cell;
  tue?: Cell;
  wed?: Cell;
  thu?: Cell;
  sat?: Cell;
}

const ROWS: Row[] = [
  {
    wkTime: "4:15pm",
    satTime: "8:00am",
    mon: { label: "Cubs", grade: "Ages 3–4" },
    tue: { label: "Little Lions", grade: "Ages 5–7" },
    wed: { label: "Cubs", grade: "Ages 3–4" },
    thu: { label: "Little Lions", grade: "Ages 5–7" },
    sat: { label: "Cubs", grade: "Ages 3–4" },
  },
  {
    wkTime: "5:00pm",
    satTime: "8:45am",
    mon: { label: "Little Lions", grade: "Ages 5–7" },
    tue: { label: "Juniors", grade: "Beginner" },
    wed: { label: "Little Lions", grade: "Ages 5–7" },
    thu: { label: "Juniors", grade: "Beginner" },
    sat: { label: "Little Lions", grade: "Ages 5–7" },
  },
  {
    wkTime: "5:45pm",
    satTime: "9:30am",
    mon: { label: "Juniors", grade: "Beginner" },
    tue: { label: "Juniors", grade: "Int – Adv" },
    wed: { label: "Juniors", grade: "Beginner" },
    thu: { label: "Juniors", grade: "Int – Adv" },
    sat: { label: "Juniors", grade: "All Levels" },
  },
  {
    wkTime: "6:30pm",
    satTime: "10:15am",
    mon: { label: "Juniors", grade: "Int – Adv" },
    tue: { label: "Teens", grade: "Ages 13–18" },
    wed: { label: "Juniors", grade: "Int – Adv" },
    thu: { label: "Teens & Adults" },
    sat: { label: "Combined", grade: "Little Lions, Juniors, Teens & Adults" },
  },
  {
    wkTime: "7:15pm",
    satTime: "11:00am",
    mon: { label: "Teens & Adults" },
    tue: { label: "Adults", grade: "Ages 18+" },
    wed: { label: "Teens & Adults" },
    thu: { label: "Black Belt Only" },
    sat: { label: "Teens & Adults" },
  },
];

const DAY_KEYS: { label: string; key: "mon" | "tue" | "wed" | "thu" }[] = [
  { label: "MONDAY", key: "mon" },
  { label: "TUESDAY", key: "tue" },
  { label: "WEDNESDAY", key: "wed" },
  { label: "THURSDAY", key: "thu" },
];

function ClassCell({ cell, light }: { cell?: Cell; light?: boolean }) {
  return (
    <td
      className="p-2 text-center align-middle border-x border-gray-100 leading-tight text-gray-800"
      style={{ backgroundColor: light ? LIGHT_COL : "white" }}
    >
      {cell ? (
        <>
          <div className="font-bold text-[13px]">{cell.label}</div>
          {cell.grade && <div className="mt-0.5 text-[11px] text-gray-500">({cell.grade})</div>}
        </>
      ) : (
        ""
      )}
    </td>
  );
}

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
          <h2 className="text-2xl font-bold text-[#003087] mb-6">Weekly Schedule</h2>
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr style={{ backgroundColor: HEADER_BG }}>
                  <th className="p-3 text-center text-white font-bold tracking-wider uppercase" style={{ minWidth: "70px" }}>
                    Time
                  </th>
                  {DAY_KEYS.map((d) => (
                    <th
                      key={d.key}
                      className="p-3 text-center text-white font-bold tracking-wider uppercase"
                      style={{ minWidth: "84px" }}
                    >
                      {d.label}
                    </th>
                  ))}
                  <th className="p-3 text-center text-white font-bold tracking-wider uppercase" style={{ minWidth: "70px" }}>
                    Time
                  </th>
                  <th className="p-3 text-center text-white font-bold tracking-wider uppercase" style={{ minWidth: "84px" }}>
                    SATURDAY
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={i} className="border-t border-gray-200">
                    <td className="p-3 text-center text-white font-bold" style={{ backgroundColor: HEADER_BG }}>
                      {row.wkTime}
                    </td>
                    {DAY_KEYS.map((d) => (
                      <ClassCell key={d.key} cell={row[d.key]} light={d.key === "tue" || d.key === "thu"} />
                    ))}
                    <td className="p-3 text-center text-white font-bold" style={{ backgroundColor: HEADER_BG }}>
                      {row.satTime}
                    </td>
                    <ClassCell cell={row.sat} light />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
