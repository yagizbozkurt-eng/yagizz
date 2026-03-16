export type LandListing = {
  id: string;
  title: string;
  location: string;
  region: string;
  price: number;
  area: number; // m²
  description: string;
  features: string[];
  images: string[];
  videoUrl?: string;
  mapUrl?: string;
  adaParcel?: string;
  zoning?: string;
  contact: string;
  createdAt: string;
};

export type ApartmentListing = {
  id: string;
  title: string;
  company: string;
  location: string;
  region: string;
  price: number;
  area: number; // m²
  rooms: string;
  floor: number;
  totalFloors: number;
  description: string;
  features: string[];
  images: string[];
  videoUrl?: string;
  deliveryDate: string;
  status: "Sıfır" | "Proje Aşamasında";
  contact: string;
  createdAt: string;
};

export type ContractorRequest = {
  id: string;
  title: string;
  location: string;
  region: string;
  projectType: string;
  area: number;
  description: string;
  budget?: string;
  requiredCerts: string[];
  contact: string;
  createdAt: string;
};

export type ContractorProfile = {
  id: string;
  name: string;
  company: string;
  specializations: string[];
  experience: number; // years
  completedProjects: number;
  description: string;
  certifications: string[];
  contact: string;
  regions: string[];
  createdAt: string;
};

export const landListings: LandListing[] = [
  {
    id: "arsa-001",
    title: "Bodrum Yalıkavak'ta Deniz Manzaralı Arsa",
    location: "Yalıkavak, Bodrum",
    region: "Muğla",
    price: 4500000,
    area: 1200,
    description:
      "Bodrum Yalıkavak'ta eşsiz deniz manzarasına sahip, villa inşaatına uygun müstakil arsa. İmar durumu villa + müştemilat şeklindedir. Tüm altyapı hazır.",
    features: [
      "Deniz manzarası",
      "Villa imarı",
      "Tüm altyapı mevcut",
      "Asfalt yol cephesi",
      "Yalıkavak Marinası'na 2 km",
    ],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    ],
    adaParcel: "Ada: 142 / Parsel: 18",
    zoning: "Villa + Müştemilat",
    contact: "+90 532 111 2233",
    createdAt: "2025-03-01",
  },
  {
    id: "arsa-002",
    title: "Çeşme Alaçatı'da Ticari İmarlı Köşe Parsel",
    location: "Alaçatı, Çeşme",
    region: "İzmir",
    price: 6800000,
    area: 860,
    description:
      "Alaçatı'nın kalbinde, köşe konumda ticari+konut imarına sahip kıymetli parsel. Turistik bölgeye yürüme mesafesinde, yoğun trafik akışına sahip cadde üzerinde.",
    features: [
      "Ticari + Konut imarı",
      "Köşe parsel",
      "Ana cadde cephesi",
      "Alaçatı merkezine 300 m",
      "Rüzgar enerjisi potansiyeli",
    ],
    images: [
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    ],
    adaParcel: "Ada: 78 / Parsel: 5",
    zoning: "Ticari + Konut",
    contact: "+90 532 111 2233",
    createdAt: "2025-03-05",
  },
  {
    id: "arsa-003",
    title: "Fethiye Ölüdeniz'de Sınırlı İmarlı Doğa Parseli",
    location: "Ölüdeniz, Fethiye",
    region: "Muğla",
    price: 2100000,
    area: 3500,
    description:
      "Dünyaca ünlü Ölüdeniz'in hemen yakınında, doğa içinde huzurlu bir arazi. Küçük tatil bungalovları veya glamping projesi için ideal. Tarihi deniz görüntüsüne sahip.",
    features: [
      "Ölüdeniz'e 1.5 km",
      "Deniz ve orman manzarası",
      "Geniş bahçe imkânı",
      "Glamping / Ekoturizm uygun",
      "Huzurlu doğal ortam",
    ],
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    ],
    adaParcel: "Ada: 215 / Parsel: 33",
    zoning: "Turizm",
    contact: "+90 532 111 2233",
    createdAt: "2025-03-10",
  },
  {
    id: "arsa-004",
    title: "Marmaris Içmeler'de Plaja Yakın Arsa",
    location: "İçmeler, Marmaris",
    region: "Muğla",
    price: 3200000,
    area: 900,
    description:
      "İçmeler plajına 200 metre mesafede, köşe konumda satılık arsa. Yüksek katlı konut inşaatına uygun zemin etüdü tamamlanmış, hazır.",
    features: [
      "Plaja 200 metre",
      "Köşe konumda",
      "Yüksek kat imarı",
      "Zemin etüdü tamamlanmış",
      "Tapu devri hazır",
    ],
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    ],
    adaParcel: "Ada: 56 / Parsel: 12",
    zoning: "Konut (Kat 5+1)",
    contact: "+90 532 111 2233",
    createdAt: "2025-03-12",
  },
  {
    id: "arsa-005",
    title: "Antalya Kemer'de Tatil Köyü Projesi Arsası",
    location: "Kemer, Antalya",
    region: "Antalya",
    price: 9500000,
    area: 8500,
    description:
      "Kemer'de Toroslar ile Akdeniz'i aynı anda görebileceğiniz geniş arazi. Tatil köyü, resort veya büyük villa kompleksi inşaatına elverişli. Turizm belgeli alan.",
    features: [
      "Turizm imarı",
      "Dağ + deniz manzarası",
      "8500 m² geniş alan",
      "Resort / Tatil köyü uygun",
      "Kemer merkezine 5 km",
    ],
    images: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    ],
    adaParcel: "Ada: 301 / Parsel: 7",
    zoning: "Turizm Tesis",
    contact: "+90 532 111 2233",
    createdAt: "2025-03-15",
  },
  {
    id: "arsa-006",
    title: "Datça Yarımadası'nda Müstakil Zeytinlik Arsa",
    location: "Datça",
    region: "Muğla",
    price: 1750000,
    area: 5200,
    description:
      "Datça yarımadasının el değmemiş doğasında, asırlık zeytinliklere sahip geniş arazi. Ekoturizm, organik tarım veya münferit villa projesi için eşsiz fırsat.",
    features: [
      "Asırlık zeytin ağaçları",
      "Ekoturizm uygun",
      "El değmemiş doğa",
      "Denize 800 m",
      "Datça merkezine 12 km",
    ],
    images: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80",
    ],
    adaParcel: "Ada: 189 / Parsel: 45",
    zoning: "Tarımsal + Konut",
    contact: "+90 532 111 2233",
    createdAt: "2025-03-18",
  },
];

