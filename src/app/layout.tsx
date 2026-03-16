import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yagız Emlak | Yazlık Arsalar, Sıfır Daireler, Müteahhit Bağlantısı",
  description:
    "Yazlık bölgelerdeki arsalar, sıfır daireler ve müteahhit bağlantısı hizmeti. Hayalinizdeki mülkü bulmak veya projeniz için doğru müteahhidi bulmak için yanınızdayız.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
