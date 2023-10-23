import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/esm/types';

export async function queryDatoCMS<TResult = unknown, TVariables = Record<string, any>>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables,
  isDraft?: boolean,
): Promise<TResult> {
  const headers: GraphQLClientRequestHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Exclude-Invalid': 'true',
    Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  if (isDraft) headers['X-Include-Drafts'] = 'true';

  if (process.env.NEXT_DATOCMS_ENVIRONMENT) headers['X-Environment'] = process.env.NEXT_DATOCMS_ENVIRONMENT;

  const { data } = await (
    await fetch('https://graphql.datocms.com/', {
      cache: 'force-cache',
      next: { tags: ['datocms'] },
      method: 'POST',
      headers,
      body: JSON.stringify({ query: print(document), variables }),
    })
  ).json();

  return data;
}
