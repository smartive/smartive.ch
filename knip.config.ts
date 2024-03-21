import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: [
    '**/graphql/generated.ts',

    // knip does not understand that the following files are used in the next.config.js
    'src/utils/image-loader.ts',

    // knip does not understand that the following files are used from dato
    'src/app/(site)/api/draft/preview-links/route.tsx',
    'src/app/(site)/api/draft/enable/route.tsx',
    'src/app/(site)/api/draft/disable/route.tsx',
    'src/app/(site)/api/revalidateCache/route.tsx',

    // others
    'public/kube.js',

    'src/app/(site)/robots.ts',
    'src/app/(site)/sitemap.ts',

    // because it doesn't know blobs/v2/animate
    'src/components/blobs/blob.tsx',
  ],
  ignoreDependencies: [
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'datocms-structured-text-utils',
    'three-stdlib',
    'graphql',
    '@next/env',
    'sharp',
  ],
  ignoreBinaries: ['vercel'],
};

export default config;
