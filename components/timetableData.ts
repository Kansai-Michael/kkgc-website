/* ── Shared timetable data (single source of truth) ──
   Used by InteractiveTimetable (the /new-timetable filter UI) and
   MasterTimetableGrid (the read-only grid rendered on program pages).
   New timetable — starts Monday 13 July 2026. */

/* ── Belt-level group ids ── */
export type Group =
  | "LL"
  | "JrBeg" | "JrInt" | "JrAdv" | "JrBB"
  | "TnBI" | "TnAdv" | "TnBB"
  | "AdBI" | "AdAdv" | "AdBB";

/* ── Reusable eligibility sets ── */
export const ALL_JR: Group[] = ["JrBeg", "JrInt", "JrAdv", "JrBB"];
export const ALL_TN: Group[] = ["TnBI", "TnAdv", "TnBB"];
export const ALL_AD: Group[] = ["AdBI", "AdAdv", "AdBB"];
export const ALL_TN_AD: Group[] = [...ALL_TN, ...ALL_AD];
export const COMBINED: Group[] = [...ALL_JR, ...ALL_TN, ...ALL_AD];
export const EVERYONE: Group[] = ["LL", ...COMBINED];
export const ADV_CLASS: Group[] = ["JrAdv", "JrBB", ...ALL_TN_AD];
export const BLACK_BELT: Group[] = ["JrBB", "TnBB", "AdBB"];

export interface Cell {
  label: string;
  grade?: string;
  eligible: Group[];
}

export interface Row {
  wkTime: string;
  satTime: string;
  mon: Cell;
  tue: Cell;
  wed: Cell;
  thu: Cell;
  sat: Cell;
}

const LITTLE_LIONS: Cell = { label: "Little Lions", grade: "All Grades", eligible: ["LL"] };

export const ROWS: Row[] = [
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
export type ProgramId = "LL" | "JR" | "TN" | "AD";

export interface RankDef { label: string; group: Group; belts: string }
export interface ProgramDef {
  id: ProgramId;
  label: string;
  age: string;
  groups: Group[]; // every group in this program (program-level highlight)
  ranks: RankDef[]; // empty for Little Lions
}

const BEG_INT_BELTS = "White, Red, Yellow, Orange, Green, Blue";

export const PROGRAMS: ProgramDef[] = [
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
