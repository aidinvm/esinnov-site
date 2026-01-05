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
  title: "ESInnov | AI Automation for Business Operations",
  description:
    "ESInnov builds practical AI systems that automate complex business operations. Document processing, compliance workflows, and decision automation for real estate, manufacturing, and professional services.",
  keywords: [
    "ESInnov",
    "EcoSync Innovations",
    "AI automation",
    "business process automation",
    "document processing AI",
    "workflow automation",
    "AI for business",
    "enterprise AI",
    "multi-agent systems",
    "AI consulting",
    "Calgary AI company",
    "Aidin VM",
  ],
  authors: [{ name: "Aidin VM", url: "https://linkedin.com/in/aidinvm" }],
  creator: "EcoSync Innovations Inc.",
  publisher: "ESInnov",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ESInnov | AI Automation for Business Operations",
    description: "Practical AI systems that automate complex business operations. Save time, reduce costs, and get more done.",
    siteName: "ESInnov",
    type: "website",
    locale: "en_US",
    url: "https://esinnov.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESInnov | AI Automation for Business Operations",
    description: "Practical AI systems that automate complex business operations.",
  },
  alternates: {
    canonical: "https://esinnov.com",
  },
  category: "Technology",
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://esinnov.com/#organization",
  "name": "ESInnov",
  "legalName": "EcoSync Innovations Inc.",
  "alternateName": ["EcoSync Innovations", "ESI", "EcoSync"],
  "url": "https://esinnov.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://esinnov.com/logo.png",
    "width": 512,
    "height": 512
  },
  "description": "ESInnov builds practical AI systems that automate complex business operations including document processing, compliance workflows, and decision automation.",
  "foundingDate": "2024",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Calgary",
    "addressRegion": "Alberta",
    "addressCountry": "CA"
  },
  "sameAs": [
    "https://www.linkedin.com/company/ecosync-innovations/",
    "https://linkedin.com/in/aidinvm"
  ],
  "knowsAbout": [
    "AI Automation",
    "Business Process Automation",
    "Document Processing",
    "Workflow Automation",
    "Multi-Agent AI Systems",
    "Enterprise AI Solutions",
    "Real Estate Technology",
    "Manufacturing Automation"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Automation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Feasibility Study",
          "description": "48-hour analysis of your automation potential with clear recommendations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Agent Pilot",
          "description": "14-day working prototype with full monitoring"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Production Deployment",
          "description": "Full-scale AI automation implementation with ongoing support"
        }
      }
    ]
  }
};

// Person Schema for Aidin VM
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://esinnov.com/#aidinvm",
  "name": "Aidin VM",
  "givenName": "Aidin",
  "familyName": "VM",
  "jobTitle": "Principal Consultant & R&D Lead",
  "description": "Principal Consultant directing R&D operations at ESInnov, bridging AI architecture and industrial reality with expertise in NPI, IoT systems, and Lean Six Sigma.",
  "url": "https://esinnov.com/about",
  "sameAs": [
    "https://linkedin.com/in/aidinvm"
  ],
  "worksFor": {
    "@type": "Organization",
    "@id": "https://esinnov.com/#organization",
    "name": "EcoSync Innovations Inc."
  },
  "knowsAbout": [
    "AI Systems Architecture",
    "Multi-Agent Systems",
    "New Product Introduction (NPI)",
    "IoT Systems",
    "Lean Six Sigma",
    "Automotive Manufacturing",
    "Business Process Automation"
  ],
  "alumniOf": {
    "@type": "Organization",
    "name": "EcoSync Innovations Inc."
  }
};

// WebSite Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://esinnov.com/#website",
  "name": "ESInnov",
  "url": "https://esinnov.com",
  "description": "AI Automation for Business Operations",
  "publisher": {
    "@id": "https://esinnov.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://esinnov.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// FAQ Schema for AEO (Answer Engine Optimization)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does ESInnov automate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ESInnov automates repetitive, time-consuming business operations including document review, data extraction, compliance checks, report generation, and multi-step approval workflows."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I see results from AI automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You'll see a working prototype within 14 days. Most clients experience immediate time savings, often reducing hours of manual work to minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Is my company data safe with ESInnov?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Your data stays on isolated infrastructure set up specifically for you. ESInnov never mixes client data or uses it to train AI models. You retain full ownership."
      }
    },
    {
      "@type": "Question",
      "name": "Who is Aidin VM at EcoSync Innovations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aidin VM is the Principal Consultant and R&D Lead at ESInnov (EcoSync Innovations). He directs R&D operations, bridging AI architecture with industrial reality, with expertise in NPI, IoT systems, and Lean Six Sigma."
      }
    }
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
        <link rel="canonical" href="https://esinnov.com" />
        <meta name="geo.region" content="CA-AB" />
        <meta name="geo.placename" content="Calgary" />
        <meta name="geo.position" content="51.0447;-114.0719" />
        <meta name="ICBM" content="51.0447, -114.0719" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
