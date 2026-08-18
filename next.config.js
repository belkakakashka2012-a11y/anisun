/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  images: {
    remotePatterns: [
      { hostname: 'shikimori.one' },
      { hostname: 'myanimelist.net' },
      { hostname: 'anilist.co' },
      { hostname: 'img.youtube.com' },
    ],
  },
};

module.exports = nextConfig;
