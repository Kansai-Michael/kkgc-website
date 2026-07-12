const TABLE_HEADER_BG = "#003087";
const LIGHT_COL_BG = "#c5d9f0";

// Cubs schedule. Single source of truth — update here.
const CUBS_SCHEDULE = {
  monday: ["4:10 – 4:40pm", "4:40 – 5:10pm"],
  wednesday: ["4:10 – 4:40pm", "4:40 – 5:10pm"],
  saturday: ["8:00 – 8:30am", "8:30 – 9:00am", "9:00 – 9:30am", "9:30 – 10:00am", "10:00 – 10:30am"],
};

const COLUMNS: { label: string; key: keyof typeof CUBS_SCHEDULE; light: boolean }[] = [
  { label: "MONDAY", key: "monday", light: false },
  { label: "WEDNESDAY", key: "wednesday", light: true },
  { label: "SATURDAY", key: "saturday", light: false },
];

const ROW_COUNT = Math.max(...COLUMNS.map((c) => CUBS_SCHEDULE[c.key].length));

interface CubsTimetableGridProps {
  /** Controls note text colour so it stays readable on light or dark backgrounds. */
  theme?: "light" | "dark";
}

export default function CubsTimetableGrid({ theme = "light" }: CubsTimetableGridProps) {
  const noteText = theme === "dark" ? "text-white/80" : "text-gray-600";
  const noteLink =
    theme === "dark"
      ? "text-white font-semibold underline hover:text-[#FFB800] transition-colors"
      : "text-gray-700 font-semibold underline hover:text-[#5B7DB1] transition-colors";

  return (
    <div>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr style={{ backgroundColor: TABLE_HEADER_BG }}>
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  className="p-3 text-center text-white font-bold tracking-wider uppercase"
                  style={{ minWidth: "100px" }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: ROW_COUNT }).map((_, rowIndex) => (
              <tr key={rowIndex} className="border-t border-gray-200">
                {COLUMNS.map((col) => {
                  const value = CUBS_SCHEDULE[col.key][rowIndex];
                  return (
                    <td
                      key={col.key}
                      className="p-3 text-center text-gray-700 font-semibold"
                      style={{ backgroundColor: col.light ? LIGHT_COL_BG : "white" }}
                    >
                      {value || ""}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={`mt-4 text-sm ${noteText}`}>
        <span className="font-bold">Max 8 Cubs per class.</span> Classes that are full will not be
        available for 1st lessons. Contact the office on{" "}
        <a href="tel:0489265960" className={noteLink}>
          0489 265 960
        </a>{" "}
        for more information.
      </p>
    </div>
  );
}
