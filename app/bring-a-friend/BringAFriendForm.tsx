"use client";

import { useState } from "react";

const BOOKING_URL = "https://app.kihonsoft.au/book/1st-lesson-bookings";

export default function BringAFriendForm({ dark = false }: { dark?: boolean }) {
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

  const labelClass = `block text-sm font-medium mb-1 ${dark ? "text-gray-400" : "text-gray-700"}`;
  const inputClass = `w-full rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${
    dark
      ? "bg-[#242a3a] border border-[rgba(255,255,255,0.1)] text-white placeholder-gray-600 focus:ring-[#2E62C4] focus:border-[#2E62C4]"
      : "border border-gray-300 text-gray-800 focus:ring-[var(--kkgc-blue)]"
  }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Participant&apos;s First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Participant&apos;s Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>
          Contact Phone <span className="text-red-400">*</span>
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Phone"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          Contact Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Who told you about Kansai Karate?</label>
        <input
          type="text"
          value={referredBy}
          onChange={(e) => setReferredBy(e.target.value)}
          placeholder="Student Name"
          className={inputClass}
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full text-white font-bold py-4 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
        style={{ background: "#1F4EA1", letterSpacing: "0.06em", fontSize: "0.95rem" }}
      >
        {submitting ? "Submitting…" : "Claim Your Free Lesson →"}
      </button>
    </form>
  );
}
