import Link from "next/link";
import Image from "next/image";
import { ApartmentListing, formatArea, formatPrice } from "@/lib/data";

export default function ApartmentCard({
  listing,
}: {
  listing: ApartmentListing;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={listing.images[0]}
          alt={listing.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              listing.status === "Sıfır"
                ? "bg-blue-600 text-white"
                : "bg-amber-500 text-white"
            }`}
          >
            {listing.status}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
          {listing.rooms}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1 line-clamp-2">
          {listing.title}
        </h3>
        <p className="text-gray-500 text-xs mb-1 flex items-center gap-1">
          <span>🏗️</span>
          {listing.company}
        </p>
        <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
          <span>📍</span>
          {listing.location}
        </p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {listing.description}
        </p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-blue-700 font-bold text-lg">
            {formatPrice(listing.price)}
          </span>
          <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded">
            {formatArea(listing.area)}
          </span>
        </div>
        <div className="text-xs text-gray-500 mb-4">
          Kat: {listing.floor}/{listing.totalFloors} • Teslim:{" "}
          {listing.deliveryDate}
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          {listing.features.slice(0, 3).map((f) => (
            <span
              key={f}
              className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200"
            >
              {f}
            </span>
          ))}
          {listing.features.length > 3 && (
            <span className="text-xs text-gray-400 px-2 py-0.5">
              +{listing.features.length - 3} daha
            </span>
          )}
        </div>
        <Link
          href={`/daireler/${listing.id}`}
          className="block text-center bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium"
        >
          Detayları Gör
        </Link>
      </div>
    </div>
  );
}