export const apartmentListings: ApartmentListing[] = [
  {
    id: "daire-001",
    title: "Bodrum Marina'da Lüks Sıfır 3+1 Daire",
    company: "Güneş İnşaat A.Ş.",
    location: "Bodrum Merkez",
    region: "Muğla",
    price: 12500000,
    area: 185,
    rooms: "3+1",
    floor: 4,
    totalFloors: 5,
    description:
      "Bodrum Marina'ya yürüme mesafesinde, tamamen sıfır lüks daire. Özel yüzme havuzu, jakuzi, kapalı otopark. Akıllı ev sistemleri ve premium malzemeler ile tasarlanmış.",
    features: [
      "Özel havuz",
      "Jakuzi",
      "Akıllı ev sistemi",
      "Kapalı otopark",
      "Güvenlik 7/24",
      "Deniz manzarası",
      "Kuzey-güney cepheli",
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    ],
    deliveryDate: "Hazır",
    status: "Sıfır",
    contact: "+90 532 111 2233",
    createdAt: "2025-02-20",
  },
  {
    id: "daire-002",
    title: "Çeşme Yeni Proje: Alacatı Residence 2+1",
    company: "Ege Yapı Grubu",
    location: "Alaçatı, Çeşme",
    region: "İzmir",
    price: 7200000,
    area: 110,
    rooms: "2+1",
    floor: 2,
    totalFloors: 4,
    description:
      "Ege Yapı Grubu'nun en prestijli projesi Alaçatı Residence'da sıfır daireler satışta. Site içi yüzme havuzu, spor alanı ve sosyal tesisler mevcut.",
    features: [
      "Site içi yüzme havuzu",
      "Spor salonu",
      "Sosyal tesisler",
      "Isıtmalı zemin",
      "Fransız balkon",
      "Yerli ve yabancı ağaçlarla çevrili",
    ],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    ],
    deliveryDate: "2026 Q1",
    status: "Proje Aşamasında",
    contact: "+90 532 111 2233",
    createdAt: "2025-02-25",
  },
  {
    id: "daire-003",
    title: "Fethiye Hillside Premium 4+1 Villa Dairesi",
    company: "Akdeniz Yapı Ltd.",
    location: "Fethiye",
    region: "Muğla",
    price: 9800000,
    area: 240,
    rooms: "4+1",
    floor: 1,
    totalFloors: 3,
    description:
      "Fethiye körfezine hâkim tepede konumlanan villa dairesi projesi. Her daire özel bahçe, terasa sahip. Üst düzey malzeme ve işçilik ile Akdeniz yaşam tarzı sunulmaktadır.",
    features: [
      "Özel bahçe",
      "Panoramik teras",
      "Özel havuz seçeneği",
      "Fethiye körfezi manzarası",
      "Bağımsız giriş",
      "Akıllı ev altyapısı",
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    ],
    deliveryDate: "2025 Q4",
    status: "Proje Aşamasında",
    contact: "+90 532 111 2233",
    createdAt: "2025-03-01",
  },
  {
    id: "daire-004",
    title: "Marmaris Waterfront Sıfır 1+1 Stüdyo",
    company: "Kıyı Yapı A.Ş.",
    location: "Marmaris Merkez",
    region: "Muğla",
    price: 3500000,
    area: 65,
    rooms: "1+1",
    floor: 3,
    totalFloors: 8,
    description:
      "Marmaris koyuna sıfır konumda, yatırımlık sıfır stüdyo daireler. Kira getirisi garantili proje. Turizm işletmeciliğine uygun, düzenli kira geliri hedefleyenler için ideal.",
    features: [
      "Denize sıfır konum",
      "Kira garantisi",
      "Ortak yüzme havuzu",
      "Restoran ve lobi",
      "Turizm işletmesi uyumlu",
    ],
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    ],
    deliveryDate: "Hazır",
    status: "Sıfır",
    contact: "+90 532 111 2233",
    createdAt: "2025-03-05",
  },
  {
    id: "daire-005",
    title: "Antalya Konyaaltı Sahil Sitesi 3+1",
    company: "Mediterra İnşaat",
    location: "Konyaaltı, Antalya",
    region: "Antalya",
    price: 5900000,
    area: 155,
    rooms: "3+1",
    floor: 5,
    totalFloors: 12,
    description:
      "Konyaaltı sahiline 100 metre mesafede konumlanan yeni proje. Olimpik yüzme havuzu, fitness merkezi, çocuk oyun alanları ile geniş sosyal donatılar sunmaktadır.",
    features: [
      "Olimpik yüzme havuzu",
      "Fitness merkezi",
      "Çocuk oyun alanı",
      "Sahile 100 metre",
      "Güvenlik 24/7",
      "Otopark",
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
    ],
    deliveryDate: "2026 Q2",
    status: "Proje Aşamasında",
    contact: "+90 532 111 2233",
    createdAt: "2025-03-10",
  },
  {
    id: "daire-006",
    title: "İstanbul Kartal Deniz Manzaralı Sıfır 2+1",
    company: "Metropol Yapı",
    location: "Kartal, İstanbul",
    region: "İstanbul",
    price: 8400000,
    area: 120,
    rooms: "2+1",
    floor: 18,
    totalFloors: 32,
    description:
      "Kartal'da yeni tamamlanan yüksek katlı rezidans projesinde sıfır daire. Adalar ve Prens Adaları manzaralı yüksek katlar. Metro istasyonuna 5 dakika yürüme mesafesi.",
    features: [
      "Adalar manzarası",
      "Rezidans hizmetleri",
      "Kapalı otopark",
      "Metro'ya 5 dk",
      "Spor salonu",
      "Havuz + Spa",
    ],
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80",
    ],
    deliveryDate: "Hazır",
    status: "Sıfır",
    contact: "+90 532 111 2233",
    createdAt: "2025-03-15",
  },
];

