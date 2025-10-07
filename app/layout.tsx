import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site } from "@/app/config/site";

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `شركة تنظيف بجدة — ${site.brand} | تنظيف عميق وتعقيم ومفروشات`,
    template: `%s | ${site.brand}`,
  },
  description:
    "شركة المثالي للتنظيف في جدة - خدمات تنظيف شاملة للمنازل والفلل والشركات. تنظيف عميق، تنظيف مفروشات، تعقيم، جلي رخام وأكثر. خدمة احترافية وأسعار منافسة.",
  keywords: [
    "شركة تنظيف بجدة",
    "تنظيف منازل جدة",
    "تنظيف فلل جدة",
    "شركة المثالي",
    "تنظيف عميق",
    "تنظيف مفروشات",
    "تعقيم وتطهير",
    "جلي رخام",
  ],
  authors: [{ name: site.brand }],
  creator: site.brand,
  publisher: site.brand,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: site.url,
    title: `شركة تنظيف بجدة — ${site.brand}`,
    description: "خدمات تنظيف احترافية في جدة - تنظيف منازل، فلل، شقق، مكاتب وأكثر",
    siteName: site.brand,
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: site.brand,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `شركة تنظيف بجدة — ${site.brand}`,
    description: "خدمات تنظيف احترافية في جدة",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}



