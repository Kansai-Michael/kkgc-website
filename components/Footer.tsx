import Link from "next/link";
import Image from "next/image";

const BADGE_IMG = "/images/KKA-Logo-Trans-background.png";

const locations = [
  { name: "Sumner Park", href: "https://www.kansaikarate.com.au/" },
  { name: "Springfield", href: "https://www.kansaikarate.com.au/" },
  { name: "Moggill", href: "https://www.kansaikarate.com.au/" },
  { name: "Willawong", href: "https://www.kansaikaratewillawong.com.au/" },
  { name: "Clayfield", href: "https://www.karateclayfield.com/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#4A6DA0] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div>
          <Image src={BADGE_IMG} alt="Kansai Karate Academy" width={80} height={80} className="mb-4" />
          <h3 className="text-[#FFB800] font-bold text-lg mb-2">Kansai Karate Gold Coast</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            The Shukokai Union of Upper Coomera teaches Shitoryu Shukokai karate for kids, teens and adults.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-white/90">Contact Us:</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <a href="tel:0489265960" className="hover:text-[#FFB800] transition-colors">
                📞 0489 265 960
              </a>
            </li>
            <li>
              <a href="mailto:info@kansaikarategoldcoast.com.au" className="hover:text-[#FFB800] transition-colors">
                ✉️ info@kansaikarategoldcoast.com.au
              </a>
            </li>
            <li className="text-white/60">
              📍 Unit 3/2 Sierra Place<br />
              Upper Coomera, QLD 4209
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-semibold mb-3 text-white/90">Programs</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="/programs/cubs" className="hover:text-[#FFB800] transition-colors">Cubs (Ages 3–4)</Link></li>
            <li><Link href="/programs/little-lions" className="hover:text-[#FFB800] transition-colors">Little Lions (Ages 5–7)</Link></li>
            <li><Link href="/programs/juniors" className="hover:text-[#FFB800] transition-colors">Juniors (Ages 8–12)</Link></li>
            <li><Link href="/programs/teens" className="hover:text-[#FFB800] transition-colors">Teens Karate (13+)</Link></li>
            <li><Link href="/programs/adults" className="hover:text-[#FFB800] transition-colors">Adult Karate</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-3 text-white/90">Follow Us:</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <a href="https://www.facebook.com/KansaiKarateUpperCoomera" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB800] transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/kansaikarateuppercoomera" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB800] transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@kansaikarategoldcoast" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB800] transition-colors">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Other Locations */}
        <div>
          <h4 className="font-semibold mb-3 text-white/90">Other Kansai Karate Locations:</h4>
          <ul className="space-y-2 text-sm text-white/60">
            {locations.map((loc) => (
              <li key={loc.name}>
                <a
                  href={loc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFB800] transition-colors"
                >
                  {loc.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
        <p>© {new Date().getFullYear()} Kansai Karate Gold Coast. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/dojo-rules" className="hover:text-white/70">Dojo Rules</Link>
          <Link href="/privacy" className="hover:text-white/70">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white/70">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
