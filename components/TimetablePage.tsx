const OLD = "https://kansaikarategoldcoast.com.au/wp-content/uploads/sites/27/2025/02";
const BADGE_IMG = `${OLD}/KKA-Logo-Trans-background.png`;

const TABLE_HEADER_BG = "#003087";
const LIGHT_COL_BG = "#c5d9f0";

const DAYS: { label: string; key: keyof ScheduleRow; light: boolean }[] = [
  { label: "MONDAY",    key: "mon", light: false },
  { label: "TUESDAY",   key: "tue", light: true  },
  { label: "WEDNESDAY", key: "wed", light: false },
  { label: "THURSDAY",  key: "thu", light: true  },
  { label: "FRIDAY",    key: "fri", light: false },
  { label: "SATURDAY",  key: "sat", light: true  },
];

interface ScheduleRow {
  label: string;
  sublabel?: string;
  mon?: string;
  tue?: string;
  wed?: string;
  thu?: string;
  fri?: string;
  sat?: string;
}

interface TimetablePageProps {
  name: string;
  slug: string;
  heroImg: string;
  headline: string;
  subheadline: string;
  scheduleRows: ScheduleRow[];
  bookingIframeUrl: string;
}

export default function TimetablePage({
  name,
  heroImg,
  headline,
  subheadline,
  scheduleRows,
  bookingIframeUrl,
}: TimetablePageProps) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white py-14 px-4"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "38vh",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,30,80,0.75)" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[28vh]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BADGE_IMG} alt="Kansai Karate Academy" className="w-20 mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{headline}</h1>
          <p className="text-white/80 text-lg">{subheadline}</p>
        </div>
      </section>

      {/* Timetable + Booking */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-5 lg:gap-10 items-start">

            {/* LEFT: Timetable — 3/5 */}
            <div className="lg:col-span-3 mb-12 lg:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Class Schedule — {name}
              </h2>
              <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
                <table className="w-full border-collapse text-xs">
                  <thead>
                    <tr style={{ backgroundColor: TABLE_HEADER_BG }}>
                      {/* Icon cell */}
                      <th className="p-3 text-center" style={{ minWidth: "90px" }}>
                        <span className="text-2xl">🥋</span>
                      </th>
                      {DAYS.map((d) => (
                        <th
                          key={d.key}
                          className="p-3 text-center text-white font-bold tracking-wider uppercase"
                          style={{ minWidth: "80px" }}
                        >
                          {d.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleRows.map((row, i) => (
                      <tr key={i} className="border-t border-gray-200">
                        {/* Program label cell */}
                        <td
                          className="p-3 text-center text-white font-bold leading-tight"
                          style={{ backgroundColor: TABLE_HEADER_BG }}
                        >
                          <div className="text-xs">{row.label}</div>
                          {row.sublabel && (
                            <div className="font-normal text-white/80 mt-0.5 whitespace-pre-line text-xs">
                              {row.sublabel}
                            </div>
                          )}
                        </td>
                        {DAYS.map((d) => {
                          const value = row[d.key];
                          return (
                            <td
                              key={d.key}
                              className="p-3 text-center text-gray-700"
                              style={{ backgroundColor: d.light ? LIGHT_COL_BG : "white" }}
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
            </div>

            {/* RIGHT: Booking — 2/5 */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Book Your Free Trial Class
              </h2>

              {/* Instructions box */}
              <div
                className="rounded-lg p-4 mb-5"
                style={{ backgroundColor: "#5B7DB1" }}
              >
                <p className="text-white font-semibold text-sm mb-2">
                  How to book:
                </p>
                <ol className="text-white/90 text-sm space-y-1.5 list-decimal list-inside">
                  <li>Select your program from the options below</li>
                  <li>Choose a date and time that suits your family</li>
                  <li>Fill in your details to complete the booking</li>
                </ol>
              </div>

              {/* Booking iframe */}
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src={bookingIframeUrl}
                  className="w-full"
                  style={{ minHeight: "650px", border: "none" }}
                  title={`Book a free trial class — ${name}`}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
