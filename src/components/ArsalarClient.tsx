"use client";

import { useState } from "react";
import LandCard from "@/components/LandCard";
import { LandListing } from "@/lib/data";

export default function ArsalarClient({
  listings,
}: {
  listings: LandListing[];
}) {
  const regions = Array.from(new Set(listings.map((l) => l.region)));
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const filtered =
    selectedRegion === null
      ? listings
      : listings.filter((l) => l.region === selectedRegion);

  return (
    <>
      {/* Region Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-sm text-gray-500 self-center font-medium">
          Bölge:
        </span>
        <button
          onClick={() => setSelectedRegion(null)}
          className={`text-sm px-3 py-1 rounded-full border transition-colors cursor-pointer ${
            selectedRegion === null
              ? "bg-emerald-700 text-white border-emerald-700"
              : "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"
          }`}
        >
          Tümü ({listings.length})
        </button>
        {regions.map((region) => {
          const count = listings.filter((l) => l.region === region).length;
          return (
            <button
              key={region}
              onClick={() =>
                setSelectedRegion(selectedRegion === region ? null : region)
              }
              className={`text-sm px-3 py-1 rounded-full border transition-colors cursor-pointer ${
                selectedRegion === region
                  ? "bg-emerald-700 text-white border-emerald-700"
                  : "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"
              }`}
            >
              {region} ({count})
            </button>
          );
        })}
      </div>

      {/* Listings Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          Bu bölgede ilan bulunamadı.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((listing) => (
            <LandCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </>
  );
}
