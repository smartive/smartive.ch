import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/esm/types';
import { draftMode } from 'next/headers';

export async function queryDatoCMS<TResult = unknown, TVariables = Record<string, unknown>>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables,
): Promise<TResult> {
  const { isEnabled } = draftMode();

  const headers: GraphQLClientRequestHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Exclude-Invalid': 'true',
    Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  if (isEnabled) headers['X-Include-Drafts'] = 'true';

  if (process.env.NEXT_DATOCMS_ENVIRONMENT) headers['X-Environment'] = process.env.NEXT_DATOCMS_ENVIRONMENT;

  const response = await fetch('https://graphql.datocms.com/', {
    cache: isEnabled ? 'no-cache' : 'force-cache',
    next: { tags: ['datocms'] },
    method: 'POST',
    headers,
    body: JSON.stringify({ query: print(document), variables }),
  });

  if (!response.ok) throw new Error(`DatoCMS request failed: ${response.statusText}`);

  const { data } = await response.json();

  return data;
}
