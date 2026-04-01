"use client";

import { useState } from "react";
import type { Metadata } from "next";

// Note: Metadata must be in a server component. Move to a separate layout if needed.
// export const metadata: Metadata = { ... }

const programs = [
  "Cubs (Ages 3–4)",
  "Little Lions (Ages 5–7)",
  "Juniors (Ages 8–12)",
  "Teens & Adults (13+)",
  "Not sure yet",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Free Trial Class</h1>
          <p className="text-xl text-white/80">
            Fill in the form below and we will be in touch to confirm your booking. No contracts, no pressure — just come and try it.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-green-800 mb-2">Thanks — we will be in touch soon!</h2>
              <p className="text-green-700">
                We have received your enquiry and will contact you within 24 hours to confirm your free trial class.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#003087]"
                    placeholder="e.g. Sarah Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#003087]"
                    placeholder="e.g. 0412 345 678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#003087]"
                  placeholder="e.g. sarah@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Which program are you interested in? *</label>
                <select
                  required
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#003087] bg-white"
                >
                  <option value="">Select a program...</option>
                  {programs.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Anything else you would like to tell us? (optional)</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#003087]"
                  placeholder="e.g. My son is 7 and has never done karate before..."
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm">Something went wrong. Please try again or call us on 0489 265 960.</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#FFB800] text-[#003087] font-bold text-lg py-4 rounded-lg hover:bg-[#E6A500] transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Book My Free Trial Class"}
              </button>

              <p className="text-center text-gray-500 text-sm">
                Or call us directly:{" "}
                <a href="tel:0489265960" className="text-[#003087] font-semibold hover:underline">0489 265 960</a>
              </p>
            </form>
          )}

          {/* Contact details */}
          <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-sm text-gray-600">
            <div>
              <p className="font-semibold text-[#003087] mb-1">Phone</p>
              <a href="tel:0489265960" className="hover:underline">0489 265 960</a>
            </div>
            <div>
              <p className="font-semibold text-[#003087] mb-1">Email</p>
              <a href="mailto:info@kansaikarategoldcoast.com.au" className="hover:underline break-all">info@kansaikarategoldcoast.com.au</a>
            </div>
            <div>
              <p className="font-semibold text-[#003087] mb-1">Location</p>
              <p>Unit 3/2 Sierra Place<br />Upper Coomera QLD 4209</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
