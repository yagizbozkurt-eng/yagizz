import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="text-7xl mb-6">🏚️</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Sayfa Bulunamadı
      </h1>
      <p className="text-gray-500 text-lg mb-8">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </p>
      <Link
        href="/"
        className="inline-block bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-emerald-800 transition-colors"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
