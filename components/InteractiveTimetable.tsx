"use client";

import { useState } from "react";
import { Swords } from "lucide-react";

/* ── Brand tokens (match the rest of the site) ── */
const HEADER_BG = "#003087";
const ACCENT = "#FFB800";
const BODY_BLUE = "#5B7DB1";

/* ── Belt-level group ids ── */
type Group =
  | "LL"
  | "JrBeg" | "JrInt" | "JrAdv" | "JrBB"
  | "TnBI" | "TnAdv" | "TnBB"
  | "AdBI" | "AdAdv" | "AdBB";

/* ── Reusable eligibility sets ── */
const ALL_JR: Group[] = ["JrBeg", "JrInt", "JrAdv", "JrBB"];
const ALL_TN: Group[] = ["TnBI", "TnAdv", "TnBB"];
const ALL_AD: Group[] = ["AdBI", "AdAdv", "AdBB"];
const ALL_TN_AD: Group[] = [...ALL_TN, ...ALL_AD];
const COMBINED: Group[] = [...ALL_JR, ...ALL_TN, ...ALL_AD];
const EVERYONE: Group[] = ["LL", ...COMBINED];
const ADV_CLASS: Group[] = ["JrAdv", "JrBB", ...ALL_TN_AD];
const BLACK_BELT: Group[] = ["JrBB", "TnBB", "AdBB"];

interface Cell {
  label: string;
  grade?: string;
  eligible: Group[];
}

interface Row {
  wkTime: string;
  satTime: string;
  mon: Cell;
  tue: Cell;
  wed: Cell;
  thu: Cell;
  sat: Cell;
}

const LITTLE_LIONS: Cell = { label: "Little Lions", grade: "All Grades", eligible: ["LL"] };

const ROWS: Row[] = [
  {
    wkTime: "4:15pm",
    satTime: "8:00am",
    mon: LITTLE_LIONS,
    tue: LITTLE_LIONS,
    wed: LITTLE_LIONS,
    thu: LITTLE_LIONS,
    sat: LITTLE_LIONS,
  },
  {
    wkTime: "5:00pm",
    satTime: "8:45am",
    mon: { label: "Juniors", grade: "Beg – Int", eligible: ["JrBeg", "JrInt"] },
    tue: { label: "Juniors", grade: "All Grades", eligible: ALL_JR },
    wed: { label: "Juniors", grade: "Beg – Int", eligible: ["JrBeg", "JrInt"] },
    thu: { label: "Juniors", grade: "All Grades", eligible: ALL_JR },
    sat: { label: "Combined", grade: "Little Lions, Juniors, Teens & Adults", eligible: EVERYONE },
  },
  {
    wkTime: "5:45pm",
    satTime: "9:30am",
    mon: { label: "Juniors", grade: "All Grades", eligible: ALL_JR },
    tue: { label: "Combined", grade: "Juniors, Teens & Adults", eligible: COMBINED },
    wed: { label: "Juniors", grade: "All Grades", eligible: ALL_JR },
    thu: { label: "Combined", grade: "Juniors, Teens & Adults", eligible: COMBINED },
    sat: { label: "Juniors", grade: "All Grades", eligible: ALL_JR },
  },
  {
    wkTime: "6:30pm",
    satTime: "10:15am",
    mon: { label: "Adv. Class", grade: "Junior Adv, Teens & Adults", eligible: ADV_CLASS },
    tue: { label: "Teens", grade: "All Grades", eligible: ALL_TN },
    wed: { label: "Adv. Class", grade: "Junior Adv, Teens & Adults", eligible: ADV_CLASS },
    thu: { label: "Teens & Adults", grade: "All Grades", eligible: ALL_TN_AD },
    sat: { label: "Adv. Class", grade: "Junior Adv, Teens & Adults", eligible: ADV_CLASS },
  },
  {
    wkTime: "7:15pm",
    satTime: "11:00am",
    mon: { label: "Teens & Adults", grade: "All Grades", eligible: ALL_TN_AD },
    tue: { label: "Adults", grade: "All Grades", eligible: ALL_AD },
    wed: { label: "Teens & Adults", grade: "All Grades", eligible: ALL_TN_AD },
    thu: { label: "Black Belt Only", eligible: BLACK_BELT },
    sat: { label: "Teens & Adults", grade: "All Grades", eligible: ALL_TN_AD },
  },
];

/* ── Grouped buttons ── */
interface ButtonDef { label: string; group: Group }
interface ButtonRow { program: string; buttons: ButtonDef[] }

const STANDALONE: ButtonDef = { label: "Little Lions", group: "LL" };
const BUTTON_ROWS: ButtonRow[] = [
  {
    program: "Juniors",
    buttons: [
      { label: "Beginner", group: "JrBeg" },
      { label: "Intermediate", group: "JrInt" },
      { label: "Advanced", group: "JrAdv" },
      { label: "Black Belt", group: "JrBB" },
    ],
  },
  {
    program: "Teens",
    buttons: [
      { label: "Beg – Int", group: "TnBI" },
      { label: "Advanced", group: "TnAdv" },
      { label: "Black Belt", group: "TnBB" },
    ],
  },
  {
    program: "Adults",
    buttons: [
      { label: "Beg – Int", group: "AdBI" },
      { label: "Advanced", group: "AdAdv" },
      { label: "Black Belt", group: "AdBB" },
    ],
  },
];

type CellStatus = "neutral" | "on" | "off";

