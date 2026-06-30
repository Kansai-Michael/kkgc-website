import { Swords } from "lucide-react";
import { ROWS, type Cell, type Group } from "@/components/timetableData";

/* ── Brand tokens (match the rest of the site) ── */
const HEADER_BG = "#003087";
const ACCENT = "#FFB800";

type CellStatus = "neutral" | "on" | "off";

interface MasterTimetableGridProps {
  /** Belt-level groups to highlight. null → no highlight (all neutral). */
  activeGroups: Group[] | null;
}

/* Read-only timetable grid + notes. Highlighting is driven by activeGroups:
   a cell is "on" if any of its eligible groups is active, "off" otherwise. */
export default function MasterTimetableGrid({ activeGroups }: MasterTimetableGridProps) {
  const statusFor = (cell: Cell): CellStatus => {
    if (!activeGroups) return "neutral";
    return cell.eligible.some((g) => activeGroups.includes(g)) ? "on" : "off";
  };

  return (
    <>
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
                      cls = `${base} text-gray-500 bg-gray-100`;
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

    </>
  );
}
