import { Metadata } from "next";
import Link from "next/link";
import {
  contractorRequests,
  contractorProfiles,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Müteahhit Bağlantısı | Yagız Emlak",
  description:
    "Konut projeleriniz için güvenilir müteahhit bağlantısı. Açık proje ilanları ve kayıtlı müteahhit firmalar.",
};

export default function MutteahhitPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          🔨 Müteahhit Bağlantısı
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl">
          Konut projeniz için doğru müteahhidi bulun ya da müteahhit olarak
          yeni projelere başvurun. İki tarafı da birbirine bağlıyoruz.
        </p>
      </div>

      {/* How it works */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Nasıl Çalışır?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-bold text-lg mb-2">1. Proje İlanı Ver</h3>
            <p className="text-gray-500 text-sm">
              Projenizi sisteme ekleyin; bölge, alan, bütçe ve gereksinimlerinizi
              belirtin.
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-bold text-lg mb-2">2. Eşleştirme Yapılır</h3>
            <p className="text-gray-500 text-sm">
              Danışmanlarımız projenize uygun, referanslı müteahhit firmalarını
              belirler ve teklifleri toplar.
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-bold text-lg mb-2">3. Anlaşma Sağlanır</h3>
            <p className="text-gray-500 text-sm">
              Teklifleri değerlendirin, müteahhidinizi seçin ve projenize
              başlayın.
            </p>
          </div>
        </div>
      </div>

      {/* Open Project Requests */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          📋 Müteahhit Arayan Projeler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contractorRequests.map((req) => (
            <div
              key={req.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
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
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {req.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                <span>📍</span>
                {req.location}, {req.region}
              </p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {req.description}
              </p>
              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-2 font-medium">
                  Alan: {req.area.toLocaleString("tr-TR")} m²
                </div>
                <div className="flex flex-wrap gap-1">
                  {req.requiredCerts.map((cert) => (
                    <span
                      key={cert}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded border"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={`tel:${req.contact.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 w-full bg-amber-600 text-white font-semibold py-2.5 rounded-lg hover:bg-amber-700 transition-colors text-sm"
              >
                📞 Başvurmak İçin Ara: {req.contact}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contractor Profiles */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          👷 Kayıtlı Müteahhit Firmalar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contractorProfiles.map((contractor) => (
            <div
              key={contractor.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">
                  👷
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {contractor.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {contractor.company}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {contractor.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-bold text-gray-900">
                    {contractor.experience}
                  </div>
                  <div className="text-xs text-gray-500">Yıl Deneyim</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-bold text-gray-900">
                    {contractor.completedProjects}
                  </div>
                  <div className="text-xs text-gray-500">Tamamlanan Proje</div>
                </div>
              </div>

              <div className="mb-3">
                <div className="text-xs text-gray-500 mb-1 font-medium">
                  Uzmanlık Alanları:
                </div>
                <div className="flex flex-wrap gap-1">
                  {contractor.specializations.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-1 font-medium">
                  Çalışılan Bölgeler:
                </div>
                <div className="text-sm text-gray-700">
                  {contractor.regions.join(", ")}
                </div>
              </div>

              <a
                href={`tel:${contractor.contact.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 w-full bg-emerald-700 text-white font-semibold py-2.5 rounded-lg hover:bg-emerald-800 transition-colors text-sm"
              >
                📞 {contractor.contact}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Register CTA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
          <div className="text-3xl mb-3">🏗️</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Projeniz İçin Müteahhit Arıyor musunuz?
          </h3>
          <p className="text-gray-500 text-sm mb-5">
            Projenizi bize bildirin, sizin için en uygun müteahhitleri bulalım.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-amber-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Proje Bildirin
          </Link>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
          <div className="text-3xl mb-3">👷</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Müteahhit Olarak Kayıt Olmak mı İstiyorsunuz?
          </h3>
          <p className="text-gray-500 text-sm mb-5">
            Firmayı sisteme ekleyin, projelere başvurma fırsatı yakalayın.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-emerald-800 transition-colors"
          >
            Kayıt Ol
          </Link>
        </div>
      </div>
    </div>
  );
}
