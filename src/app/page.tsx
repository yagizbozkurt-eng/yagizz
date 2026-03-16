import Link from "next/link";
import LandCard from "@/components/LandCard";
import ApartmentCard from "@/components/ApartmentCard";
import { landListings, apartmentListings, contractorRequests } from "@/lib/data";

export default function HomePage() {
  const featuredLand = landListings.slice(0, 3);
  const featuredApartments = apartmentListings.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[600px] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hayalinizdeki Mülkü
            <br />
            <span className="text-emerald-400">Birlikte Buluyoruz</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Yazlık arsalar, sıfır daireler ve müteahhit bağlantısı hizmetleri
            ile emlak dünyasında güvenilir çözüm ortağınız.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/arsalar"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              🏞️ Arsaları Keşfet
            </Link>
            <Link
              href="/daireler"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              🏢 Daireleri Gör
            </Link>
            <Link
              href="/mutteahhit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              🔨 Müteahhit Bul
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-emerald-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">150+</div>
              <div className="text-emerald-200 text-sm mt-1">Satılık Arsa</div>
            </div>
            <div>
              <div className="text-3xl font-bold">80+</div>
              <div className="text-emerald-200 text-sm mt-1">Sıfır Daire</div>
            </div>
            <div>
              <div className="text-3xl font-bold">40+</div>
              <div className="text-emerald-200 text-sm mt-1">Müteahhit</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-emerald-200 text-sm mt-1">
                Mutlu Müşteri
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Land Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              🏞️ Öne Çıkan Arsalar
            </h2>
            <p className="text-gray-500 mt-1">
              Yazlık bölgelerdeki seçkin arsa fırsatları
            </p>
          </div>
          <Link
            href="/arsalar"
            className="text-emerald-700 font-semibold hover:underline"
          >
            Tümünü Gör →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredLand.map((listing) => (
            <LandCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      {/* Featured Apartments */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                🏢 Öne Çıkan Sıfır Daireler
              </h2>
              <p className="text-gray-500 mt-1">
                İnşaat firmalarından yeni &amp; proje daireler
              </p>
            </div>
            <Link
              href="/daireler"
              className="text-blue-700 font-semibold hover:underline"
            >
              Tümünü Gör →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredApartments.map((listing) => (
              <ApartmentCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Contractor Section CTA */}
      <section className="bg-amber-50 border-y border-amber-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              🔨 Müteahhit Bağlantısı
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              Konut projeniz için müteahhit mi arıyorsunuz? Ya da müteahhit
              olarak yeni projeler mi istiyorsunuz? Doğru adrestesiniz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {contractorRequests.slice(0, 2).map((req) => (
              <div
                key={req.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-amber-100 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-medium">
                    {req.projectType}
                  </span>
                  {req.budget && (
                    <span className="text-sm font-bold text-amber-700">
                      {req.budget}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{req.title}</h3>
                <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                  <span>📍</span>
                  {req.location}
                </p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {req.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/mutteahhit"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Tüm Proje İlanlarını Gör →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Neden Yagız Emlak?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="font-bold text-xl mb-2">Güvenilir Danışmanlık</h3>
            <p className="text-gray-500 text-sm">
              Uzman ekibimizle her adımda yanınızdayız. Doğru mülk kararını
              birlikte veriyoruz.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="font-bold text-xl mb-2">Yazlık Bölge Uzmanlığı</h3>
            <p className="text-gray-500 text-sm">
              Ege ve Akdeniz kıyılarındaki yazlık bölgelerde kapsamlı portföy ve
              derin yerel bilgi.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="font-bold text-xl mb-2">Müteahhit Ağı</h3>
            <p className="text-gray-500 text-sm">
              40&apos;tan fazla güvenilir müteahhit firmayı projelerinizle
              buluşturuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="relative bg-cover bg-center py-20 text-white text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(4,120,87,0.85), rgba(4,120,87,0.85)), url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&q=80')",
        }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Hemen Ücretsiz Danışın
          </h2>
          <p className="text-emerald-100 mb-8">
            Arsa satın alma, daire değerlendirme veya müteahhit bağlantısı için
            bugün bize ulaşın.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-white text-emerald-700 font-bold px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </div>
  );
}
