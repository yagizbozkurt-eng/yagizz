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

#### macOS (Mac Bilgisayar)

**Seçenek 1: Resmi Yükleyici (En Kolay - Önerilir)**

1. Tarayıcınızda şu adrese gidin: **https://nodejs.org/**
2. Yeşil **"LTS"** butonuna tıklayın (dosya indirilecek)
3. İndirilen `.pkg` dosyasını çift tıklayarak açın
4. Kurulum sihirbazında "Continue" butonlarına tıklayın
5. Mac şifrenizi girin ve kurulumu tamamlayın

**Kurulumu test edin:** Terminal'i açın ve şu komutu yapıştırın:
```
node --version
```
Sürüm numarası görünüyorsa (örn: `v20.11.0`) kurulum başarılı!

**Seçenek 2: Homebrew ile**

Homebrew yüklü değilse önce bu komutu Terminal'e yapıştırın:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Sonra Node.js'i yüklemek için bu komutu yapıştırın:
```
brew install node
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

### Adım Adım Proje Kurulumu

> ⚠️ **ÖNEMLİ:** Aşağıdaki komutları **tek tek** kopyalayıp Terminal'e yapıştırın. Her komuttan sonra Enter'a basın ve komutun bitmesini bekleyin.

**Adım 1:** Projeyi indirin (Terminal'e bu komutu yapıştırın):
```
git clone https://github.com/yagizbozkurt-eng/yagizz.git
```

**Adım 2:** Proje klasörüne girin:
```
cd yagizz
```

**Adım 3:** Bağımlılıkları yükleyin (bu birkaç dakika sürebilir):
```
npm install
```

**Adım 4:** Siteyi başlatın:
```
npm run dev
```

**Adım 5:** Tarayıcınızda siteyi görüntüleyin:

Tarayıcınızı açın ve adres çubuğuna yazın: **http://localhost:3000**

---

### 🛠️ Sorun Giderme

**"command not found: #" hatası alıyorsanız:**
- `#` ile başlayan satırlar yorum satırıdır, bunları Terminal'e yapıştırmayın
- Sadece komutları (örn: `npm install`) tek tek yapıştırın

**"no such file or directory: yagizz" hatası alıyorsanız:**
- Önce `git clone` komutunu çalıştırdığınızdan emin olun
- Proje klasörünün indirildiğini kontrol edin

**"Could not read package.json" hatası alıyorsanız:**
- `cd yagizz` komutuyla proje klasörüne girdiğinizden emin olun
- Terminal'de `pwd` yazıp Enter'a basın - yolun sonunda `yagizz` yazmalı

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
