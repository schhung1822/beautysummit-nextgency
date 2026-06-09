import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Beauty Summit 2026 - Landing Page",
  description:
    "Landing page Beauty Summit 2026 voi bo cuc su kien, quyen loi ve, dac quyen, timeline va thong tin lien he."
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
