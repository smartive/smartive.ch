import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/esm/types';

type Variables = {
  slug?: string;
  tagId?: string;
};

export async function queryDatoCMS<TResult = unknown>(
  document: TypedDocumentNode<TResult, Variables>,
  variables?: Variables,
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

  let tags = ['datocms'];

  if (variables && variables.slug) {
    tags = [...tags, variables.slug];
  }

  const response = await fetch('https://graphql.datocms.com/', {
    cache: isDraft ? 'no-cache' : 'force-cache',
    next: { tags },
    method: 'POST',
    headers,
    body: JSON.stringify({ query: print(document), variables }),
  });

  if (!response.ok) throw new Error(`DatoCMS request failed: ${response.statusText}`);

  const { data } = await response.json();

  return data;
}
