import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kansai Karate Gold Coast",
  description: "Privacy Policy for Kansai Karate Gold Coast — how we collect, use, and protect your personal information in accordance with the Australian Privacy Act 1988.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/80">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-10 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">1. Who We Are</h2>
            <p>
              Kansai Karate Gold Coast is a licensed member school of Kansai Karate Academy, operating at
              Unit 3/2 Sierra Place, Upper Coomera QLD 4209. This Privacy Policy explains how we collect,
              use, store, and disclose personal information in accordance with the{" "}
              <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).
            </p>
            <p className="mt-3">
              This policy applies to information collected through our website at kansaikarategoldcoast.com.au,
              through our class enquiry and booking processes, and in the course of managing student enrolments.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">2. What Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Name, email address, and phone number (from enquiry forms and booking requests)</li>
              <li>Child&rsquo;s name, date of birth, and age group (for enrolment purposes)</li>
              <li>Emergency contact name and phone number</li>
              <li>Medical information relevant to safe participation in training</li>
              <li>Payment information (processed securely through our payment provider — we do not store card details)</li>
            </ul>
            <p className="mt-3">
              We collect only the information we need for the purposes described below. You are not
              required to provide personal information to browse our website, but we cannot process
              an enrolment or enquiry without it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">3. Children&rsquo;s Privacy</h2>
            <p>
              Many of our students are under 18. We collect information about children only for the
              purpose of managing their enrolment and ensuring their safety during training. We do not
              use children&rsquo;s personal information for marketing purposes. Where a student is under
              18, we deal with their parent or guardian as the responsible party for all privacy matters.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">4. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Respond to enquiries and process trial class bookings</li>
              <li>Manage student enrolments and class administration</li>
              <li>Contact you about your enrolment, schedule changes, or school news</li>
              <li>Ensure student safety during training (including access to relevant medical information by instructors)</li>
              <li>Meet our legal obligations, including Working with Children compliance under Queensland law</li>
            </ul>
            <p className="mt-3">
              We will not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">5. Disclosure of Information</h2>
            <p>We may disclose your personal information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Kihon Software</strong> — our student management and booking platform. Kihon processes
                enrolment data and booking information on our behalf.
              </li>
              <li>
                <strong>Kansai Karate Academy</strong> — the parent organisation, for affiliation and grading purposes.
              </li>
              <li>
                <strong>Queensland Karate Association (QKA) and Australian Karate Federation (AKF)</strong> — for
                competition registrations, where applicable.
              </li>
              <li>
                <strong>Vercel Inc. (USA)</strong> — our website hosting provider. Website enquiry data submitted
                via our contact form passes through Vercel&rsquo;s infrastructure. Vercel operates under standard
                contractual data protection clauses.
              </li>
              <li>
                <strong>Mailgun Technologies, Inc. (USA)</strong> — inbound emails sent to our enquiry address
                are routed through Mailgun&rsquo;s email infrastructure before delivery. Mailgun operates under
                standard data processing agreements.
              </li>
              <li>
                <strong>Google LLC (USA)</strong> — we use Google Analytics 4 and Google Ads to measure website
                traffic and advertising performance. See Section 7 for details.
              </li>
              <li>
                <strong>Meta Platforms, Inc. (USA)</strong> — we use the Meta Pixel to measure the effectiveness
                of our Facebook and Instagram advertising. See Section 7 for details.
              </li>
            </ul>
            <p className="mt-3">
              Some of these service providers are located or operate servers outside Australia (including the United States).
              We take reasonable steps to ensure overseas recipients handle your information in a manner consistent with
              the Australian Privacy Principles.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">6. Storage and Security</h2>
            <p>
              Your information is stored within Kihon Software&rsquo;s secure platform. We take reasonable steps
              to protect personal information from unauthorised access, misuse, loss, or alteration. We limit
              access to personal information to instructors and administrative staff who need it to carry out
              their responsibilities.
            </p>
            <p className="mt-3">
              We retain personal information for as long as your enrolment is active and for a reasonable period
              afterwards to meet any legal obligations. If you would like your information deleted, please contact us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">7. Cookies, Analytics, and Advertising Tracking</h2>
            <p>Our website uses the following tracking technologies:</p>
            <ul className="list-disc pl-6 mt-3 space-y-3">
              <li>
                <strong>Google Analytics 4 (GA4)</strong> — collects data about how visitors use our site
                (pages visited, session duration, device type). This data is used in aggregate to improve
                our website. GA4 is operated by Google LLC (USA). You can opt out using the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#003087] hover:underline font-medium"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </li>
              <li>
                <strong>Meta Pixel</strong> — our website includes Meta&rsquo;s tracking pixel, which collects
                data about your visit to help us measure the effectiveness of our advertising on Facebook and
                Instagram. If you are logged into Facebook, Meta may associate this data with your Facebook
                profile. You can manage your ad preferences at{" "}
                <a
                  href="https://www.facebook.com/ads/preferences"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#003087] hover:underline font-medium"
                >
                  Facebook Ad Preferences
                </a>
                .
              </li>
              <li>
                <strong>Google Ads</strong> — we use Google Ads conversion tracking to measure enquiries that
                result from our advertising. This uses cookies placed by Google. You can manage your Google
                ad settings at{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#003087] hover:underline font-medium"
                >
                  adssettings.google.com
                </a>
                .
              </li>
            </ul>
            <p className="mt-3">
              You can disable cookies in your browser settings. Note that disabling all cookies may affect
              the functionality of some website features.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">8. Accessing and Correcting Your Information</h2>
            <p>
              You have the right to request access to the personal information we hold about you, and to ask us
              to correct any information that is inaccurate, incomplete, or out of date. To make a request,
              contact us using the details below. We will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">9. Complaints</h2>
            <p>
              If you believe we have handled your personal information in a way that breaches the Australian
              Privacy Principles, you may make a complaint by contacting us directly. We will acknowledge
              your complaint within 5 business days and aim to resolve it within 30 days.
            </p>
            <p className="mt-3">
              If you are not satisfied with our response, you may lodge a complaint with the{" "}
              <strong>Office of the Australian Information Commissioner (OAIC)</strong> at{" "}
              <a
                href="https://www.oaic.gov.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#003087] hover:underline font-medium"
              >
                www.oaic.gov.au
              </a>{" "}
              or by calling 1300 363 992.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">10. Contact Us</h2>
            <p>For any privacy-related questions, requests, or complaints, contact us at:</p>
            <ul className="list-none mt-3 space-y-1">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@kansaikarategoldcoast.com.au" className="text-[#003087] hover:underline font-medium">
                  info@kansaikarategoldcoast.com.au
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:0489265960" className="text-[#003087] hover:underline font-medium">
                  0489 265 960
                </a>
              </li>
              <li><strong>Address:</strong> Unit 3/2 Sierra Place, Upper Coomera QLD 4209</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or
              legal obligations. The current version will always be available on this page with the date
              of the last update.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
