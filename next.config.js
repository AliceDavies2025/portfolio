/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove GitHub Pages specific settings and optimize for Vercel
  images: {
    domains: ['localhost'],
    // Replace unoptimized with proper image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
