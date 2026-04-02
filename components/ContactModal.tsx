"use client";

import { createContext, useContext, useState, useCallback } from "react";

const programForms: Record<string, { label: string; iframe: string }> = {
  cubs: {
    label: "Cubs (Ages 3–4)",
    iframe: "https://app.kihonsoft.au/f/fx2husne",
  },
  "little-lions": {
    label: "Little Lions (Ages 5–7)",
    iframe: "https://app.kihonsoft.au/f/69eqhhr8",
  },
  juniors: {
    label: "Juniors (Ages 8–12)",
    iframe: "https://app.kihonsoft.au/f/jytbwwjt",
  },
  teens: {
    label: "Teens Karate (Ages 13+)",
    iframe: "https://app.kihonsoft.au/f/9puwpf2s",
  },
  adults: {
    label: "Adult Karate",
    iframe: "https://app.kihonsoft.au/f/aseg2ppc",
  },
};

const programKeys = Object.keys(programForms);

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
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const openModal = useCallback((program?: string) => {
    setSelected(program || "");
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setSelected("");
  }, []);

  const currentForm = selected ? programForms[selected] : null;

  return (
    <ContactModalContext.Provider value={{ openModal }}>
      {children}

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-2xl mx-4 max-h-[90vh] flex flex-col rounded-xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-[#5B7DB1] text-white px-6 py-5 flex items-start justify-between flex-shrink-0">
              <div>
                <h2 className="text-xl md:text-2xl font-bold uppercase">
                  See Up-To-Date Schedule and Registration Options
                </h2>
                <p className="text-white/80 text-sm mt-2">
                  Get more info via text and email, plus see our current schedule and enrollment options
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
              {/* Program selector */}
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
                        {programForms[key].label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Kihon iframe */}
              {currentForm && (
                <div className="flex flex-col h-full">
                  <div className="px-6 pb-3 flex items-center justify-between">
                    <p className="text-white font-semibold">{currentForm.label}</p>
                    <button
                      onClick={() => setSelected("")}
                      className="text-white/60 hover:text-white text-sm underline"
                    >
                      Change program
                    </button>
                  </div>
                  <iframe
                    src={currentForm.iframe}
                    width="100%"
                    height="400"
                    frameBorder="0"
                    title={`${currentForm.label} contact form`}
                    className="w-full flex-1 bg-[#5B7DB1]"
                    style={{ minHeight: "400px" }}
                  />
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
