import { Metadata } from "next";
import ArsalarClient from "@/components/ArsalarClient";
import { landListings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Yazlık Arsalar | Yagız Emlak",
  description:
    "Bodrum, Çeşme, Fethiye, Marmaris, Antalya ve daha pek çok yazlık bölgede satılık arsa ilanları.",
};

export default function ArsalarPage() {
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

      {/* Filter + Listings (client component) */}
      <ArsalarClient listings={landListings} />

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
