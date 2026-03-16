import { Metadata } from "next";
import ApartmentCard from "@/components/ApartmentCard";
import { apartmentListings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sıfır Daireler | Yagız Emlak",
  description:
    "İnşaat firmalarından sıfır ve proje aşamasındaki daire ilanları. Bodrum, Çeşme, Fethiye, Marmaris, Antalya ve İstanbul.",
};

export default function DairelerPage() {
  const sifirDaireler = apartmentListings.filter(
    (a) => a.status === "Sıfır"
  );
  const projeDaireler = apartmentListings.filter(
    (a) => a.status === "Proje Aşamasında"
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          🏢 Sıfır Daireler
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl">
          Önde gelen inşaat firmalarının sıfır ve proje aşamasındaki daireleri.
          Fotoğraf, video ve tüm detaylarıyla inceleyin.
        </p>
      </div>

      {/* Status Filter Chips */}
      <div className="flex flex-wrap gap-3 mb-10">
        <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full font-medium">
          Sıfır ({sifirDaireler.length})
        </span>
        <span className="text-sm bg-amber-500 text-white px-3 py-1 rounded-full font-medium">
          Proje Aşamasında ({projeDaireler.length})
        </span>
      </div>

      {/* Sıfır Daireler */}
      {sifirDaireler.length > 0 && (
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span>
            Hazır Teslim Sıfır Daireler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sifirDaireler.map((listing) => (
              <ApartmentCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      )}

      {/* Proje Aşamasındakiler */}
      {projeDaireler.length > 0 && (
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
            Proje Aşamasındaki Daireler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projeDaireler.map((listing) => (
              <ApartmentCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Özel Talep veya Kurumsal Alım
        </h2>
        <p className="text-gray-500 mb-6">
          Birden fazla daire veya özel koşullarda alım için danışmanlarımızla
          görüşebilirsiniz.
        </p>
        <a
          href="tel:+905321112233"
          className="inline-block bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors"
        >
          📞 Hemen Arayın: +90 532 111 2233
        </a>
      </div>
    </div>
  );
}
