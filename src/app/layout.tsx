import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechStrip from "@/components/TechStrip";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ESInnov | Risk Intelligence Authority",
  description:
    "Institutional-grade feasibility at the speed of AI. We decode complex zoning and entitlement data to deliver definitive Go/No-Go intelligence for land acquisition.",
  keywords: [
    "ESInnov",
    "Zone IQ",
    "real estate intelligence",
    "feasibility analysis",
    "entitlement risk",
    "land acquisition",
    "due diligence automation",
    "capital certainty",
  ],
  openGraph: {
    title: "ESInnov | Risk Intelligence Authority",
    description: "We decode complex zoning and entitlement data to deliver definitive Go/No-Go intelligence.",
    siteName: "ESInnov",
    type: "website",
  },
};

// Organization Schema JSON-LD for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ESInnov",
  "legalName": "EcoSync Innovations Inc.",
  "url": "https://esinnov.com",
  "logo": "https://esinnov.com/esinnov-logo.png",
  "description": "Risk Intelligence Authority. Institutional-grade feasibility analysis using Zone IQ™ algorithmic workflows.",
  "sameAs": [
    "https://www.linkedin.com/company/ecosync-innovations/"
  ],
  "knowsAbout": [
    "Real Estate Feasibility Analysis",
    "Entitlement Risk Assessment",
    "Land Acquisition Intelligence",
    "Zoning Analysis",
    "Due Diligence Automation"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <TechStrip />
        <Footer />
      </body>
    </html>
  );
}