export default function InteractiveTimetable() {
  const [selected, setSelected] = useState<Group | null>(null);

  const statusFor = (cell: Cell): CellStatus => {
    if (!selected) return "neutral";
    return cell.eligible.includes(selected) ? "on" : "off";
  };

  const isActive = (g: Group) => selected === g;

  const btnClass = (active: boolean) =>
    `px-3 py-1.5 rounded-md text-sm font-semibold border transition-colors ${
      active
        ? "text-[#001040] border-transparent shadow"
        : "bg-white text-[#003087] border-gray-300 hover:border-[#FFB800] hover:bg-[#FFF7E0]"
    }`;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Instructions */}
      <p className="text-center text-gray-600 text-sm mb-5">
        Pick your program below to highlight the classes you can attend. The classes that
        don&apos;t apply will fade out. Tap <span className="font-semibold">Show all classes</span> to
        see the full timetable again.
      </p>

      {/* Buttons */}
      <div className="mb-8 space-y-3">
        {/* Little Lions + reset */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setSelected(isActive("LL") ? null : "LL")}
            className={btnClass(isActive("LL"))}
            style={isActive("LL") ? { backgroundColor: ACCENT } : undefined}
          >
            {STANDALONE.label}
          </button>
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="px-3 py-1.5 rounded-md text-sm font-semibold border border-gray-300 text-gray-600 bg-gray-50 hover:bg-gray-100 transition-colors ml-auto"
          >
            Show all classes
          </button>
        </div>

        {/* Program rows */}
        {BUTTON_ROWS.map((row) => (
          <div key={row.program} className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 w-20 shrink-0">
              {row.program}
            </span>
            {row.buttons.map((b) => (
              <button
                key={b.group}
                type="button"
                onClick={() => setSelected(isActive(b.group) ? null : b.group)}
                className={btnClass(isActive(b.group))}
                style={isActive(b.group) ? { backgroundColor: ACCENT } : undefined}
              >
                {b.label}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Timetable */}
      <div className="overflow-x-auto rounded-lg shadow-lg mb-8">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr style={{ backgroundColor: HEADER_BG }}>
              <th className="p-3 text-center" style={{ minWidth: "70px" }}>
                <Swords className="w-5 h-5 text-white mx-auto" />
              </th>
              {["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY"].map((d) => (
                <th
                  key={d}
                  className="p-3 text-center text-white font-bold tracking-wider uppercase"
                  style={{ minWidth: "84px" }}
                >
                  {d}
                </th>
              ))}
              <th className="p-3 text-center" style={{ minWidth: "70px" }}>
                <Swords className="w-5 h-5 text-white mx-auto" />
              </th>
              <th
                className="p-3 text-center text-white font-bold tracking-wider uppercase"
                style={{ minWidth: "84px" }}
              >
                SATURDAY
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => {
              const cells: { key: string; time?: string; cell?: Cell }[] = [
                { key: "wkTime", time: row.wkTime },
                { key: "mon", cell: row.mon },
                { key: "tue", cell: row.tue },
                { key: "wed", cell: row.wed },
                { key: "thu", cell: row.thu },
                { key: "satTime", time: row.satTime },
                { key: "sat", cell: row.sat },
              ];
              return (
                <tr key={i} className="border-t border-gray-200">
                  {cells.map((c) => {
                    if (c.time !== undefined) {
                      return (
                        <td
                          key={c.key}
                          className="p-3 text-center text-white font-bold"
                          style={{ backgroundColor: HEADER_BG }}
                        >
                          {c.time}
                        </td>
                      );
                    }
                    const cell = c.cell!;
                    const status = statusFor(cell);
                    const base = "p-2 text-center align-middle border-x border-gray-100 leading-tight transition-all";
                    let cls = `${base} text-gray-800 bg-white`;
                    let style: React.CSSProperties | undefined;
                    if (status === "on") {
                      cls = `${base} font-semibold text-[#003087]`;
                      style = { backgroundColor: "#FFF7E0", boxShadow: `inset 0 0 0 2px ${ACCENT}` };
                    } else if (status === "off") {
                      cls = `${base} text-gray-300 bg-gray-50 opacity-60`;
                    }
                    return (
                      <td key={c.key} className={cls} style={style}>
                        <div className="font-bold text-[13px]">{cell.label}</div>
                        {cell.grade && (
                          <div className={`mt-0.5 text-[11px] ${status === "off" ? "" : "text-gray-500"}`}>
                            ({cell.grade})
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Notes */}
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
        <h3 className="font-bold text-[#003087] mb-3 uppercase tracking-wide text-xs">Notes</h3>
        <p className="mb-3 text-gray-600">
          Our Cubs (ages 3–4) now train on their own floor upstairs, with a separate timetable and
          booking system — <span className="font-semibold">coming soon</span>.
        </p>
        <ul className="space-y-2">
          <li><span className="font-semibold text-[#003087]">All Grades:</span> all belts in that program (e.g. all Little Lion belts).</li>
          <li><span className="font-semibold text-[#003087]">Beg – Int:</span> Beginner &amp; Intermediate belts — White, Red, Yellow, Orange, Green &amp; Blue (including black stripes).</li>
          <li><span className="font-semibold text-[#003087]">Adv (Advanced):</span> Advanced belts — Purple, Brown &amp; Black.</li>
          <li><span className="font-semibold text-[#003087]">Black Belt Only:</span> Black Belt students, both Junior and Adult grades.</li>
          <li><span className="font-semibold text-[#003087]">Combined Classes:</span> Monday–Thursday includes Juniors, Teens &amp; Adults. The Saturday Combined class also includes Little Lions.</li>
        </ul>
      </div>

      <p className="text-center text-xs text-gray-400 mt-4" style={{ color: BODY_BLUE }}>
        Timetable subject to change. Check with Sensei for holiday schedules.
      </p>
    </div>
  );
}
