import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Security headers
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        // Stricter headers for the demo API route
        source: '/api/demo',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://esinnov.com https://www.esinnov.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
