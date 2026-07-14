import BookTrialButton from "@/components/BookTrialButton";
import BookingCalendar from "@/components/BookingCalendar";
import CubsTimetableGrid from "@/components/CubsTimetableGrid";
import MasterTimetableGrid from "@/components/MasterTimetableGrid";
import { PROGRAMS, type ProgramId } from "@/components/timetableData";
import { Swords } from "lucide-react";

const OLD = "/images";
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

export interface MoreInfoFeature {
  title: string;
  body: string;
}

export interface MoreInfoContent {
  shineHeading: string;
  shineFeatures: MoreInfoFeature[];
  dividerPhoto: string;
  classHeading: string;
  classIntro: string;
  classItems: MoreInfoFeature[];
  classPhoto: string;
  faqs: { q: string; a: string }[];
  closingStatement: string;
  closingSubtext?: string;
}

interface TimetablePageProps {
  name: string;
  slug: string;
  heroImg: string;
  headline: string;
  subheadline: string;
  /** Legacy compact grid. Used by pages without highlightProgram (e.g. Cubs). */
  scheduleRows?: ScheduleRow[];
  /** When set, render the shared master timetable highlighted to this program
      instead of scheduleRows. */
  highlightProgram?: ProgramId;
  /** When true, render the dedicated Cubs days-as-columns grid (Cubs booking page). */
  cubsGrid?: boolean;
  bookingIframeUrl: string;
  moreInfo?: MoreInfoContent;
  /** When set, renders a waiting-list call-to-action above the booking calendar (Cubs only). */
  waitlist?: { heading: string; body: string; buttonLabel: string; url: string };
}

