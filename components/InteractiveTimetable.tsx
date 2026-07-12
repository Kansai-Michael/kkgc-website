"use client";

import { useState } from "react";
import CubsTimetableGrid from "@/components/CubsTimetableGrid";
import MasterTimetableGrid from "@/components/MasterTimetableGrid";
import { PROGRAMS, type Group, type ProgramId } from "@/components/timetableData";

/* ── Brand tokens (match the rest of the site) ── */
const ACCENT = "#FFB800";

export default function InteractiveTimetable() {
  const [programId, setProgramId] = useState<ProgramId | null>(null);
  const [rank, setRank] = useState<Group | null>(null);

  const currentProgram = PROGRAMS.find((p) => p.id === programId) ?? null;

  // Active highlight set. Programs with belt levels (Juniors/Teens/Adults) require a
  // rank choice before anything highlights. Little Lions has no ranks, so it highlights
  // as soon as it's picked.
  const activeGroups: Group[] | null = rank
    ? [rank]
    : currentProgram && currentProgram.ranks.length === 0
    ? currentProgram.groups
    : null;

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

  const scrollToUpstairs = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("upstairs-dojo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Cubs note */}
      <div className="mb-5 rounded-lg border border-[#FFB800]/50 bg-[#FFF7E0] px-4 py-3 text-sm text-[#003087]">
        <span className="font-bold">Cubs (ages 3–4):</span> our littlest students train on their own
        floor upstairs, with their own schedule. See the{" "}
        <a href="#upstairs-dojo" onClick={scrollToUpstairs} className="font-semibold underline hover:text-[#B8860B]">
          Upstairs Dojo
        </a>{" "}
        timetable below.
      </div>

      {/* Instructions */}
      <p className="text-center text-gray-600 text-sm mb-5">
        Pick your program, then select your belt level to highlight the classes you can attend. Tap{" "}
        <span className="font-semibold">Show all classes</span> to see the full timetable again.
      </p>

      {/* Program buttons */}
      <div className="flex flex-wrap items-stretch gap-2 mb-3">
        <button
          type="button"
          onClick={scrollToUpstairs}
          className="flex flex-col items-center justify-center px-4 py-2 rounded-md border text-center transition-colors bg-white text-[#003087] border-gray-300 hover:border-[#FFB800] hover:bg-[#FFF7E0]"
        >
          <span className="font-bold text-sm leading-tight">Cubs</span>
          <span className="text-[11px] opacity-70 leading-tight">Ages 3–4</span>
        </button>
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
        <div className={`mb-8 rounded-lg p-3 border ${rank ? "bg-gray-50 border-gray-200" : "bg-[#FFF7E0] border-[#FFB800]/60"}`}>
          <p className="text-xs font-bold uppercase tracking-wider text-[#003087] mb-2">
            {rank
              ? `${currentProgram.label} — belt level`
              : `${currentProgram.label} — select your belt level to continue`}
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

      {/* Main dojo timetable + notes */}
      <h2 className="text-xl font-bold text-[#003087] mb-4 uppercase tracking-wide">Main Dojo Floor</h2>
      <MasterTimetableGrid activeGroups={activeGroups} />

      {/* Upstairs dojo — Cubs timetable */}
      <div id="upstairs-dojo" className="mt-12 scroll-mt-24">
        <h2 className="text-xl font-bold text-[#003087] mb-1 uppercase tracking-wide">Upstairs Dojo</h2>
        <p className="text-gray-600 text-sm mb-4">Cubs (ages 3–4)</p>
        <CubsTimetableGrid theme="light" />
      </div>
    </div>
  );
}
