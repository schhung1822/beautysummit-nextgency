import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://beautysummit.vn"),
  title: {
    default: "Beauty Summit 2026 - Đăng ký mua vé",
    template: "%s | Beauty Summit 2026"
  },
  description:
    "Đăng ký mua vé Beauty Summit 2026, sự kiện triển lãm, hội thảo và kết nối kinh doanh làm đẹp, spa, clinic và mỹ phẩm.",
  keywords: [
    "Beauty Summit 2026",
    "mua vé Beauty Summit",
    "sự kiện làm đẹp",
    "triển lãm mỹ phẩm",
    "hội thảo spa clinic",
    "Kim Bum Beauty Summit"
  ],
  applicationName: "Beauty Summit 2026",
  authors: [{ name: "Beauty Summit" }],
  creator: "Beauty Summit",
  publisher: "Beauty Summit",
  alternates: {
    canonical: "/dang-ky-mua-ve"
  },
  icons: {
    icon: [
      {
        url: "/images/favicon-bs.webp",
        type: "image/webp"
      }
    ],
    shortcut: "/images/favicon-bs.webp",
    apple: "/images/favicon-bs.webp"
  },
  openGraph: {
    title: "Beauty Summit 2026 - Đăng ký mua ve",
    description:
      "Đăng ký mua vé Beauty Summit 2026, gặp gỡ các chuyên gia đầu ngành, thương hiệu làm đẹp và đại sứ thương hiệu Kim Bum.",
    url: "/dang-ky-mua-ve",
    siteName: "Beauty Summit 2026",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/banner-kim-bum-dai-su-thuong-hieu-bs-26-new_1.webp",
        width: 1200,
        height: 630,
        alt: "Beauty Summit 2026 cùng đại sứ thương hiệu Kim Bum"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty Summit 2026 - Đăng ký mua vé",
    description:
      "Đăng ký mua vé Beauty Summit 2026, Sự kiện kết nối kinh doanh nghành làm đẹp.",
    images: ["/images/banner-kim-bum-dai-su-thuong-hieu-bs-26-new_1.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
