import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarsBg from "@/components/StarsBg";

export const metadata: Metadata = {
  title: {
    default: "Free Math Games for Kids | 50 Fun Online Math Games",
    template: "%s | MathGames for Kids",
  },
  description:
    "Play 50 free online math games for kids aged 4–12! Number bonds, addition, multiplication, fractions, geometry, algebra, and more. No sign-up needed — start playing instantly!",
  keywords: [
    "free math games for kids",
    "kids math games online",
    "math games for kindergarten",
    "elementary math games",
    "number bonds games",
    "addition games for kids",
    "multiplication games",
    "fraction games for kids",
    "math practice games",
    "subtraction games",
    "division games for kids",
    "geometry games",
    "odd and even games",
    "rounding numbers game",
    "mental maths games",
    "times tables games",
    "math games grade 1",
    "math games grade 2",
    "math games grade 3",
    "math games grade 4",
    "math games grade 5",
    "free educational games kids",
    "math games no login",
  ],
  authors: [{ name: "Whitfield Glenn Raymond" }],
  creator: "Whitfield Glenn Raymond",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mathgamesforkids.xyz",
    siteName: "MathGames for Kids",
    title: "Free Math Games for Kids | 50 Fun Online Math Games",
    description:
      "50 free online math games for kids aged 4–12! Number bonds, multiplication, fractions, geometry, algebra and more — completely free, no sign-up.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Math Games for Kids — 50 Games, No Sign-Up",
    description: "50 free online math games for kids aged 4–12! Play instantly on any device.",
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
  alternates: {
    canonical: "https://www.mathgamesforkids.xyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7805947587874043"
          crossOrigin="anonymous"
        />
        {/* ── Google Analytics GA4 ── Replace G-XXXXXXXXXX with your real Measurement ID ── */}
        {/* Sign up free at analytics.google.com → Admin → Create Property → copy G-XXXXXXXX */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J663F462XY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J663F462XY');
          `}
        </Script>
        {/* Global SEO Schemas */}
        <Script id="schema-website" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MathGames for Kids",
              "url": "https://www.mathgamesforkids.xyz",
              "description": "50 free online math games for kids aged 4–12!",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.mathgamesforkids.xyz/games?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MathGames for Kids",
              "url": "https://www.mathgamesforkids.xyz",
              "logo": "https://www.mathgamesforkids.xyz/icon.png",
              "sameAs": []
            }
          `}
        </Script>
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh", position: "relative" }}>
        <StarsBg />
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