export default function TimetablePage({
  name,
  slug,
  heroImg,
  headline,
  subheadline,
  scheduleRows,
  highlightProgram,
  cubsGrid,
  bookingIframeUrl,
  moreInfo,
  waitlist,
}: TimetablePageProps) {
  const programGroups = highlightProgram
    ? PROGRAMS.find((p) => p.id === highlightProgram)?.groups ?? null
    : null;
  return (
    <>
      {/* Hero + Timetable + Booking — full bleed background */}
      <section
        className="relative text-white px-4 pt-14 pb-12"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,30,80,0.80)" }} />
        <div className="relative z-10 max-w-5xl mx-auto">

          {/* Hero text */}
          <div className="text-center flex flex-col items-center mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={BADGE_IMG} alt="Kansai Karate Academy" className="w-20 mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{headline}</h1>
            <p className="text-white/80 text-lg">{subheadline}</p>
          </div>

          {/* Timetable */}
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide text-center">
            Class Schedule — Scroll Down to Book Your First Lesson
          </h2>

          {cubsGrid ? (
            /* Dedicated Cubs days-as-columns grid */
            <div className="mb-10">
              <div className="rounded-lg bg-white p-4 sm:p-6">
                <CubsTimetableGrid theme="light" />
              </div>
            </div>
          ) : programGroups ? (
            /* Master timetable, highlighted to this program */
            <div className="mb-10">
              <div className="mb-5 rounded-lg border border-[#FFB800]/60 bg-[#FFF7E0] px-4 py-3 text-sm text-center text-[#003087]">
                Your program&apos;s classes are highlighted below.
              </div>
              <div className="rounded-lg bg-white p-4 sm:p-6">
                <MasterTimetableGrid activeGroups={programGroups} />
              </div>
            </div>
          ) : (
            /* Legacy compact grid (e.g. Cubs) */
            <div className="overflow-x-auto rounded-lg shadow-lg mb-10">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr style={{ backgroundColor: TABLE_HEADER_BG }}>
                    <th className="p-3 text-center" style={{ minWidth: "90px" }}>
                      <Swords className="w-5 h-5 text-white mx-auto" />
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
                  {(scheduleRows ?? []).map((row, i) => (
                    <tr key={i} className="border-t border-gray-200">
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
          )}

          {/* Booking */}
          <h2 className="text-2xl font-bold text-white mb-4">
            Book Your Free Trial Class
          </h2>
          <div className="rounded-lg p-4 mb-5 bg-white/10 border border-white/20">
            <p className="text-white font-semibold text-sm mb-2">How to book:</p>
            <ol className="text-white/90 text-sm space-y-1.5 list-decimal list-inside">
              <li>Select your program from the options below</li>
              <li>Choose a date and time that suits your family</li>
              <li>Fill in your details to complete the booking</li>
            </ol>
          </div>

          {/* Waiting list CTA (Cubs only) */}
          {waitlist && (
            <div className="rounded-lg p-5 mb-5 bg-white/10 border border-white/20 text-center">
              <h3 className="text-white font-bold text-xl mb-2">{waitlist.heading}</h3>
              <p className="text-white/90 text-sm mb-4 leading-relaxed">{waitlist.body}</p>
              <a
                href={waitlist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FFB800] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#E6A500] transition-colors uppercase tracking-widest"
              >
                {waitlist.buttonLabel}
              </a>
            </div>
          )}

          <BookingCalendar
            url={bookingIframeUrl}
            title={`Book a free trial class — ${name}`}
          />
          <p className="text-white/70 text-sm text-center mt-4">
            Not sure about booking online? Call us on{" "}
            <a href="tel:0489265960" className="text-white font-semibold underline hover:text-[#FFB800] transition-colors">
              0489 265 960
            </a>
          </p>

        </div>
      </section>

      {/* ── MORE INFO SECTIONS ── */}
      {moreInfo && (
        <>
          {/* "Are you ready to shine?" */}
          <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
                {moreInfo.shineHeading}
              </h2>
              <div className={`grid grid-cols-1 sm:grid-cols-2 ${moreInfo.shineFeatures.length === 3 ? "md:grid-cols-3" : "md:grid-cols-3"} gap-8`}>
                {moreInfo.shineFeatures.map((f) => (
                  <div key={f.title} className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-[#5B7DB1] text-lg mb-2">{f.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Divider photo */}
          <div
            className="w-full"
            style={{
              height: "320px",
              backgroundImage: `url(${moreInfo.dividerPhoto})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Class activities */}
          <section className="py-16 px-4" style={{ background: "#5B7DB1" }}>
            <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12 items-start">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">{moreInfo.classHeading}</h2>
                <p className="text-white/80 text-sm mb-8 leading-relaxed">{moreInfo.classIntro}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {moreInfo.classItems.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-bold text-[#FFB800] mb-1">{item.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={moreInfo.classPhoto}
                alt={name + " karate class"}
                className="rounded-lg mt-10 lg:mt-0 w-full object-cover"
                style={{ maxHeight: "480px" }}
              />
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white py-16 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {moreInfo.faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-gray-200 pb-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Booking calendar */}
          <section className="bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                Ready to Book Your First Lesson?
              </h2>
              <p className="text-gray-500 text-center text-sm mb-8">
                Pick a date and time that suits your family — it&apos;s free, no commitment required.
              </p>
              <BookingCalendar
                url={bookingIframeUrl}
                title="Book your free trial class"
              />
              <p className="text-gray-500 text-sm text-center mt-4">
                Not sure about booking online? Call us on{" "}
                <a href="tel:0489265960" className="text-gray-700 font-semibold underline hover:text-[#5B7DB1] transition-colors">
                  0489 265 960
                </a>
              </p>
            </div>
          </section>

          {/* Closing CTA */}
          <section className="py-16 px-4 text-center" style={{ background: "#5B7DB1" }}>
            <div className="max-w-3xl mx-auto">
              <p className="text-white text-xl md:text-2xl font-semibold leading-snug mb-2">
                {moreInfo.closingStatement}
              </p>
              <p className="text-white/80 text-lg mb-8">{moreInfo.closingSubtext ?? "And now your child can."}</p>
              <BookTrialButton
                program={slug}
                className="inline-block bg-[#FFB800] text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-[#E6A500] transition-colors uppercase tracking-widest"
              />
              <p className="mt-4 text-white/50 text-sm">Spaces extremely limited — register ASAP</p>
            </div>
          </section>
        </>
      )}
    </>
  );
}
