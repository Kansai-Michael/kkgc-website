"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

const programs: Record<string, { label: string; timetableUrl: string }> = {
  cubs: {
    label: "Cubs (Ages 3–4)",
    timetableUrl: "/programs/cubs/timetable",
  },
  "little-lions": {
    label: "Little Lions (Ages 5–7)",
    timetableUrl: "/programs/little-lions/timetable",
  },
  juniors: {
    label: "Juniors (Ages 8–12)",
    timetableUrl: "/programs/juniors/timetable",
  },
  teens: {
    label: "Teens Karate (Ages 13+)",
    timetableUrl: "/programs/teens/timetable",
  },
  adults: {
    label: "Adult Karate",
    timetableUrl: "/programs/adults/timetable",
  },
};

const programKeys = Object.keys(programs);

interface ContactModalContextType {
  openModal: (program?: string) => void;
}

const ContactModalContext = createContext<ContactModalContextType>({
  openModal: () => {},
});

export function useContactModal() {
  return useContext(ContactModalContext);
}

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const openModal = useCallback((program?: string) => {
    setSelected(program || "");
    setName("");
    setEmail("");
    setPhone("");
    setStatus("idle");
    setErrorMsg("");
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setSelected("");
    setStatus("idle");
    setErrorMsg("");
  }, []);

  const handleSubmit = useCallback(async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, program: selected || "general" }),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      const baseDest = selected ? programs[selected]?.timetableUrl : "/timetable";
      const destination = email
        ? `${baseDest}?email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`
        : baseDest;
      closeModal();
      router.push(destination ?? "/timetable");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or call us directly.");
    }
  }, [name, email, phone, selected, closeModal, router]);

  return (
    <ContactModalContext.Provider value={{ openModal }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 w-full max-w-2xl mx-4 max-h-[90vh] flex flex-col rounded-xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-[#5B7DB1] text-white px-6 py-5 flex items-start justify-between flex-shrink-0">
              <div>
                <h2 className="text-xl md:text-2xl font-bold uppercase">
                  Book Your Free First Lesson
                </h2>
                <p className="text-white/80 text-sm mt-2">
                  Tell us who you are and we&apos;ll show you the schedule and let you pick your first class
                </p>
              </div>
              <button
                onClick={closeModal}
                className="text-white/80 hover:text-white ml-4 flex-shrink-0 text-2xl leading-none mt-1"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="bg-[#5B7DB1] flex-1 overflow-y-auto">

              {/* Step 1 — Program selector */}
              {!selected && (
                <div className="px-6 pb-6">
                  <p className="text-white/80 text-sm mb-4">Which program are you interested in?</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {programKeys.map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelected(key)}
                        className="text-left p-4 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors font-semibold text-white"
                      >
                        {programs[key].label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2 — Contact form */}
              {selected && (
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-white font-semibold">{programs[selected].label}</p>
                    <button
                      onClick={() => { setSelected(""); setStatus("idle"); setErrorMsg(""); }}
                      className="text-white/60 hover:text-white text-sm underline"
                    >
                      Change program
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-white/80 text-sm mb-1">Your name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Smith"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm mb-1">Email address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. sarah@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm mb-1">Mobile number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 0412 345 678"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/60"
                      />
                    </div>

                    {errorMsg && (
                      <p className="text-red-300 text-sm">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-[#FFB800] text-white font-bold text-base py-3 rounded-lg hover:bg-[#E6A500] transition-colors uppercase tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "Sending…" : "Show Me the Schedule →"}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-[#4A6DA0] px-6 py-3 text-center flex-shrink-0">
              <p className="text-white/60 text-xs">
                We will never sell or share your information for any reason, ever.
              </p>
            </div>
          </div>
        </div>
      )}
    </ContactModalContext.Provider>
  );
}
