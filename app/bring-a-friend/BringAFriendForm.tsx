"use client";

import { useState } from "react";

const BOOKING_URL = "https://app.kihonsoft.au/book/1st-lesson-bookings";

export default function BringAFriendForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          referred_by: referredBy,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      const params = new URLSearchParams({
        name: `${firstName} ${lastName}`.trim(),
        email,
        phone,
      });

      window.location.href = `${BOOKING_URL}?${params.toString()}`;
    } catch {
      setError("Something went wrong. Please try again or call us on 0489 265 960.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Participant&apos;s First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--kkgc-blue)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Participant&apos;s Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--kkgc-blue)]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Contact Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Phone"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--kkgc-blue)]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Contact Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--kkgc-blue)]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Who told you about Kansai Karate?
        </label>
        <input
          type="text"
          value={referredBy}
          onChange={(e) => setReferredBy(e.target.value)}
          placeholder="Student Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--kkgc-blue)]"
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[var(--kkgc-blue)] hover:bg-[var(--kkgc-blue-dark)] text-white font-bold py-3.5 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
      >
        {submitting ? "Submitting…" : "Click to Book Your Free First Lesson"}
      </button>
    </form>
  );
}
