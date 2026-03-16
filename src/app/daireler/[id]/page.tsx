import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apartmentListings, formatArea, formatPrice } from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return apartmentListings.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const listing = apartmentListings.find((a) => a.id === id);
  if (!listing) return { title: "İlan Bulunamadı | Yagız Emlak" };
  return {
    title: `${listing.title} | Yagız Emlak`,
    description: listing.description,
  };
}

export default async function DaireDetailPage({ params }: Props) {
  const { id } = await params;
  const listing = apartmentListings.find((a) => a.id === id);
  if (!listing) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-700">
          Ana Sayfa
        </Link>{" "}
        /{" "}
        <Link href="/daireler" className="hover:text-blue-700">
          Sıfır Daireler
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
              title="Daire video turu"
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full ${
                listing.status === "Sıfır"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {listing.status}
            </span>
            <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              {listing.rooms}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            {listing.title}
          </h1>
          <p className="text-gray-500 text-sm flex items-center gap-1 mb-1">
            <span>🏗️</span>
            {listing.company}
          </p>
          <p className="text-gray-500 flex items-center gap-1 mb-6">
            <span>📍</span>
            {listing.location}, {listing.region}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="bg-blue-50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-blue-700">
                {formatPrice(listing.price)}
              </div>
              <div className="text-xs text-gray-500 mt-1">Fiyat</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-gray-900">
                {formatArea(listing.area)}
              </div>
              <div className="text-xs text-gray-500 mt-1">Brüt Alan</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-gray-900">
                {listing.floor}/{listing.totalFloors}
              </div>
              <div className="text-xs text-gray-500 mt-1">Kat</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-gray-900">
                {listing.deliveryDate}
              </div>
              <div className="text-xs text-gray-500 mt-1">Teslim</div>
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
                <span className="text-blue-500">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar: Contact Card */}
        <div>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 sticky top-24">
            <h2 className="font-bold text-lg text-gray-900 mb-4">
              Bu Daire Hakkında Bilgi Alın
            </h2>
            <div className="text-sm text-gray-600 mb-4">
              Danışmanımızla iletişime geçerek detaylı bilgi ve randevu
              alabilirsiniz.
            </div>
            <a
              href={`tel:${listing.contact.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition-colors mb-3"
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
          href="/daireler"
          className="text-blue-700 font-medium hover:underline"
        >
          ← Tüm Dairelere Dön
        </Link>
      </div>
    </div>
  );
}
