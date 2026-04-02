"use client";

import Link from "next/link";
import { useState } from "react";
import { useContactModal } from "@/components/ContactModal";

const programs = [
  { name: "Cubs (Ages 3–4)", href: "/programs/cubs" },
  { name: "Little Lions (Ages 5–7)", href: "/programs/little-lions" },
  { name: "Juniors (Ages 8–12)", href: "/programs/juniors" },
  { name: "Teens (Ages 13–18)", href: "/programs/teens" },
  { name: "Adults (Ages 18+)", href: "/programs/adults" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const { openModal } = useContactModal();

  return (
    <nav className="bg-[#5B7DB1] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-white font-bold text-xl leading-tight">
            Kansai Karate Gold Coast
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {/* Programs dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
              className="flex items-center gap-1 hover:text-[#FFB800] transition-colors py-2"
            >
              Programs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {programsOpen && (
              <div
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
                className="absolute top-full left-0 bg-white text-[#5B7DB1] shadow-xl rounded-lg py-2 min-w-[220px]"
              >
                {programs.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-[#5B7DB1] font-medium text-sm"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => openModal()}
            className="hover:text-[#FFB800] transition-colors"
          >
            Contact
          </button>

          <button
            onClick={() => openModal()}
            className="bg-[#FFB800] text-white font-bold px-5 py-2 rounded-lg hover:bg-[#E6A500] transition-colors"
          >
            Book Free Trial
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#4A6DA0] border-t border-blue-800 px-4 py-4 space-y-3 text-sm">
          <p className="text-white/50 uppercase text-xs tracking-wider">Programs</p>
          {programs.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              onClick={() => setMenuOpen(false)}
              className="block py-1 pl-3 hover:text-[#FFB800]"
            >
              {p.name}
            </Link>
          ))}
          <hr className="border-blue-700" />
          <button
            onClick={() => { setMenuOpen(false); openModal(); }}
            className="block py-1 hover:text-[#FFB800] w-full text-left"
          >
            Contact
          </button>
          <button
            onClick={() => { setMenuOpen(false); openModal(); }}
            className="block bg-[#FFB800] text-white font-bold px-4 py-3 rounded-lg text-center mt-2 w-full"
          >
            Book Free Trial
          </button>
        </div>
      )}
    </nav>
  );
}
