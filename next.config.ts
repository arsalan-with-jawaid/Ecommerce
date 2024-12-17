import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Next.js configuration options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Correct syntax
        hostname: 'images.pexels.com', // Correct hostname
      },
      {
        protocol: 'http',
        hostname: '*.google.com',
      },
    ],
  },
};

export default nextConfig;
