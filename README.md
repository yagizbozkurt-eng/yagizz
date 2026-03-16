# Yagız Emlak

Yazlık bölgelerdeki arsalar, sıfır daireler ve müteahhit bağlantısı hizmeti sunan emlak danışmanlığı web sitesi.

## Özellikler

- 🏞️ **Yazlık Arsalar** — Bodrum, Çeşme, Fethiye, Marmaris, Antalya gibi tatil bölgelerindeki satılık arsaları detay sayfasıyla listeler (fotoğraf, video, ada/parsel, imar bilgisi).
- 🏢 **Sıfır Daireler** — İnşaat firmalarının sıfır ve proje aşamasındaki dairelerini listeler.
- 🔨 **Müteahhit Bağlantısı** — Müteahhit arayan proje sahiplerini ve müteahhit firmalarını bir araya getirir.
- 📞 **İletişim Formu** — Doğrulama içeren iletişim formu.

## 🚀 Web Sitesini Çalıştırma

### Gereksinimler

- [Node.js](https://nodejs.org/) (18.17 veya üstü)
- npm (Node.js ile birlikte gelir)

### Adım Adım Kurulum

1. **Depoyu klonlayın (eğer henüz yapmadıysanız):**
   ```bash
   git clone https://github.com/yagizbozkurt-eng/yagizz.git
   cd yagizz
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Development sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

4. **Tarayıcınızda siteyi görüntüleyin:**
   
   Tarayıcınızı açın ve [http://localhost:3000](http://localhost:3000) adresine gidin.

### Diğer Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Development sunucusunu başlatır (http://localhost:3000) |
| `npm run build` | Production için siteyi derler |
| `npm run start` | Derlenmiş siteyi production modunda çalıştırır |
| `npm run lint` | Kod kalite kontrolü yapar |

## Sayfalar

| Sayfa | URL | Açıklama |
|-------|-----|----------|
| Ana Sayfa | `/` | Öne çıkan arsalar, daireler ve genel bilgiler |
| Yazlık Arsalar | `/arsalar` | Tüm arsa ilanları listesi |
| Sıfır Daireler | `/daireler` | Tüm daire ilanları listesi |
| Müteahhit Bağlantısı | `/mutteahhit` | Proje ilanları ve müteahhit eşleştirme |
| İletişim | `/iletisim` | İletişim formu |

## Teknoloji Yığını

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React 19](https://react.dev/)
