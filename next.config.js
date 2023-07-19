const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const URLS = ['vadfan', 'igittbier', 'nüsse-sind-gesund', 'visst', 'grattis', 'liiip', 'agilasfuck', 'failwind'];

module.exports = withBundleAnalyzer({
  experimental: {
    scrollRestoration: true,
  },
  reactStrictMode: true,
  eslint: {
    // Don't run linting during build since on CI we manually run the lint command
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['mermaid', 'dayjs'],
  images: {
    domains: [
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com',
      'notion.so',
      'www.notion.so',
      'images.prismic.io',
      'smartive.cdn.prismic.io',
      'gravatar.com',
      'www.gravatar.com',
      'smartive-10.rokka.io',
      's3-us-west-2.amazonaws.com',
      'res.cloudinary.com',
      ...Array.from({ length: 10 }, (_, i) => i + 1).map((n) => `lh${n}.googleusercontent.com`),
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1536], // 1536px is our max container size
  },
  async redirects() {
    return [
      {
        source: '/projekte/zubi',
        destination: '/projekte/zubi-mentoring',
        permanent: true,
      },
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
      ...URLS.map((url) => ({
        source: '/',
        destination: `https://smartive.ch/${url}`,
        permanent: true,
        has: [
          {
            type: 'host',
            value: `${url}.ch`,
          },
        ],
      })),
    ];
  },
});
