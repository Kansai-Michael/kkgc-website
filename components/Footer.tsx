import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#001040] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-[#FFB800] font-bold text-lg mb-3">Kansai Karate Gold Coast</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Traditional Shitoryu Shukokai karate for the whole family. Serving Upper Coomera and the northern Gold Coast.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/KansaiKarateUpperCoomera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#FFB800] transition-colors text-sm"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/kansaikarateuppercoomera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#FFB800] transition-colors text-sm"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-semibold mb-3 text-white/90">Programs</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="/programs/cubs" className="hover:text-[#FFB800] transition-colors">Cubs (Ages 3–4)</Link></li>
            <li><Link href="/programs/little-lions" className="hover:text-[#FFB800] transition-colors">Little Lions (Ages 5–7)</Link></li>
            <li><Link href="/programs/juniors" className="hover:text-[#FFB800] transition-colors">Juniors (Ages 8–12)</Link></li>
            <li><Link href="/programs/teens-adults" className="hover:text-[#FFB800] transition-colors">Teens & Adults (13+)</Link></li>
            <li><Link href="/timetable" className="hover:text-[#FFB800] transition-colors">View Timetable</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-white/90">Contact</h4>
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
              Upper Coomera QLD 4209
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
        <p>© {new Date().getFullYear()} Kansai Karate Gold Coast. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white/70">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white/70">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
