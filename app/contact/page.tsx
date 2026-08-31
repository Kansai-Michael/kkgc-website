"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const programForms: Record<string, { label: string; iframe: string }> = {
  cubs: {
    label: "Cubs (Ages 3–4)",
    iframe: "https://app.kihonsoft.au/f/fx2husne",
  },
  "little-lions": {
    label: "Little Lions (Ages 5–6)",
    iframe: "https://app.kihonsoft.au/f/69eqhhr8",
  },
  juniors: {
    label: "Juniors (Ages 7–12)",
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

function ContactForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("program") || "";
  const [selected, setSelected] = useState(preselected);

  const currentForm = selected ? programForms[selected] : null;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#5B7DB1] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">
            See Up-To-Date Schedule and Registration Options
          </h1>
          <p className="text-lg text-white/80">
            Get more info via text and email, plus see our current schedule and enrollment options on the next page (regularly updated)
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          {/* Program selector (if not pre-selected) */}
          {!selected && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Which program are you interested in?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {programKeys.map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelected(key)}
                    className="text-left p-4 border-2 border-gray-200 rounded-lg hover:border-[#5B7DB1] hover:bg-blue-50 transition-colors font-semibold text-gray-700"
                  >
                    {programForms[key].label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Kihon iframe form */}
          {currentForm && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  {currentForm.label}
                </h2>
                {selected && (
                  <button
                    onClick={() => setSelected("")}
                    className="text-sm text-[#5B7DB1] hover:underline"
                  >
                    Change program
                  </button>
                )}
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src={currentForm.iframe}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title={`${currentForm.label} contact form`}
                  className="w-full"
                />
              </div>
              <p className="text-center text-gray-400 text-xs mt-4">
                Why do we need your contact information? This is a &quot;static&quot; page. Entering your information will forward you to a page with up-to-date scheduling and registration details.
              </p>
              <p className="text-center text-gray-400 text-xs mt-1 italic">
                We will never sell or share your information for any reason, ever.
              </p>
            </div>
          )}

          {/* Contact details */}
          <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-sm text-gray-600">
            <div>
              <p className="font-semibold text-[#5B7DB1] mb-1">Phone</p>
              <a href="tel:0489265960" className="hover:underline">0489 265 960</a>
            </div>
            <div>
              <p className="font-semibold text-[#5B7DB1] mb-1">Email</p>
              <a href="mailto:info@kansaikarategoldcoast.com.au" className="hover:underline break-all">info@kansaikarategoldcoast.com.au</a>
            </div>
            <div>
              <p className="font-semibold text-[#5B7DB1] mb-1">Location</p>
              <p>Unit 3/2 Sierra Place<br />Upper Coomera QLD 4209</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense>
      <ContactForm />
    </Suspense>
  );
}
