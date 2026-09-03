import type { Metadata, Viewport } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";
import AttributionTracker from "@/components/AttributionTracker";
import MetaPixelTracker from "@/components/MetaPixelTracker";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5B7DB1",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kansaikarategoldcoast.com.au"),
  title: "Kansai Karate Gold Coast | Kids, Teens & Adult Karate in Upper Coomera",
  description: "Traditional Japanese karate for all ages in Upper Coomera, QLD. Cubs (3-4), Little Lions (5-6), Juniors (7-12), Teens & Adults. Book your free trial class today.",
  openGraph: {
    type: "website",
    siteName: "Kansai Karate Gold Coast",
    locale: "en_AU",
    url: "https://kansaikarategoldcoast.com.au",
    title: "Kansai Karate Gold Coast | Kids, Teens & Adult Karate in Upper Coomera",
    description: "Traditional Japanese karate for all ages in Upper Coomera, QLD. Cubs (3-4), Little Lions (5-6), Juniors (7-12), Teens & Adults. Book your free trial class today.",
    images: [
      {
        url: "https://kansaikarategoldcoast.com.au/images/og-social.jpg",
        width: 960,
        height: 640,
        alt: "Kids sparring in karate class at Kansai Karate Gold Coast, Upper Coomera",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kansai Karate Gold Coast | Kids, Teens & Adult Karate in Upper Coomera",
    description: "Traditional Japanese karate for all ages in Upper Coomera, QLD. Cubs (3-4), Little Lions (5-6), Juniors (7-12), Teens & Adults. Book your free trial class today.",
    images: ["https://kansaikarategoldcoast.com.au/images/og-social.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["SportsActivityLocation", "LocalBusiness"],
  "name": "Kansai Karate Gold Coast",
  "description": "Traditional Japanese karate for kids, teens and adults in Upper Coomera, Gold Coast QLD. Programs for all ages: Cubs (3-4), Little Lions (5-6), Juniors (7-12), Teens (13-18) and Adults.",
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
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "11:45" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "39",
    "bestRating": "5"
  },
  "image": "https://kansaikarategoldcoast.com.au/images/KKA-Logo-Trans-background.png",
  "email": "info@kansaikarategoldcoast.com.au",
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
  "url": "https://kansaikarategoldcoast.com.au"
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kansai Karate Gold Coast",
  "url": "https://kansaikarategoldcoast.com.au",
  "logo": "https://kansaikarategoldcoast.com.au/images/KKA-Logo-Trans-background.png",
  "email": "info@kansaikarategoldcoast.com.au",
  "telephone": "+61489265960",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Unit 3 / 2 Sierra Place",
    "addressLocality": "Upper Coomera",
    "addressRegion": "QLD",
    "postalCode": "4209",
    "addressCountry": "AU"
  },
  "sameAs": [
    "https://www.facebook.com/KansaiKarateUpperCoomera",
    "https://www.instagram.com/kansaikarateuppercoomera",
    "https://www.youtube.com/@kansaikarategoldcoast"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${oswald.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      {/* Google Analytics + Google Ads */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-4ETZ1LKSHH" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4ETZ1LKSHH');
        gtag('config', 'AW-880936617');
      `}</Script>

      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1568554013385972');
        fbq('track', 'PageView');
      `}</Script>

      <body className="min-h-full flex flex-col">
        {/* Meta Pixel noscript fallback */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1568554013385972&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <ClientLayout>
          <AttributionTracker />
          <MetaPixelTracker />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
