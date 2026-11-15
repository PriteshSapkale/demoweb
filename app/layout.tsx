import type { Metadata } from "next";
import "./globals.css";``
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "KRAFTLINE Packaging | Corrugated Boxes & FMCG Packaging",
    template: "%s | KRAFTLINE Packaging"
  },
  description: site.description,
  keywords: [
    "corrugated box manufacturer Maharashtra",
    "FMCG corrugated packaging",
    "3 ply corrugated boxes",
    "5 ply corrugated boxes",
    "custom corrugated boxes India",
    "corrugated packaging supplier"
  ],
  openGraph: {
    title: "KRAFTLINE Packaging | Built to Protect. Designed to Deliver.",
    description: site.description,
    type: "website",
    locale: "en_IN",
    siteName: "KRAFTLINE Packaging"
  },
  twitter: { card: "summary_large_image", title: "KRAFTLINE Packaging", description: site.description },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