export const contractorRequests: ContractorRequest[] = [
  {
    id: "proje-001",
    title: "Bodrum'da 12 Villalık Site Projesi",
    location: "Bodrum",
    region: "Muğla",
    projectType: "Konut (Villa)",
    area: 6000,
    description:
      "Bodrum'da 12 adet müstakil villadan oluşan lüks site projesi için deneyimli müteahhit aranmaktadır. Proje onayları tamamlanmıştır, çalışmaya hazır durumdayız.",
    budget: "₺85.000.000",
    requiredCerts: ["ISO 9001", "Lüks Konut Deneyimi", "K3 Müteahhitlik"],
    contact: "+90 532 555 7788",
    createdAt: "2025-03-01",
  },
  {
    id: "proje-002",
    title: "İzmir Bayraklı'da 120 Daireli Konut Projesi",
    location: "Bayraklı, İzmir",
    region: "İzmir",
    projectType: "Konut (Apartman)",
    area: 15000,
    description:
      "Bayraklı'da ruhsat alımı tamamlanmış 120 daireli konut projesi için güçlü referanslara sahip müteahhit firmalar başvurabilir. Prefinansman imkânı mevcuttur.",
    budget: "₺220.000.000",
    requiredCerts: ["TSE Belgesi", "K4 Müteahhitlik", "İSG Yönetim Sistemi"],
    contact: "+90 533 666 9900",
    createdAt: "2025-03-05",
  },
  {
    id: "proje-003",
    title: "Antalya Side'de Butik Otel İnşaatı",
    location: "Side, Antalya",
    region: "Antalya",
    projectType: "Turizm (Butik Otel)",
    area: 4200,
    description:
      "30 odalı butik otel projesi için anahtar teslim müteahhit aranmaktadır. Çevre düzenlemesi ve havuz inşaatı dahil. Turizmden deneyimli firma önceliklidir.",
    budget: "₺45.000.000",
    requiredCerts: ["Turizm Tesis Deneyimi", "ISO 14001"],
    contact: "+90 532 444 6677",
    createdAt: "2025-03-08",
  },
  {
    id: "proje-004",
    title: "Muğla Milas'ta Organize Sanayi Deposu",
    location: "Milas, Muğla",
    region: "Muğla",
    projectType: "Sanayi (Depo / Fabrika)",
    area: 22000,
    description:
      "Milas Organize Sanayi Bölgesi'nde prefabrik depo ve ofis bloğu inşaatı için müteahhit aranmaktadır. Yüksek tonajlı vinç altyapısı gereklidir.",
    budget: "₺38.000.000",
    requiredCerts: ["Prefabrik Deneyimi", "OSB Çalışma Belgesi"],
    contact: "+90 534 777 1122",
    createdAt: "2025-03-12",
  },
];

