import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost'], // tambahkan domain gambar Anda
  },
  /* config options here */
};

export default nextConfig;