const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  future: {
    webpack5: true,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1536], // 1536px is our max container size
  },
});
