import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { landListings, formatArea, formatPrice } from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return landListings.map((l) => ({ id: l.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const listing = landListings.find((l) => l.id === id);
  if (!listing) return { title: "İlan Bulunamadı | Yagız Emlak" };
  return {
    title: `${listing.title} | Yagız Emlak`,
    description: listing.description,
  };
}

export default async function ArsaDetailPage({ params }: Props) {
  const { id } = await params;
  const listing = landListings.find((l) => l.id === id);
  if (!listing) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-emerald-700">
          Ana Sayfa
        </Link>{" "}
        /{" "}
        <Link href="/arsalar" className="hover:text-emerald-700">
          Yazlık Arsalar
        </Link>{" "}
        / <span className="text-gray-900">{listing.title}</span>
      </nav>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {listing.images.map((img, i) => (
          <div
            key={i}
            className={`relative rounded-xl overflow-hidden ${
              i === 0 ? "md:col-span-2 h-80" : "h-56"
            }`}
          >
            <Image
              src={img}
              alt={`${listing.title} - Fotoğraf ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Video */}
      {listing.videoUrl && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">🎥 Video Turu</h2>
          <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
            <iframe
              src={listing.videoUrl}
              className="w-full h-full"
              allowFullScreen
              title="Arsa video turu"
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-3xl font-bold text-gray-900">{listing.title}</h1>
          </div>
          <p className="text-gray-500 flex items-center gap-1 mb-6">
            <span>📍</span>
            {listing.location}, {listing.region}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-emerald-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-emerald-700">
                {formatPrice(listing.price)}
              </div>
              <div className="text-xs text-gray-500 mt-1">Satış Fiyatı</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {formatArea(listing.area)}
              </div>
              <div className="text-xs text-gray-500 mt-1">Toplam Alan</div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Açıklama</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {listing.description}
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Özellikler</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {listing.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <span className="text-emerald-500">✓</span>
                {f}
              </li>
            ))}
          </ul>

          {(listing.adaParcel || listing.zoning) && (
            <div className="bg-gray-50 rounded-xl p-5 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Tapu &amp; İmar Bilgileri
              </h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {listing.adaParcel && (
                  <div>
                    <div className="text-gray-400 text-xs mb-1">
                      Ada / Parsel
                    </div>
                    <div className="font-medium text-gray-800">
                      {listing.adaParcel}
                    </div>
                  </div>
                )}
                {listing.zoning && (
                  <div>
                    <div className="text-gray-400 text-xs mb-1">
                      İmar Durumu
                    </div>
                    <div className="font-medium text-gray-800">
                      {listing.zoning}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar: Contact Card */}
        <div>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 sticky top-24">
            <h2 className="font-bold text-lg text-gray-900 mb-4">
              İlan Hakkında Bilgi Alın
            </h2>
            <div className="text-sm text-gray-600 mb-4">
              Bu ilan için danışmanımızla iletişime geçebilirsiniz.
            </div>
            <a
              href={`tel:${listing.contact.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 w-full bg-emerald-700 text-white font-semibold py-3 rounded-lg hover:bg-emerald-800 transition-colors mb-3"
            >
              📞 {listing.contact}
            </a>
            <a
              href={`https://wa.me/${listing.contact.replace(/[\s+]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp
            </a>
            <div className="mt-4 text-xs text-gray-400 text-center">
              İlan Tarihi: {listing.createdAt}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/arsalar"
          className="text-emerald-700 font-medium hover:underline"
        >
          ← Tüm Arsalara Dön
        </Link>
      </div>
    </div>
  );
}
