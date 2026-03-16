import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim | Yagız Emlak",
  description:
    "Yagız Emlak ile iletişime geçin. Arsa, daire veya müteahhit bağlantısı için uzmanlarımıza ulaşın.",
};

export default function IletisimPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          📞 İletişim
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Her türlü soru, talep veya bilgi almak için bizimle iletişime
          geçebilirsiniz. Size en kısa sürede dönüş yapacağız.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Bize Ulaşın
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl">📞</div>
              <div>
                <div className="font-semibold text-gray-900">Telefon</div>
                <a
                  href="tel:+905321112233"
                  className="text-emerald-700 hover:underline"
                >
                  +90 532 111 2233
                </a>
                <div className="text-sm text-gray-500 mt-1">
                  Hafta içi: 09:00 – 19:00
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl">💬</div>
              <div>
                <div className="font-semibold text-gray-900">WhatsApp</div>
                <a
                  href="https://wa.me/905321112233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  +90 532 111 2233
                </a>
                <div className="text-sm text-gray-500 mt-1">
                  7/24 mesaj gönderebilirsiniz
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl">✉️</div>
              <div>
                <div className="font-semibold text-gray-900">E-posta</div>
                <a
                  href="mailto:info@yagizemlak.com"
                  className="text-emerald-700 hover:underline"
                >
                  info@yagizemlak.com
                </a>
                <div className="text-sm text-gray-500 mt-1">
                  24 saat içinde yanıt veriyoruz
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl">📍</div>
              <div>
                <div className="font-semibold text-gray-900">Adres</div>
                <div className="text-gray-600">
                  Kumbahçe Mah. Neyzen Tevfik Cd. No:14
                </div>
                <div className="text-gray-600">Bodrum / Muğla, Türkiye</div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-2">🏢 Hizmet Bölgelerimiz</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                "Bodrum",
                "Çeşme / Alaçatı",
                "Fethiye",
                "Marmaris",
                "Antalya",
                "Datça",
                "İstanbul",
              ].map((b) => (
                <span
                  key={b}
                  className="text-sm bg-white text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Mesaj Gönderin
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
