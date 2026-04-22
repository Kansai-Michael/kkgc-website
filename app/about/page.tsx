import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kansai Karate Gold Coast | Sensei Michael Hunt",
  description: "Led by Sensei Michael Hunt (5th Dan), Kansai Karate Gold Coast offers traditional Shitoryu Shukokai karate in Upper Coomera. Free trial available.",
  alternates: { canonical: "/about" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Michael Hunt",
  "honorificPrefix": "Sensei",
  "jobTitle": "Head Instructor",
  "description": "5th Dan Shitoryu Shukokai karate instructor with over 25 years training and teaching experience. Head instructor at Kansai Karate Gold Coast in Upper Coomera QLD. Qualified National Kata Judge and National Kumite Judge.",
  "image": "https://kansaikarategoldcoast.com.au/images/instructors/Michael.jpg",
  "worksFor": {
    "@type": "SportsActivityLocation",
    "name": "Kansai Karate Gold Coast",
    "url": "https://kansaikarategoldcoast.com.au"
  }
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Kansai Karate Gold Coast</h1>
          <p className="text-xl text-white/80">
            Traditional Japanese karate, taught with genuine care for every student who walks through the door.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* About the Organisation */}
          <div>
            <h2 className="text-2xl font-bold text-[#003087] mb-4">About Kansai Karate</h2>
            <p className="text-gray-600 mb-4">
              Kansai Karate Academy was established in 1993 in Queensland and is one of the leading martial arts organisations in the state, operating five studios across Brisbane and the Gold Coast. Kansai Karate Gold Coast at Upper Coomera is the local dojo for the Gold Coast region, part of a network built on the same values since day one: traditional technique, genuine instruction, and a family-friendly environment.
            </p>
            <p className="text-gray-600">
              With programs running from age 3 through to adults, the Gold Coast dojo has grown to around 188 active students — families from Upper Coomera, Coomera, Pimpama, Ormeau, Oxenford, Helensvale, and Hope Island who keep coming back year after year.
            </p>
          </div>

          {/* Head Instructor */}
          <div>
            <h2 className="text-2xl font-bold text-[#003087] mb-4">Your Instructors</h2>

            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-4">
                <div className="relative w-32 h-40 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src="/images/instructors/Michael.jpg" alt="Sensei Michael Hunt — Head Instructor, Kansai Karate Gold Coast" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Sensei Michael Hunt — 5th Dan Black Belt</h3>
              <p className="text-gray-600 mb-4">
                Sensei Michael Hunt has been training in Shito-ryu Shukokai Karate for over 25 years and holds the rank of 5th Dan Black Belt. He has received teaching qualifications of <strong>Jun-Shihan</strong> and <strong>Renshi</strong> from Sensei Yamada Soke — World Chief Instructor for the Shito-ryu Shukokai Union — and trains regularly with <strong>Sensei Stephen Kelly</strong> (7th Dan Kyoshi) and senior Shukokai instructors from Japan.
              </p>
              <p className="text-gray-600 mb-4">
                Sensei Michael taught at the Kansai Karate Honbu dojo before opening the Gold Coast dojos in 2013. He holds a <strong>Bronze Coaching Certification</strong> from the NCAS/Australian Sports Commission and the Australian Karate Federation, and is a qualified <strong>National Kata Judge</strong> and <strong>National Kumite Judge</strong> through the Queensland Karate Association (QKA) and Australian Karate Federation (AKF).
              </p>
              <p className="text-gray-600">
                Sensei Michael built Kansai Karate Gold Coast on a simple belief: karate should be accessible to everyone, from 3-year-olds taking their first steps on the mat to adults looking for a challenge that actually means something.
              </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-4">
                <div className="relative w-32 h-40 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src="/images/instructors/Junko29.jpg" alt="Sensei Junko Oiwa — Instructor, Kansai Karate Gold Coast" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Sensei Junko Oiwa — 4th Dan Black Belt</h3>
              <p className="text-gray-600 mb-4">
                Sensei Junko began karate as a child in Japan, training under instructors who were students of Sensei Tani — the founder of Shukokai Karate. She holds the rank of 4th Dan Black Belt and has received teaching qualifications of <strong>Jun-Shidoin</strong> and <strong>Kenshi</strong> from Ishitobi Kazuo Hanshi, Vice President of the Shito-ryu Shukokai Union.
              </p>
              <p className="text-gray-600">
                Sensei Junko holds a Certificate Qualification in Early Childhood Learning and brings over 10 years of childcare industry experience to her teaching — making her particularly skilled with our younger age groups. She also holds Bronze Coaching Certification from the NCAS/ACS and AKF, actively competes in QKA tournament competition, and serves as Assistant Kata Coach for the Queensland Team.
              </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-4">
                <div className="relative w-32 h-40 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src="/images/instructors/Lisa20.jpg" alt="Sensei Lisa Howell — Instructor, Kansai Karate Gold Coast" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Sensei Lisa Howell — 3rd Dan Black Belt</h3>
              <p className="text-gray-600">
                Sensei Lisa has been training with Kansai Karate Gold Coast for over 10 years and holds a 3rd Dan Black Belt awarded by Kazuo Ishitobi Hanshi of the Shito-ryu Shukokai Karate Do Union. After years assisting classes through our leadership program, Lisa completed our Instructor Program and now takes a full instructor role within the dojo. She holds Bronze Coaching Certification from the NCAS/ACS and Karate Australia.
              </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Style */}
          <div>
            <h2 className="text-2xl font-bold text-[#003087] mb-4">The Style: Shitoryu Shukokai</h2>
            <p className="text-gray-600 mb-4">
              Kansai Karate teaches <strong>Shitoryu Shukokai</strong> — a traditional Japanese karate style known for its technical precision, powerful strikes, and emphasis on practical application. The style traces directly to Sensei Tani, founder of Shukokai, and is maintained through a direct lineage to Japan.
            </p>
            <p className="text-gray-600">
              Students learn the complete art: kata (forms), kihon (basics), kumite (sparring), and the philosophy behind each. Unlike many modern martial arts schools, we teach something real — and students who train here know the difference.
            </p>
          </div>

          {/* Affiliations */}
          <div>
            <h2 className="text-2xl font-bold text-[#003087] mb-4">Affiliations</h2>
            <p className="text-gray-600 mb-4">
              Kansai Karate Academy and its affiliated dojos are proud members of Karate Queensland and Karate Australia, recognised as the governing bodies for karate by the Australian Sports Commission.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "Karate Queensland", full: "State governing body for karate", href: "https://karatequeensland.com.au/" },
                { name: "Karate Australia", full: "National governing body for karate", href: "https://www.karateaustralia.org.au/" },
                { name: "Kansai Karate Academy", full: "Licensee of Kansai Karate Academy", href: "https://kansaikarate.com.au/" },
              ].map((a) => (
                <a key={a.name} href={a.href} target="_blank" rel="noopener noreferrer" className="block bg-gray-50 border border-gray-200 rounded-lg px-5 py-3 text-sm hover:border-[#5B7DB1] transition-colors">
                  <span className="font-bold text-[#003087]">{a.name}</span>
                  <span className="text-gray-500 ml-2">— {a.full}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h2 className="text-2xl font-bold text-[#003087] mb-4">Our Dojo</h2>
            <p className="text-gray-600 mb-4">
              We are located at Unit 3/2 Sierra Place, Upper Coomera QLD 4209 — servicing Upper Coomera and the surrounding northern Gold Coast communities including Coomera, Pimpama, Ormeau, Oxenford, Helensvale, and Hope Island.
            </p>
            <div className="rounded-lg overflow-hidden mb-6" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4648.360565573689!2d153.30303471200855!3d-27.852538575999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9113f3d16b9701%3A0xc34a36812abcceaa!2sKansai%20Karate%20Gold%20Coast!5e1!3m2!1sen!2sau!4v1776814148359!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kansai Karate Gold Coast location map"
              />
            </div>
            <Link
              href="/contact"
              className="inline-block bg-[#003087] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#001A52] transition-colors"
            >
              Get in Touch
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
