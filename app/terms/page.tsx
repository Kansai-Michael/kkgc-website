import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Kansai Karate Gold Coast",
  description: "Terms of Use for Kansai Karate Gold Coast — conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
          <p className="text-xl text-white/80">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-8 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">Website Use</h2>
            <p>
              By accessing kansaikarategoldcoast.com.au you agree to use the site for lawful purposes only.
              You must not attempt to damage, interfere with, or gain unauthorised access to any part of the website
              or its underlying systems.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">Content</h2>
            <p>
              All content on this website — including text, images, and videos — is owned by or licensed to
              Kansai Karate Gold Coast unless otherwise stated. You may not reproduce, distribute, or use our
              content for commercial purposes without our written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">Enrolment and Participation</h2>
            <p>
              Enrolment in classes is subject to completion of our student registration process and payment of
              applicable fees. Membership terms, cancellation policy, and class rules are provided at the time
              of enrolment and form part of your agreement with Kansai Karate Gold Coast.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">Liability</h2>
            <p>
              Martial arts training involves physical activity and inherent risk. Kansai Karate Gold Coast
              takes all reasonable steps to provide a safe training environment. Students and guardians accept
              responsibility for their own physical condition and participate at their own risk. Our liability
              is limited to the extent permitted by Australian consumer law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">Photography and Media</h2>
            <p>
              Classes may be photographed or filmed for use in our marketing materials. If you prefer your
              child not to be photographed, please notify us in writing at enrolment or at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">Governing Law</h2>
            <p>
              These terms are governed by the laws of Queensland, Australia. Any disputes will be subject to
              the jurisdiction of Queensland courts.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">Contact</h2>
            <p>
              Questions about these terms? Contact us at{" "}
              <a href="mailto:info@kansaikarategoldcoast.com.au" className="text-[#003087] hover:underline font-medium">
                info@kansaikarategoldcoast.com.au
              </a>{" "}
              or call{" "}
              <a href="tel:0489265960" className="text-[#003087] hover:underline font-medium">
                0489 265 960
              </a>.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
