import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aidin Vahidmohammadi | Principal Consultant & R&D Lead | ESInnov",
    description: "Strategic Architect of the Zone IQ™ engine. Aidin Vahidmohammadi (M.Sc. Industrial Systems Engineering) leads the Intelligence Lab at ESInnov, specializing in Agentic AI and adversarial feasibility for real estate assets.",
    keywords: "Aidin Vahidmohammadi, ESInnov, Real Estate Intelligence, Agentic AI, Industrial Engineering, Zone IQ, EcoSync Innovations, Feasibility Audit, Calgary Real Estate AI, BC Bill 44/47 Arbitrage",
    alternates: {
        canonical: "https://esinnov.com/about",
    },
    openGraph: {
        type: "profile",
        title: "Aidin Vahidmohammadi | Strategic Architect of Zone IQ™",
        description: "Principal Consultant at ESInnov. Bridging the gap between Industrial Engineering and Real Estate Intelligence.",
        url: "https://esinnov.com/about",
        // images: ["https://esinnov.com/images/aidin-vm-professional.jpg"], // Uncomment when image is ready
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
