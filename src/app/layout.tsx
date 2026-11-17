import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "EcoSync Innovations Inc. (ESInnov) — Industrial Operations, Program Delivery & Back-Office Advisory | Calgary",
  description:
    "Calgary-based operations and industrial systems boutique. Deploying embedded 3–6 month NPI and operational turnaround leadership via prime staffing partners, alongside fixed-fee back-office execution for regional contractors.",
  keywords: [
    "EcoSync Innovations Inc.",
    "ESInnov",
    "Industrial Operations Consulting Calgary",
    "NPI Program Delivery",
    "Operations Turnaround",
    "Interim Supply Chain Leadership",
    "Lean Six Sigma Calgary",
    "ISNetworld Compliance Calgary",
    "Avetta Compliance",
    "Quantity Takeoff Estimating Calgary",
    "Aidin VM",
    "Industrial Systems Engineering",
  ],
  authors: [{ name: "Aidin VM", url: "https://linkedin.com/in/aidinvm" }],
  creator: "EcoSync Innovations Inc.",
  publisher: "EcoSync Innovations Inc.",
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
    title:
      "EcoSync Innovations Inc. (ESInnov) — Industrial Operations, Program Delivery & Back-Office Advisory | Calgary",
    description:
      "Calgary-based operations and industrial systems boutique. Deploying embedded 3–6 month NPI and operational turnaround leadership via prime staffing partners, alongside fixed-fee back-office execution for regional contractors.",
    siteName: "EcoSync Innovations Inc. (ESInnov)",
    type: "website",
    locale: "en_CA",
    url: "https://esinnov.com",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "EcoSync Innovations Inc. (ESInnov) — Industrial Operations & Program Delivery | Calgary",
    description:
      "Embedded 3–6 month NPI, program delivery, and operational turnaround mandates alongside productized back-office execution for regional contractors.",
  },
  alternates: {
    canonical: "https://esinnov.com",
  },
  category: "Business & Industrial Advisory",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://esinnov.com/#organization",
  name: "EcoSync Innovations Inc. (ESInnov)",
  legalName: "EcoSync Innovations Inc.",
  alternateName: ["ESInnov", "EcoSync Innovations"],
  url: "https://esinnov.com",
  logo: {
    "@type": "ImageObject",
    url: "https://esinnov.com/logo.png",
    width: 512,
    height: 512,
  },
  description:
    "Calgary-based operations and industrial systems boutique deploying senior operational leadership for 3–6 month NPI, program delivery, and operational turnaround mandates alongside productized back-office execution for regional contractors.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "Alberta",
    addressCountry: "CA",
  },
  sameAs: [
    "https://www.linkedin.com/company/ecosync-innovations/",
    "https://linkedin.com/in/aidinvm",
  ],
  knowsAbout: [
    "New Product Introduction (NPI) Governance",
    "Industrial Operations Turnaround",
    "Supply Chain & 3PL Management",
    "Lean Six Sigma Process Optimization",
    "Enterprise IoT Program Delivery",
    "Commercial Contractor Estimating & Compliance",
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://esinnov.com/#aidinvm",
  name: "Aidin VM",
  jobTitle: "Principal Consultant",
  description:
    "Principal Consultant at EcoSync Innovations Inc. (ESInnov), MSc Industrial Systems Engineering, with 10+ years of senior operations and program delivery leadership across power electronics, enterprise IoT, steel, pharmaceutical distribution, and automotive manufacturing.",
  url: "https://esinnov.com/#about",
  sameAs: ["https://linkedin.com/in/aidinvm"],
  worksFor: {
    "@type": "Organization",
    "@id": "https://esinnov.com/#organization",
    name: "EcoSync Innovations Inc.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What mandates does ESInnov accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in 3–6 month embedded industrial mandates—specifically New Product Introduction (NPI), program delivery, supply chain stabilization, and Lean Six Sigma operational turnarounds—alongside fixed-fee back-office services for regional contractors.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can ESInnov deploy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Immediate capacity is available in Calgary (hybrid) with travel capability across Western Canada. Corporate vendor onboarding with staffing partners is completed within 24–48 hours.",
      },
    },
    {
      "@type": "Question",
      name: "How is confidential operational data handled?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For embedded industrial engagements, all work is performed exclusively inside the client's enterprise environment (SAP, NetSuite, PLM) under the prime staffing partner's NDA. Zero proprietary data leaves client systems.",
      },
    },
    {
      "@type": "Question",
      name: "Who leads the consulting practice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The practice is led by Principal Consultant Aidin VM, an Industrial Systems Engineer (MSc) with over a decade of senior operations and program management leadership across power electronics, IoT, steel, pharma, and automotive sectors.",
      },
    },
    {
      "@type": "Question",
      name: "Does ESInnov compete with staffing agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We actively partner with established staffing and consulting firms, operating as a reliable corp-to-corp delivery vendor under their existing client MSAs.",
      },
    },
    {
      "@type": "Question",
      name: "How are commercial terms structured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Embedded industrial contracts are billed corp-to-corp through prime staffing partners or direct corporate agreements. Contractor back-office deliverables are billed on transparent, fixed-scope project or monthly retainers.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased overflow-x-hidden bg-white text-slate-950`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="pt-24 sm:pt-[100px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
