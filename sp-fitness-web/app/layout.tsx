import type { Metadata } from "next";
import { Jockey_One, Lato } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const jockeyOne = Jockey_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jockey-one",
  display: "swap",
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SP Fitness by Sebastian Pfau – Dein Trainer für Outdoor Kurse, Personal Training & Reha Sport in Schwetzingen",
  description: "Entdecke SP Fitness by Sebastian Pfau in Schwetzingen Hirschacker: Personal Training, Outdoor Kurse, Kleingruppentraining, Firmenfitness und Reha Sport. Individuelle Betreuung für deine Fitnessziele – jetzt informieren!",
  keywords: "SP Fitness, Sebastian Pfau, Personal Training Schwetzingen, Outdoor Kurse Schwetzingen, Kleingruppen Training, Firmen Fitness Schwetzingen, Reha Sport, Fitness Studio Hirschacker, Fitness Schwetzingen, Gesundheitstraining Schwetzingen",
  authors: [{ name: "Sebastian Pfau" }],
  robots: "index, follow",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "SP Fitness by Sebastian Pfau in Schwetzingen",
    description: "SP Fitness by Sebastian Pfau bietet Outdoor Kurse, Personal Training, Kleingruppen Training, Firmenfitness und Reha Sport in Schwetzingen Hirschacker.",
    url: "https://www.sp-fitness.de/",
    type: "website",
    images: [
      {
        url: "https://www.sp-fitness.de/images/og-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SP Fitness by Sebastian Pfau in Schwetzingen",
    description: "SP Fitness by Sebastian Pfau bietet Outdoor Kurse, Personal Training, Kleingruppen Training, Firmenfitness und Reha Sport in Schwetzingen Hirschacker.",
    images: ["https://www.sp-fitness.de/images/twitter-card.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${jockeyOne.variable} ${lato.variable}`}>
      <head>
        <Script src="https://kit.fontawesome.com/2b3eb46296.js" crossOrigin="anonymous" strategy="afterInteractive" />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "SP Fitness by Sebastian Pfau",
                "description": "SP Fitness by Sebastian Pfau bietet Outdoor Kurse, Personal Training, Kleingruppen Training, Firmenfitness und Reha Sport in Schwetzingen Hirschacker.",
                "url": "https://www.spfitness.de", 
                "telephone": "+49 176 96252517", 
                "email": "info@spfitness.de",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Marktplatz 28a",
                  "addressLocality": "Schwetzingen",
                  "postalCode": "68723",
                  "addressCountry": "DE"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 49.4072704, 
                  "longitude": 8.5508204
                },
                "openingHours": [
                  "Mo-Fr 08:00-20:00",
                  "Sa 09:00-14:00"
                ],
                "sameAs": [
                  "https://www.instagram.com/spfitness"
                ],
                "offers": {
                  "@type": "Offer",
                  "name": "Personal Training"
                }
              }),
            }}
          />
      </head>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
