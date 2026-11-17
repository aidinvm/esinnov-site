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
    "EcoSync Innovations Inc. (ESInnov) | Industrial Operations, Program Delivery & Applied Systems Advisory",
  description:
    "Western Canadian industrial operations and applied systems advisory deploying embedded program delivery, supply chain turnaround, and sovereign workflow automation across Alberta and British Columbia.",
  keywords: [
    "EcoSync Innovations Inc.",
    "ESInnov",
    "Industrial Operations Advisory Western Canada",
    "Program Delivery Calgary",
    "Supply Chain 3PL Trade Compliance Turnaround",
    "NPI Stage-Gate Governance",
    "Lean Six Sigma Black Belt",
    "Sovereign Workflow Automation",
    "Applied Systems Advisory",
    "EGBC",
    "Alberta British Columbia Industrial Consulting",
  ],
  authors: [{ name: "EcoSync Innovations Inc." }],
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
      "EcoSync Innovations Inc. (ESInnov) | Industrial Operations, Program Delivery & Applied Systems Advisory",
    description:
      "Western Canadian industrial operations and applied systems advisory deploying embedded program delivery, supply chain turnaround, and sovereign workflow automation across Alberta and British Columbia.",
    siteName: "EcoSync Innovations Inc. (ESInnov)",
    type: "website",
    locale: "en_CA",
    url: "https://esinnov.com",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "EcoSync Innovations Inc. (ESInnov) | Industrial Operations, Program Delivery & Applied Systems Advisory",
    description:
      "Embedded operational leadership and deterministic workflow systems for complex industries across Western Canada.",
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
    "Western Canadian industrial operations and applied systems advisory deploying embedded program delivery, supply chain turnaround, and sovereign workflow automation across Alberta and British Columbia.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "Alberta",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Alberta" },
    { "@type": "AdministrativeArea", name: "British Columbia" },
  ],
  sameAs: ["https://www.linkedin.com/company/ecosync-innovations/"],
  knowsAbout: [
    "New Product Introduction (NPI) & Technical Program Delivery",
    "Supply Chain, 3PL & Trade Compliance Turnaround",
    "Operational Excellence & Regulatory Governance",
    "Deterministic Workflow Automation",
    "Lean Six Sigma Black Belt",
    "ISO 9001 Quality Management Systems",
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://esinnov.com/#aidinvm",
  name: "Aidin VM",
  jobTitle: "Principal Consultant",
  description:
    "Principal Consultant at EcoSync Innovations Inc. (ESInnov), industrial systems practitioner, Lean Six Sigma Black Belt, and certified Product Management professional with over a decade of senior operations, supply chain, and technical program leadership across North America and Asia.",
  url: "https://esinnov.com/#about-governance",
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
      name: "Who leads the advisory practice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The practice is led by Principal Consultant Aidin VM, an experienced industrial systems practitioner, Lean Six Sigma Black Belt, and certified Product Management professional with over a decade of senior operations, supply chain, and technical program leadership across North America and Asia.",
      },
    },
    {
      "@type": "Question",
      name: "How does ESInnov partner with staffing and consulting firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We operate as a dedicated corp-to-corp delivery vendor under prime partner Master Services Agreements (MSAs), supplying immediate senior operational and program leadership without competing for permanent placement fees.",
      },
    },
    {
      "@type": "Question",
      name: "What professional and corporate credentials does ESInnov maintain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EcoSync Innovations Inc. is an incorporated Canadian entity maintaining active corporate registration in Alberta, professional registration with Engineers and Geoscientists British Columbia (EGBC), and commercial general liability and professional coverage tailored for enterprise vendor onboarding.",
      },
    },
    {
      "@type": "Question",
      name: "How is client data security and confidentiality maintained?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Embedded mandates and workflow automations run exclusively within the client's existing ERP, PLM, and cloud tenant under strict NDA governance. Zero proprietary BOMs, pricing schedules, or operational records leave client systems.",
      },
    },
    {
      "@type": "Question",
      name: "How are engagements commercially structured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enterprise and staffing-partner mandates are structured as fixed-term corp-to-corp engagements (typically 3–6 months). Applied workflow automation engagements are delivered on fixed-scope milestones tied to measurable operational outcomes.",
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
