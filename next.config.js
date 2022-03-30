const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    // Don't run linting during build since on CI we manually run the lint command
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com', 's3.us-west-2.amazonaws.com', 'notion.so', 'www.notion.so'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1536], // 1536px is our max container size
  },
});
