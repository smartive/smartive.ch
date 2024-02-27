const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const domains = [
  'images.unsplash.com',
  'smartive-10.rokka.io',
  'res.cloudinary.com',
  '**.amazonaws.com',
  '**.notion.so',
  '**.gravatar.com',
  '**.datocms-assets.com',
  '**.cloudfront.net',
  ...Array.from({ length: 10 }, (_, i) => i + 1).map((n) => `lh${n}.googleusercontent.com`),
];

module.exports = withBundleAnalyzer({
  experimental: {
    scrollRestoration: true,
  },
  reactStrictMode: true,
  eslint: {
    // Don't run linting during build since on CI we manually run the lint command
    ignoreDuringBuilds: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  transpilePackages: ['mermaid', 'dayjs'],
  images: {
    remotePatterns: [
      ...domains.map((domain) => ({
        protocol: 'https',
        hostname: domain,
      })),
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1536], // 1536px is our max container size
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'blog.smartive.ch',
          },
        ],
        destination: 'https://smartive.ch/blog/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        destination: 'https://smartive.ch/r/schade-schokolade',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'schade-schokolade.ch',
          },
        ],
      },
    ];
  },
});
