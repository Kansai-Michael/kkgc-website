import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kansai Karate Gold Coast | Kids, Teens & Adult Karate in Upper Coomera",
  description: "Traditional Japanese karate for all ages in Upper Coomera, QLD. Cubs (3-4), Little Lions (5-7), Juniors (8-12), Teens & Adults. Book your free trial class today.",
  keywords: "karate upper coomera, kids karate gold coast, martial arts upper coomera, karate classes gold coast",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Kansai Karate Gold Coast",
  "description": "Traditional Japanese karate for kids, teens and adults in Upper Coomera, Gold Coast QLD. Programs for all ages: Cubs (3-4), Little Lions (5-7), Juniors (8-12), Teens (13-18) and Adults.",
  "url": "https://kansaikarategoldcoast.com.au",
  "telephone": "+61489265960",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Unit 3 / 2 Sierra Place",
    "addressLocality": "Upper Coomera",
    "addressRegion": "QLD",
    "postalCode": "4209",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -27.8897,
    "longitude": 153.3011
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"], "opens": "16:00", "closes": "20:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "11:30" }
  ],
  "priceRange": "$$",
  "image": "https://kansaikarategoldcoast.com.au/wp-content/uploads/sites/43/2025/02/KKA-Logo-Trans-background.png",
  "sameAs": [
    "https://www.facebook.com/KansaiKarateUpperCoomera",
    "https://www.instagram.com/kansaikarateuppercoomera",
    "https://www.youtube.com/@kansaikarategoldcoast"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Kansai Karate Gold Coast",
  "url": "https://kansaikarategoldcoast.com.au",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://kansaikarategoldcoast.com.au/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ClientLayout>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
