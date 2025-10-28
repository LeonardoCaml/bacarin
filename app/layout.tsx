import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from "@/components/google-tag-manager";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000") as string;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Bacarin - Centro Automotivo",
  title: {
    default: "Bacarin - Centro Automotivou",
    template: "%s | Bacarin - Centro Automotivo",
  },
  description:
    "A Bacarin Auto Center é referência em manutenção automotiva, unindo tradição, qualidade e honestidade.",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Bacarin - Centro Automotivo",
    title: "Bacarin - Centro Automotivo",
    description:
      "A Bacarin Auto Center é referência em manutenção automotiva, unindo tradição, qualidade e honestidade.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bacarin - Centro Automotivo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bacarin - Centro Automotivo",
    description:
      "A Bacarin Auto Center é referência em manutenção automotiva, unindo tradição, qualidade e honestidade.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: ["/favicon.ico"],
  },
};

export const viewport: Viewport = {
  themeColor: "#866df5ff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bacarin - Centro Automotivo",
    url: siteUrl,
    logo: `${siteUrl}/og-image.png`,
    image: `${siteUrl}/og-image.png`,
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Bacarin - Centro Automotivo",
    url: siteUrl,
    image: `${siteUrl}/logo.png`,
    description:
      "A Bacarin Auto Center é referência em manutenção automotiva, unindo tradição, qualidade e honestidade.",
    telephone: "+5544998428371",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Paranavaí",
      addressLocality: "Paraná",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.082533,
      longitude: -52.462244,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "12:00",
      },
    ],
    priceRange: "$$",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Manutenção de motores flex e diesel",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Câmbio automático" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Suspensão e freios" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Troca de óleo e câmbio automático",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Óleo de motor" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "alinhamento/balanceamento" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Cambagem" },
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        <GoogleTagManager gtmId="GTM-TJV2S238" />
      </head>
      <body
        className={`${inter.className} font-sans antialiased overflow-x-hidden`}
      >
        <GoogleTagManagerNoScript gtmId="GTM-TJV2S238" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
