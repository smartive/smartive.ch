const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  experimental: {
    scrollRestoration: true,
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
  reactStrictMode: true,
  eslint: {
    // Don't run linting during build since on CI we manually run the lint command
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com',
      'notion.so',
      'www.notion.so',
      'images.prismic.io',
      'smartive.cdn.prismic.io',
      'smartive-blog.ghost.io',
      'gravatar.com',
      'www.gravatar.com',
      'smartive-10.rokka.io',
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
    ];
  },
});
