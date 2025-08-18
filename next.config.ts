import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "futuramaapi.com" },
    ],
  },
};

export default nextConfig;