export const contractorProfiles: ContractorProfile[] = [
  {
    id: "mutteahhit-001",
    name: "Mehmet Yılmaz",
    company: "Yılmaz İnşaat Taahhüt A.Ş.",
    specializations: ["Lüks Konut", "Villa", "Site İnşaatı"],
    experience: 22,
    completedProjects: 47,
    description:
      "1999'dan bu yana Türkiye'nin önde gelen müteahhit firması olarak hizmet vermekteyiz. Ege ve Akdeniz kıyılarında 47 tamamlanmış projemiz bulunmaktadır.",
    certifications: ["ISO 9001:2015", "K4 Müteahhitlik Yetki Belgesi", "TSE"],
    contact: "+90 532 200 3344",
    regions: ["Muğla", "İzmir", "Antalya"],
    createdAt: "2025-02-15",
  },
  {
    id: "mutteahhit-002",
    name: "Ayşe Kaya",
    company: "Kaya Yapı Grubu Ltd.",
    specializations: ["Konut Projeleri", "Ticari Yapılar", "Turizm Tesisleri"],
    experience: 15,
    completedProjects: 28,
    description:
      "Özellikle turizm amaçlı yapılarda uzmanlaşmış, butik otel ve tatil köyü inşaatında sektörde referans gösterilen firma. Teslim sürelerine bağlılığı ile bilinir.",
    certifications: ["ISO 9001", "ISO 14001", "K3 Yetki Belgesi"],
    contact: "+90 533 300 4455",
    regions: ["Antalya", "Muğla"],
    createdAt: "2025-02-20",
  },
  {
    id: "mutteahhit-003",
    name: "Hasan Demir",
    company: "Demir İnşaat San. Tic. A.Ş.",
    specializations: ["Toplu Konut", "Apartman", "Altyapı"],
    experience: 30,
    completedProjects: 85,
    description:
      "30 yılı aşkın tecrübesiyle Türkiye genelinde büyük ölçekli konut projelerinde tercih edilen güvenilir müteahhit. TOKİ ve büyük gayrimenkul firmalarıyla işbirliği deneyimi.",
    certifications: [
      "ISO 9001:2015",
      "ISO 45001",
      "K5 Müteahhitlik Yetki Belgesi",
    ],
    contact: "+90 534 400 5566",
    regions: ["İstanbul", "Ankara", "İzmir", "Antalya"],
    createdAt: "2025-02-22",
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatArea(area: number): string {
  return `${area.toLocaleString("tr-TR")} m²`;
}
