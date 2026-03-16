import { Metadata } from "next";
import LandCard from "@/components/LandCard";
import { landListings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Yazlık Arsalar | Yagız Emlak",
  description:
    "Bodrum, Çeşme, Fethiye, Marmaris, Antalya ve daha pek çok yazlık bölgede satılık arsa ilanları.",
};

export default function ArsalarPage() {
  const regions = Array.from(new Set(landListings.map((l) => l.region)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          🏞️ Yazlık Arsalar
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl">
          Ege ve Akdeniz&apos;in en gözde yazlık bölgelerindeki seçkin arsa
          ilanları. Fotoğraf, video ve tüm detaylarıyla inceleyebilirsiniz.
        </p>
      </div>

      {/* Region Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-sm text-gray-500 self-center font-medium">
          Bölge:
        </span>
        {regions.map((region) => (
          <span
            key={region}
            className="text-sm bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full"
          >
            {region}
          </span>
        ))}
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {landListings.map((listing) => (
          <LandCard key={listing.id} listing={listing} />
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-14 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Aradığınızı Bulamadınız mı?
        </h2>
        <p className="text-gray-500 mb-6">
          Portföyümüzde yer almayan bölge veya özelliklere sahip arsa
          ihtiyaçlarınız için bizimle iletişime geçin.
        </p>
        <a
          href="tel:+905321112233"
          className="inline-block bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-emerald-800 transition-colors"
        >
          📞 Hemen Arayın: +90 532 111 2233
        </a>
      </div>
    </div>
  );
}
