import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kansai Karate Gold Coast | Sensei Michael Hunt",
  description: "Led by Sensei Michael Hunt (4th Dan), Kansai Karate Gold Coast offers traditional Shitoryu Shukokai karate in Upper Coomera. Free trial available.",
  alternates: { canonical: "/about" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Michael Hunt",
  "honorificPrefix": "Sensei",
  "jobTitle": "Head Instructor",
  "description": "4th Dan Shitoryu Shukokai karate instructor. Head instructor at Kansai Karate Gold Coast in Upper Coomera QLD.",
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

          {/* Sensei */}
          <div>
            <h2 className="text-2xl font-bold text-[#003087] mb-4">Your Instructor</h2>
            <p className="text-gray-600 mb-4">
              <strong>Sensei Michael Hunt</strong> holds a 4th Dan in Shitoryu Shukokai karate. He has been training and teaching for over two decades and is a licensed instructor under <strong>Sensei Stephen Kelly</strong> of Kansai Karate Academy.
            </p>
            <p className="text-gray-600 mb-4">
              Sensei Michael built Kansai Karate Gold Coast on a simple belief: karate should be accessible to everyone, from 3-year-olds taking their first steps on the mat to adults looking for a challenge that actually means something.
            </p>
            <p className="text-gray-600">
              With around 188 active students across all age groups, the dojo has become a genuine community in Upper Coomera — not just a place to train, but a place families return to year after year.
            </p>
          </div>

          {/* The Style */}
          <div>
            <h2 className="text-2xl font-bold text-[#003087] mb-4">The Style: Shitoryu Shukokai</h2>
            <p className="text-gray-600 mb-4">
              Kansai Karate teaches <strong>Shitoryu Shukokai</strong> — a traditional Japanese karate style known for its technical precision, powerful strikes, and emphasis on practical application.
            </p>
            <p className="text-gray-600">
              Unlike many modern martial arts schools, we teach the complete art: kata (forms), kihon (basics), kumite (sparring), and the philosophy behind each. Students who train here are learning something real.
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
              We are located at Unit 3/2 Sierra Place, Upper Coomera QLD 4209 — servicing Upper Coomera and the surrounding northern Gold Coast communities.
            </p>
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
