/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  // Compiler options for smaller bundles
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Modern JS output (removes unnecessary polyfills)
  transpilePackages: [],
};

export default nextConfig;
