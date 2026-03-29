import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarsBg from "@/components/StarsBg";

export const metadata: Metadata = {
  title: {
    default: "Free Math Games for Kids | Fun Educational Math Games Online",
    template: "%s | MathGames for Kids",
  },
  description:
    "Play 24 free online math games for kids aged 4–12! Covering addition, subtraction, multiplication, division, fractions, geometry, and more. No download needed — start playing now!",
  keywords: [
    "free math games for kids",
    "kids math games online",
    "elementary math games",
    "math practice games",
    "addition games",
    "multiplication games",
    "fraction games",
    "kindergarten math",
  ],
  authors: [{ name: "MathGames for Kids" }],
  creator: "MathGames for Kids",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mathgamesforkids.com",
    siteName: "MathGames for Kids",
    title: "Free Math Games for Kids | Fun Educational Math Games Online",
    description:
      "Play 24 free online math games for kids! Addition, multiplication, fractions, geometry and more — all completely free.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Math Games for Kids",
    description: "24 free online math games for kids aged 4–12!",
  },
  robots: {
    index: true,
    follow: true,
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
