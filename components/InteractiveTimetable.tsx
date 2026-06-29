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

/* ── Programs → belt ranks ── */
type ProgramId = "LL" | "JR" | "TN" | "AD";

interface RankDef { label: string; group: Group; belts: string }
interface ProgramDef {
  id: ProgramId;
  label: string;
  age: string;
  groups: Group[]; // every group in this program (program-level highlight)
  ranks: RankDef[]; // empty for Little Lions
}

const BEG_INT_BELTS = "White, Red, Yellow, Orange, Green, Blue";

const PROGRAMS: ProgramDef[] = [
  { id: "LL", label: "Little Lions", age: "Ages 5–7", groups: ["LL"], ranks: [] },
  {
    id: "JR",
    label: "Juniors",
    age: "Ages 8–12",
    groups: ALL_JR,
    ranks: [
      { label: "Beginner", group: "JrBeg", belts: "White, Red, Yellow" },
      { label: "Intermediate", group: "JrInt", belts: "Orange, Green, Blue" },
      { label: "Advanced", group: "JrAdv", belts: "Purple, Brown" },
      { label: "Black Belt", group: "JrBB", belts: "Black" },
    ],
  },
  {
    id: "TN",
    label: "Teens",
    age: "Ages 13–18",
    groups: ALL_TN,
    ranks: [
      { label: "Beg – Int", group: "TnBI", belts: BEG_INT_BELTS },
      { label: "Advanced", group: "TnAdv", belts: "Purple, Brown" },
      { label: "Black Belt", group: "TnBB", belts: "Black" },
    ],
  },
  {
    id: "AD",
    label: "Adults",
    age: "Ages 18+",
    groups: ALL_AD,
    ranks: [
      { label: "Beg – Int", group: "AdBI", belts: BEG_INT_BELTS },
      { label: "Advanced", group: "AdAdv", belts: "Purple, Brown" },
      { label: "Black Belt", group: "AdBB", belts: "Black" },
    ],
  },
];

type CellStatus = "neutral" | "on" | "off";

export default function InteractiveTimetable() {
  const [programId, setProgramId] = useState<ProgramId | null>(null);
  const [rank, setRank] = useState<Group | null>(null);

  const currentProgram = PROGRAMS.find((p) => p.id === programId) ?? null;

  // Active highlight set: a chosen rank narrows to one group; otherwise the whole program.
  const activeGroups: Group[] | null = rank
    ? [rank]
    : currentProgram
    ? currentProgram.groups
    : null;

  const statusFor = (cell: Cell): CellStatus => {
    if (!activeGroups) return "neutral";
    return cell.eligible.some((g) => activeGroups.includes(g)) ? "on" : "off";
  };

  const selectProgram = (id: ProgramId) => {
    if (programId === id) {
      setProgramId(null); // toggle off + collapse
      setRank(null);
    } else {
      setProgramId(id);
      setRank(null);
    }
  };

  const selectRank = (g: Group) => setRank((prev) => (prev === g ? null : g));

  const reset = () => {
    setProgramId(null);
    setRank(null);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Cubs note */}
      <div className="mb-5 rounded-lg border border-[#FFB800]/50 bg-[#FFF7E0] px-4 py-3 text-sm text-[#003087]">
        <span className="font-bold">Cubs (ages 3–4):</span> our littlest students now train on their own
        floor upstairs. A separate Cubs timetable and booking system is{" "}
        <span className="font-semibold">coming soon</span>.
      </div>

      {/* Instructions */}
      <p className="text-center text-gray-600 text-sm mb-5">
        Pick your program to highlight the classes you can attend — then choose a belt level to narrow it
        down. Tap <span className="font-semibold">Show all classes</span> to see the full timetable again.
      </p>

      {/* Program buttons */}
      <div className="flex flex-wrap items-stretch gap-2 mb-3">
        {PROGRAMS.map((p) => {
          const active = programId === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => selectProgram(p.id)}
              aria-expanded={active && p.ranks.length > 0}
              className={`flex flex-col items-center justify-center px-4 py-2 rounded-md border text-center transition-colors ${
                active
                  ? "text-[#001040] border-transparent shadow"
                  : "bg-white text-[#003087] border-gray-300 hover:border-[#FFB800] hover:bg-[#FFF7E0]"
              }`}
              style={active ? { backgroundColor: ACCENT } : undefined}
            >
              <span className="font-bold text-sm leading-tight">{p.label}</span>
              <span className="text-[11px] opacity-70 leading-tight">{p.age}</span>
            </button>
          );
        })}
        <button
          type="button"
          onClick={reset}
          className="ml-auto self-center px-3 py-1.5 rounded-md text-sm font-semibold border border-gray-300 text-gray-600 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          Show all classes
        </button>
      </div>

      {/* Belt-rank options (expand when a program with ranks is selected) */}
      {currentProgram && currentProgram.ranks.length > 0 && (
        <div className="mb-8 rounded-lg bg-gray-50 border border-gray-200 p-3">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            {currentProgram.label} — choose a belt level (optional)
          </p>
          <div className="flex flex-wrap gap-2">
            {currentProgram.ranks.map((r) => {
              const active = rank === r.group;
              return (
                <button
                  key={r.group}
                  type="button"
                  onClick={() => selectRank(r.group)}
                  className={`flex flex-col items-start px-3 py-2 rounded-md border text-left max-w-[200px] transition-colors ${
                    active
                      ? "text-[#001040] border-transparent shadow"
                      : "bg-white text-[#003087] border-gray-300 hover:border-[#FFB800] hover:bg-[#FFF7E0]"
                  }`}
                  style={active ? { backgroundColor: ACCENT } : undefined}
                >
                  <span className="font-bold text-sm leading-tight">{r.label}</span>
                  <span className={`text-[11px] leading-snug mt-0.5 ${active ? "text-[#001040]/70" : "text-gray-500"}`}>
                    {r.belts}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Spacer when no ranks expanded */}
      {!(currentProgram && currentProgram.ranks.length > 0) && <div className="mb-8" />}

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
        <ul className="space-y-2">
          <li><span className="font-semibold text-[#003087]">All Grades:</span> all belts in that program (e.g. all Little Lion belts).</li>
          <li><span className="font-semibold text-[#003087]">Beg – Int:</span> Beginner &amp; Intermediate belts — White, Red, Yellow, Orange, Green &amp; Blue (including black stripes).</li>
          <li><span className="font-semibold text-[#003087]">Adv (Advanced):</span> Advanced belts — Purple, Brown &amp; Black.</li>
          <li><span className="font-semibold text-[#003087]">Black Belt Only:</span> Black Belt students, both Junior and Adult grades.</li>
          <li><span className="font-semibold text-[#003087]">Combined Classes:</span> Monday–Thursday includes Juniors, Teens &amp; Adults. The Saturday Combined class also includes Little Lions.</li>
        </ul>
      </div>

      <p className="text-center text-xs mt-4" style={{ color: BODY_BLUE }}>
        Timetable subject to change. Check with Sensei for holiday schedules.
      </p>
    </div>
  );
}
