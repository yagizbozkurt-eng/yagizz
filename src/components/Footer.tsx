import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏡</span>
              <span className="font-bold text-xl text-white">Yagız Emlak</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Yazlık bölgelerdeki arsalar, sıfır daireler ve müteahhit
              bağlantısı hizmetinizde. Hayalinizdeki mülkü birlikte buluyoruz.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/arsalar"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Yazlık Arsalar
                </Link>
              </li>
              <li>
                <Link
                  href="/daireler"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Sıfır Daireler
                </Link>
              </li>
              <li>
                <Link
                  href="/mutteahhit"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Müteahhit Bağlantısı
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="hover:text-emerald-400 transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">İletişim</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a
                  href="tel:+905321112233"
                  className="hover:text-emerald-400 transition-colors"
                >
                  +90 532 111 2233
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a
                  href="mailto:info@yagizemlak.com"
                  className="hover:text-emerald-400 transition-colors"
                >
                  info@yagizemlak.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Bodrum, Muğla, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Yagız Emlak. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
