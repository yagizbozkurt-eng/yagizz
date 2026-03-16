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

### 📦 Node.js Kurulumu

Node.js'i kurmak için işletim sisteminize göre aşağıdaki adımları izleyin:

#### Windows

1. [Node.js resmi sitesine](https://nodejs.org/) gidin
2. **LTS (Uzun Süreli Destek)** sürümünü indirin (örn: 20.x.x LTS)
3. İndirilen `.msi` dosyasını çalıştırın
4. Kurulum sihirbazını takip edin:
   - "Next" butonuna tıklayın
   - Lisans sözleşmesini kabul edin
   - Kurulum yolunu değiştirmeyin (varsayılan: `C:\Program Files\nodejs`)
   - "Next" ve ardından "Install" butonuna tıklayın
5. Kurulum tamamlandıktan sonra **Komut İstemi (CMD)** veya **PowerShell** açın
6. Kurulumu doğrulayın:
   ```bash
   node --version
   npm --version
   ```

#### macOS

**Seçenek 1: Resmi Yükleyici**
1. [Node.js resmi sitesine](https://nodejs.org/) gidin
2. **LTS** sürümünü indirin
3. İndirilen `.pkg` dosyasını çalıştırın ve kurulumu tamamlayın

**Seçenek 2: Homebrew ile (Önerilir)**
```bash
# Homebrew yüklü değilse önce yükleyin:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Node.js'i yükleyin:
brew install node
```

Kurulumu doğrulayın:
```bash
node --version
npm --version
```

#### Linux (Ubuntu/Debian)

```bash
# Paket listesini güncelleyin
sudo apt update

# Node.js 20.x kurun (NodeSource deposundan)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Kurulumu doğrulayın
node --version
npm --version
```

#### Linux (Fedora/RHEL)

```bash
# Node.js 20.x kurun
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install -y nodejs

# Kurulumu doğrulayın
node --version
npm --version
```

> 💡 **İpucu:** Kurulum doğru ise `node --version` komutu `v18.17.0` veya üstü bir sürüm numarası göstermelidir.

---

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
