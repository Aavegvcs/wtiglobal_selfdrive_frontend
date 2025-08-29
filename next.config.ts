import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['media.cdn-jaguarlandrover.com', "drive.yango.com", "img.freepik.com", "test.wticabs.com" , "www.wticabs.com"], // external image host

  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
