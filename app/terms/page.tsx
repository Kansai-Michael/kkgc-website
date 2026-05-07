import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Kansai Karate Gold Coast",
  description: "Terms of Use for Kansai Karate Gold Coast — conditions for using our website and enrolling in classes.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
          <p className="text-xl text-white/80">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-10 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">1. About These Terms</h2>
            <p>
              These Terms of Use apply to your use of the Kansai Karate Gold Coast website at
              kansaikarategoldcoast.com.au and to your participation in our classes and programs.
              Kansai Karate Gold Coast is a licensed member school of Kansai Karate Academy, operating
              at Unit 3/2 Sierra Place, Upper Coomera QLD 4209.
            </p>
            <p className="mt-3">
              By using our website or enrolling in a class, you agree to these terms. These terms are
              governed by the laws of Queensland, Australia.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">2. Website Use</h2>
            <p>
              You may use this website for lawful purposes only. You must not attempt to damage, disrupt,
              or gain unauthorised access to any part of the website or its underlying systems. We reserve
              the right to restrict access to the website at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">3. Intellectual Property</h2>
            <p>
              All content on this website — including text, images, logos, and videos — is owned by or
              licensed to Kansai Karate Gold Coast unless otherwise stated. You may not reproduce,
              distribute, or use our content for commercial purposes without our prior written permission.
              Personal, non-commercial use (such as saving a timetable for your own reference) is permitted.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">4. Enrolment and Classes</h2>
            <p>
              Enrolment in our classes is subject to completion of our student registration process through
              our booking platform (Kihon Software) and payment of applicable fees. The specific terms of
              your enrolment — including fees, cancellation policy, and class rules — are provided at the
              time of registration and form part of your agreement with Kansai Karate Gold Coast.
            </p>
            <p className="mt-3">
              Free trial classes are available to new students. Attending a free trial does not create any
              ongoing obligation or enrolment.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">5. Physical Activity and Risk</h2>
            <p>
              Martial arts training involves physical activity and inherent risk of injury. Kansai Karate
              Gold Coast takes all reasonable steps to provide a safe training environment, including
              qualified instruction and appropriate supervision.
            </p>
            <p className="mt-3">
              By enrolling, students (or parents/guardians of students under 18) acknowledge that they
              are aware of the physical nature of karate training and accept the inherent risks involved.
              Students are responsible for advising instructors of any medical conditions, injuries, or
              limitations that may affect their participation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">6. Limitation of Liability</h2>
            <p>
              To the extent permitted by the{" "}
              <em>Australian Consumer Law</em> (Schedule 2 of the <em>Competition and Consumer Act 2010</em>),
              Kansai Karate Gold Coast excludes all liability for any loss, injury, or damage arising from
              participation in our classes or use of our website. Nothing in these terms limits or excludes
              any consumer guarantee or right that cannot lawfully be excluded under the Australian Consumer Law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">7. Photography and Media</h2>
            <p>
              Classes may be photographed or filmed for use in our marketing materials, social media, or
              internal records. If you prefer that you or your child not be photographed, please notify us
              in writing at the time of enrolment or at any time thereafter. We will respect all such requests.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">8. External Links</h2>
            <p>
              Our website may contain links to third-party websites (including our booking platform and
              affiliated organisations). We are not responsible for the content or privacy practices of
              those websites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">9. Changes to These Terms</h2>
            <p>
              We may update these Terms of Use from time to time. The current version will always be
              available on this page. Continued use of our website or participation in our classes after
              any update constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-3">10. Contact</h2>
            <p>Questions about these terms? Contact us at:</p>
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

        </div>
      </section>
    </>
  );
}
