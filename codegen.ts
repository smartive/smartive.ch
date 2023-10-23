import { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: {
    'https://graphql.datocms.com': {
      headers: {
        Authorization: process.env.NEXT_DATOCMS_API_TOKEN ?? '',
        'X-Exclude-Invalid': 'true',
      },
    },
  },
  documents: ['./graphql/**/*.graphql'],
  generates: {
    'graphql/generated.ts': {
      config: {
        strictScalars: true,
        scalars: {
          BooleanType: 'boolean',
          CustomData: 'Record<string, unknown>',
          Date: 'string',
          DateTime: 'string',
          FloatType: 'number',
          IntType: 'number',
          ItemId: 'string',
          JsonField: 'unknown',
          MetaTagAttributes: 'Record<string, string>',
          UploadId: 'string',
        },
      },
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
  },
};

export default config;
