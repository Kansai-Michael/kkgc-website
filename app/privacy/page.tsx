import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kansai Karate Gold Coast",
  description: "Privacy Policy for Kansai Karate Gold Coast — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/80">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">Who We Are</h2>
            <p>
              Kansai Karate Gold Coast (ABN available on request) operates at Unit 3/2 Sierra Place, Upper Coomera QLD 4209.
              We are a licensed member school of Kansai Karate Academy. This Privacy Policy applies to personal information
              collected through our website at kansaikarategoldcoast.com.au and through our class enquiry and enrolment processes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">What Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Name, email address, and phone number (from enquiry forms and booking requests)</li>
              <li>Child's name and date of birth (for enrolment purposes)</li>
              <li>Emergency contact information</li>
              <li>Medical information relevant to training safety</li>
              <li>Payment information (processed securely through our payment provider — we do not store card details)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Respond to your enquiries and process class bookings</li>
              <li>Manage student enrolments and class administration</li>
              <li>Contact you about your enrolment, schedule changes, or relevant school news</li>
              <li>Meet our legal obligations (e.g. Working with Children compliance)</li>
            </ul>
            <p className="mt-3">We will not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">Storage and Security</h2>
            <p>
              Your information is stored securely within our student management system (Kihon Software). We take reasonable
              steps to protect your information from unauthorised access, loss, or misuse in accordance with the Australian
              Privacy Act 1988 (Cth).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">Your Rights</h2>
            <p>
              You have the right to access, correct, or request deletion of your personal information. To make a request,
              contact us at{" "}
              <a href="mailto:info@kansaikarategoldcoast.com.au" className="text-[#003087] hover:underline font-medium">
                info@kansaikarategoldcoast.com.au
              </a>{" "}
              or call{" "}
              <a href="tel:0489265960" className="text-[#003087] hover:underline font-medium">
                0489 265 960
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The current version will always be available on this page.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
