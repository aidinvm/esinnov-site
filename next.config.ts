import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/access", destination: "/#contact", permanent: true },
      { source: "/advisory", destination: "/#services", permanent: true },
      { source: "/cases", destination: "/#proof", permanent: true },
      { source: "/faq", destination: "/#contact", permanent: true },
      { source: "/methodology", destination: "/#engagement-model", permanent: true },
      { source: "/protocols", destination: "/#ai-capability", permanent: true },
      { source: "/research", destination: "/#ai-capability", permanent: true },
      { source: "/zone-iq-demo", destination: "/", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
